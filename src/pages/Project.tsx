import React from "react";
import { motion } from "framer-motion";
import police from "../assets/projects/police.png";
import ksp from "../assets/projects/ksp.png";
import obec from "../assets/projects/obec.png";
import homeBg from "../assets/home-bg.jpg"

const projects = [
  {
    id: 1,
    image: police,
    title: "Police System",
    description: "The Education Command website for police recruitment.",
    link: "https://policeadmission.thaijobjob.com/202411/",
  },
  {
    id: 2,
    image: ksp,
    title: "KSP",
    description:
      "The Secretariat Office of the Teacher's Council of Thailand website for professional teaching license examination registration.",
    link: "https://ksp67-2.thaijobjob.com/",
  },
  {
    id: 3,
    image: obec,
    title: "OBEC",
    description:
      "The Office of the Basic Education Commission website for assistant teacher recruitment examination registration.",
    link: "https://obec67.thaijobjob.com/",
  },
];

const Project: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-500 via-indigo-600 to-blue-500 p-10"
      style={{ backgroundImage: `url(${homeBg})` }}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
        className="text-4xl font-extrabold text-white mb-10 text-center">
        🚀 My Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="relative group bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden border border-white/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: project.id * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                src={project.image}
                alt={project.title}
              />
            </a>

            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm">{project.description}</p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-4 px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all"
              >
                Read more
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 9l3 3m0 0l-3 3m3-3H7"
                  />
                </svg>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Project;
