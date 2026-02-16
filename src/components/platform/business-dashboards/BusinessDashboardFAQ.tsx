import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How does MicroCraft's AI-Powered Unified Dashboard work?",
    answer: "MicroCraft uses advanced machine learning to analyze raw data from every branch of your business. It automatically identifies trends, anomalies, and growth opportunities, presenting them in a single, intuitive interface."
  },
  {
    question: "Can I connect all my business branches to a single source of truth?",
    answer: "Yes, MicroCraft is built as a Unified Operating System. It consolidates every department, from finance and sales to HR and logistics, into one centralized data hub for complete strategic clarity."
  },
  {
    question: "What makes the MicroCraft OS different from traditional ERPs?",
    answer: "Unlike legacy systems, MicroCraft is AI-native. It doesn't just store data; it interprets it. Our system provides automated growth strategies and predictive modeling that helps you stay ahead of the market."
  },
  {
    question: "How accurate is the financial forecasting and auditing?",
    answer: "We guarantee 99.9% data accuracy. Our AI-driven audits run in real-time, cross-referencing thousands of data points to ensure your financial forecasts are precise and your tax compliance is always up to date."
  },
  {
    question: "Can I automate reports for my strategic leadership team?",
    answer: "Absolutely. You can schedule high-fidelity reports to be generated and delivered automatically. Customize the KPIs to match your executive focus and let the AI summarize the key takeaways instantly."
  }
];

const BusinessDashboardFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white font-sans">
      <div className="max-w-8xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column: Title & Description */}
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="sticky top-32"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1 h-4 bg-[#7856FF]" />
                <span className="text-[#00A3A3] text-[12px] font-black uppercase tracking-widest">
                  Frequently Asked Questions
                </span>
              </div>
              <h2 className="text-[32px] md:text-[40px] font-black text-[#1A1A1A] leading-[1.1] mb-6">
                Got questions? <br />
                <span className="text-slate-400">we've got answers</span>
              </h2>
              <p className="text-slate-400 font-medium text-[15px] leading-relaxed">
                Find answers to common questions, or contact support for more help.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Accordions */}
          <div className="lg:w-2/3 space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-[20px] border transition-all duration-300 ${
                  openIndex === index ? 'bg-white border-slate-100' : 'bg-[#FAFAFA] border-transparent'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left group"
                >
                  <span className={`text-[17px] font-bold leading-tight transition-colors ${
                    openIndex === index ? 'text-[#1A1A1A]' : 'text-slate-600 group-hover:text-[#1A1A1A]'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 ml-4 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-[#1A1A1A]" />
                    ) : (
                      <Plus className="w-5 h-5 text-slate-400" />
                    )}
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-8 pb-8">
                        <div className="h-px bg-slate-100 mb-6" />
                        <p className="text-slate-400 font-medium leading-[1.6]">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default BusinessDashboardFAQ;
