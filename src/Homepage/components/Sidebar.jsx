import { motion } from "framer-motion";
import { X } from "lucide-react";
import React from "react";

export default function Sidebar({ isOpen, setIsOpen }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Sidebar with top-down animation */}
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-100%" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="relative w-full max-w-md h-full bg-black shadow-2xl p-6"
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-2 rounded-full bg-purple-600 text-white hover:scale-110 transition"
        >
          <X size={24} />
        </button>

        {/* Links */}
        <ul className="mt-16 space-y-6 text-lg font-semibold text-white">
           <li>
            <a
              href="#Home"
              onClick={() => setIsOpen(false)}
              className="hover:text-purple-400 transition"
            >
              Homepage
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={() => setIsOpen(false)}
              className="hover:text-purple-400 transition"
            >
              Skills
            </a>
          </li>
           <li>
            <a
              href="#works"
              onClick={() => setIsOpen(false)}
              className="hover:text-purple-400 transition"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#achivements"
              onClick={() => setIsOpen(false)}
              className="hover:text-purple-400 transition"
            >
              Achievements
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="hover:text-purple-400 transition"
            >
              Contact
            </a>
          </li>
        </ul>
      </motion.div>
    </div>
  );
}
