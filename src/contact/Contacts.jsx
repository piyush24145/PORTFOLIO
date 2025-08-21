import React from "react";
import { Mail } from "lucide-react";

export default function Contacts() {
  return (
    <section className="px-6 md:px-16 py-20 bg-[#0b0b1a] text-white">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
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
              <span>piyushkumar04136@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Right Side (Form) */}
        <div className="bg-[#141427] p-8 rounded-2xl shadow-lg">
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Enter your Name"
              className="w-full p-4 rounded-lg bg-[#0f0f20] border border-gray-700 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-yellow-400"
            />
            <input
              type="email"
              placeholder="Enter your Email"
              className="w-full p-4 rounded-lg bg-[#0f0f20] border border-gray-700 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-yellow-400"
            />
            <textarea
              placeholder="Type your message"
              rows="5"
              className="w-full p-4 rounded-lg bg-[#0f0f20] border border-gray-700 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-yellow-400"
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
