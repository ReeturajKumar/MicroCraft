/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
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
      leftWord: "Sales",
      leftColor: bikayiColors.primary,
      bgWord: "CONVERT",
      visual: "phone",
      caption:
        "Turn conversations into revenue. AI drafts emails, scores leads, and closes deals while you sleep.",
    },
    {
      id: 1,
      leftWord: "Commerce",
      leftColor: bikayiColors.primaryLight,
      bgWord: "ORDERS",
      visual: "laptop",
      caption:
        "Launch storefronts in seconds. Sync inventory across ONDC, Amazon, and your website instantly.",
    },
    {
      id: 2,
      leftWord: "Analytics",
      leftColor: bikayiColors.primary,
      bgWord: "CAPTURE",
      visual: "graph",
      caption:
        "Make data-driven decisions. Track performance across all channels and optimize for growth.",
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
      <div className="flex-1 max-w-7xl mx-auto sm:px-10 w-full flex items-start lg:items-center relative z-10  pb-2 lg:pb-2">
        <div className="grid grid-cols-1 lg:grid-cols-12 w-full gap-8 lg:gap-16 items-center">
          {/* === LEFT CONTENT (Text) - Bikayi Typography === */}
          <div className="col-span-1 lg:col-span-6 flex flex-col justify-start lg:justify-center order-1 lg:order-1">
            {/* Main Headline - Bikayi Style: Work Sans, 54px, Bold */}
            <h1 className="text-4xl sm:text-5xl lg:text-[48px] font-bold leading-[64px] tracking-tight mb-4 lg:mb-6 hero-heading-bikayi">
              Transform Your Business with One Unified{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600">
                Platform{" "}
              </span>
              for {/* DYNAMIC WIDTH CONTAINER */}
              <span className="relative inline-flex flex-col h-[1.1em] overflow-hidden align-top transition-all duration-500 ease-in-out">
                {/* Invisible Ghost Word to set Width */}
                <span className="opacity-0 invisible whitespace-nowrap pointer-events-none">
                  {slides[activeSlide].leftWord}
                </span>

                {/* Animated Slides */}
                {slides.map((slide, idx) => (
                  <span
                    key={slide.id}
                    className={`absolute left-0 top-0 whitespace-nowrap transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
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
              </span>{" "}
              Excellence
            </h1>

            {/* Description - Bikayi Style: Inter, 16px, Secondary Text */}
            <p className="text-base sm:text-lg max-w-xl leading-6 mb-4 hero-description-bikayi">
              {slides[activeSlide].caption}
            </p>

            {/* CTA Buttons - Bikayi Design System */}
            <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center mb-8">
              {/* Primary Button - Bikayi Style */}
              <button className="group relative px-3 py-2 rounded font-semibold text-white transition-all hover:-translate-y-0.5 flex items-center gap-2 overflow-hidden border  bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 transition-all duration-300 group-hover:scale-110">
                <span className="relative z-10">BOOK A DEMO</span>
                <ArrowUpRight className="w-4 h-4 relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              {/* Secondary Button - Bikayi Style */}
              <button className="px-3 py-2 bg-white rounded font-semibold text-base transition-all flex items-center justify-center gap-2 border btn-bikayi-secondary">
                <Play className="w-4 h-4 fill-current" />
                <span>START A FREE TRIAL</span>
              </button>
            </div>

            {/* Social Proof Stats - Bikayi Style */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t stats-border-bikayi">
              <div className="flex items-center gap-2.5">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      src={`https://i.pravatar.cc/100?img=${i + 20}`}
                      alt="User"
                      className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                    />
                  ))}
                </div>
                <div>
                  <div className="text-sm font-bold stats-text-primary">
                    15K+
                  </div>
                  <div className="text-[10px] stats-text-secondary">
                    Global Brands
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full flex items-center justify-center stats-icon-bg">
                  <CheckCircle2 className="w-4 h-4 stats-icon-color" />
                </div>
                <div>
                  <div className="text-sm font-bold stats-text-primary">
                    120%
                  </div>
                  <div className="text-[10px] stats-text-secondary">
                    Sales Increased
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full flex items-center justify-center stats-icon-bg">
                  <TrendingUp className="w-4 h-4 stats-icon-color" />
                </div>
                <div>
                  <div className="text-sm font-bold stats-text-primary">
                    100%
                  </div>
                  <div className="text-[10px] stats-text-secondary">
                    Revenue Increased
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* === RIGHT CONTENT (Visuals + Features) === */}
          <div className="col-span-1 lg:col-span-6 relative h-[420px] sm:h-[500px] lg:h-[600px] flex flex-col items-center justify-center order-2 perspective-2000px lg:order-2">
            {/* Background Large Text - Bikayi Style */}
            <div className="absolute right-0 lg:-right-10 top-1/2 -translate-y-1/2 text-right z-0 select-none pointer-events-none w-full overflow-visible">
              {slides.map((slide, index) => (
                <h2
                  key={slide.id}
                  className={`text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tighter transition-all duration-700 absolute right-0 top-1/2 -translate-y-1/2 whitespace-nowrap bg-text-bikayi ${
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
            <div className="relative w-full h-full z-10 flex items-center justify-center preserve-3d transform scale-[0.8] sm:scale-[0.9] lg:scale-100 origin-center">
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
                      <div className="w-[280px] h-[450px] bg-gray-900 rounded-[2rem] p-2.5 shadow-2xl ring-1 ring-black/5 animate-float-hero phone-mockup-shadow">
                        <div className="w-full h-full bg-white rounded-[1.75rem] overflow-hidden flex flex-col relative">
                          {/* Phone Header - Theme Gradient */}
                          <div className="h-16 p-3 flex items-end justify-between text-white z-10 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600">
                            <div className="flex items-center gap-2">
                              <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">
                                AI
                              </div>
                              <div>
                                <div className="font-bold text-sm">
                                  Support Agent
                                </div>
                                <div className="text-[10px] flex items-center gap-1 phone-online-text">
                                  <span className="w-1 h-1 rounded-full bg-green-400"></span>{" "}
                                  Online
                                </div>
                              </div>
                            </div>
                            <Menu size={16} className="text-white/80" />
                          </div>
                          <div className="flex-1 bg-slate-50 p-4 space-y-4 pt-6 overflow-hidden flex flex-col">
                            {/* User Chat */}
                            <div className="self-start max-w-[85%] animate-slide-in">
                              <div className="bg-white p-2.5 rounded-xl rounded-tl-none shadow-sm border border-gray-100 text-xs text-gray-700">
                                Hi! I'm looking for running shoes under $150. 👟
                              </div>
                              <div className="text-[9px] text-gray-400 mt-0.5 ml-1">
                                10:23 AM
                              </div>
                            </div>
                            {/* AI Reply */}
                            <div className="self-end max-w-[85%] animate-slide-in animation-delay-200">
                              <div className="p-2.5 rounded-xl rounded-tr-none shadow-md text-xs text-white bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600">
                                I found these top-rated options for you!
                              </div>
                            </div>
                            {/* Product Card */}
                            <div className="self-end max-w-[85%] animate-slide-in animation-delay-400">
                              <div className="bg-white p-3 rounded-xl rounded-tr-none shadow-md border border-gray-100">
                                <div className="w-full h-24 bg-gray-100 rounded-lg mb-1 overflow-hidden relative">
                                  <img
                                    src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                                    alt="Shoe"
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <div className="font-bold text-gray-800 text-sm">
                                  Nike Air Zoom
                                </div>
                                <div className="text-gray-500 text-xs mb-1">
                                  Men's Running Shoe
                                </div>
                                <button className="w-full py-1 bg-gray-900 text-white text-xs font-bold rounded">
                                  Buy Now - $120
                                </button>
                              </div>
                              <div className="text-[9px] text-gray-400 mt-0.5 text-right">
                                Just now
                              </div>
                            </div>
                          </div>
                          <div className="p-3 bg-white border-t border-gray-100">
                            <div className="h-8 bg-gray-100 rounded-full flex items-center px-4 text-xs text-gray-400">
                              Type a message...
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {slide.visual === "laptop" && (
                      <div className="w-[450px] h-[400px] bg-gray-800 rounded-xl p-2 shadow-2xl ring-1 ring-black/5 animate-float-hero relative laptop-mockup-shadow">
                        <div className="w-full h-full bg-gray-50 rounded-lg overflow-hidden flex flex-col">
                          {/* Laptop Browser Bar */}
                          <div className="h-6 bg-white border-b flex items-center px-3 gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-red-400" />
                            <div className="w-2 h-2 rounded-full bg-yellow-400" />
                            <div className="w-2 h-2 rounded-full bg-green-400" />
                            <div className="ml-4 flex-1 max-w-[150px] h-3.5 bg-gray-100 rounded text-[8px] flex items-center px-2 text-gray-400">
                              store.bikayi.com/dashboard
                            </div>
                          </div>
                          <div className="flex-1 flex overflow-hidden">
                            <div className="w-12 bg-white border-r border-gray-200 flex flex-col items-center py-3 gap-3">
                              <div className="w-7 h-7 rounded-lg flex items-center justify-center text-white bg-gradient-to-br from-purple-600 to-pink-500">
                                <Globe size={14} />
                              </div>
                              <div className="w-7 h-7 hover:bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                                <ShoppingBag size={14} />
                              </div>
                              <div className="w-7 h-7 hover:bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                                <TrendingUp size={14} />
                              </div>
                            </div>
                            <div className="flex-1 p-4 overflow-hidden">
                              <div className="flex justify-between items-center mb-3">
                                <h3 className="font-bold text-gray-800 text-base">
                                  Overview
                                </h3>
                                <div className="flex gap-2">
                                  <span className="p-1 bg-white border rounded text-gray-400">
                                    <Search size={12} />
                                  </span>
                                  <span className="p-1 bg-white border rounded text-gray-400">
                                    <Bell size={12} />
                                  </span>
                                </div>
                              </div>
                              <div className="grid grid-cols-2 gap-3 mb-4">
                                <div className="bg-white p-3 rounded-xl border border-gray-200 shadow-sm">
                                  <div className="text-xs text-gray-500 mb-0.5">
                                    Total Sales
                                  </div>
                                  <div className="text-base font-bold text-gray-900">
                                    $12,405
                                  </div>
                                  <div className="text-[9px] text-green-500 font-bold">
                                    +12% this week
                                  </div>
                                </div>
                                <div className="bg-white p-3 rounded-xl border border-gray-200 shadow-sm">
                                  <div className="text-xs text-gray-500 mb-0.5">
                                    Active Orders
                                  </div>
                                  <div className="text-base font-bold text-gray-900">
                                    45
                                  </div>
                                  <div className="text-[9px] text-blue-500 font-bold">
                                    5 pending
                                  </div>
                                </div>
                              </div>
                              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-3">
                                <div className="text-xs font-bold text-gray-700 mb-2">
                                  Recent Activity
                                </div>
                                <div className="space-y-1">
                                  {/* Activity 1 */}
                                  <div className="flex items-center gap-2 py-0.5 border-b border-gray-50/50 pb-1.5">
                                    <img
                                      src="https://i.pravatar.cc/100?img=1"
                                      className="w-7 h-7 rounded-full border border-gray-200"
                                      alt="User 1"
                                    />
                                    <div className="flex-1">
                                      <div className="text-xs font-semibold text-gray-800">
                                        Sarah Jenkins
                                      </div>
                                      <div className="text-[9px] text-gray-400">
                                        Purchased Nike Air
                                      </div>
                                    </div>
                                    <div className="text-xs font-bold text-green-600">
                                      +$120.00
                                    </div>
                                  </div>
                                  {/* Activity 2 */}
                                  <div className="flex items-center gap-2 py-0.5">
                                    <img
                                      src="https://i.pravatar.cc/100?img=3"
                                      className="w-7 h-7 rounded-full border border-gray-200"
                                      alt="User 2"
                                    />
                                    <div className="flex-1">
                                      <div className="text-xs font-semibold text-gray-800">
                                        Mike Ross
                                      </div>
                                      <div className="text-[9px] text-gray-400">
                                        Purchased Hoodie
                                      </div>
                                    </div>
                                    <div className="text-xs font-bold text-green-600">
                                      +$85.00
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
                      <div className="w-[400px] h-[500px] relative flex items-center justify-center animate-float-hero">
                        <div className="w-[400px] bg-white/90 backdrop-blur-md rounded-2xl border border-white/50 p-4 z-10 relative graph-card-shadow">
                          {/* Graph Header */}
                          <div className="flex justify-between items-center mb-4">
                            <div>
                              <div className="text-[10px] font-bold uppercase tracking-wider graph-text-secondary">
                                Total Revenue
                              </div>
                              <div className="text-2xl font-black mt-0.5 graph-text-primary">
                                $142,300
                              </div>
                            </div>
                            <div className="w-8 h-8 rounded-full flex items-center justify-center graph-icon-container">
                              <TrendingUp size={16} />
                            </div>
                          </div>
                          <div className="flex items-end justify-between h-28 gap-2">
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
                          <div className="flex justify-between mt-3 text-[9px] text-gray-400 font-medium px-1 uppercase tracking-wide">
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
                        <div className="absolute -right-4 top-10 bg-white p-2 rounded-xl shadow-xl border border-gray-100 flex gap-2 z-20 animate-bounce-slow">
                          <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold text-xs">
                            ADS
                          </div>
                          <div>
                            <div className="text-[9px] text-gray-400 font-bold uppercase">
                              ROAS
                            </div>
                            <div className="text-sm font-bold text-gray-800">
                              4.2x
                            </div>
                          </div>
                        </div>
                        <div className="absolute -left-4 bottom-8 bg-gray-900 text-white p-2 rounded-xl shadow-xl flex gap-2 z-20 animate-bounce-slow animation-delay-500">
                          <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                            <ArrowUpRight
                              size={16}
                              className="text-green-400"
                            />
                          </div>
                          <div>
                            <div className="text-[9px] text-gray-400 font-bold uppercase">
                              Traffic
                            </div>
                            <div className="text-sm font-bold">+12.5%</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mobile Features - Bikayi Style */}
            <div className="lg:hidden mt-5 w-full px-2">
              <div className="grid grid-cols-3 gap-2.5">
                <div className="flex flex-col items-center gap-2 p-3 bg-white/90 backdrop-blur-sm rounded-xl border shadow-md mobile-feature-card">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center shadow-sm mobile-feature-icon-bg">
                    <Zap className="w-4 h-4 mobile-feature-icon-color" />
                  </div>
                  <div className="text-center">
                    <div className="text-[11px] font-bold mobile-feature-text-primary">
                      AI-Powered
                    </div>
                    <div className="text-[10px] mobile-feature-text-secondary">
                      Automation
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2 p-3 bg-white/90 backdrop-blur-sm rounded-xl border shadow-md mobile-feature-card">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center shadow-sm mobile-feature-icon-bg">
                    <Shield className="w-4 h-4 mobile-feature-icon-color" />
                  </div>
                  <div className="text-center">
                    <div className="text-[11px] font-bold mobile-feature-text-primary">
                      Secure
                    </div>
                    <div className="text-[10px] mobile-feature-text-secondary">
                      Enterprise
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2 p-3 bg-white/90 backdrop-blur-sm rounded-xl border shadow-md mobile-feature-card">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center shadow-sm mobile-feature-icon-bg">
                    <Users className="w-4 h-4 mobile-feature-icon-color" />
                  </div>
                  <div className="text-center">
                    <div className="text-[11px] font-bold mobile-feature-text-primary">
                      15K+ Brands
                    </div>
                    <div className="text-[10px] mobile-feature-text-secondary">
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
