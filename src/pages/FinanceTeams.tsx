import React, { useState } from "react";
import { ChevronRight, CheckCircle2, Calculator, FileText, TrendingUp, Shield, BarChart3, Receipt } from "lucide-react";
import { Link } from "react-router-dom";

const FinanceTeams = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-screen bg-slate-50 overflow-hidden"
    >
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative w-full bg-gradient-to-br from-slate-50 via-white to-emerald-50/20 overflow-hidden py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8 max-w-7xl relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
                Built for
                <span className="bg-gradient-to-r from-emerald-500 via-green-500 to-teal-400 text-transparent bg-clip-text block mt-2">
                  Finance Teams
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
                Complete financial management for finance teams. Accounting, reporting, compliance, and analytics—all in one platform.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/consultation"
                  className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-emerald-700 hover:to-green-700 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
                >
                  Get Started <ChevronRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/consultation"
                  className="px-8 py-3 rounded-lg font-medium text-slate-700 hover:text-slate-900 border border-slate-200 hover:border-slate-300 transition-all"
                >
                  Watch Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Finance-Focused Features
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Tools designed for finance professionals
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                { icon: Calculator, title: "Automated Accounting", desc: "Transactions recorded automatically from all sources" },
                { icon: FileText, title: "Financial Reports", desc: "P&L, balance sheets, cash flow, and custom reports" },
                { icon: Receipt, title: "Invoice Management", desc: "Create, send, and track invoices and payments" },
                { icon: Shield, title: "Compliance", desc: "Tax calculations and compliance reporting" },
                { icon: TrendingUp, title: "Budget & Forecasting", desc: "Plan and forecast with accurate financial data" },
                { icon: BarChart3, title: "Financial Analytics", desc: "Deep insights into financial performance" },
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-slate-50 rounded-xl hover:bg-white hover:shadow-lg transition-all border border-slate-200 hover:border-emerald-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-500 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-emerald-50 to-green-50">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Streamline Finance Operations
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Save Time", desc: "Automation reduces manual data entry and reconciliation" },
                { title: "Reduce Errors", desc: "Automated calculations eliminate human mistakes" },
                { title: "Better Insights", desc: "Real-time financial data for informed decisions" },
              ].map((benefit, idx) => (
                <div key={idx} className="text-center p-6">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-slate-600">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-200/20 rounded-full blur-[120px] mix-blend-multiply" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-green-200/20 rounded-full blur-[120px] mix-blend-multiply" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(16, 185, 129, 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(16, 185, 129, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
            maskImage: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
            WebkitMaskImage: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
          }}
        />
        <div
          className="absolute h-[300px] w-[300px] rounded-full bg-emerald-400/20 blur-[80px] transition-transform duration-75 ease-out"
          style={{
            left: mousePos.x,
            top: mousePos.y,
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>
    </div>
  );
};

export default FinanceTeams;


