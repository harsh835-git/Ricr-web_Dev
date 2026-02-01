import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/PassportProfessionalpic (1).png";
import resume from "../assets/Harsh_Soni.pdf";

const Hero = () => {
  // Animation Variants
  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      {/* Background Effect */}
      <div className="cosmic-bg">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-12">
        {/* TEXT CONTENT */}
        <motion.div
          variants={containerVars}
          initial="hidden"
          animate="visible"
          className="flex-1 text-center md:text-left"
        >
          <motion.p
            variants={itemVars}
            className="text-cyan-400 font-medium tracking-widest mb-2"
          >
            HI, I'M
          </motion.p>
          <motion.h1
            variants={itemVars}
            className="text-6xl md:text-8xl font-extrabold mb-4 bg-linear-to-b from-white to-gray-400 bg-clip-text text-transparent"
          >
            Harsh Soni
          </motion.h1>
          <motion.h2
            variants={itemVars}
            className="text-2xl md:text-3xl text-gray-300 font-light mb-6"
          >
            Full Stack Web Developer
          </motion.h2>
          <motion.p
            variants={itemVars}
            className="text-gray-400 max-w-lg mb-10 leading-relaxed"
          >
            I build fast, scalable & modern web apps like{" "}
            <span className="text-cyan-400 font-semibold">GrubGo</span>.
            Specialized in the MERN stack and clean UI/UX.
          </motion.p>

          <motion.div
            variants={itemVars}
            className="flex flex-wrap justify-center md:justify-start gap-4"
          >
            <button className="relative group px-8 py-3 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95">
              <a href="#projects">
                <span className="relative z-10 ">View Projects →</span>
                <div className="absolute inset-0 bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
            </button>
            <a
              href={resume}
              download
              className="px-8 py-3 border border-white/20 rounded-full font-medium backdrop-blur-sm hover:bg-white/10 transition-all"
            >
              Download Resume
            </a>
          </motion.div>
        </motion.div>

        {/* IMAGE CARD (Glassmorphism + Floating) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex-1 flex justify-center relative"
        >
          {/* Floating Animation Wrapper */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative group"
          >
            {/* Main Image Card */}
            <div className="relative z-10 p-3 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-2xl shadow-[0_0_50px_rgba(76,29,149,0.3)] transition-all group-hover:border-white/30">
              <img
                src={profile}
                alt="Harsh Soni"
                className="w-72 h-[450px] object-cover rounded-[1.5rem] shadow-inner"
              />

              {/* Bottom Glass Tag */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[90%] p-5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl">
                <h3 className="text-xl font-bold text-purple-950">Harsh Soni</h3>
                <p className="text-xs text-cyan-700 font-semibold tracking-wider uppercase">
                  Full Stack Developer
                </p>
                <div className="flex gap-3 mt-3">
                  {/* GitHub Icon Placeholder */}
                  <div className="w-6 h-6 bg-white/10 rounded-full cursor-pointer hover:bg-white/30"></div>
                  {/* LinkedIn Icon Placeholder */}
                  <div className="w-6 h-6 bg-white/10 rounded-full cursor-pointer hover:bg-white/30"></div>
                </div>
              </div>
            </div>

            {/* Behind-the-card Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/20 blur-[120px] -z-10"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
