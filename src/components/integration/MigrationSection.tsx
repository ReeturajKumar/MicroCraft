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
    <section className="relative py-6 bg-gradient-to-b from-slate-50 to-white overflow-hidden font-sans selection:bg-pink-100">
      {/* Styles moved to index.css - see: animate-scan, animate-flow-pipe */}

      {/* --- 2. BACKGROUND --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-purple-200/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-pink-200/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* --- CENTERED HEADER --- */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-3">
            Smart Data Migration{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600">
              Made Simple
            </span>
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            AI-powered import engine migrates your Excel data to the platform
            automatically.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* --- 3. LEFT: CONTENT & PROMISE --- */}
          <div>
            {/* Feature Grid */}
            <div className="space-y-4">
              {features.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 group p-4 rounded-2xl bg-white border border-slate-200/50 hover:border-purple-200 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200/50 shadow-sm flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <feat.icon
                      size={22}
                      className="text-purple-600 transition-colors"
                    />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 mb-1 group-hover:text-purple-700 transition-colors">
                      {feat.title}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3 pt-6 border-t border-slate-200/50">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Supported Formats
              </span>
              <div className="flex gap-2">
                {["XLSX", "CSV", "XML", "JSON"].map((ext) => (
                  <span
                    key={ext}
                    className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-600 shadow-sm hover:border-purple-300 hover:text-purple-600 transition-colors"
                  >
                    {ext}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* --- 4. RIGHT: THE TRANSFORMATION ENGINE (Visual Dashboard) --- */}
          <div className="relative h-[450px] w-full bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30 rounded-3xl border-2 border-purple-200/50 shadow-2xl shadow-purple-500/20 hover:shadow-purple-500/30 overflow-hidden flex flex-col items-center justify-center">
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
            <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl shadow-purple-900/20 border-2 border-purple-200/50 p-1.5 z-10 transition-all duration-500 hover:scale-[1.02]">
              <div className="relative h-[400px] bg-white rounded-[1.4rem] overflow-hidden">
                {/* --- STATE 0: UPLOAD (Idle) --- */}
                <div
                  className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ${
                    processStep === 0
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-8"
                  }`}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mb-5 relative">
                    <div className="absolute inset-0 border-2 border-purple-300 rounded-full animate-ping opacity-30"></div>
                    <UploadCloud size={36} className="text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Import Data
                  </h3>
                  <p className="text-slate-500 text-sm mb-5">
                    Drag & drop your Excel file here
                  </p>

                  {/* Mock File Card */}
                  <div className="flex items-center gap-3 px-4 py-2.5 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border-2 border-green-200 shadow-md animate-[bounce_2s_infinite]">
                    <FileSpreadsheet size={18} className="text-green-600" />
                    <span className="text-xs font-bold text-slate-700">
                      inventory_master_v2.xlsx
                    </span>
                  </div>
                </div>

                {/* --- STATE 1: ANALYZE (Scanning) --- */}
                <div
                  className={`absolute inset-0 p-5 transition-all duration-700 ${
                    processStep === 1
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4 border-b-2 border-purple-100 pb-3">
                    <span className="text-xs font-bold text-purple-600 uppercase tracking-wider bg-purple-50 px-3 py-1 rounded-full">
                      Analyzing Structure...
                    </span>
                    <Wand2 size={18} className="text-purple-500 animate-spin" />
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
                  className={`absolute inset-0 p-5 transition-all duration-700 ${
                    processStep === 2
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-bold text-purple-600 uppercase tracking-wider bg-gradient-to-r from-purple-50 to-pink-50 px-3 py-1.5 rounded-full border border-purple-200 shadow-sm">
                      Smart Mapping Active
                    </span>
                  </div>

                  <div className="space-y-3">
                    {mappingSteps.map((step, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between group animate-[fade-in-up_0.5s_ease-out_forwards] bg-slate-50/50 p-3 rounded-xl border border-slate-200"
                        style={{ animationDelay: `${i * 200}ms` }}
                      >
                        {/* Source */}
                        <div className="text-center">
                          <div className="text-[9px] text-slate-500 mb-1 font-bold">
                            Col {step.col}
                          </div>
                          <div className="px-3 py-1.5 bg-white rounded-lg text-xs font-bold text-slate-700 border-2 border-slate-200 shadow-sm">
                            {step.header}
                          </div>
                        </div>

                        {/* Connector */}
                        <div className="flex-1 px-3 flex justify-center">
                          <ArrowRight size={16} className="text-purple-400" />
                        </div>

                        {/* Destination */}
                        <div className="text-center">
                          <div className="text-[9px] text-purple-500 mb-1 font-bold">
                            Field
                          </div>
                          <div className="px-3 py-1.5 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg text-xs font-bold text-purple-700 border-2 border-purple-200 flex items-center gap-1.5 shadow-sm">
                            {step.mappedTo}
                            <CheckCircle2
                              size={12}
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
                  className={`absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-green-50 via-emerald-50 to-white transition-all duration-700 ${
                    processStep === 3
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95"
                  }`}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mb-4 shadow-2xl shadow-green-500/30 relative">
                    <div className="absolute inset-0 border-2 border-green-400 rounded-full animate-ping opacity-30"></div>
                    <Database size={32} className="text-white relative z-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Migration Complete
                  </h3>
                  <p className="text-slate-600 text-sm font-medium mb-6">
                    3,405 Products Synced
                  </p>

                  <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold rounded-xl shadow-lg shadow-purple-500/30 hover:from-purple-700 hover:to-pink-700 hover:scale-105 transition-all flex items-center gap-2">
                    Launch Dashboard <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>

            {/* Floating Badges */}
            <div className="absolute top-8 right-8 bg-white p-3 rounded-xl shadow-xl border-2 border-green-200 animate-[float-slow_4s_infinite] z-20">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg flex items-center justify-center">
                  <ShieldCheck size={16} className="text-green-600" />
                </div>
                <div className="text-xs font-bold text-slate-700">
                  0 Duplicates
                </div>
              </div>
            </div>
            <div className="absolute bottom-8 left-8 bg-white p-3 rounded-xl shadow-xl border-2 border-purple-200 animate-[float-slow_5s_infinite] z-20">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center">
                  <AlertCircle size={16} className="text-purple-600" />
                </div>
                <div className="text-xs font-bold text-slate-700">
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
