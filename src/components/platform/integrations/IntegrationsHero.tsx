import { motion } from "framer-motion";
import { Check, ArrowRight, Zap, RefreshCw, Layers } from "lucide-react";
import img1 from "../../../assets/GoogleSheet.webp"
import img2 from "../../../assets/Rozarpay.webp"
import img3 from "../../../assets/Notion.webp"
import img4 from "../../../assets/Payu.webp"
import img5 from "../../../assets/Husbspot.webp";
import img6 from "../../../assets/Stripe.webp";
import img7 from "../../../assets/Slack-logo.webp";
import img8 from "../../../assets/Zoom-Logo.webp";
import img9 from "../../../assets/Instagram_logo_2016.webp";
import img10 from "../../../assets/linkdin.webp";

const IntegrationsHero = () => {
  const satellites = [
    { icon: img1, delay: 0.1, top: "10%", left: "70%" },
    { icon: img2, delay: 0.2, top: "25%", left: "90%" },
    { icon: img3, delay: 0.3, top: "60%", left: "95%" },
    { icon: img9, delay: 0.4, top: "85%", left: "80%" },
    { icon: img4, delay: 0.5, top: "92%", left: "35%" },
    { icon: img5, delay: 0.6, top: "75%", left: "10%" },
    { icon: img6, delay: 0.7, top: "45%", left: "5%" },
    { icon: img7, delay: 0.8, top: "15%", left: "20%" },
    { icon: img8, delay: 0.9, top: "5%", left: "45%" },
    { icon: img10, delay: 1.0, top: "35%", left: "75%" },
  ];

  return (
    <section className="relative min-h-screen lg:min-h-[580px] flex items-center bg-transparent pt-32 lg:pt-20 pb-16 lg:pb-10 overflow-hidden font-sans">
      
      <div className="max-w-8xl mx-auto px-6 md:px-12 lg:px-20 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-0">
          
          {/* Left Content */}
          <div className="flex-1 max-w-2xl text-center lg:text-left lg:pt-8">
            
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-[36px] sm:text-[44px] lg:text-[52px] font-black text-[#1A1A1A] leading-[1.1] mb-6 tracking-tight"
            >
              The Heart of Your <br className="hidden sm:block" />
              <span className="text-[#7856FF]">Digital Ecosystem</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-slate-500 text-[16px] sm:text-[18px] font-medium leading-relaxed max-w-lg mb-8 mx-auto lg:mx-0"
            >
              MicroCraft doesn't just connect; it synchronizes your data across 100+ tools. Experience real-time workflows that eliminate manual entry and bridge department silos.
            </motion.p>

            {/* Value Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                { icon: Zap, text: "Zero-Latency Data Sync", desc: "Instant updates across all apps" },
                { icon: RefreshCw, text: "Bidirectional Workflows", desc: "Data flows both ways effortlessly" },
                { icon: Layers, text: "Centralized Governance", desc: "Monitor all connections in one place" },
                { icon: Check, text: "Enterprise Security", desc: "Soc2 & OAuth 2.0 implementation" },
              ].map((item, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  key={i}
                  className="flex items-start gap-3 group"
                >
                  <div className="mt-1 w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center text-[#7856FF] group-hover:bg-[#7856FF] group-hover:text-white transition-all duration-300">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[14px] font-bold text-[#1A1A1A] mb-0.5">{item.text}</h4>
                    <p className="text-[12px] text-slate-400 font-medium">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center gap-4 mb-10"
            >
              <button className="w-full sm:w-auto px-8 py-4 bg-[#7856FF] text-white rounded-[16px] font-bold text-[16px] flex items-center justify-center gap-2 hover:bg-[#6339ff] transition-all shadow-xl shadow-purple-200/50 group">
                Explore Marketplace <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-600 border border-slate-200 rounded-[16px] font-bold text-[16px] hover:border-[#7856FF] hover:text-[#7856FF] transition-all">
                API Documentation
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-4 py-4 border-t border-slate-100"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                  </div>
                ))}
              </div>
              <p className="text-[13px] text-slate-400 font-medium">
                Joined by <span className="text-[#1A1A1A] font-bold">2,500+</span> teams worldwide
              </p>
            </motion.div>
          </div>

          {/* Right Visual: Circuit Integration Hub */}
          <div className="flex-1 w-full max-w-[600px] lg:max-w-none mx-auto lg:mx-0 relative mt-4 lg:mt-0">
            <div className="relative w-full h-[450px] sm:h-[520px] lg:h-[480px]">
              
              {/* Scale Wrapper for Mobile boundaries */}
              <div className="absolute inset-0 scale-[0.75] sm:scale-[0.85] md:scale-90 lg:scale-100 origin-center">
                
                {/* Circuit traces Layer */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <defs>
                    <filter id="circuit-glow">
                      <feGaussianBlur stdDeviation="0.4" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>
                  
                  {satellites.map((sat, i) => {
                    const targetX = parseFloat(sat.left);
                    const targetY = parseFloat(sat.top);
                    const centerX = 50;
                    const centerY = 50;
                    
                    const midX = centerX + (targetX - centerX) * 0.6;
                    const pathData = `M${centerX},${centerY} L${midX},${centerY} L${midX},${targetY} L${targetX},${targetY}`;
                    
                    return (
                      <g key={i}>
                        <motion.path 
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 1 }}
                          transition={{ duration: 1.5, delay: sat.delay, ease: "easeOut" }}
                          d={pathData} 
                          stroke="#F1F5F9" strokeWidth="0.3" fill="none"
                        />
                        <motion.path 
                          initial={{ pathLength: 0.15, pathOffset: 0, opacity: 0 }}
                          animate={{ pathOffset: [0, 1], opacity: [0, 1, 1, 0] }}
                          transition={{ 
                            duration: 3.5, 
                            repeat: Infinity, 
                            delay: sat.delay * 2,
                            ease: "linear" 
                          }}
                          d={pathData} 
                          stroke="#7856FF" strokeWidth="0.6" fill="none"
                          strokeDasharray="5 30"
                          filter="url(#circuit-glow)"
                        />
                      </g>
                    );
                  })}
                </svg>

                {/* Central Node (Processor) */}
                <motion.div 
                  initial={{ scale: 0, rotate: -45 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", damping: 15 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                >
                  <div className="relative group p-2 sm:p-3 bg-[#7856FF]/5 rounded-full">
                    <div className="absolute inset-0 bg-[#7856FF]/10 rounded-full blur-[25px] sm:blur-[35px] group-hover:bg-[#7856FF]/20 transition-all duration-500 animate-pulse" />
                    <div className="relative w-20 h-20 sm:w-28 sm:h-28 bg-white rounded-full flex items-center justify-center border border-slate-100 shadow-[0_25px_60px_rgba(0,0,0,0.12)] overflow-hidden">
                      <img src="/logo.png" alt="MicroCraft Logo" className="w-12 h-12 sm:w-16 sm:h-16 object-contain" />
                    </div>
                  </div>
                </motion.div>

                {/* Ecosystem Nodes (Components) */}
                <div className="absolute inset-0">
                  {satellites.map((satellite, index) => (
                    <SatelliteNode 
                      key={index}
                      icon={satellite.icon} 
                      top={satellite.top} 
                      left={satellite.left} 
                      delay={satellite.delay}
                    />
                  ))}
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const SatelliteNode = ({ icon, top, left, delay }: { icon: string, top: string, left: string, delay: number }) => (
  <motion.div
    initial={{ scale: 0, opacity: 0, y: 15 }}
    animate={{ scale: 1, opacity: 1, y: 0 }}
    transition={{ delay, type: "spring", damping: 12 }}
    whileHover={{ scale: 1.15, zIndex: 50, transition: { duration: 0.2 } }}
    style={{ top, left }}
    className="absolute -translate-x-1/2 -translate-y-1/2 z-30 group"
  >
    <div className="relative">
      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#F8FAFC] shadow-xl rounded-full absolute top-[4px] sm:top-[5px] left-0 ring-1 ring-slate-100" />
      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full relative flex items-center justify-center p-2.5 sm:p-3.5 border border-slate-50 shadow-[0_10px_25px_rgba(0,0,0,0.08)] transition-all">
        <img src={icon} alt="Platform" className="w-full h-full object-contain " />
      </div>
    </div>
  </motion.div>
);

export default IntegrationsHero;
