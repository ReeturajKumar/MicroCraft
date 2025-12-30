import React from "react";
import { Zap, BarChart3, Clock, Shield, TrendingUp } from "lucide-react";

const FinalLaunchpad: React.FC = () => {
  return (
    <>
      {/* --- MAIN LAUNCHPAD SECTION --- */}
      <section className="relative py-8 sm:py-10 md:py-12 bg-gradient-to-b from-slate-50 to-white overflow-hidden font-sans selection:bg-pink-100">
        {/* --- 1. CLEAN BACKGROUND --- */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-purple-200/10 rounded-full blur-2xl sm:blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-pink-200/10 rounded-full blur-2xl sm:blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 relative z-10">
          {/* --- CENTERED HEADER --- */}
          <div className="text-center mb-6 sm:mb-7 md:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-2 sm:mb-3 px-2 sm:px-0">
              Launch Your Business{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600">
                in 48 Hours
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto px-2 sm:px-0">
              Unified platform to manage inventory, sales, payments, and
              customer engagement.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-6 sm:gap-7 md:gap-8 lg:gap-12 items-start">
            {/* --- 2. LEFT: THE OFFER (7 Cols) --- */}
            <div className="lg:col-span-7">
              {/* Key Benefits Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-5 sm:mb-6">
                <div className="bg-white border-2 border-slate-200/50 rounded-lg sm:rounded-xl p-3.5 sm:p-4 md:p-5 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 group">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-2.5 md:mb-3 group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-sm">
                    <BarChart3 size={20} className="sm:w-5 sm:h-5 md:w-6 md:h-6 text-purple-600" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mb-1 sm:mb-1.5">
                    Real-Time Analytics
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Track sales, inventory, and customer insights in real-time
                  </p>
                </div>

                <div className="bg-white border-2 border-slate-200/50 rounded-lg sm:rounded-xl p-3.5 sm:p-4 md:p-5 hover:border-green-300 hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300 group">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-2.5 md:mb-3 group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-sm">
                    <Clock size={20} className="sm:w-5 sm:h-5 md:w-6 md:h-6 text-green-600" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mb-1 sm:mb-1.5">
                    48-Hour Setup
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Go from signup to live orders in just 2 days
                  </p>
                </div>

                <div className="bg-white border-2 border-slate-200/50 rounded-lg sm:rounded-xl p-3.5 sm:p-4 md:p-5 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-2.5 md:mb-3 group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-sm">
                    <Shield size={20} className="sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-600" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mb-1 sm:mb-1.5">
                    Enterprise Security
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Bank-grade encryption and data protection
                  </p>
                </div>

                <div className="bg-white border-2 border-slate-200/50 rounded-lg sm:rounded-xl p-3.5 sm:p-4 md:p-5 hover:border-orange-300 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 group">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-gradient-to-br from-orange-100 to-pink-100 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-2.5 md:mb-3 group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-sm">
                    <TrendingUp size={20} className="sm:w-5 sm:h-5 md:w-6 md:h-6 text-orange-600" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mb-1 sm:mb-1.5">
                    Unlimited Scale
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Grow from startup to enterprise without limits
                  </p>
                </div>
              </div>

              {/* Stats Row */}
              <div className="flex items-center gap-4 sm:gap-6 md:gap-8 p-4 sm:p-4.5 md:p-5 bg-gradient-to-r from-purple-50 via-pink-50 to-purple-50 rounded-xl sm:rounded-2xl border-2 border-purple-200/50 shadow-lg">
                <div className="text-center flex-1 min-w-0">
                  <div className="text-2xl sm:text-3xl md:text-3xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text mb-0.5 sm:mb-1">
                    15K+
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-600 font-semibold uppercase tracking-wide leading-tight">
                    Active Businesses
                  </div>
                </div>
                <div className="w-px h-8 sm:h-10 md:h-12 bg-gradient-to-b from-transparent via-purple-300 to-transparent flex-shrink-0"></div>
                <div className="text-center flex-1 min-w-0">
                  <div className="text-2xl sm:text-3xl md:text-3xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text mb-0.5 sm:mb-1">
                    245%
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-600 font-semibold uppercase tracking-wide leading-tight">
                    Avg. ROI Increase
                  </div>
                </div>
                <div className="w-px h-8 sm:h-10 md:h-12 bg-gradient-to-b from-transparent via-purple-300 to-transparent flex-shrink-0"></div>
                <div className="text-center flex-1 min-w-0">
                  <div className="text-2xl sm:text-3xl md:text-3xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text mb-0.5 sm:mb-1">
                    4.9/5
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-600 font-semibold uppercase tracking-wide leading-tight">
                    Customer Rating
                  </div>
                </div>
              </div>
            </div>

            {/* --- 3. RIGHT: THE "PATH TO LIVE" CARD (5 Cols) --- */}
            <div className="lg:col-span-5 relative h-full mt-6 lg:mt-0">
              {/* Premium White Card */}
              <div className="bg-white border-2 border-purple-200/50 shadow-2xl shadow-purple-500/20 hover:shadow-purple-500/30 rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 relative overflow-hidden z-10 group hover:border-purple-300 transition-all duration-500 h-full flex flex-col">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 2px 2px, purple 1px, transparent 0)",
                      backgroundSize: "40px 40px",
                    }}
                  ></div>
                </div>

                {/* Card Header */}
                <div className="flex items-center justify-between mb-4 sm:mb-5 md:mb-6 relative z-10 flex-shrink-0 gap-2">
                  <h3 className="text-slate-900 font-bold text-base sm:text-lg flex items-center gap-1.5 sm:gap-2 min-w-0 flex-1">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                      <Zap size={16} className="sm:w-4 sm:h-4 md:w-5 md:h-5 text-pink-600" />
                    </div>
                    <span className="truncate">Go live in 48 hours</span>
                  </h3>
                  <span className="text-[9px] sm:text-[10px] font-bold text-purple-700 border-2 border-purple-200 px-2 sm:px-2.5 md:px-3 py-0.5 sm:py-1 rounded-full uppercase tracking-widest bg-gradient-to-r from-purple-50 to-pink-50 shadow-sm whitespace-nowrap flex-shrink-0">
                    Expert Setup
                  </span>
                </div>

                {/* Timeline */}
                <div className="relative z-10 flex-1 flex flex-col justify-between py-1 sm:py-2">
                  {/* Vertical Connecting Line */}
                  <div className="absolute left-[14px] sm:left-[16px] md:left-[18px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-200 via-pink-200 via-blue-200 via-orange-200 to-green-200"></div>

                  {/* Step 1 */}
                  <div className="relative flex items-start gap-3 sm:gap-3.5 md:gap-4 group/step mb-3 sm:mb-4">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full bg-gradient-to-br from-purple-100 to-purple-200 border-2 border-white shadow-md flex items-center justify-center shrink-0 z-10 group-hover/step:scale-110 transition-transform">
                      <span className="text-[10px] sm:text-xs font-bold text-purple-600">
                        1
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-slate-900 font-bold text-sm sm:text-base mb-0.5 sm:mb-1">
                        Book a Slot
                      </h4>
                      <p className="text-slate-600 text-xs sm:text-sm">
                        Pick a time. No sales pressure.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="relative flex items-start gap-3 sm:gap-3.5 md:gap-4 group/step mb-3 sm:mb-4">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center shrink-0 z-10 group-hover/step:border-pink-400 group-hover/step:bg-gradient-to-br group-hover/step:from-pink-50 group-hover/step:to-pink-100 transition-all duration-300 shadow-sm">
                      <span className="text-[10px] sm:text-xs font-bold text-slate-400 group-hover/step:text-pink-600">
                        2
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-slate-900 font-bold text-sm sm:text-base mb-0.5 sm:mb-1 group-hover/step:text-pink-600 transition-colors">
                        Data Migration
                      </h4>
                      <p className="text-slate-600 text-xs sm:text-sm">
                        We clean your Excel & map your catalog.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="relative flex items-start gap-3 sm:gap-3.5 md:gap-4 group/step mb-3 sm:mb-4">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center shrink-0 z-10 group-hover/step:border-blue-400 group-hover/step:bg-gradient-to-br group-hover/step:from-blue-50 group-hover/step:to-blue-100 transition-all duration-300 shadow-sm">
                      <span className="text-[10px] sm:text-xs font-bold text-slate-400 group-hover/step:text-blue-600">
                        3
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-slate-900 font-bold text-sm sm:text-base mb-0.5 sm:mb-1 group-hover/step:text-blue-600 transition-colors">
                        Integration Setup
                      </h4>
                      <p className="text-slate-600 text-xs sm:text-sm">
                        Connect WhatsApp, payments & storefront.
                      </p>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="relative flex items-start gap-3 sm:gap-3.5 md:gap-4 group/step mb-3 sm:mb-4">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center shrink-0 z-10 group-hover/step:border-orange-400 group-hover/step:bg-gradient-to-br group-hover/step:from-orange-50 group-hover/step:to-orange-100 transition-all duration-300 shadow-sm">
                      <span className="text-[10px] sm:text-xs font-bold text-slate-400 group-hover/step:text-orange-600">
                        4
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-slate-900 font-bold text-sm sm:text-base mb-0.5 sm:mb-1 group-hover/step:text-orange-600 transition-colors">
                        Testing & Review
                      </h4>
                      <p className="text-slate-600 text-xs sm:text-sm">
                        Verify everything works perfectly.
                      </p>
                    </div>
                  </div>

                  {/* Step 5 */}
                  <div className="relative flex items-start gap-3 sm:gap-3.5 md:gap-4 group/step">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center shrink-0 z-10 group-hover/step:border-green-400 group-hover/step:bg-gradient-to-br group-hover/step:from-green-50 group-hover/step:to-green-100 transition-all duration-300 shadow-sm">
                      <span className="text-[10px] sm:text-xs font-bold text-slate-400 group-hover/step:text-green-600">
                        5
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-slate-900 font-bold text-sm sm:text-base mb-0.5 sm:mb-1 group-hover/step:text-green-600 transition-colors">
                        Launch
                      </h4>
                      <p className="text-slate-600 text-xs sm:text-sm">
                        Start taking orders immediately.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FinalLaunchpad;
