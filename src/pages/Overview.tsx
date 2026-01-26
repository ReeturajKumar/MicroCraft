import React, { useState } from "react";
import { ChevronRight, CheckCircle2, Zap, BarChart3, Shield, Smartphone, Users, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

const Overview = () => {
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
        <section className="relative w-full bg-gradient-to-br from-slate-50 via-white to-purple-50/20 overflow-hidden py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8 max-w-7xl relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
                Complete Business Management
                <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-400 text-transparent bg-clip-text block mt-2">
                  Platform
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto">
                Everything you need to run and grow your business—CRM, automation, inventory, accounting, and more—all in one powerful platform.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/consultation"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
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

        {/* Features Grid */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Everything Your Business Needs
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Powerful tools that work together seamlessly
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                { icon: Users, title: "Customized CRM", desc: "Never miss a lead with intelligent customer management", link: "/platform/customized-crm" },
                { icon: Zap, title: "AI Automation Engine", desc: "Automate workflows and save hours every day", link: "/platform/ai-automation" },
                { icon: BarChart3, title: "POS & Inventory", desc: "Real-time inventory tracking and point-of-sale management", link: "/platform/pos-inventory" },
                { icon: Shield, title: "Accounting & Compliance", desc: "Automated accounting and tax compliance made easy", link: "/platform/accounting-compliance" },
                { icon: BarChart3, title: "Business Dashboards", desc: "Real-time insights and analytics for better decisions", link: "/platform/business-dashboards" },
                { icon: Smartphone, title: "Mobile App", desc: "Manage your business on the go with our mobile app", link: "/platform/mobile-app" },
              ].map((feature, idx) => (
                <Link
                  key={idx}
                  to={feature.link}
                  className="group p-6 bg-slate-50 rounded-xl hover:bg-white hover:shadow-lg transition-all border border-slate-200 hover:border-purple-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-600">{feature.desc}</p>
                  <div className="mt-4 flex items-center text-purple-600 font-semibold group-hover:gap-2 transition-all">
                    Learn more <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Why Choose Microkraft
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "All-in-One Platform", desc: "Everything you need in one place—no more juggling multiple tools" },
                { title: "AI-Powered Automation", desc: "Smart automation that learns and adapts to your business needs" },
                { title: "Enterprise-Grade Security", desc: "Your data is protected with bank-level encryption and compliance" },
              ].map((benefit, idx) => (
                <div key={idx} className="text-center p-6">
                  <CheckCircle2 className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-slate-600">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-slate-900 text-white">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8 max-w-7xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses using Microkraft to streamline operations and drive growth.
            </p>
            <Link
              to="/consultation"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl"
            >
              Schedule a Demo <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </div>
      <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-200/20 rounded-full blur-[120px] mix-blend-multiply" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-200/20 rounded-full blur-[120px] mix-blend-multiply" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(124, 58, 237, 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(124, 58, 237, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
            maskImage: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
            WebkitMaskImage: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
          }}
        />
        <div
          className="absolute h-[300px] w-[300px] rounded-full bg-purple-400/20 blur-[80px] transition-transform duration-75 ease-out"
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

export default Overview;


