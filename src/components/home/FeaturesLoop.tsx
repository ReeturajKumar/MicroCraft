"use client";

import { ChevronRight } from "lucide-react";

/**
 * FEATURES LOOP COMPONENT
 * Full-width sticky scrolling section.
 */

const features = [
  {
    id: "STAGE 01",
    title: "We Understand Your Business First",
    description:
      "We learn how you get customers, how your team works, where delays happen, and what problems you face every day.",
    cta: "See Our Process",
    image:
      "https://framerusercontent.com/images/8HRozY7yqrIZzy2dCILSxYrqjw.svg?width=406&height=406",
  },
  {
    id: "STAGE 02",
    title: "We Design Your Business System",
    description:
      "Your CRM, follow-ups, reports, and automations are designed exactly as per your business flow — simple, practical, and easy to use.",
    cta: "View Examples",
    image:
      "https://framerusercontent.com/images/lDo6V942uu7jbYxBtjw0YvDct8.svg?width=406&height=406",
  },
  {
    id: "STAGE 03",
    title: "We Set It Up and Train Your Team",
    description:
      "We implement everything, migrate data, connect your tools, and train your staff so everyone starts using the system confidently.",
    cta: "See Implementation",
    image:
      "https://framerusercontent.com/images/C7ncJqoSQ9OXYzI3XkUFZQLvo.svg?width=406&height=406",
  },
  {
    id: "STAGE 04",
    title: "We Grow With Your Business",
    description:
      "As your business expands, we upgrade your system, add new automation, and keep improving efficiency.",
    cta: "Explore Partnership",
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
              <h2 className="text-[36px] lg:text-[40px] leading-[1.15] font-bold font-sans text-[#1F2023] tracking-tight">
                A System Built for Your Business.
              </h2>
              <p className="text-[17px] leading-[1.6] text-[#3F3F46] font-normal font-sans max-w-[440px]">
                Every business works differently.
                <br />
                Your customers, your team, and your daily work are not the same as anyone else.
                <br />
                So we understand your business first, and then build a simple system that matches how you actually work.
              </p>
              <button className="mt-2 inline-flex items-center justify-center gap-1.5 text-[15px] font-bold text-white bg-[#1F2023] rounded-full px-6 py-3 hover:bg-[#333] transition-all hover:-translate-y-0.5 shadow-md">
                Talk to Our Team <ChevronRight className="w-4 h-4 ml-0.5" />
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
                    <h3 className="text-[32px] font-bold font-sans text-[#1F1F1F] mb-4 tracking-tight leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-[16px] leading-[1.6] text-gray-500 mb-8 font-sans max-w-[320px]">
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
