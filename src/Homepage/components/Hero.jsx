import React from 'react'

export default function Hero() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20 overflow-hidden">
      
      {/* 🔥 Background Moving Text */}
     <div className="absolute top-75 inset-x-0 overflow-hidden opacity-10 pointer-events-none">
  <div className="whitespace-nowrap animate-marquee text-[80px] md:text-[150px] font-extrabold text-white">
    WEB DEVELOPER WEB DEVELOPER WEB DEVELOPER WEB DEVELOPER
  </div>
</div>


      {/* Text */}
      <div className="max-w-lg z-10 text-center md:text-left mt-10"> {/* 👈 yaha thoda neeche kar diya */}
        <h2 className="text-purple-700 tracking-widest font-bold text-2xl md:text-3xl mb-4">
          PIYUSH KUMAR
        </h2>
        <h1 className="text-6xl md:text-6xl font-extrabold leading-tight mb-6 text-gray-300">
          Full Stack Web <br /> Developer
        </h1>
        <div className="flex justify-center md:justify-start space-x-4">
          <a
            href="#works"
            className="px-6 py-3 border rounded-lg hover:bg-purple-600/20 transition"
          >
            See the latest works
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border rounded-lg hover:bg-purple-600/20 transition"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Image + Mobile CV Button */}
      <div className="mt-10 md:mt-0 md:absolute md:top-0 md:left-1/2 lg:left-2/3 z-0 flex flex-col items-center md:block">
        <div className="flex items-center space-x-4">
          <img
            src="/piyushkumar1.jpeg" 
            alt="profile"
            className="w-56 md:w-[350px] lg:w-[400px] object-cover drop-shadow-2xl"
          />
          
          {/* 👇 Ye button sirf mobile view me dikhega */}
          <a
            href="#"
            className="block md:hidden px-4 py-2 rounded-full border border-purple-400 hover:bg-purple-600/20 transition text-white text-sm"
          >
            View CV
          </a>
        </div>
      </div>
    </section>
  );
}
