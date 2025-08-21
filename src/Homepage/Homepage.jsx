import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import React from 'react'

export default function Homepage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a1a] to-[#111122] text-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

     
    </div>
  );
}
