import { motion } from "framer-motion";
import { Zap, BarChart3, Shield, ArrowUpRight, Network } from "lucide-react";

const capabilities = [
  {
    id: "01",
    icon: Zap,
    title: "Instant Checkout",
    desc: "Process sales in milliseconds. Our offline-first engine ensures you never miss a deal, even without internet.",
    tech: "WASM / Offline-Native"
  },
  {
    id: "02",
    icon: Network,
    title: "Global Stock Sync",
    desc: "A single source of truth for your entire inventory. Sync stock levels across all your stores instantly.",
    tech: "Real-time Sync"
  },
  {
    id: "03",
    icon: BarChart3,
    title: "Smart Inventory",
    desc: "AI-powered forecasting that tells you exactly what to stock before you even run out.",
    tech: "AI Optimization"
  },
  {
    id: "04",
    icon: Shield,
    title: "Secure Payments",
    desc: "Military-grade protection for every transaction. Fully compliant and hardened against threats.",
    tech: "AES-256 Secured"
  }
];

const POSInventoryCapabilities = () => {
  return (
    <section className="py-16 bg-[#F8FAFC] relative overflow-hidden">
      {/* Structural Decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      
      <div className="max-w-8xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#0F172A] tracking-tight leading-[1.1]"
            >
              Enterprise-Grade Tech <br className="hidden md:block" />
              Simplified for Your Growth
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <button className="h-12 px-8 border border-slate-200 bg-white text-slate-900 rounded-full font-bold text-sm hover:bg-slate-50 transition-all flex items-center gap-2 shadow-sm">
              Explore Docs
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>

        {/* Creative Bento-Style Technical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-slate-200 bg-white rounded-[24px] overflow-hidden shadow-2xl shadow-violet-900/5">
          {capabilities.map((mod, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`group relative p-7 flex flex-col min-h-[300px] hover:bg-slate-50/50 transition-all duration-700 border-b md:border-b-0 ${
                idx !== capabilities.length - 1 ? 'md:border-r' : ''
              } border-slate-200`}
            >
              {/* Module ID */}
              <div className="text-[40px] font-black text-slate-50 absolute top-4 right-6 select-none group-hover:text-violet-50 transition-colors">
                {mod.id}
              </div>

              {/* Icon */}
              <div className="mb-10 relative z-10 text-violet-600">
                <div className="w-11 h-11 rounded-xl bg-violet-50 flex items-center justify-center border border-violet-100/50 group-hover:scale-110 transition-transform duration-500">
                  <mod.icon className="w-5 h-5" />
                </div>
              </div>

              {/* Content */}
              <div className="mt-auto relative z-10">
                <h3 className="text-lg font-bold text-[#0F172A] mb-3 tracking-tight group-hover:text-violet-600 transition-colors">{mod.title}</h3>
                <p className="text-xs font-medium text-slate-500 leading-relaxed mb-6">
                  {mod.desc}
                </p>
                
                {/* Tech Pill */}
                <div className="flex items-center gap-2 pt-4 border-t border-slate-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{mod.tech}</span>
                </div>
              </div>

              {/* Advanced Interactive Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-violet-600/0 to-violet-600/[0.01] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Bottom Metric Bar */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 lg:gap-16 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
           <div className="flex flex-col items-center">
             <div className="text-xl font-black text-[#0F172A]">0.08ms</div>
             <div className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">Latency</div>
           </div>
           <div className="w-px h-6 bg-slate-300 hidden sm:block" />
           <div className="flex flex-col items-center">
             <div className="text-xl font-black text-[#0F172A]">99.99%</div>
             <div className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">Uptime</div>
           </div>
           <div className="w-px h-6 bg-slate-300 hidden sm:block" />
           <div className="flex flex-col items-center">
             <div className="text-xl font-black text-[#0F172A]">$41.8B</div>
             <div className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">Throughput</div>
           </div>
        </div>
      </div>
    </section>
  );
};


export default POSInventoryCapabilities;
