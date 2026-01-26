import React, { useState, useEffect } from "react";
import {
  ArrowUpRight,
  MoreHorizontal,
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
    <div className="flex flex-col gap-3 w-full h-full">
      {/* Top Stats Row */}
      <div className="flex gap-3">
        {/* Task Stat */}
        <div className="bg-white/80 backdrop-blur-xl p-3 rounded-xl shadow-md shadow-purple-500/5 border border-purple-100 flex-1 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500"></div>
          <div className="flex justify-between mb-1.5">
            <div className="p-1 bg-purple-50 rounded-lg text-purple-600">
              <Activity size={14} />
            </div>
            <span className="text-[9px] bg-green-50 text-green-600 px-1.5 py-0.5 rounded-full font-bold">
              +12%
            </span>
          </div>
          <div className="text-xl font-black text-slate-900">{totalUsers}</div>
          <div className="text-[9px] text-slate-500">Active Tasks</div>
        </div>

        {/* Revenue Stat */}
        <div className="bg-white/80 backdrop-blur-xl p-3 rounded-xl shadow-md shadow-pink-500/5 border border-pink-100 flex-1 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-pink-500 to-purple-500"></div>
          <div className="flex justify-between mb-1.5">
            <div className="p-1 bg-pink-50 rounded-lg text-pink-600">
              <TrendingUp size={14} />
            </div>
          </div>
          <div className="text-base font-bold text-slate-900">$14k</div>
          <div className="h-6 w-full mt-1.5">
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
      <div className="bg-white p-3 rounded-lg shadow-md shadow-slate-200/50 border border-slate-100 flex-1">
        <div className="flex justify-between items-center mb-2">
          <h4 className="text-[10px] font-bold text-slate-800">
            Team Performance
          </h4>
          <MoreHorizontal size={12} className="text-slate-300" />
        </div>
        <div className="space-y-2">
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
    <div className="bg-white p-4 rounded-xl shadow-md shadow-slate-200/50 border border-slate-100 w-full h-full relative overflow-hidden">
      {/* Background Grid */}
      <div className="relative z-10 flex flex-col items-center gap-2 h-full justify-center">
        {/* Node 1 - Data Collection */}
        <div className="bg-slate-900 text-white px-3 py-1.5 rounded-lg text-[10px] font-bold shadow-sm shadow-slate-900/20 z-10 animate-pop-in">
          Collect Data
        </div>

        {/* Connecting Line 1 */}
        <div className="h-5 w-0.5 bg-slate-100 relative overflow-visible">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.8)] animate-drop-particle"></div>
        </div>

        {/* Node 2 - Data Processing */}
        <div
          className="bg-white border-2 border-purple-100 text-purple-600 px-3 py-1.5 rounded-lg text-[10px] font-bold z-10 animate-pop-in"
          style={{ animationDelay: "0.4s" }}
        >
          Process & Analyze
        </div>

        {/* Connecting Line 2 */}
        <div className="h-5 w-0.5 bg-slate-100 relative overflow-visible">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)] animate-drop-particle"
            style={{ animationDelay: "0.7s" }}
          ></div>
        </div>

        {/* Node 3 - Generate Insights */}
        <div
          className="bg-white border-2 border-blue-100 text-blue-600 px-3 py-1.5 rounded-lg text-[10px] font-bold z-10 animate-pop-in"
          style={{ animationDelay: "1s" }}
        >
          Generate Insights
        </div>

        {/* Connecting Line 3 */}
        <div className="h-5 w-0.5 bg-slate-100 relative overflow-visible">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-pink-500 rounded-full shadow-[0_0_8px_rgba(236,72,153,0.8)] animate-drop-particle"
            style={{ animationDelay: "1.3s" }}
          ></div>
        </div>

        {/* Node 4 - Create Reports */}
        <div
          className="bg-white border-2 border-pink-100 text-pink-600 px-3 py-1.5 rounded-lg text-[10px] font-bold z-10 animate-pop-in"
          style={{ animationDelay: "1.6s" }}
        >
          Create Reports
        </div>

        {/* Connecting Line 4 */}
        <div className="h-5 w-0.5 bg-slate-100 relative overflow-visible">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-indigo-500 rounded-full shadow-[0_0_8px_rgba(99,102,241,0.8)] animate-drop-particle"
            style={{ animationDelay: "1.9s" }}
          ></div>
        </div>

        {/* Node 5 - Deliver Results */}
        <div
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg text-xs font-bold shadow-sm shadow-purple-500/30 z-10 animate-pop-in"
          style={{ animationDelay: "2.2s" }}
        >
          Deliver Results
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
    <div className="bg-white p-3 rounded-xl shadow-md shadow-slate-200/50 border border-slate-100 w-full h-full overflow-hidden relative">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-1.5">
          <Layers size={11} className="text-purple-500" />
          <h4 className="text-[10px] font-bold text-slate-800">Recent Deals</h4>
        </div>
        <div className="h-1 w-1 rounded-full bg-green-500 animate-ping"></div>
      </div>

      <div className="space-y-1.5">
        {/* Card 1 */}
        <div
          className="bg-slate-50 p-2.5 rounded-lg flex items-center justify-between animate-slide-in-right"
          style={{ animationDelay: "0s" }}
        >
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-[10px]">
              V
            </div>
            <div>
              <div className="text-[11px] font-bold text-slate-800">
                Voxelx Inc
              </div>
              <div className="text-[9px] text-slate-500">Negotiation</div>
            </div>
          </div>
          <span className="text-[11px] font-bold text-slate-900">$12k</span>
        </div>

        {/* Card 2 */}
        <div
          className="bg-slate-50 p-2.5 rounded-lg flex items-center justify-between animate-slide-in-right"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-bold text-[10px]">
              F
            </div>
            <div>
              <div className="text-[11px] font-bold text-slate-800">Framer</div>
              <div className="text-[9px] text-slate-500">Closed Won</div>
            </div>
          </div>
          <span className="text-[11px] font-bold text-slate-900">$8.5k</span>
        </div>

        {/* Card 3 */}
        <div
          className="bg-slate-50 p-2.5 rounded-lg flex items-center justify-between animate-slide-in-right"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-[10px]">
              S
            </div>
            <div>
              <div className="text-[11px] font-bold text-slate-800">Stripe</div>
              <div className="text-[9px] text-slate-500">Proposal</div>
            </div>
          </div>
          <span className="text-[11px] font-bold text-slate-900">$24k</span>
        </div>

        {/* Card 4 */}
        <div
          className="bg-slate-50 p-2.5 rounded-lg flex items-center justify-between animate-slide-in-right"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-[10px]">
              A
            </div>
            <div>
              <div className="text-[11px] font-bold text-slate-800">Airbnb</div>
              <div className="text-[9px] text-slate-500">Qualified</div>
            </div>
          </div>
          <span className="text-[11px] font-bold text-slate-900">$18k</span>
        </div>

        {/* Card 5 */}
        <div
          className="bg-slate-50 p-2.5 rounded-lg flex items-center justify-between animate-slide-in-right"
          style={{ animationDelay: "0.8s" }}
        >
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-[10px]">
              N
            </div>
            <div>
              <div className="text-[11px] font-bold text-slate-800">
                Netflix
              </div>
              <div className="text-[9px] text-slate-500">Contract Sent</div>
            </div>
          </div>
          <span className="text-[11px] font-bold text-slate-900">$32k</span>
        </div>

        {/* Card 6 */}
        <div
          className="bg-slate-50 p-2.5 rounded-lg flex items-center justify-between animate-slide-in-right"
          style={{ animationDelay: "1s" }}
        >
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 font-bold text-[10px]">
              M
            </div>
            <div>
              <div className="text-[11px] font-bold text-slate-800">
                Microsoft
              </div>
              <div className="text-[9px] text-slate-500">In Review</div>
            </div>
          </div>
          <span className="text-[11px] font-bold text-slate-900">$45k</span>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// MAIN COMPONENT
