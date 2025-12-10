import React, { useState, useEffect } from "react";
import {
  ArrowUpRight,
  MoreHorizontal,
  Zap,
  TrendingUp,
  Activity,
  Layers,
} from "lucide-react";

// --- UTILITY: Looping Wrapper ---
// This forces the content inside to "restart" every (duration) milliseconds
const LiveLoop = ({
  duration,
  children,
  className,
}: {
  duration: number;
  children: React.ReactNode;
  className?: string;
}) => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prev) => prev + 1);
    }, duration);
    return () => clearInterval(interval);
  }, [duration]);

  return (
    <div key={key} className={`w-full h-full ${className}`}>
      {children}
    </div>
  );
};

// --- CUSTOM HOOK: Count Up ---
const useCountUp = (end: number, duration = 2000, prefix = "", suffix = "") => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Ease out quartic for smooth landing
      const ease = 1 - Math.pow(1 - progress, 4);
      setCount(ease * end);
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  const formatted = count.toLocaleString("en-US", {
    minimumFractionDigits: Number.isInteger(end) ? 0 : 2,
    maximumFractionDigits: Number.isInteger(end) ? 0 : 2,
  });

  return `${prefix}${formatted}${suffix}`;
};
// ==========================================
// 1. ANALYTICS CARD (Looping Graphs)
// ==========================================
const AnalyticsMockup = () => {
  // We use the LiveLoop parent to reset this component, so standard hooks work once per cycle
  const val1 = useCountUp(7832.5, 1500, "$");
  const val2 = useCountUp(4250.1, 1800, "$");
  const val3 = useCountUp(6485.9, 2000, "$");
  const totalUsers = useCountUp(2836, 1200);

  return (
    <div className="flex flex-col gap-4 w-full h-full">
      {/* Top Stats Row */}
      <div className="flex gap-4">
        {/* Task Stat */}
        <div className="bg-white/80 backdrop-blur-xl p-4 rounded-2xl shadow-lg shadow-purple-500/5 border border-purple-100 flex-1 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1 h-full bg-linear-to-b from-purple-500 to-pink-500"></div>
          <div className="flex justify-between mb-2">
            <div className="p-1.5 bg-purple-50 rounded-lg text-purple-600">
              <Activity size={16} />
            </div>
            <span className="text-[10px] bg-green-50 text-green-600 px-2 py-0.5 rounded-full font-bold">
              +12%
            </span>
          </div>
          <div className="text-2xl font-black text-slate-900">{totalUsers}</div>
          <div className="text-[10px] text-slate-500">Active Tasks</div>
        </div>

        {/* Revenue Stat */}
        <div className="bg-white/80 backdrop-blur-xl p-4 rounded-2xl shadow-lg shadow-pink-500/5 border border-pink-100 flex-1 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-pink-500 to-purple-500"></div>
          <div className="flex justify-between mb-2">
            <div className="p-1.5 bg-pink-50 rounded-lg text-pink-600">
              <TrendingUp size={16} />
            </div>
          </div>
          <div className="text-lg font-bold text-slate-900">$14k</div>
          <div className="h-8 w-full mt-2">
            <svg
              viewBox="0 0 100 40"
              className="w-full h-full overflow-visible"
            >
              <path
                d="M0,35 Q20,35 30,20 T60,25 T100,5"
                fill="none"
                stroke="#ec4899"
                strokeWidth="3"
                strokeLinecap="round"
                className="animate-draw-line"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Main Bar Chart */}
      <div className="bg-white p-5 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex-1">
        <div className="flex justify-between items-center mb-5">
          <h4 className="text-sm font-bold text-slate-800">Team Performance</h4>
          <MoreHorizontal size={16} className="text-slate-300" />
        </div>
        <div className="space-y-4">
          {/* Bar 1 */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs font-medium">
              <span className="text-slate-500">Foysal</span>
              <span className="text-slate-900">{val1}</span>
            </div>
            <div className="h-2 w-full bg-slate-50 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full w-0 animate-grow-bar"
                style={{ "--target-width": "85%" } as React.CSSProperties}
              ></div>
            </div>
          </div>
          {/* Bar 2 */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs font-medium">
              <span className="text-slate-500">Hasan</span>
              <span className="text-slate-900">{val2}</span>
            </div>
            <div className="h-2 w-full bg-slate-50 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-pink-500 to-rose-400 rounded-full w-0 animate-grow-bar"
                style={
                  {
                    "--target-width": "45%",
                    animationDelay: "0.1s",
                  } as React.CSSProperties
                }
              ></div>
            </div>
          </div>
          {/* Bar 3 */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs font-medium">
              <span className="text-slate-500">Moshar</span>
              <span className="text-slate-900">{val3}</span>
            </div>
            <div className="h-2 w-full bg-slate-50 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-violet-500 to-purple-400 rounded-full w-0 animate-grow-bar"
                style={
                  {
                    "--target-width": "65%",
                    animationDelay: "0.2s",
                  } as React.CSSProperties
                }
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 2. WORKFLOW CARD (Moving Particles)
// ==========================================
const WorkflowMockup = () => {
  return (
    <div className="bg-white p-5 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 w-full h-full relative overflow-hidden">
      {/* Background Grid */}
      <div className="relative z-10 flex flex-col items-center gap-2 h-full justify-center">
        {/* Node 1 */}
        <div className="bg-slate-900 text-white px-4 py-2 rounded-xl text-xs font-bold shadow-lg shadow-slate-900/20 z-10 animate-pop-in">
          Trigger
        </div>

        {/* Connecting Line with Moving Dot */}
        <div className="h-8 w-0.5 bg-slate-100 relative overflow-visible">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)] animate-drop-particle"></div>
        </div>

        {/* Node 2 */}
        <div
          className="bg-white border-2 border-purple-100 text-purple-600 px-4 py-2 rounded-xl text-xs font-bold z-10 animate-pop-in"
          style={{ animationDelay: "0.5s" }}
        >
          Check Condition
        </div>

        {/* Connecting Line 2 */}
        <div className="h-8 w-0.5 bg-slate-100 relative overflow-visible">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-pink-500 rounded-full shadow-[0_0_10px_rgba(236,72,153,0.8)] animate-drop-particle"
            style={{ animationDelay: "0.8s" }}
          ></div>
        </div>

        {/* Node 3 */}
        <div
          className="bg-linear-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl text-sm font-bold shadow-lg shadow-purple-500/30 z-10 animate-pop-in"
          style={{ animationDelay: "1.2s" }}
        >
          Send Email
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 3. PIPELINE CARD (Sliding Cards)
// ==========================================
const PipelineMockup = () => {
  return (
    <div className="bg-white p-5 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 w-full h-full overflow-hidden relative">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <Layers size={14} className="text-purple-500" />
          <h4 className="text-sm font-bold text-slate-800">Recent Deals</h4>
        </div>
        <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-ping"></div>
      </div>

      <div className="space-y-3">
        {/* Card 1 */}
        <div
          className="bg-slate-50 p-3 rounded-xl flex items-center justify-between animate-slide-in-right"
          style={{ animationDelay: "0s" }}
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-xs">
              V
            </div>
            <div>
              <div className="text-xs font-bold text-slate-800">Voxelx Inc</div>
              <div className="text-[10px] text-slate-500">Negotiation</div>
            </div>
          </div>
          <span className="text-xs font-bold text-slate-900">$12k</span>
        </div>

        {/* Card 2 */}
        <div
          className="bg-slate-50 p-3 rounded-xl flex items-center justify-between animate-slide-in-right"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-bold text-xs">
              F
            </div>
            <div>
              <div className="text-xs font-bold text-slate-800">Framer</div>
              <div className="text-[10px] text-slate-500">Closed Won</div>
            </div>
          </div>
          <span className="text-xs font-bold text-slate-900">$8.5k</span>
        </div>

        {/* Card 3 */}
        <div
          className="bg-slate-50 p-3 rounded-xl flex items-center justify-between animate-slide-in-right"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">
              S
            </div>
            <div>
              <div className="text-xs font-bold text-slate-800">Stripe</div>
              <div className="text-[10px] text-slate-500">Proposal</div>
            </div>
          </div>
          <span className="text-xs font-bold text-slate-900">$24k</span>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// MAIN COMPONENT
// ==========================================

const RotatingFeatureText = () => {
  return (
    <div className="inline-block relative h-[1.2em] w-full md:w-auto align-bottom overflow-hidden mt-1 md:mt-0">
      <div className="feature-scroll-inner flex flex-col text-left pl-2 md:pl-3">
        <span className="block h-[1.2em] text-transparent bg-clip-text bg-linear-to-r from-purple-600 via-pink-500 to-purple-400 pb-2">
          Selling Easier
        </span>
        <span className="block h-[1.2em] text-transparent bg-clip-text bg-linear-to-r from-purple-600 via-pink-500 to-purple-400 pb-2">
          Scaling Faster
        </span>
        <span className="block h-[1.2em] text-transparent bg-clip-text bg-linear-to-r from-purple-600 via-pink-500 to-purple-400 pb-2">
          Growth Simpler
        </span>
        <span className="block h-[1.2em] text-transparent bg-clip-text bg-linear-to-r from-purple-600 via-pink-500 to-purple-400 pb-2">
          Selling Easier
        </span>
      </div>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <section className="py-24 px-4 md:px-8 font-sans relative overflow-hidden">
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* --- Header --- */}
        <div className="text-center mb-20 animate-fade-in-up">
          <span className="inline-block py-1 px-3 rounded-full bg-purple-50 border border-purple-100 text-purple-600 text-xs font-bold tracking-wider mb-4 uppercase">
            Powerful Features
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight flex flex-col md:block items-center justify-center leading-tight">
            Features That Make <RotatingFeatureText />
          </h2>
          <p className="mt-6 text-lg text-slate-500 max-w-2xl mx-auto">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </div>

        {/* --- Bento Grid Layout --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {/* --- BIG CARD (Analytics) --- */}
          <div className="md:col-span-7 lg:col-span-8 bg-white rounded-[40px] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col md:flex-row items-center gap-10 overflow-hidden relative group">
            {/* Decorative Background Blob */}
            <div className="absolute -right-20 -top-20 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>

            <div className="flex-1 space-y-6 text-left relative z-10">
              <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mb-2">
                <Activity size={24} />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                Manage Operations with{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-pink-500">
                  Rich Analytics
                </span>
              </h3>
              <p className="text-slate-500 text-lg leading-relaxed">
                Derive actionable insights and measure operations in real-time.
                Our loops never stop, just like your growth.
              </p>
              <button className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold flex items-center gap-2 hover:bg-purple-600 transition-all hover:shadow-lg hover:shadow-purple-500/20 active:scale-95 duration-300">
                Explore Analytics <ArrowUpRight size={18} />
              </button>
            </div>

            <div className="flex-1 w-full max-w-sm h-80 relative z-10">
              {/* 5-second loop cycle for graphs */}
              <LiveLoop duration={5000} className="relative">
                <AnalyticsMockup />
              </LiveLoop>
            </div>
          </div>

          {/* --- TALL CARD (Workflow) --- */}
          <div className="md:col-span-5 lg:col-span-4 bg-slate-900 rounded-[40px] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.2)] flex flex-col items-center justify-between text-center relative overflow-hidden">
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-b from-slate-800 to-slate-900"></div>
            <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>

            <div className="relative z-10 w-full mb-8">
              <h3 className="text-2xl font-bold text-white mb-3">
                Streamline Workflow
              </h3>
              <p className="text-slate-400 text-sm">
                Automate your busy work with visual pipelines.
              </p>
            </div>

            <div className="relative z-10 w-full h-[280px]">
              {/* 3-second loop cycle for particles */}
              <LiveLoop duration={3000}>
                <WorkflowMockup />
              </LiveLoop>
            </div>
          </div>

          {/* --- WIDE CARD (Performance/Pipeline) --- */}
          <div className="md:col-span-12 bg-linear-to-br from-purple-600 to-pink-600 rounded-[40px] p-8 md:p-12 shadow-[0_20px_50px_rgba(168,85,247,0.3)] flex flex-col md:flex-row items-center justify-between gap-10 text-white relative overflow-hidden">
            {/* Abstract Rings */}
            <div className="absolute -left-20 -bottom-40 w-80 h-80 border-30 border-white/10 rounded-full blur-sm"></div>
            <div className="absolute left-20 -bottom-20 w-40 h-40 border-15 border-white/10 rounded-full blur-sm"></div>

            <div className="flex-1 relative z-10 space-y-4 max-w-lg">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold border border-white/20">
                <Zap size={12} className="text-yellow-300 fill-yellow-300" />{" "}
                Real-time Sync
              </div>
              <h3 className="text-3xl font-bold">Performance Management</h3>
              <p className="text-purple-100 text-lg opacity-90">
                With the right set of tools, your team will never have to
                struggle. Generate price quotes, and access sales scripts
                instantly.
              </p>
            </div>

            <div className="flex-1 w-full max-w-md h-[200px] relative z-10">
              {/* 4-second loop cycle for sliding cards */}
              <LiveLoop duration={4000}>
                <PipelineMockup />
              </LiveLoop>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes featureVerticalScroll {
            0%, 20% { transform: translateY(0%); }
            25%, 45% { transform: translateY(-25%); }
            50%, 70% { transform: translateY(-50%); }
            75%, 95% { transform: translateY(-75%); }
            100% { transform: translateY(-75%); }
        }
        @keyframes growBar {
            from { width: 0; }
            to { width: var(--target-width); }
        }
        @keyframes drawLine {
            from { stroke-dasharray: 200; stroke-dashoffset: 200; }
            to { stroke-dasharray: 200; stroke-dashoffset: 0; }
        }
        @keyframes dropParticle {
            0% { transform: translate(-50%, -10px) scale(0); opacity: 0; }
            20% { opacity: 1; transform: translate(-50%, 0) scale(1); }
            80% { opacity: 1; transform: translate(-50%, 30px) scale(1); }
            100% { transform: translate(-50%, 40px) scale(0.5); opacity: 0; }
        }
        @keyframes popIn {
            0% { transform: scale(0.8); opacity: 0; }
            50% { transform: scale(1.05); opacity: 1; }
            100% { transform: scale(1); opacity: 1; }
        }
        @keyframes slideInRight {
            from { transform: translateX(50px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }

        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
        .feature-scroll-inner { animation: featureVerticalScroll 6s cubic-bezier(0.16, 1, 0.3, 1) infinite; }
        .animate-grow-bar { animation: growBar 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-draw-line { stroke-dasharray: 200; stroke-dashoffset: 200; animation: drawLine 1.5s ease-out forwards; }
        .animate-drop-particle { animation: dropParticle 1.5s ease-in-out infinite; }
        .animate-pop-in { animation: popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
        .animate-slide-in-right { animation: slideInRight 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>
    </section>
  );
};

export default FeaturesSection;
