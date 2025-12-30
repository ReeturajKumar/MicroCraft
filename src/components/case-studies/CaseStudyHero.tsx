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
      className="inline-block relative overflow-visible sm:overflow-hidden align-bottom"
      style={{ height: "1.2em", minWidth: "150px" }}
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
    <section className="relative w-full bg-gradient-to-b from-slate-50 to-white py-8 sm:py-10 md:py-12 overflow-hidden font-sans">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-purple-200/10 rounded-full blur-2xl sm:blur-3xl" />
        <div className="absolute bottom-20 left-10 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-pink-200/10 rounded-full blur-2xl sm:blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* === LEFT COLUMN: TYPOGRAPHY (Span 7 cols) === */}
          <div className="lg:col-span-7 flex flex-col justify-start text-center lg:text-left">
            {/* Main Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-4 sm:mb-5 md:mb-6 flex flex-wrap items-center justify-center lg:justify-start px-2">
              How Real Businesses <RotatingText />
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-6 sm:mb-7 md:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed px-2">
              Explore detailed case studies from companies that achieved
              remarkable success. Discover the strategies, challenges, and
              measurable outcomes that drove their transformation and growth.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-2 md:gap-3 lg:gap-4 mb-6 sm:mb-7 md:mb-8 max-w-2xl mx-auto lg:mx-0">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg sm:rounded-xl p-4 sm:p-3 md:p-4 lg:p-5 border-2 border-purple-200/50 shadow-lg hover:shadow-xl hover:scale-105 hover:border-purple-400 transition-all duration-300 group">
                <div className="flex items-center justify-center sm:justify-start mb-3 sm:mb-2 md:mb-3">
                  <div className="p-2 sm:p-1.5 md:p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg shadow-md group-hover:scale-110 transition-transform">
                    <TrendingUp className="text-white" size={14} />
                  </div>
                </div>
                <div className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text mb-1 sm:mb-0.5 md:mb-1 text-center sm:text-left">
                  +245%
                </div>
                <div className="text-xs sm:text-[10px] md:text-xs font-semibold text-slate-700 uppercase tracking-wide leading-tight text-center sm:text-left">
                  Avg. Growth Rate
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg sm:rounded-xl p-4 sm:p-3 md:p-4 lg:p-5 border-2 border-green-200/50 shadow-lg hover:shadow-xl hover:scale-105 hover:border-green-400 transition-all duration-300 group">
                <div className="flex items-center justify-center sm:justify-start mb-3 sm:mb-2 md:mb-3">
                  <div className="p-2 sm:p-1.5 md:p-2 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg shadow-md group-hover:scale-110 transition-transform">
                    <DollarSign className="text-white" size={14} />
                  </div>
                </div>
                <div className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-extrabold bg-gradient-to-r from-green-600 to-emerald-600 text-transparent bg-clip-text mb-1 sm:mb-0.5 md:mb-1 text-center sm:text-left">
                  $2.5B+
                </div>
                <div className="text-xs sm:text-[10px] md:text-xs font-semibold text-slate-700 uppercase tracking-wide leading-tight text-center sm:text-left">
                  Revenue Generated
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg sm:rounded-xl p-4 sm:p-3 md:p-4 lg:p-5 border-2 border-blue-200/50 shadow-lg hover:shadow-xl hover:scale-105 hover:border-blue-400 transition-all duration-300 group">
                <div className="flex items-center justify-center sm:justify-start mb-3 sm:mb-2 md:mb-3">
                  <div className="p-2 sm:p-1.5 md:p-2 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg shadow-md group-hover:scale-110 transition-transform">
                    <Users className="text-white" size={14} />
                  </div>
                </div>
                <div className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-600 text-transparent bg-clip-text mb-1 sm:mb-0.5 md:mb-1 text-center sm:text-left">
                  15K+
                </div>
                <div className="text-xs sm:text-[10px] md:text-xs font-semibold text-slate-700 uppercase tracking-wide leading-tight text-center sm:text-left">
                  Happy Clients
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <button className="px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg sm:rounded-xl font-bold hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg shadow-purple-500/30 flex items-center justify-center gap-2 text-sm sm:text-base w-full sm:w-auto">
                View Success Stories
                <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
              </button>
              <button className="px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 bg-white text-slate-700 border-2 border-slate-300 rounded-lg sm:rounded-xl font-bold hover:border-purple-400 hover:bg-purple-50 transition-colors shadow-sm w-full sm:w-auto">
                Get Started
              </button>
            </div>
          </div>

          {/* === RIGHT COLUMN: THE METRICS GRID (Span 5 cols) === */}
          <div className="lg:col-span-5 relative h-auto sm:h-[400px] md:h-[450px] lg:h-[500px] flex items-start justify-center mt-6 sm:mt-8 lg:mt-0">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-lg">
              {/* CELL 1: Main Graph (Spans 2 cols) */}
              <div className="col-span-2 bg-white rounded-xl sm:rounded-2xl border border-slate-200/50 p-4 sm:p-5 md:p-6 shadow-xl shadow-purple-500/10 group hover:shadow-2xl hover:border-purple-200 transition-all">
                <div className="flex justify-between items-start mb-3 sm:mb-4 md:mb-5">
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] sm:text-xs text-slate-500 font-medium uppercase tracking-wider mb-1.5 sm:mb-2">
                      Revenue Growth
                    </div>
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 flex items-center gap-1.5 sm:gap-2">
                      +245%
                      <TrendingUp className="text-green-500" size={18} />
                    </div>
                    <div className="text-xs sm:text-sm text-slate-600 mt-1">
                      Year-over-year increase
                    </div>
                  </div>
                  <div className="p-2 sm:p-2.5 md:p-3 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg sm:rounded-xl shadow-md flex-shrink-0">
                    <BarChart3 className="text-purple-600" size={16} />
                  </div>
                </div>
                {/* Micro-Animation: Line Chart */}
                <div className="relative h-16 sm:h-20 md:h-24 w-full">
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
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeDasharray="1000"
                      strokeDashoffset="1000"
                      className="animate-draw-line-1000"
                    />
                  </svg>
                </div>
              </div>

              {/* CELL 2: Customer Success */}
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-xl shadow-purple-500/30 flex flex-col justify-between group hover:shadow-2xl transition-all">
                <div>
                  <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-white/20 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                    <Users size={16} className="sm:w-5 sm:h-5 md:w-5 md:h-5 text-white" />
                  </div>
                  <div className="text-[10px] sm:text-xs text-purple-100 mb-1.5 sm:mb-2">
                    Customer Base
                  </div>
                  <div className="text-xl sm:text-2xl font-bold mb-0.5 sm:mb-1">15,000+</div>
                  <div className="text-[10px] sm:text-xs text-purple-100">
                    Active Businesses
                  </div>
                </div>
                <div className="bg-white/20 rounded-lg sm:rounded-xl p-2 sm:p-2.5 md:p-3 backdrop-blur-sm">
                  <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-white mb-0.5 sm:mb-1">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse"></span>
                    Growing Daily
                  </div>
                </div>
              </div>

              {/* CELL 3: Efficiency Metric */}
              <div className="bg-white rounded-xl sm:rounded-2xl border border-slate-200/50 p-4 sm:p-5 md:p-6 shadow-lg flex flex-col justify-center group hover:shadow-xl hover:border-purple-200 hover:-translate-y-0.5 transition-all">
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <div className="p-1.5 sm:p-2 bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg sm:rounded-xl">
                    <Zap size={14} className="sm:w-[18px] sm:h-[18px] text-pink-600" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold text-pink-600 uppercase">
                    Performance
                  </span>
                </div>
                <div className="text-xl sm:text-2xl font-bold text-slate-900">
                  3x Faster
                </div>
                <div className="text-[10px] sm:text-xs text-slate-500 mt-1.5 sm:mt-2">
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
