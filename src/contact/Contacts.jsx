import React, { useState, useEffect } from "react";

export default function Contacts() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [token, setToken] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // ===== Load reCAPTCHA script dynamically =====
  useEffect(() => {
    const scriptId = "recaptcha-v3-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = `https://www.google.com/recaptcha/api.js?render=${import.meta.env.VITE_RECAPTCHA_SITE_KEY}`;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ===== Generate v3 token =====
    if (!window.grecaptcha) {
      alert("reCAPTCHA not loaded yet");
      return;
    }

    const token = await window.grecaptcha.execute(import.meta.env.VITE_RECAPTCHA_SITE_KEY, { action: "contact_form" });
    setToken(token);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, token }),
      });

      const data = await res.json();
      alert(data.msg);

      if (data.success) {
        setForm({ name: "", email: "", message: "" });
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Try again!");
    }
  };

  return (
    <section className="px-6 md:px-16 py-20 bg-[#0b0b1a] text-white">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div>
          <h2 className="text-5xl font-bold mb-6 leading-tight">
            Let's Work <br /> Together
          </h2>
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-yellow-400 mb-2">Mail</h3>
            <div className="flex items-center gap-3 text-gray-300">
              <span>youremail@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-[#141427] p-8 rounded-2xl shadow-lg">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-4 rounded-lg bg-[#0f0f20] border border-gray-700 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-yellow-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-4 rounded-lg bg-[#0f0f20] border border-gray-700 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-yellow-400"
              required
            />
            <textarea
              name="message"
              placeholder="Type your message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              className="w-full p-4 rounded-lg bg-[#0f0f20] border border-gray-700 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-yellow-400"
              required
            />

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-yellow-500 text-black font-semibold hover:bg-yellow-600 transition"
            >
              Send me a Mail
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