// ==========================================

const RotatingFeatureText = () => {
  const words = [
    "Selling Easier",
    "Scaling Faster",
    "Growth Simpler",
    "Operations Smoother",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className="inline-block relative overflow-hidden align-bottom text-2xl md:text-3xl lg:text-4xl"
      style={{ height: "1.2em" }}
    >
      {words.map((word, index) => (
        <span
          key={word}
          className="absolute left-0 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 whitespace-nowrap font-bold"
          style={{
            transform:
              index === currentIndex
                ? "translateY(0%)"
                : index === (currentIndex - 1 + words.length) % words.length
                ? "translateY(-100%)"
                : "translateY(100%)",
            opacity: index === currentIndex ? 1 : 0,
            transition:
              "transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {word}
        </span>
      ))}
      {/* Invisible span to set container width */}
      <span className="invisible whitespace-nowrap font-bold">
        {words[currentIndex]}
      </span>
    </span>
  );
};

const FeaturesSection = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-white to-slate-50 py-3 overflow-hidden font-sans">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-purple-200/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-pink-200/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* --- Header --- */}
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-2 flex flex-wrap items-center justify-center gap-2">
            <span>Features That Make</span>
            <RotatingFeatureText />
          </h2>
          <p className="text-sm text-slate-600 max-w-2xl mx-auto">
            Powerful analytics and automation tools to help you convert, engage,
            and retain more users
          </p>
        </div>

        {/* --- Grid Layout --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* --- Card 1 (Analytics) --- */}
          <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg border border-slate-200/50 flex flex-col gap-4 overflow-hidden relative group hover:shadow-xl hover:border-purple-200 transition-all">
            {/* Decorative Background Blob */}
            <div className="absolute -right-20 -top-20 w-72 h-72 bg-purple-50 rounded-full blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-700"></div>

            <div className="flex flex-col gap-3 text-left relative z-10">
              <h3 className="text-lg md:text-xl font-bold text-slate-900 leading-tight">
                Manage Operations with <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                  Rich Analytics
                </span>
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Derive actionable insights and measure operations in real-time
                with comprehensive analytics dashboards.
              </p>
            </div>

            <div className="w-full h-52 relative z-10 flex-1">
              {/* 5-second loop cycle for graphs */}
              <LiveLoop duration={5000} className="relative">
                <AnalyticsMockup />
              </LiveLoop>
            </div>

            <button className="px-5 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:from-purple-700 hover:to-pink-700 transition-all shadow-md shadow-purple-500/25 text-sm relative z-10">
              Explore Analytics <ArrowUpRight size={14} />
            </button>
          </div>

          {/* --- Card 2 (Workflow) --- */}

          <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-4 md:p-6 shadow-xl shadow-purple-500/30 flex flex-col gap-4 text-white relative overflow-hidden hover:shadow-2xl hover:shadow-purple-500/40 transition-all">
            {/* Abstract Rings */}
            <div className="absolute -left-20 -bottom-40 w-72 h-72 border-[25px] border-white/10 rounded-full blur-sm"></div>
            <div className="absolute left-16 -bottom-16 w-36 h-36 border-[12px] border-white/10 rounded-full blur-sm"></div>

            <div className="flex flex-col gap-3 relative z-10">
              <h3 className="text-lg md:text-xl font-bold">
                Performance Management
              </h3>
              <p className="text-purple-100 text-xs opacity-90">
                Generate price quotes and access sales scripts instantly with
                the right set of tools for your team.
              </p>
            </div>

            <div className="w-full h-[240px] relative z-10 flex-1">
              {/* 4-second loop cycle for sliding cards */}
              <LiveLoop duration={4000}>
                <PipelineMockup />
              </LiveLoop>
            </div>
          </div>

          {/* --- Card 3 (Workflow) --- */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-4 md:p-6 shadow-xl border border-slate-700/50 flex flex-col gap-4 text-center relative overflow-hidden hover:shadow-2xl hover:border-purple-500/30 transition-all">
            {/* Dark Gradient Overlay */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>

            <div className="relative z-10 w-full flex flex-col gap-2">
              <h3 className="text-lg md:text-xl font-bold text-white">
                Streamline Workflow
              </h3>
              <p className="text-slate-400 text-xs">
                Automate your analytics workflow with intelligent pipelines.
              </p>
            </div>

            <div className="relative z-10 w-full h-[200px] flex-1">
              {/* 3-second loop cycle for particles */}
              <LiveLoop duration={3000}>
                <WorkflowMockup />
              </LiveLoop>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
