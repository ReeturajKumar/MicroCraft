"use client";

import { useState } from "react";
import { ArrowRight, Shield, Lock, Zap, Users, ChevronLeft, ChevronRight } from "lucide-react";

/**
 * ENTERPRISE SECTION - High-Fidelity Recreation
 * Deep SaaS Dark Mode with glowing horizon effect
 * Glassmorphic cards and testimonial section
 */

const ENTERPRISE_FEATURES = [
  {
    icon: Zap,
    title: "Reliable Performance",
    description:
      "Your systems run smoothly, even as your business grows — with stable uptime and fast response",
  },
  {
    icon: Shield,
    title: "Data Safety & Privacy",
    description:
      "Your customer data and business information stay protected with strong security practices",
  },
  {
    icon: Lock,
    title: "Easy Expansion",
    description:
      "Add users, locations, modules, and integrations as your business grows — without rebuilding systems",
  },
  {
    icon: Users,
    title: "Dedicated Support & Guidance",
    description:
      "Get real human support 24/7 for setup, training, upgrades, and optimization — not just ticket systems",
  },
];

const TESTIMONIALS = [
  {
    name: "Sarah Chen",
    role: "Senior Product Manager",
    company: "DocuSign",
    logo: "/docusign_logo.png",
    quote: "Microkraft.ai helps us enable our customers for success. What started as a need for simple marketing metrics turned into custom product metrics for more than 100 different stakeholders.",
    stats: [
      { value: "+15%", label: "in accounts" },
      { value: "+5%", label: "in upgrades" },
      { value: "+10%", label: "in first-time conversions" },
    ],
    accentColor: "rgba(177,135,255,0.4)"
  },
  {
    name: "James Wilson",
    role: "Head of Operations",
    company: "IBM",
    logo: "/ibm_logo.png",
    quote: "The automation capabilities of Microcraft have completely transformed our branch operations. We've seen a massive reduction in manual data entry and a significant boost in productivity.",
    stats: [
      { value: "40%", label: "Faster Workflows" },
      { value: "25k", label: "Hours Saved" },
      { value: "99%", label: "Accuracy Rate" },
    ],
    accentColor: "rgba(59,130,246,0.4)"
  },
  {
    name: "Michael Rodriguez",
    role: "Director of IT",
    company: "Adobe",
    logo: "/adobe_logo.png",
    quote: "Security and scalability were our top priorities. Microcraft delivered a robust system that handles our complex data structures with ease, while providing localized support.",
    stats: [
      { value: "Zero", label: "Security Breaches" },
      { value: "2x", label: "Faster Scaling" },
      { value: "85%", label: "Adoption Rate" },
    ],
    accentColor: "rgba(239,68,68,0.4)"
  }
];

