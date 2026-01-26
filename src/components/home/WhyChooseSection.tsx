"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

/**
 * WHY CHOOSE SECTION
 * Ultra-professional design with premium aesthetics
 */

const FEATURES = [
  {
    title: "Built for Real Indian Businesses",
    description:
      "Our solutions are designed for how Indian MSMEs actually operate — practical, flexible, and easy to use for owners and teams",
    image:
      "https://framerusercontent.com/images/LVMA7AZdDIWbpgkg7kPwyMzg1FI.svg?width=620&height=613",
  },
  {
    title: "Customized, Not One-Size-Fits-All",
    description:
      "Every business works differently. We design your CRM, automation, and systems based on your real workflows and goals",
    image:
      "https://framerusercontent.com/images/AgYtnlgsnBt8sfLz1Zkske9Oc.webp?scale-down-to=2048&width=1950&height=2115",
  },
  {
    title: "Simple for Your Team to Use",
    description:
      "No complex training or technical skills needed. Your team can start using the system confidently from day one.",
    image:
      "https://framerusercontent.com/images/O7qEnoTEP17UF9iX2oq5fsDkRDg.svg?width=620&height=632",
  },
  {
    title: "Long-Term Support & Growth Partnership",
    description:
      "From setup to upgrades and scaling, we stay with you as your technology partner — not just a vendor",
    image:
      "https://framerusercontent.com/images/8lj5OZWG1Fv2VEJmdzmtvkbxbhk.svg?width=620&height=620",
  },
];

export function WhyChooseSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-cycle every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % FEATURES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full bg-white py-12 overflow-hidden font-sans">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0)',
        backgroundSize: '32px 32px'
      }} />

      <div className="relative w-full max-w-[1440px] mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* --- HEADER (Restored) --- */}
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-sans text-[#0A0A0A] tracking-tight mb-4">
              Why Businesses Choose Microkraft AI
            </h2>
            <p className="text-base md:text-[17px] text-[#525252] font-sans leading-relaxed">
              We don’t just deliver software. We understand your business, build the right systems for you, and support your growth at every step.
            </p>
          </div>

          {/* --- THE MAIN CAPSULE CARD --- */}
          <div className="relative bg-[#F9FAFB] rounded-[40px] md:rounded-[56px] overflow-hidden border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] flex flex-col lg:flex-row items-stretch">
              
              {/* LEFT: VISUAL (Takes full height) */}
              <div className="relative w-full lg:w-[48%] min-h-[400px] lg:min-h-[420px] overflow-hidden bg-gradient-to-br from-[#8B5CF6] via-[#D946EF] to-[#FB923C]/50 lg:rounded-l-[inherit]">
                {/* Decorative Side Glow */}
                <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-b from-white/10 to-transparent z-0" />
                
                {/* The "Shifted" White Window Card */}
                <div className="absolute top-6 left-6 right-[-2px] bottom-[-2px] bg-white rounded-tl-[24px] shadow-[-10px_10px_40px_rgba(0,0,0,0.1)] border-t border-l border-white/20 overflow-hidden flex flex-col">
                  {/* Decorative UI Header inside the card */}
                  <div className="h-12 border-b border-gray-100 flex items-center px-4 gap-4 flex-shrink-0">
                    <span className="text-gray-400 font-light text-xl">+</span>
                    <div className="flex gap-2 ml-4">
                      <div className="h-4 w-16 bg-gray-50 rounded-full border border-gray-100" />
                      <div className="h-4 w-16 bg-gray-50 rounded-full border border-gray-100" />
                      <div className="h-4 w-16 bg-gray-50 rounded-full border border-gray-100" />
                    </div>
                  </div>

                  {/* Main Image Content */}
                  <div className="flex-1 relative p-6 flex items-center justify-center bg-white">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, scale: 0.98, y: 5 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 1.02, y: -5 }}
                        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                        className="w-full h-full flex items-center justify-center"
                      >
                        <img
                          src={FEATURES[activeIndex].image}
                          alt={FEATURES[activeIndex].title}
                          className="w-full h-full object-contain"
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* RIGHT: FEATURES LIST */}
              <div className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-14 py-10 md:py-16">
                <div className="space-y-1">
                  {FEATURES.map((feature, idx) => {
                    const isActive = idx === activeIndex;
                    return (
                      <div
                        key={idx}
                        onClick={() => setActiveIndex(idx)}
                        className="relative cursor-pointer py-2 group"
                      >
                        <div
                          className={`flex items-start gap-4 transition-all duration-300 ${
                            isActive ? "opacity-100" : "opacity-30 hover:opacity-50"
                          }`}
                        >
                          {/* Checkmark */}
                          <div className="mt-1 flex-shrink-0">
                            <div className={`w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300 ${
                              isActive 
                                ? "bg-[#7C3AED] shadow-[0_0_12px_rgba(124,58,237,0.4)]" 
                                : "bg-gray-200"
                            }`}>
                              <Check
                                className={`w-3 h-3 stroke-[3.5px] transition-colors ${
                                  isActive ? "text-white" : "text-gray-400"
                                }`}
                              />
                            </div>
                          </div>

                          {/* Content */}
                          <div className="flex-1 border-b border-gray-100 pb-3 last:border-0 group-last:pb-0">
                            <h3
                              className={`text-[19px] font-bold font-sans mb-2 tracking-tight transition-colors ${
                                isActive ? "text-[#0A0A0A]" : "text-[#737373]"
                              }`}
                            >
                              {feature.title}
                            </h3>
                            <p
                              className={`text-[15px] font-sans leading-relaxed transition-colors ${
                                isActive ? "text-[#525252]" : "text-[#A3A3A3]"
                              }`}
                            >
                              {feature.description}
                            </p>

                            {/* Accent Line (Only for active) */}
                            {isActive && (
                              <motion.div
                                layoutId="activeFeatureBar"
                                className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#7C3AED] rounded-full"
                                transition={{ type: "spring", bounce: 0, duration: 0.6 }}
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
