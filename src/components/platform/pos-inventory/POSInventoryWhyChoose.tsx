import { motion } from "framer-motion";
import { Clock, BarChart3, FileText, ChevronRight, ArrowUpRight } from "lucide-react";

const WhyChooseCard = ({ icon: Icon, title, description, delay }: { icon: any, title: string, description: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="bg-white rounded-[24px] p-7 flex flex-col items-center text-center group border border-slate-100 hover:border-violet-100 hover:shadow-lg hover:shadow-violet-500/5 transition-all duration-500"
  >
    <div className="w-12 h-12 rounded-full bg-violet-50 flex items-center justify-center text-violet-600 mb-6 group-hover:scale-110 transition-transform duration-500 border border-violet-100/50 relative">
      <div className="absolute inset-0 bg-violet-200/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
      <Icon className="w-5 h-5 relative z-10" />
    </div>

    <h3 className="text-xl font-bold text-[#0F172A] mb-3 tracking-tight">{title}</h3>
    
    <p className="text-sm text-slate-500 font-medium leading-relaxed mb-6 max-w-[240px]">
      {description}
    </p>

    <button className="mt-auto px-5 py-2 bg-slate-50 text-slate-900 rounded-full text-[13px] font-bold flex items-center gap-1.5 hover:bg-violet-600 hover:text-white transition-all duration-300 group/btn">
      Learn More
      <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
    </button>
  </motion.div>
);

const POSInventoryWhyChoose = () => {
  return (
    <section className="py-12">
      <div className="max-w-8xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-10">
          <div className="max-w-2xl text-left">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#0F172A] tracking-tight leading-[1.1]"
            >
              Why Choose Our Sales Analytics <br className="hidden md:block" />
              Platform for Your Business
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <button className="h-12 px-8 bg-violet-600 text-white rounded-full font-bold text-sm hover:bg-violet-700 transition-all flex items-center gap-2 group shadow-xl shadow-violet-500/10">
              Plan Now
              <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <WhyChooseCard 
            icon={Clock}
            title="Real-Time Insights"
            description="Monitor your sales performance and customer behavior instantly with real-time updates. Make data-driven decisions for maximum growth."
            delay={0.1}
          />
          <WhyChooseCard 
            icon={BarChart3}
            title="Detailed Analysis"
            description="Get detailed metrics on available balance, pending of payments, product performance, and engagement rates."
            delay={0.2}
          />
          <WhyChooseCard 
            icon={FileText}
            title="Customizable Reports"
            description="Filter data by store, time frame, and category to focus on what matters most to you. Gain actionable insights to drive targeted."
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};

export default POSInventoryWhyChoose;
