import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      title: "National Level Participant",
      organization: "Smart India Hackathon (SIH)",
      date: "2025",
      description: "Represented my institute at the national level, working on innovative solutions for real-world problems in a high-pressure, competitive environment.",
      color: "from-cyan-500 to-blue-600",
    },
    {
      title: "President",
      organization: "Waste To Wonder Club",
      date: "2025 - Present",
      description: "Leading a team of 20+ members to organize sustainability events and tech-driven recycling initiatives. Managed event coordination and team leadership.",
      color: "from-purple-500 to-pink-600",
    },
    {
      title: "B.Tech in Computer Science",
      organization: "Bansal Institute of Science and Technology",
      date: "2023 - 2027",
      description: "Focused on core CS fundamentals, including Database Management Systems (DBMS), Data Structures, and Full-Stack Web Development.",
      color: "from-blue-500 to-indigo-600",
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience & Education</h2>
          <div className="h-1 w-20 bg-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative border-l border-white/10 ml-4 md:ml-0">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="mb-12 ml-8 relative"
            >
              {/* Timeline Dot */}
              <div className={`absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-gradient-to-r ${exp.color} shadow-[0_0_15px_rgba(0,0,0,0.5)] border-4 border-[#030014] z-10`}></div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-white/20 transition-all group">
                <span className="text-sm font-mono text-cyan-400 mb-2 block">{exp.date}</span>
                <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400">
                  {exp.title}
                </h3>
                <h4 className="text-lg text-gray-300 mb-4">{exp.organization}</h4>
                <p className="text-gray-400 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;