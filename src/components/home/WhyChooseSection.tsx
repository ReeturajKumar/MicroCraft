;

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
    <section className="relative w-full bg-white py-14 md:py-16 overflow-hidden font-sans">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0)',
        backgroundSize: '32px 32px'
      }} />

      <div className="relative w-full max-w-8xl mx-auto px-6 lg:px-12 xl:px-16">
        {/* --- HEADER --- */}
        <div className="max-w-3xl mb-12 md:mb-14">
          <h2 className="text-4xl md:text-5xl lg:text-4xl font-bold font-sans text-[#0A0A0A] tracking-tight mb-5 leading-[1.1]">
            Why Businesses Choose Microkraft AI
          </h2>
          <p className="text-lg md:text-xl text-[#525252] font-sans leading-relaxed">
            We don't just deliver software. We understand your business, build the right systems for you, and support your growth at every step.
          </p>
        </div>

        {/* --- THE MAIN CAPSULE CARD --- */}
        <div className="relative bg-gradient-to-br from-[#FAFAFA] to-white rounded-[48px] md:rounded-[64px] overflow-hidden border border-gray-200/60 flex flex-col lg:flex-row items-stretch">
            
            {/* LEFT: VISUAL (Takes full height) */}
            <div className="relative w-full lg:w-[50%] min-h-[380px] lg:min-h-[440px] overflow-hidden bg-gradient-to-br from-[#8B5CF6] via-[#D946EF] to-[#FB923C]/50 lg:rounded-l-[inherit]">
              {/* Decorative Side Glow */}
              <div className="absolute top-0 left-0 w-12 h-full bg-gradient-to-b from-white/10 to-transparent z-0" />
              
              {/* The "Shifted" White Window Card */}
              <div className="absolute top-8 left-8 right-[-2px] bottom-[-2px] bg-white rounded-tl-[32px] shadow-[-12px_12px_48px_rgba(0,0,0,0.12)] border-t border-l border-white/30 overflow-hidden flex flex-col">
                {/* Decorative UI Header inside the card */}
                <div className="h-14 border-b border-gray-100 flex items-center px-6 gap-5 flex-shrink-0">
                  <span className="text-gray-400 font-light text-2xl">+</span>
                  <div className="flex gap-2.5 ml-4">
                    <div className="h-5 w-20 bg-gray-50 rounded-full border border-gray-100" />
                    <div className="h-5 w-20 bg-gray-50 rounded-full border border-gray-100" />
                    <div className="h-5 w-20 bg-gray-50 rounded-full border border-gray-100" />
                  </div>
                </div>

                {/* Main Image Content */}
                <div className="flex-1 relative p-8 flex items-center justify-center bg-white">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIndex}
                      initial={{ opacity: 0, scale: 0.98, y: 8 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 1.02, y: -8 }}
                      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
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
            <div className="flex-1 flex flex-col justify-center px-8 md:px-14 lg:px-16 xl:px-20 py-10 md:py-14">
              <div className="space-y-2">
                {FEATURES.map((feature, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <div
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                      className="relative cursor-pointer py-3 group"
                    >
                      <div
                        className={`flex items-start gap-5 transition-all duration-300 ${
                          isActive ? "opacity-100" : "opacity-35 hover:opacity-60"
                        }`}
                      >
                        {/* Checkmark */}
                        <div className="mt-1.5 flex-shrink-0">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                            isActive 
                              ? "bg-[#7C3AED] shadow-[0_0_16px_rgba(124,58,237,0.5)]" 
                              : "bg-gray-200"
                          }`}>
                            <Check
                              className={`w-3.5 h-3.5 stroke-[3.5px] transition-colors ${
                                isActive ? "text-white" : "text-gray-400"
                              }`}
                            />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 border-b border-gray-100 pb-3.5 last:border-0 group-last:pb-0">
                          <h3
                            className={`text-lg md:text-xl font-bold font-sans mb-2 tracking-tight transition-colors leading-tight ${
                              isActive ? "text-[#0A0A0A]" : "text-[#737373]"
                            }`}
                          >
                            {feature.title}
                          </h3>
                          <p
                            className={`text-base md:text-[17px] font-sans leading-relaxed transition-colors ${
                              isActive ? "text-[#525252]" : "text-[#A3A3A3]"
                            }`}
                          >
                            {feature.description}
                          </p>

                          {/* Accent Line (Only for active) */}
                          {isActive && (
                            <motion.div
                              layoutId="activeFeatureBar"
                              className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#7C3AED] to-[#D946EF] rounded-full"
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
      </section>
    );
  }
