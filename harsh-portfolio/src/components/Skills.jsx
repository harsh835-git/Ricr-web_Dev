import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  // Your Final Data
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
      color: "from-cyan-400 to-blue-500",
    },
    {
      title: "Backend & Database",
      skills: ["Node.js", "Express.js", "MongoDB", "MySQL", "JWT", "Multer"],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Tools & Deployment",
      skills: ["Git & GitHub", "Netlify", "Vercel" , "VSCode" , "Eclipse"],
      color: "from-orange-400 to-yellow-500",
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical Proficiency</h2>
          <div className="h-1 w-20 bg-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl group hover:border-white/20 transition-all"
            >
              {/* Top Glow Decor */}
              <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r ${cat.color} blur-sm`}></div>

              <h3 className="text-2xl font-semibold mb-6 text-white/90">{cat.title}</h3>
              
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 transition-all hover:bg-white/10 hover:text-cyan-400 hover:border-cyan-400/50 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${cat.color} rounded-3xl transition-opacity blur-2xl -z-10`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;