import React, { useState, useEffect } from "react";
import {
  Globe,
  FileText,
  Box,
  Truck,
  Rocket,
  ArrowRight,
  ShieldCheck,
  Info,
  Download,
  Check,
} from "lucide-react";

// --- DATA: THE 5-STEP ONDC CHECKLIST ---
const steps = [
  {
    id: 1,
    title: "Eligibility Check",
    icon: ShieldCheck,
    desc: "Automated KYC & GST verification.",
    detail:
      "We validate your GSTIN against the ONDC registry API to ensure you are compliant to sell nationwide.",
    status: "Instant",
  },
  {
    id: 2,
    title: "Catalog Sync",
    icon: FileText,
    desc: "Upload once, format for protocol.",
    detail:
      "Your Microkraft inventory is auto-mapped to the Beckn Protocol taxonomy required by ONDC.",
    status: "Automated",
  },
  {
    id: 3,
    title: "Inventory Push",
    icon: Box,
    desc: "Live stock updates to the network.",
    detail:
      "Real-time webhooks ensure you never receive an order for an out-of-stock item on Paytm or PhonePe.",
    status: "Real-time",
  },
  {
    id: 4,
    title: "Logistics Setup",
    icon: Truck,
    desc: "Connect with localized delivery partners.",
    detail:
      "Auto-assign orders to Dunzo, Shadowfax, or LoadShare based on pincode serviceability.",
    status: "Integrated",
  },
  {
    id: 5,
    title: "Go Live",
    icon: Rocket,
    desc: "Visible on all Buyer Apps.",
    detail:
      "Your store instantly appears on Paytm, Magicpin, Pincode, and Mystore search results.",
    status: "Network Wide",
  },
];

// --- BUYER APPS ---
const buyerApps = [
  { name: "Paytm", color: "bg-[#002E6E] text-white" },
  { name: "Magicpin", color: "bg-[#D61355] text-white" },
  { name: "Pincode", color: "bg-[#2874F0] text-white" },
  { name: "Mystore", color: "bg-[#1C1C1C] text-white" },
  { name: "PhonePe", color: "bg-[#5f259f] text-white" },
];

