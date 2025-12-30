import React from "react";
import { motion } from "framer-motion";

const AdvantagesSection: React.FC = () => {
  return (
    <section className="relative w-full text-black py-6 md:py-16 lg:py-6 overflow-hidden font-sans">
      {/* Styles moved to index.css - see: scrolling-text-container-h2-alt, scrolling-text-inner */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Heading */}
        <div className="mb-6 lg:mb-6 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold leading-tight mb-4">
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
              MicroKraft.ai CRM
            </span>
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-3xl">
            A central intelligence system that transforms how you manage
            customers, streamline sales operations, and drive business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full max-w-[600px] mx-auto lg:mx-0">
              <img
                src="/Advantages.png"
                alt="CRM Advantages - Centralized Intelligence System"
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
                      "w-full aspect-video bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border-2 border-purple-200 flex items-center justify-center";
                    placeholder.innerHTML =
                      '<div class="text-purple-400 text-sm">Advantages.png</div>';
                    parent.appendChild(placeholder);
                  }
                }}
              />
            </div>
          </motion.div>

          {/* Right Column: Enhanced Advantages List */}
          <div className="flex flex-col gap-3">
            {/* Item 1 */}
            <div className="group relative bg-white rounded-lg p-3 border border-slate-200 hover:border-purple-300 hover:shadow-md transition-all duration-300">
              <div className="flex items-start">
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-slate-900 mb-1 group-hover:text-purple-600 transition-colors">
                    Centralized Intelligence System
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-1.5">
                    One unified platform connecting sales, marketing, support, and operations with real-time data synchronization.
                  </p>
                  <ul className="space-y-0.5 text-xs text-slate-500">
                    <li className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-purple-500 flex-shrink-0"></span>
                      <span>Single source of truth for all customer data</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-purple-500 flex-shrink-0"></span>
                      <span>Cross-department visibility and collaboration</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="group relative bg-white rounded-lg p-3 border border-slate-200 hover:border-purple-300 hover:shadow-md transition-all duration-300">
              <div className="flex items-start">
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                    AI-Powered Automation & Insights
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-1.5">
                    Intelligent automation handles lead qualification, follow-ups, and delivers actionable insights for better decisions.
                  </p>
                  <ul className="space-y-0.5 text-xs text-slate-500">
                    <li className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-blue-500 flex-shrink-0"></span>
                      <span>Automated lead scoring and qualification</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-blue-500 flex-shrink-0"></span>
                      <span>Predictive analytics and forecasting</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="group relative bg-white rounded-lg p-3 border border-slate-200 hover:border-purple-300 hover:shadow-md transition-all duration-300">
              <div className="flex items-start">
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-slate-900 mb-1 group-hover:text-pink-600 transition-colors">
                    Enterprise Security & Scalability
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-1.5">
                    Enterprise-level security with role-based access control and unlimited scalability that grows with your business.
                  </p>
                  <ul className="space-y-0.5 text-xs text-slate-500">
                    <li className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-pink-500 flex-shrink-0"></span>
                      <span>Role-based access control and permissions</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-pink-500 flex-shrink-0"></span>
                      <span>Scales from startup to enterprise seamlessly</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
