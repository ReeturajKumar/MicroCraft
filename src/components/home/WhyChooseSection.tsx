"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronRight } from "lucide-react";

/**
 * WHY CHOOSE SECTION
 * A professional, high-fidelity reproduction of the "Why teams choose Mixpanel" design.
 */

const FEATURES = [
  {
    title: "Built for speed",
    description:
      "Explore user behavior, conversion trends, and retention patterns in seconds—no data team required.",
    image:
      "https://framerusercontent.com/images/LVMA7AZdDIWbpgkg7kPwyMzg1FI.svg?width=620&height=613",
  },
  {
    title: "Trusted by teams, not just analysts",
    description:
      "From product managers to growth marketers, MicroCraft helps everyone make smarter decisions — not just the data-savvy few.",
    image:
      "https://framerusercontent.com/images/AgYtnlgsnBt8sfLz1Zkske9Oc.webp?scale-down-to=2048&width=1950&height=2115",
  },
  {
    title: "Flexible by design",
    description:
      "Connect your tech stack—from BigQuery to Segment to reverse ETL tools — so your data lives where you need it.",
    image:
      "https://framerusercontent.com/images/O7qEnoTEP17UF9iX2oq5fsDkRDg.svg?width=620&height=632",
  },
  {
    title: "Built to evolve",
    description:
      "Whether you're scaling fast or maturing your analytics practice, MicroCraft grows with your needs.",
    image:
      "https://framerusercontent.com/images/8lj5OZWG1Fv2VEJmdzmtvkbxbhk.svg?width=620&height=620",
  },
];

export function WhyChooseSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-cycle every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % FEATURES.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-white py-10 lg:py-10 flex justify-center">
      <div className="w-full max-w-7xl px-4 ">
        {/* --- HEADER --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-6 gap-4">
          <h2 className="text-[32px] lg:text-[38px] leading-[1.1] font-medium text-[#1F2023] tracking-tight">
            Why teams choose MicroCraft
          </h2>
          <div className="max-w-[500px] flex flex-col items-start lg:pt-1">
            <p className="text-[15px] leading-[1.6] text-gray-500 font-medium mb-6">
              We're built to give Product, Engineering, Marketing, and Data
              teams the confidence to stop guessing and start growing.
            </p>
            <button className="group flex items-center gap-2 bg-[#1F2023] text-white px-6 py-2.5 rounded-full text-[15px] font-bold hover:bg-gray-800 transition-colors">
              Book a Demo
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* --- MAIN CONTENT GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT: VISUAL (Image Card) */}
          <div className="relative  overflow-hidden  border border-gray-100  ">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                src={FEATURES[activeIndex].image}
                alt={FEATURES[activeIndex].title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full h-[500px]"
              />
            </AnimatePresence>
          </div>

          {/* RIGHT: FEATURES LIST */}
          <div className="flex flex-col justify-center h-[460px]">
            <div className="space-y-4">
              {FEATURES.map((feature, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <div
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className="group relative pl-0 cursor-pointer"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeFeatureBar"
                        className="absolute -bottom-1.5 left-0 w-full h-[2px] bg-[#7C3AED]"
                      />
                    )}

                    <div
                      className={`flex items-start gap-4 ${
                        isActive
                          ? "opacity-100"
                          : "opacity-60 hover:opacity-100 transition-opacity"
                      }`}
                    >
                      <div className="mt-0.5 min-w-[20px]">
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors ${
                            isActive ? "bg-[#F3F0FF]" : "bg-gray-100"
                          }`}
                        >
                          <Check
                            className={`w-3 h-3 stroke-[3px] transition-colors ${
                              isActive ? "text-[#7C3AED]" : "text-gray-400"
                            }`}
                          />
                        </div>
                      </div>
                      <div>
                        <h3
                          className={`text-[16px] font-bold mb-1 transition-colors ${
                            isActive ? "text-[#1F2023]" : "text-gray-600"
                          }`}
                        >
                          {feature.title}
                        </h3>
                        <p className="text-[14px] leading-[1.6] text-gray-600 font-medium mt-1">
                          {feature.description}
                        </p>
                      </div>
                    </div>

                    {/* Subtle separator for non-active items */}
                    {!isActive && (
                      <div className="absolute -bottom-1.5 left-0 w-full h-[1px] bg-gray-100" />
                    )}
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
