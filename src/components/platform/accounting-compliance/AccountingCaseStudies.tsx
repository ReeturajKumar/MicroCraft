import { motion } from "framer-motion";
import { ArrowRight, MoveRight } from "lucide-react";

const caseStudies = [
  {
    title: "Financial Auditing & Compliance",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop",
    desc: "We helped a scaling fintech firm automate their multi-state audit trails, reducing compliance overhead by 40% while ensuring 100% accuracy.",
  },
  {
    title: "Retirement & Estate Planning",
    image: "https://www.askpaul.ie/wp-content/uploads/2025/02/Retirement-1920x674.jpeg",
    desc: "Implementing a long-term capital gains strategy that secured a $5M estate's legacy through intelligent tax-sheltered investment routing.",
  },
  {
    title: "Freelance & Small Business",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop",
    desc: "Simplified quarterly tax estimations and expense tracking for a creative agency, recovering $12k in previously missed deductions.",
  },
  {
    title: "Corporate Tax Strategy & Filing",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop",
    desc: "Optimized multi-entity tax filing for a global hardware manufacturer, streamlining cross-border compliance across 12 jurisdictions.",
  },
];

const AccountingCaseStudies = () => {
  return (
    <section className="py-12 bg-white font-sans overflow-hidden">
      <div className="max-w-8xl w-full mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-5">
            <h2 className="text-[32px] md:text-[42px] font-black text-[#1F1F1F] tracking-tight">Case study</h2>
            <div className="hidden md:block w-16 h-px bg-[#D13E89] relative">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rotate-45 border-t border-r border-[#D13E89]" />
            </div>
          </div>
          <button className="flex items-center gap-2 text-[14px] font-bold text-[#1F1F1F] hover:text-[#D13E89] transition-colors group px-0 md:pr-4">
            View More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-2">
          {caseStudies.map((study, idx) => (
            <CaseCard key={idx} {...study} delay={idx * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

const CaseCard = ({ title, image, desc, delay }: { title: string, image: string, desc: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.6 }}
    className="flex flex-col group overflow-hidden"
  >
    {/* Header / Title Overlay Area */}
    <div className="relative h-[240px] overflow-hidden rounded-[20px]">
      {/* Background Image */}
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
      />

      {/* Title Bar - Pinned to bottom for better visibility */}
      <div className="absolute bottom-0 left-0 w-full z-20 bg-gradient-to-t from-black/90 via-black/40 to-transparent py-5 px-5">
        <h3 className="text-white text-[13px] md:text-[14px] font-black leading-tight tracking-tight uppercase">
          {title}
        </h3>
      </div>
    </div>

    {/* Content Area */}
    <div className="pt-4 pb-4 bg-white flex flex-col">
      <p className="text-[12px] text-slate-500 font-medium leading-[1.6] mb-2 pr-2">
        {desc}
      </p>
      <button className="flex items-center gap-2 text-[13px] font-black text-[#1F1F1F] hover:text-[#D13E89] transition-colors mt-1 group/btn">
        Learn More <MoveRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform" />
      </button>
    </div>
  </motion.div>
);

export default AccountingCaseStudies;
