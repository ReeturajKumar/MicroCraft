import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

/**
 * AIAutomationHero Component
 * 1:1 Reconstruction of the "Build Better AI Products" design.
 * Features: Mint gradient theme, 2-column layout, custom 3D stacked visualization.
 */

const AIAutomationHero = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#E0F7F6] via-[#E0F7F6] to-[#CFF1EF] min-h-screen flex flex-col pt-24 md:pt-40 lg:pt-30 pb-16 md:pb-24 font-sans rounded-b-[64px] md:rounded-b-[80px]">
      
      {/* Main Content Container - Perfected for 1024px+ */}
      <div className="relative w-full max-w-8xl mx-auto flex flex-col lg:flex-row items-center px-6 md:px-12 lg:px-16 xl:px-24 gap-12 lg:gap-16 xl:gap-24">
        
        {/* Left Content Column - Strategic Spacing */}
        <div className="flex-[1.2] text-center lg:text-left z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Heading - Calibrated for 1024px */}
            <h1 className="text-4xl md:text-6xl lg:text-[56px] xl:text-[64px] font-bold text-[#1A3F3C] leading-[1.05] tracking-tight mb-8">
              Building the next <br />
              <span className="text-[#8B5CF6]">generation</span> of AI
            </h1>

            {/* Description - Responsive Widths */}
            <p className="text-base md:text-lg text-[#3D5A58] font-medium leading-[1.6] max-w-xl xl:max-w-2xl mx-auto lg:mx-0 mb-10">
              MicroCraft provides the unified infrastructure for the autonomous enterprise. 
              Orchestrate complex AI workflows, automate production-grade feedback loops, 
              and scale high-performance agents with a platform built for industrial-scale reliability.
            </p>

            {/* Buttons - Compact & Balanced */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-16">
              <button className="h-12 px-6 bg-[#1A1A1A] text-white rounded-full font-bold text-[15px] hover:bg-black transition-all flex items-center gap-2 shadow-lg shadow-black/10 transition-transform active:scale-95 group">
                Deep Dive into AI <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="h-12 px-6 bg-white text-[#1A3F3C] rounded-full font-bold text-[15px] hover:bg-slate-50 transition-all flex items-center gap-2 transition-transform active:scale-95 group border border-[#BDEAE6]">
                Talk to Solution Architect
              </button>
            </div>

            {/* Partner Logos - Refined Trust Section */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-10 gap-y-5 opacity-40 grayscale">
              <span className="text-[12px] font-black uppercase tracking-[0.2em] text-[#1A3F3C] w-full mb-2">Powering AI Teams at</span>
              <div className="flex items-center gap-2">
                 <span className="font-bold text-[#1A3F3C] text-lg">perplexity</span>
              </div>
              <div className="flex items-center gap-2 font-bold text-[#1A3F3C] text-lg">
                 runway
              </div>
              <div className="flex items-center gap-2 font-bold text-[#1A3F3C] text-lg tracking-tighter">
                 Harvest
              </div>
              <div className="flex items-center gap-2 font-black text-[#1A3F3C] text-lg">
                 CEREBRAS
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Illustration Column */}
        <div className="flex-1 w-full lg:h-full relative flex items-center justify-center mt-12 lg:mt-0">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-[640px] relative pointer-events-none"
          >
            <img 
              src="/AIHero.webp" 
              alt="AI Hero Visualization" 
              className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default AIAutomationHero;
