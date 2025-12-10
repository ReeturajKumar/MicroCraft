import React from "react";
import {
  CheckCircle2,
  BarChart3,
  TrendingUp,
  PieChart,
  Settings,
  Megaphone,
  Star,
  Activity,
} from "lucide-react";

const FEATURES = [
  {
    id: 1,
    icon: <Activity size={20} className="text-white" />,
    title: "Roadmapping",
    description:
      "Our strategic roadmaps provide a roadmap for success, outlining the steps needed to reach your objectives.",
  },
  {
    id: 2,
    icon: <PieChart size={20} className="text-white" />,
    title: "Financial Modeling",
    description:
      "Forecasts to evaluating investment opportunities, we provide insights that empower informed decision-making.",
  },
  {
    id: 3,
    icon: <TrendingUp size={20} className="text-white" />,
    title: "Diversification",
    description:
      "Our team explores opportunities for market expansion and diversification, helping you reach new audiences.",
  },
  {
    id: 4,
    icon: <Settings size={20} className="text-white" />,
    title: "Operational Efficiency",
    description:
      "We assess your current processes and identify areas for improvement to enhance efficiency and reduce costs.",
  },
];

export default function BusinessPlanningSection() {
  return (
    <section className="py-24 bg-white overflow-hidden relative font-sans text-slate-800">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* =========================================
              LEFT COLUMN: Text & Feature Grid
             ========================================= */}
          <div>
            <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Business Planning <br />
              and Development
            </h2>
            <p className="text-slate-500 text-lg mb-12 leading-relaxed max-w-lg">
              At{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500 font-semibold">
                MicroCraft
              </span>
              , we offer comprehensive solutions designed to guide your business
              through every stage of its journey.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
              {FEATURES.map((feature) => (
                <div
                  key={feature.id}
                  className="flex flex-col items-start gap-4"
                >
                  {/* Icon with Rose Background */}
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white flex items-center justify-center shadow-md shadow-rose-200">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* =========================================
              RIGHT COLUMN: Image & Widgets
             ========================================= */}
          <div className="relative h-[600px] w-full flex items-center justify-center">
            {/* --- DARK DOTTED LINES (SVG) --- */}
            {/* Explicitly using darker stroke (stroke-slate-400) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible hidden lg:block">
              <defs>
                {/* Dark Blue Dot Marker */}
                <marker
                  id="dot-dark"
                  markerWidth="8"
                  markerHeight="8"
                  refX="4"
                  refY="4"
                >
                  <circle cx="4" cy="4" r="2.5" fill="#1e293b" />
                </marker>
              </defs>

              {/* Path 1: Connects Left Floating Widgets (Star/Megaphone) -> Top Right (Verified) */}
              {/* The line goes Up from left widgets, across top, down to Verified */}
              <path
                d="M 80 200 L 80 120 L 480 120 L 480 180"
                fill="none"
                stroke="#94a3b8" // Slate-400 (Darker Grey)
                strokeWidth="2"
                strokeDasharray="8 8"
                markerStart="url(#dot-dark)"
                markerEnd="url(#dot-dark)"
              />

              {/* Path 2: Connects Top Right (Verified) -> Bottom Chart */}
              <path
                d="M 480 250 L 480 400"
                fill="none"
                stroke="#94a3b8" // Slate-400
                strokeWidth="2"
                strokeDasharray="8 8"
                markerEnd="url(#dot-dark)"
              />

              {/* Path 3: Dashed line extending right from the chart */}
              <path
                d="M 600 480 L 700 480"
                fill="none"
                stroke="#94a3b8" // Slate-400
                strokeWidth="2"
                strokeDasharray="8 8"
              />
            </svg>

            {/* --- MAIN PERSON IMAGE --- */}
            <div className="relative z-10 w-[380px] h-[480px]">
              <img
                src="https://getwpteam.com/wp-content/uploads/2022/02/25.png"
                alt="Business Consultant"
                className="w-full h-full object-cover object-top rounded-b-none rounded-t-full shadow-none"
                // Note: The image in reference is cut out (transparent bg),
                // but for this code we use a standard photo.
                style={{ borderRadius: "200px 200px 0 0" }}
              />
            </div>

            {/* --- FLOATING WIDGETS --- */}

            {/* 1. Left: Star Ranking */}
            <div className="absolute top-48 left-8 bg-gradient-to-r from-purple-600 to-pink-500 text-white-50 p-4 rounded-3xl shadow-sm z-20 animate-float w-20 h-20 flex items-center justify-center">
              <Star size={32} className="text-white fill-white" />
            </div>

            {/* 2. Left: Megaphone */}
            <div className="absolute top-72 left-8 bg-gradient-to-r from-purple-600 to-pink-500 text-white-50 p-4 rounded-3xl shadow-sm z-20 animate-float delay-300 w-20 h-20 flex items-center justify-center">
              <Megaphone size={32} className="text-white fill-white" />
            </div>

            {/* 3. Top Right: Verified Badge */}
            <div className="absolute top-40 right-10 bg-white p-5 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] z-20 flex flex-col items-center animate-fade-in delay-200">
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white mb-2 shadow-lg shadow-green-200">
                <CheckCircle2 size={20} strokeWidth={3} />
              </div>
              <p className="text-sm font-bold text-slate-800">Verified!</p>
              <p className="text-[10px] text-green-600 font-medium">
                100% Client Satisfied
              </p>
            </div>

            {/* 4. Bottom Center: Income Chart */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 bg-white p-6 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-30 w-80 md:w-86 animate-slide-up delay-500">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white-100 rounded-lg">
                    <BarChart3 size={20} className="text-white fill-white" />
                  </div>
                  <span className="text-base font-bold text-slate-900">
                    B2B Income 2023
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="text-[10px] px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-500 text-white-500 text-white rounded-full font-bold">
                    Monthly
                  </span>
                  <span className="text-[10px] px-3 py-1 bg-slate-100 text-slate-500 rounded-full font-medium">
                    Yearly
                  </span>
                </div>
              </div>

              {/* Red Area Chart */}
              <div className="relative h-8 w-full">
                <svg
                  className="w-full h-full overflow-visible"
                  viewBox="0 0 100 40"
                  preserveAspectRatio="none"
                >
                  {/* Gradient Fill */}
                  <defs>
                    <linearGradient
                      id="chartGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#fb7185" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#fb7185" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 35 L 10 30 L 20 32 L 30 20 L 40 25 L 50 15 L 60 22 L 70 10 L 80 18 L 90 5 L 100 8 V 40 H 0 Z"
                    fill="url(#chartGradient)"
                  />
                  {/* The Line */}
                  <path
                    d="M0 35 L 10 30 L 20 32 L 30 20 L 40 25 L 50 15 L 60 22 L 70 10 L 80 18 L 90 5 L 100 8"
                    fill="none"
                    stroke="#fb7185"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                {/* Grid Lines (Background) */}
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                  <div className="border-b border-dashed border-slate-100 h-1/4 w-full" />
                  <div className="border-b border-dashed border-slate-100 h-1/4 w-full" />
                  <div className="border-b border-dashed border-slate-100 h-1/4 w-full" />
                </div>

                {/* X-Axis Labels */}
                <div className="flex justify-between mt-2 px-1">
                  {[
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                  ].map((m) => (
                    <span
                      key={m}
                      className="text-[8px] text-slate-400 font-medium"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
