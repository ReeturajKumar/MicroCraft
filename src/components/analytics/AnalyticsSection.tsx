import { useState, useEffect } from "react";
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
    <div className="bg-white rounded-xl p-4 shadow-lg border border-slate-200/50 w-full animate-float-slow relative z-20 hover:shadow-xl hover:border-purple-200 transition-all">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg">
            <Activity size={16} className="text-purple-600" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-800">Cash Flow</h4>
            <p className="text-[10px] text-slate-500">Live transactions</p>
          </div>
        </div>
        <span className="text-[10px] font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full flex items-center gap-1 border border-green-100">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />{" "}
          Live
        </span>
      </div>

      <div className="h-28 w-full overflow-hidden relative">
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
    <div className="bg-white rounded-xl p-4 shadow-lg border border-slate-200/50 w-56 animate-float-medium absolute -bottom-0 -left-8 z-30 hidden md:block hover:shadow-xl hover:border-purple-200 transition-all">
      <div className="flex justify-between items-start mb-2">
        <h4 className="text-xs font-bold text-slate-600">Total Sales</h4>
        <div className="p-1.5 bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg">
          <DollarSign size={13} className="text-pink-600" />
        </div>
      </div>
      <div className="text-xl font-black text-slate-800 mb-1 transition-all">
        $
        {revenue.toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </div>
      <div className="flex items-center gap-2">
        <span className="text-[11px] font-bold text-green-600 flex items-center">
          <TrendingUp size={11} className="mr-0.5" /> +12.5%
        </span>
        <span className="text-[9px] text-slate-500">vs last month</span>
      </div>

      <div className="mt-3 h-1 bg-slate-100 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-pink-500 to-purple-500 w-2/3 animate-loading-bar" />
      </div>
    </div>
  );
};

// --- 3. Profitability Donut Widget (Top Right) ---
const ProfitWidget = () => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-lg border border-slate-200/50 w-52 animate-float-fast absolute -top-8 -right-12 z-10 hidden md:block hover:shadow-xl hover:border-purple-200 transition-all">
      <div className="flex justify-between items-center mb-3">
        <h4 className="text-xs font-bold text-slate-800">Profit Margin</h4>
        <MoreHorizontal size={14} className="text-slate-400" />
      </div>

      <div className="flex items-center justify-center relative">
        <svg viewBox="0 0 100 100" className="w-20 h-20 transform -rotate-90">
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
          <span className="text-lg font-bold text-slate-800">76%</span>
          <span className="text-[9px] text-slate-500 uppercase tracking-wide">
            Growth
          </span>
        </div>
      </div>

      <div className="mt-3 flex justify-center gap-3">
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-purple-500" />
          <span className="text-[9px] text-slate-600">Gross</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-slate-300" />
          <span className="text-[9px] text-slate-600">Net</span>
        </div>
      </div>
    </div>
  );
};

// --- 4. Text Rotator Component ---
const TextRotator = () => {
  const words = [
    "Business Growth",
    "Data Intelligence",
    "Strategic Decisions",
    "Revenue Optimization",
    "Performance Analytics",
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
      className="inline-block relative overflow-hidden align-bottom text-4xl md:text-5xl lg:text-6xl"
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

// --- Main Section Component ---

const AnalyticsSection = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-slate-50 to-white py-12 overflow-hidden font-sans">
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-purple-200/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-pink-200/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* --- LEFT: Text Content --- */}
          <div className="space-y-6 relative z-10">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4">
                Advanced Analytics for <TextRotator />
              </h2>

              <p className="text-base text-slate-600 max-w-lg leading-relaxed mb-6">
                Transform data into actionable insights to drive smarter
                decisions and accelerate growth with real-time dashboards and
                comprehensive reporting.
              </p>

              {/* Key Benefits */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-white rounded-lg p-3 border border-slate-200 shadow-sm hover:shadow-md hover:border-purple-200 transition-all">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-sm">
                      <TrendingUp size={14} className="text-white" />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-slate-900">45%</p>
                      <p className="text-[10px] text-slate-600">ROI Increase</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-3 border border-slate-200 shadow-sm hover:shadow-md hover:border-purple-200 transition-all">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-sm">
                      <Activity size={14} className="text-white" />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-slate-900">
                        Real-Time
                      </p>
                      <p className="text-[10px] text-slate-600">Dashboards</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg shadow-purple-500/25 flex items-center gap-2 group">
                Start Analyzing
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <button className="px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-xl font-semibold hover:border-purple-300 hover:bg-purple-50 transition-colors shadow-sm">
                Learn More
              </button>
            </div>

            {/* Trust Metrics */}
            <div className="pt-2 flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      src={`https://i.pravatar.cc/100?img=${i + 10}`}
                      className="w-8 h-8 rounded-full border-2 border-white"
                      alt="User"
                    />
                  ))}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">
                    1,200+ Businesses
                  </p>
                  <p className="text-xs text-slate-500">
                    Trust our analytical platform
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT: Live Graph Cluster --- */}
          <div className="relative w-full h-[420px] lg:h-[480px] flex items-center justify-center">
            {/* Central Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-200/20 to-pink-200/20 blur-[60px] rounded-full pointer-events-none" />

            {/* Container for Graphs - Distinct Positions */}
            <div className="relative w-full max-w-lg h-full">
              {/* 1. Profit Widget (Top Right) */}
              <div className="absolute top-8 right-0 md:right-2 z-10">
                <ProfitWidget />
              </div>

              {/* 2. Main Line Chart (Center) */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <LiveLineChart />
              </div>

              {/* 3. Revenue Widget (Bottom Left) */}
              <div className="absolute bottom-8 left-0 md:left-2 z-30">
                <LiveRevenueWidget />
              </div>

              {/* 4. Decorative Icon (Top Left floating) */}
              <div className="absolute top-8 left-0 bg-white p-2.5 rounded-xl shadow-lg border border-slate-200/50 animate-bounce-slow-analytics hidden md:block z-0">
                <div className="w-7 h-7 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                  <TrendingUp size={16} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsSection;
