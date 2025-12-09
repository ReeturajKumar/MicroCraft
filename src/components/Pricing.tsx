import React, { useState } from "react";
import { motion, LayoutGroup } from "framer-motion";
import { Check, Star, Zap, Shield } from "lucide-react";

// --- TYPES ---
type BillingCycle = "monthly" | "yearly";

interface PricingCardProps {
  title: string;
  price: string;
  sub: string;
  children: React.ReactNode;
  featured?: boolean;
  btnText: string;
  icon: React.ReactNode;
}

interface CheckItemProps {
  text: string;
}

const Pricing: React.FC = () => {
  // --- STATE ---
  const [billing, setBilling] = useState<BillingCycle>("monthly");

  // --- MOUSE TRACKING FOR BACKGROUND ---
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-screen bg-white font-sans selection:bg-purple-100 selection:text-purple-900 overflow-hidden py-32 group"
    >
      {/* =========================================
          1. INTERACTIVE BACKGROUND (Spotlight + Grid)
         ========================================= */}

      {/* Ambient Orbs */}
      <div className="absolute top-0 left-[-10%] w-[1000px] h-[1000px] bg-purple-100/40 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />
      <div className="absolute bottom-0 right-[-10%] w-[800px] h-[800px] bg-blue-50/40 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />

      {/* The Grid with Mouse Mask */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(124, 58, 237, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(124, 58, 237, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          maskImage: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
          WebkitMaskImage: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
        }}
      />

      {/* Glowing Cursor Follower */}
      <div
        className="absolute pointer-events-none h-[400px] w-[400px] rounded-full bg-purple-400/10 blur-[80px] transition-transform duration-75 ease-out z-0"
        style={{
          left: mousePos.x,
          top: mousePos.y,
          transform: "translate(-50%, -50%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* =========================================
            PRICING HEADER & TOGGLE
           ========================================= */}
        <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-12">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-600 text-xs font-bold uppercase tracking-wider mb-6"
            >
              <Zap size={14} className="fill-purple-600" />
              Flexible Plans
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6"
            >
              Pricing that <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                scales with you.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-500 max-w-lg leading-relaxed"
            >
              Transparent pricing. No hidden fees. <br />
              Start for free and upgrade as you grow.
            </motion.p>
          </div>

          {/* Monthly/Yearly Toggle */}
          <div className="bg-slate-100/80 backdrop-blur-sm p-1.5 rounded-full flex items-center relative cursor-pointer border border-slate-200">
            <LayoutGroup>
              <button
                onClick={() => setBilling("monthly")}
                className={`relative z-10 px-8 py-3 rounded-full text-sm font-bold transition-colors w-36 ${
                  billing === "monthly"
                    ? "text-slate-900"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                Monthly
                {billing === "monthly" && (
                  <motion.div
                    layoutId="toggle-pill"
                    className="absolute inset-0 bg-white rounded-full shadow-sm border border-slate-200 -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>

              <button
                onClick={() => setBilling("yearly")}
                className={`relative z-10 px-8 py-3 rounded-full text-sm font-bold transition-colors w-36 flex justify-center items-center gap-2 ${
                  billing === "yearly"
                    ? "text-slate-900"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                Yearly
                {billing === "yearly" && (
                  <motion.div
                    layoutId="toggle-pill"
                    className="absolute inset-0 bg-white rounded-full shadow-sm border border-slate-200 -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-extrabold transition-colors ${
                    billing === "yearly"
                      ? "bg-green-100 text-green-700"
                      : "bg-green-50 text-green-600"
                  }`}
                >
                  -20%
                </span>
              </button>
            </LayoutGroup>
          </div>
        </div>

        {/* =========================================
            PRICING CARDS
           ========================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 1. STARTER */}
          <PricingCard
            title="Starter"
            price="Free"
            sub="Forever"
            btnText="Start Free"
            icon={<Star className="w-5 h-5 text-slate-400" />}
          >
            <ul className="space-y-4 mb-8 flex-1">
              <CheckItem text="1 User Seat" />
              <CheckItem text="Basic Analytics" />
              <CheckItem text="50 Leads/mo" />
              <CheckItem text="Community Support" />
            </ul>
          </PricingCard>

          {/* 2. GROWTH (Featured) */}
          <div className="relative md:-translate-y-6 z-10">
            {/* Glow Effect behind card */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500 to-pink-500 rounded-[2.5rem] blur-2xl opacity-20 translate-y-4"></div>

            <PricingCard
              title="Growth"
              price={billing === "monthly" ? "₹2,499" : "₹1,999"}
              sub={billing === "monthly" ? "/ month" : "/ mo, billed yearly"}
              featured
              btnText="Get Started"
              icon={<Zap className="w-5 h-5 text-white fill-white" />}
            >
              <div className="absolute top-0 right-0 p-6">
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg shadow-purple-200">
                  Most Popular
                </span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <CheckItem text="5 Team Seats" />
                <CheckItem text="Full ONDC Sync" />
                <CheckItem text="WhatsApp Bot (AI)" />
                <CheckItem text="Inventory Prediction" />
                <CheckItem text="Priority Email Support" />
              </ul>
            </PricingCard>
          </div>

          {/* 3. SCALE */}
          <PricingCard
            title="Scale"
            price="Custom"
            sub="Contact Sales"
            btnText="Contact Sales"
            icon={<Shield className="w-5 h-5 text-slate-400" />}
          >
            <ul className="space-y-4 mb-8 flex-1">
              <CheckItem text="Unlimited Seats" />
              <CheckItem text="Dedicated Success Manager" />
              <CheckItem text="Custom API Integrations" />
              <CheckItem text="SLA & Contracts" />
              <CheckItem text="SSO & Advanced Security" />
            </ul>
          </PricingCard>
        </div>
      </div>
    </section>
  );
};

// --- SUB-COMPONENTS ---

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  sub,
  children,
  featured,
  btnText,
  icon,
}) => (
  <motion.div
    whileHover={{ y: -5 }}
    className={`h-full rounded-[2rem] p-8 flex flex-col relative transition-all duration-300 ${
      featured
        ? "bg-white border-2 border-purple-100 shadow-2xl shadow-purple-100/50"
        : "bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50"
    }`}
  >
    {/* Card Header */}
    <div className="flex justify-between items-start mb-6">
      <div
        className={`p-3 rounded-2xl ${
          featured ? "bg-purple-600 shadow-lg shadow-purple-200" : "bg-slate-50"
        }`}
      >
        {icon}
      </div>
      {!featured && (
        <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mt-2">
          {title}
        </h3>
      )}
    </div>

    {featured && (
      <h3 className="text-xl font-bold text-purple-900 mb-2">{title} Plan</h3>
    )}

    {/* Price */}
    <div className="flex items-baseline gap-1 mb-8">
      <motion.span
        key={price} // Trigger animation on price change
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className={`text-5xl font-extrabold tracking-tight ${
          featured ? "text-slate-900" : "text-slate-900"
        }`}
      >
        {price}
      </motion.span>
      <span className="text-sm text-slate-400 font-medium">{sub}</span>
    </div>

    {/* List */}
    {children}

    {/* Button */}
    <button
      className={`w-full py-4 rounded-xl font-bold cursor-pointer transition-all active:scale-95 ${
        featured
          ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg hover:shadow-purple-200"
          : "bg-slate-50 text-slate-900 border border-slate-200 hover:bg-slate-100 hover:border-slate-300"
      }`}
    >
      {btnText}
    </button>
  </motion.div>
);

const CheckItem: React.FC<CheckItemProps> = ({ text }) => (
  <li className="flex items-center gap-3 text-sm text-slate-600 group">
    <div className="w-5 h-5 rounded-full bg-green-50 border border-green-100 flex items-center justify-center text-green-600 group-hover:bg-green-100 transition-colors">
      <Check size={12} strokeWidth={3} />
    </div>
    <span className="font-medium group-hover:text-slate-900 transition-colors">
      {text}
    </span>
  </li>
);

export default Pricing;
