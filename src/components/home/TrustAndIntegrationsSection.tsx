import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const TrustAndIntegrationsSection = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: Security Standards */}
        <div className="mb-8 lg:mb-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-16"
          >
            {/* Left: Heading */}
            <div className="flex-1">
              <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-slate-900 leading-tight mb-6">
                The highest trust and <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600">
                  security standards
                </span>
              </h2>
              <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
                Enterprise-grade security and compliance certifications ensuring
                your data is protected at every level. Built with full
                governance, compliance, security, and auditability for CIOs and
                CTOs.
              </p>
            </div>

            {/* Right: Security Standards Image */}
            <div className="flex-1 lg:flex-none">
              <div className="relative w-full max-w-[600px] mx-auto lg:mx-0">
                <img
                  src="/SecurityStandards.png"
                  alt="Security Standards and Certifications"
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
                        "w-full aspect-square bg-gradient-to-br from-slate-50 to-white rounded-2xl border-2 border-slate-200 flex items-center justify-center";
                      placeholder.innerHTML =
                        '<div class="text-slate-400 text-sm">SecurityStandards.png</div>';
                      parent.appendChild(placeholder);
                    }
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section: Integrations */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-16">
          {/* Left: Integrations Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full lg:w-auto"
          >
            <div className="relative w-full max-w-[600px] mx-auto lg:mx-0">
              <img
                src="/Integrations.png"
                alt="Pre-built Integrations"
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
                      "w-full aspect-square bg-gradient-to-br from-slate-50 to-white rounded-2xl border-2 border-slate-200 flex items-center justify-center";
                    placeholder.innerHTML =
                      '<div class="text-slate-400 text-sm">Integrations.png</div>';
                    parent.appendChild(placeholder);
                  }
                }}
              />
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-slate-900 leading-tight mb-6">
              Pre-built integrations for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600">
                rapid go-live
              </span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
              AI agents integrate deeply with enterprise systems and workflows.
              Automatic updates from AI agents and internal systems ensure
              seamless connectivity with your existing tools and platforms. Get
              up and running in hours, not weeks.
            </p>
            <a
              href="/integrations"
              className="group inline-flex items-center gap-2 text-purple-600 font-semibold text-lg hover:text-pink-600 transition-colors duration-300"
            >
              <span>See all integrations</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustAndIntegrationsSection;
