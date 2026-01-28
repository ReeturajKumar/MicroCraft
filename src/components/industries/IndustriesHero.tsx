import { motion } from "framer-motion";
import { ArrowUpRight, Star, Sparkles, FileText, BarChart2, Waves, Gauge, ChevronRight } from "lucide-react";

const IndustriesHero = () => {
  return (
    <section className="relative w-full overflow-hidden pt-16 md:pt-24 pb-20 md:pb-28 bg-white">
      

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Content */}
        <div className="max-w-5xl mx-auto text-center mb-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#1A1A1A] leading-[1.1] mb-6 tracking-tight"
          >
            The Future of Enterprise <br className="hidden md:block" />
            with <span className="text-black"



>MicroCraft OS</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-10"
          >
            Empower your industry with AI-native CRM, Commerce, and Analytics. Precision-engineered for modern growth.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-6"
          >
            <button className="px-8 py-4 bg-[#113333] text-white rounded-full font-semibold hover:bg-[#0E2D2D] transition-colors shadow-lg">
              Get Started
            </button>
            <button className="px-8 py-4 bg-white border border-gray-200 text-[#113333] rounded-full font-semibold hover:bg-gray-50 transition-colors">
              Try Demo
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
              className="w-full md:w-[20%] aspect-[4/5] md:aspect-auto h-[450px] rounded-[2.5rem] overflow-hidden shadow-xl"
            >
              <img 
                src="/ai-industry.png" 
                alt="AI-Native Industrial Intelligence" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Card 2: Teal - Global Reach */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
           className="w-full md:w-[15%] h-[320px] rounded-[2.5rem] p-8 text-white flex flex-col justify-end self-center shadow-xl
bg-[linear-gradient(225deg,_rgb(250,250,250)_0%,_rgb(255,241,238)_14%,_rgb(255,240,237)_20%,_rgb(255,191,177)_36%,_rgb(144,116,255)_68%,_rgb(95,65,207)_100%)]"

            >
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-sm font-medium leading-tight opacity-90">
                Global Enterprises Powered by AI
              </div>
            </motion.div>

            {/* Card 3: White - Platform Stats */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="w-full md:w-[25%] h-[260px] bg-white rounded-[2.5rem] p-8 self-center shadow-xl border border-gray-100 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 bg-[#D5F596]/40 rounded-xl flex items-center justify-center text-[#113333]">
                  <BarChart2 className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-1 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                  <div className="w-2 h-2 rounded-full bg-[#7856FF]"></div>
                  AI Native
                </div>
              </div>
              <div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Data Points Processed</div>
                <div className="text-4xl font-bold text-[#1A1A1A] mb-2">2.4B+</div>
                <div className="text-[10px] text-gray-400 font-medium">Real-time insights across <span className="text-[#113333] font-bold">12</span> industries</div>
              </div>
            </motion.div>

            {/* Card 4: Light Green - Performance */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
             className="w-full md:w-[15%] h-[320px] rounded-[2.5rem] p-8 text-white flex flex-col justify-end self-center shadow-xl
bg-[linear-gradient(225deg,_rgb(250,250,250)_0%,_rgb(255,241,238)_14%,_rgb(255,240,237)_20%,_rgb(255,191,177)_36%,_rgb(144,116,255)_68%,_rgb(95,65,207)_100%)]"

            >
              <div className="text-4xl font-bold mb-2">99%</div>
              <div className="text-sm font-medium leading-tight opacity-90">
                Efficiency Boost in Operations
              </div>
            </motion.div>

            {/* Card 5: Teal - Scaling */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="w-full md:w-[22%] h-[420px] bg-[url('https://framerusercontent.com/images/S4brlvA5g3h1FAbXIp666pAOKgg.jpg?scale-down-to=2048&width=7680&height=4320')] bg-cover bg-center rounded-[2.5rem] p-10 text-white flex flex-col justify-end shadow-xl relative overflow-hidden"

            >
              <div className="absolute top-[-10%] right-[-10%] w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
              
              <div className="mb-auto">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6">
                  <Gauge className="w-6 h-6" />
                </div>
              </div>
              <div className="text-2xl font-bold leading-tight">
                Scale your business with unmatched AI intelligence
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesHero;

