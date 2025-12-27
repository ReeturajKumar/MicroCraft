import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  TrendingUp,
  Zap,
  BarChart3,
  Users,
  DollarSign,
} from "lucide-react";

const RotatingText = () => {
  const words = [
    "Doubled Revenue",
    "Scaled Operations",
    "Broke Growth Barriers",
    "Transformed Completely",
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
      className="inline-block relative overflow-hidden align-bottom"
      style={{ height: "1.2em", minWidth: "200px" }}
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

const CaseStudiesHero: React.FC = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-slate-50 to-white py-12 overflow-hidden font-sans">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-purple-200/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-pink-200/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* === LEFT COLUMN: TYPOGRAPHY (Span 7 cols) === */}
          <div className="lg:col-span-7 flex flex-col justify-start text-center lg:text-left">
            {/* Main Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-6 flex flex-wrap items-center justify-center lg:justify-start">
              How Real Businesses <RotatingText />
            </h1>

            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Explore detailed case studies from companies that achieved
              remarkable success. Discover the strategies, challenges, and
              measurable outcomes that drove their transformation and growth.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto lg:mx-0">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-5 border-2 border-purple-200/50 shadow-lg hover:shadow-xl hover:scale-105 hover:border-purple-400 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg shadow-md group-hover:scale-110 transition-transform">
                    <TrendingUp className="text-white" size={16} />
                  </div>
                </div>
                <div className="text-3xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text mb-1">
                  +245%
                </div>
                <div className="text-xs font-semibold text-slate-700 uppercase tracking-wide">
                  Avg. Growth Rate
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-5 border-2 border-green-200/50 shadow-lg hover:shadow-xl hover:scale-105 hover:border-green-400 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg shadow-md group-hover:scale-110 transition-transform">
                    <DollarSign className="text-white" size={16} />
                  </div>
                </div>
                <div className="text-3xl font-extrabold bg-gradient-to-r from-green-600 to-emerald-600 text-transparent bg-clip-text mb-1">
                  $2.5B+
                </div>
                <div className="text-xs font-semibold text-slate-700 uppercase tracking-wide">
                  Revenue Generated
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-5 border-2 border-blue-200/50 shadow-lg hover:shadow-xl hover:scale-105 hover:border-blue-400 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg shadow-md group-hover:scale-110 transition-transform">
                    <Users className="text-white" size={16} />
                  </div>
                </div>
                <div className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-600 text-transparent bg-clip-text mb-1">
                  15K+
                </div>
                <div className="text-xs font-semibold text-slate-700 uppercase tracking-wide">
                  Happy Clients
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg shadow-purple-500/30 flex items-center justify-center gap-2 text-base">
                View Success Stories
                <ArrowRight size={18} />
              </button>
              <button className="px-8 py-4 bg-white text-slate-700 border-2 border-slate-300 rounded-xl font-bold hover:border-purple-400 hover:bg-purple-50 transition-colors shadow-sm">
                Get Started Free
              </button>
            </div>
          </div>

          {/* === RIGHT COLUMN: THE METRICS GRID (Span 5 cols) === */}
          <div className="lg:col-span-5 relative h-[500px] flex items-start justify-center hidden lg:flex">
            <div className="grid grid-cols-2 gap-4 w-full max-w-lg">
              {/* CELL 1: Main Graph (Spans 2 cols) */}
              <div className="col-span-2 bg-white rounded-2xl border border-slate-200/50 p-6 shadow-xl shadow-purple-500/10 group hover:shadow-2xl hover:border-purple-200 transition-all">
                <div className="flex justify-between items-start mb-5">
                  <div>
                    <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-2">
                      Revenue Growth
                    </div>
                    <div className="text-3xl font-bold text-slate-900 flex items-center gap-2">
                      +245%
                      <TrendingUp className="text-green-500" size={24} />
                    </div>
                    <div className="text-sm text-slate-600 mt-1">
                      Year-over-year increase
                    </div>
                  </div>
                  <div className="p-3 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl shadow-md">
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
                      className="animate-draw-line-1000"
                    />
                  </svg>
                </div>
              </div>

              {/* CELL 2: Customer Success */}
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white p-6 rounded-2xl shadow-xl shadow-purple-500/30 flex flex-col justify-between group hover:shadow-2xl transition-all">
                <div>
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                    <Users size={20} className="text-white" />
                  </div>
                  <div className="text-xs text-purple-100 mb-2">
                    Customer Base
                  </div>
                  <div className="text-2xl font-bold mb-1">15,000+</div>
                  <div className="text-xs text-purple-100">
                    Active Businesses
                  </div>
                </div>
                <div className="bg-white/20 rounded-xl p-3 backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-xs text-white mb-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    Growing Daily
                  </div>
                </div>
              </div>

              {/* CELL 3: Efficiency Metric */}
              <div className="bg-white rounded-2xl border border-slate-200/50 p-6 shadow-lg flex flex-col justify-center group hover:shadow-xl hover:border-purple-200 hover:-translate-y-0.5 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl">
                    <Zap size={18} className="text-pink-600" />
                  </div>
                  <span className="text-xs font-bold text-pink-600 uppercase">
                    Performance
                  </span>
                </div>
                <div className="text-2xl font-bold text-slate-900">
                  3x Faster
                </div>
                <div className="text-xs text-slate-500 mt-2">
                  Operations Speed
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
