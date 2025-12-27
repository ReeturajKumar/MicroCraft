import React, { useState } from "react";
import {
  Utensils,
  ShoppingBag,
  Factory,
  CheckCircle2,
  FileText,
  MessageSquare,
  Receipt,
  Truck,
  AlertTriangle,
  Smartphone,
  XCircle,
  Clock,
} from "lucide-react";

// --- RICH DATA CONFIGURATION ---
const sectors = [
  {
    id: "rest",
    label: "Restaurants & QSR",
    subLabel: "Food & Hospitality",
    icon: Utensils,
    refId: "45",
    color: "text-orange-600",
    gradient: "from-orange-500 to-amber-500",
    bg: "bg-orange-50",
    border: "border-orange-100",
    pain: "Chaos during peak hours. Missed KOTs lead to angry guests. No customer data for retargeting.",
    solution:
      "A unified flow from aggregator order to kitchen display to automated feedback collection.",
    stats: [
      { label: "Table Turn Time", value: "-15%" },
      { label: "Repeat Visits", value: "+22%" },
    ],
    steps: [
      {
        title: "Aggregator Order / QR",
        desc: "Zomato/Swiggy orders land directly on the POS. No manual entry.",
        icon: ShoppingBag,
      },
      {
        title: "Digital KOT Routing",
        desc: "Order auto-routed to Kitchen Display System (KDS). Chef marks 'Ready'.",
        icon: Receipt,
      },
      {
        title: "Automated Feedback",
        desc: "30 mins after payment, WhatsApp bot asks for a rating & offers a coupon.",
        icon: MessageSquare,
      },
    ],
    mockUI: {
      type: "whatsapp",
      title: "Automated Feedback",
      msg: "Hi Rahul! 👋 Hope you enjoyed your meal at SpiceRoute. Rate us and get 10% OFF your next visit!",
    },
  },
  {
    id: "retail",
    label: "Retail & Pharmacy",
    subLabel: "FMCG & Medicines",
    icon: ShoppingBag,
    refId: "46",
    color: "text-pink-600",
    gradient: "from-pink-500 to-rose-500",
    bg: "bg-pink-50",
    border: "border-pink-100",
    pain: "Expired stock losses. Slow billing queues. Customers leave and never return.",
    solution:
      "Batch tracking at billing and automated expiry alerts before you lose money.",
    stats: [
      { label: "Stockout Reduction", value: "18%" },
      { label: "Checkout Speed", value: "2x" },
    ],
    steps: [
      {
        title: "Fast POS Billing",
        desc: "Scan barcode. System auto-picks the oldest batch (FEFO).",
        icon: Receipt,
      },
      {
        title: "Dynamic UPI QR",
        desc: "Customer pays via any app. Payment auto-reconciled.",
        icon: Smartphone,
      },
      {
        title: "Smart Inventory Alerts",
        desc: "Get notified 30 days before batch expiry or when stock hits low levels.",
        icon: AlertTriangle,
      },
    ],
    mockUI: {
      type: "alert",
      title: "Inventory Alert ⚠️",
      msg: "Batch #B204 (Paracetamol) expires in 15 days. 50 units remaining. Run a clearance sale?",
    },
  },
  {
    id: "mfg",
    label: "Manufacturing",
    subLabel: "B2B & Industrial",
    icon: Factory,
    refId: "47",
    color: "text-purple-600",
    gradient: "from-purple-600 to-indigo-600",
    bg: "bg-purple-50",
    border: "border-purple-100",
    pain: "Lost inquiries in WhatsApp chats. Delay in generating POs. No dispatch tracking.",
    solution:
      "Convert WhatsApp chats into official Quotes and Invoices in one click.",
    stats: [
      { label: "Order Processing", value: "2x Faster" },
      { label: "Lost Leads", value: "0%" },
    ],
    steps: [
      {
        title: "Inquiry to Quote",
        desc: "Convert a WhatsApp text inquiry into a PDF Quote instantly.",
        icon: MessageSquare,
      },
      {
        title: "PO Generation",
        desc: "Client approves on WhatsApp. System generates Purchase Order.",
        icon: FileText,
      },
      {
        title: "Dispatch & Tracking",
        desc: "Generate e-Way bill and send live tracking link to client.",
        icon: Truck,
      },
    ],
    mockUI: {
      type: "document",
      title: "Quotation Generated",
      msg: "Ref: Q-2024-098 | Status: Sent via WhatsApp | Value: ₹45,000",
    },
  },
];

