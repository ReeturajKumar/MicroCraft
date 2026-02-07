import { motion } from "framer-motion";
import { ChevronRight, CheckCircle2, Zap, TrendingUp } from "lucide-react";
import solutionImg from "../../assets/solution.png";

const SolutionsHero = () => {
    return (
        <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden pt-24 pb-12">
            {/* Enhanced Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-[#faf9ff] to-[#f3f0ff] pointer-events-none" />
            
            <div className="max-w-8xl mx-auto px-6 md:px-12 lg:px-16 w-full relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-12">
                
                {/* Left: Content Side */}
                <div className="flex-1 text-left max-w-3xl">

                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-5"
                    >
                        Smart Solutions for <br/> 
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7856FF] to-[#B3A0FF]">Growing Businesses</span>
                    </motion.h1>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed mb-7"
                    >
                        From lead management to sales automation, Microkraft AI delivers tailored solutions that help Indian MSMEs streamline operations, boost productivity, and accelerate growth.
                    </motion.p>

                    {/* Key Benefits Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-7"
                    >
                        <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/80 backdrop-blur-sm border border-slate-100 hover:border-purple-200 hover:shadow-sm transition-all">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-sm">
                                <CheckCircle2 className="w-4 h-4 text-white" />
                            </div>
                            <div>
                                <h3 className="text-base font-bold text-slate-900 mb-1">CRM & Lead Management</h3>
                                <p className="text-sm text-slate-600">Never miss a lead, track every customer interaction</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/80 backdrop-blur-sm border border-slate-100 hover:border-purple-200 hover:shadow-sm transition-all">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-sm">
                                <Zap className="w-4 h-4 text-white" />
                            </div>
                            <div>
                                <h3 className="text-base font-bold text-slate-900 mb-1">Smart Automation</h3>
                                <p className="text-sm text-slate-600">Automate follow-ups, reminders, and workflows</p>
                            </div>
                        </div>
                    </motion.div>
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-wrap items-center gap-4 mb-6"
                    >
                        <button className="px-8 py-4 bg-slate-900 text-white rounded-full text-[15px] font-bold hover:bg-slate-800 transition-all flex items-center gap-2 shadow-xl hover:shadow-2xl hover:-translate-y-0.5">
                            Get Started Free <ChevronRight className="w-4 h-4" />
                        </button>
                        <button className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 rounded-full text-[15px] font-bold transition-all border border-slate-200 flex items-center gap-2 shadow-sm hover:shadow-md">
                            See Solutions <ChevronRight className="w-4 h-4" />
                        </button>
                    </motion.div>

                    {/* Trust Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="mt-8 flex items-center gap-6 text-sm text-slate-500"
                    >
                        <div className="flex items-center gap-2">
                            <div className="flex -space-x-2">
                                <img 
                                    src="https://i.pravatar.cc/150?img=12" 
                                    alt="User" 
                                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                                />
                                <img 
                                    src="https://i.pravatar.cc/150?img=33" 
                                    alt="User" 
                                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                                />
                                <img 
                                    src="https://i.pravatar.cc/150?img=47" 
                                    alt="User" 
                                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                                />
                            </div>
                            <span className="font-semibold text-slate-700">500+ businesses trust us</span>
                        </div>
                        <div className="h-4 w-px bg-slate-300" />
                        <div className="flex items-center gap-1">
                            <span className="text-yellow-500">★★★★★</span>
                            <span className="font-semibold text-slate-700 ml-1">4.9/5 rating</span>
                        </div>
                    </motion.div>
                </div>

                {/* Right: Enhanced Visual Section */}
                <div className="flex-1 relative w-full flex items-center justify-center">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="relative w-full max-w-xl"
                    >
                        {/* Glow Effects */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full blur-3xl" />
                        
                        {/* Main Image Container */}
                        <div className="relative z-10 w-full">
                            <div className="relative p-2">
                                <img 
                                    src={solutionImg} 
                                    alt="Microkraft AI Solutions Dashboard" 
                                    className="w-full h-auto rounded-xl"
                                />
                                
                                {/* Floating Stats Cards */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.8 }}
                                    className="absolute top-5 -left-4 bg-white rounded-xl shadow-xl border border-slate-100 p-2 min-w-[160px]"
                                >
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
                                            <TrendingUp className="w-3 h-3 text-white" />
                                        </div>
                                        <div>
                                            <div className="text-xl font-black text-slate-900">3.5x</div>
                                            <div className="text-xs font-semibold text-slate-500">Faster Growth</div>
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 1 }}
                                    className="absolute bottom-5 -right-2 bg-white rounded-xl shadow-xl border border-slate-100 p-2 min-w-[160px]"
                                >
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                                            <CheckCircle2 className="w-3 h-3 text-white" />
                                        </div>
                                        <div>
                                            <div className="text-xl font-black text-slate-900">85%</div>
                                            <div className="text-xs font-semibold text-slate-500">Time Saved</div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Decorative Gradient Orbs */}
                        <div className="absolute top-10 -right-10 w-32 h-32 bg-purple-300/30 blur-2xl rounded-full" />
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-300/30 blur-2xl rounded-full" />
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default SolutionsHero;
