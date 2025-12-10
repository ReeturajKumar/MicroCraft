import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  TrendingUp,
  Activity,
  MoreHorizontal,
  DollarSign,
} from "lucide-react";

// --- 1. Live Line Chart Widget (Center) ---
const LiveLineChart = () => {
  const [dataPoints, setDataPoints] = useState([
    30, 45, 35, 60, 50, 75, 65, 90, 80,
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDataPoints((prev) => {
        const newPoint = Math.floor(Math.random() * 40) + 40;
        return [...prev.slice(1), newPoint];
      });
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const points = dataPoints.map((p, i) => `${i * 35},${100 - p}`).join(" L");
  const areaPath = `${points} L${(dataPoints.length - 1) * 35},120 L0,120 Z`;

  return (
    <div className="bg-white rounded-2xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 w-full animate-float-slow relative z-20">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-purple-50 rounded-lg">
            <Activity size={18} className="text-purple-600" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-800">Cash Flow</h4>
            <p className="text-[10px] text-slate-400">Live transactions</p>
          </div>
        </div>
        <span className="text-xs font-medium text-green-500 bg-green-50 px-2 py-1 rounded-full flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />{" "}
          Live
        </span>
      </div>

      <div className="h-32 w-full overflow-hidden relative">
        <svg
          className="w-full h-full"
          viewBox="0 0 280 120"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="gradientPurple" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#d8b4fe" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d={`M${points}`}
            fill="none"
            stroke="#a855f7"
            strokeWidth="3"
            strokeLinecap="round"
            className="transition-all duration-1000 ease-in-out"
          />
          <path
            d={`M${areaPath}`}
            fill="url(#gradientPurple)"
            className="transition-all duration-1000 ease-in-out"
          />
        </svg>
      </div>
    </div>
  );
};

// --- 2. Live Revenue Widget (Bottom Left) ---
const LiveRevenueWidget = () => {
  const [revenue, setRevenue] = useState(14878.5);

  useEffect(() => {
    const interval = setInterval(() => {
      setRevenue((prev) => prev + Math.random() * 100);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 w-64 animate-float-medium absolute -bottom-0 -left-12 z-30 hidden md:block">
      <div className="flex justify-between items-start mb-2">
        <h4 className="text-sm font-bold text-slate-500">Total Sales</h4>
        <div className="p-1.5 bg-pink-50 rounded-full">
          <DollarSign size={14} className="text-pink-500" />
        </div>
      </div>
      <div className="text-2xl font-black text-slate-800 mb-1 transition-all">
        $
        {revenue.toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xs font-bold text-green-500 flex items-center">
          <TrendingUp size={12} className="mr-1" /> +12.5%
        </span>
        <span className="text-[10px] text-slate-400">vs last month</span>
      </div>

      <div className="mt-4 h-1 bg-slate-100 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-pink-500 to-purple-500 w-2/3 animate-loading-bar" />
      </div>
    </div>
  );
};

// --- 3. Profitability Donut Widget (Top Right) ---
const ProfitWidget = () => {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 w-56 animate-float-fast absolute -top-10 -right-16 z-10 hidden md:block">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-sm font-bold text-slate-800">Profit Margin</h4>
        <MoreHorizontal size={16} className="text-slate-300" />
      </div>

      <div className="flex items-center justify-center relative">
        <svg viewBox="0 0 100 100" className="w-24 h-24 transform -rotate-90">
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="#f1f5f9"
            strokeWidth="8"
            fill="none"
          />
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="url(#gradientDonut)"
            strokeWidth="8"
            fill="none"
            strokeDasharray="251.2"
            strokeDashoffset="60"
            strokeLinecap="round"
            className="animate-donut-fill"
          />
          <defs>
            <linearGradient id="gradientDonut" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-xl font-bold text-slate-800">76%</span>
          <span className="text-[9px] text-slate-400 uppercase tracking-wide">
            Growth
          </span>
        </div>
      </div>

      <div className="mt-4 flex justify-center gap-3">
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-purple-500" />
          <span className="text-[10px] text-slate-500">Gross</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-slate-200" />
          <span className="text-[10px] text-slate-500">Net</span>
        </div>
      </div>
    </div>
  );
};

// --- 4. Text Rotator Component ---
const TextRotator = () => {
  const words = ["Business", "Revenue ", "Market", "Success"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className="inline-block relative overflow-hidden align-bottom"
      style={{ height: "1.2em", minWidth: "300px" }}
    >
      {words.map((word, index) => (
        <span
          key={word}
          className="absolute left-0 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 whitespace-nowrap"
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
    </span>
  );
};

// --- Main Section Component ---

const AnalyticsSection = () => {
  return (
    <section className="relative w-full bg-white py-18 px-4 md:px-8 overflow-hidden font-sans">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-50/50 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* --- LEFT: Text Content --- */}
        <div className="space-y-8 relative z-10">
          <h2 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-[1.1]">
            <span className="block mb-2">Analytical solutions</span>
            <span className="block">
              for your <TextRotator />
            </span>
          </h2>

          <div className="reveal-wrapper">
            <p className="reveal-inner delay-300 text-lg text-slate-500 max-w-lg leading-relaxed">
              Leverage business intelligence to catalyze your MSME's potential.
              Optimize your data usage to build a solid foundation before taking
              advantage of AI-driven scaling.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-2 animate-fade-in delay-500">
            <button className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-purple-600 transition-colors shadow-lg shadow-slate-900/20 flex items-center gap-2 group">
              Start Analyzing
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
            <button className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-bold hover:border-purple-200 hover:bg-purple-50 transition-colors">
              About Platform
            </button>
          </div>

          {/* Trust Metric */}
          <div className="pt-4 flex items-center gap-4 animate-fade-in delay-700">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src={`https://i.pravatar.cc/100?img=${i + 10}`}
                  className="w-10 h-10 rounded-full border-2 border-white"
                  alt="User"
                />
              ))}
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">
                1,200+ Businesses
              </p>
              <p className="text-xs text-slate-500">
                Trust our analytical tools
              </p>
            </div>
          </div>
        </div>

        {/* --- RIGHT: Live Graph Cluster --- */}
        <div className="relative w-full h-[500px] flex items-center justify-center">
          {/* Central Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-200/30 to-pink-200/30 blur-[60px] rounded-full pointer-events-none" />

          {/* Container for Graphs - Distinct Positions */}
          <div className="relative w-full max-w-lg h-full">
            {/* 1. Profit Widget (Top Right) */}
            <div className="absolute top-12 right-0 md:right-4 z-10">
              <ProfitWidget />
            </div>

            {/* 2. Main Line Chart (Center) */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
              <LiveLineChart />
            </div>

            {/* 3. Revenue Widget (Bottom Left) */}
            <div className="absolute bottom-10 left-0 md:left-4 z-30">
              <LiveRevenueWidget />
            </div>

            {/* 4. Decorative Icon (Top Left floating) */}
            <div className="absolute top-10 left-0 bg-white p-3 rounded-xl shadow-lg border border-slate-50 animate-bounce-slow hidden md:block z-0">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <TrendingUp size={18} className="text-green-600" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- CSS Animations --- */}
      <style>{`
        /* Text Reveal Animation */
        @keyframes revealUp {
          from { transform: translateY(110%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        /* Text Rotator Animations */
        @keyframes slideUpIn {
          0% { transform: translateY(100%); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes slideUpOut {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(-100%); opacity: 0; }
        }
        
        /* Floating Animations */
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes bounce-slow {
           0%, 100% { transform: translateY(0); }
           50% { transform: translateY(-20px); }
        }

        /* Chart Animations */
        @keyframes loading-bar {
          0% { width: 0%; }
          50% { width: 70%; }
          100% { width: 100%; }
        }
        @keyframes donut-fill {
           0% { stroke-dashoffset: 251.2; }
           100% { stroke-dashoffset: 60; }
        }

        /* Utility Classes */
        .reveal-wrapper {
          overflow: hidden;
          display: block;
        }
        .reveal-inner {
          display: block;
          animation: revealUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
          transform: translateY(110%);
        }
        
        .animate-fade-in { animation: fadeIn 1s ease-out forwards; opacity: 0; }
        .animate-slide-up-in { animation: slideUpIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-slide-up-out { animation: slideUpOut 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 5s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 7s ease-in-out infinite; }
        .animate-loading-bar { animation: loading-bar 2s ease-out infinite alternate; }
        .animate-donut-fill { animation: donut-fill 2s ease-out forwards; }
        .animate-bounce-slow { animation: bounce-slow 4s ease-in-out infinite; }

        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-500 { animation-delay: 500ms; }
        .delay-700 { animation-delay: 700ms; }
      `}</style>
    </section>
  );
};

export default AnalyticsSection;
