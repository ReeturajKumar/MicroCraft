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
    <section className="relative w-full py-12 md:py-16 lg:py-20 overflow-hidden bg-slate-50 font-sans">
      {/* Styles moved to index.css - see: animate-drift, animate-float-card, animate-fade-up, scrolling-text-container-h2, scrolling-text-inner, delay-* */}

      {/* 1. SHARED BACKGROUND */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* 2. GLOWING BACKGROUND ORBS */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-200/25 rounded-full blur-3xl -z-10 animate-drift" />
      <div
        className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-purple-200/25 rounded-full blur-3xl -z-10 animate-drift"
        style={{ animationDelay: "-5s" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* === LEFT COLUMN: Content === */}
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="animate-fade-up text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4">
                Simple Management, <br />
                {/* ANIMATED TEXT CONTAINER */}
                <div className="scrolling-text-container-h2">
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

              <p className="animate-fade-up delay-100 text-base md:text-lg text-slate-600 leading-relaxed max-w-lg">
                Empower your business growth through revolutionary customer
                relations. Manage everything from a single, intuitive dashboard
                designed for scale.
              </p>
            </div>

            {/* LOGO STRIP with Hover Glow */}
            <div className="animate-fade-up delay-200 relative group">
              <div className="absolute -inset-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg -z-10" />

              <div className="flex flex-wrap items-center gap-x-6 gap-y-4 opacity-60 grayscale group-hover:grayscale-0 transition-all duration-500">
                {/* Logo 1 */}
                <div className="flex items-center gap-2 font-semibold text-base text-slate-800 group-hover:scale-105 transition-transform">
                  <Globe size={18} className="text-blue-600" />
                  <span>GlobalCorp</span>
                </div>
                {/* Logo 2 */}
                <div className="font-semibold text-lg text-slate-800 tracking-tight group-hover:scale-105 transition-transform">
                  Acme Inc.
                </div>
                {/* Logo 3 */}
                <div className="flex items-center gap-1 font-semibold text-base text-slate-800 group-hover:scale-105 transition-transform">
                  <LayoutGrid size={18} className="text-indigo-600" />
                  <span>Nexus</span>
                </div>
                {/* Logo 4 */}
                <div className="flex items-center gap-2 font-semibold text-base text-slate-800 group-hover:scale-105 transition-transform">
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
                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all duration-300 group text-sm md:text-base"
              >
                Explore Integration{" "}
                <ArrowRight size={16} className="group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>

          {/* === RIGHT COLUMN: Creative "Glass" Card Interface === */}
          <div className="relative perspective-1000 group animate-fade-up delay-200">
            {/* BACKGROUND GLOW (Activates on Hover) */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/15 to-purple-500/15 rounded-3xl blur-2xl transform scale-90 opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10" />

            {/* MAIN CARD */}
            <div className="relative bg-white/60 backdrop-blur-xl border border-white/50 p-6 lg:p-8 rounded-3xl shadow-xl transition-transform duration-500 group-hover:-translate-y-1">
              {/* Header: Team Avatars */}
              <div className="flex justify-between items-start mb-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-11 h-11 rounded-full border-2 border-white shadow-sm overflow-hidden transition-transform hover:scale-110 hover:z-10 cursor-pointer"
                    >
                      <img
                        src={`https://i.pravatar.cc/150?img=${i + 30}`}
                        alt="Team"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                  <button className="w-11 h-11 rounded-full bg-slate-900 text-white flex items-center justify-center border-2 border-white hover:bg-blue-600 transition-colors shadow-sm">
                    <Plus size={20} />
                  </button>
                </div>
              </div>

              {/* Body Text */}
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-semibold text-slate-900">
                  Driving Growth for <br /> Your Business.
                </h3>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                  We're revolutionizing customer relations with our empowering
                  CRM platform.
                </p>
              </div>

              {/* INNER CARD: Stats (Bottom) */}
              <div className="mt-6 bg-white rounded-xl p-4 shadow-md border border-slate-100 flex items-center gap-4 transform transition-transform group-hover:scale-[1.02]">
                <div className="bg-blue-600 text-white p-2.5 rounded-lg shadow-blue-200 shadow-sm">
                  <RefreshCcw size={20} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">
                    14.7k+
                  </div>
                  <div className="text-xs font-medium text-slate-500">
                    Repeat Customers
                  </div>
                </div>
              </div>
            </div>

            {/* FLOATING CARD: Client Satisfaction (Top Right) */}
            <div className="absolute -top-4 -right-2 lg:-right-6 w-48 bg-white p-4 rounded-xl shadow-lg border border-slate-100 z-20 animate-float-card">
              <div className="flex items-center justify-between mb-2.5">
                <div className="flex -space-x-2">
                  <div className="w-7 h-7 rounded-full border-2 border-white bg-green-100 overflow-hidden">
                    <img src="https://i.pravatar.cc/150?img=12" alt="Client" />
                  </div>
                  <div className="w-7 h-7 rounded-full border-2 border-white bg-blue-100 overflow-hidden">
                    <img src="https://i.pravatar.cc/150?img=11" alt="Client" />
                  </div>
                </div>
                <div className="bg-green-100 text-green-700 text-[9px] font-semibold px-1.5 py-0.5 rounded-full flex items-center gap-0.5">
                  25% <TrendingUp size={9} />
                </div>
              </div>

              <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide">
                Satisfaction
              </p>
              <div className="flex items-end gap-1 mt-0.5">
                <span className="text-xl font-semibold text-slate-900">14.9</span>
                <span className="text-xs font-medium text-slate-400 mb-0.5">
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
