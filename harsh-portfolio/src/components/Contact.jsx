import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl md:text-5xl font-bold mb-8"
        >
          Let's Connect
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-2xl shadow-2xl"
        >
          <p className="text-gray-400 mb-10 text-lg">
            Currently looking for new opportunities or a chat about <span className="text-cyan-400">Full Stack Development</span>. 
            My inbox is always open!
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            {/* Social Link: LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/harsh-soni-9ab06a301" 
              target="_blank" 
              rel="noreferrer"
              className="group flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all"
            >
              <span className="text-gray-300 group-hover:text-blue-400">LinkedIn</span>
            </a>

            {/* Social Link: GitHub */}
            <a 
              href="https://github.com/harsh835-git" 
              target="_blank" 
              rel="noreferrer"
              className="group flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all"
            >
              <span className="text-gray-300 group-hover:text-purple-400">GitHub</span>
            </a>

            {/* Email */}
            <a 
              href="mailto:harshsoni83588@gmail.com" 
              className="group flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-cyan-400/50 transition-all"
            >
              <span className="text-gray-300 group-hover:text-cyan-400">Email Me</span>
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-white/5 text-gray-500 text-sm">
            © 2026 Harsh Soni • Built with React & Tailwind
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;