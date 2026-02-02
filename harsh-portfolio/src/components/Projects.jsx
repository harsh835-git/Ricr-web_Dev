import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const projectData = [
    {
      title: "GrubGo – Food Delivery App",
      description:
        "A full-featured MERN stack food ordering system. Includes secure user authentication, real-time dashboards, and a scalable backend for handling orders.",
      tech: ["MongoDB", "Express", "React", "Node.js", "JWT", "Multer"],
      link: "https://github.com/harsh835-git/Ricr-web_Dev/tree/main/GrubGo",
      isFeatured: true,
    },
    {
      title: "India States Locator",
      description:
        "Interactive React application that helps users locate and learn about different Indian states through a dynamic UI.",
      tech: ["React", "Tailwind CSS"],
      link: "https://github.com/harsh835-git/Ricr-web_Dev", // Github link
      liveLink: "https://indian-states-locator.netlify.app", // Your Netlify Link
      isFeatured: false,
    },
    {
      title: "Real-Time Jokes App",
      description:
        "A fun web application that fetches random jokes from an external API in real-time.",
      tech: ["JavaScript", "Fetch API", "Tailwind"],
      link: "https://github.com/harsh835-git/Ricr-web_Dev/tree/main/Assignment/JokesApp",
      isFeatured: false,
    },
    {
      title: "Salary Calculator",
      description:
        "A utility tool designed to calculate net salary based on tax brackets and deductions.",
      tech: ["JavaScript", "HTML", "CSS"],
      link: "https://github.com/harsh835-git/Ricr-web_Dev/tree/main/Assignment/salaryCalculator",
      isFeatured: false,
    },
    {
      title: "Real-Time Currency Converter",
      description:
        "A utility tool using the Fetch API to provide live exchange rates with a clean, responsive interface.",
      tech: ["JavaScript", "Fetch API", "CSS"],
      link: "https://github.com/harsh835-git/Ricr-web_Dev/tree/main/React/CurrencyConverter",
      isFeatured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Project Gallery
          </h2>
          <p className="text-gray-400">
            A collection of full-stack systems and specialized utility tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectData.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-8 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-xl flex flex-col justify-between group overflow-hidden ${
                project.isFeatured
                  ? "md:col-span-2 border-cyan-500/30"
                  : "hover:border-cyan-500/50"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div>
                <div className="flex justify-between items-start mb-6">
                  <h3
                    className={`font-bold text-white ${project.isFeatured ? "text-3xl" : "text-2xl"}`}
                  >
                    {project.title}
                  </h3>
                  {project.isFeatured && (
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-bold rounded-full border border-cyan-500/30">
                      FEATURED PROJECT
                    </span>
                  )}
                </div>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono text-cyan-400/80 bg-cyan-950/30 px-3 py-1 rounded-md border border-cyan-500/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative z-10 flex flex-wrap gap-3">
                {/* Source Code Button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2 bg-white/10 hover:bg-white/20 text-white text-sm rounded-full font-medium transition-all border border-white/10 flex gap-2 "
                >
                  <FaGithub /> GitHub
                </a>

                {/* Conditional Live Demo Button */}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2 bg-cyan-500 hover:bg-cyan-400 text-black text-sm rounded-full font-bold transition-all shadow-[0_0_15px_rgba(34,211,238,0.4)]"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
