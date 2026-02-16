import { motion } from "framer-motion";
import { ChevronRight, MousePointer2, BarChart2, Megaphone, Cpu } from "lucide-react";

/**
 * TEAM EFFICIENCY COMPONENT (v3 - Pixel Perfect Reference Match)
 * Replicating the "One platform. Many teams." section with maximum fidelity.
 */

const teamCards = [
    {
        title: "Product teams",
        description: "Identify the precise features that promote long-term user loyalty.",
        icon: <MousePointer2 className="w-3.5 h-3.5 text-indigo-600" />,
        link: "Product Teams",
        visualization: (
            <div className="w-full bg-white rounded-xl shadow-[0_15px_30px_rgba(0,0,0,0.06)] border border-slate-100 flex flex-col h-full overflow-hidden">
                {/* Rate Driver Header */}
                <div className="p-2 border-b border-slate-100 flex justify-center items-center bg-white">
                    <span className="text-[10px] font-bold text-slate-800 flex items-center gap-1.5 opacity-80">
                        Rate Driver <ChevronRight className="w-2.5 h-2.5 rotate-90 text-slate-400" />
                    </span>
                </div>

                {/* Legend Row (4, 5, 6, 7) */}
                <div className="grid grid-cols-4 bg-slate-50 border-b border-slate-100">
                    {[4, 5, 6, 7].map(n => (
                        <div key={n} className="py-1 text-center text-[9px] font-bold text-slate-300 border-r border-slate-100 last:border-0">{n}</div>
                    ))}
                </div>

                {/* Main Content Area */}
                <div className="relative flex-1 bg-white min-h-[130px]">
                    {/* Background Grid */}
                    <div className="absolute inset-0 grid grid-cols-4 grid-rows-6">
                        {Array.from({ length: 24 }).map((_, i) => (
                            <div key={i} className="border-r border-b border-slate-100/30 last:border-r-0"></div>
                        ))}
                    </div>

                    {/* Gradient/Purple Overlay Pattern */}
                    <div className="absolute bottom-0 left-0 w-full flex items-end h-[60%] pointer-events-none">
                        <div className="w-1/4 h-[20%] bg-indigo-500/80 border-r border-indigo-400/20"></div>
                        <div className="w-1/4 h-[30%] bg-indigo-500/90 border-r border-indigo-400/20"></div>
                        <div className="w-1/4 h-full flex flex-col border-r border-indigo-400/20">
                            <div className="h-1/2 bg-indigo-300/40"></div>
                            <div className="h-1/2 bg-indigo-600"></div>
                        </div>
                        <div className="w-1/4 h-full flex flex-col">
                            <div className="h-1/3 bg-indigo-200/20"></div>
                            <div className="h-1/3 bg-indigo-400/60"></div>
                            <div className="h-1/3 bg-emerald-500"></div>
                        </div>
                    </div>

                    {/* Floating Component/Card (Optimal Action) */}
                    <div className="absolute top-4 right-2 w-52 bg-white shadow-2xl border border-slate-100/50 rounded-2xl p-5 z-20">
                        <div className="mb-5">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-3.5 h-3.5 rounded-full bg-emerald-500"></div>
                                <span className="text-[10px] font-black text-slate-800 tracking-tight">OPTIMAL ACTION</span>
                            </div>
                            <p className="text-[9px] text-slate-500 font-bold ml-5.5">Just once within 7 days.</p>
                        </div>

                        <div className="mb-5">
                            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-3 pb-1 border-b border-slate-50">KEY FINDINGS</p>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="flex flex-col gap-0.5">
                                        <div className="w-2.5 h-1 bg-emerald-500 rounded-full"></div>
                                        <div className="w-2.5 h-1 bg-emerald-500 rounded-full"></div>
                                    </div>
                                    <p className="text-[8px] font-bold text-slate-700 leading-tight">Action linked to increased conversion</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-slate-400 ml-1.5 font-bold">●</span>
                                    <p className="text-[8px] font-bold text-slate-400 leading-tight">Rarely performed among user group</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2.5">CORRELATION</p>
                            <div className="flex justify-between items-center mb-1.5">
                                <span className="text-[8px] font-bold text-slate-400">Strong positive</span>
                                <span className="text-[9px] font-black text-slate-800">0.38</span>
                            </div>
                            <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                <div className="h-full bg-indigo-500 w-[40%] ml-[50%] rounded-full shadow-[0_0_8px_rgba(99,102,241,0.5)]"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Detailed Footer Section */}
                <div className="grid grid-cols-2 bg-slate-50/50 border-t border-slate-100">
                    <div className="p-4 border-r border-slate-100">
                        <p className="text-[8px] font-black text-slate-400 text-center mb-4 tracking-tight">Correlation with 2nd Week retention</p>
                        <div className="space-y-5">
                            <div className="relative h-4 flex flex-col justify-center">
                                <div className="w-full h-[1px] bg-slate-200"></div>
                                <div className="absolute left-[65%] top-1/2 -translate-y-1/2 w-10 h-1 bg-indigo-500 rounded-full shadow-sm"></div>
                                <span className="absolute right-0 -top-2.5 text-[7px] font-black text-slate-800">0.38</span>
                                <span className="absolute inset-x-0 -bottom-3 text-[6px] font-black text-slate-400 uppercase text-center opacity-60">Strong Positive</span>
                            </div>
                            <div className="relative h-4 flex flex-col justify-center opacity-80">
                                <div className="w-full h-[1px] bg-slate-200"></div>
                                <div className="absolute left-[35%] top-1/2 -translate-y-1/2 w-6 h-1 bg-indigo-300 rounded-full"></div>
                                <span className="absolute left-[35%] -top-2.5 text-[7px] font-black text-slate-800">-0.09</span>
                                <span className="absolute inset-x-0 -bottom-3 text-[6px] font-black text-slate-400 uppercase text-center opacity-60">Weak</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-4">
                        <p className="text-[8px] font-black text-slate-400 text-center mb-4 tracking-tight">Key findings</p>
                        <div className="space-y-3">
                            <div className="flex items-center gap-2.5">
                                <div className="w-2 h-2 bg-emerald-500 rounded-sm"></div>
                                <p className="text-[7px] font-bold text-slate-600">Action linked to increased conversion</p>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <div className="w-2 h-2 bg-slate-400 rounded-sm"></div>
                                <p className="text-[7px] font-bold text-slate-600">Rarely performed among user group</p>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <div className="w-2 h-2 bg-rose-500 rounded-sm"></div>
                                <p className="text-[7px] font-bold text-slate-600">Action linked to increased conversion</p>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <div className="w-2 h-2 bg-slate-900 rounded-sm"></div>
                                <p className="text-[7px] font-bold text-slate-600">Done by a minority of your user group</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    },
    {
        title: "Data teams",
        description: "Uncover user behavior patterns to inform product strategy and growth initiatives.",
        icon: <BarChart2 className="w-3.5 h-3.5 text-blue-600" />,
        link: "Data Teams",
        visualization: (
            <div className="w-full bg-white rounded-xl shadow-[0_15px_30px_rgba(0,0,0,0.06)] border border-slate-100 flex flex-col h-full overflow-hidden p-4">
                <div className="flex justify-between items-start mb-4">
                    <div className="flex flex-col">
                        <p className="text-[10px] font-black text-slate-800 flex items-center gap-1.5">
                            <div className="w-3 h-3 bg-indigo-50 rounded flex items-center justify-center">
                                <BarChart2 className="w-2 h-2 text-indigo-500" />
                            </div>
                            Signups by Plan Type
                        </p>
                        <p className="text-[7px] text-slate-400 font-medium ml-4.5 mt-0.5">Linear, dau, last 3 months - Number of signup broken d...</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 mb-4 ml-1">
                    {['Free Plan', 'Standard Plan', 'Premium Plan'].map((p, i) => (
                        <div key={i} className="flex items-center gap-1">
                            <div className={`w-1.5 h-1.5 rounded-full ${i === 2 ? 'bg-cyan-400' : i === 1 ? 'bg-rose-400' : 'bg-indigo-400'}`}></div>
                            <span className="text-[7px] font-bold text-slate-500 uppercase">{p}</span>
                        </div>
                    ))}
                </div>
                <div className="relative flex-1 mt-2">
                    <svg className="w-full h-full min-h-[90px]" viewBox="0 0 100 60" preserveAspectRatio="none">
                        <path d="M0,50 Q25,48 50,30 T100,20" fill="none" stroke="#6366F1" strokeWidth="1" />
                        <path d="M0,55 Q25,52 50,45 T100,40" fill="none" stroke="#F43F5E" strokeWidth="1" />
                        <path d="M0,45 Q25,40 50,25 T100,10" fill="none" stroke="#22D3EE" strokeWidth="1" />
                    </svg>
                    <div className="absolute top-2 right-2 bg-white/95 backdrop-blur shadow-xl border border-slate-100 rounded-lg p-3 z-10 w-32">
                        <p className="text-[8px] font-black text-slate-800 mb-0.5">Premium Plan</p>
                        <p className="text-[7px] text-slate-400 mb-2">Mon April 22, 2024</p>
                        <p className="text-[10px] font-black text-slate-900 mb-1 leading-none">28k <span className="text-[7px] text-slate-400 font-medium">events</span></p>
                        <p className="text-[8px] font-black text-emerald-500">+3.587% <span className="text-slate-400 font-medium">from previous week</span></p>
                    </div>
                </div>
            </div>
        )
    },
    {
        title: "Marketing teams",
        description: "Understand which channels drive the highest quality user acquisition and engagement.",
        icon: <Megaphone className="w-3.5 h-3.5 text-pink-600" />,
        link: "Marketing Teams",
        visualization: (
            <div className="w-full bg-white rounded-xl shadow-[0_15px_30px_rgba(0,0,0,0.06)] border border-slate-100 flex flex-col h-full overflow-hidden p-4">
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-4 h-4 bg-indigo-50 rounded flex items-center justify-center">
                        <BarChart2 className="w-2.5 h-2.5 text-indigo-500" />
                    </div>
                    <p className="text-[10px] font-black text-slate-800">ROAs ($) by Source</p>
                </div>
                <div className="overflow-hidden border border-slate-50 rounded-lg">
                    <table className="w-full text-left text-[7px] border-collapse">
                        <thead>
                            <tr className="bg-slate-50 text-slate-400 font-bold uppercase">
                                <th className="p-2">UTM Source</th>
                                <th className="p-2">Return-on-Ad Spend ($)</th>
                                <th className="p-2">Revenue (Mn $)</th>
                                <th className="p-2">Ad-Spend (Mn $)</th>
                            </tr>
                        </thead>
                        <tbody className="text-slate-600 font-bold">
                            {[
                                { s: "Reddit", roa: "1,245", roaU: "+28%", rev: "156,152", revU: "+9%", ads: "125", adsU: "-9%" },
                                { s: "Twitter", roa: "1,175", roaU: "+17%", rev: "147,982", revU: "-1%", ads: "123", adsU: "-15%" },
                                { s: "YouTube", roa: "1,172", roaU: "+11%", rev: "66,441", revU: "-2%", ads: "58", adsU: "-10%" },
                                { s: "Instagram", roa: "1,108", roaU: "+11%", rev: "205,006", revU: "-10%", ads: "185", adsU: "-18%" },
                                { s: "Facebook", roa: "1,103", roaU: "+10%", rev: "345,008", revU: "-10%", ads: "185", adsU: "-13%" },
                                { s: "Overall", roa: "1,044", roaU: "-1.8%", rev: "1,714,775", revU: "-5%", ads: "1,641", adsU: "-3%" }
                            ].map((r, i) => (
                                <tr key={i} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                                    <td className="p-2 text-slate-800">{r.s}</td>
                                    <td className="p-2">{r.roa} <span className={r.roaU.startsWith('+') ? 'text-emerald-500 ml-1' : 'text-rose-500 ml-1'}>{r.roaU}</span></td>
                                    <td className="p-2">{r.rev} <span className={r.revU.startsWith('+') ? 'text-emerald-500 ml-1' : 'text-rose-500 ml-1'}>{r.revU}</span></td>
                                    <td className="p-2">{r.ads} <span className={r.adsU.startsWith('+') ? 'text-emerald-500 ml-1' : 'text-rose-500 ml-1'}>{r.adsU}</span></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    },
    {
        title: "Engineering teams",
        description: "Gain rapid insights into system performance and bugs through detailed event tracking.",
        icon: <Cpu className="w-3.5 h-3.5 text-violet-600" />,
        link: "Engineering Teams",
        visualization: (
            <div className="w-full bg-white rounded-xl shadow-[0_15px_30px_rgba(0,0,0,0.06)] border border-slate-100 flex flex-col h-full overflow-hidden p-4">
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-4 h-4 bg-indigo-50 rounded flex items-center justify-center">
                        <BarChart2 className="w-2.5 h-2.5 text-indigo-500" />
                    </div>
                    <p className="text-[10px] font-black text-slate-800">CPU Usage by Project</p>
                </div>
                <div className="space-y-2 relative">
                    {[
                        { l: "Project #1234", w: "95%", c: "bg-indigo-400" },
                        { l: "Project #5678", w: "90%", c: "bg-blue-400" },
                        { l: "Project #9012", w: "65%", c: "bg-orange-400" },
                        { l: "Project #3456", w: "75%", c: "bg-rose-400" },
                        { l: "Project #7890", w: "55%", c: "bg-emerald-400" },
                        { l: "Project #1122", w: "80%", c: "bg-cyan-400" },
                        { l: "Project #3344", w: "45%", c: "bg-amber-400" },
                        { l: "Project #5566", w: "70%", c: "bg-purple-400" }
                    ].map((b, i) => (
                        <div key={i} className="flex items-center gap-2">
                            <span className="text-[7px] text-slate-400 font-bold w-16">{b.l}</span>
                            <div className="flex-1 h-1.5 bg-slate-50 rounded-full overflow-hidden">
                                <div className={`h-full ${b.c}`} style={{ width: b.w }}></div>
                            </div>
                            <span className="text-[7px] text-slate-600 font-bold">40.65B</span>
                        </div>
                    ))}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur shadow-xl border border-slate-100 rounded-lg p-3 z-10 w-40">
                        <p className="text-[8px] font-black text-slate-800 mb-2 underline decoration-indigo-200 underline-offset-4">CPU Usage by Project</p>
                        <p className="text-[7px] text-slate-400 mb-2">Project #42348</p>
                        <div className="space-y-1.5">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1.5">
                                    <div className="w-1.5 h-1.5 rounded-sm bg-indigo-400"></div>
                                    <span className="text-[6px] text-slate-500 font-bold">Dec 3 2024 - Jan 1 2025</span>
                                </div>
                                <span className="text-[6px] font-black text-slate-800">37,430,903,743</span>
                            </div>
                            <p className="text-[6px] text-emerald-500 font-black ml-3">+2.6% <span className="text-slate-400">from previous period</span></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
];

const TeamEfficiency = () => {
    return (
        <section className="w-full bg-[#fdfdfd] py-15 px-6 font-sans">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="mb-10">
                    <motion.h2 
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-[40px] md:text-[48px] font-black text-slate-900 leading-[1.1] tracking-tight mb-2"
                    >
                        One platform. Many teams. <br/>
                        Shared understanding.
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-slate-500 text-lg font-medium max-w-2xl"
                    >
                        MicroKraft helps every team contribute to product growth—from analysis to action.
                    </motion.p>
                </div>

                {/* Team Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {teamCards.map((card, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="bg-white rounded-[48px] border border-slate-100 flex flex-col lg:flex-row h-full overflow-hidden group min-h-[290px]"
                        >
                            {/* Left: Text Content */}
                            <div className="flex-[0.6] p-8 flex flex-col items-start bg-white">
                                <div className="flex items-center gap-2.5 mb-3">
                                    <div className="w-5 h-5 flex items-center justify-center">
                                        {card.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-800 tracking-tight">{card.title}</h3>
                                </div>
                                <p className="text-[13px] font-bold text-slate-400 leading-relaxed max-w-[200px] mb-4">
                                    {card.description}
                                </p>
                                <button className="mt-auto px-4 py-2 bg-slate-50 rounded-full flex items-center gap-1.5 text-[11px] font-bold text-slate-900 transition-colors">
                                    {card.link} <ChevronRight className="w-3.5 h-3.5" />
                                </button>
                            </div>

                            {/* Right: Visualization Background with Precise Reference Gradient */}
                            <div 
                                className="flex-1 relative p-3 lg:p-4 flex items-center justify-center overflow-hidden"
                                style={{ background: 'linear-gradient(225deg, rgb(250, 250, 250) 0%, rgb(255, 241, 238) 14%, rgb(255, 240, 237) 20%, rgb(255, 191, 177) 36%, rgb(144, 116, 255) 68%, rgb(95, 65, 207) 100%)' }}
                            >
                                {/* The "Floating" UI Component - fixed scale, no hover */}
                                <div className="w-full relative z-10 shadow-2xl rounded-2xl overflow-hidden scale-[0.95]">
                                    {card.visualization}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamEfficiency;
