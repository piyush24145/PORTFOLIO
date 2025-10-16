import React from "react";

const achievements = [
{
  title: "Unstop",
  description: "crack 1st round in unstop talent park(700th rank)",
  icon: "🎯",
},
  // {
  //   title: "LeetCode",
  //   description: "undefined",
  //   icon: "🏆",
  // },

  {
    title: "FORCE IIITU",
    description:
      "Volanteer member",
    icon: "🧑‍💼",
  },
  {
    title: "SIH",
    description:
      "undefined",
    icon: "💡",
  },
];

export default function Achievements() {
  return (
    <section className="px-6 md:px-16 py-20 bg-[#050517] text-white">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">My Achievements</h2>
        <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full"></div>
      </div>

      {/* Achievements Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {achievements.map((item, index) => (
          <div
            key={index}
            className={`bg-[#11142b] p-8 rounded-2xl text-center shadow-lg hover:shadow-yellow-500/20 transition transform hover:-translate-y-2
              ${index === 3 ? "md:col-span-3 md:w-1/3 mx-auto" : ""}`}
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-yellow-400 mb-3">
              {item.title}
            </h3>
            <p className="text-gray-300 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
