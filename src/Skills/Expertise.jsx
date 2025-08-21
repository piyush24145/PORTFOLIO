import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaJs, FaGithub, FaGit, FaAws } from "react-icons/fa";
import { SiCplusplus, SiRedux, SiTailwindcss, SiBootstrap, SiExpress, SiMongodb, SiPrisma, SiSocketdotio, SiFirebase } from "react-icons/si";

export default function Expertise() {
  const skills = [
    { name: "C++", icon: <SiCplusplus size={40} /> },
    { name: "JavaScript", icon: <FaJs size={40} /> },
    { name: "HTML", icon: <FaHtml5 size={40} /> },
    { name: "CSS", icon: <FaCss3Alt size={40} /> },
    { name: "React.js", icon: <FaReact size={40} /> },
    { name: "Redux", icon: <SiRedux size={40} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={40} /> },
    { name: "Bootstrap", icon: <SiBootstrap size={40} /> },
    { name: "Node.js", icon: <FaNodeJs size={40} /> },
    { name: "Express.js", icon: <SiExpress size={40} /> },
    { name: "RESTful APIs", icon: <SiExpress size={40} /> },
    { name: "Socket.io", icon: <SiSocketdotio size={40} /> },
    { name: "MongoDB", icon: <SiMongodb size={40} /> },
    { name: "Prisma ORM", icon: <SiPrisma size={40} /> },
    { name: "Git", icon: <FaGit size={40} /> },
    { name: "GitHub", icon: <FaGithub size={40} /> },
    { name: "Firebase", icon: <SiFirebase size={40} /> },
    { name: "AWS", icon: <FaAws size={40} /> },
  ];

  return (
    <section className="py-16 bg-[#0b0b23] text-white text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-2"
      >
        My Expertise
      </motion.h2>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "6rem" }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="h-1 bg-yellow-500 mx-auto mb-12"
      ></motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-[#141432] p-6 rounded-xl shadow-md flex flex-col items-center hover:scale-105 transition-transform duration-300"
          >
            <div className="text-yellow-500 mb-2">{skill.icon}</div>
            <p className="text-sm font-medium">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
