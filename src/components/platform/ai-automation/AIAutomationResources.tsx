import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import img1 from "../../../assets/bg1.webp";
import img2 from "../../../assets/bg2.webp";
import img3 from "../../../assets/bg4.webp";
import img4 from "../../../assets/bg3.webp";

const AIAutomationResources = () => {
  // --- ADD YOUR IMAGE URLS HERE ---
  const mainCaseStudyImage = img1;

  const resources = [
    {
      badge: "Case Study",
      title:
        "How TechFlow scaled their AI Agent fleet from 10 to 1,000+ with MicroKraft Orchestration",
      description:
        "Learn how TechFlow implemented MicroKraft's instrumentation layer to achieve 99.9% fulfillment reliability across their autonomous customer service agents.",
      linkText: "Read Case Study",
      image: img2,
    },
    {
      badge: "Blog Post",
      title: "Optimizing Token Latency: A Guide to Edge Inference Deployment",
      description:
        "Deep dive into sub-100ms LLM response times using MicroKraft's global edge infrastructure.",
      linkText: "Read Guide",
      image: img3,
    },
    {
      badge: "Blog Post",
      title: "Architecting Stateful Memory for Large-Scale Agent Workflows",
      description:
        "Best practices for managing long-term agent context and session persistence at scale.",
      linkText: "Read Deep Dive",
      image: img4,
    },
  ];

  return (
    <section className="relative w-full py-10 md:py-20 bg-white font-sans overflow-hidden border-t border-slate-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        {/* Section Header - Perfectly Responsive */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl text-center md:text-left"
          >
            <h2 className="text-[22px] sm:text-2xl md:text-3xl font-bold text-[#1A3F3C] mb-4 tracking-tight leading-tight">
              Industrial reliability for every model you ship
            </h2>
            <p className="text-sm sm:text-[15px] text-[#4D6462] font-medium leading-relaxed max-w-xl mx-auto md:mx-0">
              Technical blueprints and guides for scaling autonomous systems
              with industrial reliability.
            </p>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 text-[#8B5CF6] font-black text-[11px] md:text-xs hover:opacity-70 transition-opacity whitespace-nowrap mx-auto md:mx-0 tracking-widest uppercase border border-purple-100 rounded-full px-6 py-3 md:border-none md:p-0"
          >
            All Technical Resources
            <ChevronRight className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Featured Case Study Section - Responsive Layout Engine */}
        <div className="bg-[#F9FAFB] rounded-3xl sm:rounded-4xl overflow-hidden mb-10 md:mb-12 border border-slate-50 group">
          <div className="flex flex-col lg:flex-row items-stretch">
            {/* Left Content */}
            <div className="flex-1 p-6 sm:p-10 lg:p-16 text-center lg:text-left flex flex-col justify-center">
              <div className="mb-5">
                <span className="inline-block px-3 py-1 rounded-md bg-purple-50 text-[#8B5CF6] text-[10px] font-black uppercase tracking-widest border border-purple-100/50">
                  Infrastructure Study
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-[#1A3F3C] leading-tight mb-5">
                Scaling 1,000+ Autonomous Agents with MicroKraft Orchestration
              </h2>
              <p className="text-sm sm:text-[15px] text-[#4D6462] font-medium leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
                Learn how TechFlow used MicroKraft's instrumentation layer to
                solve stateful memory bottlenecks and achieve 99.9% fulfillment
                reliability in production environments.
              </p>
              <div className="flex justify-center lg:justify-start">
                <button className="w-full sm:w-auto flex items-center justify-center gap-2 group/btn bg-[#1A3F3C] text-white lg:bg-transparent lg:text-[#1A3F3C] px-8 py-4 lg:p-0 rounded-xl font-bold text-sm hover:opacity-70 transition-all">
                  Read Study
                  <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Image Container - Responsive Height */}
            <div className="flex-1 w-full min-h-60 sm:min-h-80 lg:h-auto border-t lg:border-t-0 lg:border-l border-white bg-slate-100 overflow-hidden">
              <img
                src={mainCaseStudyImage}
                alt="AI Agent Orchestration Analysis"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                onError={(e) =>
                  (e.currentTarget.src =
                    "https://placehold.co/1200x800/e2e8f0/94a3b8?text=Infrastructure+Analysis")
                }
              />
            </div>
          </div>
        </div>

        {/* Small Resources Grid - Dynamic Gap Scaling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-[#F9FAFB] rounded-3xl md:rounded-4xl overflow-hidden border border-slate-50 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 flex flex-col"
            >
              {/* Image Container - Fixed Aspect Ratio */}
              <div className="w-full aspect-16/10 bg-slate-100 overflow-hidden">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  onError={(e) =>
                    (e.currentTarget.src = `https://placehold.co/600x400/e2e8f0/94a3b8?text=${resource.badge}`)
                  }
                />
              </div>

              {/* Content - Adaptive Spacing */}
              <div className="p-6 sm:p-8 flex flex-col flex-1">
                <div className="mb-4">
                  <span className="inline-block px-2.5 py-1 rounded-md bg-white text-slate-400 text-[10px] font-black uppercase tracking-widest border border-slate-100">
                    {resource.badge}
                  </span>
                </div>
                <h3 className="text-base sm:text-[18px] font-bold text-[#1A3F3C] mb-4 leading-tight group-hover:text-[#8B5CF6] transition-colors duration-300">
                  {resource.title}
                </h3>
                <p className="text-[#4D6462] font-medium text-[13px] sm:text-[14px] leading-relaxed mb-8 flex-1">
                  {resource.description}
                </p>
                <button className="flex items-center gap-1.5 text-[#1A3F3C] font-black text-[12px] sm:text-[13px] group/btn mt-auto uppercase tracking-wider">
                  {resource.linkText}
                  <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIAutomationResources;
