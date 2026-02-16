import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

/**
 * AIAutomationQuickstart Component
 * Recreates the "Start in seconds" section with a Visual-Left, Content-Right layout.
 * Featured on a soft teal background.
 */

const AIAutomationQuickstart = () => {
  return (
    <section className="relative w-full py-8 md:py-16 bg-white overflow-hidden font-sans border-b border-slate-50">
      <div className="max-w-8xl mx-auto px-6 md:px-16 flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
        
        {/* Right Content Column - Platform Optimized */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-[#1A3F3C] leading-[1.1] mb-6">
              Instrument in seconds, <br />
              <span className="text-[#8B5CF6]">Deploy</span> in minutes
            </h2>
            
            <p className="text-base md:text-lg text-[#3D5A58] font-medium leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
              MicroCraft's template-driven instrumentation allows you to bypass complex engineering cycles. 
              Leverage out-of-the-box telemetry for Autocapture and deploy production-grade 
              AI observability dashboards using our pre-certified templates.
            </p>

            <button className="flex items-center justify-center lg:justify-start gap-2 group text-[#1A3F3C] font-black text-base hover:opacity-70 transition-opacity mx-auto lg:mx-0">
              Launch Setup Wizard 
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Left Visual Illustration - Responsive Mockup */}
        <div className="flex-1 w-full flex justify-center lg:justify-start scale-[0.85] sm:scale-90 md:scale-100 origin-center lg:origin-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative w-full max-w-[580px] bg-white rounded-[28px] md:rounded-[32px] p-4 md:p-5 shadow-[0_20px_60px_rgba(0,0,0,0.04)] border border-slate-50"
          >
            {/* Dashboard Mockup Content */}
            <div className="flex items-center justify-between mb-4 md:mb-5 px-1">
              <span className="text-[9px] md:text-[10px] font-black text-slate-300 uppercase tracking-widest">Autonomous System KPIs</span>
            </div>

            <div className="grid grid-cols-12 gap-2 md:grid-cols-12 md:gap-3">
              {/* Funnel Chart */}
              <div className="col-span-12 md:col-span-8 bg-[#F9FAFB] rounded-2xl p-4 border border-slate-50">
                <p className="text-[8px] md:text-[9px] font-bold text-slate-400 mb-6 uppercase tracking-wider">Session &gt; AI Agent &gt; Fulfillment</p>
                <div className="flex items-end gap-2 md:gap-3 h-24 md:h-28 px-1 md:px-2">
                   <div className="flex-1 bg-[#8B5CF6] rounded-t-lg h-[90%] relative group">
                      <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 bg-white px-1 py-0.5 rounded shadow-sm text-[8px] font-black text-slate-500">100%</div>
                   </div>
                   <div className="flex-1 bg-[#8B5CF6]/30 rounded-t-lg h-[60%] relative">
                      <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 bg-white px-1 py-0.5 rounded shadow-sm text-[8px] font-black text-slate-500">65.3%</div>
                   </div>
                   <div className="flex-1 bg-[#8B5CF6] rounded-t-lg h-[55%] relative">
                      <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 bg-white px-1 py-0.5 rounded shadow-sm text-[8px] font-black text-slate-500">55.1%</div>
                   </div>
                </div>
              </div>

              {/* Metric Card */}
              <div className="col-span-12 md:col-span-4 bg-[#F9FAFB] rounded-2xl p-4 border border-slate-50 flex flex-col items-center justify-center text-center">
                <p className="text-[8px] md:text-[9px] font-bold text-slate-400 mb-2 uppercase tracking-wider">Latency avg</p>
                <span className="text-2xl md:text-3xl font-black text-[#1A3F3C] tracking-tighter">0.35<span className="text-xs font-bold text-slate-400 ml-0.5">s</span></span>
                <span className="text-[8px] font-black text-[#8B5CF6] mt-2 uppercase tracking-widest bg-purple-50 px-2 py-0.5 rounded-full">Telemetry</span>
              </div>

              {/* Status Table */}
              <div className="hidden md:block md:col-span-5 bg-[#F9FAFB] rounded-2xl p-4 border border-slate-50">
                <p className="text-[9px] font-bold text-slate-400 mb-4 uppercase tracking-wider">Recent Executions</p>
                <div className="space-y-3">
                   {[119, 126, 143].map((val, i) => (
                     <div key={i} className="flex justify-between items-center pb-2 border-b border-slate-100 last:border-0 last:pb-0">
                        <div className="w-10 h-1 bg-slate-200/50 rounded-full" />
                        <span className="text-[9px] font-black text-slate-400">{val}ms</span>
                     </div>
                   ))}
                </div>
              </div>

              {/* Mini Chart */}
              <div className="col-span-12 md:col-span-7 bg-[#F9FAFB] rounded-2xl p-4 border border-slate-50">
                 <p className="text-[8px] md:text-[9px] font-bold text-slate-400 mb-4 uppercase tracking-wider">Throughput vs Error</p>
                 <div className="flex gap-2 h-14 md:h-16 items-end">
                    <div className="flex-1 bg-[#8B5CF6] rounded-t-md h-full" />
                    <div className="flex-1 bg-[#8B5CF6]/20 rounded-t-md h-[30%]" />
                 </div>
              </div>
            </div>

            {/* Floating Overall Conversion Card - Responsive */}
            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: 0.6 }}
               className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 md:translate-x-0 md:top-1/2 md:right-[-30px] md:bottom-auto bg-white rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.06)] border border-slate-50 p-4 md:p-5 z-20 w-[calc(100%-60px)] md:w-auto md:min-w-[190px]"
            >
               <div className="flex gap-3">
                  <div className="w-1 h-10 md:h-12 bg-[#8B5CF6] rounded-full" />
                  <div className="flex-1">
                    <h4 className="text-[11px] md:text-[12px] font-black text-slate-800 uppercase tracking-wider mb-1.5 md:mb-2">System Yield</h4>
                    <div className="flex items-center gap-1.5 mb-1">
                       <span className="text-sm md:text-base font-black text-[#1A3F3C] tracking-tighter">77.52%</span>
                       <span className="text-[9px] md:text-[10px] text-slate-400 font-bold uppercase">Success</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                       <span className="text-sm md:text-base font-black text-[#1A3F3C] tracking-tighter">1.338</span>
                       <span className="text-[9px] md:text-[10px] text-slate-400 font-bold uppercase">Transactions</span>
                    </div>
                  </div>
               </div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default AIAutomationQuickstart;
