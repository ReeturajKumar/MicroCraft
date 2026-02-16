import { motion } from "framer-motion";
import { ChevronRight, Plus, MoreVertical, Sparkles, LineChart } from "lucide-react";

/**
 * AIInsightReports Component
 * Recreates the "Insight Reports" section with a 2-column layout.
 * Featured on a soft mint background.
 */

const AIInsightReports = () => {
  return (
    <section className="relative w-full py-8 md:py-16 bg-[#F2FBFA] overflow-hidden font-sans border-b border-slate-50">
      <div className="max-w-8xl mx-auto px-6 md:px-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        
        {/* Left Content Column - Deep Platform Integration */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#1A3F3C] leading-[1.1] mb-6">
              Deterministic Intelligence <br />
              via <span className="text-[#8B5CF6]">Causal</span> Attribution
            </h2>
            
            <p className="text-base md:text-lg text-[#4D6462] font-medium leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
              MicroCraft serves as the core orchestration layer, mapping prompt experimentalism to downstream system telemetry. 
              Link model weights, temperature shifts, and RAG retrieval depth directly to mission-critical business success with 
              mathematical certainty.
            </p>

            {/* Platform Attribution Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10 max-w-lg mx-auto lg:mx-0 text-left">
               <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#8B5CF6]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />
                  </div>
                  <div>
                    <h5 className="text-[13px] font-bold text-[#1A3F3C]">Hyper-parameter Attribution</h5>
                    <p className="text-[11px] text-[#7A9290] font-medium leading-tight">Map model hyper-parameters to user success corridors.</p>
                  </div>
               </div>
               <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#8B5CF6]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />
                  </div>
                  <div>
                    <h5 className="text-[13px] font-bold text-[#1A3F3C]">Closed-Loop Optimization</h5>
                    <p className="text-[11px] text-[#7A9290] font-medium leading-tight">Auto-refine agent behavior through deterministic feedback loops.</p>
                  </div>
               </div>
            </div>

            <button className="flex items-center justify-center lg:justify-start gap-2 group text-[#1A3F3C] font-black text-base hover:opacity-70 transition-opacity mx-auto lg:mx-0">
              Deploy Attribution Layer 
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Right Visual Column - Performance Corridors */}
        <div className="flex-1 w-full flex justify-center lg:justify-end relative scale-[0.9] md:scale-100">
          {/* Main Chart Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative w-full max-w-[580px] bg-white rounded-[32px] p-6 md:p-8 shadow-[0_30px_60px_rgba(0,0,0,0.03)] border border-white"
          >
            {/* Card Header */}
            <div className="flex items-start gap-3 mb-10">
              <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center">
                <LineChart className="w-5 h-5 text-[#8B5CF6]" />
              </div>
              <div>
                <h3 className="text-sm md:text-base font-bold text-[#1A3F3C] mb-0.5">Token Latency Performance</h3>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">P95 Latency Corridor • v2.4b Deployment</p>
              </div>
            </div>

            {/* Visual Chart */}
            <div className="relative h-[220px] w-full">
              {/* Y-Axis Labels */}
              <div className="absolute left-0 h-full flex flex-col justify-between text-[11px] font-bold text-slate-300 pointer-events-none pb-1">
                <span>2.6s</span>
                <span>2.4s</span>
                <span>2.2s</span>
                <span>2.0s</span>
                <span>1.8s</span>
              </div>

              {/* Grid Lines */}
              <div className="absolute left-12 right-0 h-full flex flex-col justify-between py-1">
                {[0, 1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-full border-t border-slate-50" />
                ))}
              </div>

              {/* The Line Chart SVG */}
              <svg className="absolute left-12 right-0 top-0 w-full h-full overflow-visible" viewBox="0 0 500 220" preserveAspectRatio="none">
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  d="M0,130 L10,145 L30,120 L50,110 L70,125 L100,160 L120,130 L150,180 L180,140 L220,190 L250,150 L280,185 L320,170 L380,150 L420,190 L450,150 L480,210 L500,150"
                  fill="none"
                  stroke="#8B5CF6"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <motion.circle
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", delay: 1.5 }}
                  cx="430"
                  cy="130"
                  r="6.5"
                  fill="#8B5CF6"
                  stroke="white"
                  strokeWidth="3"
                  className="shadow-xl"
                />
              </svg>

              {/* Floating Tooltip Card */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 1.8 }}
                className="absolute top-[20px] left-1/2 -translate-x-1/2 lg:left-[25%] lg:translate-x-0 bg-white rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-slate-50 p-5 z-20 w-[calc(100%-40px)] max-w-[240px]"
              >
                <div className="flex gap-4">
                  <div className="w-1 h-auto bg-[#8B5CF6] rounded-full" />
                  <div>
                    <h4 className="text-[13px] font-black text-slate-800 tracking-tight mb-1">Attribution Layer</h4>
                    <p className="text-[10px] text-slate-400 font-bold mb-3">Model: GPT-4o-Turbo · Prod</p>
                    
                    <div className="px-1.5 py-0.5 rounded bg-slate-50 inline-block mb-2">
                       <span className="text-[14px] font-black text-slate-800">2.47s P95</span>
                    </div>
                    
                    <div className="flex items-center gap-1.5">
                       <span className="text-[10px] font-bold text-[#10B981] bg-[#10B981]/10 px-1 py-0.5 rounded">-0.3s Opt.</span>
                       <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">from baseline</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Overlapping Trace Card */}
          <motion.div
             initial={{ opacity: 0, x: -30, y: 30 }}
             whileInView={{ opacity: 1, x: 0, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.4 }}
             className="absolute bottom-[-40px] left-[-10px] bg-white rounded-[20px] shadow-[0_15px_30px_rgba(0,0,0,0.05)] border border-slate-100 p-4 z-30 w-full max-w-[280px]"
          >
             <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-black text-slate-800 tracking-tight">Active Instrumentation</span>
                <Plus className="w-3.5 h-3.5 text-slate-300" />
             </div>
             
             <div className="bg-[#F9FAFB] rounded-xl p-3 border border-slate-50">
                <div className="flex items-center justify-between mb-2">
                   <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-white shadow-sm flex items-center justify-center">
                         <Sparkles className="w-3.5 h-3.5 text-[#8B5CF6]" />
                      </div>
                      <span className="text-[11px] font-bold text-slate-800">Agent Trace #882</span>
                   </div>
                   <MoreVertical className="w-3.5 h-3.5 text-slate-200" />
                </div>
                
                <div className="flex items-center gap-1.5">
                   <div className="w-20 h-1 bg-[#8B5CF6]/30 rounded-full overflow-hidden">
                      <div className="w-3/4 h-full bg-[#8B5CF6]" />
                   </div>
                   <span className="text-[9px] font-bold text-slate-400">75% Fulfilled</span>
                </div>
             </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default AIInsightReports;
