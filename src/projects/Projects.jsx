import React from "react";
import { Github, ExternalLink } from "lucide-react";

const ProjectsData = [
  {
    title: "Khoja kya",
    description:
      "  Khoja Kya is a community-driven platform designed to help individuals report and reclaim lost items.Our platform includes user-friendly features for reporting items, verifying ownership, and managing user profiles.",
    image: "/Screenshot 2025-08-20 223650.png",
    demo: "#",
    github: "#",
  },
  {
    title: "ECOMMERCE",
    description:
      "A second brain app to manage all your notes, tweets, videos, documents, and links in one place.",
    image: "/Screenshot 2025-08-21 000726.png",
    demo: "#",
    github: "#",
  },
  {
    title: "Gyan-mitra",
    description:
      "A food ordering webapp built using ReactJS and styled using TailwindCSS. Uses location to show nearest restaurant using Swiggy's API.",
    image: "\ef33445a-293f-43ba-ae1f-fe82c2656528-cover.png",
    demo: "#",
    github: "#",
  },
];
export default function Projects() {
  return (
    <section className="px-6 md:px-16 py-20 bg-[#0a0a1a] text-white">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h2>
        <p className="text-gray-400 text-lg">
          Some cool things I’ve built recently 🚀
        </p>
        <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full mt-4"></div>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {ProjectsData.map((project, index) => (
          <div
            key={index}
            className="bg-[#111] rounded-2xl overflow-hidden shadow-lg hover:shadow-purple-500/30 transition transform hover:-translate-y-2 flex flex-col"
          >
            {/* Project Image */}
            <div className="relative group">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-purple-600 rounded-full hover:bg-purple-700 transition"
                >
                  <ExternalLink size={20} />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-400 text-sm flex-grow">
                {project.description}
              </p>

              {/* Buttons */}
              <div className="mt-6 flex justify-between">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-purple-600 rounded-lg text-sm hover:bg-purple-700 transition"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg text-sm hover:bg-gray-700 transition"
                >
                  <Github size={16} /> GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
