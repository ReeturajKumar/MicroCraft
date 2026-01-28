import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import solutionImg from "../../assets/solution.png";

const SolutionsHero = () => {
    return (
        <section className="relative w-full min-h-[580px] flex items-center justify-center overflow-hidden pt-20 pb-16">
            {/* Seamless Background Blend: Starts transparent at the very top to merge with Navbar */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-[#faf9ff] to-[#f3f0ff] pointer-events-none" />
            
            <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-18 w-full relative z-10 flex flex-col md:flex-row items-center gap-16 lg:gap-24">
                
                {/* Left: Content Side (60% Width) */}
                <div className="flex-[0.6] text-left">

                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-[54px] md:text-[80px] lg:text-[115px] font-black text-slate-900 leading-[0.85] tracking-tighter mb-8"
                    >
                        Results. <br/> 
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7856FF] to-[#B3A0FF]">Simplified.</span>
                    </motion.h1>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-[17px] md:text-[19px] text-slate-500 font-bold leading-relaxed max-w-2xl mb-10"
                    >
                        The complete digital operating system to manage, automate, and scale your entire business. One unified platform to drive departmental efficiency and measurable growth.
                    </motion.p>
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-wrap items-center gap-4"
                    >
                        <button className="px-7 py-3.5 bg-slate-900 text-white rounded-full text-[15px] font-black hover:bg-slate-800 transition-all flex items-center gap-2 shadow-2xl">
                            Start Free Trial <ChevronRight className="w-4 h-4" />
                        </button>
                        <button className="px-7 py-3.5 bg-white hover:bg-slate-50 text-slate-900 rounded-full text-[15px] font-black transition-all border border-slate-200 flex items-center gap-2 shadow-sm">
                            Book a Demo <ChevronRight className="w-4 h-4 ml-1" />
                        </button>
                    </motion.div>
                </div>

                {/* Right: Visual Section (40% Width) with Top Fade Mask */}
                <div className="flex-[0.4] relative w-full flex items-center justify-center pt-20 md:pt-0">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative w-full"
                        style={{ 
                            maskImage: 'linear-gradient(to bottom, transparent, black 150px)',
                            WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 150px)'
                        }}
                    >
                        {/* Soft Glow behind the image */}
                        <div className="absolute inset-x-0 bottom-0 top-20 rounded-full " />
                        
                        {/* Static Image */}
                        <div className="relative z-10 w-full flex justify-end">
                            <img 
                                src={solutionImg} 
                                alt="MicroCraft Sales Solution" 
                                className="w-full h-auto  max-w-none"
                            />
                        </div>

                        {/* Decorative Gradient Orbs */}
                        <div className="absolute top-20 -right-10 w-24 h-24 bg-purple-200/40 blur-3xl rounded-full" />
                        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-indigo-100/40 blur-3xl rounded-full" />
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default SolutionsHero;
