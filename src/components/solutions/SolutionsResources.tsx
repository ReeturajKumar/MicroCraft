import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import guideImg from "../../assets/guide.png";

const SolutionsResources = () => {
    return (
        <section className="w-full bg-white py-24">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-18">
                
                {/* --- LARGE TOP CARD: GUIDE --- */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-white rounded-[40px] overflow-hidden border border-slate-100 shadow-sm flex flex-col md:flex-row items-center mb-12 min-h-[400px]"
                >
                    {/* Left: Content */}
                    <div className="flex-1 p-12 md:p-16 flex flex-col items-center justify-center text-center">
                        <div className="inline-block px-3 py-1 bg-[#E1F9F6] border border-[#B1F1FF] rounded text-[#0CB49B] text-[11px] font-bold uppercase tracking-wider mb-5">
                            Ebook
                        </div>
                        <h2 className="text-[28px] md:text-[32px] font-bold text-slate-900 leading-tight mb-4">
                            Dig in to our guide
                        </h2>
                        <p className="text-[14px] md:text-[15px] text-slate-500 font-medium leading-relaxed mb-6 max-w-sm mx-auto">
                            The Guide to Product Analytics answers all your product analytics questions. Learn about your users and how to scale your product.
                        </p>
                        <button className="flex items-center gap-2 text-[14px] font-bold text-slate-900 hover:gap-3 transition-all">
                            Read Ebook <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Right: Visual (Even more reduced height) */}
                    <div className="flex-1 p-5 md:p-6 w-full h-full flex items-center justify-center">
                        <div className="bg-[#B1F1FF]/50 w-full h-full min-h-[280px] rounded-[32px] flex items-center justify-center overflow-hidden">
                            <img 
                                src={guideImg} 
                                alt="Solutions Guide Illustration" 
                                className="w-full max-w-[280px] h-auto object-contain mix-blend-multiply"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* --- BOTTOM GRID: 3 CARDS --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                    {/* CARD 1: DEMO DATASET */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="bg-[#FAFAFA] rounded-[32px] overflow-hidden border border-slate-100 shadow-sm flex flex-col group cursor-pointer"
                    >
                        <div className="h-[240px] bg-[#B1EBFF]/40 flex items-center justify-center p-8 overflow-hidden relative">
                             {/* Custom SVG Platform/Laptop based on User Path */}
                             <svg viewBox="0 0 120 150" className="w-40 h-40 transform group-hover:scale-110 transition-transform duration-500 drop-shadow-2xl">
                                <defs>
                                    <linearGradient id="c" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#6FB6F6" />
                                        <stop offset="100%" stopColor="#7856FF" />
                                    </linearGradient>
                                    <filter id="glow">
                                        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                                        <feMerge>
                                            <feMergeNode in="coloredBlur"/>
                                            <feMergeNode in="SourceGraphic"/>
                                        </feMerge>
                                    </filter>
                                </defs>
                                {/* Decorative base layers for depth */}
                                <path 
                                    opacity="0.2"
                                    fill="#7856FF"
                                    d="m 21.609 90.029 l 25.846 -15.516 a 6.465 6.465 0 0 1 6.622 -0.022 l 48.101 28.448 c 2.93 1.735 2.946 5.971 0.025 7.724 L 76.357 126.18 a 6.466 6.466 0 0 1 -6.622 0.021 L 21.634 97.753 c -2.93 -1.735 -2.945 -5.97 -0.025 -7.724 Z" 
                                />
                                {/* Main path provided by user */}
                                <path 
                                    fill="url(#c)"
                                    filter="url(#glow)"
                                    d="m 21.609 84.029 l 25.846 -15.516 a 6.465 6.465 0 0 1 6.622 -0.022 l 48.101 28.448 c 2.93 1.735 2.946 5.971 0.025 7.724 L 76.357 120.18 a 6.466 6.466 0 0 1 -6.622 0.021 L 21.634 91.753 c -2.93 -1.735 -2.945 -5.97 -0.025 -7.724 Z" 
                                />
                                {/* Internal Screen-like detail */}
                                <path 
                                    opacity="0.3"
                                    fill="white"
                                    d="m 40 85 l 10 -6 a 2 2 0 0 1 2 0 l 25 15 a 1 1 0 0 1 0 2 l -10 6 a 2 2 0 0 1 -2 0 l -25 -15 a 1 1 0 0 1 0 -2 Z"
                                />
                             </svg>
                        </div>
                        <div className="p-10 flex-1 flex flex-col items-start text-left">
                            <div className="px-3 py-1 bg-blue-50 border border-blue-100 rounded text-blue-600 text-[10px] font-bold uppercase tracking-wider mb-6">
                                Demo Data
                            </div>
                            <h3 className="text-[22px] font-bold text-slate-900 mb-4">
                                Explore Demo Dataset
                            </h3>
                            <p className="text-[14px] text-slate-500 font-medium leading-relaxed mb-8">
                                Explore a full demo of MicroCraft. If you make a dashboard and like it, you can move it into your own project and add your own data.
                            </p>
                            <div className="mt-auto flex items-center gap-2 text-[14px] font-bold text-slate-900 group-hover:gap-3 transition-all">
                                Explore Demo Data <ChevronRight className="w-4 h-4" />
                            </div>
                        </div>
                    </motion.div>

                    {/* CARD 2: ENGAGEMENT */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-[#FAFAFA] rounded-[32px] overflow-hidden border border-slate-100 shadow-sm flex flex-col group cursor-pointer"
                    >
                        <div className="h-[240px] bg-[#E1F9F6] flex items-center justify-center p-8 relative overflow-hidden">
                             {/* Mini Graph Recreations */}
                            <div className="w-full h-full bg-white/80 rounded-xl overflow-hidden shadow-xl border border-white p-4 flex flex-col gap-4">
                                <div className="h-6 w-full flex items-center gap-2 border-b border-slate-50 pb-2">
                                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                                    <div className="w-20 h-2 bg-slate-100 rounded-full" />
                                </div>
                                <div className="flex-1 flex items-end gap-1 px-2">
                                    {[40, 70, 45, 90, 65, 80, 50, 85, 95, 75, 60, 40].map((h, i) => (
                                        <div 
                                            key={i} 
                                            className="flex-1 bg-[#0CB49B] rounded-t-sm opacity-20" 
                                            style={{ height: `${h}%` }}
                                        />
                                    ))}
                                    {/* Overlay Line Graph */}
                                    <div className="absolute inset-x-8 bottom-12 h-1/2">
                                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                            <path d="M0,80 Q25,20 50,50 T100,20" fill="none" stroke="#0CB49B" strokeWidth="3" />
                                            <path d="M0,90 Q25,40 50,70 T100,40" fill="none" stroke="#FFBFB1" strokeWidth="2" strokeDasharray="4 4" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-10 flex-1 flex flex-col items-start text-left">
                            <div className="px-3 py-1 bg-[#E1F9F6] border border-[#B1F1FF] rounded text-[#0CB49B] text-[10px] font-bold uppercase tracking-wider mb-6">
                                Ebook
                            </div>
                            <h3 className="text-[22px] font-bold text-slate-900 mb-4">
                                Learn about engagement
                            </h3>
                            <p className="text-[14px] text-slate-500 font-medium leading-relaxed mb-8">
                                Engagement is a vital indicator of product health. Learn how to track and leverage it in our Engagement Primer.
                            </p>
                            <div className="mt-auto flex items-center gap-2 text-[14px] font-bold text-slate-900 group-hover:gap-3 transition-all">
                                Read More <ChevronRight className="w-4 h-4" />
                            </div>
                        </div>
                    </motion.div>

                    {/* CARD 3: GROWTH */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="bg-[#FAFAFA] rounded-[32px] overflow-hidden border border-slate-100 shadow-sm flex flex-col group cursor-pointer"
                    >
                        <div className="h-[240px] bg-[#F5F3FF] flex items-center justify-center p-8 overflow-hidden relative">
                             {/* Small Chart Snippet */}
                             <div className="w-full h-full bg-white/90 rounded-xl shadow-lg border border-white flex flex-col p-4">
                                <div className="flex items-end gap-3 h-full pt-8 relative">
                                    <div className="w-10 h-[80%] bg-[#7856FF] rounded-t-md relative">
                                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-slate-400">80%</div>
                                    </div>
                                    <div className="w-10 h-[60%] bg-[#FF6B6B] rounded-t-md relative">
                                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-slate-400">70%</div>
                                    </div>
                                    <div className="w-10 h-[95%] bg-[#7856FF]/40 rounded-t-md border border-t-0 border-purple-200" />
                                    <div className="w-10 h-[75%] bg-slate-100 rounded-t-md" />
                                    <div className="w-10 h-[85%] bg-[#FF6B6B]/20 rounded-t-md" />

                                    {/* Tooltip RECREATION */}
                                    <div className="absolute top-2 right-4 bg-white shadow-2xl border border-slate-100 rounded-lg p-2 min-w-[100px] z-10 pointer-events-none">
                                        <div className="text-[9px] font-bold text-slate-900 mb-1">Safari</div>
                                        <div className="flex justify-between items-center gap-4">
                                            <span className="text-[8px] font-bold text-slate-400">78% drop-off</span>
                                            <span className="text-[8px] font-bold text-slate-900">115</span>
                                        </div>
                                    </div>
                                </div>
                             </div>
                        </div>
                        <div className="p-10 flex-1 flex flex-col items-start text-left">
                            <div className="px-3 py-1 bg-[#F5F3FF] border border-[#DDD6FE] rounded text-[#7856FF] text-[10px] font-bold uppercase tracking-wider mb-6">
                                Ebook
                            </div>
                            <h3 className="text-[22px] font-bold text-slate-900 mb-4">
                                Learn about growth
                            </h3>
                            <p className="text-[14px] text-slate-500 font-medium leading-relaxed mb-8">
                                Growth is key to understanding a product's trajectory. Learn how to track and leverage it in our Growth Primer.
                            </p>
                            <div className="mt-auto flex items-center gap-2 text-[14px] font-bold text-slate-900 group-hover:gap-3 transition-all">
                                Read More <ChevronRight className="w-4 h-4" />
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default SolutionsResources;
