"use client";

import { ArrowRight, Shield, Lock, Zap, Users, ChevronLeft, ChevronRight } from "lucide-react";

/**
 * ENTERPRISE SECTION - High-Fidelity Recreation
 * Deep SaaS Dark Mode with glowing horizon effect
 * Glassmorphic cards and testimonial section
 */

const ENTERPRISE_FEATURES = [
  {
    icon: Zap,
    title: "Performance that scales",
    description:
      "Built to handle billions of events per month.",
  },
  {
    icon: Shield,
    title: "An open ecosystem",
    description:
      "Connect to your existing stack with flexibility and no vendor lock-in.",
  },
  {
    icon: Lock,
    title: "Secure by default",
    description:
      "SOC 2 Type II certified, GDPR-ready, and audit-ready.",
  },
  {
    icon: Users,
    title: "Governance made easy",
    description:
      "Control access, manage spaces, and keep teams aligned with trusted data.",
  },
];

const STATS = [
  { value: "+15%", label: "in accounts" },
  { value: "+5%", label: "in upgrades" },
  { value: "+10%", label: "in first-time conversions" },
];

export function EnterpriseSection() {
  return (
    <section className="w-full py-16 lg:py-24 flex justify-center px-4">
      <div className="w-full max-w-[1200px]">
        {/* Main Card with Deep Purple Gradient */}
        <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-b from-[#6B46C1] via-[#5B21B6] to-[#4C1D95] p-8 lg:p-16">
          {/* Ambient Glow Effects */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(167,139,250,0.25),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.15),transparent_50%)]"></div>
          
          {/* Content Container */}
          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-10">
              <h2 className="text-[36px] lg:text-[44px] font-bold text-white leading-[1.1] mb-4 tracking-tight">
                Enterprise-ready.
                <br />
                Without the complexity.
              </h2>
              <p className="text-white/80 text-[15px] lg:text-[17px] font-medium max-w-[580px] mx-auto mb-8 leading-relaxed">
                Mixpanel supports the performance, flexibility, and governance
                modern teams need — with none of the legacy bloat.
              </p>
              <button className="group inline-flex items-center gap-2 bg-white text-[#5B21B6] px-6 py-3 rounded-full text-[14px] font-bold hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                Explore Mixpanel for Enterprises
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Glassmorphic Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {ENTERPRISE_FEATURES.map((feature, idx) => (
                <div
                  key={idx}
                  className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-[18px] p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center mb-4 group-hover:bg-white/25 transition-colors">
                    <feature.icon className="w-5 h-5 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-white font-bold text-[15px] mb-2 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-white/70 text-[13px] leading-[1.5]">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Glowing Horizon Line - Crisp 3D Effect */}
            <div className="relative w-full h-[60px] mb-12 flex items-center justify-center">
              {/* Main Line Container with subtle 3D Transform */}
              <div className="relative w-full h-[3px]" style={{ transform: 'rotateX(35deg)' }}>
                {/* Core bright line - Sharp and clear */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"></div>
                
                {/* Tight inner glow for definition */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-100 to-transparent blur-[1px]"></div>
                
                {/* Controlled outer glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-300 to-transparent blur-[6px] opacity-70"></div>
                
                {/* Top shadow - Creates depth above */}
                <div 
                  className="absolute inset-0 -top-6 bg-gradient-to-b from-purple-600/40 via-purple-500/20 to-transparent"
                  style={{ 
                    height: '24px',
                    filter: 'blur(8px)'
                  }}
                ></div>
                
                {/* Bottom shadow - Strong 3D ground shadow */}
                <div 
                  className="absolute inset-0 top-1 bg-gradient-to-b from-purple-500/50 via-purple-600/30 to-transparent"
                  style={{ 
                    height: '30px',
                    filter: 'blur(10px)'
                  }}
                ></div>
                
                {/* Sharp highlight on top edge */}
                <div className="absolute inset-0 -top-[1px] bg-gradient-to-r from-transparent via-white/60 to-transparent h-[1px]"></div>
              </div>
            </div>

            {/* Testimonial Section - Deeper Dark Gradient */}
            <div className="relative bg-gradient-to-b from-[#16082b] to-[#0a0118] rounded-[24px] p-8 lg:p-12 border border-white/5 overflow-hidden">
              {/* Enhanced Radial Glow Behind Logo */}
              <div className="absolute top-1/2 left-[15%] lg:left-[20%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/25 rounded-full blur-[120px] pointer-events-none"></div>
              
              <div className="relative z-10 grid lg:grid-cols-[1fr,1.5fr] gap-8 lg:gap-16 items-center">
                {/* Left: DocuSign Logo */}
                <div className="flex items-center justify-center lg:justify-start">
                  <div className="text-white">
                    <svg
                      className="h-10 lg:h-12 w-auto"
                      viewBox="0 0 200 50"
                      fill="currentColor"
                    >
                      <text
                        x="10"
                        y="35"
                        fontSize="26"
                        fontWeight="600"
                        fontFamily="system-ui, -apple-system, sans-serif"
                        letterSpacing="-0.5"
                      >
                        docusign
                      </text>
                    </svg>
                  </div>
                </div>

                {/* Right: Quote and Stats */}
                <div>
                  {/* Navigation Arrows */}
                  <div className="flex gap-2 mb-6">
                    <button className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors border border-white/10">
                      <ChevronLeft className="w-4 h-4 text-white/60" />
                    </button>
                    <button className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors border border-white/10">
                      <ChevronRight className="w-4 h-4 text-white/60" />
                    </button>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-white text-[17px] lg:text-[19px] font-medium leading-[1.5] mb-4">
                    "Mixpanel helps us enable our customers for success. What
                    started as a need for simple marketing metrics turned into
                    custom product metrics for more than 100 different
                    stakeholders across the company."
                  </blockquote>

                  {/* Author */}
                  <div className="text-white/70 text-[13px] font-medium mb-8">
                    Drew Ashlock <span className="text-white/50">• Senior Product Manager</span>
                  </div>

                  {/* Stats with Cyan Color */}
                  <div className="flex flex-wrap gap-x-10 gap-y-6 mb-8">
                    {STATS.map((stat, idx) => (
                      <div key={idx}>
                        <div className="text-cyan-400 text-[32px] lg:text-[40px] font-bold leading-none mb-1">
                          {stat.value}
                        </div>
                        <div className="text-white/60 text-[12px] font-medium">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className="group inline-flex items-center gap-2 bg-white text-[#0a0118] px-6 py-3 rounded-full text-[14px] font-bold hover:bg-gray-100 transition-all hover:-translate-y-0.5 shadow-lg">
                    Read Case Study
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
