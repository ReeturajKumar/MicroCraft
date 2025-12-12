import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  MessageCircle,
  CheckCircle2,
  Rocket,
  Users,
  Zap,
} from "lucide-react";

const FinalLaunchpad: React.FC = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  // MORE INFORMATIVE: Specific actions the software performs
  const rotatingWords = [
    "Sync Inventory",
    "Automate Sales",
    "Track Payments",
    "Engage Leads",
  ];

  // 1. Text Animation Loop
  useEffect(() => {
    const textInterval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(textInterval);
  }, [rotatingWords.length]);

  return (
    <>
      {/* --- MAIN LAUNCHPAD SECTION --- */}
      <section className="relative py-24 bg-white overflow-hidden font-sans selection:bg-pink-100">
        {/* --- 1. CLEAN BACKGROUND --- */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(#475569 1px, transparent 1px), linear-gradient(90deg, #475569 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          ></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-50/60 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-pink-50/60 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* --- 2. LEFT: THE OFFER (7 Cols) --- */}
            <div className="lg:col-span-7">
              {/* Context Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-xs font-bold uppercase tracking-wider mb-8 hover:scale-105 transition-transform cursor-default">
                <Rocket size={14} />
                Ready to scale?
              </div>

              {/* --- IMPROVED HEADING STRUCTURE --- */}
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 mb-8 leading-[1.1] tracking-tight">
                One dashboard to <br />
                {/* ANIMATED ACTION TEXT */}
                <span className="relative inline-flex h-[1.1em] overflow-hidden align-bottom w-full md:w-auto">
                  {rotatingWords.map((word, i) => (
                    <span
                      key={i}
                      className={`absolute left-0 top-0 block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 whitespace-nowrap transition-all duration-700 ease-in-out`}
                      style={{
                        transform:
                          i === slideIndex
                            ? "translateY(0)"
                            : i < slideIndex
                            ? "translateY(-100%)"
                            : "translateY(100%)",
                        opacity: i === slideIndex ? 1 : 0,
                      }}
                    >
                      {word}
                    </span>
                  ))}
                  {/* Invisible spacer to hold width */}
                  <span className="invisible">{rotatingWords[0]}</span>
                </span>
                <br />
                across every channel.
              </h2>

              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
                Replace your fragmented tools with a single Growth OS. Get your
                Store, WhatsApp, and Payments working in perfect harmony.
              </p>

              {/* Dual CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-10 py-4 bg-purple-900 text-white text-lg font-bold rounded-2xl hover:bg-purple-800 transition-all transform hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-900/20 flex items-center justify-center gap-3 group">
                  Start Free Setup
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
                <button className="px-10 py-4 bg-white border-2 border-slate-200 text-slate-700 text-lg font-bold rounded-2xl hover:border-green-500 hover:text-green-600 hover:bg-green-50 transition-all flex items-center justify-center gap-3 group">
                  <MessageCircle size={20} />
                  Talk on WhatsApp
                </button>
              </div>

              {/* Trust Signals */}
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm font-medium text-slate-500">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-green-500" /> No
                  credit card required
                </div>
                <div className="flex items-center gap-2">
                  <Users size={18} className="text-blue-500" /> 15k+ Active
                  Users
                </div>
              </div>
            </div>

            {/* --- 3. RIGHT: THE "PATH TO LIVE" CARD (5 Cols) --- */}
            <div className="lg:col-span-5 relative">
              {/* Premium White Card */}
              <div className="bg-white border border-slate-200 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden z-10 group hover:border-purple-200 transition-colors duration-500">
                {/* Card Header */}
                <div className="flex items-center justify-between mb-10">
                  <h3 className="text-slate-900 font-bold text-xl flex items-center gap-2">
                    <Zap size={24} className="text-pink-500 fill-pink-50" />
                    Go live in 48 hours
                  </h3>
                  <span className="text-[10px] font-bold text-slate-400 border border-slate-200 px-2 py-1 rounded uppercase tracking-widest bg-slate-50">
                    Free Setup
                  </span>
                </div>

                {/* Timeline */}
                <div className="space-y-8 relative">
                  {/* Vertical Connecting Line */}
                  <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-slate-100"></div>

                  {/* Step 1 */}
                  <div className="relative flex items-start gap-6 group/step">
                    <div className="w-10 h-10 rounded-full bg-purple-50 border-4 border-white shadow-sm flex items-center justify-center shrink-0 z-10 group-hover/step:scale-110 transition-transform">
                      <span className="text-sm font-bold text-purple-600">
                        1
                      </span>
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-bold text-lg">
                        Book a Slot
                      </h4>
                      <p className="text-slate-500 text-sm mt-1">
                        Pick a time. No sales pressure.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="relative flex items-start gap-6 group/step">
                    <div className="w-10 h-10 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center shrink-0 z-10 group-hover/step:border-pink-500 group-hover/step:bg-pink-50 transition-colors duration-300">
                      <span className="text-sm font-bold text-slate-400 group-hover/step:text-pink-600">
                        2
                      </span>
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-bold text-lg group-hover/step:text-pink-600 transition-colors">
                        Data Migration
                      </h4>
                      <p className="text-slate-500 text-sm mt-1">
                        We clean your Excel & map your catalog.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="relative flex items-start gap-6 group/step">
                    <div className="w-10 h-10 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center shrink-0 z-10 group-hover/step:border-green-500 group-hover/step:bg-green-50 transition-colors duration-300">
                      <span className="text-sm font-bold text-slate-400 group-hover/step:text-green-600">
                        3
                      </span>
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-bold text-lg group-hover/step:text-green-600 transition-colors">
                        Launch
                      </h4>
                      <p className="text-slate-500 text-sm mt-1">
                        Start taking orders immediately.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Soft Background Glows */}
              <div className="absolute top-10 -right-10 w-40 h-40 bg-purple-200 rounded-full blur-3xl opacity-50 -z-10 animate-pulse"></div>
              <div
                className="absolute -bottom-4 -left-4 w-40 h-40 bg-pink-200 rounded-full blur-3xl opacity-50 -z-10 animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FinalLaunchpad;
