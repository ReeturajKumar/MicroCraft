import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Phone,
  TrendingUp,
  BarChart3,
  Workflow,
  Zap,
  Shield,
} from "lucide-react";

const AIColleaguesSection = () => {
  // Most important 4 capabilities
  const capabilities = [
    {
      icon: Phone,
      title: "Customer Support & Contact Centers",
      description:
        "AI-powered voice and chat agents that manage inbound and outbound customer interactions with human-like understanding.",
      gradient: "from-blue-600 to-indigo-500",
    },
    {
      icon: TrendingUp,
      title: "Lead Generation & Sales Automation",
      description:
        "AI agents manage the entire pre-sales workflow—lead capture, qualification, scheduling, and persistent follow-ups.",
      gradient: "from-pink-600 to-rose-500",
    },
    {
      icon: BarChart3,
      title: "Analytics & Business Insights",
      description:
        "Every AI-driven interaction is logged and analyzed. Customer sentiment analysis and conversation trend detection.",
      gradient: "from-indigo-600 to-purple-500",
    },
    {
      icon: Workflow,
      title: "Enterprise Workflow Integration",
      description:
        "AI agents integrate deeply with enterprise systems—CRM updates, ticket creation, notifications, and compliance checks.",
      gradient: "from-teal-600 to-cyan-500",
    },
  ];

  return (
    <section className="relative w-full bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      {/* Top Section: Pre-built AI Colleagues */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 lg:mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Intelligent{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600">
                  AI Agents
                </span>
              </span>
              <br />
              for Modern Enterprises
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Enterprise-ready AI automation that integrates seamlessly into
              day-to-day business operations. From customer interactions to
              backend workflows, execute, analyze, and optimize business
              processes at scale.
            </p>
            <a
              href="#"
              className="group inline-flex items-center gap-2 text-purple-600 font-semibold text-lg hover:text-pink-600 transition-colors duration-300"
            >
              <span>Learn more</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full max-w-[600px] mx-auto lg:mx-0">
              <img
                src="/Colleagues.png"
                alt="AI Colleagues"
                className="w-full h-auto object-contain rounded-2xl"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Middle Section: Key Capabilities */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 lg:mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Enhanced Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Background Gradient */}
            <div className="absolute -inset-4 bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50 rounded-2xl opacity-50 blur-xl" />

            <div className="relative backdrop-blur-sm rounded-2xl p-8 ">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 leading-tight">
                Powering Every Aspect of{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600">
                  Your Business
                </span>
              </h2>
              <p className="text-base text-slate-600 mb-6 leading-relaxed">
                From customer interactions to backend workflows, our AI agents
                execute, analyze, and optimize business processes at scale.
              </p>

              {/* Key Benefits List */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Zap className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 mb-1">
                      Reduced Operational Costs
                    </h4>
                    <p className="text-xs text-slate-600">
                      Lower call handling time and improved first-call
                      resolution rates without compromising customer experience.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-600 to-indigo-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <TrendingUp className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 mb-1">
                      Higher Conversion Rates
                    </h4>
                    <p className="text-xs text-slate-600">
                      Faster response times and better utilization of sales
                      resources lead to increased revenue.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-600 to-teal-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Shield className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 mb-1">
                      24/7 Availability
                    </h4>
                    <p className="text-xs text-slate-600">
                      AI agents ensure round-the-clock customer availability,
                      handling interactions even outside business hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: 4 Capabilities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative"
              >
                <div className="relative h-full bg-white rounded-xl p-4 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-200 overflow-hidden">
                  {/* Gradient Border on Hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${capability.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl`}
                  />

                  {/* Icon */}
                  <div className="relative mb-3">
                    <div
                      className={`w-10 h-10 rounded-lg bg-gradient-to-br ${capability.gradient} flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300`}
                    >
                      <capability.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-base font-semibold text-slate-900 mb-2 leading-tight">
                    {capability.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section: Architecture */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative w-full max-w-[600px] mx-auto lg:mx-0">
              <img
                src="/Architecture.png"
                alt="Enterprise AI Architecture"
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
                      '<div class="text-slate-400 text-sm">Architecture.png</div>';
                    parent.appendChild(placeholder);
                  }
                }}
              />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Enterprise{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600">
                AI Architecture <br />
              </span>{" "}
              Built for Scale
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Forward-looking, open, and scalable Agentic AI architecture for
              the enterprise. Built for CIOs and CTOs with full governance,
              compliance, security, and auditability.
            </p>
            <a
              href="#"
              className="group inline-flex items-center gap-2 text-purple-600 font-semibold text-lg hover:text-pink-600 transition-colors duration-300"
            >
              <span>Learn more</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIColleaguesSection;
