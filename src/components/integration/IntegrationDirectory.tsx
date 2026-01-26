import React, { useState, useEffect } from "react";
import {
  Globe,
  FileText,
  Box,
  Truck,
  Rocket,
  ArrowRight,
  ShieldCheck,
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

  // 2. Step Animation Loop (4000ms)
  useEffect(() => {
    const stepInterval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(stepInterval);
  }, []);

  return (
    <section className="relative py-6 sm:py-8 md:py-10 bg-gradient-to-b from-slate-50 to-white overflow-hidden font-sans selection:bg-pink-100">
      {/* Styles moved to index.css - see: animate-pulse-soft, animate-flow-dash */}

      {/* --- 2. CLEAN BACKGROUND (Purple/Pink/White Theme) --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-purple-200/10 rounded-full blur-2xl sm:blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-pink-200/10 rounded-full blur-2xl sm:blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 relative z-10">
        {/* --- CENTERED HEADER --- */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-2 sm:mb-3 px-2 sm:px-0">
            Seamless ONDC Network{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600">
              Integration Process
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto px-2 sm:px-0">
            5-step process to connect your business to the ONDC network.
          </p>
        </div>

        {/* --- 4. INTERACTIVE ROADMAP --- */}
        <div className="grid lg:grid-cols-12 gap-4 sm:gap-5 md:gap-6 lg:gap-8 items-start">
          {/* LEFT: Step Navigator */}
          <div className="lg:col-span-5 space-y-2 sm:space-y-2.5">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className={`group relative p-3 sm:p-3.5 md:p-4 rounded-xl sm:rounded-2xl border cursor-pointer transition-all duration-300 overflow-hidden ${
                  activeStep === idx
                    ? "bg-white border-purple-500 shadow-lg shadow-purple-500/10 scale-[1.01]"
                    : "bg-white border-slate-200/50 hover:border-purple-200 hover:bg-purple-50/30 hover:shadow-md"
                }`}
              >
                {/* Progress Bar Line */}
                {activeStep === idx && (
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-purple-500 to-pink-500"></div>
                )}

                <div className="flex items-center justify-between pl-2 sm:pl-2.5 relative z-10">
                  <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3 min-w-0 flex-1">
                    <div
                      className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-md sm:rounded-lg flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                        activeStep === idx
                          ? "bg-gradient-to-br from-purple-100 to-pink-100 text-purple-600 rotate-3"
                          : "bg-slate-50 text-slate-400 group-hover:bg-white group-hover:shadow-sm"
                      }`}
                    >
                      <step.icon size={16} className="sm:w-4 sm:h-4 md:w-[18px] md:h-[18px]" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4
                        className={`font-bold text-sm sm:text-base transition-colors ${
                          activeStep === idx
                            ? "text-slate-900"
                            : "text-slate-600 group-hover:text-slate-800"
                        }`}
                      >
                        {step.title}
                      </h4>
                      <p
                        className={`text-xs sm:text-sm transition-colors ${
                          activeStep === idx
                            ? "text-purple-600 font-medium"
                            : "text-slate-500"
                        }`}
                      >
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Active Arrow */}
                  <div
                    className={`transition-all duration-300 flex-shrink-0 ${
                      activeStep === idx
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-4"
                    }`}
                  >
                    <ArrowRight size={16} className="sm:w-4 sm:h-4 md:w-[18px] md:h-[18px] text-purple-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT: Visual Engine Dashboard */}
          <div className="lg:col-span-7 h-full min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[450px] relative mt-6 lg:mt-0">
            {/* Dashboard Container */}
            <div className="absolute inset-0 bg-white rounded-2xl sm:rounded-3xl border border-slate-200/50 shadow-xl hover:shadow-2xl hover:shadow-purple-500/10 overflow-hidden flex flex-col items-center justify-center p-4 sm:p-5 md:p-6 text-center group">
              {/* 1. Dynamic Detail Content */}
              <div className="mb-6 sm:mb-8 md:mb-10 max-w-md mx-auto relative z-10">
                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-slate-100 text-slate-500 text-[8px] sm:text-[9px] font-bold mb-3 sm:mb-4 uppercase tracking-widest border border-slate-200">
                  <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-purple-500 animate-pulse"></span>
                  Process: Step {activeStep + 1}/5
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-1.5 sm:mb-2 transition-all duration-500">
                  {steps[activeStep].title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-xs sm:text-sm transition-all duration-500 px-2 sm:px-0">
                  {steps[activeStep].detail}
                </p>
              </div>

              {/* 2. Central Visualization */}
              <div className="relative w-full max-w-lg h-32 sm:h-36 md:h-40 flex items-center justify-between z-10 px-2 sm:px-0">
                {/* NODE A: Your Store */}
                <div className="flex flex-col items-center gap-1.5 sm:gap-2 md:gap-2.5">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg border border-slate-200/50 relative group-hover:-translate-y-1 transition-transform duration-500">
                    <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                      <Check size={4} className="sm:w-1.5 sm:h-1.5 md:w-[6px] md:h-[6px] text-white stroke-[3] sm:stroke-[4]" />
                    </div>
                    <Box size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6 text-slate-800" />
                  </div>
                  <span className="text-[8px] sm:text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                    Your Inventory
                  </span>
                </div>

                {/* CONNECTION LINE (Animated) */}
                <div className="flex-1 h-0.5 bg-slate-100 relative mx-2 sm:mx-3 md:mx-5">
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
                  <div className="absolute top-1/2 -translate-y-1/2 w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-white border-2 border-purple-500 rounded-full shadow-md z-20 flex items-center justify-center animate-[slide-right_2s_linear_infinite]">
                    <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-purple-500 rounded-full"></div>
                  </div>
                </div>

                {/* NODE B: ONDC Cloud */}
                <div className="flex flex-col items-center gap-1.5 sm:gap-2 md:gap-2.5">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-xl shadow-purple-600/30 relative">
                    {/* Pulse Rings */}
                    <div className="absolute inset-0 rounded-full border border-purple-400 opacity-30 animate-[ping_2s_infinite]"></div>
                    <div className="absolute inset-0 rounded-full border border-pink-400 opacity-20 animate-[ping_2s_infinite_0.5s]"></div>

                    <Globe size={20} className="sm:w-7 sm:h-7 md:w-8 md:h-8 text-white relative z-10" />
                  </div>
                  <span className="text-[8px] sm:text-[9px] font-bold text-purple-600 uppercase tracking-widest">
                    ONDC Network
                  </span>
                </div>
              </div>

              {/* 3. Output Grid (Visible on Step 5) */}
              <div
                className={`mt-4 sm:mt-5 md:mt-6 transition-all duration-700 transform ${
                  activeStep === 4
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
              >
                <p className="text-[8px] sm:text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2 sm:mb-3">
                  Live On
                </p>
                <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5">
                  {buyerApps.map((app, i) => (
                    <span
                      key={app.name}
                      className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md sm:rounded-lg text-[10px] sm:text-xs font-bold shadow-md transform transition-all duration-500 hover:-translate-y-0.5 cursor-default ${app.color}`}
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
        {/* <div className="mt-2 bg-slate-50 border border-slate-200/50 rounded-xl p-5 flex items-start gap-3">
          <div className="w-7 h-7 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center text-purple-600 shrink-0">
            <Info size={14} />
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            <strong className="text-slate-900">Did you know?</strong> ONDC is an
            open network, not an app. By listing via Microkraft, your catalog
            becomes discoverable by any buyer app on the network (like Paytm,
            PhonePe, or Pincode) without you needing to register with them
            individually.
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default ONDCBridge;
