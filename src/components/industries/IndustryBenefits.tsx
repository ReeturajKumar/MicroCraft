import { motion } from "framer-motion";
import { CheckCircle2, Layers, LineChart } from "lucide-react";

const IndustryBenefits = () => {
  const benefits = [
    {
      title: "Intelligent Workflow Automation",
      description: "Our AI-native core automates repetitive tasks across your enterprise, reducing manual errors by up to 95% and freeing your team for high-impact work.",
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Unified Operating System",
      description: "Consolidate CRM, Commerce, and Analytics into a single source of truth. Eliminate data silos and gain a 360-degree view of your operations.",
    },
    {
      icon: <LineChart className="w-8 h-8" />,
      title: "Real-time Predictive Insights",
      description: "Leverage advanced machine learning to forecast demand, optimize supply chains, and identify growth opportunities before they arise.",
    },
  ];

  return (
    <section className="w-full py-24 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Column: Visual Dashboard Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 relative w-full"
          >
            <div className="relative bg-gray-50/30 rounded-[3rem] p-12 aspect-[4/3] flex items-center justify-center overflow-hidden">
              {/* Decorative background blob */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#7856FF]/5 rounded-full blur-[100px]"></div>
              
              {/* Main Dashboard Card */}
              <div className="relative z-10 w-full max-w-[450px] bg-white rounded-3xl shadow-[0_32px_64px_-16px_rgba(120,86,255,0.12)] border border-gray-100 p-10">
                <div className="flex flex-col space-y-6">
                  {/* Header */}
                  <div className="space-y-1">
                    <p className="text-gray-400 text-sm font-bold uppercase tracking-wider">Operational Efficiency</p>
                    <div className="flex items-center gap-3">
                      <h4 className="text-3xl font-bold text-[#1A1A1A]">99.8%</h4>
                      <span className="text-[#7856FF] text-xs font-bold bg-[#7856FF]/5 px-2 py-1 rounded-md flex items-center gap-1">
                        <span className="text-[10px]">▲</span> 12%
                      </span>
                    </div>
                  </div>

                  {/* Progress Items */}
                  <div className="space-y-4 pt-4">
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-bold text-gray-400 w-24">Automation</span>
                      <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="w-[92%] h-full bg-[#7856FF] rounded-full"></div>
                      </div>
                      <span className="text-xs font-bold text-gray-400 w-8">92%</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-bold text-gray-400 w-24">Intelligence</span>
                      <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="w-[85%] h-full bg-[#7856FF] rounded-full"></div>
                      </div>
                      <span className="text-xs font-bold text-gray-400 w-8">85%</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-bold text-gray-400 w-24">Manual Load</span>
                      <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="w-[08%] h-full bg-indigo-200 rounded-full"></div>
                      </div>
                      <span className="text-xs font-bold text-gray-400 w-8">05%</span>
                    </div>
                  </div>

                  {/* Visual Bar Chart */}
                  <div className="flex items-end justify-between h-32 pt-8 gap-3">
                    <div className="flex-1 bg-[#7856FF]/20 rounded-t-lg h-[60%]"></div>
                    <div className="flex-1 bg-[#7856FF] rounded-t-lg h-[80%]"></div>
                    <div className="flex-1 bg-indigo-100 rounded-t-lg h-[40%]"></div>
                    <div className="flex-1 bg-[#7856FF] rounded-t-lg h-[95%]"></div>
                  </div>
                </div>

                {/* Overlapping Card */}
                <div className="absolute -bottom-6 -right-10 bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 w-[200px] z-20">
                    <div className="flex items-center justify-between mb-4">
                        <div className="w-8 h-8 rounded-lg bg-[#7856FF]/10 flex items-center justify-center">
                            <div className="w-4 h-4 rounded-sm border-2 border-[#7856FF]"></div>
                        </div>
                        <div className="text-[10px] font-bold text-gray-400">...</div>
                    </div>
                    <p className="text-gray-400 text-[10px] font-bold uppercase tracking-wider mb-1">Growth Index</p>
                    <h5 className="text-2xl font-bold text-[#1A1A1A] mb-1">+42.5%</h5>
                    <p className="text-[#7856FF] text-[9px] font-bold">Scaling seamlessly this quarter</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Content */}
          <div className="flex-1">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-semibold text-[#1A1A1A] mb-6 leading-tight"
            >
              The MicroKraft Advantage: <br />
              Enterprise Efficiency Reimagined
            </motion.h2>

            <div className="space-y-8">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex gap-5"
                >
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-6 h-6 text-[#7856FF]" />
                  </div>
                  <div>
                    <h3 className="text-md md:text-sm font-bold text-[#1A1A1A] mb-2">{benefit.title}</h3>
                    <p className="text-gray-500 leading-relaxed font-small">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IndustryBenefits;
