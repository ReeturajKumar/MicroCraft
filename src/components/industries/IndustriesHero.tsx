import { motion } from "framer-motion";
import { Building2, Users, TrendingUp, ChevronRight } from "lucide-react";

const IndustriesHero = () => {
  return (
    <section className="relative w-full overflow-hidden pt-24 pb-16 bg-white">
      
      <div className="max-w-8xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        {/* Main Content */}
        <div className="max-w-7xl mx-auto text-center mb-12 mt-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.05] mb-5 tracking-tight"
          >
            Industry-Specific CRM & Automation <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7856FF] to-[#B3A0FF]">Built for Indian Businesses</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-slate-600 text-sm md:text-2xl max-w-4xl mx-auto mb-10 font-small leading-relaxed"
          >
            Microkraft AI delivers industry-specific CRM, automation, and analytics solutions designed for Indian MSMEs. Get tools that understand your workflow.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-6"
          >
            <button className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 flex items-center gap-2">
              Explore Industries <ChevronRight className="w-4 h-4" />
            </button>
            <button className="px-8 py-4 bg-white border border-slate-200 text-slate-900 rounded-full font-bold hover:bg-slate-50 transition-all shadow-sm hover:shadow-md flex items-center gap-2">
              Book Consultation <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center gap-4 md:gap-6 min-h-[400px]">
            
            {/* Card 1: Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-full md:w-[20%] aspect-[4/5] md:aspect-auto h-[450px] rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-200"
            >
              <img 
                src="/ai-industry.png" 
                alt="Industry Solutions" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Card 2: Retail & E-commerce */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="w-full md:w-[15%] h-[320px] rounded-[2.5rem] p-6 text-white flex flex-col justify-between self-center shadow-xl bg-gradient-to-br from-[#7856FF] to-[#9F7AEA]"
            >
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm flex-shrink-0">
                <Building2 className="w-6 h-6" />
              </div>
              <div className="flex-shrink-0">
                <div className="text-2xl font-bold mb-2">Retail</div>
                <div className="text-xs font-medium leading-snug opacity-90">
                  Manage inventory, sales & customer data
                </div>
              </div>
            </motion.div>

            {/* Card 3: Stats Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="w-full md:w-[25%] h-[260px] bg-white rounded-[2.5rem] p-8 self-center shadow-xl border border-slate-200 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-1 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  Growing Fast
                </div>
              </div>
              <div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Businesses Served</div>
                <div className="text-4xl font-bold text-slate-900 mb-2">500+</div>
                <div className="text-[10px] text-slate-400 font-medium">Across <span className="text-slate-900 font-bold">12+</span> different industries in India</div>
              </div>
            </motion.div>

            {/* Card 4: Manufacturing */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="w-full md:w-[15%] h-[320px] rounded-[2.5rem] p-6 text-white flex flex-col justify-between self-center shadow-xl bg-gradient-to-br from-[#3B82F6] to-[#2563EB]"
            >
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm flex-shrink-0">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <div className="flex-shrink-0">
                <div className="text-2xl font-bold mb-2">Manufacturing</div>
                <div className="text-xs font-medium leading-snug opacity-90">
                  Track orders, suppliers & production
                </div>
              </div>
            </motion.div>

            {/* Card 5: Education & Services */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="w-full md:w-[22%] h-[420px] bg-gradient-to-br from-[#1E293B] to-[#0F172A] rounded-[2.5rem] p-10 text-white flex flex-col justify-between shadow-xl relative overflow-hidden border border-slate-700"
            >
              <div className="absolute top-[-10%] right-[-10%] w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
              
              <div>
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                  <Users className="w-6 h-6" />
                </div>
                <div className="text-sm font-semibold text-slate-300 mb-2">Education & Services</div>
              </div>
              <div className="text-2xl font-bold leading-tight">
                Manage admissions, leads & student relationships effortlessly
              </div>
            </motion.div>

          </div>
        </div>

        {/* Industry Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="max-w-4xl mx-auto mt-12 flex flex-wrap items-center justify-center gap-3"
        >
          {[
            "Retail & E-commerce",
            "Manufacturing",
            "Education",
            "Healthcare",
            "Real Estate",
            "Hospitality"
          ].map((industry, idx) => (
            <div
              key={idx}
              className="px-4 py-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-full text-sm font-semibold text-slate-700 transition-all cursor-pointer hover:shadow-sm"
            >
              {industry}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesHero;
