import { useState } from "react";
import { X } from "lucide-react";
import { FaLinkedin, FaGithub, FaProductHunt } from "react-icons/fa";
import Sidebar from "./Sidebar";
import React from "react";
import { Link } from "react-scroll";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Sidebar open/close state

  return (
    <>
<nav className="flex justify-between items-center px-6 md:px-12 py-4 border-b border-white/10 animate-shake">
        {/* Left Hamburger (circle button style) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-black shadow-md hover:bg-purple-500 hover:text-white transition"
        >
          {isOpen ? (
            <X size={28} />
          ) : (
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-black"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
            </div>
          )}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-base font-medium">
          <li>
            <a href="#home" className="hover:text-purple-400">
              Home
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-purple-400">
              Skills
            </a>
          </li>
          <li>
            <a href="#works" className="hover:text-purple-400">
              Works
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-purple-400">
              Contact
            </a>
          </li>
        </ul>
<div className="flex items-center space-x-4">
<a
  href="https://www.linkedin.com/in/piyush-kumar-b071132a4/"
  target="_blank"
  rel="noreferrer"
  className="hover:scale-110 transition flex items-center justify-center w-10 h-10 rounded-md bg-[#0A66C2]"
>
  <FaLinkedin size={24} className="text-white" />
</a>



<a
  href="https://github.com/piyush24145"
  target="_blank"
  rel="noreferrer"
  className="hover:scale-90 transition"
>
  <FaGithub size={30} className="text-white" />
</a>
  <a
    href="https://producthunt.com"
    target="_blank"
    rel="noreferrer"
    className="hover:scale-110 transition"
  >
    <FaProductHunt size={30} className="text-green-500" /> {/* Product Hunt Orange */}
  </a>

  {/* CV button only on desktop */}
  <a
  
    href="https://drive.google.com/file/d/1md0QKuhNCXEb5okYroNlg0-YcjNU-eZb/view?usp=drive_link"
    className="hidden md:block px-4 py-2 rounded-full border border-purple-400 hover:bg-purple-600/20 transition"
  >
    View CV
  </a>
</div>

      </nav>

      {/* Sidebar */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
