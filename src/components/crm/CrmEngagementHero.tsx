import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Star,
  CheckCircle2,
  TrendingUp,
  Users,
  Zap,
  MessageCircle,
  BarChart3,
} from "lucide-react";

const CrmEngagementHero: React.FC = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-slate-50 via-white to-purple-50/20 overflow-hidden flex items-center justify-center py-8 sm:py-12 md:py-16 lg:py-2">
      {/* Styles moved to index.css - see: animate-fade-up, animate-float-crm, scrolling-text-container, scrolling-text-inner, delay-* */}

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02] hidden sm:block"
          style={{
            backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        {/* Gradient Orbs */}
        <div className="absolute top-0 right-0 w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] bg-purple-200/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[350px] md:h-[350px] bg-pink-200/15 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
          {/* === LEFT COLUMN: Text Content === */}
          <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 text-left">
            {/* Heading */}
            <h1 className="animate-fade-up delay-100 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight sm:leading-tight">
              Turn Every {/* ANIMATED TEXT CONTAINER */}
              <div className="scrolling-text-container relative inline-block">
                <div className="scrolling-text-inner flex flex-col text-left">
                  {/* Word 1 */}
                  <span className="block h-[1.15em] sm:h-[1.1em] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-400 text-transparent bg-clip-text">
                    Conversation
                  </span>
                  {/* Word 2 */}
                  <span className="block h-[1.15em] sm:h-[1.1em] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-400 text-transparent bg-clip-text">
                    Interaction
                  </span>
                  {/* Word 3 */}
                  <span className="block h-[1.15em] sm:h-[1.1em] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-400 text-transparent bg-clip-text">
                    Opportunity
                  </span>
                  {/* Word 4 (Duplicate of 1 for loop) */}
                  <span className="block h-[1.15em] sm:h-[1.1em] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-400 text-transparent bg-clip-text">
                    Conversation
                  </span>
                </div>

                {/* Underline Decoration (Attached to container) */}
                <svg
                  className="absolute w-full h-2 sm:h-2.5 -bottom-0.5 sm:-bottom-1 left-0 text-purple-200 -z-10"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 5 Q 50 10 100 5"
                    stroke="currentColor"
                    strokeWidth="5"
                    className="sm:stroke-[6]"
                    fill="none"
                  />
                </svg>
              </div>
              <br />
              Into Revenue
            </h1>

            {/* Paragraph */}
            <p className="animate-fade-up delay-200 text-sm sm:text-base md:text-lg text-slate-600 max-w-xl leading-relaxed">
              A central intelligence system for sales, customers, and growth.
              Manage customers, streamline sales operations, automate
              follow-ups, and gain deep business insights—across teams,
              departments, and regions.
            </p>

            {/* Key Metrics */}
            <div className="animate-fade-up delay-300 flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
              <div className="flex items-center gap-2 sm:gap-2.5">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                  <TrendingUp
                    size={14}
                    className="sm:w-4 sm:h-4 text-green-600"
                  />
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-semibold text-slate-900">
                    +140%
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-500 font-normal">
                    Revenue Growth
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-2.5">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <MessageCircle
                    size={14}
                    className="sm:w-4 sm:h-4 text-purple-600"
                  />
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-semibold text-slate-900">
                    3.2x
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-500 font-normal">
                    Response Rate
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-2.5">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-indigo-100 flex items-center justify-center flex-shrink-0">
                  <BarChart3
                    size={14}
                    className="sm:w-4 sm:h-4 text-indigo-600"
                  />
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-semibold text-slate-900">
                    85%
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-500 font-normal">
                    Time Saved
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="animate-fade-up delay-400 flex flex-col sm:flex-row items-stretch sm:items-start gap-2.5 sm:gap-3 pt-1">
              <Link to="/products/crm" className="group relative bg-gradient-to-r from-purple-600 to-pink-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl hover:shadow-purple-500/20 flex items-center justify-center gap-2 text-sm sm:text-base hover:-translate-y-0.5 w-full sm:w-auto">
                <span>Get Started</span>
                <ArrowUpRight
                  size={14}
                  className="sm:w-4 sm:h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
                <div className="absolute inset-0 rounded-lg bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>
              <Link to="/products/crm" className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium text-slate-700 hover:text-slate-900 border border-slate-200 hover:border-slate-300 transition-all flex items-center justify-center gap-2 text-sm sm:text-base w-full sm:w-auto">
                Watch Demo
              </Link>
            </div>

            {/* Social Proof */}
            <div className="animate-fade-up delay-500 flex items-center gap-2.5 sm:gap-3 pt-2 sm:pt-3">
              <div className="flex -space-x-2 sm:-space-x-2.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white bg-gray-300 overflow-hidden shadow-sm"
                  >
                    <img
                      src={`https://i.pravatar.cc/100?img=${i + 10}`}
                      alt="user"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-0.5 sm:gap-1">
                  <div className="flex text-yellow-500">
                    <Star
                      size={12}
                      className="sm:w-3.5 sm:h-3.5 fill-current"
                    />
                    <Star
                      size={12}
                      className="sm:w-3.5 sm:h-3.5 fill-current"
                    />
                    <Star
                      size={12}
                      className="sm:w-3.5 sm:h-3.5 fill-current"
                    />
                    <Star
                      size={12}
                      className="sm:w-3.5 sm:h-3.5 fill-current"
                    />
                    <Star
                      size={12}
                      className="sm:w-3.5 sm:h-3.5 fill-current"
                    />
                  </div>
                  <span className="text-[10px] sm:text-xs font-semibold text-slate-900 ml-0.5 sm:ml-1">
                    4.9/5
                  </span>
                </div>
                <span className="text-[9px] sm:text-[10px] md:text-xs font-medium text-slate-600">
                  Trusted by 15,000+ businesses
                </span>
              </div>
            </div>
          </div>

          {/* === RIGHT COLUMN: Image & Floating Cards === */}
          <div className="relative h-[300px] sm:h-[350px] md:h-[420px] lg:h-[480px] xl:h-[520px] w-full flex items-center justify-center lg:justify-end mt-4 sm:mt-6 lg:mt-0">
            {/* Main Hero Image */}
            <div className="relative z-10 w-[85%] sm:w-[80%] md:w-[75%] lg:w-[85%] max-w-md animate-fade-up">
              {/* Abstract Blob Background */}
              <div className="absolute top-6 sm:top-8 left-0 w-full h-full bg-gradient-to-br from-purple-200/50 via-pink-200/50 to-indigo-200/50 rounded-full blur-3xl -z-10"></div>

              <div className="relative rounded-xl sm:rounded-2xl shadow-xl overflow-hidden border-2 border-white">
                <img
                  src="https://img.freepik.com/premium-photo/happy-woman-png-mockup-pink-turtleneck_53876-1043839.jpg"
                  alt="Business Professional"
                  className="object-cover w-full h-auto"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/15 to-transparent"></div>
              </div>
            </div>

            {/* Floating Element 1: Revenue Growth (Top Right) */}
            <div className="absolute top-4 sm:top-6 right-0 lg:-right-4 bg-white/95 backdrop-blur-md p-2 sm:p-2.5 pr-2.5 sm:pr-3 rounded-lg sm:rounded-xl shadow-lg border border-slate-200 flex items-center gap-2 sm:gap-2.5 z-20 animate-float">
              <div className="bg-gradient-to-br from-green-400 to-emerald-500 p-1.5 sm:p-2 rounded-lg text-white shadow-md flex-shrink-0">
                <TrendingUp size={12} className="sm:w-4 sm:h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-[9px] sm:text-[10px] text-slate-500 font-normal">
                  Revenue Growth
                </div>
                <div className="text-base sm:text-lg font-semibold text-slate-900">
                  +140%
                </div>
              </div>
            </div>

            {/* Floating Element 2: Active Customers (Left Center) */}
            <div
              className="absolute top-1/2 left-0 lg:left-4 bg-white/95 backdrop-blur-md p-2.5 sm:p-3 rounded-lg sm:rounded-xl shadow-lg border border-slate-200 z-20 w-36 sm:w-40 animate-float"
              style={{ animationDelay: "1s" }}
            >
              <div className="flex items-center gap-2 sm:gap-2.5 mb-1 sm:mb-1.5">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-1.5 rounded-lg text-white shadow-md flex-shrink-0">
                  <Users size={12} className="sm:w-4 sm:h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[9px] sm:text-[10px] text-slate-500 font-normal">
                    Active Customers
                  </div>
                  <div className="text-lg sm:text-xl font-semibold text-slate-900">
                    14.2K
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1 text-[9px] sm:text-[10px] text-emerald-600 font-medium">
                <TrendingUp size={9} className="sm:w-2.5 sm:h-2.5" />
                <span className="truncate">+12% this month</span>
              </div>
            </div>

            {/* Floating Element 3: AI Automation (Bottom Right) */}
            <div
              className="absolute bottom-4 sm:bottom-6 right-2 lg:right-0 bg-white/95 backdrop-blur-md p-2.5 sm:p-3 rounded-lg sm:rounded-xl shadow-lg border border-slate-200 z-20 w-40 sm:w-44 animate-float"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="flex justify-between items-start mb-1 sm:mb-1.5">
                <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-1.5 sm:p-2 rounded-lg text-white shadow-md flex-shrink-0">
                  <Zap size={12} className="sm:w-4 sm:h-4" />
                </div>
                <CheckCircle2
                  size={12}
                  className="sm:w-3.5 sm:h-3.5 text-emerald-500 flex-shrink-0"
                />
              </div>
              <h4 className="font-semibold text-slate-900 text-[10px] sm:text-xs mb-0.5">
                AI Auto-Response
              </h4>
              <p className="text-[9px] sm:text-[10px] text-slate-600 leading-relaxed">
                98% of queries answered instantly
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrmEngagementHero;
