import React, { useState, useEffect } from "react";
import {
  FileSpreadsheet,
  ArrowRight,
  CheckCircle2,
  UploadCloud,
  Database,
  Wand2,
  ShieldCheck,
  AlertCircle,
  Table,
} from "lucide-react";

// --- DATA: MIGRATION FEATURES ---
const features = [
  {
    title: "Universal Format Support",
    desc: "We support exports from Tally, Zoho, Marg, Vyapar, or standard CSV/Excel files. No formatting needed.",
    icon: FileSpreadsheet,
  },
  {
    title: "Smart Column Mapping",
    desc: "Our AI identifies columns like 'Selling Price' vs 'MRP' automatically. No manual headers required.",
    icon: Table,
  },
  {
    title: "Data Sanitization",
    desc: "Auto-fixes common errors: duplicate customers, invalid phone numbers, and missing SKUs.",
    icon: ShieldCheck,
  },
];

// --- MOCK DATA FOR VISUALIZATION ---
const mappingSteps = [
  {
    col: "A",
    header: "Item Name",
    mappedTo: "Product Title",
    status: "success",
  },
  { col: "B", header: "Cost", mappedTo: "Purchase Price", status: "success" },
  { col: "C", header: "Qty", mappedTo: "Stock Level", status: "success" },
];

