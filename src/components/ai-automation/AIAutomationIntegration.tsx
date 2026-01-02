import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Workflow, Database, Shield } from "lucide-react";

const AIAutomationIntegration: React.FC = () => {
  const integrationPoints = [
    {
      title: "CRM Integration",
      description:
        "Automatic lead creation from calls or chats. AI-driven lead qualification and conversation-based updates.",
      icon: Database,
    },
    {
      title: "Workflow Automation",
      description:
        "AI agents act as workflow orchestrators, ensuring every action is recorded, compliant, and traceable.",
      icon: Workflow,
    },
    {
      title: "Security & Compliance",
      description:
        "Full governance, compliance checks, and audit logging aligned with business automation frameworks.",
      icon: Shield,
    },
  ];

  return (
    <section className="relative w-full py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-2 sm:mb-3 md:mb-4 leading-tight">
              Everything Works{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-500 to-pink-600">
                Together Seamlessly
              </span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-slate-600 mb-3 sm:mb-4 md:mb-6 leading-relaxed">
              Your systems talk to each other automatically. No manual data entry, no switching between tools. Everything updates in real-time, so you always have the full picture.
            </p>

            {/* Integration Points */}
            <div className="space-y-2 sm:space-y-2.5 md:space-y-3 mb-3 sm:mb-4 md:mb-6">
              {integrationPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-2 sm:gap-2.5 md:gap-3">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center flex-shrink-0">
                    <point.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-pink-600" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-[11px] sm:text-xs md:text-sm font-semibold text-slate-900 mb-0.5">
                      {point.title}
                    </h3>
                    <p className="text-[10px] sm:text-xs text-slate-600 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/integrations"
              className="group inline-flex items-center gap-1.5 sm:gap-2 text-pink-600 font-semibold text-xs sm:text-sm md:text-base hover:text-purple-600 transition-colors duration-300"
            >
              <span>Explore all integrations</span>
              <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full mt-6 sm:mt-8 lg:mt-0"
          >
            <img
              src="/system.png"
              alt="Seamless System Integration"
              className="w-full h-auto object-contain rounded-lg sm:rounded-xl"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIAutomationIntegration;
