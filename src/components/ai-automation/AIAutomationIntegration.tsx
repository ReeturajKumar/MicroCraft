import React from "react";
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
        "Full governance, compliance checks, and audit logging aligned with enterprise automation frameworks.",
      icon: Shield,
    },
  ];

  return (
    <section className="relative w-full py-8 sm:py-12 md:py-16 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-slate-900 mb-3 sm:mb-4 leading-tight">
              Enterprise{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-500 to-pink-600">
                Workflow Integration
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mb-4 sm:mb-6 leading-relaxed">
              AI agents integrate deeply with enterprise systems and workflows.
              Backend actions are performed automatically, ensuring seamless
              connectivity.
            </p>

            {/* Integration Points */}
            <div className="space-y-2.5 sm:space-y-3 mb-4 sm:mb-6">
              {integrationPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-2.5 sm:gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center flex-shrink-0">
                    <point.icon className="w-4 h-4 sm:w-5 sm:h-5 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-semibold text-slate-900 mb-0.5">
                      {point.title}
                    </h3>
                    <p className="text-xs text-slate-600">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="/integrations"
              className="group inline-flex items-center gap-2 text-pink-600 font-semibold text-sm sm:text-base hover:text-purple-600 transition-colors duration-300"
            >
              <span>Explore all integrations</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full"
          >
            <img
              src="/system.png"
              alt="Enterprise Workflow Integration"
              className="w-full h-auto object-contain rounded-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIAutomationIntegration;