const MigrationSection: React.FC = () => {
  const [processStep, setProcessStep] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);

  // Rotating words for the headline
  const rotatingWords = [
    "Growth OS",
    "Smart Dashboard",
    "Digital Store",
    "Unified Data",
  ];

  // 1. Animation Loop for the "Transformation Engine" (4 Steps)
  useEffect(() => {
    const interval = setInterval(() => {
      setProcessStep((prev) => (prev + 1) % 4);
    }, 3500); // 3.5s per step
    return () => clearInterval(interval);
  }, []);

  // 2. Text Slide Loop
  useEffect(() => {
    const textInterval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(textInterval);
  }, [rotatingWords.length]);

  return (
    <section className="relative py-24 bg-white overflow-hidden font-sans selection:bg-pink-100">
      {/* --- 1. KEYFRAME ANIMATIONS --- */}
      <style>{`
        /* Scan Line Animation */
        @keyframes scan-vertical {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        
        /* Connection Pipe Flow */
        @keyframes flow-right {
          0% { stroke-dashoffset: 20; }
          100% { stroke-dashoffset: 0; }
        }

        .animate-scan { animation: scan-vertical 2s linear infinite; }
        .animate-flow-pipe { animation: flow-right 1s linear infinite; }
      `}</style>

      {/* --- 2. BACKGROUND --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-50/60 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-pink-50/60 rounded-full blur-[100px]"></div>
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(#4c1d95 1px, transparent 1px), backgroundSize: 30px 30px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* --- 3. LEFT: CONTENT & PROMISE --- */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-pink-700 text-xs font-bold uppercase tracking-wider mb-6 hover:scale-105 transition-transform cursor-default">
              <UploadCloud size={14} />
              Free Migration Assistance
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
              Move from Excel to <br />
              {/* SLIDING TEXT ANIMATION */}
              <div className="relative h-[1.2em] overflow-hidden">
                {rotatingWords.map((word, i) => (
                  <span
                    key={i}
                    className={`absolute left-0 top-0 block w-full text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 transition-all duration-700 ease-in-out`}
                    style={{
                      transform:
                        i === slideIndex
                          ? "translateY(0)"
                          : i < slideIndex
                          ? "translateY(-100%)"
                          : "translateY(100%)",
                      opacity: i === slideIndex ? 1 : 0,
                    }}
                  >
                    {word}.
                  </span>
                ))}
              </div>
            </h2>

            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Dreading the data entry? Don't be. Our "Smart Import" engine reads
              your messy spreadsheets, cleans the data, and organizes your
              inventory automatically in minutes.
            </p>

            {/* Feature Grid */}
            <div className="space-y-8">
              {features.map((feat, idx) => (
                <div key={idx} className="flex gap-5 group">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center shrink-0 group-hover:border-purple-200 group-hover:bg-purple-50 transition-all duration-300">
                    <feat.icon
                      size={26}
                      className="text-slate-400 group-hover:text-purple-600 transition-colors"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-purple-700 transition-colors">
                      {feat.title}
                    </h4>
                    <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap gap-4 text-sm font-medium text-slate-400 border-t border-slate-100 pt-8">
              <span className="uppercase tracking-wide text-xs font-bold text-slate-300">
                Supported Formats
              </span>
              <div className="flex gap-2">
                {["XLSX", "CSV", "XML", "JSON"].map((ext) => (
                  <span
                    key={ext}
                    className="px-2 py-1 bg-slate-50 border border-slate-100 rounded text-xs font-bold text-slate-500"
                  >
                    {ext}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* --- 4. RIGHT: THE TRANSFORMATION ENGINE (Visual Dashboard) --- */}
          <div className="relative h-[550px] w-full bg-slate-50 rounded-[2.5rem] border border-slate-200 shadow-inner overflow-hidden flex flex-col items-center justify-center">
            {/* Background Grid inside Container */}
            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage:
                  "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            ></div>

            {/* The Central "Machine" Card */}
            <div className="relative w-80 md:w-96 bg-white rounded-3xl shadow-2xl shadow-purple-900/10 border border-slate-100 p-1 z-10 transition-all duration-500 hover:scale-[1.02]">
              <div className="relative h-80 bg-white rounded-[1.4rem] overflow-hidden">
                {/* --- STATE 0: UPLOAD (Idle) --- */}
                <div
                  className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ${
                    processStep === 0
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-8"
                  }`}
                >
                  <div className="w-24 h-24 bg-purple-50 rounded-full flex items-center justify-center mb-6 relative">
                    <div className="absolute inset-0 border-2 border-purple-100 rounded-full animate-ping opacity-20"></div>
                    <UploadCloud size={40} className="text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Import Data
                  </h3>
                  <p className="text-slate-400 text-sm mb-6">
                    Drag & drop your Excel file here
                  </p>

                  {/* Mock File Card */}
                  <div className="flex items-center gap-3 px-4 py-3 bg-slate-50 rounded-xl border border-slate-100 animate-[bounce_2s_infinite]">
                    <FileSpreadsheet size={20} className="text-green-600" />
                    <span className="text-xs font-bold text-slate-600">
                      inventory_master_v2.xlsx
                    </span>
                  </div>
                </div>

                {/* --- STATE 1: ANALYZE (Scanning) --- */}
                <div
                  className={`absolute inset-0 p-6 transition-all duration-700 ${
                    processStep === 1
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-3">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Analyzing Structure...
                    </span>
                    <Wand2 size={16} className="text-purple-500 animate-spin" />
                  </div>

                  {/* Mock Spreadsheet UI */}
                  <div className="space-y-2 relative">
                    <div className="flex gap-2">
                      <div className="w-8 h-4 bg-slate-100 rounded"></div>
                      <div className="w-24 h-4 bg-slate-100 rounded"></div>
                      <div className="w-16 h-4 bg-slate-100 rounded"></div>
                    </div>
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="flex gap-2 opacity-60">
                        <div className="w-8 h-3 bg-slate-50 rounded"></div>
                        <div className="w-24 h-3 bg-slate-50 rounded"></div>
                        <div className="w-16 h-3 bg-slate-50 rounded"></div>
                      </div>
                    ))}
                    {/* Scanner Line */}
                    <div className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 shadow-[0_0_15px_#d8b4fe] animate-scan"></div>
                  </div>
                </div>

                {/* --- STATE 2: MAPPING (Intelligent Column Matching) --- */}
                <div
                  className={`absolute inset-0 p-6 transition-all duration-700 ${
                    processStep === 2
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-bold text-purple-600 uppercase tracking-wider bg-purple-50 px-2 py-1 rounded">
                      Smart Mapping Active
                    </span>
                  </div>

                  <div className="space-y-4">
                    {mappingSteps.map((step, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between group animate-[fade-in-up_0.5s_ease-out_forwards]"
                        style={{ animationDelay: `${i * 200}ms` }}
                      >
                        {/* Source */}
                        <div className="text-center">
                          <div className="text-[10px] text-slate-400 mb-0.5">
                            Col {step.col}
                          </div>
                          <div className="px-3 py-1.5 bg-slate-100 rounded-lg text-xs font-bold text-slate-600 border border-slate-200">
                            {step.header}
                          </div>
                        </div>

                        {/* Connector */}
                        <div className="flex-1 px-2 flex justify-center">
                          <ArrowRight size={14} className="text-purple-300" />
                        </div>

                        {/* Destination */}
                        <div className="text-center">
                          <div className="text-[10px] text-purple-400 mb-0.5">
                            Field
                          </div>
                          <div className="px-3 py-1.5 bg-purple-50 rounded-lg text-xs font-bold text-purple-700 border border-purple-100 flex items-center gap-1">
                            {step.mappedTo}
                            <CheckCircle2
                              size={10}
                              className="text-green-500"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* --- STATE 3: SUCCESS (Dashboard Ready) --- */}
                <div
                  className={`absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-purple-50 to-white transition-all duration-700 ${
                    processStep === 3
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95"
                  }`}
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-green-100">
                    <Database size={32} className="text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Migration Complete
                  </h3>
                  <p className="text-slate-500 text-sm mt-1 mb-6">
                    3,405 Products Synced
                  </p>

                  <button className="px-6 py-2.5 bg-slate-900 text-white text-xs font-bold rounded-xl shadow-lg hover:bg-slate-800 hover:scale-105 transition-all flex items-center gap-2">
                    Launch Dashboard <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>

            {/* Connecting Pipes (Visualizing Input/Output Flow) */}
            <div className="absolute top-1/2 -left-20 w-32 h-3 bg-slate-200 rounded-full z-0 overflow-hidden">
              {processStep <= 1 && (
                <div className="w-full h-full bg-slate-300 opacity-50 animate-[slide-right_1s_infinite]"></div>
              )}
            </div>
            <div className="absolute top-1/2 -right-20 w-32 h-3 bg-slate-200 rounded-full z-0 overflow-hidden">
              {processStep >= 3 && (
                <div className="w-full h-full bg-green-200 opacity-50 animate-[slide-right_1s_infinite]"></div>
              )}
            </div>

            {/* Floating Badges */}
            <div className="absolute top-12 right-12 bg-white p-3 rounded-xl shadow-lg border border-slate-100 animate-[float-slow_4s_infinite]">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-green-500" />
                <div className="text-[10px] font-bold text-slate-500">
                  0 Duplicates
                </div>
              </div>
            </div>
            <div className="absolute bottom-12 left-12 bg-white p-3 rounded-xl shadow-lg border border-slate-100 animate-[float-slow_5s_infinite]">
              <div className="flex items-center gap-2">
                <AlertCircle size={16} className="text-purple-500" />
                <div className="text-[10px] font-bold text-slate-500">
                  Auto-Fixed Format
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MigrationSection;
