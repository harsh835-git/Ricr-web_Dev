import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Decorative Element */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="flex-1 relative"
        >
          <div className="w-full aspect-square bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl absolute inset-0"></div>
          <div className="relative z-10 p-8 bg-white/5 border border-white/10 backdrop-blur-xl rounded-[2.5rem]">
            <h3 className="text-5xl font-bold text-white/20 absolute -top-4 -left-4">01</h3>
            <p className="text-xl leading-relaxed text-gray-300 italic">
              "I don't just write code; I build systems that solve problems, from food delivery logistics to national-level hackathon challenges."
            </p>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            I am a **B.Tech Computer Science student** at Bansal Institute of Science and Technology. My journey in web development started with a curiosity for how data moves across the internet, leading me to master the **MERN stack**.
          </p>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Beyond coding, I am the **President of the Waste To Wonder Club**, where I lead a team of 20+ members. This role, combined with my experience as a **National Level Participant in SIH 2025**, has taught me how to balance technical precision with effective leadership.
          </p>
          
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
              <h4 className="text-cyan-400 font-bold text-2xl">20+</h4>
              <p className="text-xs text-gray-500 uppercase tracking-widest">Team Members Led</p>
            </div>
            <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
              <h4 className="text-purple-400 font-bold text-2xl">MERN</h4>
              <p className="text-xs text-gray-500 uppercase tracking-widest">Core Tech Stack</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;