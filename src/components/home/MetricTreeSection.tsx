/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { MousePointer2, Flag, Hexagon, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

/**
 * METRIC TREE SECTION
 * Compact & Precise recreation of the centered Metric Tree visualization.
 */

/* --- SUBCOMPONENTS --- */

const FooterBox = ({ label, value, isPositive }: any) => (
  <div className="flex-1 bg-[#F9F9FA] border border-[#F4F4F5] rounded-md py-1 px-2 flex flex-col items-center">
    <span className="text-[10px] font-bold text-gray-400 mb-0.5">{label}</span>
    <span
      className={`text-[12px] font-bold ${
        isPositive ? "text-[#22C55E]" : "text-[#EF4444]"
      }`}
    >
      {isPositive ? "↑" : "↓"} {value}
    </span>
  </div>
);

const MetricCard = ({ title, value, sublabel, boxes, className }: any) => (
  <div
    className={`bg-white rounded-[14px] shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-[#E4E4E7] p-3 w-[210px] flex flex-col items-center text-center relative z-20 ${className}`}
  >
    {/* Header */}
    <div className="flex items-center gap-1.5 mb-1">
      <Hexagon className="w-3.5 h-3.5 text-gray-400 fill-gray-50" />
      <span className="text-[11px] font-bold text-[#3F3F46] uppercase tracking-wide">
        {title}
      </span>
    </div>

    {/* Value */}
    <div className="text-[28px] font-bold text-[#1F2023] leading-none tracking-tight mb-0.5">
      {value}
    </div>

    {/* Sublabel */}
    {sublabel && (
      <div className="text-[10px] font-medium text-gray-400 mb-2">
        {sublabel}
      </div>
    )}
    {!sublabel && <div className="mb-2"></div>}

    {/* Footer Boxes */}
    <div className="flex gap-2 w-full">
      {boxes.map((box: any, i: number) => (
        <FooterBox key={i} {...box} />
      ))}
    </div>
  </div>
);

const StrategyCard = ({ className }: any) => (
  <div
    className={`bg-white rounded-[14px] shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-[#E4E4E7] p-3 w-[210px] h-full flex flex-col justify-between relative z-20 ${className}`}
  >
    <div>
      <div className="flex items-center gap-1.5 mb-2">
        <Flag className="w-3.5 h-3.5 text-gray-400" />
        <span className="text-[11px] font-bold text-[#3F3F46] uppercase tracking-wide">
          Strategy Pivot
        </span>
      </div>
      <p className="text-[12px] leading-[1.4] text-[#1F2023] font-medium">
        Build and launch a new marketing strategy by May.
      </p>
    </div>
    <div className="mt-2 text-[11px] text-[#2563EB] font-bold flex gap-1">
      <span>Roadmap</span> <span className="text-gray-300">|</span>{" "}
      <span>Forecast</span>
    </div>
  </div>
);

const Cursor = ({ name, color, className, labelColor, delay = 0 }: any) => (
  <motion.div
    className={`absolute z-50 flex items-center ${className} pointer-events-none`}
    initial={{ x: 0, y: 0 }}
    animate={{
      x: [0, -40, -140, -140, -60, 0], // Move to value -> move to sparkline -> wait -> retreat -> reset
      y: [0, 20, -10, -10, 30, 0], // Human-like drift
    }}
    transition={{
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay,
      times: [0, 0.15, 0.35, 0.55, 0.8, 1], // Spend more time "reading" (waiting)
    }}
  >
    <MousePointer2
      className={`w-4 h-4 ${color} fill-current stroke-white stroke-[2px]`}
      style={{ transform: "rotate(-15deg)" }}
    />
    <div
      className={`${
        labelColor || color.replace("text-", "bg-")
      } text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-lg ml-1 whitespace-nowrap`}
    >
      {name}
    </div>
  </motion.div>
);

/* --- FEATURE CARD COMPONENT --- */
const FeatureCard = ({ title, description, className }: any) => (
  <div
    className={`bg-white rounded-2xl p-5 shadow-[0_2px_24px_rgba(0,0,0,0.04)] border border-gray-100/50 w-[260px] ${className}`}
  >
    <h3 className="text-[15px] font-bold text-[#1F2023] mb-2 leading-tight">
      {title}
    </h3>
    <p className="text-[13px] leading-[1.6] text-gray-500 font-medium">
      {description}
    </p>
  </div>
);

/* --- MAIN COMPONENT --- */

export function MetricTreeSection() {
  return (
    <section className="relative w-full bg-[#FAFAFA] py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Background with responsive intensity */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#FFFBFB]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] lg:w-[1300px] h-[600px] sm:h-[800px] lg:h-[1000px] bg-[radial-gradient(circle,rgba(255,220,225,0.4)_0%,rgba(230,220,255,0.3)_40%,rgba(255,255,255,0)_70%)] opacity-80 lg:opacity-100 transition-opacity duration-500"></div>
        <div
          className="absolute inset-0 opacity-[0.15] md:opacity-[0.3]"
          style={{
            backgroundImage: "radial-gradient(#94A3B8 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* SECTION HEADER: Split layout optimized for all screens */}
        <div className="mb-12 lg:mb-24 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-16">
          {/* Left: Heading */}
          <div className="lg:max-w-[600px] text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl leading-[1.15] font-semibold text-[#1F2023] tracking-tight">
              The engine for <br className="hidden sm:block" /> continuous
              innovation
            </h2>
          </div>

          {/* Right: Subheading + CTA */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-[440px] mx-auto lg:mx-0 gap-6">
            <p className="text-[13px] md:text-sm lg:text-[15px] leading-[1.6] text-[#3F3F46]/70 font-normal">
              MicroCraft is the AI-powered data clarity platform that helps you
              see the truth, act faster, and create the best customer
              experiences.
            </p>
            <button className="inline-flex items-center gap-2 px-5 py-3.5 bg-[#1F2023] text-white rounded-full font-bold text-[12px] md:text-[13px] hover:bg-[#333] transition-all hover:-translate-y-0.5 shadow-sm active:scale-95 group">
              Learn About Metric Trees
              <ChevronRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* MOBILE LAYOUT: Integrated Features */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 sm:mb-16">
          <FeatureCard
            title="All your trusted data, in one place"
            description="Make better decisions with data from your data warehouse, SDK, CDP, and more in one platform."
            className="w-full"
          />
          <FeatureCard
            title="Make more confident decisions"
            description="Align on evidence-backed decisions with Metric Trees and AI-driven suggestions."
            className="w-full"
          />
        </div>

        {/* TREE CONTAINER: Fluid height and scaling */}
        <div className="relative w-full min-h-[400px] sm:min-h-[500px] lg:h-[650px] flex items-center justify-center py-8 lg:py-0">
          {/* --- DESKTOP SIDE FEATURE CARDS --- */}
          <div className="hidden lg:flex absolute left-0 h-full flex-col justify-between py-12 z-20">
            <FeatureCard
              title="All your trusted data, in one place"
              description="Make better decisions with data from your data warehouse, SDK, CDP, and more in one self-serve platform."
            />
            <FeatureCard
              title="Get immediate answers"
              description="Identify exactly what's driving results (and why) with powerful Product Analytics and Web Analytics."
            />
          </div>

          <div className="hidden lg:flex absolute right-0 h-full flex-col justify-between py-12 z-20">
            <FeatureCard
              title="Make more confident decisions"
              description="Align on evidence-backed decisions with Metric Trees, AI-driven suggestions, and Data Governance."
            />
            <FeatureCard
              title="Apply your updates and optimize"
              description="Compare what drives the best results and refine your approach with Experiments and Feature Flags."
            />
          </div>

          {/* --- CENTRAL VIRTUAL TREE --- */}
          <div className="relative w-full max-w-[700px] h-[500px] scale-[0.52] xs:scale-[0.58] sm:scale-[0.78] md:scale-[0.88] lg:scale-100 flex items-center justify-center transition-all duration-700 ease-out">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px]">
              {/* SVG LINES */}
              <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none z-0">
                <defs>
                  <marker
                    id="arrowhead-sm"
                    markerWidth="8"
                    markerHeight="6"
                    refX="7"
                    refY="3"
                    orient="auto"
                  >
                    <polygon points="0 0, 8 3, 0 6" fill="#CBD5E1" />
                  </marker>
                </defs>

                {/* Tree Paths */}
                <path
                  d="M 195 170 C 195 120, 350 130, 350 85"
                  fill="none"
                  stroke="#CBD5E1"
                  strokeWidth="2"
                  strokeDasharray="5 5"
                  markerEnd="url(#arrowhead-sm)"
                />
                <path
                  d="M 505 170 C 505 120, 350 130, 350 85"
                  fill="none"
                  stroke="#CBD5E1"
                  strokeWidth="2"
                  strokeDasharray="5 5"
                  markerEnd="url(#arrowhead-sm)"
                />
                <path
                  d="M 105 360 C 105 320, 195 320, 195 285"
                  fill="none"
                  stroke="#CBD5E1"
                  strokeWidth="2"
                  strokeDasharray="5 5"
                  markerEnd="url(#arrowhead-sm)"
                />
                <path
                  d="M 330 360 C 330 320, 195 320, 195 285"
                  fill="none"
                  stroke="#CBD5E1"
                  strokeWidth="2"
                  strokeDasharray="5 5"
                  markerEnd="url(#arrowhead-sm)"
                />
                <path
                  d="M 370 360 C 370 320, 505 320, 505 285"
                  fill="none"
                  stroke="#CBD5E1"
                  strokeWidth="2"
                  strokeDasharray="5 5"
                  markerEnd="url(#arrowhead-sm)"
                />
                <path
                  d="M 595 360 C 595 320, 505 320, 505 285"
                  fill="none"
                  stroke="#CBD5E1"
                  strokeWidth="2"
                  strokeDasharray="5 5"
                  markerEnd="url(#arrowhead-sm)"
                />
              </svg>

              {/* LEVEL 1 */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2">
                <MetricCard
                  title="Annual Recurring Revenue"
                  value="$1.2M"
                  boxes={[
                    { label: "MoM", value: "3.9%", isPositive: true },
                    { label: "YoY", value: "12.3%", isPositive: true },
                  ]}
                />
                <Cursor
                  name="Ava Singh"
                  color="text-[#ef4444]"
                  labelColor="bg-[#ef4444]"
                  className="absolute top-1/2 -translate-y-1/2 -right-12"
                />
              </div>

              {/* LEVEL 2 */}
              <div className="absolute top-[170px] left-[75px]">
                <MetricCard
                  title="Referral Engagement"
                  value="27.5k"
                  sublabel="users"
                  boxes={[
                    { label: "WoW", value: "0.7%", isPositive: true },
                    { label: "L6w", value: "3.1%", isPositive: false },
                    { label: "Year", value: "8.2%", isPositive: true },
                  ]}
                  className="w-[240px]"
                />
              </div>

              <div className="absolute top-[170px] right-[75px]">
                <MetricCard
                  title="Day 30 Retention"
                  value="21.4%"
                  sublabel="users"
                  boxes={[
                    { label: "MoM", value: "1.4%", isPositive: true },
                    { label: "YoY", value: "2.3%", isPositive: false },
                  ]}
                />
                <Cursor
                  name="Hugo Silva"
                  color="text-[#3B82F6]"
                  labelColor="bg-[#3B82F6]"
                  className="absolute top-1/2 -translate-y-1/2 -right-12"
                  delay={3}
                />
              </div>

              {/* LEVEL 3 */}
              <div className="absolute top-[360px] left-0">
                <MetricCard
                  title="Inbound Leads"
                  value="29.8k"
                  sublabel="users"
                  boxes={[{ label: "MoM", value: "10.1%", isPositive: true }]}
                />
                <Cursor
                  name="Mei Lin"
                  color="text-yellow-400"
                  labelColor="bg-yellow-400"
                  className="absolute top-1/2 -translate-y-1/2 -right-12"
                  delay={1.5}
                />
              </div>

              <div className="absolute top-[360px] left-1/2 -translate-x-1/2">
                <MetricCard
                  title="Avg Profit / Referral"
                  value="$15.9k"
                  sublabel="Avg Profit"
                  boxes={[
                    { label: "MoM", value: "4.2%", isPositive: false },
                    { label: "YoY", value: "6.8%", isPositive: false },
                  ]}
                />
              </div>

              <div className="absolute top-[360px] right-0">
                <StrategyCard />
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE LAYOUT: Lower Features */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 sm:mt-12">
          <FeatureCard
            title="Get immediate answers"
            description="Identify exactly what's driving results with powerful Product Analytics and Session Replay."
            className="w-full"
          />
          <FeatureCard
            title="Apply your updates"
            description="Compare what drives the best results and refine with Experiments and Feature Flags."
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
