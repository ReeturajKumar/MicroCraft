import { motion } from "framer-motion";

const CRMInsights = () => {
  return (
    <section className="w-full bg-white py-10 md:py-16 px-10 sm:px-6 lg:px-28 overflow-hidden">
      <div className="max-w-8xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        
        {/* Left Content Side */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl mx-auto lg:mx-0"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-[1.2] lg:leading-[1.15] mb-4 md:mb-6 tracking-tight">
              Data-Driven Insights and <br className="hidden lg:block" />
              Strategy Optimization
            </h2>
            <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed mb-8 md:mb-10 max-w-lg mx-auto lg:mx-0">
              Unlock your data's full potential. Track, measure, and extract valuable CRM insights to optimize your business strategies.
            </p>
            <div className="flex justify-center lg:justify-start">
              <button className="h-11 px-8 bg-white text-slate-900 border border-slate-900 rounded-lg font-bold text-[13px] hover:bg-slate-900 hover:text-white transition-all cursor-pointer">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right Visual Side - Fully Responsive Image Composite */}
        <div className="flex-1 w-full relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            {/* Main Insight Image - Responsive Width */}
            <div className="relative z-10 w-[90%] sm:w-[80%] lg:w-[75%] lg:mr-20 max-h-[300px] sm:max-h-[340px] overflow-hidden">
              <img 
                src="/Content (2).png" 
                alt="Sales Revenue Dashboard" 
                className="w-full h-auto object-top"
              />
            </div>

            {/* Floating Frame Image - Scale Adjusted for Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="absolute bottom-[-10%] right-0 sm:right-[5%] lg:right-0 z-20 w-[55%] sm:w-[50%] lg:w-[60%] max-h-[120px] sm:max-h-[140px] lg:max-h-[140px] overflow-hidden"
            >
              <img 
                src="/Frame 48200.png" 
                alt="Top Companies Rankings" 
                className="w-[120px] sm:w-[140px] h-auto object-top"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CRMInsights;
