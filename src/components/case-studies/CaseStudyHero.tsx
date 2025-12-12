import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  TrendingUp,
  Zap,
  BarChart3,
  Lock,
  FileText,
} from "lucide-react";

// --- REUSABLE CITATION COMPONENT ---
// This creates the small, technical looking "Ref" badge
const SourceTag = ({ id }: { id: string }) => (
  <span
    className="inline-flex items-center gap-1 ml-2 px-1.5 py-0.5 rounded bg-white/60 border border-slate-200 backdrop-blur-sm text-[10px] font-mono font-medium text-slate-400 cursor-help hover:text-pink-500 hover:border-pink-200 transition-colors align-middle translate-y-[-2px]"
    title={`Source Reference: ${id}`}
  >
    <FileText size={8} />
    Ref.{id}
  </span>
);

const CaseStudiesHero: React.FC = () => {
  const [activeItem, setActiveItem] = useState(0);

  // Rotating words configuration
  const words = ["Growth", "Revenue", "Loyalty", "Scale"];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveItem((prev) => (prev + 1) % words.length);
    }, 2000); // Change word every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[85vh] w-full flex items-center justify-center bg-white overflow-hidden selection:bg-pink-100 font-sans">
      {/* --- 1. KEYFRAMES & UTILITIES --- */}
      <style>{`
        /* The specific "Slide Up" animation you requested */
        @keyframes slide-up-enter {
          0% { transform: translateY(100%); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes slide-up-exit {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(-100%); opacity: 0; }
        }
        
        /* Grid Background Animation */
        @keyframes grid-move {
          0% { transform: translateY(0); }
          100% { transform: translateY(40px); }
        }

        /* Chart Line Drawing */
        @keyframes draw-line {
          0% { stroke-dashoffset: 1000; }
          100% { stroke-dashoffset: 0; }
        }

        .animate-grid-move { animation: grid-move 3s linear infinite; }
        .animate-draw-line { animation: draw-line 2.5s ease-out forwards; }
      `}</style>

      {/* --- 2. TECHNICAL BACKGROUND (Grid + Glows) --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated Grid Lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#4c1d95 1px, transparent 1px), linear-gradient(90deg, #4c1d95 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Soft Spotlights */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-200/30 rounded-full blur-3xl opacity-50 mix-blend-multiply translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-pink-200/30 rounded-full blur-3xl opacity-50 mix-blend-multiply -translate-x-1/4 translate-y-1/3" />
      </div>

      {/* --- 3. MAIN CONTAINER (Max Width 7xl) --- */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-12 items-center">
        {/* === LEFT COLUMN: TYPOGRAPHY (Span 7 cols) === */}
        <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left pt-12 lg:pt-0">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 self-center lg:self-start px-4 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-purple-900 text-sm font-semibold mb-8 animate-[fade-in_1s_ease-out]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
            </span>
            <span className="flex items-center">
              Used by <span className="font-bold mx-1">15,000+</span> MSMEs
              {/* Citation 1: Badge Style */}
              <SourceTag id="454" />
            </span>
          </div>

          {/* H1 with Vertical Slider */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-purple-950 tracking-tight leading-[1.1] mb-6">
            Real Data. <br />
            Verified <br />
            {/* The Animation Container */}
            <div className="h-[1.1em] overflow-hidden relative inline-block align-bottom w-full">
              {words.map((word, index) => (
                <span
                  key={index}
                  className={`absolute left-0 lg:left-0 right-0 lg:right-auto block text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 transition-all duration-500`}
                  style={{
                    transform:
                      index === activeItem
                        ? "translateY(0)"
                        : index < activeItem
                        ? "translateY(-100%)"
                        : "translateY(100%)",
                    opacity: index === activeItem ? 1 : 0,
                  }}
                >
                  {word}.
                </span>
              ))}
            </div>
          </h1>

          <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0">
            Capture leads on WhatsApp, sell beyond your PIN code, and automate
            your follow-ups to nudge repeat orders.
            {/* Citation 2: Inline Text Style */}
            <SourceTag id="17" />
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="px-8 py-4 bg-purple-950 text-white rounded-xl font-bold hover:bg-purple-900 transition-all shadow-xl shadow-purple-900/20 hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-2">
              Start free setup call
              <ArrowRight size={18} />
            </button>
            <button className="px-8 py-4 bg-white text-purple-950 border border-purple-200 rounded-xl font-bold hover:bg-purple-50 transition-all flex items-center justify-center gap-2">
              View Case Studies
            </button>
          </div>
        </div>

        {/* === RIGHT COLUMN: THE "BENTO" GRID (Span 5 cols) === 
            A tilted technical grid showing specific metrics 
        */}
        <div className="lg:col-span-5 relative perspective-[2000px] h-[600px] flex items-center justify-center hidden lg:flex">
          {/* The Tilted Container */}
          <div className="relative w-full h-full transform rotate-y-[-12deg] rotate-x-[5deg] scale-90 hover:rotate-y-[0deg] hover:rotate-x-[0deg] transition-all duration-700 ease-out">
            <div className="grid grid-cols-2 gap-4 h-full content-center">
              {/* CELL 1: Main Graph (Spans 2 cols) */}
              <div className="col-span-2 bg-white/80 backdrop-blur-xl border border-white/50 p-6 rounded-3xl shadow-2xl shadow-purple-900/10 ring-1 ring-purple-50 group hover:ring-pink-200 transition-all">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="text-sm text-slate-400 font-medium uppercase tracking-wider">
                      Growth OS
                    </div>
                    <div className="text-3xl font-bold text-purple-950 flex items-center gap-1 mt-1">
                      +22%
                      {/* Citation 3: Metric Style */}
                      <SourceTag id="52" />
                      <TrendingUp className="text-green-500 ml-2" size={24} />
                    </div>
                  </div>
                  <div className="p-2 bg-purple-50 rounded-lg">
                    <BarChart3 className="text-purple-600" size={20} />
                  </div>
                </div>
                {/* Micro-Animation: Line Chart */}
                <div className="relative h-24 w-full">
                  <svg
                    className="w-full h-full overflow-visible"
                    preserveAspectRatio="none"
                    viewBox="0 0 100 100"
                  >
                    <defs>
                      <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                        <stop
                          offset="0%"
                          stopColor="#db2777"
                          stopOpacity="0.2"
                        />
                        <stop
                          offset="100%"
                          stopColor="#db2777"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,100 L0,80 C10,80 15,60 25,60 S35,70 45,50 S55,30 65,40 S75,10 85,20 S95,0 100,10 L100,100 Z"
                      fill="url(#gradient)"
                      className="opacity-0 animate-[fade-in_1s_delay-500ms_forwards]"
                    />
                    <path
                      d="M0,80 C10,80 15,60 25,60 S35,70 45,50 S55,30 65,40 S75,10 85,20 S95,0 100,10"
                      fill="none"
                      stroke="#db2777"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeDasharray="1000"
                      strokeDashoffset="1000"
                      className="animate-draw-line"
                    />
                  </svg>
                </div>
              </div>

              {/* CELL 2: Stockout Alert (Vertical) */}
              <div className="row-span-2 bg-gradient-to-b from-purple-900 to-indigo-900 text-white p-6 rounded-3xl shadow-xl flex flex-col justify-between group hover:scale-[1.02] transition-transform">
                <div>
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center mb-4">
                    <Lock size={20} className="text-pink-300" />
                  </div>
                  <div className="text-sm text-purple-200">Stockouts</div>
                  <div className="text-2xl font-bold mb-1 flex items-center flex-wrap gap-y-2">
                    -18%
                    {/* Citation 4: Dark Mode Style */}
                    <span className="inline-flex items-center gap-1 ml-2 px-1.5 py-0.5 rounded bg-white/10 border border-white/20 text-[10px] font-mono text-purple-200">
                      Ref.52
                    </span>
                  </div>
                </div>
                <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-xs text-purple-200 mb-2">
                    <span className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></span>
                    Alert Active
                  </div>
                  <div className="text-xs font-mono opacity-80">
                    Low stock: Milk
                  </div>
                </div>
              </div>

              {/* CELL 3: Scale Metric */}
              <div className="bg-white/90 backdrop-blur-xl border border-purple-100 p-6 rounded-3xl shadow-lg flex flex-col justify-center group hover:-translate-y-1 transition-transform">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-pink-100 rounded-full text-pink-600">
                    <Zap size={18} />
                  </div>
                  <span className="text-xs font-bold text-pink-600 uppercase">
                    Speed
                  </span>
                </div>
                <div className="text-xl font-bold text-purple-950 flex items-center">
                  2x Faster
                  {/* Citation 5 */}
                  <SourceTag id="52" />
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  Collections via UPI
                </div>
              </div>

              {/* CELL 4: Volume Badge */}
              <div className="bg-white/60 backdrop-blur-md border border-purple-50 p-5 rounded-3xl flex items-center gap-4 shadow-sm">
                <div className="text-right flex-1">
                  <div className="text-lg font-bold text-purple-900 flex justify-end items-center">
                    $800M+
                    {/* Citation 6 */}
                    <SourceTag id="452" />
                  </div>
                  <div className="text-[10px] uppercase text-slate-500 tracking-wider">
                    Goods Sold
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesHero;
