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

  // 1. Animation Loop for the "Transformation Engine" (4 Steps)
  useEffect(() => {
    const interval = setInterval(() => {
      setProcessStep((prev) => (prev + 1) % 4);
    }, 3500); // 3.5s per step
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-6 sm:py-8 md:py-10 bg-gradient-to-b from-slate-50 to-white overflow-hidden font-sans selection:bg-pink-100">
      {/* Styles moved to index.css - see: animate-scan, animate-flow-pipe */}

      {/* --- 2. BACKGROUND --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-purple-200/10 rounded-full blur-2xl sm:blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-pink-200/10 rounded-full blur-2xl sm:blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 relative z-10">
        {/* --- CENTERED HEADER --- */}
        <div className="text-center mb-6 sm:mb-7 md:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-2 sm:mb-3 px-2 sm:px-0">
            Smart Data Migration{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600">
              Made Simple
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto px-2 sm:px-0">
            AI-powered import engine migrates your Excel data to the platform
            automatically.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-7 md:gap-8 lg:gap-12 items-center">
          {/* --- 3. LEFT: CONTENT & PROMISE --- */}
          <div>
            {/* Feature Grid */}
            <div className="space-y-3 sm:space-y-4">
              {features.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex gap-3 sm:gap-4 group p-3 sm:p-3.5 md:p-4 rounded-xl sm:rounded-2xl bg-white border border-slate-200/50 hover:border-purple-200 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200/50 shadow-sm flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <feat.icon
                      size={18}
                      className="sm:w-5 sm:h-5 md:w-[22px] md:h-[22px] text-purple-600 transition-colors"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-0.5 sm:mb-1 group-hover:text-purple-700 transition-colors">
                      {feat.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 sm:mt-7 md:mt-8 flex flex-wrap items-center gap-2 sm:gap-3 pt-4 sm:pt-5 md:pt-6 border-t border-slate-200/50">
              <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">
                Supported Formats
              </span>
              <div className="flex gap-1.5 sm:gap-2">
                {["XLSX", "CSV", "XML", "JSON"].map((ext) => (
                  <span
                    key={ext}
                    className="px-2.5 sm:px-3 py-0.5 sm:py-1 bg-white border border-slate-200 rounded-md sm:rounded-lg text-[10px] sm:text-xs font-bold text-slate-600 shadow-sm hover:border-purple-300 hover:text-purple-600 transition-colors"
                  >
                    {ext}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* --- 4. RIGHT: THE TRANSFORMATION ENGINE (Visual Dashboard) --- */}
          <div className="relative h-[350px] sm:h-[400px] md:h-[450px] w-full bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30 rounded-2xl sm:rounded-3xl border-2 border-purple-200/50 shadow-2xl shadow-purple-500/20 hover:shadow-purple-500/30 overflow-hidden flex flex-col items-center justify-center mt-6 lg:mt-0">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 2px 2px, purple 1px, transparent 0)",
                  backgroundSize: "40px 40px",
                }}
              ></div>
            </div>

            {/* The Central "Machine" Card */}
            <div className="relative w-full max-w-md bg-white rounded-2xl sm:rounded-3xl shadow-2xl shadow-purple-900/20 border-2 border-purple-200/50 p-1 sm:p-1.5 z-10 transition-all duration-500 hover:scale-[1.02]">
              <div className="relative h-[300px] sm:h-[350px] md:h-[400px] bg-white rounded-[1.2rem] sm:rounded-[1.4rem] overflow-hidden">
                {/* --- STATE 0: UPLOAD (Idle) --- */}
                <div
                  className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 px-3 sm:px-4 ${
                    processStep === 0
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-8"
                  }`}
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-20 md:h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mb-3 sm:mb-4 md:mb-5 relative">
                    <div className="absolute inset-0 border-2 border-purple-300 rounded-full animate-ping opacity-30"></div>
                    <UploadCloud size={28} className="sm:w-8 sm:h-8 md:w-9 md:h-9 text-purple-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5 sm:mb-2">
                    Import Data
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm mb-3 sm:mb-4 md:mb-5 text-center">
                    Drag & drop your Excel file here
                  </p>

                  {/* Mock File Card */}
                  <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-2.5 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg sm:rounded-xl border-2 border-green-200 shadow-md animate-[bounce_2s_infinite]">
                    <FileSpreadsheet size={14} className="sm:w-4 sm:h-4 md:w-[18px] md:h-[18px] text-green-600 flex-shrink-0" />
                    <span className="text-[10px] sm:text-xs font-bold text-slate-700 truncate">
                      inventory_master_v2.xlsx
                    </span>
                  </div>
                </div>

                {/* --- STATE 1: ANALYZE (Scanning) --- */}
                <div
                  className={`absolute inset-0 p-3 sm:p-4 md:p-5 transition-all duration-700 ${
                    processStep === 1
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3 sm:mb-4 border-b-2 border-purple-100 pb-2 sm:pb-3">
                    <span className="text-[10px] sm:text-xs font-bold text-purple-600 uppercase tracking-wider bg-purple-50 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
                      Analyzing Structure...
                    </span>
                    <Wand2 size={14} className="sm:w-4 sm:h-4 md:w-[18px] md:h-[18px] text-purple-500 animate-spin flex-shrink-0" />
                  </div>

                  {/* Mock Spreadsheet UI */}
                  <div className="space-y-1.5 sm:space-y-2 relative">
                    <div className="flex gap-1.5 sm:gap-2">
                      <div className="w-6 h-3 sm:w-8 sm:h-4 bg-slate-100 rounded"></div>
                      <div className="w-16 h-3 sm:w-20 sm:h-4 md:w-24 md:h-4 bg-slate-100 rounded"></div>
                      <div className="w-12 h-3 sm:w-14 sm:h-4 md:w-16 md:h-4 bg-slate-100 rounded"></div>
                    </div>
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="flex gap-1.5 sm:gap-2 opacity-60">
                        <div className="w-6 h-2 sm:w-8 sm:h-3 bg-slate-50 rounded"></div>
                        <div className="w-16 h-2 sm:w-20 sm:h-3 md:w-24 md:h-3 bg-slate-50 rounded"></div>
                        <div className="w-12 h-2 sm:w-14 sm:h-3 md:w-16 md:h-3 bg-slate-50 rounded"></div>
                      </div>
                    ))}
                    {/* Scanner Line */}
                    <div className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 shadow-[0_0_15px_#d8b4fe] animate-scan"></div>
                  </div>
                </div>

                {/* --- STATE 2: MAPPING (Intelligent Column Matching) --- */}
                <div
                  className={`absolute inset-0 p-3 sm:p-4 md:p-5 transition-all duration-700 ${
                    processStep === 2
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3 sm:mb-4 md:mb-5">
                    <span className="text-[10px] sm:text-xs font-bold text-purple-600 uppercase tracking-wider bg-gradient-to-r from-purple-50 to-pink-50 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border border-purple-200 shadow-sm">
                      Smart Mapping Active
                    </span>
                  </div>

                  <div className="space-y-2 sm:space-y-2.5 md:space-y-3">
                    {mappingSteps.map((step, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between group animate-[fade-in-up_0.5s_ease-out_forwards] bg-slate-50/50 p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl border border-slate-200"
                        style={{ animationDelay: `${i * 200}ms` }}
                      >
                        {/* Source */}
                        <div className="text-center min-w-0 flex-1">
                          <div className="text-[8px] sm:text-[9px] text-slate-500 mb-0.5 sm:mb-1 font-bold">
                            Col {step.col}
                          </div>
                          <div className="px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 bg-white rounded-md sm:rounded-lg text-[10px] sm:text-xs font-bold text-slate-700 border-2 border-slate-200 shadow-sm truncate">
                            {step.header}
                          </div>
                        </div>

                        {/* Connector */}
                        <div className="flex-shrink-0 px-1.5 sm:px-2 md:px-3 flex justify-center">
                          <ArrowRight size={12} className="sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-purple-400" />
                        </div>

                        {/* Destination */}
                        <div className="text-center min-w-0 flex-1">
                          <div className="text-[8px] sm:text-[9px] text-purple-500 mb-0.5 sm:mb-1 font-bold">
                            Field
                          </div>
                          <div className="px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 bg-gradient-to-r from-purple-50 to-pink-50 rounded-md sm:rounded-lg text-[10px] sm:text-xs font-bold text-purple-700 border-2 border-purple-200 flex items-center gap-1 sm:gap-1.5 shadow-sm">
                            <span className="truncate">{step.mappedTo}</span>
                            <CheckCircle2
                              size={10}
                              className="sm:w-3 sm:h-3 md:w-[12px] md:h-[12px] text-green-500 flex-shrink-0"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* --- STATE 3: SUCCESS (Dashboard Ready) --- */}
                <div
                  className={`absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-green-50 via-emerald-50 to-white transition-all duration-700 px-3 sm:px-4 ${
                    processStep === 3
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95"
                  }`}
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-20 md:h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mb-3 sm:mb-4 shadow-2xl shadow-green-500/30 relative">
                    <div className="absolute inset-0 border-2 border-green-400 rounded-full animate-ping opacity-30"></div>
                    <Database size={24} className="sm:w-7 sm:h-7 md:w-8 md:h-8 text-white relative z-10" />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-1.5 sm:mb-2">
                    Migration Complete
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm font-medium mb-4 sm:mb-5 md:mb-6">
                    3,405 Products Synced
                  </p>

                  <button className="px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-[10px] sm:text-xs font-bold rounded-lg sm:rounded-xl shadow-lg shadow-purple-500/30 hover:from-purple-700 hover:to-pink-700 hover:scale-105 transition-all flex items-center gap-1.5 sm:gap-2">
                    Launch Dashboard <ArrowRight size={12} className="sm:w-3.5 sm:h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Floating Badges */}
            <div className="absolute top-4 sm:top-6 md:top-8 right-4 sm:right-6 md:right-8 bg-white p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl shadow-xl border-2 border-green-200 animate-[float-slow_4s_infinite] z-20">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-gradient-to-br from-green-100 to-emerald-100 rounded-md sm:rounded-lg flex items-center justify-center flex-shrink-0">
                  <ShieldCheck size={12} className="sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-green-600" />
                </div>
                <div className="text-[10px] sm:text-xs font-bold text-slate-700 whitespace-nowrap">
                  0 Duplicates
                </div>
              </div>
            </div>
            <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8 bg-white p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl shadow-xl border-2 border-purple-200 animate-[float-slow_5s_infinite] z-20">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-gradient-to-br from-purple-100 to-pink-100 rounded-md sm:rounded-lg flex items-center justify-center flex-shrink-0">
                  <AlertCircle size={12} className="sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-purple-600" />
                </div>
                <div className="text-[10px] sm:text-xs font-bold text-slate-700 whitespace-nowrap">
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
