import React from "react";
import {
  TrendingUp,
  Package,
  Zap,
  ArrowRight,
  FileText,
  BarChart3,
  RefreshCcw,
  AlertTriangle,
} from "lucide-react";

// --- REUSABLE COMPONENTS ---

// 1. Citation Tag
const SourceTag = ({ id }: { id: string }) => (
  <span
    className="inline-flex items-center gap-1 ml-2 px-1.5 py-0.5 rounded bg-purple-50 border border-purple-100 text-[10px] font-mono font-medium text-purple-400 cursor-help hover:text-pink-600 hover:border-pink-200 transition-colors align-middle"
    title={`Source Reference: ${id}`}
  >
    <FileText size={8} />
    Ref.{id}
  </span>
);

const DetailedCaseStudies: React.FC = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-purple-50/30 font-sans selection:bg-pink-100 overflow-hidden">
      {/* Decorative Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: "radial-gradient(#4c1d95 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* --- SECTION HEADER --- */}
        <div className="mb-20 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-purple-100 shadow-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs font-bold text-purple-900 tracking-wide uppercase">
              Verified Outcomes
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
            We don't just promise growth.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600">
              We engineer it.
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
            See the exact mechanics behind the numbers. From automated WhatsApp
            nudges to smart inventory alerts, here is how Indian MSMEs are
            winning.
            <SourceTag id="7" />
          </p>
        </div>

        {/* --- THE DETAILED CARDS --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* === CARD 1: REPEAT ORDERS === */}
          <div className="group relative bg-white rounded-3xl p-1 border border-purple-100 shadow-xl shadow-purple-900/5 hover:shadow-2xl hover:shadow-purple-900/10 transition-all duration-500 hover:-translate-y-1">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-t-3xl"></div>

            <div className="p-7 h-full flex flex-col">
              {/* Header */}
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 group-hover:scale-110 transition-transform">
                  <RefreshCcw size={24} />
                </div>
                <span className="px-3 py-1 bg-slate-50 rounded-full text-xs font-semibold text-slate-500 border border-slate-100">
                  Retail & Lifestyle
                </span>
              </div>

              {/* The Metric */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-extrabold text-slate-900 tracking-tight">
                    +22%
                  </span>
                  <SourceTag id="52" />
                </div>
                <p className="text-lg font-medium text-green-700 mt-2">
                  Repeat Orders
                </p>
                <p className="text-sm text-slate-500 mt-1">
                  Achieved in just 60 days.
                </p>
              </div>

              {/* Visual Micro-Chart (Line Graph) */}
              <div className="h-24 w-full bg-green-50/50 rounded-xl mb-6 relative overflow-hidden flex items-end px-2 pb-2 border border-green-100">
                <svg
                  className="w-full h-full overflow-visible"
                  preserveAspectRatio="none"
                  viewBox="0 0 100 50"
                >
                  <path
                    d="M0,45 C20,40 40,45 50,25 C60,5 80,10 100,0"
                    fill="none"
                    stroke="#16a34a"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M0,45 C20,40 40,45 50,25 C60,5 80,10 100,0 L100,50 L0,50 Z"
                    fill="url(#greenGradient)"
                    className="opacity-20"
                  />
                  <defs>
                    <linearGradient
                      id="greenGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#16a34a" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#16a34a" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
                {/* Data point tooltip */}
                <div className="absolute top-2 right-4 bg-white shadow-sm border border-green-100 px-2 py-1 rounded text-[10px] font-bold text-green-700">
                  Day 60
                </div>
              </div>

              {/* The "Mechanism" (How it works) */}
              <div className="mt-auto pt-6 border-t border-slate-100">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  The Mechanism
                </p>
                <div className="flex items-start gap-3">
                  <div className="mt-1 min-w-[16px]">
                    <TrendingUp size={16} className="text-green-500" />
                  </div>
                  <p className="text-sm text-slate-600 leading-snug">
                    <span className="font-semibold text-slate-900">
                      Auto-Nudges:
                    </span>{" "}
                    System detects dormancy and sends a "Buy Again" WhatsApp
                    offer automatically.
                    <SourceTag id="36" />
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* === CARD 2: STOCKOUTS === */}
          <div className="group relative bg-white rounded-3xl p-1 border border-purple-100 shadow-xl shadow-purple-900/5 hover:shadow-2xl hover:shadow-purple-900/10 transition-all duration-500 hover:-translate-y-1">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-pink-500 to-rose-600 rounded-t-3xl"></div>

            <div className="p-7 h-full flex flex-col">
              {/* Header */}
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-pink-50 rounded-2xl flex items-center justify-center text-pink-600 group-hover:scale-110 transition-transform">
                  <Package size={24} />
                </div>
                <span className="px-3 py-1 bg-slate-50 rounded-full text-xs font-semibold text-slate-500 border border-slate-100">
                  Pharma & Grocery
                </span>
              </div>

              {/* The Metric */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-extrabold text-slate-900 tracking-tight">
                    -18%
                  </span>
                  <SourceTag id="52" />
                </div>
                <p className="text-lg font-medium text-pink-600 mt-2">
                  Stockouts Reduced
                </p>
                <p className="text-sm text-slate-500 mt-1">
                  Saved revenue during peak demand.
                </p>
              </div>

              {/* Visual Micro-Chart (Bar Graph) */}
              <div className="h-24 w-full bg-pink-50/50 rounded-xl mb-6 relative flex items-end justify-between px-6 pb-2 border border-pink-100">
                {/* Before Bars */}
                <div className="w-4 bg-slate-300 rounded-t-md h-[80%] opacity-50"></div>
                <div className="w-4 bg-slate-300 rounded-t-md h-[90%] opacity-50"></div>
                <div className="w-4 bg-slate-300 rounded-t-md h-[70%] opacity-50"></div>
                {/* Divider */}
                <div className="h-full w-px bg-slate-200 border-r border-dashed border-slate-300 mx-1"></div>
                {/* After Bars (Pink) */}
                <div className="w-4 bg-pink-500 rounded-t-md h-[30%]"></div>
                <div className="w-4 bg-pink-500 rounded-t-md h-[25%]"></div>
                <div className="w-4 bg-pink-500 rounded-t-md h-[20%]"></div>
              </div>

              {/* The "Mechanism" */}
              <div className="mt-auto pt-6 border-t border-slate-100">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  The Mechanism
                </p>
                <div className="flex items-start gap-3">
                  <div className="mt-1 min-w-[16px]">
                    <AlertTriangle size={16} className="text-pink-500" />
                  </div>
                  <p className="text-sm text-slate-600 leading-snug">
                    <span className="font-semibold text-slate-900">
                      Smart Alerts:
                    </span>{" "}
                    Proactive notifications for low-stock and expiry dates
                    prevent empty shelves.
                    <SourceTag id="25" />
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* === CARD 3: COLLECTIONS === */}
          <div className="group relative bg-white rounded-3xl p-1 border border-purple-100 shadow-xl shadow-purple-900/5 hover:shadow-2xl hover:shadow-purple-900/10 transition-all duration-500 hover:-translate-y-1">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-t-3xl"></div>

            <div className="p-7 h-full flex flex-col">
              {/* Header */}
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform">
                  <Zap size={24} />
                </div>
                <span className="px-3 py-1 bg-slate-50 rounded-full text-xs font-semibold text-slate-500 border border-slate-100">
                  Wholesale & B2B
                </span>
              </div>

              {/* The Metric */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-extrabold text-slate-900 tracking-tight">
                    2x
                  </span>
                  <SourceTag id="52" />
                </div>
                <p className="text-lg font-medium text-purple-700 mt-2">
                  Faster Collections
                </p>
                <p className="text-sm text-slate-500 mt-1">
                  Drastic drop in Days Sales Outstanding.
                </p>
              </div>

              {/* Visual Micro-Chart (Speedometer / Timeline) */}
              <div className="h-24 w-full bg-purple-50/50 rounded-xl mb-6 relative flex flex-col justify-center px-4 border border-purple-100">
                {/* Timeline Track */}
                <div className="w-full h-1 bg-slate-200 rounded-full relative">
                  {/* Old Speed */}
                  <div className="absolute top-1/2 -translate-y-1/2 left-[20%] w-3 h-3 bg-slate-400 rounded-full ring-4 ring-white"></div>
                  {/* New Speed */}
                  <div className="absolute top-1/2 -translate-y-1/2 left-[80%] w-3 h-3 bg-purple-600 rounded-full ring-4 ring-purple-100 animate-pulse"></div>
                </div>
                <div className="flex justify-between text-[10px] font-bold text-slate-400 mt-2 uppercase tracking-wide">
                  <span>45 Days</span>
                  <span className="text-purple-700">22 Days</span>
                </div>
              </div>

              {/* The "Mechanism" */}
              <div className="mt-auto pt-6 border-t border-slate-100">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  The Mechanism
                </p>
                <div className="flex items-start gap-3">
                  <div className="mt-1 min-w-[16px]">
                    <BarChart3 size={16} className="text-purple-600" />
                  </div>
                  <p className="text-sm text-slate-600 leading-snug">
                    <span className="font-semibold text-slate-900">
                      WhatsApp + UPI:
                    </span>{" "}
                    Automated payment reminders with one-click payment links.
                    <SourceTag id="250" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- BOTTOM CTA --- */}
        <div className="mt-16 text-center">
          <button className="group inline-flex items-center gap-2 text-purple-900 font-semibold border-b border-purple-200 hover:border-pink-500 pb-0.5 transition-all">
            See sector-specific breakdowns
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform text-pink-500"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default DetailedCaseStudies;
