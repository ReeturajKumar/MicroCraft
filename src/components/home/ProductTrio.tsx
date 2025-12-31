import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import {
  MessageCircle,
  ArrowRight,
  Sparkles,
  User,
  Zap,
  Bot,
  Workflow,
  Phone,
} from "lucide-react";

// --- TYPES ---
interface SpotlightCardProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

interface CardContentProps {
  title: string;
  desc: string;
  tags: string[];
  icon: React.ReactNode;
}

// --- ROTATING TEXT DATA ---
const HEADLINE_WORDS = [
  {
    text: "Infinite Possibilities",
    color: "from-purple-600 via-fuchsia-500 to-pink-500",
  },
  {
    text: "Limitless Scale",
    color: "from-blue-600 via-indigo-500 to-violet-500",
  },
  {
    text: "Total Control",
    color: "from-emerald-500 via-teal-500 to-cyan-500",
  },
];

const ProductTrio: React.FC = () => {
  // --- STATE FOR SPOTLIGHT BACKGROUND ---
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // --- STATE FOR TEXT ROTATOR ---
  const [activeWord, setActiveWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWord((prev) => (prev + 1) % HEADLINE_WORDS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full bg-white py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-28 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 flex flex-col items-center justify-center overflow-hidden font-sans group"
    >
      {/* ========================================================
          1. INTERACTIVE BACKGROUND (Spotlight + Grid)
      ======================================================== */}

      {/* Ambient Orbs */}
      <div className="absolute top-[-20%] right-[-10%] w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] lg:w-[800px] lg:h-[800px] xl:w-[900px] xl:h-[900px] 2xl:w-[1000px] 2xl:h-[1000px] bg-violet-50/50 rounded-full blur-3xl pointer-events-none mix-blend-multiply" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[550px] md:h-[550px] lg:w-[600px] lg:h-[600px] xl:w-[700px] xl:h-[700px] 2xl:w-[800px] 2xl:h-[800px] bg-blue-50/50 rounded-full blur-3xl pointer-events-none mix-blend-multiply" />

      {/* The Grid with Mouse Mask */}
      <div
        className="absolute inset-0 pointer-events-none z-0 hidden sm:block"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(124, 58, 237, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(124, 58, 237, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          maskImage: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
          WebkitMaskImage: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
        }}
      />

      {/* Glowing Cursor Follower */}
      <div
        className="absolute pointer-events-none h-[200px] w-[200px] sm:h-[220px] sm:w-[220px] md:h-[280px] md:w-[280px] lg:h-[300px] lg:w-[300px] xl:h-[350px] xl:w-[350px] 2xl:h-[400px] 2xl:w-[400px] rounded-full bg-violet-400/10 blur-[80px] transition-transform duration-100 ease-out z-0 hidden sm:block"
        style={{
          left: mousePos.x,
          top: mousePos.y,
          transform: "translate(-50%, -50%)",
        }}
      />

      <div className="relative z-10 max-w-6xl xl:max-w-7xl 2xl:max-w-7xl mx-auto w-full">
        {/* --- HEADER --- */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-14 2xl:mb-16 px-2 sm:px-4 md:px-6 lg:px-0">
          {/* Main Headline with Rotating Text */}
          <h2 className="product-trio-heading tracking-tight">
            Your Business,{" "}
            {/* 1. Changed 'block' to 'inline-flex' & added 'align-bottom' to sit on the baseline */}
            <span className="relative inline-flex flex-col h-[1.15em] sm:h-[1.12em] md:h-[1.1em] overflow-visible sm:overflow-hidden align-bottom transition-all duration-500 ease-in-out">
              {/* Ghost Element (Invisible, but sets the width dynamically) */}
              <span className="invisible whitespace-nowrap opacity-0">
                {HEADLINE_WORDS[activeWord].text}
              </span>

              {/* Animated Words */}
              {HEADLINE_WORDS.map((word, idx) => (
                <span
                  key={idx}
                  // 2. Changed 'text-center' to 'text-left' so it flows naturally after the period
                  className={`absolute top-0 left-0 w-full text-left transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] text-transparent bg-clip-text bg-gradient-to-r ${
                    word.color
                  } ${
                    idx === activeWord
                      ? "translate-y-0 opacity-100"
                      : "translate-y-[120%] opacity-0"
                  }`}
                >
                  {word.text}
                </span>
              ))}
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
            className="product-trio-subheading mt-3 sm:mt-4 md:mt-5 lg:mt-6"
          >
            Enterprise-ready AI automation and CRM that integrate seamlessly
            into your day-to-day business operations.
          </motion.p>
        </div>

        {/* --- CARDS GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12 max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
          {/* CARD 1: Enterprise CRM */}
          <SpotlightCard delay={0}>
            <CRMDemo />
            <CardContent
              title="Enterprise CRM"
              desc="A central intelligence system for sales, customers, and growth. Manage customers, streamline sales operations, automate follow-ups, and gain deep business insights."
              tags={["Custom Pipelines", "AI-Integrated"]}
              icon={<MessageCircle className="w-4 h-4 text-purple-600" />}
            />
          </SpotlightCard>

          {/* CARD 2: Enterprise AI Automation */}
          <SpotlightCard delay={0.15}>
            <AIAutomationDemo />
            <CardContent
              title="Enterprise AI Automation"
              desc="Intelligent AI agents powering modern enterprises end-to-end. From customer interactions to backend workflows, execute, analyze, and optimize business processes at scale."
              tags={["AI Agents", "Workflow Integration"]}
              icon={<Zap className="w-4 h-4 text-pink-600" />}
            />
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
};

// --- 2. SPOTLIGHT CARD COMPONENT (Optimized for Smoothness) ---
const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  delay = 0,
  className = "",
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      // 'once: true' prevents re-animating on small scrolls
      // 'margin: -100px' ensures it triggers only when significantly in view
      viewport={{ once: true, margin: "-100px" }}
      // Custom Bezier for premium smooth feel
      transition={{ duration: 0.8, delay, ease: [0.25, 1, 0.5, 1] }}
      className={`group relative border border-gray-200 bg-white rounded-xl sm:rounded-2xl md:rounded-[2rem] h-[420px] sm:h-[460px] md:h-[500px] lg:h-[520px] xl:h-[540px] 2xl:h-[560px] overflow-hidden flex flex-col shadow-sm hover:shadow-[0_20px_50px_-20px_rgba(168,85,247,0.15)] hover:border-purple-100 transition-all duration-500 ${className}`}
      onMouseMove={handleMouseMove}
    >
      {/* Spotlight Gradient Layer */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl sm:rounded-2xl md:rounded-[2rem] opacity-0 transition duration-300 group-hover:opacity-100 z-30"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              350px circle at ${mouseX}px ${mouseY}px,
              rgba(236, 72, 153, 0.06),
              transparent 80%
            )
          `,
        }}
      />

      {/* Content Container */}
      <div className="relative h-full flex flex-col z-20">{children}</div>
    </motion.div>
  );
};

const CardContent: React.FC<CardContentProps> = ({
  title,
  desc,
  tags,
  icon,
}) => (
  <div className="product-trio-card-content">
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

    <div className="flex justify-between items-start mb-2 sm:mb-3 gap-2">
      <div className="flex gap-1 sm:gap-1.5 flex-wrap">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="product-trio-card-tag group-hover:bg-purple-50 group-hover:text-purple-700 group-hover:border-purple-200"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="product-trio-card-icon group-hover:bg-white group-hover:shadow-md group-hover:scale-110 flex-shrink-0">
        {icon}
      </div>
    </div>

    <h3 className="product-trio-card-title mb-1.5 sm:mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
      {title}
    </h3>
    <p className="product-trio-card-description mb-3 sm:mb-4">{desc}</p>

    <Link
      to={title === "Enterprise CRM" ? "/products/crm" : "/products/ai-automation"}
      className="flex items-center product-trio-card-link group-hover:text-purple-600 w-fit"
    >
      <span className="relative">
        Explore Module
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
      </span>
      <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1.5 sm:ml-2 group-hover:translate-x-1 transition-transform duration-300" />
    </Link>
  </div>
);

// --- 3. DEMO COMPONENTS (Same as before, just ensuring smooth rendering) ---

const CRMDemo = () => {
  return (
    <div className="relative flex-1 bg-gradient-to-b from-gray-50 to-white p-3 sm:p-4 md:p-5 lg:p-6 flex flex-col justify-center overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 xl:w-48 xl:h-48 bg-purple-100/50 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-8 left-0 w-24 h-24 sm:w-26 sm:h-26 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 bg-pink-100/50 rounded-full blur-3xl opacity-60"></div>

      <div className="w-full max-w-[200px] sm:max-w-[220px] md:max-w-[240px] lg:max-w-[260px] xl:max-w-[280px] 2xl:max-w-[300px] mx-auto space-y-2 sm:space-y-2.5 md:space-y-3 lg:space-y-3.5 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
          className="flex gap-1.5 sm:gap-2 md:gap-2.5"
        >
          <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-sm text-gray-400 flex-shrink-0">
            <User size={10} className="sm:w-3 sm:h-3 md:w-3.5 md:h-3.5" />
          </div>
          <div className="bg-white border border-gray-200 p-2 sm:p-2.5 md:p-3 rounded-xl rounded-tl-none shadow-[0_2px_8px_rgba(0,0,0,0.02)] text-[10px] sm:text-[11px] md:text-xs text-gray-600 font-medium">
            Is the "Midnight Hoodie" back in stock?
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, display: "none" }}
          animate={{
            opacity: [0, 1, 1, 0],
            display: ["none", "flex", "flex", "none"],
          }}
          transition={{
            duration: 2,
            times: [0, 0.2, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 3,
          }}
          className="flex gap-1.5 sm:gap-2 md:gap-2.5 justify-end"
        >
          <div className="bg-gray-100 p-2 sm:p-2.5 md:p-3 rounded-xl rounded-tr-none text-[10px] sm:text-[11px] md:text-xs">
            <div className="flex gap-1 h-3.5 sm:h-4 md:h-4.5 items-center">
              <div
                className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                style={{ animationDelay: "0ms" }}
              />
              <div
                className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                style={{ animationDelay: "150ms" }}
              />
              <div
                className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                style={{ animationDelay: "300ms" }}
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: [0, 0, 1, 1, 0], y: [10, 10, 0, 0, 10] }}
          transition={{
            duration: 5,
            times: [0, 0.4, 0.5, 0.9, 1],
            repeat: Infinity,
          }}
          className="flex gap-1.5 sm:gap-2 md:gap-2.5 justify-end"
        >
          <div className="bg-gradient-to-br from-purple-600 to-fuchsia-600 p-2 sm:p-2.5 md:p-3 rounded-xl rounded-tr-none shadow-lg shadow-purple-200 text-[10px] sm:text-[11px] md:text-xs text-white">
            Yes! It just arrived. Reserved one for you.
          </div>
          <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 shadow-sm border border-purple-200 flex-shrink-0">
            <Sparkles size={10} className="sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 fill-purple-600" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const AIAutomationDemo = () => {
  return (
    <div className="relative flex-1 bg-gradient-to-b from-slate-900 via-purple-900/20 to-slate-900 p-3 sm:p-4 md:p-5 lg:p-6 flex flex-col justify-center overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 xl:w-48 xl:h-48 bg-pink-500/20 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-8 left-0 w-24 h-24 sm:w-26 sm:h-26 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 bg-blue-500/20 rounded-full blur-3xl opacity-60"></div>

      <div className="w-full max-w-[200px] sm:max-w-[220px] md:max-w-[240px] lg:max-w-[260px] xl:max-w-[280px] 2xl:max-w-[300px] mx-auto space-y-2 sm:space-y-2.5 md:space-y-3 lg:space-y-3.5 relative z-10">
        {/* AI Agent Card */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-2.5 sm:p-3 md:p-3.5 lg:p-4 shadow-lg"
        >
          <div className="flex items-center gap-1.5 sm:gap-2 md:gap-2.5 mb-1.5 sm:mb-2 md:mb-2.5">
            <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
              <Bot size={10} className="sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[9px] sm:text-[10px] md:text-xs font-bold text-white">AI Agent</div>
              <div className="text-[7px] sm:text-[8px] md:text-[9px] text-gray-400">Processing...</div>
            </div>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 rounded-full bg-green-400 animate-pulse flex-shrink-0"></div>
          </div>
          <div className="text-[9px] sm:text-[10px] md:text-xs text-gray-300">
            Automating workflow tasks
          </div>
        </motion.div>

        {/* Automation Steps */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 3,
            times: [0, 0.3, 0.7, 1],
            repeat: Infinity,
            repeatDelay: 2,
          }}
          className="space-y-1.5 sm:space-y-2 md:space-y-2.5"
        >
          {[
            { icon: Phone, text: "Call handling", color: "text-blue-400" },
            {
              icon: Workflow,
              text: "Process automation",
              color: "text-purple-400",
            },
            {
              icon: Sparkles,
              text: "Lead qualification",
              color: "text-pink-400",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.2 }}
              className="flex items-center gap-1.5 sm:gap-2 md:gap-2.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-1.5 sm:p-2 md:p-2.5"
            >
              <item.icon size={10} className={`${item.color} sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 flex-shrink-0`} />
              <span className="text-[8px] sm:text-[9px] md:text-[10px] text-gray-300 flex-1 min-w-0">{item.text}</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                className="ml-auto w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-400 flex-shrink-0"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ProductTrio;
