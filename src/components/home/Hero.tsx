/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Play,
  Globe,
  TrendingUp,
  ShoppingBag,
  Menu,
  ArrowUpRight,
  Search,
  Bell,
  CheckCircle2,
  Zap,
  Shield,
  Users,
} from "lucide-react";

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // --- MOUSE TRACKING HANDLER (Optimized for performance) ---
  const handleMouseMove = (e: {
    currentTarget: { getBoundingClientRect: () => any };
    clientX: number;
    clientY: number;
  }) => {
    // Only update state if the container is available
    const rect = e.currentTarget.getBoundingClientRect();
    if (rect) {
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  // Bikayi Design System Colors
  const bikayiColors = {
    primary: "#4B1583", // Primary Purple
    primaryLight: "#731DCF", // Light Purple
    textPrimary: "#212529", // Primary Text
    textSecondary: "#616161", // Secondary Text
    accentYellow: "#FFC700", // Accent Yellow
  };

  const slides = [
    {
      id: 0,
      leftWord: "Enterprise CRM",
      leftColor: bikayiColors.primary,
      bgWord: "CRM",
      visual: "phone",
      caption:
        "A central intelligence system for sales, customers, and growth. Manage customers, streamline sales operations, automate follow-ups, and gain deep business insights.",
    },
    {
      id: 1,
      leftWord: "AI Automation",
      leftColor: bikayiColors.primaryLight,
      bgWord: "AUTOMATE",
      visual: "laptop",
      caption:
        "Intelligent AI agents powering modern enterprises end-to-end. From customer interactions to backend workflows, execute, analyze, and optimize business processes at scale.",
    },
  ];

  // Auto-rotate every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      // Attach Mouse Move Listener here
      onMouseMove={handleMouseMove}
      // Bikayi Design: Full height hero section
      className=" w-full bg-white overflow-hidden relative flex flex-col justify-center group hero-container-font"
    >
      {/* 3. THE GLOWING CURSOR BALL (Bikayi Purple) */}
      <div
        className="absolute pointer-events-none h-[300px] w-[300px] rounded-full blur-[80px] transition-transform duration-75 ease-out z-0 hidden lg:block cursor-glow-bikayi"
        style={{
          left: mousePos.x,
          top: mousePos.y,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* ========================================================
          MAIN CONTENT (Bikayi Design System)
      ======================================================== */}
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 w-full flex items-start lg:items-center relative z-10 pb-4 sm:pb-6 lg:pb-2">
        <div className="grid grid-cols-1 lg:grid-cols-12 w-full gap-6 sm:gap-8 lg:gap-16 items-center">
          {/* === LEFT CONTENT (Text) - Bikayi Typography === */}
          <div className="col-span-1 lg:col-span-6 flex flex-col justify-start lg:justify-center order-1 lg:order-1">
            {/* Main Headline - Bikayi Style: Work Sans, 54px, Bold */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold leading-[1.1] sm:leading-[1.1] md:leading-[1.15] lg:leading-[64px] tracking-tight mb-3 sm:mb-4 lg:mb-6 hero-heading-bikayi">
              <span className="block leading-tight">Transform Your</span>
              <span className="block leading-tight">Business with</span>
              <span className="relative inline-flex flex-col min-h-[1.25em] h-[1.25em] sm:h-[1.15em] md:h-[1.1em] lg:h-[1.1em] overflow-visible sm:overflow-hidden align-top transition-all duration-500 ease-in-out leading-tight">
                {/* Invisible Ghost Word to set Width */}
                <span className="opacity-0 invisible whitespace-nowrap pointer-events-none leading-tight">
                  {slides[activeSlide].leftWord}
                </span>

                {/* Animated Slides */}
                {slides.map((slide, idx) => (
                  <span
                    key={slide.id}
                    className={`absolute left-0 top-0 whitespace-nowrap transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] leading-tight ${
                      idx === activeSlide
                        ? "translate-y-0 opacity-100"
                        : "translate-y-[120%] opacity-0"
                    }`}
                    style={{
                      background:
                        "linear-gradient(to right, #9333ea, #ec4899, #9333ea)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {slide.leftWord}
                  </span>
                ))}
              </span>
            </h1>

            {/* Description - Bikayi Style: Inter, 16px, Secondary Text */}
            <p className="text-sm sm:text-base md:text-lg max-w-xl leading-relaxed sm:leading-6 mb-4 sm:mb-6 lg:mb-4 hero-description-bikayi">
              {slides[activeSlide].caption}
            </p>

            {/* CTA Buttons - Bikayi Design System */}
            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 items-stretch sm:items-center mb-6 sm:mb-8">
              {/* Primary Button - Bikayi Style */}
              <Link
                to="/products/crm"
                className="group relative px-4 sm:px-5 py-2.5 sm:py-3 rounded font-semibold text-sm sm:text-base text-white transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2 overflow-hidden border bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 transition-all duration-300 group-hover:scale-110"
              >
                <span className="relative z-10">SCHEDULE A CALL</span>
                <ArrowUpRight className="w-4 h-4 relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              {/* Secondary Button - Bikayi Style */}
              <Link
                to="/products/crm"
                className="px-4 sm:px-5 py-2.5 sm:py-3 bg-white rounded font-semibold text-sm sm:text-base transition-all flex items-center justify-center gap-2 border btn-bikayi-secondary"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>GET STARTED</span>
              </Link>
            </div>

            {/* Social Proof Stats - Bikayi Style */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4 sm:pt-6 border-t stats-border-bikayi">
              <div className="flex items-center gap-2 sm:gap-2.5">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      src={`https://i.pravatar.cc/100?img=${i + 20}`}
                      alt="User"
                      className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white shadow-sm"
                    />
                  ))}
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold stats-text-primary">
                    15K+
                  </div>
                  <div className="text-[9px] sm:text-[10px] stats-text-secondary">
                    Global Brands
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center stats-icon-bg">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 stats-icon-color" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold stats-text-primary">
                    120%
                  </div>
                  <div className="text-[9px] sm:text-[10px] stats-text-secondary">
                    Sales Increased
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center stats-icon-bg">
                  <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 stats-icon-color" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold stats-text-primary">
                    100%
                  </div>
                  <div className="text-[9px] sm:text-[10px] stats-text-secondary">
                    Revenue Increased
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* === RIGHT CONTENT (Visuals + Features) === */}
          <div className="col-span-1 lg:col-span-6 relative h-[350px] sm:h-[450px] md:h-[500px] lg:h-[600px] flex flex-col items-center justify-center order-2 perspective-2000px lg:order-2 overflow-hidden">
            {/* Background Large Text - Bikayi Style */}
            <div className="absolute right-0 lg:-right-10 top-1/2 -translate-y-1/2 text-right z-0 select-none pointer-events-none w-full overflow-hidden sm:overflow-visible">
              {slides.map((slide, index) => (
                <h2
                  key={slide.id}
                  className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tighter transition-all duration-700 absolute right-0 sm:right-0 md:right-0 lg:-right-10 top-1/2 -translate-y-1/2 whitespace-nowrap bg-text-bikayi ${
                    index === activeSlide
                      ? "opacity-100 translate-x-0 scale-100 bg-text-bikayi-active"
                      : "opacity-0 translate-x-10 scale-90 bg-text-bikayi-inactive"
                  }`}
                >
                  {slide.bgWord}
                </h2>
              ))}
            </div>

            {/* 3D Visual Stage (Optimized scale) */}
            <div className="relative w-full h-full z-10 flex items-center justify-center preserve-3d transform scale-[0.65] sm:scale-[0.75] md:scale-[0.85] lg:scale-100 origin-center">
              {slides.map((slide, index) => {
                const isActive = index === activeSlide;
                // Simplified 3D transform for a cleaner mobile experience
                const transformStyles = isActive
                  ? "opacity-100 translate-x-0 rotate-y-0 scale-100 z-20"
                  : "opacity-0 translate-x-32 rotate-y-neg15deg scale-90 z-0 grayscale";

                return (
                  <div
                    key={slide.id}
                    className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${transformStyles}`}
                  >
                    {/* Visual Containers - Adjusted sizes for better fit */}
                    {slide.visual === "phone" && (
                      <div className="w-[240px] sm:w-[260px] md:w-[280px] h-[380px] sm:h-[420px] md:h-[450px] bg-gray-900 rounded-[2rem] p-2 sm:p-2.5 shadow-2xl ring-1 ring-black/5 animate-float-hero phone-mockup-shadow">
                        <div className="w-full h-full bg-white rounded-[1.75rem] overflow-hidden flex flex-col relative">
                          {/* Phone Header - Theme Gradient */}
                          <div className="h-12 sm:h-14 md:h-16 p-2 sm:p-2.5 md:p-3 flex items-end justify-between text-white z-10 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600">
                            <div className="flex items-center gap-1.5 sm:gap-2">
                              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/20 flex items-center justify-center text-[10px] sm:text-xs font-bold">
                                AI
                              </div>
                              <div>
                                <div className="font-bold text-xs sm:text-sm">
                                  Support Agent
                                </div>
                                <div className="text-[9px] sm:text-[10px] flex items-center gap-1 phone-online-text">
                                  <span className="w-1 h-1 rounded-full bg-green-400"></span>{" "}
                                  Online
                                </div>
                              </div>
                            </div>
                            <Menu
                              size={14}
                              className="sm:w-4 sm:h-4 text-white/80"
                            />
                          </div>
                          <div className="flex-1 bg-slate-50 p-2.5 sm:p-3 md:p-4 space-y-2.5 sm:space-y-3 md:space-y-4 pt-3 sm:pt-4 md:pt-6 overflow-hidden flex flex-col">
                            {/* User Chat */}
                            <div className="self-start max-w-[85%] animate-slide-in">
                              <div className="bg-white p-2 sm:p-2.5 rounded-xl rounded-tl-none shadow-sm border border-gray-100 text-[10px] sm:text-xs text-gray-700">
                                Hi! I'm looking for running shoes under $150. 👟
                              </div>
                              <div className="text-[8px] sm:text-[9px] text-gray-400 mt-0.5 ml-1">
                                10:23 AM
                              </div>
                            </div>
                            {/* AI Reply */}
                            <div className="self-end max-w-[85%] animate-slide-in animation-delay-200">
                              <div className="p-2 sm:p-2.5 rounded-xl rounded-tr-none shadow-md text-[10px] sm:text-xs text-white bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600">
                                I found these top-rated options for you!
                              </div>
                            </div>
                            {/* Product Card */}
                            <div className="self-end max-w-[85%] animate-slide-in animation-delay-400">
                              <div className="bg-white p-2 sm:p-2.5 md:p-3 rounded-xl rounded-tr-none shadow-md border border-gray-100">
                                <div className="w-full h-20 sm:h-22 md:h-24 bg-gray-100 rounded-lg mb-1 overflow-hidden relative">
                                  <img
                                    src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                                    alt="Shoe"
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <div className="font-bold text-gray-800 text-xs sm:text-sm">
                                  Nike Air Zoom
                                </div>
                                <div className="text-gray-500 text-[10px] sm:text-xs mb-1">
                                  Men's Running Shoe
                                </div>
                                <button className="w-full py-0.5 sm:py-1 bg-gray-900 text-white text-[10px] sm:text-xs font-bold rounded">
                                  Buy Now - $120
                                </button>
                              </div>
                              <div className="text-[8px] sm:text-[9px] text-gray-400 mt-0.5 text-right">
                                Just now
                              </div>
                            </div>
                          </div>
                          <div className="p-2 sm:p-2.5 md:p-3 bg-white border-t border-gray-100">
                            <div className="h-7 sm:h-8 bg-gray-100 rounded-full flex items-center px-3 sm:px-4 text-[10px] sm:text-xs text-gray-400">
                              Type a message...
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {slide.visual === "laptop" && (
                      <div className="w-[320px] sm:w-[380px] md:w-[420px] lg:w-[450px] h-[280px] sm:h-[320px] md:h-[360px] lg:h-[400px] bg-gray-800 rounded-xl p-1.5 sm:p-2 shadow-2xl ring-1 ring-black/5 animate-float-hero relative laptop-mockup-shadow">
                        <div className="w-full h-full bg-gray-50 rounded-lg overflow-hidden flex flex-col">
                          {/* Laptop Browser Bar */}
                          <div className="h-5 sm:h-6 bg-white border-b flex items-center px-2 sm:px-3 gap-1 sm:gap-1.5">
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-400" />
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-yellow-400" />
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-400" />
                            <div className="ml-2 sm:ml-4 flex-1 max-w-[120px] sm:max-w-[150px] h-3 sm:h-3.5 bg-gray-100 rounded text-[7px] sm:text-[8px] flex items-center px-1.5 sm:px-2 text-gray-400">
                              store.bikayi.com/dashboard
                            </div>
                          </div>
                          <div className="flex-1 flex overflow-hidden">
                            <div className="w-10 sm:w-12 bg-white border-r border-gray-200 flex flex-col items-center py-2 sm:py-3 gap-2 sm:gap-3">
                              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center text-white bg-gradient-to-br from-purple-600 to-pink-500">
                                <Globe
                                  size={12}
                                  className="sm:w-3.5 sm:h-3.5"
                                />
                              </div>
                              <div className="w-6 h-6 sm:w-7 sm:h-7 hover:bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                                <ShoppingBag
                                  size={12}
                                  className="sm:w-3.5 sm:h-3.5"
                                />
                              </div>
                              <div className="w-6 h-6 sm:w-7 sm:h-7 hover:bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                                <TrendingUp
                                  size={12}
                                  className="sm:w-3.5 sm:h-3.5"
                                />
                              </div>
                            </div>
                            <div className="flex-1 p-2 sm:p-3 md:p-4 overflow-hidden">
                              <div className="flex justify-between items-center mb-2 sm:mb-3">
                                <h3 className="font-bold text-gray-800 text-sm sm:text-base">
                                  Overview
                                </h3>
                                <div className="flex gap-1.5 sm:gap-2">
                                  <span className="p-0.5 sm:p-1 bg-white border rounded text-gray-400">
                                    <Search
                                      size={10}
                                      className="sm:w-3 sm:h-3"
                                    />
                                  </span>
                                  <span className="p-0.5 sm:p-1 bg-white border rounded text-gray-400">
                                    <Bell size={10} className="sm:w-3 sm:h-3" />
                                  </span>
                                </div>
                              </div>
                              <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-3 sm:mb-4">
                                <div className="bg-white p-2 sm:p-2.5 md:p-3 rounded-xl border border-gray-200 shadow-sm">
                                  <div className="text-[10px] sm:text-xs text-gray-500 mb-0.5">
                                    Total Sales
                                  </div>
                                  <div className="text-sm sm:text-base font-bold text-gray-900">
                                    $12,405
                                  </div>
                                  <div className="text-[8px] sm:text-[9px] text-green-500 font-bold">
                                    +12% this week
                                  </div>
                                </div>
                                <div className="bg-white p-2 sm:p-2.5 md:p-3 rounded-xl border border-gray-200 shadow-sm">
                                  <div className="text-[10px] sm:text-xs text-gray-500 mb-0.5">
                                    Active Orders
                                  </div>
                                  <div className="text-sm sm:text-base font-bold text-gray-900">
                                    45
                                  </div>
                                  <div className="text-[8px] sm:text-[9px] text-blue-500 font-bold">
                                    5 pending
                                  </div>
                                </div>
                              </div>
                              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-2 sm:p-2.5 md:p-3">
                                <div className="text-[10px] sm:text-xs font-bold text-gray-700 mb-1.5 sm:mb-2">
                                  Recent Activity
                                </div>
                                <div className="space-y-1">
                                  {/* Activity 1 */}
                                  <div className="flex items-center gap-1.5 sm:gap-2 py-0.5 border-b border-gray-50/50 pb-1 sm:pb-1.5">
                                    <img
                                      src="https://i.pravatar.cc/100?img=1"
                                      className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-gray-200"
                                      alt="User 1"
                                    />
                                    <div className="flex-1 min-w-0">
                                      <div className="text-[10px] sm:text-xs font-semibold text-gray-800 truncate">
                                        Sarah Jenkins
                                      </div>
                                      <div className="text-[8px] sm:text-[9px] text-gray-400 truncate">
                                        Purchased Nike Air
                                      </div>
                                    </div>
                                    <div className="text-[10px] sm:text-xs font-bold text-green-600 flex-shrink-0">
                                      +$120
                                    </div>
                                  </div>
                                  {/* Activity 2 */}
                                  <div className="flex items-center gap-1.5 sm:gap-2 py-0.5">
                                    <img
                                      src="https://i.pravatar.cc/100?img=3"
                                      className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-gray-200"
                                      alt="User 2"
                                    />
                                    <div className="flex-1 min-w-0">
                                      <div className="text-[10px] sm:text-xs font-semibold text-gray-800 truncate">
                                        Mike Ross
                                      </div>
                                      <div className="text-[8px] sm:text-[9px] text-gray-400 truncate">
                                        Purchased Hoodie
                                      </div>
                                    </div>
                                    <div className="text-[10px] sm:text-xs font-bold text-green-600 flex-shrink-0">
                                      +$85
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {slide.visual === "graph" && (
                      <div className="w-[280px] sm:w-[340px] md:w-[380px] lg:w-[400px] h-[360px] sm:h-[420px] md:h-[460px] lg:h-[500px] relative flex items-center justify-center animate-float-hero">
                        <div className="w-full bg-white/90 backdrop-blur-md rounded-2xl border border-white/50 p-3 sm:p-4 z-10 relative graph-card-shadow">
                          {/* Graph Header */}
                          <div className="flex justify-between items-center mb-3 sm:mb-4">
                            <div>
                              <div className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider graph-text-secondary">
                                Total Revenue
                              </div>
                              <div className="text-xl sm:text-2xl font-black mt-0.5 graph-text-primary">
                                $142,300
                              </div>
                            </div>
                            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center graph-icon-container">
                              <TrendingUp size={14} className="sm:w-4 sm:h-4" />
                            </div>
                          </div>
                          <div className="flex items-end justify-between h-24 sm:h-28 gap-1.5 sm:gap-2">
                            {[35, 60, 45, 85, 50, 95, 75].map((h, i) => (
                              <div
                                key={i}
                                className="w-full bg-gray-50 rounded-t-md relative h-full flex items-end overflow-hidden group"
                              >
                                <div
                                  style={{ height: `${h}%` }}
                                  className={`w-full rounded-t-md transition-all duration-1000 ease-out group-hover:opacity-80 ${
                                    i === 6
                                      ? "graph-bar-active"
                                      : "graph-bar-inactive"
                                  }`}
                                />
                              </div>
                            ))}
                          </div>
                          <div className="flex justify-between mt-2 sm:mt-3 text-[8px] sm:text-[9px] text-gray-400 font-medium px-0.5 sm:px-1 uppercase tracking-wide">
                            <span>Mon</span>
                            <span>Tue</span>
                            <span>Wed</span>
                            <span>Thu</span>
                            <span>Fri</span>
                            <span>Sat</span>
                            <span>Sun</span>
                          </div>
                        </div>
                        {/* Floating elements reduced in size */}
                        <div className="absolute -right-2 sm:-right-4 top-8 sm:top-10 bg-white p-1.5 sm:p-2 rounded-xl shadow-xl border border-gray-100 flex gap-1.5 sm:gap-2 z-20 animate-bounce-slow">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold text-[10px] sm:text-xs">
                            ADS
                          </div>
                          <div>
                            <div className="text-[8px] sm:text-[9px] text-gray-400 font-bold uppercase">
                              ROAS
                            </div>
                            <div className="text-xs sm:text-sm font-bold text-gray-800">
                              4.2x
                            </div>
                          </div>
                        </div>
                        <div className="absolute -left-2 sm:-left-4 bottom-6 sm:bottom-8 bg-gray-900 text-white p-1.5 sm:p-2 rounded-xl shadow-xl flex gap-1.5 sm:gap-2 z-20 animate-bounce-slow animation-delay-500">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-800 rounded-full flex items-center justify-center">
                            <ArrowUpRight
                              size={12}
                              className="sm:w-4 sm:h-4 text-green-400"
                            />
                          </div>
                          <div>
                            <div className="text-[8px] sm:text-[9px] text-gray-400 font-bold uppercase">
                              Traffic
                            </div>
                            <div className="text-xs sm:text-sm font-bold">
                              +12.5%
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mobile Features - Bikayi Style */}
            <div className="lg:hidden mt-4 sm:mt-5 w-full px-2 sm:px-4">
              <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
                <div className="flex flex-col items-center gap-1.5 sm:gap-2 p-2 sm:p-3 bg-white/90 backdrop-blur-sm rounded-xl border shadow-md mobile-feature-card">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center shadow-sm mobile-feature-icon-bg">
                    <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 mobile-feature-icon-color" />
                  </div>
                  <div className="text-center">
                    <div className="text-[10px] sm:text-[11px] font-bold mobile-feature-text-primary">
                      AI-Powered
                    </div>
                    <div className="text-[9px] sm:text-[10px] mobile-feature-text-secondary">
                      Automation
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-1.5 sm:gap-2 p-2 sm:p-3 bg-white/90 backdrop-blur-sm rounded-xl border shadow-md mobile-feature-card">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center shadow-sm mobile-feature-icon-bg">
                    <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 mobile-feature-icon-color" />
                  </div>
                  <div className="text-center">
                    <div className="text-[10px] sm:text-[11px] font-bold mobile-feature-text-primary">
                      Secure
                    </div>
                    <div className="text-[9px] sm:text-[10px] mobile-feature-text-secondary">
                      Enterprise
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-1.5 sm:gap-2 p-2 sm:p-3 bg-white/90 backdrop-blur-sm rounded-xl border shadow-md mobile-feature-card">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center shadow-sm mobile-feature-icon-bg">
                    <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 mobile-feature-icon-color" />
                  </div>
                  <div className="text-center">
                    <div className="text-[10px] sm:text-[11px] font-bold mobile-feature-text-primary">
                      15K+ Brands
                    </div>
                    <div className="text-[9px] sm:text-[10px] mobile-feature-text-secondary">
                      Trusted
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
