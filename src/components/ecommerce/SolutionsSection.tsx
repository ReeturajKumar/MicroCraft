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
    <section className="w-full bg-white py-16 px-4 md:px-8 font-sans text-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* --- Header Section (Fixed Visibility) --- */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-600 text-xs font-bold uppercase tracking-wider">
            Our Services
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
            Crafting Solutions <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
              Tailored to You
            </span>
          </h2>

          <p className="text-slate-500 text-lg font-medium max-w-2xl mx-auto">
            At MicroCraft, we take pride in offering a diverse range of
            solutions meticulously crafted to meet your unique needs.
          </p>
        </div>

        {/* --- Bento Grid (Tighter Fit) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-6">
            {/* 1. Subscription Card */}
            <div className="bg-white rounded-[2rem] p-6 border border-slate-100 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center mb-4">
                <Zap className="text-purple-600" size={20} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Subscription
              </h3>
              <p className="text-slate-500 text-sm mb-6">
                Curated offerings designed to enhance your experience and
                simplify your life.
              </p>

              <div className="space-y-3">
                {[
                  {
                    title: "Tailored Convenience",
                    desc: "Customize your subscription",
                    color: "bg-red-500",
                  },
                  {
                    title: "Cost Savings",
                    desc: "Savings and added value",
                    color: "bg-orange-500",
                  },
                  {
                    title: "Priority Access",
                    desc: "Gain early access",
                    color: "bg-green-500",
                  },
                  {
                    title: "Seamless Experience",
                    desc: "No administrative burdens",
                    color: "bg-blue-500",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-3 rounded-xl border border-slate-100 hover:border-purple-200 hover:bg-purple-50/20 transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-1 h-8 rounded-full ${item.color}`} />
                      <div>
                        <h4 className="font-bold text-slate-800 text-sm">
                          {item.title}
                        </h4>
                        <p className="text-[10px] text-slate-400">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                    <ArrowRight
                      size={14}
                      className="text-slate-300 group-hover:text-purple-600 group-hover:translate-x-1 transition-all"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Tracking Card */}
            <div className="bg-white rounded-[2rem] p-6 border border-slate-100 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 bg-pink-50 rounded-xl flex items-center justify-center">
                  <BarChart3 className="text-pink-600" size={20} />
                </div>
                <div className="text-right">
                  <span className="text-3xl font-bold text-slate-900">
                    {count}%
                  </span>
                  <p className="text-[10px] text-slate-400 uppercase font-bold">
                    Efficiency
                  </p>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-1">
                Tracking & Record
              </h3>
              <p className="text-slate-500 text-sm mb-6">
                Precision in tracking enhances operational efficiency.
              </p>

              {/* Animated Bars - Fitting tight */}
              <div className="h-20 w-full flex items-end justify-between gap-2">
                {[40, 70, 50, 90, 60, 80].map((h, i) => (
                  <div
                    key={i}
                    className="w-full bg-slate-100 rounded-t-md hover:bg-gradient-to-t hover:from-purple-200 hover:to-pink-300 transition-all duration-300"
                    style={{
                      height: `${h}%`,
                      animation: `growUp 1s ease-out forwards ${i * 0.1}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-6">
            {/* 3. Advertising Card (Orbit Fix) */}
            <div className="bg-white rounded-[2rem] p-6 border border-slate-100 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center mb-4">
                <Globe className="text-orange-600" size={20} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Advertising
              </h3>
              <p className="text-slate-500 text-sm mb-8">
                Captivates and resonates with your audience. Be remembered.
              </p>

              {/* Orbit Animation Area */}
              <div className="relative h-48 w-full flex items-center justify-center overflow-visible">
                {/* Center Play Button */}
                <div className="absolute z-10 w-14 h-14 bg-gradient-to-tr from-purple-600 to-pink-500 rounded-full flex items-center justify-center shadow-lg shadow-purple-200 animate-pulse-slow">
                  <Play fill="white" className="text-white ml-1 w-5 h-5" />
                </div>

                {/* Rotating Container */}
                <div className="w-[180px] h-[180px] rounded-full border border-dashed border-slate-200 animate-spin-slow relative">
                  {/* Top Icon */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-white shadow-md border border-slate-100 rounded-xl flex items-center justify-center animate-reverse-spin">
                    <Wallet size={18} className="text-purple-500" />
                  </div>

                  {/* Bottom Icon */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-white shadow-md border border-slate-100 rounded-xl flex items-center justify-center animate-reverse-spin">
                    <Heart size={18} className="text-pink-500" />
                  </div>

                  {/* Left Icon */}
                  <div className="absolute top-1/2 -left-4 -translate-y-1/2 w-10 h-10 bg-white shadow-md border border-slate-100 rounded-xl flex items-center justify-center animate-reverse-spin">
                    <Mail size={18} className="text-blue-500" />
                  </div>

                  {/* Right Icon */}
                  <div className="absolute top-1/2 -right-4 -translate-y-1/2 w-10 h-10 bg-white shadow-md border border-slate-100 rounded-xl flex items-center justify-center animate-reverse-spin">
                    <MousePointer2 size={18} className="text-orange-500" />
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Management Card */}
            <div className="bg-white rounded-[2rem] p-6 border border-slate-100 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                <Layers className="text-blue-600" size={20} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Efficient Management
              </h3>
              <p className="text-slate-500 text-sm mb-6">
                Streamline operations with our intuitive dashboard systems.
              </p>

              {/* UI Mockup Animation */}
              <div className="relative w-full h-40 mt-2">
                {/* Back Layer */}
                <div className="absolute top-0 left-6 right-6 h-24 bg-slate-50 rounded-xl transform translate-y-2 scale-90 opacity-60" />

                {/* Front Layer */}
                <div className="absolute top-4 left-0 right-0 bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-slate-100 p-4 z-20">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center">
                        <BarChart3 size={16} className="text-orange-500" />
                      </div>
                      <div>
                        <h5 className="text-xs font-bold text-slate-800">
                          Planning
                        </h5>
                        <div className="h-1 w-12 bg-slate-100 rounded mt-1"></div>
                      </div>
                    </div>
                    <CheckCircle2 size={16} className="text-green-500" />
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full animate-grow-width" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- INJECTED STYLES --- */}
      <style>{`
        @keyframes growUp {
          from { height: 0; }
          to { height: var(--height); }
        }
        @keyframes grow-width {
          from { width: 0; }
          to { width: 75%; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes reverse-spin {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
        /* Crucial: This ensures icons stay upright while parent spins */
        .animate-reverse-spin {
          animation: reverse-spin 12s linear infinite;
        }
        .animate-grow-width {
          animation: grow-width 1.5s ease-out forwards;
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default SolutionsSection;
