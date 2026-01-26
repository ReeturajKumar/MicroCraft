import React, { useState } from "react";
import { ChevronRight, CheckCircle2, Building2, Shield, Zap, Users, BarChart3, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Enterprises = () => {
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
        <section className="relative w-full bg-gradient-to-br from-slate-50 via-white to-slate-900/5 overflow-hidden py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8 max-w-7xl relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
                Enterprise-Grade
                <span className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 text-transparent bg-clip-text block mt-2">
                  Solutions
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
                Scalable, secure, and powerful. Enterprise features including advanced security, custom integrations, dedicated support, and unlimited scalability.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/consultation"
                  className="bg-gradient-to-r from-slate-800 to-slate-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-slate-900 hover:to-slate-800 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
                >
                  Contact Sales <ChevronRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/consultation"
                  className="px-8 py-3 rounded-lg font-medium text-slate-700 hover:text-slate-900 border border-slate-200 hover:border-slate-300 transition-all"
                >
                  Schedule Demo
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
                Enterprise Features
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Built for large organizations with complex needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                { icon: Shield, title: "Advanced Security", desc: "SOC 2, GDPR, and enterprise security standards" },
                { icon: Building2, title: "Unlimited Scale", desc: "Support for thousands of users and locations" },
                { icon: Globe, title: "Custom Integrations", desc: "API access and custom integrations" },
                { icon: Users, title: "Dedicated Support", desc: "24/7 priority support with dedicated account manager" },
                { icon: Zap, title: "Advanced Automation", desc: "Complex workflow automation and AI capabilities" },
                { icon: BarChart3, title: "Enterprise Analytics", desc: "Advanced BI, custom reports, and data exports" },
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-slate-50 rounded-xl hover:bg-white hover:shadow-lg transition-all border border-slate-200 hover:border-slate-400"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-600 rounded-lg flex items-center justify-center mb-4">
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
        <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-slate-100">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Built for Enterprise
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Enterprise Security", desc: "Bank-level security and compliance certifications" },
                { title: "Unlimited Scale", desc: "Grow without limits, from hundreds to millions of users" },
                { title: "Dedicated Support", desc: "White-glove service with dedicated account management" },
              ].map((benefit, idx) => (
                <div key={idx} className="text-center p-6">
                  <CheckCircle2 className="w-12 h-12 text-slate-700 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-slate-600">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-slate-200/20 rounded-full blur-[120px] mix-blend-multiply" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-300/20 rounded-full blur-[120px] mix-blend-multiply" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(51, 65, 85, 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(51, 65, 85, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
            maskImage: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
            WebkitMaskImage: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
          }}
        />
        <div
          className="absolute h-[300px] w-[300px] rounded-full bg-slate-400/20 blur-[80px] transition-transform duration-75 ease-out"
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

export default Enterprises;


