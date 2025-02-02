import React from "react";
import { motion } from "framer-motion";
import homeBg from '../assets/home-bg.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';  // Correct import

const About: React.FC = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${homeBg})` }}>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 w-11/12 max-w-5xl p-8 bg-white/10 backdrop-blur-md shadow-xl rounded-3xl text-white"
      >
        {/* Header */}
        <h2 className="text-4xl font-bold text-center mb-6">
          About <span className="text-yellow-400">Me</span>
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Section */}
          <div className="space-y-4">
            <p className="text-lg leading-relaxed">
              Hello, I'm <span className="font-semibold text-yellow-300">Nattawat Saetung</span>,
              a passionate <span className="font-semibold">Frontend Developer</span> specializing in
              modern web applications with <span className="font-semibold">Vue.js, Nuxt.js, and Vuetify</span>.
            </p>

            <p className="text-md leading-relaxed">
              I joined <span className="font-semibold">Internet Thailand Public Co., Ltd.</span> as a Frontend Developer
              where <br /> I worked on various recruitment exam systems such as:
              the Teacher's Council professional teaching license exam system, the Office of the Basic Education Commission's assistant teacher exam system, and the Police Recruitment Exam system.
              These projects had tens of thousands to hundreds of thousands of users.
            </p>

            <p className="text-md leading-relaxed">
              My goal is to create websites that are not only beautiful but also efficient and provide the best user experience. I aspire to be a specialist in frontend development with the mindset that "development and learning are endless."
            </p>
          </div>

          {/* Right Section (Image or Cards) */}
          <div className="flex flex-col space-y-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/20 p-6 rounded-lg shadow-lg text-center"
            >
              <h3 className="text-xl font-semibold text-yellow-400">🔥 Skills</h3>
              <p className="text-md">Vue.js | Nuxt.js | React | TypeScript | Tailwind CSS | NodeJS</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/20 p-6 rounded-lg shadow-lg text-center"
            >
              <h3 className="text-xl font-semibold text-yellow-400">🎯 Focus</h3>
              <p className="text-md">UI/UX | Performance Optimization | Clean Code</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/20 p-6 rounded-lg shadow-lg text-center"
            >
              <h3 className="text-xl font-semibold text-yellow-400 mb-4">📞 Contact</h3>
              <p className="text-md text-gray-300 flex justify-center gap-3 items-center">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} className="text-gray-800 hover:text-blue-800 text-3xl transition duration-300" />
                <span className="ml-2">Github</span>
                </a>
                |
                <a href="https://www.linkedin.com/in/nattawat-saetang-70b7b2257/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} className="text-blue-300 hover:text-blue-800 text-3xl transition duration-300" />
                <span className="ml-2">LinkedIn</span>
                </a>
                |
                <a href="mailto:your-email@example.com">
                  <FontAwesomeIcon icon={faEnvelope} className="text-yellow-500 hover:text-blue-800 text-3xl transition duration-300" />
                <span className="ml-2">Email</span>
                </a>
              </p>
            </motion.div>

          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-6 text-center">
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="/project"
            className="inline-block px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow-md transition"
          >
            View My Projects 🚀
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
