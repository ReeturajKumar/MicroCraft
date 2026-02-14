import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import dashboardMain from "../../../assets/dashboard_main.png";
import dashboardSidebar from "../../../assets/dashboard_part_2.png";
import dashboardShare from "../../../assets/dashboard_part_3.png";
import dashboardSearch from "../../../assets/dashboard_part_4.png";

const CRMHero = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden pt-24 md:pt-28 pb-10 md:pb-12 font-sans">
      {/* Background Geometric Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hexagons" width="50" height="43.3" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
              <path d="M25 0 L50 14.4 L50 43.3 L25 57.7 L0 43.3 L0 14.4 Z" fill="none" stroke="black" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-8xl mx-auto px-4 sm:px-12 lg:px-32 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left w-full order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[84px] font-bold text-slate-900 leading-[1.1] mb-6 tracking-tight">
              Revolutionized <br className="hidden sm:block" />
              <span className="block mt-1 sm:mt-2">Customer Experience</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-slate-500 font-medium leading-relaxed mb-8 md:mb-10 max-w-2xl mx-auto lg:mx-0">
              Streamline Operations, Boost Efficiency, and Drive Growth with our Unified Operating System for Enterprises.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8">
              <button className="w-full sm:w-auto h-12 sm:h-14 px-10 sm:px-14 bg-black text-white rounded-lg font-bold text-sm sm:text-[15px] hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer">
                Get Started
              </button>
              <button className="w-full sm:w-auto h-12 sm:h-14 px-10 sm:px-14 bg-white text-slate-900 border border-slate-300 rounded-lg font-bold text-sm sm:text-[15px] hover:bg-slate-50 transition-all flex items-center justify-center gap-2 cursor-pointer">
                Learn More
              </button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-2.5 text-slate-400 text-xs sm:text-sm font-medium">
              <span className="opacity-80">Used and trusted by</span>
              <span className="text-slate-900 font-bold">200+ Enterprises</span>
              <Globe className="w-4 h-4 text-slate-400" />
            </div>
          </motion.div>
        </div>

        {/* Right Visual - 3D Dashboard Composite */}
        <div className="flex-1 w-full relative perspective-2000px order-2 mt-10 lg:mt-0 px-2 sm:px-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 5 }}
            animate={{ opacity: 1, scale: 1, rotateY: -10, rotateX: 5 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative z-10 preserve-3d group max-w-2xl mx-auto lg:max-w-none scale-[0.9] sm:scale-100 origin-center"
          >
            {/* Main Dashboard Image */}
            <div className="relative z-10 rounded-xl md:rounded-[24px] p-1 bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-sm border border-white/50 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] md:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)]">
              <img
                src={dashboardMain}
                alt="CRM Dashboard Overview"
                className="w-full h-auto rounded-lg md:rounded-[20px]"
              />
            </div>

            {/* Floating Parts - Smarter Scaling for Mobile */}
            <div className="absolute -left-3 sm:-left-10 -top-3 sm:-top-8 z-30 w-[30%] pointer-events-none">
              <img
                src={dashboardSidebar}
                alt="Quick Navigation"
                className="w-full h-auto rounded-md sm:rounded-[18px] shadow-lg border border-white/60"
              />
            </div>

            <div className="absolute -right-2 sm:-right-6 bottom-4 sm:bottom-10 z-40 w-[42%] pointer-events-none">
              <img
                src={dashboardShare}
                alt="Engagement Tools"
                className="w-full h-auto rounded-lg sm:rounded-[22px] shadow-xl border border-white/60"
              />
            </div>

            <div className="absolute -left-2 sm:-left-6 bottom-2 sm:bottom-4 z-20 w-[24%] pointer-events-none">
              <img
                src={dashboardSearch}
                alt="Smart Filters"
                className="w-full h-auto rounded-md sm:rounded-[16px] shadow-lg border border-white/60"
              />
            </div>

            {/* Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#7856FF] opacity-[0.05] blur-[80px] md:blur-[120px] pointer-events-none rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CRMHero;
