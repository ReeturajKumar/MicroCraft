import React, { useState, useEffect } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  MessageCircle,
  ShoppingBag,
  BarChart2,
  ArrowRight,
  Sparkles,
  User,
  Globe,
  TrendingUp,
  Zap,
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
      className="relative min-h-screen w-full bg-white py-24 px-4 sm:px-6 flex flex-col items-center justify-center overflow-hidden font-sans group"
    >
      {/* ========================================================
          1. INTERACTIVE BACKGROUND (Spotlight + Grid)
      ======================================================== */}

      {/* Ambient Orbs */}
      <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-violet-50/50 rounded-full blur-3xl pointer-events-none mix-blend-multiply" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-3xl pointer-events-none mix-blend-multiply" />

      {/* The Grid with Mouse Mask */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(124, 58, 237, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(124, 58, 237, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          maskImage: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
          WebkitMaskImage: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
        }}
      />

      {/* Glowing Cursor Follower */}
      <div
        className="absolute pointer-events-none h-[300px] w-[300px] rounded-full bg-violet-400/10 blur-[80px] transition-transform duration-100 ease-out z-0"
        style={{
          left: mousePos.x,
          top: mousePos.y,
          transform: "translate(-50%, -50%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* --- HEADER --- */}
        <div className="text-center mb-24 max-w-7xl mx-auto">
          {/* Main Headline with Rotating Text */}
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 leading-[1.1]">
            One Platform{" "}
            {/* 1. Changed 'block' to 'inline-flex' & added 'align-bottom' to sit on the baseline */}
            <span className="relative inline-flex flex-col h-[1.1em] overflow-hidden align-bottom transition-all duration-500 ease-in-out">
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
            className="text-xl text-gray-500 leading-relaxed"
          >
            Replace fragmented tools with a single operating system.{" "}
            <br className="hidden md:block" />
            Orchestrate CRM, Commerce, and Analytics from one dashboard.
          </motion.p>
        </div>

        {/* --- CARDS GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* CARD 1: CRM */}
          <SpotlightCard delay={0}>
            <CRMDemo />
            <CardContent
              title="Unified CRM"
              desc="Turn conversations into revenue. AI drafts emails, scores leads, and closes deals while you sleep."
              tags={["Auto-Draft", "Lead Scoring"]}
              icon={<MessageCircle className="w-5 h-5 text-purple-600" />}
            />
          </SpotlightCard>

          {/* CARD 2: COMMERCE */}
          <SpotlightCard delay={0.15}>
            <CommerceDemo />
            <CardContent
              title="Digital Commerce"
              desc="Launch storefronts in seconds. Sync inventory across ONDC, Amazon, and your website instantly."
              tags={["Multi-Channel", "Real-time Sync"]}
              icon={<ShoppingBag className="w-5 h-5 text-pink-600" />}
            />
          </SpotlightCard>

          {/* CARD 3: ANALYTICS */}
          <SpotlightCard delay={0.3}>
            <AnalyticsDemo />
            <CardContent
              title="Predictive AI"
              desc="Stop guessing. Our forecasting engine predicts stockouts and identifies your next bestseller."
              tags={["Forecasting", "Trend Analysis"]}
              icon={<BarChart2 className="w-5 h-5 text-indigo-500" />}
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
      className={`group relative border border-gray-200 bg-white rounded-[2rem] h-[580px] overflow-hidden flex flex-col shadow-sm hover:shadow-[0_20px_50px_-20px_rgba(168,85,247,0.15)] hover:border-purple-100 transition-all duration-500 ${className}`}
      onMouseMove={handleMouseMove}
    >
      {/* Spotlight Gradient Layer */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-300 group-hover:opacity-100 z-30"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
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
  <div className="p-8 mt-auto bg-white border-t border-gray-100 relative">
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

    <div className="flex justify-between items-start mb-4">
      <div className="flex gap-2">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="px-2.5 py-1 rounded-md bg-gray-50 border border-gray-100 text-[10px] font-bold uppercase tracking-wider text-gray-500 group-hover:bg-purple-50 group-hover:text-purple-600 group-hover:border-purple-100 transition-colors duration-300"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="p-2 rounded-full bg-gray-50 group-hover:bg-white group-hover:shadow-sm transition-all duration-300">
        {icon}
      </div>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
      {title}
    </h3>
    <p className="text-gray-500 text-sm leading-relaxed mb-6">{desc}</p>

    <div className="flex items-center text-sm font-bold text-gray-900 group-hover:text-purple-600 transition-colors cursor-pointer w-fit">
      <span className="relative">
        Explore Module
        <span className="absolute bottom-0 left-0 w-0 h-px bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
      </span>
      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
    </div>
  </div>
);

// --- 3. DEMO COMPONENTS (Same as before, just ensuring smooth rendering) ---

const CRMDemo = () => {
  return (
    <div className="relative flex-1 bg-gradient-to-b from-gray-50 to-white p-6 flex flex-col justify-center overflow-hidden">
      <div className="absolute top-0 right-0 w-48 h-48 bg-purple-100/50 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-10 left-0 w-32 h-32 bg-pink-100/50 rounded-full blur-3xl opacity-60"></div>

      <div className="w-full max-w-[280px] mx-auto space-y-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
          className="flex gap-3"
        >
          <div className="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-sm text-gray-400">
            <User size={14} />
          </div>
          <div className="bg-white border border-gray-200 p-3 rounded-2xl rounded-tl-none shadow-[0_2px_8px_rgba(0,0,0,0.02)] text-xs text-gray-600 font-medium">
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
          className="flex gap-3 justify-end"
        >
          <div className="bg-gray-100 p-3 rounded-2xl rounded-tr-none text-xs">
            <div className="flex gap-1 h-4 items-center">
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
          className="flex gap-3 justify-end"
        >
          <div className="bg-gradient-to-br from-purple-600 to-fuchsia-600 p-3 rounded-2xl rounded-tr-none shadow-lg shadow-purple-200 text-xs text-white">
            Yes! It just arrived. Reserved one for you.
          </div>
          <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 shadow-sm border border-purple-200">
            <Sparkles size={14} className="fill-purple-600" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const CommerceDemo = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-100, 100], [10, -10]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-10, 10]), {
    stiffness: 150,
    damping: 20,
  });

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <div
      className="relative flex-1 bg-gray-50 p-6 flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(236,72,153,0.05),transparent_70%)]"></div>
      <motion.div
        style={{ rotateX, rotateY, z: 100 }}
        className="relative w-52 bg-white rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-200 p-3 perspective-[1000px] cursor-pointer"
      >
        <div className="absolute top-3 left-3 z-20">
          <span className="bg-black/80 backdrop-blur-md text-white text-[9px] font-bold px-2 py-1 rounded-md border border-white/20">
            New Arrival
          </span>
        </div>
        <div className="h-full w-full bg-gradient-to-b from-gray-100 to-gray-50 rounded-xl mb-3 flex items-center justify-center relative overflow-hidden group/item">
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
            alt="Product"
            className="h-full w-full object-cover rounded-lg shadow-md z-10"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/60 to-transparent w-[200%] h-full -translate-x-full group-hover/item:animate-shimmer"></div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-start">
            <div className="h-3 bg-gray-800 rounded w-1/2"></div>
            <div className="h-3 bg-pink-100 rounded w-8"></div>
          </div>
          <div className="h-2 bg-gray-100 rounded w-3/4"></div>
          <div className="pt-2 flex justify-between items-center">
            <div className="flex -space-x-1">
              <div className="w-4 h-4 rounded-full bg-blue-400 border border-white"></div>
              <div className="w-4 h-4 rounded-full bg-purple-400 border border-white"></div>
            </div>
            <div className="px-2 py-0.5 bg-green-50 text-green-700 text-[9px] font-bold rounded-full border border-green-100">
              Stock: 12
            </div>
          </div>
        </div>
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-6 bottom-8 bg-white border border-gray-100 p-2 rounded-xl shadow-lg flex items-center gap-2"
        >
          <div className="bg-blue-50 p-1.5 rounded-lg">
            <Globe size={12} className="text-blue-600" />
          </div>
          <div>
            <div className="text-[9px] font-bold text-gray-800">Synced</div>
            <div className="text-[8px] text-gray-400">Amazon + ONDC</div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

const AnalyticsDemo = () => {
  return (
    <div className="relative flex-1 bg-[#1E1B24] p-6 flex items-center justify-center overflow-hidden group">
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:16px_16px]"></div>
      <div className="absolute top-[-50%] left-[-50%] w-full h-full bg-purple-500/20 blur-[80px]"></div>
      <div className="w-full max-w-[260px] relative z-10">
        <div className="flex justify-between items-end mb-6">
          <div>
            <div className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold mb-1">
              Projected Revenue
            </div>
            <div className="text-3xl font-bold text-white flex items-center gap-2">
              $124.5k
              <span className="flex items-center text-xs font-bold text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded border border-emerald-400/20">
                <TrendingUp size={12} className="mr-1" /> +14%
              </span>
            </div>
          </div>
          <Zap
            size={16}
            className="text-yellow-400 fill-yellow-400 animate-pulse"
          />
        </div>
        <div className="h-32 flex items-end justify-between gap-2">
          {[35, 55, 45, 70, 60, 85, 100].map((h, i) => (
            <div
              key={i}
              className="relative w-full h-full flex items-end group/bar"
            >
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: `${h}%` }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: "circOut" }}
                className={`w-full rounded-t-sm relative ${
                  i === 6
                    ? "bg-gradient-to-t from-purple-600 to-pink-500"
                    : "bg-gray-700 group-hover/bar:bg-gray-600 transition-colors"
                }`}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-2 px-1">
          {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
            <span key={i} className="text-[10px] text-gray-500 font-medium">
              {day}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductTrio;
