import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const CRMEmailIntegration = () => {
  const BENEFITS = [
    "Real-time tracking for opens and clicks",
    "Automated follow-up sequences",
    "Unified inbox across all platforms"
  ];

  return (
    <section className="w-full bg-white py-10 md:py-12 px-10 sm:px-6 lg:px-28 overflow-hidden">
      <div className="max-w-8xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left Content Side */}
        <div className="flex-1 text-center lg:text-left order-1 max-w-xl mx-auto lg:mx-0">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-4 tracking-tight">
              Seamless Email <br className="hidden lg:block" />
              Integration Platform
            </h2>
            <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              Transform your communication strategy with a unified inbox. Connect with your favorite tools to send, track, and automate your workflow in one place.
            </p>

            <div className="grid gap-2.5 mb-10">
              {BENEFITS.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-2.5 justify-center lg:justify-start">
                  <div className="w-[18px] h-[18px] rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-700">{benefit}</span>
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

        {/* Right Visual Side - Responsive Scaling */}
        <div className="flex-1 w-full relative order-2">
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Main Container Image - Smoother Scaling */}
            <div className="relative z-10 w-[95%] sm:w-[85%] lg:w-full max-h-[300px] sm:max-h-[400px] lg:max-h-[460px] overflow-hidden">
              <img 
                src="/Container.png" 
                alt="Email Interface" 
                className="w-full h-auto object-top"
              />
            </div>

            {/* Floating Content Image - Repositioned for Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="absolute -bottom-4 right-[2%] sm:right-[5%] lg:-left-12 w-[55%] sm:w-[50%] lg:w-[55%] z-20"
            >
              <img 
                src="/Content.png" 
                alt="Email Stats Overview" 
                className="w-full h-auto"
              />
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default CRMEmailIntegration;
