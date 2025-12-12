import React, { useState, useEffect } from "react";
import { ArrowRight, Zap, RefreshCw, Database } from "lucide-react";

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
    <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden font-sans selection:bg-pink-100">
      {/* --- 1. ADVANCED ANIMATION STYLES --- */}
      <style>{`
        @keyframes flow-line {
          0% { stroke-dashoffset: 100; opacity: 0; }
          50% { opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 0; }
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.8); opacity: 0.5; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        @keyframes float-icon {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-flow { animation: flow-line 2s linear infinite; }
        .animate-pulse-ring { animation: pulse-ring 3s cubic-bezier(0, 0, 0.2, 1) infinite; }
        .animate-float { animation: float-icon 4s ease-in-out infinite; }
      `}</style>

      {/* --- 2. BACKGROUND & GRID --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(#4c1d95 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
        <div className="absolute -top-[10%] -right-[10%] w-[800px] h-[800px] bg-purple-100/40 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-pink-50/40 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* --- 3. LEFT COLUMN: CONTENT & PROMISE --- */}
        <div className="pt-10 lg:pt-0 text-center lg:text-left">
          <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6">
            Your Stack. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Fully United.
            </span>
          </h1>

          <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Don't rip and replace. We act as the central nervous system, syncing
            your Storefronts, Payments, and WhatsApp chats in real-time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
            <button className="px-8 py-4 bg-purple-950 text-white rounded-xl font-bold shadow-xl shadow-purple-900/20 hover:bg-purple-900 hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
              Explore Library
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Quick Stats Row */}
          <div className="flex items-center justify-center lg:justify-start gap-8 border-t border-slate-100 pt-8">
            <div>
              <div className="text-2xl font-bold text-slate-900 flex items-center gap-1">
                &lt; 2s
              </div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                Sync Speed
              </div>
            </div>
            <div className="w-px h-10 bg-slate-200"></div>
            <div>
              <div className="text-2xl font-bold text-slate-900">Zero</div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                Data Loss
              </div>
            </div>
            <div className="w-px h-10 bg-slate-200"></div>
            <div>
              <div className="text-2xl font-bold text-slate-900">SSL</div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                Encrypted
              </div>
            </div>
          </div>
        </div>

        {/* --- 4. RIGHT COLUMN: THE "CENTRAL HUB" VISUALIZATION --- */}
        <div className="relative h-[600px] flex items-center justify-center">
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
          <div className="absolute top-[15%] left-[10%] animate-float">
            <div
              className={`w-20 h-20 bg-white rounded-2xl shadow-xl border-2 flex items-center justify-center relative ${
                activeNode === 0
                  ? "border-green-500 ring-4 ring-green-100 scale-110"
                  : "border-slate-100"
              } transition-all duration-500`}
            >
              {/* Simulating WhatsApp Logo with Icon */}
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM13 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z" />
                </svg>
              </div>
              {activeNode === 0 && (
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg whitespace-nowrap animate-[fade-in-up_0.3s]">
                  Processing Template...
                </div>
              )}
            </div>
          </div>

          {/* SATELLITE 2: Payments (Razorpay/UPI) */}
          <div
            className="absolute top-[20%] right-[15%] animate-float"
            style={{ animationDelay: "1s" }}
          >
            <div
              className={`w-20 h-20 bg-white rounded-2xl shadow-xl border-2 flex items-center justify-center relative ${
                activeNode === 2
                  ? "border-blue-500 ring-4 ring-blue-100 scale-110"
                  : "border-slate-100"
              } transition-all duration-500`}
            >
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
                ₹
              </div>
            </div>
          </div>

          {/* SATELLITE 3: Storefront (Shopify/Dukaan) */}
          <div
            className="absolute bottom-[20%] left-[15%] animate-float"
            style={{ animationDelay: "2s" }}
          >
            <div
              className={`w-20 h-20 bg-white rounded-2xl shadow-xl border-2 flex items-center justify-center relative ${
                activeNode === 1
                  ? "border-pink-500 ring-4 ring-pink-100 scale-110"
                  : "border-slate-100"
              } transition-all duration-500`}
            >
              <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white">
                <RefreshCw
                  size={20}
                  className={activeNode === 1 ? "animate-spin" : ""}
                />
              </div>
            </div>
          </div>

          {/* SATELLITE 4: Data (Migration/Excel) */}
          <div
            className="absolute bottom-[25%] right-[10%] animate-float"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="w-16 h-16 bg-white/80 rounded-2xl shadow-lg border border-slate-200 flex items-center justify-center backdrop-blur-sm">
              <Database size={24} className="text-slate-400" />
            </div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-slate-400 uppercase tracking-wide whitespace-nowrap">
              Excel Import [Ref.34]
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
            <div className="w-32 h-32 bg-gradient-to-br from-purple-900 to-indigo-900 rounded-full shadow-2xl flex items-center justify-center border-4 border-white relative">
              <Zap size={40} className="text-white fill-white" />

              {/* Live Status Ticker */}
              <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-48 bg-white/90 backdrop-blur-md rounded-xl border border-slate-200 p-3 shadow-lg text-center">
                <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">
                  Live Connection
                </div>
                <div className="text-sm font-bold text-slate-900 flex items-center justify-center gap-2">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      activeNode === 0
                        ? "bg-green-500"
                        : activeNode === 1
                        ? "bg-pink-500"
                        : "bg-blue-500"
                    }`}
                  ></span>
                  {systems[activeNode].name}
                </div>
                <div className="text-[10px] font-mono text-purple-600 mt-0.5">
                  Latency: {systems[activeNode].latency}
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
