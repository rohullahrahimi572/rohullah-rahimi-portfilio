import React, { useEffect } from "react";
import { projects } from "./ProjectData";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";


const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: [0.25, 1, 0.5, 1],
    },
  }),
};

const AllProjects = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
   
<div style={{ width: '100%', height: '600px', position: 'relative' }}>





   <div className="bg-black min-h-screen py-32 px-4 flex flex-col items-center">
      <h1 className="text-4xl text-yellow-400 font-bold mb-12 text-center">
        All Projects
      </h1>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 justify-center lg:gap-9">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            custom={index}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="group relative w-full md:w-[350px] h-[500px] rounded-xl overflow-hidden border border-neutral-800 bg-black/10 backdrop-blur-md transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-[0_0px_16px_#facc15]"
          >
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover"
              initial={{ y: 0 }}
              whileHover={{ y: "-60%" }}
              transition={{
                duration: 5.9,
                ease: [0.25, 1, 0.5, 1],
              }}
            />

            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none">
              <div className="flex gap-6 pointer-events-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black text-5xl hover:text-yellow-400 transition"
                >
                  <FaGithub />
                </a>
                <a
                  href={project.vercel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black text-5xl hover:text-yellow-400 transition"
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white p-4 backdrop-blur-md z-20">
              <h2 className="text-lg font-bold text-yellow-400 group-hover:text-white transition-colors duration-300">
                {project.title}
              </h2>
            </div>

            <div className="absolute inset-0 rounded-xl border border-yellow-500 opacity-10 group-hover:opacity-50 transition duration-500 pointer-events-none" />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mt-16"
      >
        <Link to="/">
          <motion.button
            whileHover={{
              scale: 1.1,
              rotate: -1,
              boxShadow: "0px 0px 20px rgba(250, 204, 21, 0.7)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold rounded-full shadow-md hover:shadow-yellow-500/80 transition-all duration-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 animate-pulse"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 1.293a1 1 0 00-1.414 0L2 8.586V17a1 1 0 001 1h5v-5h4v5h5a1 1 0 001-1V8.586l-7.293-7.293z" />
            </svg>
            Go to Home
          </motion.button>
        </Link>
      </motion.div>
    </div>
</div>
  );
};

export default AllProjects;
