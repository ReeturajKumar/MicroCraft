import React from "react";
import { motion } from "framer-motion";
import { Zap, TrendingUp, Clock, CheckCircle2 } from "lucide-react";

const AIAutomationFeatures: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-white text-black overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Enhanced Professional Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-2.5"
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-slate-900">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600">
                  Automate and optimize
                </span>{" "}
                business processes in hours, not days
              </h1>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                Transform your business operations with intelligent automation
                that centralizes customer interactions, processes data
                automatically, and delivers actionable insights in real-time.
              </p>
            </motion.div>

            {/* Key Metrics */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-3 gap-3 py-4 border-y border-slate-200"
            >
              {[
                { value: "10x", label: "Faster Setup", icon: Zap },
                { value: "95%", label: "Accuracy", icon: TrendingUp },
                { value: "24/7", label: "Automation", icon: Clock },
              ].map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center gap-1.5 mb-1">
                    <metric.icon className="w-4 h-4 text-pink-600" />
                    <div className="text-xl sm:text-2xl font-bold text-slate-900">
                      {metric.value}
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 font-medium">
                    {metric.label}
                  </p>
                </motion.div>
              ))}
            </motion.div> */}

            {/* Enhanced Feature Points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              {[
                {
                  title: "Unified Customer Intelligence",
                  description:
                    "Centralize all customer interactions in minutes - support calls, chat conversations, sales interactions, in one intelligent platform.",
                  icon: CheckCircle2,
                },
                {
                  title: "Intelligent Data Processing",
                  description:
                    "Automatic data processing with custom business logic enabled through powerful native integrations and AI agents that learn and adapt.",
                  icon: CheckCircle2,
                },
                {
                  title: "Advanced Analytics & Insights",
                  description:
                    "Customer interactions across all sources are analyzed and categorized with intelligent automation, sentiment understanding, and predictive analytics.",
                  icon: CheckCircle2,
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.15 }}
                  className="flex gap-3 group"
                >
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                      <feature.icon className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Section */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="pt-2"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center gap-2.5 px-6 py-3 text-sm sm:text-base font-semibold rounded-lg bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">Get Started</span>
                <motion.div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                <motion.div
                  className="relative z-10 w-4 h-4 border-2 border-white rounded-full flex items-center justify-center"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <motion.div
                    className="w-1.5 h-1.5 bg-white rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </motion.div>
              </motion.button>
              <p className="mt-2 text-xs text-slate-500">
                No credit card required • Flexible plans • Cancel anytime
              </p>
            </motion.div> */}
          </motion.div>

          {/* Right Column: Visual Engagement Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-full min-h-[500px] flex items-center justify-center"
          >
            {/* Main Content Container */}
            <div className="relative z-10 w-full max-w-lg mx-auto space-y-6">
              {/* Floating Stats Cards */}
              <div className="grid grid-cols-2 gap-4">
                {/* Stat Card 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-slate-200/50"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-3xl font-black text-slate-900">
                      245%
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 font-medium">
                    Conversion Increase
                  </p>
                  <motion.div
                    className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full blur-xl opacity-30"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>

                {/* Stat Card 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-slate-200/50"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-3xl font-black text-slate-900">
                      50%+
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 font-medium">
                    Cost Reduction
                  </p>
                  <motion.div
                    className="absolute -top-2 -left-2 w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-full blur-xl opacity-30"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
              </div>

              {/* Central Feature Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.02 }}
                className="relative bg-gradient-to-br from-white to-slate-50 rounded-3xl p-8 shadow-2xl border border-slate-200/50 overflow-hidden"
              >
                {/* Animated Border Glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl"
                  animate={{
                    opacity: [0, 0.1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 flex items-center justify-center shadow-lg">
                      <TrendingUp className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        Real-time Analytics
                      </h3>
                      <p className="text-sm text-slate-600">
                        Live performance metrics
                      </p>
                    </div>
                  </div>

                  {/* Progress Indicators */}
                  <div className="space-y-4">
                    {[
                      {
                        label: "Automation Rate",
                        value: 87,
                        color: "from-pink-500 to-rose-500",
                      },
                      {
                        label: "Efficiency Gain",
                        value: 92,
                        color: "from-purple-500 to-indigo-500",
                      },
                      {
                        label: "Customer Satisfaction",
                        value: 94,
                        color: "from-blue-500 to-cyan-500",
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-slate-700">
                            {item.label}
                          </span>
                          <span className="text-sm font-bold text-slate-900">
                            {item.value}%
                          </span>
                        </div>
                        <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.value}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1,
                              delay: 0.6 + index * 0.1,
                            }}
                            className={`h-full bg-gradient-to-r ${item.color} rounded-full shadow-lg`}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Success Indicators */}
                  <div className="mt-6 pt-6 border-t border-slate-200">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span className="font-medium">
                        All systems operational
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Bottom Action Card */}
              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="relative bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-2xl p-6 shadow-2xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 via-purple-600/20 to-indigo-600/20" />
                <div className="relative z-10 flex items-center justify-between">
                  <div>
                    <p className="text-white/90 text-sm font-medium mb-1">
                      Ready to automate?
                    </p>
                    <p className="text-white text-lg font-bold">
                      Get Started Today
                    </p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <ArrowRight className="w-6 h-6 text-white" />
                  </motion.button>
                </div>
                <motion.div
                  className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIAutomationFeatures;
