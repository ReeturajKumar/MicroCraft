import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";

/**
 * POSInventoryHero Component
 * High-fidelity hero section with a clean SaaS aesthetic,
 * featuring the Stockly dashboard image for the main mockup.
 */

const POSInventoryHero = () => {
  return (
    <section className="relative w-full min-h-[70vh] lg:min-h-[85vh] flex flex-col items-center pt-20 sm:pt-28 pb-32 sm:pb-48 px-4 sm:px-6 overflow-hidden bg-white">
      
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: '40px 40px' 
        }} 
      />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center">

        {/* Heading */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-[#0F172A] leading-[1.1] tracking-tight mb-6 sm:mb-8"
        >
          <span className="italic font-serif">Intelligent</span> Inventory <br className="hidden sm:block" />
          to Power Your Sales
        </motion.h1>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-sm sm:text-base md:text-lg text-slate-500 max-w-2xl mx-auto mb-10 sm:mb-12 font-medium leading-relaxed"
        >
          Control your entire business from one simple, powerful dashboard. 
          MicroKraft connects your stock to your customers with automated speed.
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button className="w-full sm:w-auto h-14 pl-8 pr-2 bg-black text-white rounded-full flex items-center justify-between gap-6 hover:bg-slate-800 transition-all font-bold group">
            <span className="text-[15px]">Get Started Now</span>
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
              <ArrowUpRight className="w-5 h-5 text-black group-hover:rotate-45 transition-transform" />
            </div>
          </button>
          
          <button className="w-full sm:w-auto h-14 px-8 border border-slate-200 text-slate-900 rounded-full flex items-center justify-center gap-3 hover:bg-slate-50 transition-all font-bold">
            <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center flex-shrink-0">
              <Play className="w-3.5 h-3.5 fill-current" />
            </div>
            <span className="text-[15px]">See How It Works</span>
          </button>
        </motion.div>
      </div>

      {/* Decorative 3D Elements - Only visible on 2XL screens */}
      <div className="absolute left-[2%] top-[35%] w-32 h-32 hidden 2xl:block opacity-30 pointer-events-none">
         <div className="w-full h-full rounded-full bg-violet-500" 
           style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.05) 10px, rgba(0,0,0,0.05) 20px)' }} />
      </div>

      <div className="absolute right-[2%] top-[25%] w-40 h-40 hidden 2xl:block opacity-30 pointer-events-none">
         <div className="w-full h-full rounded-full bg-violet-500" 
           style={{ backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 15px, rgba(0,0,0,0.05) 15px, rgba(0,0,0,0.05) 30px)' }} />
      </div>
    </section>
  );
};

export default POSInventoryHero;
