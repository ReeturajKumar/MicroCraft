import React from "react";
import {
  ArrowUpRight,
  Star,
  CheckCircle2,
  TrendingUp,
  Users,
} from "lucide-react";

const CrmEngagementHero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-slate-50 overflow-hidden flex items-center justify-center py-12 lg:py-0">
      {/* INLINE STYLES FOR ANIMATIONS */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        /* NEW: Vertical Text Slide Animation */
        @keyframes textSlide {
          0%, 20% { transform: translateY(0%); }
          25%, 45% { transform: translateY(-25%); }
          50%, 70% { transform: translateY(-50%); }
          75%, 95% { transform: translateY(-75%); }
          100% { transform: translateY(-75%); }
        }

        .animate-fade-up {
          opacity: 0;
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        /* NEW: Scrolling Text Classes */
        .scrolling-text-container {
          height: 1.1em; /* Matches the line-height of H1 */
          overflow: hidden;
          display: inline-block;
          vertical-align: bottom;
          position: relative;
          padding-bottom: 0.1em; /* Slight padding for descenders */
        }
        .scrolling-text-inner {
          animation: textSlide 6s cubic-bezier(0.16, 1, 0.3, 1) infinite;
        }

        /* Delays */
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>

      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-center">
          {/* === LEFT COLUMN: Text Content === */}
          <div className="flex flex-col gap-5 text-left">
            {/* Heading */}
            <h1 className="animate-fade-up delay-100 text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1]">
              Scale Your <br />
              {/* ANIMATED TEXT CONTAINER */}
              <div className="scrolling-text-container relative">
                <div className="scrolling-text-inner flex flex-col text-left">
                  {/* Word 1 */}
                  <span className="block h-[1.1em] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-400 text-transparent bg-clip-text">
                    Business
                  </span>
                  {/* Word 2 */}
                  <span className="block h-[1.1em] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-400 text-transparent bg-clip-text">
                    Startup
                  </span>
                  {/* Word 3 */}
                  <span className="block h-[1.1em] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-400 text-transparent bg-clip-text">
                    Venture
                  </span>
                  {/* Word 4 (Duplicate of 1 for loop) */}
                  <span className="block h-[1.1em] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-400 text-transparent bg-clip-text">
                    Business
                  </span>
                </div>

                {/* Underline Decoration (Attached to container) */}
                <svg
                  className="absolute w-full h-3 -bottom-1 left-0 text-purple-200 -z-10"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 5 Q 50 10 100 5"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                  />
                </svg>
              </div>
              <br />
              With Intelligent Tools
            </h1>

            {/* Paragraph */}
            <p className="animate-fade-up delay-200 text-lg text-slate-600 max-w-lg">
              Streamline operations and boost engagement with our all-in-one
              digital infrastructure.
            </p>

            {/* Social Proof */}
            <div className="animate-fade-up delay-300 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white bg-gray-300 overflow-hidden"
                  >
                    <img
                      src={`https://i.pravatar.cc/100?img=${i + 10}`}
                      alt="user"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-white bg-purple-600 flex items-center justify-center text-white text-xs font-bold">
                  4.9
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex text-yellow-500">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>
                <span className="text-xs font-semibold text-slate-500">
                  From 10k+ Happy Clients
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="animate-fade-up delay-400">
              <button className="bg-slate-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl flex items-center gap-2 group">
                Start Your Journey
                <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>

            {/* Secondary Insight Card (Bottom Left) */}
            <div className="animate-fade-up delay-500 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 max-w-sm mt-4">
              <div className="w-16 h-16 rounded-lg bg-green-100 overflow-hidden shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
                  alt="Success"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg leading-tight">
                  High Conversion Rates
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  Our strategies optimize growth by{" "}
                  <span className="font-bold text-green-600">+35%</span>.
                </p>
              </div>
            </div>
          </div>

          {/* === RIGHT COLUMN: Image & Floating Cards === */}
          <div className="relative h-[600px] w-full flex items-center justify-center lg:justify-end">
            {/* Main Hero Image */}
            <div className="relative z-10 w-[80%] lg:w-[90%] max-w-md animate-fade-up">
              {/* Abstract Blob Background */}
              <div className="absolute top-10 left-0 w-full h-full bg-purple-100 rounded-full blur-3xl -z-10 opacity-60"></div>

              <img
                src="https://img.freepik.com/premium-photo/happy-woman-png-mockup-pink-turtleneck_53876-1043839.jpg"
                alt="Business Professional"
                className="rounded-3xl shadow-2xl object-cover w-full h-auto border-4 border-white"
              />
            </div>

            {/* Floating Element 1: Data Insight (Top Right) */}
            <div className="absolute top-10 right-0 lg:-right-4 bg-white/90 backdrop-blur-sm p-2 pr-4 rounded-full shadow-lg border border-slate-100 flex items-center gap-2 z-20 animate-float">
              <div className="bg-lime-400 p-2 rounded-full text-slate-900">
                <TrendingUp size={18} />
              </div>
              <span className="text-sm font-bold text-slate-800">
                Market Insights
              </span>
            </div>

            {/* Floating Element 2: Customer Repeat (Left Center) */}
            <div
              className="absolute top-1/2 left-0 lg:left-8 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 z-20 w-40 animate-float"
              style={{ animationDelay: "1s" }}
            >
              <div className="bg-purple-50 w-10 h-10 rounded-full flex items-center justify-center mb-2 text-purple-600">
                <Users size={20} />
              </div>
              <p className="text-xs text-slate-500 font-medium">
                Client Retention
              </p>
              <p className="text-xl font-bold text-purple-600">+14,200</p>
            </div>

            {/* Floating Element 3: Workflow Optimization (Bottom Right) */}
            <div
              className="absolute bottom-10 right-4 lg:right-0 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 z-20 max-w-[200px] animate-float"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="flex justify-between items-start mb-2">
                <div className="bg-indigo-600 p-2 rounded-lg text-white">
                  <CheckCircle2 size={20} />
                </div>
                <ArrowUpRight size={16} className="text-slate-400" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm">
                Smart Workflows
              </h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Automate your daily tasks effortlessly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrmEngagementHero;
