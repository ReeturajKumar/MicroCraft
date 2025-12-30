import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Clock, DollarSign, Zap } from "lucide-react";

const AIAutomationBenefits: React.FC = () => {
  const keyBenefits = [
    {
      icon: TrendingUp,
      title: "Dramatic Revenue Growth",
      description:
        "AI automation drives 245% increase in conversion rates by intelligently qualifying leads, following up persistently, and engaging prospects at optimal times without human fatigue.",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: Clock,
      title: "Massive Time Savings",
      description:
        "Reduce operational time by 50%+ through intelligent automation of repetitive tasks, allowing your team to focus on strategic initiatives that drive business growth.",
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      icon: DollarSign,
      title: "Cost Optimization",
      description:
        "Achieve up to 60% reduction in operational costs while maintaining or improving service quality. Scale operations without proportional cost increases.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Zap,
      title: "24/7 Availability",
      description:
        "Never miss an opportunity with round-the-clock automation. Handle customer inquiries, process requests, and manage workflows continuously without breaks or downtime.",
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

  // const impactPoints = [
  //   "Transform customer interactions with intelligent AI agents that understand context and sentiment",
  //   "Scale your business operations 10x without scaling your team proportionally",
  //   "Achieve 95%+ customer satisfaction with instant, accurate responses available 24/7",
  // ];

  return (
    <section className="relative w-full py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] bg-purple-200/20 blur-[80px] sm:blur-[100px] md:blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-1/4 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] bg-pink-200/20 blur-[70px] sm:blur-[90px] md:blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-start">
          {/* Left Column: Benefits Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5 sm:space-y-6 md:space-y-8"
          >
            {/* Main Heading */}
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 sm:mb-4 leading-tight">
                Why AI Automation <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-500 to-pink-600">
                  Transforms Businesses
                </span>
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed">
                Enterprise AI automation delivers measurable results that
                directly impact your bottom line. From revenue growth to
                operational efficiency, see how intelligent automation drives
                real business value.
              </p>
            </div>

            {/* Key Benefits Cards - 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {keyBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="relative bg-white rounded-lg p-3 sm:p-4 md:p-5 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex flex-col gap-1.5 sm:gap-2">
                    <div className="flex items-start sm:items-center gap-2 sm:gap-2.5">
                      <div
                        className={`w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-lg bg-gradient-to-br ${benefit.gradient} flex items-center justify-center flex-shrink-0`}
                      >
                        <benefit.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" />
                      </div>
                      <h4 className="text-xs sm:text-sm md:text-base font-bold text-slate-900 leading-tight min-w-0">
                        {benefit.title}
                      </h4>
                    </div>
                    <p className="text-[10px] sm:text-xs md:text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {benefit.description}
                    </p>
                  </div>
                  <motion.div
                    className={`absolute -bottom-1 -right-1 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br ${benefit.gradient} rounded-full blur-xl opacity-10`}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.1, 0.15, 0.1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5,
                    }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Impact Points */}
            {/* <div>
              <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-4">
                Key Impact Areas
              </h4>
              <ul className="space-y-3">
                {impactPoints.map((point, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.05 }}
                    className="flex items-start gap-3 text-sm sm:text-base text-slate-700"
                  >
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3 h-3 text-white" />
                    </div>
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>
            </div> */}

            {/* CTA Button */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center gap-2 px-8 py-4 text-base sm:text-lg font-semibold rounded-full bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <span>Calculate Your ROI</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </motion.div> */}
          </motion.div>

          {/* Right Column: Image Container */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full h-full flex items-center justify-center mt-6 sm:mt-8 lg:mt-0"
          >
            <div className="relative w-full max-w-full">
              <img
                src="/business-growth.png"
                alt="Business Impact Visualization"
                className="w-full h-auto object-contain rounded-lg sm:rounded-xl"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIAutomationBenefits;
