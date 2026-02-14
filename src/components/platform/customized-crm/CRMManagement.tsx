import { motion } from "framer-motion";
import { Briefcase, ClipboardList, TrendingUp, Calendar} from "lucide-react";

const CRMManagement = () => {
  return (
    <section className="w-full bg-white py-10 md:py-16 px-10 sm:px-6 lg:px-28 overflow-hidden">
      <div className="max-w-8xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        
        {/* Left Content Side */}
        <div className="flex-1 text-center lg:text-left order-1">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl mx-auto lg:mx-0"
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-slate-900 leading-tight mb-4 tracking-tight">
              Effortless Customer <br className="hidden lg:block" />
              Management Platform
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-500 font-medium leading-relaxed mb-8 md:mb-10 max-w-lg mx-auto lg:mx-0">
              Seamlessly organize, track, and access all customer information and relationships in one unified ecosystem.
            </p>
            <div className="flex justify-center lg:justify-start">
              <button className="h-11 px-8 bg-white text-slate-900 border border-slate-900 rounded-lg font-bold text-[13px] hover:bg-slate-900 hover:text-white transition-all cursor-pointer">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right Visual - Balanced Dashboard */}
        <div className="flex-1 w-full relative order-2 mt-12 lg:mt-0">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative scale-[0.85] sm:scale-100 origin-center lg:origin-right"
          >
            {/* Main Project Card */}
            <div className="bg-white rounded-2xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.06)] border border-slate-100 p-6 md:p-8 relative z-10">
              <div className="mb-8">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Portfolio</p>
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">68 Projects</h3>
                  <div className="flex items-center gap-1 px-2 py-0.5 bg-emerald-50 text-emerald-600 rounded text-[9px] font-bold">
                    <TrendingUp className="w-2.5 h-2.5" /> 12%
                  </div>
                </div>
              </div>

              {/* Chart Visual */}
              <div className="relative h-40 md:h-48 w-full">
                <svg viewBox="0 0 500 180" className="w-full h-full overflow-visible">
                  {[0, 60, 120, 180].map((y) => (
                    <line key={y} x1="30" y1={y} x2="500" y2={y} stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4 4" />
                  ))}
                  <text x="15" y="125" className="text-[12px] fill-slate-400 font-bold" textAnchor="end">0</text>
                  <text x="15" y="65" className="text-[12px] fill-slate-400 font-bold" textAnchor="end">50</text>
                  <text x="15" y="5" className="text-[12px] fill-slate-400 font-bold" textAnchor="end">100</text>
                  <path 
                    d="M 30 110 L 80 70 L 130 90 L 180 60 L 230 100 L 280 120 L 330 80 L 380 60 L 430 110 L 480 75" 
                    fill="none" 
                    stroke="#0F172A" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                  <line x1="280" y1="120" x2="280" y2="180" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3 3" />
                  <circle cx="280" cy="122" r="4" fill="white" stroke="#3b82f6" strokeWidth="2" />
                  {['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov'].map((month, i) => (
                    <text key={month} x={30 + i * 90} y="200" className="text-[11px] fill-slate-400 font-bold tracking-wider">{month}</text>
                  ))}
                </svg>

                {/* Scaled Tooltip */}
                <div className="absolute top-[5%] left-[55%] md:left-[55%] -translate-x-1/2 bg-white rounded-lg shadow-xl border border-slate-50 p-2 md:p-2.5 min-w-[100px] md:min-w-[120px] z-20">
                  <p className="text-[8px] md:text-[9px] font-bold text-slate-400 uppercase mb-1 md:mb-1.5 flex items-center gap-1">
                    <Calendar className="w-2 md:w-2.5 h-2 md:h-2.5" /> May 2023
                  </p>
                  <div className="bg-slate-50 rounded-md p-1 md:p-1.5 flex justify-between items-center">
                    <span className="text-[8px] md:text-[9px] font-bold text-slate-500">Active</span>
                    <span className="text-[10px] md:text-[11px] font-bold text-slate-900">51</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Cards - Positioned for responsiveness */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -top-6 left-[10%] sm:left-auto lg:right-32 z-20 bg-white rounded-xl shadow-lg border border-slate-50 p-3 md:p-4 min-w-[120px] md:min-w-[140px]"
            >
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400">
                  <Briefcase className="w-3.5 h-3.5 md:w-4 md:h-4" />
                </div>
                <div>
                  <p className="text-[8px] md:text-[9px] font-bold text-slate-400 uppercase">Companies</p>
                  <p className="text-xs md:text-sm font-bold text-slate-900">02 Active</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -top-6 right-[5%] sm:right-auto lg:-right-8 z-20 bg-white rounded-xl shadow-lg border border-slate-50 p-3 md:p-4 min-w-[120px] md:min-w-[140px]"
            >
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400">
                  <ClipboardList className="w-3.5 h-3.5 md:w-4 md:h-4" />
                </div>
                <div>
                  <p className="text-[8px] md:text-[9px] font-bold text-slate-400 uppercase">Ongoing</p>
                  <p className="text-xs md:text-sm font-bold text-slate-900">05 Tasks</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default CRMManagement;
