import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

/**
 * AIRetentionShowcase Component
 * Recreates the "Retention Reports" section with a 2-column layout and a visual chart card.
 */

const AIRetentionShowcase = () => {
  return (
    <section className="relative w-full py-8 md:py-16 bg-white overflow-hidden font-sans border-b border-slate-50">
      <div className="max-w-8xl mx-auto px-6 md:px-16 flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
        
        {/* Left Content Column - Platform & Infrastructure Focused */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-[#1A3F3C] leading-[1.1] mb-6">
              Lifecycle Telemetry for <br />
              <span className="text-[#8B5CF6]">Autonomous</span> Retention
            </h2>
            
            <p className="text-base md:text-lg text-[#4D6462] font-medium leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
              MicroCraft provides the instrumentation layer to connect LLM execution logs with mission-critical lifecycle telemetry. 
              Automate downstream feedback loops to identify high-affinity agent patterns and 
              mitigate failure modes before they impact your core retention.
            </p>

            {/* Platform Impact Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 max-w-lg mx-auto lg:mx-0">
               <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-[#E0F7F6] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />
                  </div>
                  <div>
                    <h5 className="text-[13px] font-bold text-[#1A3F3C]">Unified Instrumentation</h5>
                    <p className="text-[11px] text-[#7A9290] font-medium">Unify agent traces with real-world system events.</p>
                  </div>
               </div>
               <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-[#E0F7F6] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#21B5D3]" />
                  </div>
                  <div>
                    <h5 className="text-[13px] font-bold text-[#1A3F3C]">Automated Feedback</h5>
                    <p className="text-[11px] text-[#7A9290] font-medium">Auto-trigger prompt adjustments based on user cohort behavior.</p>
                  </div>
               </div>
            </div>

            <button className="flex items-center justify-center lg:justify-start gap-2 group text-[#1A3F3C] font-black text-base hover:opacity-70 transition-opacity mx-auto lg:mx-0">
              Deploy Retention Infrastructure 
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Right Chart Column */}
        <div className="flex-1 w-full flex justify-center lg:justify-end scale-[0.9] md:scale-100 origin-center lg:origin-right">
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative w-full max-w-[580px] bg-[#F9FAFB] rounded-[32px] p-4 md:p-6 shadow-[0_10px_30px_rgba(0,0,0,0.01)] border border-slate-100/40"
          >
            {/* Card Content - High Fidelity */}
            <div className="bg-white rounded-[24px] p-5 md:p-7 shadow-[0_15px_35px_rgba(0,0,0,0.02)] border border-white">
              <div className="flex items-start gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-[#E0F7F6] flex items-center justify-center p-2.5">
                  <div className="grid grid-cols-2 gap-0.5 w-full h-full">
                    <div className="rounded-[1px] bg-[#21B5D3]/60" />
                    <div className="rounded-[1px] bg-[#52D4C3]/60" />
                    <div className="rounded-[1px] bg-[#21B5D3]/60" />
                    <div className="rounded-[1px] bg-[#52D4C3]/60" />
                  </div>
                </div>
                <div>
                  <h3 className="text-[13px] font-bold text-[#1A3F3C] mb-0.5">User retention rate post-agent usage</h3>
                  <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Retention Rate • Last 30 days</p>
                </div>
              </div>

              {/* Visual Chart */}
              <div className="relative h-[220px] w-full">
                {/* Y-Axis Labels */}
                <div className="absolute left-0 h-full flex flex-col justify-between text-[10px] font-bold text-slate-200 pointer-events-none pb-1">
                  <span>80%</span>
                  <span>60%</span>
                  <span>40%</span>
                  <span>20%</span>
                  <span>0%</span>
                </div>

                {/* Grid Lines */}
                <div className="absolute left-10 right-0 h-full flex flex-col justify-between py-1">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-full border-t border-slate-50" />
                  ))}
                </div>

                {/* The Line Chart SVG - Calibrated Path */}
                <svg className="absolute left-10 right-0 top-0 w-full h-full overflow-visible" viewBox="0 0 500 220" preserveAspectRatio="none">
                  <motion.path
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    d="M0,120 L10,112 L30,130 L50,128 L80,125 L110,132 L150,135 L210,140 L280,145 L350,148 L410,155 L440,152 L480,120 L500,95"
                    fill="none"
                    stroke="#8B5CF6"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  
                  <motion.path
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    d="M500,95 L540,230"
                    fill="none"
                    stroke="#8B5CF6"
                    strokeWidth="3"
                    strokeDasharray="6 6"
                    strokeLinecap="round"
                    className="opacity-30"
                  />

                  <motion.circle
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", delay: 1.5 }}
                    cx="500"
                    cy="95"
                    r="6.5"
                    fill="#8B5CF6"
                    stroke="white"
                    strokeWidth="3"
                    className="shadow-xl"
                  />
                </svg>

                {/* Floating Tooltip Card - Responsive & Centered on Mobile */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 1.8 }}
                  className="absolute top-[-30px] left-1/2 -translate-x-1/2 lg:left-[35%] lg:translate-x-0 bg-white rounded-[20px] shadow-[0_15px_45px_rgba(0,0,0,0.06)] border border-slate-50 p-5 z-20 w-[calc(100%-40px)] max-w-[260px] md:max-w-[280px]"
                >
                  <div className="flex gap-4">
                    <div className="w-1 h-auto bg-[#8B5CF6] rounded-full" />
                    <div className="flex-1 py-0.5">
                      <h4 className="text-[15px] font-bold text-slate-800 mb-1">Day 28</h4>
                      <p className="text-[11px] text-slate-400 font-medium mb-3 leading-tight">Weighted Average Value in completed intervals</p>
                      
                      <div className="flex items-center gap-2 mb-1.5">
                         <span className="px-1.5 py-0.5 rounded bg-slate-50 text-[13px] font-bold text-slate-700">61.03%</span>
                         <span className="text-[12px] font-medium text-slate-400">retention</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                         <span className="px-1.5 py-0.5 rounded bg-slate-50 text-[13px] font-bold text-slate-700">238</span>
                         <span className="text-[12px] font-medium text-slate-400">users (average)</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* X-Axis Labels */}
                <div className="absolute left-10 right-0 -bottom-8 flex justify-between px-1 text-[10px] font-bold text-slate-200">
                  <span>&lt;1 Day</span>
                  <span className="hidden xs:inline">Day 5</span>
                  <span>Day 10</span>
                  <span className="hidden xs:inline">Day 15</span>
                  <span>Day 20</span>
                  <span>Day 25</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};


export default AIRetentionShowcase;