const SectorWorkflows: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const activeData = sectors[activeTab];

  return (
    <section className="relative py-10 md:py-20 bg-gradient-to-b from-white to-slate-50/50 overflow-hidden font-sans selection:bg-pink-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* --- SECTION HEADER --- */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-4">
          {/* Left: Heading and Subheading */}
          <div className="lg:flex-1">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-2">
              Tailored{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600">
                Workflows
              </span>{" "}
              for Every Industry
            </h2>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-xl">
              Streamlined processes designed specifically for your sector.
              Transform complex operations into simple, connected workflows.
            </p>
          </div>

          {/* Right: Custom Tabs Navigation */}
          <div className="flex justify-end">
            <div className="flex bg-slate-100 p-1 rounded-xl overflow-x-auto">
              {sectors.map((sector, idx) => (
                <button
                  key={sector.id}
                  onClick={() => setActiveTab(idx)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all whitespace-nowrap ${
                    activeTab === idx
                      ? "bg-white text-slate-900 shadow-sm ring-1 ring-slate-200"
                      : "text-slate-500 hover:text-slate-700 hover:bg-slate-200/50"
                  }`}
                >
                  <sector.icon
                    size={16}
                    className={activeTab === idx ? sector.color : ""}
                  />
                  {sector.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* --- MAIN CONTENT CARD --- */}
        <div className="bg-white rounded-2xl border border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col lg:flex-row">
          {/* === LEFT COLUMN: THE NARRATIVE (40%) === */}
          <div className="lg:w-2/5 p-6 md:p-8 border-b lg:border-b-0 lg:border-r border-slate-200/50 bg-gradient-to-br from-slate-50 to-white flex flex-col">
            {/* Header */}
            <div className="flex items-start justify-between mb-5">
              <div>
                <div
                  className={`text-xs font-bold uppercase tracking-wider mb-2 ${activeData.color}`}
                >
                  {activeData.subLabel}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                  {activeData.label}
                </h3>
              </div>
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${activeData.bg} shadow-sm border border-slate-200 ${activeData.color}`}
              >
                <activeData.icon size={22} />
              </div>
            </div>

            {/* Pain Point Block */}
            <div className="mb-5 bg-red-50/60 border border-red-200/50 rounded-lg p-4">
              <div className="flex items-center gap-2 text-red-600 font-bold text-sm mb-2">
                <XCircle size={16} />
                The Problem
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                {activeData.pain}
              </p>
            </div>

            {/* Solution Block */}
            <div className="mb-5">
              <div className="flex items-center gap-2 text-green-600 font-bold text-sm mb-2">
                <CheckCircle2 size={16} />
                The Solution
              </div>
              <p className="text-slate-800 text-base font-semibold leading-relaxed">
                {activeData.solution}
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 mt-auto">
              {activeData.stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-white p-4 rounded-lg border border-slate-200/50 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div
                    className={`text-xl font-extrabold bg-gradient-to-r ${activeData.gradient} text-transparent bg-clip-text`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500 font-semibold uppercase tracking-wide mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* === RIGHT COLUMN: THE VISUAL WORKFLOW (60%) === */}
          <div className="lg:w-3/5 p-6 md:p-8 relative overflow-hidden bg-white">
            {/* Dynamic Background Blob */}
            <div
              className={`absolute top-0 right-0 w-[350px] h-[350px] bg-gradient-to-br ${activeData.gradient} opacity-5 rounded-bl-full pointer-events-none`}
            ></div>

            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-6 flex items-center gap-2">
              <Clock size={16} />
              Process Timeline
            </h4>

            {/* Workflow Steps Line */}
            <div className="relative pl-8 border-l-2 border-slate-200/50 space-y-8">
              {activeData.steps.map((step, i) => (
                <div
                  key={i}
                  className="relative group animate-[fade-in-up_0.5s_ease-out_forwards]"
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                  {/* Timeline Dot */}
                  <div
                    className={`absolute -left-[41px] top-0 w-5 h-5 rounded-full border-4 border-white shadow-md ${activeData.bg} flex items-center justify-center`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${activeData.gradient}`}
                    ></div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 bg-gradient-to-br ${activeData.bg} shadow-sm border border-slate-200/50 ${activeData.color}`}
                    >
                      <step.icon size={20} />
                    </div>
                    <div>
                      <h5 className="text-base font-bold text-slate-900">
                        {step.title}
                      </h5>
                      <p className="text-slate-600 text-sm mt-1 leading-relaxed max-w-sm">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* --- FLOATING MOCK UI ELEMENT (The "Eye-Catching" Part) --- */}
            <div className="absolute bottom-6 right-6 md:right-8 w-72 animate-[float-slow_4s_ease-in-out_infinite]">
              {/* Mock WhatsApp Bubble */}
              {activeData.mockUI.type === "whatsapp" && (
                <div className="bg-[#DCF8C6] p-4 rounded-t-2xl rounded-bl-2xl shadow-lg border border-slate-100">
                  <div className="flex items-center gap-2 mb-2 border-b border-black/5 pb-2">
                    <MessageSquare size={14} className="text-[#128C7E]" />
                    <span className="text-[10px] font-bold text-[#128C7E] uppercase">
                      WhatsApp Business
                    </span>
                  </div>
                  <p className="text-sm text-slate-800 leading-snug">
                    {activeData.mockUI.msg}
                  </p>
                  <div className="mt-2 text-[10px] text-slate-400 text-right">
                    Just now
                  </div>
                </div>
              )}

              {/* Mock Alert Toast */}
              {activeData.mockUI.type === "alert" && (
                <div className="bg-white p-4 rounded-xl shadow-xl border-l-4 border-red-500 ring-1 ring-slate-100">
                  <div className="flex items-center gap-2 mb-1">
                    <AlertTriangle size={16} className="text-red-500" />
                    <span className="text-xs font-bold text-red-600 uppercase">
                      Critical Alert
                    </span>
                  </div>
                  <p className="text-xs font-medium text-slate-700">
                    {activeData.mockUI.msg}
                  </p>
                  <div className="mt-3 flex gap-2">
                    <button className="text-[10px] bg-red-50 text-red-600 px-2 py-1 rounded font-bold">
                      Action
                    </button>
                    <button className="text-[10px] text-slate-400 px-2 py-1">
                      Dismiss
                    </button>
                  </div>
                </div>
              )}

              {/* Mock Document Toast */}
              {activeData.mockUI.type === "document" && (
                <div className="bg-white p-4 rounded-xl shadow-xl border border-slate-100 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-50 rounded flex items-center justify-center text-blue-500">
                      <FileText size={16} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">
                        PDF Quote #2024
                      </div>
                      <div className="text-[10px] text-slate-500">
                        Sent • 45kb
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-blue-500 w-full h-full animate-[draw-arrow_1s_ease-out]"></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectorWorkflows;
