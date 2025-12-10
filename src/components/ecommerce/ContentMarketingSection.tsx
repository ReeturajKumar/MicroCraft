import React, { useState } from "react";
import {
  Check,
  Circle,
  BarChart3,
  Instagram,
  Facebook,
  Twitter,
  Mail,
} from "lucide-react";

const FEATURES = [
  {
    id: 1,
    title: "Crafting Compelling Narratives",
    description: "We tell stories that resonate with your audience.",
  },
  {
    id: 2,
    title: "Strategic Content Marketing",
    description: "Data-driven strategies to maximize reach.",
  },
  {
    id: 3,
    title: "Building Authority and Trust",
    description: "Establish your brand as an industry leader.",
  },
  {
    id: 4,
    title: "Measurable Results",
    description: "Real-time analytics to track your growth.",
  },
];

export default function ContentMarketingSection() {
  const [activeFeature, setActiveFeature] = useState(2); // Default to 2nd item active like image

  return (
    <section className="py-20 bg-white overflow-hidden relative">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* --- LEFT COLUMN: Visuals --- */}
          <div className="relative h-[500px] w-full flex items-center justify-center">
            {/* Background Decor */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-100/40 to-pink-100/40 rounded-full blur-3xl opacity-50" />

            {/* Main Person Image */}
            <div className="relative z-10 w-64 md:w-80 h-auto aspect-[3/4]">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
                alt="Content Creator"
                className="w-full h-full object-cover rounded-2xl shadow-2xl animate-fade-in"
              />

              {/* Dashed Lines (SVG Overlay) */}
              <svg className="absolute inset-0 w-[150%] h-[150%] -left-[25%] -top-[25%] pointer-events-none z-0 hidden md:block">
                {/* Line to Stats Chart */}
                <path
                  d="M 280 150 Q 320 100 380 80"
                  fill="none"
                  stroke="#e2e8f0"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                />
                {/* Line to Circle Chart */}
                <path
                  d="M 100 300 Q 50 300 20 250"
                  fill="none"
                  stroke="#e2e8f0"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                />
              </svg>
            </div>

            {/* FLOATING WIDGET 1: Bar Chart (Top Right) */}
            <div className="absolute top-0 right-0 md:-right-4 bg-white p-4 rounded-2xl shadow-lg shadow-purple-900/5 animate-float delay-100 w-48">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 bg-purple-100 rounded-md">
                  <BarChart3 size={16} className="text-purple-600" />
                </div>
                <span className="text-xs font-bold text-slate-700">
                  Avg. Sales
                </span>
              </div>
              <div className="flex items-end justify-between h-16 gap-2">
                {[40, 70, 50, 90, 60].map((h, i) => (
                  <div
                    key={i}
                    className="w-full bg-slate-50 rounded-t-sm relative h-full flex items-end overflow-hidden group"
                  >
                    <div
                      className="w-full bg-pink-400 rounded-t-sm animate-grow group-hover:bg-purple-500 transition-colors duration-300"
                      style={{
                        height: `${h}%`,
                        animationDelay: `${i * 100}ms`,
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* FLOATING WIDGET 2: Circular Progress (Left) */}
            <div className="absolute bottom-10 -left-4 md:-left-12 bg-white p-5 rounded-2xl shadow-lg shadow-purple-900/5 animate-float delay-700 w-40 flex flex-col items-center">
              <div className="relative w-20 h-20 mb-2">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="40"
                    cy="40"
                    r="32"
                    stroke="#f1f5f9"
                    strokeWidth="8"
                    fill="transparent"
                  />
                  <circle
                    cx="40"
                    cy="40"
                    r="32"
                    stroke="url(#gradient)"
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray={200}
                    strokeDashoffset={40} // 80% filled
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#c084fc" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-bold text-slate-800">80%</span>
                </div>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-slate-900">17K+</p>
                <p className="text-[10px] text-slate-400">
                  Contributions in 2024
                </p>
              </div>
            </div>

            {/* FLOATING WIDGET 3: Social Icons (Bottom Right) */}
            <div className="absolute -bottom-6 right-8 bg-white py-3 px-4 rounded-full shadow-xl shadow-purple-900/10 flex items-center gap-3 animate-fade-in delay-500">
              <span className="text-[10px] font-semibold text-slate-500 mr-2">
                Platforms
              </span>
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center border-2 border-white">
                  <Facebook size={14} />
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 to-purple-600 text-white flex items-center justify-center border-2 border-white">
                  <Instagram size={14} />
                </div>
                <div className="w-8 h-8 rounded-full bg-sky-500 text-white flex items-center justify-center border-2 border-white">
                  <Twitter size={14} />
                </div>
                <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center border-2 border-white">
                  <Mail size={14} />
                </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: Content --- */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Content Creation <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                and Marketing
              </span>
            </h2>
            <p className="text-slate-500 text-base md:text-lg mb-10 leading-relaxed">
              Strategic thinkers collaborate to craft compelling narratives that
              not only captivate your audience but also drive meaningful
              engagement and measurable growth.
            </p>

            <div className="space-y-4">
              {FEATURES.map((feature) => {
                const isActive = activeFeature === feature.id;
                return (
                  <div
                    key={feature.id}
                    onClick={() => setActiveFeature(feature.id)}
                    className={`
                        group relative p-4 rounded-xl cursor-pointer transition-all duration-300 border
                        ${
                          isActive
                            ? "bg-white border-purple-100 shadow-md shadow-purple-100"
                            : "bg-transparent border-transparent hover:bg-slate-50"
                        }
                      `}
                  >
                    <div className="flex items-center gap-4">
                      {/* Icon Checkbox */}
                      <div
                        className={`
                            w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-colors
                            ${
                              isActive
                                ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white"
                                : "bg-slate-100 text-slate-400"
                            }
                         `}
                      >
                        {isActive ? (
                          <Check size={14} strokeWidth={3} />
                        ) : (
                          <Circle size={14} />
                        )}
                      </div>

                      {/* Text */}
                      <div>
                        <h3
                          className={`font-semibold text-lg ${
                            isActive
                              ? "text-slate-900"
                              : "text-slate-500 group-hover:text-slate-700"
                          }`}
                        >
                          {feature.title}
                        </h3>
                        {/* Expandable Description */}
                        <div
                          className={`overflow-hidden transition-all duration-300 ${
                            isActive
                              ? "max-h-20 opacity-100 mt-1"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          <p className="text-sm text-slate-500">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Connection Line Indicator (Visible only for active item) */}
                    {isActive && (
                      <div className="absolute left-0 top-1/2 -translate-x-full w-8 h-[2px] border-t-2 border-dashed border-purple-200 hidden lg:block" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
