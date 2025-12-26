import React, { useState } from "react";
import { Mail, CheckCircle, XCircle } from "lucide-react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export default function Contacts() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", msg: "" });
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", msg: "" });

    if (!executeRecaptcha) {
      setStatus({ type: "error", msg: "reCAPTCHA not ready" });
      return;
    }

    try {
      const token = await executeRecaptcha("contact_form");

      const res = await fetch(`${import.meta.env.VITE_API_URL}/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, token }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus({ type: "success", msg: data.msg });
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus({ type: "error", msg: data.msg });
      }
    } catch (err) {
      console.error(err);
      setStatus({ type: "error", msg: "Something went wrong. Try again!" });
    }
  };

  return (
    <section className="px-6 md:px-16 py-20 bg-[#0b0b1a] text-white">
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div>
          <h2 className="text-5xl font-bold mb-6 leading-tight">
            Let's Work <br /> Together
          </h2>

          <div className="mt-8">
            <h3 className="text-lg font-semibold text-yellow-400 mb-2">
              Mail
            </h3>
            <div className="flex items-center gap-3 text-gray-300">
              <Mail className="text-yellow-400" />
              <span>youremail@gmail.com</span>
            </div>
          </div>
        </div>

        {/* FORM */}
        <div className="bg-[#141427] p-8 rounded-2xl shadow-lg">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-lg bg-[#0f0f20] border border-gray-700"
            />

            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-lg bg-[#0f0f20] border border-gray-700"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Type your message"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-lg bg-[#0f0f20] border border-gray-700"
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-yellow-500 text-black font-semibold hover:bg-yellow-600"
            >
              Send me a Mail
            </button>
          </form>

          {/* Status Message */}
          {status.msg && (
            <div
              className={`mt-4 flex items-center gap-2 p-3 rounded-lg ${
                status.type === "success"
                  ? "bg-green-500/20 text-green-400"
                  : "bg-red-500/20 text-red-400"
              }`}
            >
              {status.type === "success" ? (
                <CheckCircle className="w-6 h-6" />
              ) : (
                <XCircle className="w-6 h-6" />
              )}
              <span>{status.msg}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}



