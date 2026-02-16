import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, DollarSign } from "lucide-react";

const BusinessDashboardCTA = () => {
  return (
    <section className="py-8 bg-white font-sans">
      <div className="max-w-8xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="relative bg-[#F8FAFC] rounded-[32px] p-6 md:p-10 lg:p-12 overflow-hidden border border-slate-100 ">
          
          {/* World Map Background Simulation */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none select-none">
            <svg viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
              <path d="M150,100 Q200,50 250,100 T350,100 M450,150 Q500,100 550,150 T650,150 M750,200 Q800,150 850,200 T950,200" stroke="currentColor" fill="none" strokeWidth="20" strokeLinecap="round" />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-3.5">
                <div className="w-1 h-3.5 bg-[#7856FF]" />
                <span className="text-[#00A3A3] text-[11px] font-bold uppercase tracking-widest">
                  Begin Exploring Your Data
                </span>
              </div>
              
              <h2 className="text-[28px] md:text-[34px] font-extrabold text-[#1A1A1A] leading-[1.2] mb-2.5 tracking-tight">
                Start Your Journey and Unlock <br className="hidden md:block" />
                Powerful <span className="text-slate-400">Insights Today</span>
              </h2>
              
              <p className="text-slate-500 font-medium text-[15px] leading-relaxed max-w-lg mx-auto lg:mx-0 mb-6">
                Sign up now to explore real-time data and unlock powerful insights to drive smarter business decisions. Join the future of unified operations.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button className="px-7 py-3 bg-[#1A1A1A] text-white rounded-[12px] font-bold text-[14px] hover:bg-black transition-all shadow-md shadow-black/5 flex items-center gap-2">
                  Get Started for Free <ArrowRight className="w-4 h-4" />
                </button>
                <button className="text-[14px] font-bold text-[#7856FF] hover:underline underline-offset-6 transition-all">
                  Book a Strategy Demo
                </button>
              </div>
            </div>

            {/* Right Visual: Floating Stats Cards */}
            <div className="flex-1 w-full lg:w-auto relative h-[360px] hidden lg:block">
              
              {/* Card 1: Conversion Rate */}
              <motion.div 
                className="absolute top-0 right-0 w-[240px] bg-white rounded-[20px] p-5 shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-slate-50 z-30"
              >
                <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-500" /> Conversion Rate
                </div>
                <div className="text-[28px] font-bold text-[#1A1A1A] leading-none mb-1">4.38%</div>
                <div className="text-[10px] font-bold text-emerald-500 mb-3 flex items-center gap-1">
                  ↑ 15% <span className="text-slate-300 font-medium">vs last month</span>
                </div>
                <div className="flex items-end gap-1 h-12">
                  {[40, 60, 35, 90, 75, 45, 80].map((h, i) => (
                    <div key={i} className={`flex-1 rounded-t-sm ${i === 4 ? 'bg-[#7856FF]' : 'bg-slate-50'}`} style={{ height: `${h}%` }} />
                  ))}
                </div>
              </motion.div>

              {/* Card 2: Total Income */}
              <motion.div 
                className="absolute top-24 left-10 w-[210px] bg-white rounded-[16px] p-4 shadow-[0_15px_30px_rgba(0,0,0,0.04)] border border-slate-50 z-20"
              >
                <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                  <DollarSign className="w-3 h-3 text-[#7856FF]" /> Total Income
                </div>
                <div className="text-[20px] font-bold text-[#1A1A1A] mb-2">$994,373</div>
                <div className="flex items-end gap-1 h-6">
                  {[50, 80, 40, 95, 60].map((h, i) => (
                    <div key={i} className="flex-1 bg-slate-50 rounded-t-xs" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </motion.div>

              {/* Card 3: Pending Orders */}
              <motion.div 
                className="absolute bottom-16 right-36 w-[170px] bg-white rounded-[16px] p-4 shadow-[0_12px_24px_rgba(0,0,0,0.05)] border border-slate-50 z-10"
              >
                <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                   Pending Orders
                </div>
                <div className="text-[18px] font-bold text-[#1A1A1A]">420+</div>
              </motion.div>

              {/* Card 4: Profit */}
              <motion.div 
                className="absolute bottom-4 right-4 w-[190px] bg-white rounded-[16px] p-4 shadow-[0_15px_30px_rgba(0,0,0,0.04)] border border-slate-50 z-40"
              >
                <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                   Profit Insights
                </div>
                <div className="text-[18px] font-bold text-[#1A1A1A] mb-1">$920,650</div>
                <div className="flex items-center gap-1">
                   {[1,2,3,4,5].map(i => <div key={i} className={`w-1 h-2.5 rounded-full ${i <= 4 ? 'bg-emerald-400' : 'bg-slate-50'}`} />)}
                </div>
              </motion.div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessDashboardCTA;
