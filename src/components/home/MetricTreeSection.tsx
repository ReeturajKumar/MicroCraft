"use client";

import { MousePointer2, Flag, Hexagon } from "lucide-react";
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
    <section className="relative w-full bg-[#FAFAFA] py-16 lg:py-24 overflow-hidden flex justify-center">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#FFFBFB]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[900px] bg-[radial-gradient(circle,rgba(255,220,225,0.4)_0%,rgba(230,220,255,0.3)_40%,rgba(255,255,255,0)_70%)]"></div>
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              "radial-gradient(#94A3B8 1.5px, transparent 1.5px)",
            backgroundSize: "24px 24px",
          }}
        ></div>
      </div>

      {/* WIDE CONTAINER for Side Cards + Center Tree */}
      <div className="relative w-full max-w-[1400px] mx-auto h-[500px]">
        {/* --- LEFT FEATURE CARDS --- */}
        <div className="absolute left-2 lg:left-0 top-6 flex flex-col gap-4 z-20">
          <FeatureCard
            title="All your trusted data, in one place"
            description="Make better decisions with data from your data warehouse, SDK, CDP, and more in one self-serve platform."
          />
        </div>

        <div className="absolute left-4 lg:left-0 bottom-6 flex flex-col gap-8 z-20">
          <FeatureCard
            title="Get immediate answers"
            description="Identify exactly what's driving results (and why) with powerful Product Analytics, Web Analytics, and Session Replay."
          />
        </div>

        {/* --- RIGHT FEATURE CARDS (Symmetric Balance) --- */}
        <div className="absolute right-4 lg:right-0 top-6 flex flex-col gap-8 z-20">
          <FeatureCard
            title="Make more confident decisions"
            description="Align on evidence-backed decisions with Metric Trees, AI-driven suggestions, and Data Governance."
          />
        </div>

        <div className="absolute right-4 lg:right-0 bottom-6 flex flex-col gap-8 z-20">
          <FeatureCard
            title="Apply your updates and optimize"
            description="Compare what drives the best results and refine your approach with Experiments and Feature Flags."
          />
        </div>

        {/* --- CENTRAL TREE (Centered in Container) --- */}
        {/* Compact Tree Container w-[700px] h-[500px] */}
        {/* Centers:
            L1: x=350, y=85
            L2L: x=195, y=170 + box_center_offset? No, path endpoint. Top of card is 170. Center x is ~195 (75+120).
            L2R: x=505, y=170.
            L3L: x=105, y=360.
            L3M: x=350, y=360.
            L3R: x=595, y=360.
         */}
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[700px] h-[500px] z-10 scale-100">
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

            {/* L2 Left (Referral) to L1 (ARR) */}
            <path
              d="M 195 170 C 195 120, 350 130, 350 85"
              fill="none"
              stroke="#CBD5E1"
              strokeWidth="2"
              strokeDasharray="5 5"
              markerEnd="url(#arrowhead-sm)"
            />

            {/* L2 Right (Retention) to L1 (ARR) */}
            <path
              d="M 505 170 C 505 120, 350 130, 350 85"
              fill="none"
              stroke="#CBD5E1"
              strokeWidth="2"
              strokeDasharray="5 5"
              markerEnd="url(#arrowhead-sm)"
            />

            {/* L3 Left (Leads) to L2 Left (Referral) */}
            <path
              d="M 105 360 C 105 320, 195 320, 195 285"
              fill="none"
              stroke="#CBD5E1"
              strokeWidth="2"
              strokeDasharray="5 5"
              markerEnd="url(#arrowhead-sm)"
            />

            {/* L3 Center (Profit) to L2 Left (Referral) */}
            <path
              d="M 330 360 C 330 320, 195 320, 195 285"
              fill="none"
              stroke="#CBD5E1"
              strokeWidth="2"
              strokeDasharray="5 5"
              markerEnd="url(#arrowhead-sm)"
            />

            {/* L3 Center (Profit) to L2 Right (Retention) */}
            <path
              d="M 370 360 C 370 320, 505 320, 505 285"
              fill="none"
              stroke="#CBD5E1"
              strokeWidth="2"
              strokeDasharray="5 5"
              markerEnd="url(#arrowhead-sm)"
            />

            {/* L3 Right (Strategy) to L2 Right (Retention) */}
            <path
              d="M 595 360 C 595 320, 505 320, 505 285"
              fill="none"
              stroke="#CBD5E1"
              strokeWidth="2"
              strokeDasharray="5 5"
              markerEnd="url(#arrowhead-sm)"
            />
          </svg>

          {/* --- LEVEL 1 (Top) --- */}
          {/* ARR */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2">
            <MetricCard
              title="Annual Recurring Revenue"
              value="$1.2M"
              sublabel={null}
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
              delay={0}
            />
          </div>

          {/* --- LEVEL 2 (Middle, top-170ish) --- */}
          {/* Referral Engagement (Width 240) */}
          <div className="absolute top-[170px] left-[75px]">
            <MetricCard
              title="Referral Engagement"
              value="27.5k"
              sublabel="users"
              boxes={[
                { label: "WoW", value: "0.7%", isPositive: true },
                { label: "Last 6w", value: "3.1%", isPositive: false },
                { label: "Year", value: "8.2%", isPositive: true },
              ]}
              className="w-[240px]" // Slightly wider for 3 boxes
            />
          </div>

          {/* Day 30 Retention (Width 210) */}
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

          {/* --- LEVEL 3 (Bottom, top-360) --- */}
          {/* Inbound Leads */}
          <div className="absolute top-[360px] left-0">
            <MetricCard
              title="Inbound Leads"
              value="29.8k"
              sublabel="users"
              boxes={[{ label: "MoM", value: "10.1%", isPositive: true }]}
            />
            {/* Yellow Cursor for Mei Lin specific placement */}
            <Cursor
              name="Mei Lin"
              color="text-yellow-400"
              labelColor="bg-yellow-400"
              className="absolute top-1/2 -translate-y-1/2 -right-12 z-50"
              delay={1.5}
            />
          </div>

          {/* Avg Profit */}
          <div className="absolute top-[360px] left-1/2 -translate-x-1/2">
            <MetricCard
              title="Avg Profit per Referral"
              value="$15.9k"
              sublabel="Avg Profit"
              boxes={[
                { label: "MoM", value: "4.2%", isPositive: false },
                { label: "YoY", value: "6.8%", isPositive: false },
              ]}
            />
          </div>

          {/* Strategy Pivot */}
          <div className="absolute top-[360px] right-0">
            <StrategyCard />
          </div>
        </div>
      </div>
    </section>
  );
}
