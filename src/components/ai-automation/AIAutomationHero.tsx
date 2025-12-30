import React from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const ReferenceHero: React.FC = () => {
  return (
    <section className="relative w-full h-auto bg-white text-black flex flex-col items-center overflow-hidden">
      {/* Soft Glow Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center md:py-16 lg:py-18">
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-6xl mb-6 leading-tight"
        >
          Transform Your Business with <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            AI-Powered Automation
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-slate-600 text-lg sm:text-xl md:text-2xl max-w-6xl mb-10 leading-relaxed font-normal"
        >
          Enterprise-ready AI automation that seamlessly integrates into your
          business operations. Build with precision or speed—host on-prem or
          in-the-cloud. Our intelligent agents execute, analyze, and optimize
          processes at scale.
        </motion.p>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 mb-16 md:mb-20"
        >
          {/* Gradient Border Button */}
          <button className="relative group p-px rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:scale-105 transition-all duration-300">
            <div className="px-8 py-3.5 rounded-full bg-slate-900 group-hover:bg-transparent transition-colors duration-300">
              <span className="text-sm sm:text-base font-semibold text-white">
                Get Started
              </span>
            </div>
          </button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative flex items-center justify-center gap-2 px-8 py-3.5 text-sm sm:text-base font-semibold rounded-full border-2 border-slate-300 text-slate-700 bg-white hover:border-slate-400 hover:text-slate-900 hover:bg-slate-50 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <span>Learn more</span>
            <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ReferenceHero;