export function EnterpriseSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="w-full py-10 lg:py-14 flex justify-center px-4 font-sans">
      <div className="w-full max-w-[1440px]">
        {/* Main Card with Deep Purple Gradient */}
        <div 
          className="relative rounded-[32px] overflow-hidden p-6 lg:p-10 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5),inset_0_2px_0_rgba(255,255,255,0.2),inset_0_0_60px_rgba(0,0,0,0.4)]"
          style={{ background: "linear-gradient(135deg, #150040, #301974, #775076, #6B4EBB, #F5CFD4)" }}
        >
          {/* Ambient Glow Effects */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(167,139,250,0.25),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.15),transparent_50%)]"></div>
          
          {/* Content Container */}
          <div className="relative z-10">
            {/* Header */}
            <div className="relative z-20 text-center mb-8">
              <h2 className="text-[32px] lg:text-[42px] font-bold font-sans text-white leading-[1.1] mb-3 tracking-tight">
                Systems You Can Trust Every Day
              </h2>
              <p className="text-white/80 text-[14px] lg:text-[15px] font-sans max-w-[600px] mx-auto mb-6 leading-relaxed">
                We take care of system stability, data safety, and ongoing support — so you can 
                focus fully on running and growing your business
              </p>
              <button className="group inline-flex items-center gap-2 bg-white text-[#5B21B6] px-5 py-2.5 rounded-full text-[14px] font-bold font-sans hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                Explore Microkraft for Enterprises
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Glassmorphic Feature Cards Grid */}
            <div className="relative z-20 grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {ENTERPRISE_FEATURES.map((feature, idx) => (
                <div
                  key={idx}
                  className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-[20px] p-5 lg:p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center mb-3 group-hover:bg-white/25 transition-colors">
                    <feature.icon className="w-4 h-4 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-white font-bold font-sans text-[14px] lg:text-[15px] mb-1.5 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-white/70 text-[12px] lg:text-[13px] font-sans leading-[1.4]">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Glowing Horizon Line */}
            <div className="relative z-10 w-full h-[40px] mb-8 flex items-center justify-center">
              <div className="relative w-full h-[2px]" style={{ transform: 'rotateX(30deg)' }}>
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center px-4">
                  <img 
                    src="/horizon_line.png" 
                    alt="Horizon Line" 
                    className="w-full max-w-[1600px] h-auto object-contain opacity-85 mix-blend-screen select-none pointer-events-none"
                    style={{ 
                      filter: 'contrast(1.1) brightness(1.1) drop-shadow(0 -5px 15px rgba(246, 207, 210, 0.3))',
                      maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent), linear-gradient(to bottom, transparent, black 40%)',
                      maskComposite: 'intersect',
                      WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent), linear-gradient(to bottom, transparent, black 40%)',
                      WebkitMaskComposite: 'source-in'
                    }}
                  />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[50px] bg-[#F6CFD2] blur-[50px] opacity-15 rounded-full mix-blend-screen pointer-events-none"></div>
              </div>
            </div>

            {/* Testimonial Section */}
            <div className="relative z-20 bg-gradient-to-b from-[#452c7a] to-[#12072e] rounded-[28px] p-6 lg:p-10 overflow-hidden">
              <div className="relative z-10 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
                {/* Left: Company Logo Stage */}
                <div className="flex flex-col items-center justify-center relative min-h-[300px] lg:min-h-[340px]">
                  {/* BOLD GRADIENT STAGE - Dominant Purple with Pink Accent */}
                  <div 
                    className="absolute w-[420px] h-[420px] opacity-80 blur-[70px] rounded-full transition-all duration-1000"
                    style={{ background: `linear-gradient(135deg, #6d28d9 0%, #7c3aed 50%, #db2777 85%, ${current.accentColor} 100%)` }}
                  ></div>
                  <div 
                    className="absolute w-[320px] h-[320px] opacity-40 blur-[40px] rounded-full transition-all duration-1000"
                    style={{ background: `linear-gradient(-45deg, rgba(255,255,255,0.4), transparent)` }}
                  ></div>
                  
                  {/* Large Monochrome Company Logo */}
                  <div className="relative z-10 w-[240px] h-[140px] flex items-center justify-center group cursor-pointer transition-all duration-500 hover:scale-105">
                    <img 
                      key={current.logo}
                      src={current.logo} 
                      alt={current.company} 
                      className="max-w-full max-h-full object-contain group-hover:opacity-100 transition-all duration-700 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                    />
                  </div>

                </div>

                {/* Right: Quote and Stats */}
                <div className="lg:border-l lg:border-white/10 lg:pl-16">
                  {/* Navigation Arrows */}
                  <div className="flex gap-3 mb-6">
                    <button 
                      onClick={prevTestimonial}
                      className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all border border-white/10 hover:border-white/20 active:scale-95 group"
                    >
                      <ChevronLeft className="w-5 h-5 text-white/40 group-hover:text-white/80 transition-colors" />
                    </button>
                    <button 
                      onClick={nextTestimonial}
                      className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all border border-white/10 hover:border-white/20 active:scale-95 group"
                    >
                      <ChevronRight className="w-5 h-5 text-white/40 group-hover:text-white/80 transition-colors" />
                    </button>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-white text-[17px] lg:text-[21px] font-medium font-sans leading-[1.5] mb-6 min-h-[120px] transition-all duration-500">
                    "{current.quote}"
                  </blockquote>

                  {/* Author Line */}
                  <div className="mb-8 transition-all duration-500 flex items-center gap-2">
                    <span className="text-white font-bold font-sans text-[15px] lg:text-[17px]">{current.name}</span>
                    <span className="text-white/30">•</span>
                    <span className="text-white/50 text-[12px] lg:text-[14px] font-medium">{current.role}</span>
                  </div>

                  {/* Stats Grid */}
                  <div className="flex flex-wrap gap-x-10 gap-y-4 mb-8">
                    {current.stats.map((stat, idx) => (
                      <div key={idx} className="transition-all duration-500 transform">
                        <div className="text-cyan-400 text-[28px] lg:text-[36px] font-extrabold font-sans leading-none mb-1">
                          {stat.value}
                        </div>
                        <div className="text-white/50 text-[11px] lg:text-[12px] font-bold uppercase tracking-wider">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className="group inline-flex items-center gap-2 bg-white text-[#0a0118] px-7 py-3 rounded-full text-[14px] font-bold hover:bg-gray-100 transition-all hover:-translate-y-1 shadow-2xl">
                    Read Case Study
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1.5" />
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
