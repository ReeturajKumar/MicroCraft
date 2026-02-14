import { motion } from "framer-motion";
import { Users, CheckSquare, Zap } from "lucide-react";

const CRMCollaboration = () => {
  const FEATURES = [
    {
      icon: <CheckSquare className="w-4 h-4 text-indigo-600" />,
      title: "Assign & Track Tasks"
    },
    {
      icon: <Zap className="w-4 h-4 text-amber-500" />,
      title: "Real-time Updates"
    },
    {
      icon: <Users className="w-4 h-4 text-emerald-500" />,
      title: "Centralized Hub"
    }
  ];

  return (
    <section className="w-full bg-white py-10 md:py-12 px-10 sm:px-6 lg:px-28 overflow-hidden">
      <div className="max-w-8xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        
        {/* Left Content Side */}
        <div className="flex-1 text-center lg:text-left order-1">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-xl mx-auto lg:mx-0"
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-slate-900 leading-tight mb-4 md:mb-6 tracking-tight">
              Enhanced Team <br className="hidden lg:block" />
              Collaboration Hub
            </h2>
            <p className="text-sm md:text-lg text-slate-500 font-medium leading-relaxed mb-8 md:mb-10 max-w-lg mx-auto lg:mx-0">
              Foster teamwork and seamless collaboration with our CRM-integrated 
              workspace. Perfect for managing complex team workflows.
            </p>

            {/* Inline Features List */}
            <div className="flex flex-wrap gap-x-6 sm:gap-x-8 gap-y-4 mb-10 justify-center lg:justify-start font-sans">
              {FEATURES.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2.5 group">
                  <div className="w-7 h-7 rounded-lg bg-white border border-slate-100 flex items-center justify-center flex-shrink-0 shadow-sm group-hover:bg-slate-50 transition-colors">
                    {feature.icon}
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-700 tracking-tight">
                    {feature.title}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex justify-center lg:justify-start">
              <button className="h-11 px-8 bg-white text-slate-900 border border-slate-900 rounded-lg font-bold text-[13px] hover:bg-slate-900 hover:text-white transition-all cursor-pointer">
                Get Started
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right Visual Side - Illustration (No Shadow) */}
        <div className="flex-1 w-full relative order-2">
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <img 
              src="/Illustration.png" 
              alt="Team Collaboration Interface" 
              className="w-[90%] sm:w-[80%] lg:w-full h-auto max-w-2xl border-none shadow-none"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default CRMCollaboration;

