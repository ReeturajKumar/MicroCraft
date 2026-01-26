import React, { useState } from "react";
import { ChevronRight, CheckCircle2, Shield, Lock, Eye, FileCheck, Server, Key } from "lucide-react";
import { Link } from "react-router-dom";

const SecurityDataProtection = () => {
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
        <section className="relative w-full bg-gradient-to-br from-slate-50 via-white to-red-50/20 overflow-hidden py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8 max-w-7xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
                  Security &
                  <span className="bg-gradient-to-r from-red-500 via-rose-500 to-pink-400 text-transparent bg-clip-text block mt-2">
                    Data Protection
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
                  Enterprise-grade security with bank-level encryption, compliance certifications, and comprehensive data protection.
                </p>
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <Link
                    to="/consultation"
                    className="bg-gradient-to-r from-red-600 to-rose-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-red-700 hover:to-rose-700 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
                  >
                    Learn More <ChevronRight className="w-5 h-5" />
                  </Link>
                  <Link
                    to="/consultation"
                    className="px-8 py-3 rounded-lg font-medium text-slate-700 hover:text-slate-900 border border-slate-200 hover:border-slate-300 transition-all"
                  >
                    Security Whitepaper
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-red-100 to-rose-100 rounded-2xl p-8 shadow-xl">
                  <Shield className="w-32 h-32 text-red-600 mx-auto" />
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
                Enterprise-Grade Security
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Your data is protected with industry-leading security measures
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                { icon: Lock, title: "End-to-End Encryption", desc: "All data encrypted in transit and at rest" },
                { icon: Shield, title: "SOC 2 Compliant", desc: "Certified security standards and practices" },
                { icon: Key, title: "Access Controls", desc: "Role-based permissions and multi-factor authentication" },
                { icon: Server, title: "Secure Infrastructure", desc: "Hosted on secure, compliant cloud infrastructure" },
                { icon: FileCheck, title: "Regular Audits", desc: "Continuous security monitoring and assessments" },
                { icon: Eye, title: "Data Privacy", desc: "GDPR and data privacy compliance built-in" },
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-slate-50 rounded-xl hover:bg-white hover:shadow-lg transition-all border border-slate-200 hover:border-red-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-rose-500 rounded-lg flex items-center justify-center mb-4">
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
        <section className="py-16 md:py-24 bg-gradient-to-br from-red-50 to-rose-50">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Your Data, Protected
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Bank-Level Security", desc: "Same security standards used by financial institutions" },
                { title: "Compliance Ready", desc: "Meet regulatory requirements with built-in compliance" },
                { title: "Peace of Mind", desc: "Focus on your business, we handle security" },
              ].map((benefit, idx) => (
                <div key={idx} className="text-center p-6">
                  <CheckCircle2 className="w-12 h-12 text-red-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-slate-600">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-200/20 rounded-full blur-[120px] mix-blend-multiply" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-rose-200/20 rounded-full blur-[120px] mix-blend-multiply" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(239, 68, 68, 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(239, 68, 68, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
            maskImage: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
            WebkitMaskImage: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
          }}
        />
        <div
          className="absolute h-[300px] w-[300px] rounded-full bg-red-400/20 blur-[80px] transition-transform duration-75 ease-out"
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

export default SecurityDataProtection;


