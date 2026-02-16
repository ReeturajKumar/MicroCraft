import { motion } from "framer-motion";
import { Sparkles, RefreshCw, Brain, Globe, ShieldCheck, Users, ChevronRight } from "lucide-react";

/**
 * AIAutomationFeatures Component
 * A clean, 3-column feature grid following the "Build better products" design language.
 * Contents specifically tailored to SuperCRM/AI Automation.
 */

const features = [
  {
    title: "Model Observability",
    description: "Full-stack visibility into LLM performance, token costs, and latency metrics across your entire model fleet.",
    icon: <Sparkles className="w-6 h-6 text-[#8B5CF6]" />,
    badge: "Enterprise"
  },
  {
    title: "Agent Orchestration",
    description: "Manage complex multi-agent workflows with stateful memory and deterministic fulfillment logic.",
    icon: <RefreshCw className="w-6 h-6 text-[#8B5CF6]" />
  },
  {
    title: "Real-time Evaluation",
    description: "Automated scoring of AI outputs against custom rubrics to ensure production-grade safety and quality.",
    icon: <Brain className="w-6 h-6 text-[#8B5CF6]" />,
    badge: "Core"
  },
  {
    title: "Edge Deployment",
    description: "Deploy and optimize models at the edge for sub-100ms response times and localized inference.",
    icon: <Globe className="w-6 h-6 text-[#8B5CF6]" />
  },
  {
    title: "Sovereign AI Security",
    description: "Advanced PII masking and prompt injection protection with 100% data residency control.",
    icon: <ShieldCheck className="w-6 h-6 text-[#8B5CF6]" />,
    badge: "Secure"
  },
  {
    title: "Autonomous Feedback",
    description: "Self-improving loops that automatically refine prompts based on real-world user engagement data.",
    icon: <Users className="w-6 h-6 text-[#8B5CF6]" />
  }
];

const AIAutomationFeatures = () => {
  return (
    <section className="relative w-full py-20 bg-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header - Platform Oriented */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A3F3C] mb-6 tracking-tight">
              Scaling the infrastructure <br className="hidden md:block" /> for the AI-first world
            </h2>
            <p className="text-lg text-[#4D6462] max-w-2xl mx-auto font-medium">
              Everything your engineering team needs to orchestrate, evaluate, and scale 
              high-performance AI agents with industrial reliability.
            </p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-[32px] bg-[#F2FBFA] hover:bg-[#EAF8F7] border border-[#E0F2F1] transition-all duration-300 hover:shadow-xl hover:shadow-[#1A3F3C]/5 cursor-default"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-2xl bg-white border border-[#BDEAE6] flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Content */}
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-xl font-bold text-[#1A3F3C]">{feature.title}</h3>
                {feature.badge && (
                  <span className="px-2 py-0.5 rounded-full bg-white border border-[#BDEAE6] text-[10px] font-black text-[#8B5CF6] uppercase tracking-wider">
                    {feature.badge}
                  </span>
                )}
              </div>
              <p className="text-[#4D6462] leading-relaxed font-medium text-[15px]">
                {feature.description}
              </p>
              
              {/* Subtle Arrow */}
              <div className="mt-6 flex items-center text-[#8B5CF6] text-sm font-bold opacity-0 group-hover:opacity-100 transition-all translate-x-3 group-hover:translate-x-0 duration-300">
                <span>Explore Capabilities</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIAutomationFeatures;
