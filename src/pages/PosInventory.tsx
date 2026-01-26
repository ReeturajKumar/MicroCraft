import React, { useState } from "react";
import { ChevronRight, CheckCircle2, Package, ShoppingCart, TrendingUp, BarChart3, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const PosInventory = () => {
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
        <section className="relative w-full bg-gradient-to-br from-slate-50 via-white to-blue-50/20 overflow-hidden py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8 max-w-7xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
                  POS & Inventory
                  <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-400 text-transparent bg-clip-text block mt-2">
                    Management
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
                  Real-time inventory tracking, seamless point-of-sale operations, and automated stock management—all in one powerful system.
                </p>
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <Link
                    to="/consultation"
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
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
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8 shadow-xl">
                  <Package className="w-32 h-32 text-blue-600 mx-auto" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Complete Inventory Control
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Everything you need to manage stock, sales, and suppliers
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                { icon: ShoppingCart, title: "Point of Sale", desc: "Fast, intuitive POS system for seamless transactions" },
                { icon: Package, title: "Real-Time Inventory", desc: "Track stock levels across all locations instantly" },
                { icon: TrendingUp, title: "Sales Analytics", desc: "Understand what sells and optimize your inventory" },
                { icon: BarChart3, title: "Stock Alerts", desc: "Automated alerts for low stock and reorder points" },
                { icon: Zap, title: "Multi-Location", desc: "Manage inventory across multiple stores and warehouses" },
                { icon: Shield, title: "Secure Transactions", desc: "Bank-level security for all your sales data" },
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-slate-50 rounded-xl hover:bg-white hover:shadow-lg transition-all border border-slate-200 hover:border-blue-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4">
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
        <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Why Businesses Love Our POS System
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Reduce Stockouts", desc: "Never run out of popular items with smart inventory management" },
                { title: "Increase Sales", desc: "Faster checkout and better product visibility drive more revenue" },
                { title: "Save Time", desc: "Automated processes free up hours for customer service" },
              ].map((benefit, idx) => (
                <div key={idx} className="text-center p-6">
                  <CheckCircle2 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-slate-600">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-200/20 rounded-full blur-[120px] mix-blend-multiply" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-200/20 rounded-full blur-[120px] mix-blend-multiply" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(59, 130, 246, 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(59, 130, 246, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
            maskImage: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
            WebkitMaskImage: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
          }}
        />
        <div
          className="absolute h-[300px] w-[300px] rounded-full bg-blue-400/20 blur-[80px] transition-transform duration-75 ease-out"
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

export default PosInventory;


