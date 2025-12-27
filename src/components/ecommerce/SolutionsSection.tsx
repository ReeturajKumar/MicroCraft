import { useEffect, useState } from "react";
import {
  Zap,
  BarChart3,
  Layers,
  MousePointer2,
  ArrowRight,
  Wallet,
  Mail,
  Heart,
  Globe,
  Play,
  CheckCircle2,
} from "lucide-react";

const SolutionsSection = () => {
  const [count, setCount] = useState(0);

  // Counter Animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => (prev < 80 ? prev + 1 : 80));
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full bg-gradient-to-b from-slate-50 to-white py-6 overflow-hidden font-sans text-slate-900">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-purple-200/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-pink-200/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* --- Header Section --- */}
        <div className="text-center mb-6">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 leading-tight mb-2">
            Powerful Tools to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600">
              Transform Your Business
            </span>
          </h2>

          <p className="text-sm text-slate-600 max-w-2xl mx-auto">
            Comprehensive suite of solutions designed to drive growth,
            efficiency, and success
          </p>
        </div>

        {/* --- Bento Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-3">
            {/* 1. Subscription Card */}
            <div className="bg-white rounded-xl p-4 shadow-lg border border-slate-200 hover:shadow-xl hover:border-purple-200 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center shadow-sm">
                  <Zap className="text-purple-600" size={16} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    Subscription
                  </h3>
                  <p className="text-xs text-slate-500">
                    Curated offerings to enhance your operations
                  </p>
                </div>
              </div>

              <div className="space-y-1.5">
                {[
                  {
                    title: "Tailored Convenience",
                    desc: "Customize subscription",
                    color: "bg-red-500",
                  },
                  {
                    title: "Cost Savings",
                    desc: "Added value",
                    color: "bg-orange-500",
                  },
                  {
                    title: "Seamless Experience",
                    desc: "No admin burden",
                    color: "bg-blue-500",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-2 rounded-md border border-slate-100 hover:border-purple-200 hover:bg-purple-50/30 transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center gap-2">
                      <div className={`w-0.5 h-5 rounded-full ${item.color}`} />
                      <div>
                        <h4 className="font-semibold text-slate-800 text-[11px]">
                          {item.title}
                        </h4>
                        <p className="text-[9px] text-slate-500">{item.desc}</p>
                      </div>
                    </div>
                    <ArrowRight
                      size={10}
                      className="text-slate-300 group-hover:text-purple-600 group-hover:translate-x-1 transition-all"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Tracking Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-4 shadow-xl border border-slate-700 hover:shadow-2xl hover:border-purple-500/50 transition-all duration-300 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500 rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-pink-500 rounded-full blur-2xl" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg">
                    <BarChart3 className="text-white" size={16} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-white">
                      Tracking & Analytics
                    </h3>
                    <p className="text-xs text-slate-300">
                      Real-time insights to optimize operations
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-bold text-white">
                      {count}%
                    </span>
                    <p className="text-[9px] text-purple-300 uppercase font-bold">
                      Efficiency
                    </p>
                  </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-2 mb-3">
                  <div className="bg-white/10 backdrop-blur-sm rounded-md p-2 border border-white/10">
                    <p className="text-[9px] text-slate-400 mb-0.5 font-medium">
                      Records
                    </p>
                    <p className="text-sm font-bold text-white">12.5K</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-md p-2 border border-white/10">
                    <p className="text-[9px] text-slate-400 mb-0.5 font-medium">
                      Uptime
                    </p>
                    <p className="text-sm font-bold text-white">99.9%</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-md p-2 border border-white/10">
                    <p className="text-[9px] text-slate-400 mb-0.5 font-medium">
                      Speed
                    </p>
                    <p className="text-sm font-bold text-white">2.4s</p>
                  </div>
                </div>

                {/* Animated Bars - Fixed */}
                <div className="h-14 w-full flex items-end justify-between gap-1.5">
                  {[40, 70, 50, 90, 60, 80].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 h-full flex flex-col justify-end relative group"
                    >
                      {/* Background bar */}
                      <div className="absolute bottom-0 left-0 right-0 top-0 bg-white/5 rounded-t-md border border-white/10" />
                      {/* Animated gradient bar */}
                      <div
                        className="relative w-full bg-gradient-to-t from-purple-500 via-pink-500 to-purple-400 rounded-t-md shadow-lg group-hover:from-purple-400 group-hover:via-pink-400 group-hover:to-purple-300 transition-all duration-300"
                        style={{
                          height: `${h}%`,
                          minHeight: "8px",
                          transformOrigin: "bottom",
                          animation: `growBarFromBottom 0.8s ease-out forwards ${
                            i * 0.1
                          }s`,
                          animationFillMode: "both",
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-3">
            {/* 3. Advertising Card */}
            <div className="bg-white rounded-xl p-4 shadow-lg border border-slate-200 hover:shadow-xl hover:border-purple-200 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-100 to-pink-100 rounded-lg flex items-center justify-center shadow-sm">
                  <Globe className="text-orange-600" size={16} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    Advertising
                  </h3>
                  <p className="text-xs text-slate-500">
                    Captivates and resonates with your audience
                  </p>
                </div>
              </div>

              {/* Orbit Animation Area */}
              <div className="relative h-32 w-full flex items-center justify-center overflow-visible">
                {/* Center Play Button */}
                <div className="absolute z-10 w-10 h-10 bg-gradient-to-tr from-purple-600 to-pink-500 rounded-full flex items-center justify-center shadow-lg shadow-purple-200 animate-pulse-slow">
                  <Play fill="white" className="text-white ml-0.5 w-3 h-3" />
                </div>

                {/* Rotating Container */}
                <div className="w-[120px] h-[120px] rounded-full border border-dashed border-slate-200 animate-spin-slow relative">
                  {/* Top Icon */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-7 h-7 bg-white shadow-md border border-slate-100 rounded-md flex items-center justify-center animate-reverse-spin">
                    <Wallet size={12} className="text-purple-500" />
                  </div>

                  {/* Bottom Icon */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-7 h-7 bg-white shadow-md border border-slate-100 rounded-md flex items-center justify-center animate-reverse-spin">
                    <Heart size={12} className="text-pink-500" />
                  </div>

                  {/* Left Icon */}
                  <div className="absolute top-1/2 -left-2 -translate-y-1/2 w-7 h-7 bg-white shadow-md border border-slate-100 rounded-md flex items-center justify-center animate-reverse-spin">
                    <Mail size={12} className="text-blue-500" />
                  </div>

                  {/* Right Icon */}
                  <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-7 h-7 bg-white shadow-md border border-slate-100 rounded-md flex items-center justify-center animate-reverse-spin">
                    <MousePointer2 size={12} className="text-orange-500" />
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Management Card */}
            <div className="bg-white rounded-xl p-4 shadow-lg border border-slate-200 hover:shadow-xl hover:border-purple-200 transition-all duration-300 relative overflow-hidden">
              {/* Gradient Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-100/40 to-pink-100/40 rounded-full blur-2xl -mr-16 -mt-16" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center shadow-md">
                    <Layers className="text-white" size={16} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-slate-900">
                      Efficient Management
                    </h3>
                    <p className="text-xs text-slate-500">
                      Streamline operations with intuitive dashboards
                    </p>
                  </div>
                </div>

                {/* Performance Metrics */}
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-2.5 border border-blue-100">
                    <p className="text-[9px] text-slate-600 mb-1 font-medium">
                      Productivity
                    </p>
                    <p className="text-base font-bold text-slate-900">+34%</p>
                    <div className="h-1 w-full bg-blue-100 rounded-full mt-1.5 overflow-hidden">
                      <div className="h-full w-3/4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-2.5 border border-purple-100">
                    <p className="text-[9px] text-slate-600 mb-1 font-medium">
                      Automation
                    </p>
                    <p className="text-base font-bold text-slate-900">87%</p>
                    <div className="h-1 w-full bg-purple-100 rounded-full mt-1.5 overflow-hidden">
                      <div className="h-full w-4/5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                    </div>
                  </div>
                </div>

                {/* UI Mockup Animation */}
                <div className="relative w-full h-20 mt-2">
                  {/* Back Layer */}
                  <div className="absolute top-0 left-3 right-3 h-14 bg-gradient-to-br from-slate-50 to-purple-50/30 rounded-lg transform translate-y-1.5 scale-90 opacity-60 border border-slate-100" />

                  {/* Front Layer */}
                  <div className="absolute top-2 left-0 right-0 bg-white rounded-lg shadow-md border border-slate-100 p-2.5 z-20">
                    <div className="flex justify-between items-center mb-1.5">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-md bg-gradient-to-br from-orange-100 to-pink-100 flex items-center justify-center border border-orange-200">
                          <BarChart3 size={13} className="text-orange-600" />
                        </div>
                        <div>
                          <h5 className="text-[10px] font-bold text-slate-900">
                            Planning Dashboard
                          </h5>
                          <div className="h-0.5 w-10 bg-slate-100 rounded mt-0.5"></div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                        <CheckCircle2 size={12} className="text-green-500" />
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full w-3/4 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 rounded-full animate-grow-width shadow-sm" />
                      </div>
                      <span className="text-[9px] font-bold text-slate-700">
                        75%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Styles moved to index.css - see: animate-spin-slow, animate-reverse-spin, animate-grow-width, animate-pulse-slow */}
    </section>
  );
};

export default SolutionsSection;
