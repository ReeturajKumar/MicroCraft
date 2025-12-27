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

  return (
    <section className="relative w-full py-6 bg-gradient-to-b from-slate-50 to-white font-sans selection:bg-purple-100 selection:text-purple-900 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-purple-200/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-pink-200/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* =========================================
            HEADER WITH TOGGLE
           ========================================= */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
          {/* Left: Heading and Subheading */}
          <div className="lg:flex-1">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-3">
              Pricing that{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600">
                Scales with You
              </span>
            </h2>
            <p className="text-base text-slate-600 max-w-xl">
              Transparent pricing with no hidden fees. Start free and upgrade as
              you grow.
            </p>
          </div>

          {/* Right: Pricing Toggle */}
          <div className="flex justify-end">
            {/* Monthly/Yearly Toggle */}
            <div className="pricing-toggle-container">
              <LayoutGroup>
                <button
                  onClick={() => setBilling("monthly")}
                  className={`pricing-toggle-button ${
                    billing === "monthly"
                      ? "pricing-toggle-button-active"
                      : "pricing-toggle-button-inactive"
                  }`}
                >
                  Monthly
                  {billing === "monthly" && (
                    <motion.div
                      layoutId="toggle-pill"
                      className="pricing-toggle-pill"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </button>

                <button
                  onClick={() => setBilling("yearly")}
                  className={`pricing-toggle-button flex justify-center items-center gap-2 ${
                    billing === "yearly"
                      ? "pricing-toggle-button-active"
                      : "pricing-toggle-button-inactive"
                  }`}
                >
                  Yearly
                  {billing === "yearly" && (
                    <motion.div
                      layoutId="toggle-pill"
                      className="pricing-toggle-pill"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                  <span
                    className={`pricing-discount-badge ${
                      billing === "yearly"
                        ? "pricing-discount-badge-active"
                        : "pricing-discount-badge-inactive"
                    }`}
                  >
                    -20%
                  </span>
                </button>
              </LayoutGroup>
            </div>
          </div>
        </div>

        {/* =========================================
            PRICING CARDS
           ========================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* 1. STARTER */}
          <PricingCard
            title="Starter"
            price="Free"
            sub=""
            btnText="Start Free"
            icon={<Star className="w-5 h-5 text-slate-400" />}
          >
            <ul className="pricing-features-list">
              <CheckItem text="1 User Seat" />
              <CheckItem text="Basic Analytics" />
              <CheckItem text="50 Leads/mo" />
              <CheckItem text="Community Support" />
            </ul>
          </PricingCard>

          {/* 2. GROWTH (Featured) */}
          <div className="relative md:-translate-y-4 z-10">
            {/* Glow Effect behind card */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-20 translate-y-4"></div>

            <PricingCard
              title="Growth"
              price={billing === "monthly" ? "₹2,499" : "₹1,999"}
              sub={billing === "monthly" ? "/ month" : "/ mo, billed yearly"}
              featured
              btnText="Get Started"
              icon={<Zap className="w-5 h-5 text-white fill-white" />}
            >
              <div className="absolute top-0 right-0 p-4">
                <span className="pricing-badge-featured">Most Popular</span>
              </div>
              <ul className="pricing-features-list">
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
            sub=""
            btnText="Contact Sales"
            icon={<Shield className="w-5 h-5 text-slate-400" />}
          >
            <ul className="pricing-features-list">
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
    className={`pricing-card ${
      featured ? "pricing-card-featured" : "pricing-card-standard"
    }`}
  >
    {/* Card Header */}
    <div className="pricing-card-header">
      <div
        className={`pricing-card-icon-container ${
          featured ? "pricing-card-icon-featured" : "pricing-card-icon-standard"
        }`}
      >
        {icon}
      </div>
      {!featured && <h3 className="pricing-card-title-standard">{title}</h3>}
    </div>

    {featured && <h3 className="pricing-card-title-featured">{title} Plan</h3>}

    {/* Price */}
    <div className="pricing-card-price-container">
      <motion.span
        key={price}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="pricing-card-price"
      >
        {price}
      </motion.span>
      <span className="pricing-card-price-sub">{sub}</span>
    </div>

    {/* List */}
    {children}

    {/* Button */}
    <button
      className={`pricing-card-button ${
        featured
          ? "pricing-card-button-featured"
          : "pricing-card-button-standard"
      }`}
    >
      {btnText}
    </button>
  </motion.div>
);

const CheckItem: React.FC<CheckItemProps> = ({ text }) => (
  <li className="pricing-check-item">
    <div className="pricing-check-icon">
      <Check size={12} strokeWidth={3} />
    </div>
    <span className="pricing-check-text">{text}</span>
  </li>
);

export default Pricing;
