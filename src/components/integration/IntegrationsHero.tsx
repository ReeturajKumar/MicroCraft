import React, { useState, useEffect } from "react";
import { ArrowRight, Zap, RefreshCw, Database, Play } from "lucide-react";

const RotatingText = () => {
  const words = [
    "Infinite Connections",
    "Seamless Integration",
    "Unified Platform",
    "Connected Ecosystem",
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

const IntegrationsHero: React.FC = () => {
  const [activeNode, setActiveNode] = useState(0);

  // Simulation of "Live Sync" data
  const systems = [
    {
      name: "WhatsApp Cloud API",
      status: "Connected",
      latency: "45ms",
      type: "2-Way",
    },
    {
      name: "Shopify / Dukaan",
      status: "Syncing",
      latency: "120ms",
      type: "Inventory",
    },
    {
      name: "Razorpay / UPI",
      status: "Secure",
      latency: "90ms",
      type: "Payments",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % systems.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-6 md:py-10 bg-gradient-to-b from-white to-slate-50/50 overflow-hidden font-sans selection:bg-pink-100">
      {/* Styles moved to index.css - see: animate-flow, animate-pulse-ring, animate-float-icon */}

      {/* --- 2. BACKGROUND & GRID --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-purple-200/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-pink-200/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-12 items-start relative z-10">
        {/* --- 3. LEFT COLUMN: CONTENT & PROMISE --- */}
        <div className="text-center lg:text-left pt-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4">
            One Platform. <RotatingText />
          </h1>

          <p className="text-base md:text-lg text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Connect WhatsApp, Shopify, Razorpay, and 50+ tools into a unified
            system. Real-time synchronization ensures instant updates across all
            platforms with zero data loss and enterprise-grade security.
          </p>

          {/* Key Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-200/50 shadow-sm hover:shadow-md hover:border-purple-300 transition-all group">
              <div className="text-2xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text mb-1">
                50+
              </div>
              <div className="text-sm font-semibold text-slate-700">
                Integrations
              </div>
              <div className="text-xs text-slate-500 mt-0.5">
                Connected tools
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200/50 shadow-sm hover:shadow-md hover:border-green-300 transition-all group">
              <div className="text-2xl font-extrabold bg-gradient-to-r from-green-600 to-emerald-600 text-transparent bg-clip-text mb-1">
                &lt; 2s
              </div>
              <div className="text-sm font-semibold text-slate-700">
                Real-Time Sync
              </div>
              <div className="text-xs text-slate-500 mt-0.5">
                Instant updates
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-200/50 shadow-sm hover:shadow-md hover:border-blue-300 transition-all group">
              <div className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-600 text-transparent bg-clip-text mb-1">
                100%
              </div>
              <div className="text-sm font-semibold text-slate-700">Secure</div>
              <div className="text-xs text-slate-500 mt-0.5">
                Enterprise-grade
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold shadow-lg shadow-purple-500/30 hover:from-purple-700 hover:to-pink-700 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
              Explore Integrations
              <ArrowRight size={18} />
            </button>
            <button className="px-8 py-4 bg-white text-slate-700 border-2 border-slate-300 rounded-xl font-bold hover:border-purple-400 hover:bg-purple-50 transition-colors shadow-sm flex items-center justify-center gap-2">
              <Play size={18} className="text-purple-600" />
              Watch Demo
            </button>
          </div>
        </div>

        {/* --- 4. RIGHT COLUMN: THE "CENTRAL HUB" VISUALIZATION --- */}
        <div className="relative h-[450px] md:h-[500px] flex items-center justify-center">
          {/* The Connection Lines (SVG) */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            viewBox="0 0 600 600"
          >
            {/* Dynamic lines drawing to the center */}
            <path
              d="M100,100 Q300,100 300,300"
              fill="none"
              stroke="#e2e8f0"
              strokeWidth="2"
            />
            <path
              d="M100,100 Q300,100 300,300"
              fill="none"
              stroke="#db2777"
              strokeWidth="2"
              strokeDasharray="10 10"
              className="animate-flow"
            />

            <path
              d="M500,150 Q300,150 300,300"
              fill="none"
              stroke="#e2e8f0"
              strokeWidth="2"
            />
            <path
              d="M500,150 Q300,150 300,300"
              fill="none"
              stroke="#9333ea"
              strokeWidth="2"
              strokeDasharray="10 10"
              className="animate-flow"
              style={{ animationDelay: "0.5s" }}
            />

            <path
              d="M150,500 Q300,500 300,300"
              fill="none"
              stroke="#e2e8f0"
              strokeWidth="2"
            />
            <path
              d="M150,500 Q300,500 300,300"
              fill="none"
              stroke="#2563eb"
              strokeWidth="2"
              strokeDasharray="10 10"
              className="animate-flow"
              style={{ animationDelay: "1s" }}
            />

            <path
              d="M450,450 Q300,450 300,300"
              fill="none"
              stroke="#e2e8f0"
              strokeWidth="2"
            />
          </svg>

          {/* SATELLITE 1: Communication (WhatsApp) */}
          <div className="absolute top-[10%] left-[8%] animate-float-icon">
            <div
              className={`w-16 h-16 md:w-20 md:h-20 bg-white rounded-xl shadow-lg hover:shadow-xl border-2 flex flex-col items-center justify-center relative ${
                activeNode === 0
                  ? "border-green-500 ring-4 ring-green-100 scale-110 shadow-green-500/20"
                  : "border-slate-200"
              } transition-all duration-500`}
            >
              {/* WhatsApp Logo */}
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white shadow-md">
                <svg
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </div>
              <div className="text-[9px] font-bold text-slate-700 mt-1">
                WhatsApp
              </div>
              {activeNode === 0 && (
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gradient-to-r from-green-600 to-emerald-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg whitespace-nowrap animate-[fade-in-up_0.3s] shadow-lg">
                  Live Sync Active
                </div>
              )}
            </div>
          </div>

          {/* SATELLITE 2: Payments (Razorpay/UPI) */}
          <div
            className="absolute top-[12%] right-[12%] animate-float-icon"
            style={{ animationDelay: "1s" }}
          >
            <div
              className={`w-16 h-16 md:w-20 md:h-20 bg-white rounded-xl shadow-lg hover:shadow-xl border-2 flex flex-col items-center justify-center relative ${
                activeNode === 2
                  ? "border-blue-500 ring-4 ring-blue-100 scale-110 shadow-blue-500/20"
                  : "border-slate-200"
              } transition-all duration-500`}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-base shadow-md">
                ₹
              </div>
              <div className="text-[9px] font-bold text-slate-700 mt-1">
                Payments
              </div>
              {activeNode === 2 && (
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg whitespace-nowrap animate-[fade-in-up_0.3s] shadow-lg">
                  Processing Payment
                </div>
              )}
            </div>
          </div>

          {/* SATELLITE 3: Storefront (Shopify/Dukaan) */}
          <div
            className="absolute bottom-[15%] left-[12%] animate-float-icon"
            style={{ animationDelay: "2s" }}
          >
            <div
              className={`w-16 h-16 md:w-20 md:h-20 bg-white rounded-xl shadow-lg hover:shadow-xl border-2 flex flex-col items-center justify-center relative ${
                activeNode === 1
                  ? "border-pink-500 ring-4 ring-pink-100 scale-110 shadow-pink-500/20"
                  : "border-slate-200"
              } transition-all duration-500`}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center text-white shadow-md">
                <RefreshCw
                  size={18}
                  className={activeNode === 1 ? "animate-spin" : ""}
                />
              </div>
              <div className="text-[9px] font-bold text-slate-700 mt-1">
                E-Commerce
              </div>
              {activeNode === 1 && (
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-gradient-to-r from-pink-600 to-rose-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg whitespace-nowrap animate-[fade-in-up_0.3s] shadow-lg">
                  Syncing Orders...
                </div>
              )}
            </div>
          </div>

          {/* SATELLITE 4: Data (Migration/Excel) */}
          <div
            className="absolute bottom-[18%] right-[10%] animate-float-icon"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-xl shadow-lg hover:shadow-xl border-2 border-slate-200 flex flex-col items-center justify-center transition-shadow">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white shadow-md">
                <Database size={16} />
              </div>
              <div className="text-[9px] font-bold text-slate-700 mt-1">
                Database
              </div>
            </div>
          </div>

          {/* THE CENTRAL HUB (Microkraft) */}
          <div className="relative z-10">
            {/* Pulsing Rings */}
            <div className="absolute inset-0 bg-purple-500 rounded-full animate-pulse-ring"></div>
            <div
              className="absolute inset-0 bg-pink-500 rounded-full animate-pulse-ring"
              style={{ animationDelay: "1s" }}
            ></div>

            {/* Core */}
            <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-purple-600 via-pink-500 to-indigo-600 rounded-full shadow-2xl shadow-purple-500/40 flex items-center justify-center border-4 border-white relative">
              <Zap
                size={36}
                className="text-white fill-white md:w-10 md:h-10"
              />

              {/* Connection Pulse Ring */}
              <div className="absolute inset-0 rounded-full border-4 border-purple-400/30 animate-ping"></div>

              {/* Live Status Ticker */}
              <div className="absolute -bottom-18 left-1/2 -translate-x-1/2 w-44 bg-white rounded-xl border-2 border-slate-200 p-3 shadow-xl text-center">
                <div className="flex items-center justify-center gap-1.5 mb-1.5">
                  <span
                    className={`w-2.5 h-2.5 rounded-full animate-pulse ${
                      activeNode === 0
                        ? "bg-green-500"
                        : activeNode === 1
                        ? "bg-pink-500"
                        : "bg-blue-500"
                    }`}
                  ></span>
                  <div className="text-[10px] font-bold text-green-600 uppercase tracking-wide">
                    Live
                  </div>
                </div>
                <div className="text-sm font-bold text-slate-900 mb-1">
                  {systems[activeNode].name}
                </div>
                <div className="text-[10px] font-mono text-purple-600 bg-purple-50 px-2 py-1 rounded inline-block">
                  {systems[activeNode].latency} latency
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsHero;
