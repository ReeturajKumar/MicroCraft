import React from "react";
import {
  Globe,
  Plus,
  RefreshCcw,
  TrendingUp,
  LayoutGrid,
  ArrowRight,
} from "lucide-react";

const CreativeCustomerSection: React.FC = () => {
  return (
    <section className="relative w-full py-24 lg:py-32 overflow-hidden bg-slate-50 font-sans">
      {/* --- ANIMATIONS & STYLES --- */}
      <style>{`
        /* Background Drift */
        @keyframes drift {
          0% { transform: translate(0, 0); }
          50% { transform: translate(-20px, 40px); }
          100% { transform: translate(0, 0); }
        }
        /* Card Float */
        @keyframes float-card {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        /* Fade In Up */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        /* Text Slide Animation */
        @keyframes textSlide {
          0%, 20% { transform: translateY(0%); }
          25%, 45% { transform: translateY(-25%); }
          50%, 70% { transform: translateY(-50%); }
          75%, 95% { transform: translateY(-75%); }
          100% { transform: translateY(-75%); }
        }

        .animate-drift {
          animation: drift 10s ease-in-out infinite;
        }
        .animate-float-card {
          animation: float-card 6s ease-in-out infinite;
        }
        .animate-fade-up {
          opacity: 0;
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        /* Scrolling Text Classes */
        .scrolling-text-container {
          height: 1.15em; /* Matches H2 Line Height */
          overflow: hidden;
          display: inline-block;
          vertical-align: bottom;
          position: relative;
          padding-bottom: 2px; /* Visual tweak for descenders */
        }
        .scrolling-text-inner {
          animation: textSlide 6s cubic-bezier(0.16, 1, 0.3, 1) infinite;
        }

        /* Delays */
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
      `}</style>

      {/* 1. SHARED BACKGROUND */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* 2. GLOWING BACKGROUND ORBS */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-3xl -z-10 animate-drift" />
      <div
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-200/40 rounded-full blur-3xl -z-10 animate-drift"
        style={{ animationDelay: "-5s" }}
      />

      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* === LEFT COLUMN: Content === */}
          <div className="flex flex-col gap-10">
            <div>
              <h2 className="animate-fade-up text-4xl lg:text-6xl font-extrabold text-slate-900 leading-[1.15] mb-6">
                Simple Management, <br />
                {/* ANIMATED TEXT CONTAINER */}
                <div className="scrolling-text-container">
                  <div className="scrolling-text-inner flex flex-col text-left">
                    {/* Word 1 */}
                    <span className="block h-[1.15em] text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                      Revolutionizing
                    </span>
                    {/* Word 2 */}
                    <span className="block h-[1.15em] text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                      Transforming
                    </span>
                    {/* Word 3 */}
                    <span className="block h-[1.15em] text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                      Optimizing
                    </span>
                    {/* Word 4 (Loop) */}
                    <span className="block h-[1.15em] text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                      Revolutionizing
                    </span>
                  </div>
                </div>
                <br />
                Customer Relations
              </h2>

              <p className="animate-fade-up delay-100 text-lg text-slate-600 leading-relaxed max-w-lg">
                Empower your business growth through revolutionary customer
                relations. Manage everything from a single, intuitive dashboard
                designed for scale.
              </p>
            </div>

            {/* LOGO STRIP with Hover Glow */}
            <div className="animate-fade-up delay-200 relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg -z-10" />

              <div className="flex flex-wrap items-center gap-x-8 gap-y-6 opacity-60 grayscale group-hover:grayscale-0 transition-all duration-500">
                {/* Logo 1 */}
                <div className="flex items-center gap-2 font-bold text-lg text-slate-800 group-hover:scale-105 transition-transform">
                  <Globe size={20} className="text-blue-600" />
                  <span>GlobalCorp</span>
                </div>
                {/* Logo 2 */}
                <div className="font-bold text-xl text-slate-800 tracking-tight group-hover:scale-105 transition-transform">
                  Acme Inc.
                </div>
                {/* Logo 3 */}
                <div className="flex items-center gap-1 font-bold text-lg text-slate-800 group-hover:scale-105 transition-transform">
                  <LayoutGrid size={20} className="text-indigo-600" />
                  <span>Nexus</span>
                </div>
                {/* Logo 4 */}
                <div className="flex items-center gap-2 font-bold text-lg text-slate-800 group-hover:scale-105 transition-transform">
                  <div className="flex gap-0.5">
                    <div className="w-1.5 h-1.5 bg-slate-800 rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-slate-800 rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  </div>
                  <span>TechFlow</span>
                </div>
              </div>
            </div>

            {/* Link */}
            <div className="animate-fade-up delay-300">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-4 transition-all duration-300 group"
              >
                Explore Integration{" "}
                <ArrowRight size={20} className="group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* === RIGHT COLUMN: Creative "Glass" Card Interface === */}
          <div className="relative perspective-1000 group animate-fade-up delay-200">
            {/* BACKGROUND GLOW (Activates on Hover) */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-[3rem] blur-2xl transform scale-90 opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10" />

            {/* MAIN CARD */}
            <div className="relative bg-white/60 backdrop-blur-xl border border-white/50 p-8 lg:p-12 rounded-[2.5rem] shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
              {/* Header: Team Avatars */}
              <div className="flex justify-between items-start mb-8">
                <div className="flex -space-x-4">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-14 h-14 rounded-full border-[3px] border-white shadow-sm overflow-hidden transition-transform hover:scale-110 hover:z-10 cursor-pointer"
                    >
                      <img
                        src={`https://i.pravatar.cc/150?img=${i + 30}`}
                        alt="Team"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                  <button className="w-14 h-14 rounded-full bg-slate-900 text-white flex items-center justify-center border-[3px] border-white hover:bg-blue-600 transition-colors shadow-sm">
                    <Plus size={24} />
                  </button>
                </div>
              </div>

              {/* Body Text */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900">
                  Driving Growth for <br /> Your Business.
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  We're revolutionizing customer relations with our empowering
                  CRM platform.
                </p>
              </div>

              {/* INNER CARD: Stats (Bottom) */}
              <div className="mt-8 bg-white rounded-2xl p-6 shadow-lg border border-slate-100 flex items-center gap-5 transform transition-transform group-hover:scale-[1.02]">
                <div className="bg-blue-600 text-white p-3 rounded-xl shadow-blue-200 shadow-md">
                  <RefreshCcw size={24} />
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-slate-900 animate-pulse">
                    14.7k+
                  </div>
                  <div className="text-sm font-medium text-slate-500">
                    Repeat Customers
                  </div>
                </div>
              </div>
            </div>

            {/* FLOATING CARD: Client Satisfaction (Top Right) */}
            <div className="absolute -top-6 -right-2 lg:-right-8 w-56 bg-white p-5 rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-100 z-20 animate-float-card">
              <div className="flex items-center justify-between mb-3">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-green-100 overflow-hidden">
                    <img src="https://i.pravatar.cc/150?img=12" alt="Client" />
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-100 overflow-hidden">
                    <img src="https://i.pravatar.cc/150?img=11" alt="Client" />
                  </div>
                </div>
                <div className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1">
                  25% <TrendingUp size={10} />
                </div>
              </div>

              <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">
                Satisfaction
              </p>
              <div className="flex items-end gap-1 mt-1">
                <span className="text-2xl font-bold text-slate-900">14.9</span>
                <span className="text-sm font-medium text-slate-400 mb-1">
                  / 15k
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativeCustomerSection;
