import { motion } from "framer-motion";
import { ChevronRight, BarChart3, Database } from "lucide-react";
import carImage from "../../assets/Car.png";

/**
 * PLATFORM HERO COMPONENT
 * Showcasing Microkraft AI's complete business platform
 */

const PlatformHero = () => {
    return (
        <div className="w-full relative bg-white">
            
            {/* MAIN CONTENT CONTAINER */}
            <div className="relative z-10">
                
                {/* --- HERO CONTENT --- */}
                <section className="max-w-8xl mx-auto px-8 lg:px-15 xl:px-16 pt-16 pb-16 md:pt-20 md:pb-20 grid grid-cols-1 lg:grid-cols-10 gap-12 items-center min-h-[85vh]">
                    
                    {/* LEFT CONTENT */}
                    <div className="lg:col-span-7 flex flex-col items-start z-20 relative">

                        <motion.h1 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F172A] leading-[1.1] mt-10 mb-5 tracking-tight"
                        >
                            Everything Your Business <br/> Needs {" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7856FF] to-[#A855F7]">
                                In One Platform
                            </span>
                        </motion.h1>

                        <motion.p 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed mb-7 max-w-xl"
                        >
                            Microkraft AI combines CRM, automation, analytics, and integrations into one powerful system designed specifically for Indian businesses.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.25 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-8 w-full max-w-2xl"
                        >
                            <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 hover:border-purple-200 hover:shadow-md transition-all duration-300">
                                <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-sm">
                                    <div className="w-2 h-2 rounded-full bg-white"></div>
                                </div>
                                <span className="text-[15px] font-semibold text-slate-700 leading-snug">Manage leads, customers & sales in one place</span>
                            </div>
                            <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 hover:border-purple-200 hover:shadow-md transition-all duration-300">
                                <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-sm">
                                    <div className="w-2 h-2 rounded-full bg-white"></div>
                                </div>
                                <span className="text-[15px] font-semibold text-slate-700 leading-snug">Automate follow-ups, reminders & workflows</span>
                            </div>
                            <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 hover:border-purple-200 hover:shadow-md transition-all duration-300">
                                <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-sm">
                                    <div className="w-2 h-2 rounded-full bg-white"></div>
                                </div>
                                <span className="text-[15px] font-semibold text-slate-700 leading-snug">Connect with 25+ tools you already use</span>
                            </div>
                            <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 hover:border-purple-200 hover:shadow-md transition-all duration-300">
                                <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-sm">
                                    <div className="w-2 h-2 rounded-full bg-white"></div>
                                </div>
                                <span className="text-[15px] font-semibold text-slate-700 leading-snug">Real-time analytics & business insights</span>
                            </div>
                        </motion.div>
                        
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-wrap items-center gap-4"
                        >
                            <button className="h-14 px-8 bg-[#0F172A] text-white rounded-full font-bold text-[15px] hover:bg-[#7856FF] transition-all flex items-center gap-2 shadow-xl hover:shadow-[#7856FF]/20 hover:-translate-y-0.5 cursor-pointer">
                                See Platform Demo <ChevronRight className="w-4 h-4 ml-1" />
                            </button>
                            <button className="h-14 px-8 bg-slate-100 text-slate-900 rounded-full font-bold text-[15px] hover:bg-slate-200 transition-all flex items-center gap-2 cursor-pointer">
                                Talk to Expert
                            </button>
                        </motion.div>
                    </div>

                    {/* RIGHT VISUALS (The Widgets Stack) */}
                    <div className="lg:col-span-3 relative h-[450px] lg:h-[500px] w-full flex items-center justify-center lg:justify-end">
                        <div className="relative w-[500px] h-[500px]">
                            {/* CAR IMAGE */}
                            <motion.div 
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="absolute -right-10 bottom-0 z-10 w-[480px] pointer-events-none"
                            >
                                <img 
                                    src={carImage} 
                                    alt="Analytics Dashboard" 
                                    className="w-full h-auto object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
                                />
                            </motion.div>

                            {/* WIDGET A: LEAD CONVERSION CHART */}
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                                className="absolute top-2 -left-16 bg-white p-4 rounded-[24px] shadow-[0_20px_40px_-5px_rgba(0,0,0,0.08)] border border-slate-100 w-[240px] z-20 hover:shadow-lg transition-shadow"
                            >
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                                        <BarChart3 className="w-3 h-3" /> Lead Conversion
                                    </span>
                                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">+28%</span>
                                </div>
                                <div className="flex gap-4 h-20 items-end px-1 pb-1">
                                    <div className="w-1/2 h-full flex flex-col justify-end items-center gap-1 group">
                                        <div className="text-[10px] font-bold text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity mb-1">2.8k</div>
                                        <div className="w-full h-[90%] bg-gradient-to-b from-[#7856FF] to-[#6D28D9] rounded-t-xl relative shadow-sm"></div>
                                    </div>
                                    <div className="w-1/2 h-full flex flex-col justify-end items-center gap-1 group">
                                        <div className="text-[10px] font-bold text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity mb-1">780</div>
                                        <div className="w-full h-[50%] bg-[#E9D5FF] rounded-t-xl relative"></div>
                                    </div>
                                </div>
                                <div className="flex justify-between text-[11px] font-bold text-slate-500 pt-3 mt-1 border-t border-slate-50">
                                    <span>Leads</span>
                                    <span>Converted</span>
                                </div>
                            </motion.div>

                            {/* WIDGET B: BUSINESS ACTIVITY */}
                            <motion.div 
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                                className="absolute top-[250px] -left-32 bg-white/90 backdrop-blur-md p-6 rounded-[28px] shadow-[0_30px_60px_-10px_rgba(0,0,0,0.12)] border border-white/50 w-[320px] z-30"
                            >
                                <div className="flex items-center gap-4 mb-5">
                                    <div className="w-10 h-10 rounded-2xl bg-[#F3E8FF] flex items-center justify-center text-[#7856FF]">
                                        <Database className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[13px] text-slate-900 leading-tight">Business Activity</h3>
                                        <p className="text-[11px] text-slate-400 font-medium">Real-time performance</p>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    {[
                                        { label: "New Leads", val: "142", width: "70%", color: "bg-[#8B5CF6]" },
                                        { label: "Follow-ups", val: "89", width: "55%", color: "bg-[#C4B5FD]" },
                                        { label: "Conversions", val: "34", width: "40%", color: "bg-[#7856FF]" },
                                        { label: "Active Tasks", val: "67", width: "85%", color: "bg-slate-300" },
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center text-[11px] text-slate-600 font-medium h-6">
                                            <span className="w-20 text-[10px] text-slate-500 font-semibold">{item.label}</span>
                                            <div className="flex-1 h-2.5 rounded-full bg-slate-50 ml-3 mr-3 shadow-inner overflow-hidden">
                                                <motion.div initial={{ width: 0 }} whileInView={{ width: item.width }} transition={{ duration: 1 }} className={`h-full rounded-full ${item.color}`} />
                                            </div>
                                            <span className="w-8 text-right font-bold text-slate-900">{item.val}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* --- PLATFORM CAPABILITIES SECTION --- */}
                <section className="bg-[#0B0122] pt-32 pb-32 mt-[-150px] relative z-0">
                    {/* Seamless Background Stripes (Integrated) */}
                    <div className="absolute top-0 left-0 right-0 h-[600px] flex pointer-events-none overflow-hidden select-none">
                        <div className="flex-1 h-full bg-gradient-to-b from-white via-[#FFF1EB] to-[#0B0122]"></div>
                        <div className="flex-1 h-full bg-gradient-to-b from-white via-[#FFE4E1] to-[#0B0122]"></div>
                        <div className="flex-1 h-full bg-gradient-to-b from-white via-[#FADADD] to-[#0B0122]"></div>
                        <div className="flex-1 h-full bg-gradient-to-b from-white via-[#F5E1FD] to-[#0B0122]"></div>
                        <div className="flex-1 h-full bg-gradient-to-b from-white via-[#E6E6FA] to-[#0B0122]"></div>
                        <div className="flex-1 h-full bg-gradient-to-b from-white via-[#D8BFD8] to-[#0B0122]"></div>
                        <div className="flex-1 h-full bg-gradient-to-b from-white via-[#C084FC] to-[#0B0122]"></div>
                        <div className="flex-1 h-full bg-gradient-to-b from-white via-[#A855F7] to-[#0B0122]"></div>
                        <div className="flex-1 h-full bg-gradient-to-b from-white via-[#8B5CF6] to-[#0B0122]"></div>
                        <div className="flex-1 h-full bg-gradient-to-b from-white via-[#7C3AED] to-[#0B0122]"></div>
                    </div>

                    <div className="max-w-8xl mx-auto px-6 lg:px-12 xl:px-16 relative z-10 pt-48">
                        <div className="w-full border border-white/20 rounded-[40px] overflow-hidden bg-white/[0.03] grid grid-cols-1 lg:grid-cols-2 backdrop-blur-xl shadow-[0_32px_64px_-15px_rgba(0,0,0,0.5)]">
                            {/* Graphic Side with Crisp Glass Background */}
                            <div className="p-6 md:p-8 lg:p-10 flex items-center justify-center bg-white/[0.02] border-r border-white/20">
                                <div className="w-full aspect-[4/3] rounded-[28px] bg-gradient-to-br from-[#FFE8E0] via-[#FDC7C7] to-[#8E84F5] p-6 flex items-center justify-center relative shadow-2xl overflow-hidden">
                                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="w-full bg-white rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] p-6 z-10">
                                        <div className="flex justify-between items-center mb-5">
                                            <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-700 bg-slate-50 px-2 py-1 rounded border border-slate-100">
                                                <BarChart3 className="w-3 h-3" />
                                                Before & After Microkraft
                                                <ChevronRight className="w-2 h-2 rotate-90" />
                                            </div>
                                        </div>
                                        <div className="relative h-40 w-full">
                                            <div className="absolute top-1/4 left-0 w-full border-t border-dashed border-[#FF7E5F] opacity-50"></div>
                                            <div className="absolute top-3/4 left-0 w-full border-t border-dashed border-[#7856FF] opacity-50"></div>
                                            <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 400 160" preserveAspectRatio="none">
                                                <motion.path 
                                                    initial={{ pathLength: 0 }} 
                                                    whileInView={{ pathLength: 1 }} 
                                                    transition={{ duration: 1.5, ease: "easeInOut" }}
                                                    d="M 0 140 L 40 135 L 80 138 L 120 120 L 160 110 L 200 40 L 240 100 L 280 115 L 320 112 L 360 110 L 400 108"
                                                    fill="none" stroke="#7856FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                                                />
                                                <circle cx="200" cy="40" r="4" fill="#7856FF" />
                                            </svg>
                                            <div className="absolute top-8 left-[210px] bg-white shadow-lg border border-slate-100 rounded-lg p-3 z-20 min-w-[150px]">
                                                <p className="text-[9px] font-bold text-slate-800 mb-2">Platform Implemented</p>
                                                <p className="text-[8px] font-bold text-slate-900 mb-2 flex items-center gap-1">
                                                    <span className="text-[#34D399]">+8.2x</span> Efficiency Gain
                                                </p>
                                                <div className="space-y-1.5">
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-1.5 h-1.5 rounded-sm bg-[#7856FF]"></div>
                                                        <p className="text-[7px] text-slate-500"><span className="font-bold text-slate-700">12.5</span> leads processed per day</p>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-1.5 h-1.5 rounded-sm bg-[#FF7E5F]"></div>
                                                        <p className="text-[7px] text-slate-500"><span className="font-bold text-slate-700">1.5</span> leads processed per day</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-between mt-4 px-2">
                                            {[-15, -12, -9, -6, -3, 0, 3, 6, 9, 12, 15].map(v => (
                                                <span key={v} className="text-[8px] text-slate-400 font-bold">{v}</span>
                                            ))}
                                        </div>
                                    </motion.div>
                                </div>
                            </div>

                            {/* Content Side with Crisp Glass Background */}
                            <div className="p-8 md:p-12 lg:py-14 lg:px-12 flex flex-col justify-center relative text-white bg-white/[0.02] backdrop-blur-xl border-white/20">
                                <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="max-w-md">
                                    <h2 className="text-3xl md:text-4xl font-bold mb-5 leading-[1.1] tracking-tight">
                                        Built for Indian <br/> Business Reality
                                    </h2>
                                    <p className="text-slate-300 text-base md:text-lg font-medium leading-relaxed mb-7">
                                        Our platform understands how Indian MSMEs actually work — from WhatsApp leads to Tally integration, from local payments to multi-location management.
                                    </p>
                                    <div className="w-12 h-[1px] bg-white/40 mb-6"></div>
                                    
                                    {/* Stats in inline layout */}
                                    <div className="flex flex-wrap gap-6 mb-7">
                                        <div className="relative">
                                            <h3 className="text-3xl font-extrabold mb-1.5 tracking-tighter text-white">3.5x</h3>
                                            <p className="text-slate-300 text-sm font-semibold leading-snug max-w-[180px]">
                                                faster <span className="text-white font-bold underline decoration-purple-500/50 underline-offset-4">lead response time</span>
                                            </p>
                                        </div>
                                        <div className="relative">
                                            <h3 className="text-3xl font-extrabold mb-1.5 tracking-tighter text-white">25+</h3>
                                            <p className="text-slate-300 text-sm font-semibold leading-snug max-w-[180px]">
                                                <span className="text-white font-bold underline decoration-purple-500/50 underline-offset-4">integrations</span> with Indian
                                            </p>
                                        </div>
                                    </div>

                                    {/* CTA Button */}
                                    <button className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[#0F172A] rounded-full font-bold text-[15px] hover:bg-slate-100 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 cursor-pointer">
                                        Explore Platform <ChevronRight className="w-4 h-4" />
                                    </button>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default PlatformHero;