const ONDCBridge: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  // --- TEXT ANIMATION STATE ---
  const [wordIndex, setWordIndex] = useState(0);
  const words = [
    "Limitless Visibility",
    "Nationwide Reach",
    "Instant Discovery",
    "Zero Friction",
  ];

  // 1. Text Animation Loop (Slower Speed: 3000ms)
  useEffect(() => {
    const textInterval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(textInterval);
  }, [words.length]);

  // 2. Step Animation Loop (4000ms)
  useEffect(() => {
    const stepInterval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(stepInterval);
  }, []);

  return (
    <section className="relative py-24 bg-white overflow-hidden font-sans selection:bg-pink-100">
      {/* --- 1. KEYFRAME ANIMATIONS --- */}
      <style>{`
        /* Micro-animations */
        @keyframes pulse-soft {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.8; }
        }
        @keyframes flow-dash {
          to { stroke-dashoffset: -20; }
        }
        .animate-pulse-soft { animation: pulse-soft 3s ease-in-out infinite; }
        .animate-flow-dash { animation: flow-dash 1s linear infinite; }
      `}</style>

      {/* --- 2. CLEAN BACKGROUND (Purple/Pink/White Theme) --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#4c1d95 1px, transparent 1px), linear-gradient(90deg, #4c1d95 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        ></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-50/60 rounded-full blur-[100px] animate-pulse-soft"></div>
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-50/60 rounded-full blur-[100px] animate-pulse-soft"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* --- 3. SECTION HEADER --- */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-10">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-xs font-bold uppercase tracking-wider mb-6 hover:scale-105 transition-transform cursor-default">
              <Globe size={14} />
              Approved Network Participant
            </div>

            {/* Headline with Animation */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
              One Connection. <br className="hidden md:block" />
              {/* THE SLIDING GRADIENT TEXT */}
              <div className="relative h-[1.2em] overflow-hidden">
                {words.map((word, i) => (
                  <span
                    key={i}
                    className={`absolute left-0 top-0 block w-full text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 transition-all duration-700 ease-in-out`}
                    style={{
                      transform:
                        i === wordIndex
                          ? "translateY(0)" // Current: Visible
                          : i < wordIndex
                          ? "translateY(-100%)" // Previous: Moved Up (Out)
                          : "translateY(100%)", // Next: Waiting Below
                      opacity: i === wordIndex ? 1 : 0,
                    }}
                  >
                    {word}.
                  </span>
                ))}
              </div>
            </h2>

            <p className="text-lg text-slate-500 max-w-xl leading-relaxed">
              Connect to the ONDC network via approved Seller Network
              Participants. We guide eligibility, catalog, inventory, and
              logistics.
            </p>
          </div>

          {/* Lead Magnet CTA */}
          <div className="bg-white border border-purple-100 shadow-[0_20px_50px_-20px_rgba(219,39,119,0.15)] p-6 rounded-2xl max-w-sm w-full relative overflow-hidden group hover:-translate-y-1 transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-50 to-pink-50 rounded-full -mr-10 -mt-10 opacity-50 group-hover:scale-110 transition-transform duration-700"></div>

            <div className="flex items-start gap-5 relative z-10">
              <div className="p-3.5 bg-gradient-to-br from-purple-600 to-pink-500 rounded-xl text-white shadow-lg shadow-pink-500/30 group-hover:rotate-3 transition-transform duration-300">
                <FileText size={24} />
              </div>
              <div>
                <h3 className="text-slate-900 font-bold text-lg group-hover:text-purple-700 transition-colors">
                  ONDC 101 Guide
                </h3>
                <p className="text-slate-500 text-sm mb-4 font-medium">
                  Free PDF checklist for MSMEs.
                </p>
                <button className="flex items-center gap-2 text-sm font-bold text-pink-600 hover:text-pink-800 transition-colors">
                  Download Now
                  <Download size={16} className="animate-bounce" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* --- 4. INTERACTIVE ROADMAP --- */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* LEFT: Step Navigator */}
          <div className="lg:col-span-5 space-y-3">
            {steps.map((step, idx) => (
              <div
                key={step.id}
                onClick={() => {
                  setActiveStep(idx);
                  setWordIndex(0);
                }}
                className={`group relative p-5 rounded-2xl border cursor-pointer transition-all duration-300 overflow-hidden ${
                  activeStep === idx
                    ? "bg-white border-pink-500 shadow-lg shadow-pink-500/10 scale-[1.02]"
                    : "bg-white border-slate-100 hover:border-purple-200 hover:bg-purple-50/30"
                }`}
              >
                {/* Progress Bar Line */}
                {activeStep === idx && (
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-purple-500 to-pink-500"></div>
                )}

                <div className="flex items-center justify-between pl-3 relative z-10">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        activeStep === idx
                          ? "bg-pink-50 text-pink-600 rotate-3"
                          : "bg-slate-50 text-slate-400 group-hover:bg-white group-hover:shadow-sm"
                      }`}
                    >
                      <step.icon size={20} />
                    </div>
                    <div>
                      <h4
                        className={`font-bold text-lg transition-colors ${
                          activeStep === idx
                            ? "text-slate-900"
                            : "text-slate-500 group-hover:text-slate-800"
                        }`}
                      >
                        {step.title}
                      </h4>
                      <p
                        className={`text-sm transition-colors ${
                          activeStep === idx
                            ? "text-purple-600 font-medium"
                            : "text-slate-400"
                        }`}
                      >
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Active Arrow */}
                  <div
                    className={`transition-all duration-300 ${
                      activeStep === idx
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-4"
                    }`}
                  >
                    <ArrowRight size={20} className="text-pink-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT: Visual Engine Dashboard */}
          <div className="lg:col-span-7 h-full min-h-[550px] relative">
            {/* Dashboard Container */}
            <div className="absolute inset-0 bg-white rounded-[2.5rem] border border-slate-200 shadow-2xl shadow-slate-200/50 overflow-hidden flex flex-col items-center justify-center p-8 text-center group">
              {/* 1. Dynamic Detail Content */}
              <div className="mb-14 max-w-md mx-auto relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 text-slate-500 text-[10px] font-bold mb-5 uppercase tracking-widest border border-slate-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse"></span>
                  Process: Step {activeStep + 1}/5
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-3 transition-all duration-500">
                  {steps[activeStep].title}
                </h3>
                <p className="text-slate-600 leading-relaxed font-medium transition-all duration-500">
                  {steps[activeStep].detail}
                </p>
              </div>

              {/* 2. Central Visualization */}
              <div className="relative w-full max-w-lg h-48 flex items-center justify-between z-10">
                {/* NODE A: Your Store */}
                <div className="flex flex-col items-center gap-3">
                  <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-slate-100 relative group-hover:-translate-y-2 transition-transform duration-500">
                    <div className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                      <Check size={8} className="text-white stroke-[4]" />
                    </div>
                    <Box size={32} className="text-slate-800" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    Your Inventory
                  </span>
                </div>

                {/* CONNECTION LINE (Animated) */}
                <div className="flex-1 h-0.5 bg-slate-100 relative mx-6">
                  {/* Flowing Dash */}
                  <svg className="absolute inset-0 w-full h-full overflow-visible">
                    <line
                      x1="0"
                      y1="50%"
                      x2="100%"
                      y2="50%"
                      stroke="#d8b4fe"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      className="animate-flow-dash"
                      opacity="1"
                    />
                  </svg>

                  {/* Data Packet */}
                  <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-pink-500 rounded-full shadow-lg z-20 flex items-center justify-center animate-[slide-right_2s_linear_infinite]">
                    <div className="w-1.5 h-1.5 bg-pink-500 rounded-full"></div>
                  </div>
                </div>

                {/* NODE B: ONDC Cloud */}
                <div className="flex flex-col items-center gap-3">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-2xl shadow-purple-600/30 relative">
                    {/* Pulse Rings */}
                    <div className="absolute inset-0 rounded-full border border-purple-400 opacity-30 animate-[ping_2s_infinite]"></div>
                    <div className="absolute inset-0 rounded-full border border-pink-400 opacity-20 animate-[ping_2s_infinite_0.5s]"></div>

                    <Globe size={40} className="text-white relative z-10" />
                  </div>
                  <span className="text-[10px] font-bold text-purple-600 uppercase tracking-widest">
                    ONDC Network
                  </span>
                </div>
              </div>

              {/* 3. Output Grid (Visible on Step 5) */}
              <div
                className={`mt-8 transition-all duration-700 transform ${
                  activeStep === 4
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">
                  Live On
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {buyerApps.map((app, i) => (
                    <span
                      key={app.name}
                      className={`px-4 py-2 rounded-lg text-xs font-bold shadow-lg transform transition-all duration-500 hover:-translate-y-1 cursor-default ${app.color}`}
                      style={{ transitionDelay: `${i * 100}ms` }}
                    >
                      {app.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- 5. FOOTER INFO --- */}
        <div className="mt-16 bg-slate-50 border border-slate-200 rounded-xl p-6 flex items-start gap-4">
          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 shrink-0">
            <Info size={16} />
          </div>
          <p className="text-sm text-slate-500 leading-relaxed">
            <strong>Did you know?</strong> ONDC is an open network, not an app.
            By listing via Microkraft, your catalog becomes discoverable by any
            buyer app on the network (like Paytm, PhonePe, or Pincode) without
            you needing to register with them individually.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ONDCBridge;
