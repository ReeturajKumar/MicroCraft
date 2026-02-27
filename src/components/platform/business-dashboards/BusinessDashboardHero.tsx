import { motion } from "framer-motion";
import { Shield, Zap } from "lucide-react";
import dashboardMain from "@/assets/dashboard_main.webp";

const BusinessDashboardHero = () => {
  return (
    <section className="relative pt-25 pb-12 lg:pt-28 lg:pb-12 bg-white overflow-hidden font-sans">
      <div className="max-w-8xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 xl:gap-20">
          {/* Left Column: Content + Stats Cards */}
          <div className="flex-1 max-w-2xl flex flex-col items-center text-center lg:items-start lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[32px] md:text-[40px] lg:text-[40px] xl:text-[40px] font-black text-[#1A1A1A] leading-[1.1] tracking-tight mb-6"
            >
              Make Smarter Decisions <br className="hidden sm:block" />
              with AI-Powered <br className="hidden sm:block" />
              Unified Dashboards
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[15px] md:text-[16px] text-slate-500 font-medium leading-[1.6] max-w-lg mb-8"
            >
              MicroCraft consolidates every branch, department, and transaction
              into a single source of truth. Transform raw data into automated
              growth strategies instantly.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-6 lg:gap-8 mb-10 lg:mb-12 w-full sm:w-auto"
            >
              <button className="w-full sm:w-auto px-8 py-4 bg-[#7856FF] text-white rounded-[14px] font-bold text-[15px] hover:bg-[#6344d4] transition-all shadow-xl shadow-purple-500/20">
                Get Started for Free
              </button>
              <button className="text-[15px] font-bold text-slate-400 hover:text-[#1A1A1A] transition-colors">
                Book a Platform Demo
              </button>
            </motion.div>

            {/* Bottom Stats Cards */}
            <div className="flex flex-col sm:flex-row gap-5 w-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="flex-1 bg-linear-to-br from-[#7856FF] to-[#5D44CC] rounded-3xl p-6 text-white relative overflow-hidden group h-40 shadow-lg shadow-purple-900/10"
              >
                <div className="relative z-10 flex flex-col h-full justify-between items-start text-left">
                  <div>
                    <div className="text-[32px] font-black mb-1 leading-none tracking-tighter">
                      15k+
                    </div>
                    <p className="text-[11px] text-white/70 font-medium leading-tight max-w-32.5">
                      Global Businesses Scaling with MicroCraft AI Intelligence
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2.5">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="w-8 h-8 rounded-full border-[2.5px] border-[#7856FF] overflow-hidden bg-slate-200 shadow-sm relative z-30"
                        >
                          <img
                            src={`https://i.pravatar.cc/100?u=user${i}`}
                            alt="user"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                    <span className="text-[11px] font-black text-white/90 tracking-wide uppercase">
                      Scale Faster
                    </span>
                  </div>
                </div>
                {/* Decorative mesh */}
                <div className="absolute right-[-10%] bottom-[-20%] w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="flex-1 bg-slate-50 rounded-3xl p-6 relative overflow-hidden h-40 border border-slate-100 shadow-sm"
              >
                <div className="relative z-10 flex flex-col items-start text-left">
                  <span className="inline-block px-2 py-0.5 bg-[#7856FF] rounded-sm text-white text-[9px] font-black uppercase tracking-wider mb-2">
                    99.9% Accuracy
                  </span>
                  <div className="text-[32px] font-black text-[#1A1A1A] leading-none mb-1 tracking-tighter">
                    AI Focus
                  </div>
                  <p className="text-[11px] text-slate-400 font-black uppercase tracking-widest leading-tight">
                    Financial <br /> Forecasting & <br /> Real-time Audits
                  </p>
                </div>
                {/* High-Fidelity Mobile Mockup */}
                <div className="absolute -right-2.5 sm:-right-5 -bottom-2.5 sm:-bottom-5 w-27.5 sm:w-32.5 h-30 sm:h-35 transform rotate-[-5deg]">
                  <div className="w-full h-full bg-[#1A1A1A] rounded-t-3xl sm:rounded-t-[36px] border-4 sm:border-[5px] border-slate-300 relative overflow-hidden shadow-2xl">
                    {/* Status Bar */}
                    <div className="absolute top-0 left-0 w-full h-4 sm:h-6 flex justify-center items-center gap-1 sm:gap-1.5 px-4">
                      <div className="w-8 sm:w-10 h-2 sm:h-3 bg-white/5 rounded-full" />
                      <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-white/20" />
                    </div>
                    {/* App Screen Content */}
                    <div className="mt-6 sm:mt-8 p-3 flex flex-col gap-2">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#7856FF] flex items-center justify-center mb-1 shadow-lg shadow-purple-500/20">
                        <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-white fill-white" />
                      </div>
                      <div className="space-y-1 sm:space-y-1.5">
                        <div className="w-full h-1 sm:h-1.5 bg-white/10 rounded-full" />
                        <div className="w-[60%] h-1 sm:h-1.5 bg-white/10 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column: High-Fidelity Image Layout */}
          <div className="flex-1 w-full relative group lg:mt-0 mt-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Main Browser Mockup */}
              <div className="bg-white rounded-2xl md:rounded-3xl overflow-hidden relative z-10 w-full xl:w-[115%] xl:-ml-[7.5%]">
                {/* Browser Header */}
                <div className="bg-[#F8FAFC] border-b border-slate-100 p-2 md:p-4 flex items-center justify-between">
                  <div className="flex gap-1.5 md:gap-2">
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#FF5F57]" />
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#FFBD2E]" />
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#28C840]" />
                  </div>
                  <div className="flex-1 max-w-30 sm:max-w-xs mx-4 md:mx-8">
                    <div className="bg-white rounded-md md:rounded-lg px-2 py-0.5 md:py-1 text-[8px] md:text-[10px] text-slate-400 flex items-center gap-1.5 md:gap-2">
                      <Shield className="w-2.5 h-2.5 md:w-3 md:h-3 text-[#7856FF]" />{" "}
                      <span className="truncate">dashboard.microcraft.ai</span>
                    </div>
                  </div>
                  <div className="w-8 md:w-12 h-3 md:h-4" />
                </div>

                {/* Main Dashboard Image */}
                <div className="bg-slate-50 relative">
                  <img
                    src={dashboardMain}
                    alt="MicroCraft Main Dashboard"
                    className="w-full h-auto block"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessDashboardHero;
