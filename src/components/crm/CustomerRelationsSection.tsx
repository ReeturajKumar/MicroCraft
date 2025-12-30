import React from "react";
import { motion } from "framer-motion";
import { Globe, LayoutGrid, ArrowRight } from "lucide-react";

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

              <p className="animate-fade-up delay-100 text-sm md:text-base text-slate-600 leading-relaxed max-w-lg">
                A modern, AI-enabled CRM that centralizes customer data,
                automates sales workflows, and delivers actionable insights.
                Unlike static databases, it's a living system that updates in
                real-time and integrates seamlessly with your business
                operations.
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

          {/* === RIGHT COLUMN: Image === */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full max-w-[600px] mx-auto lg:mx-0">
              <img
                src="/CustomerRelations.png"
                alt="CRM Customer Relations Dashboard"
                className="w-full h-auto object-contain rounded-2xl"
                loading="lazy"
                onError={(e) => {
                  // Fallback: Show placeholder if image doesn't exist
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  const parent = target.parentElement;
                  if (parent) {
                    const placeholder = document.createElement("div");
                    placeholder.className =
                      "w-full aspect-video bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border-2 border-blue-200 flex items-center justify-center";
                    placeholder.innerHTML =
                      '<div class="text-blue-400 text-sm">CustomerRelations.png</div>';
                    parent.appendChild(placeholder);
                  }
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CreativeCustomerSection;
