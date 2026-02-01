import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const navLinks = ["About", "Skills", "Projects", "Experience", "Contact"];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center bg-white/5 backdrop-blur-md border border-white/10 px-8 py-3 rounded-full">
        <div className="text-xl font-bold tracking-tighter">
          HS<span className="text-cyan-500">.</span>
        </div>
        
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link}>
              <a 
                href={`#${link.toLowerCase()}`} 
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <button className="md:hidden text-white">
          {/* Mobile Menu Icon */}
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;