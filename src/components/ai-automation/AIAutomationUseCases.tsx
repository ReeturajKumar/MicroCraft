import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Zap, Clock, Users } from "lucide-react";

const AIAutomationUseCases: React.FC = () => {
  const useCases = [
    {
      title: "Customer Support & Contact Centers",
      description: "AI Agents That Talk, Understand, and Resolve",
      details:
        "MicroKraft.ai deploys AI-powered voice and chat agents that manage both inbound and outbound customer interactions with human-like understanding.",
      benefits: [
        "Reduced call handling time",
        "Improved first-call resolution",
        "24/7 customer availability",
        "Lower operational costs without compromising experience",
      ],
    },
    {
      title: "Operational Automation",
      description: "Eliminating Manual Work From Daily Operations",
      details:
        "MicroKraft.ai automates repetitive operational tasks that consume significant employee time—ensuring speed, accuracy, and consistency.",
      benefits: [
        "Employee or customer onboarding",
        "KYC and document verification",
        "Appointment and service scheduling",
        "Automated notifications and reminders",
      ],
    },
    {
      title: "Lead Generation & Sales Automation",
      description: "AI That Sells Smarter, Not Harder",
      details:
        "MicroKraft.ai transforms sales operations using AI agents that manage the entire pre-sales workflow.",
      benefits: [
        "Higher conversion rates",
        "Faster response times",
        "Reduced dependency on manual sales teams",
        "Better utilization of sales resources",
      ],
    },
    {
      title: "Analytics & Business Insights",
      description: "Data-Driven Decisions Made Simple",
      details:
        "MicroKraft.ai provides comprehensive analytics and insights from every AI-driven interaction, enabling data-driven business decisions.",
      benefits: [
        "Real-time performance metrics",
        "Customer sentiment analysis",
        "Trend detection and forecasting",
        "Actionable business intelligence",
      ],
    },
  ];

  const keyStats = [
    {
      icon: Zap,
      value: "245%",
      label: "Conversion Increase",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Clock,
      value: "50%+",
      label: "Time Saved",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: Users,
      value: "24/7",
      label: "Availability",
      color: "from-blue-500 to-cyan-500",
    },
  ];

  const keyBenefits = [
    "Transform customer interactions with intelligent AI agents",
    "Automate repetitive tasks and boost operational efficiency",
    "Scale your business without scaling your team",
  ];

  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-purple-200/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-pink-200/20 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column: Impactful Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Main Heading */}
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 leading-tight"
              >
                Transform Your Business with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-500 to-pink-600">
                  Intelligent Automation
                </span>
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg text-slate-600 leading-relaxed"
              >
                From customer support to sales automation, our AI agents handle
                complex workflows with precision and scale. Experience the power
                of enterprise-ready automation that adapts to your business
                needs.
              </motion.p>
            </div>

            {/* Key Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-3 gap-4"
            >
              {keyStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative bg-white rounded-lg p-2.5 sm:p-3 border border-slate-200 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center mb-1.5`}
                  >
                    <stat.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <div className="text-lg sm:text-xl font-black text-slate-900 mb-0.5">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-600 font-medium leading-tight">
                    {stat.label}
                  </div>
                  <motion.div
                    className={`absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-br ${stat.color} rounded-full blur-xl opacity-20`}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.2, 0.3, 0.2],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5,
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Key Benefits List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-4"
            >
              <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
                Why Choose AI Automation?
              </h4>
              <ul className="space-y-2.5">
                {keyBenefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="flex items-start gap-3 text-sm sm:text-base text-slate-700"
                  >
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3 h-3 text-white" />
                    </div>
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center gap-2 px-6 py-3 text-sm sm:text-base font-semibold rounded-full bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span className="text-sm sm:text-base font-semibold text-white">
                  Get Started
                </span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column: Use Cases Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4 sm:gap-5"
          >
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className="relative h-full bg-white rounded-lg p-4 sm:p-5 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                  {/* Gradient Accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-600 via-purple-500 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Decorative Gradient Blur */}
                  <motion.div
                    className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0, 0.1, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3,
                    }}
                  />

                  <div className="relative z-10">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5">
                      {useCase.title}
                    </h3>
                    <p className="text-xs font-semibold text-pink-600 mb-1.5">
                      {useCase.description}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 mb-2.5 leading-relaxed line-clamp-2">
                      {useCase.details}
                    </p>

                    {/* Benefits */}
                    <ul className="space-y-1.5">
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <motion.li
                          key={benefitIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.3,
                            delay: 0.5 + index * 0.15 + benefitIndex * 0.05,
                          }}
                          className="flex items-start gap-1.5 text-xs text-slate-700"
                        >
                          <CheckCircle2 className="w-3 h-3 text-pink-600 flex-shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{benefit}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIAutomationUseCases;
