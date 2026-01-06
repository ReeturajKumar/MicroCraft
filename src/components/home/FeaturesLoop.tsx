"use client";

import { ChevronRight } from "lucide-react";

/**
 * FEATURES LOOP COMPONENT
 * Full-width sticky scrolling section.
 */

const features = [
  {
    id: "01",
    title: "Acquire new customers",
    description:
      "Find drop-off points, analyze funnels, and improve onboarding experiences.",
    cta: "Acquire New Users",
    image:
      "https://framerusercontent.com/images/8HRozY7yqrIZzy2dCILSxYrqjw.svg?width=406&height=406",
  },
  {
    id: "02",
    title: "Drive engagement",
    description:
      "See how users interacting with your product. Identify friction points and discover the 'aha moments'.",
    cta: "Drive Engagement",
    image:
      "https://framerusercontent.com/images/lDo6V942uu7jbYxBtjw0YvDct8.svg?width=406&height=406",
  },
  {
    id: "03",
    title: "Grow your user base",
    description:
      "Measure product retention and understand why users come back. Build cohorts and run experiments.",
    cta: "Grow Usership",
    image:
      "https://framerusercontent.com/images/C7ncJqoSQ9OXYzI3XkUFZQLvo.svg?width=406&height=406",
  },
  {
    id: "04",
    title: "Empower your teams",
    description:
      "Ensure every team can make data-driven choices from a trusted source of truth.",
    cta: "Empower Your Team",
    image:
      "https://framerusercontent.com/images/vhlqC5gAIa3MQ6AaQ7WLn4i1J8.svg?width=406&height=406",
  },
];

export function FeaturesLoop() {
  return (
    <section className="relative w-full bg-white py-24 font-sans">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* LEFT COLUMN: Sticky Header */}
          <div className="lg:w-[35%] relative">
            <div className="sticky top-40 flex flex-col items-start gap-6">
              <h2 className="text-[36px] lg:text-[40px] leading-[1.15] font-bold text-[#1F2023] tracking-tight">
                Turn insights into <br />
                action — at every stage
              </h2>
              <p className="text-[17px] leading-[1.6] text-[#3F3F46] font-normal max-w-[440px]">
                Mixpanel helps improve product and web experiences by
                understanding user behavior, spotting patterns, and making
                informed decisions.
              </p>
              <button className="mt-2 inline-flex items-center justify-center gap-1.5 text-[15px] font-bold text-white bg-[#1F2023] rounded-full px-6 py-3 hover:bg-[#333] transition-all hover:-translate-y-0.5 shadow-md">
                Book a Demo <ChevronRight className="w-4 h-4 ml-0.5" />
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: Scrolling Cards */}
          <div className="lg:w-[65%] flex flex-col gap-12">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="group relative bg-[#FFFFFF] rounded-[32px] p-2 shadow-[0_2px_40px_-12px_rgba(0,0,0,0.08)] border border-gray-100"
              >
                <div className="flex flex-col lg:flex-row h-full">
                  {/* Text Content */}
                  <div className="flex-1 p-10 lg:p-12 flex flex-col justify-center">
                    <span className="inline-block px-3 py-1 w-fit rounded-lg border border-purple-100 bg-purple-50 text-purple-600 text-sm font-semibold mb-6">
                      {feature.id}
                    </span>
                    <h3 className="text-[32px] font-bold text-[#1F1F1F] mb-4 tracking-tight leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-[16px] leading-[1.6] text-gray-500 mb-8 max-w-[320px]">
                      {feature.description}
                    </p>
                    <button className="inline-flex items-center gap-1 w-fit text-[14px] font-bold text-[#1F1F1F] bg-[#F4F4F5] rounded-full px-5 py-2.5 hover:bg-[#E4E4E7] transition-colors">
                      {feature.cta} <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Visual / Chart Area */}
                  <div className="flex-1 min-h-[400px] relative overflow-hidden rounded-r-[32px] rounded-bl-[32px] lg:rounded-bl-none">
                    {/* Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#EAD4FF] via-[#FFE4DE] to-[#FFFFFF]" />

                    {/* Window/Image Container - Offset to show gradient Top/Right only */}
                    <div className="absolute top-4 right-4 lg:top-5 lg:right-5 bottom-0 left-0 bg-white flex flex-col  shadow-2xl overflow-hidden ring-1 ring-black/5">
                      {/* Window Header */}
                      <div className="h-9 border-b border-gray-100 flex items-center px-4 gap-2 bg-white z-10"></div>
                      {/* Image */}
                      <div className="flex-1 relative w-full h-full bg-gray-50/50">
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
