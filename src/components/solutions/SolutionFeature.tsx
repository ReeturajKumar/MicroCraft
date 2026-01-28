import { motion } from "framer-motion";
import { MousePointer2 } from "lucide-react";

const SolutionFeature = () => {
    return (
        <section className="w-full py-24 bg-white overflow-hidden">
            <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-18 flex flex-col md:flex-row items-center gap-16 lg:gap-24">
                
                {/* Left: Content */}
                <div className="flex-[0.45] text-left">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-[40px] md:text-[48px] lg:text-[56px] font-bold text-slate-900 leading-[1.1] tracking-tight mb-8"
                    >
                        Increase product <br/> development
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-[17px] md:text-[18px] text-slate-500 font-medium leading-relaxed max-w-xl"
                    >
                        Make informed decisions faster with instant access to data. Monitor user interactions through Event-Based Tracking, uncover behavior trends with Cohort Analysis, and refine product features using A/B Testing integrations.
                    </motion.p>
                </div>

                {/* Right: UI Visualization */}
                <div className="flex-[0.55] relative w-full">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative rounded-[40px] p-6 md:p-10 overflow-hidden shadow-2xl"
                        style={{ 
                            background: 'linear-gradient(225deg, rgb(250, 250, 250) 0%, rgb(255, 241, 238) 14%, rgb(255, 240, 237) 20%, rgb(255, 191, 177) 36%, rgb(144, 116, 255) 68%, rgb(95, 65, 207) 100%)'
                        }}
                    >
                        {/* Browser/App Window */}
                        <div className="bg-white rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-white/40 flex flex-col h-[520px] overflow-hidden relative">
                            {/* Dashboard Sidebar & Header Simulator */}
                            <div className="flex h-full">
                                {/* Sidebar (Replays) */}
                                <div className="w-[32%] border-r border-slate-100 flex flex-col bg-white">
                                    <div className="p-4 border-b border-slate-50 flex flex-col gap-2">
                                        <div className="flex justify-between items-center text-slate-900">
                                            <span className="text-[12px] font-bold">Replays</span>
                                            <div className="w-3.5 h-3.5 bg-slate-100 rounded flex items-center justify-center">
                                                <div className="w-1.5 h-1.5 border-r border-b border-slate-400 rotate-45 transform -translate-y-0.5" />
                                            </div>
                                        </div>
                                        <div className="relative">
                                            <div className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-300">
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                                            </div>
                                            <input disabled placeholder="Search Values..." className="w-full bg-slate-50 border-none rounded-md py-1.5 pl-7 text-[10px] text-slate-400 font-medium" />
                                        </div>
                                    </div>
                                    
                                    <div className="flex-1 overflow-y-hidden p-2 space-y-1">
                                        {/* Playback List */}
                                        <div className="bg-[#EFEEFF] rounded-lg p-2 flex flex-col gap-1 border border-purple-100">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-4 h-4 bg-purple-600 rounded flex items-center justify-center">
                                                        <div className="w-0.5 h-2 bg-white rounded-full mx-0.5" />
                                                        <div className="w-0.5 h-2 bg-white rounded-full mx-0.5" />
                                                    </div>
                                                    <span className="text-[10px] font-bold text-slate-900">Feb 7, 2025</span>
                                                </div>
                                                <div className="w-3 h-3 border border-slate-300 rounded flex items-center justify-center">
                                                    <div className="w-1.5 h-1.5 border-b border-r border-slate-400 rotate-45 transform -translate-y-0.5" />
                                                </div>
                                            </div>
                                            <div className="pl-6 space-y-2 py-1">
                                                {["Page View", "Server Request", "Image Loaded", "Clicked Button"].map((label, i) => (
                                                    <div key={i} className="flex items-center justify-between">
                                                        <span className="text-[9px] font-medium text-slate-400 flex items-center gap-2">
                                                            <span className="text-[10px] text-blue-500 font-bold">{`0:0${i + 1}`}</span>
                                                            {label}
                                                        </span>
                                                        <span className="text-[9px] font-bold text-slate-600">1</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        
                                        {/* Faded Replays */}
                                        {[2, 3, 4, 5, 6].map(i => (
                                            <div key={i} className="p-2 flex items-center justify-between opacity-40">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-4 h-4 rounded border border-slate-200 flex items-center justify-center">
                                                        <div className="w-0 h-0 border-t-[3px] border-t-transparent border-l-[5px] border-l-slate-400 border-b-[3px] border-b-transparent ml-0.5" />
                                                    </div>
                                                    <span className="text-[10px] font-bold text-slate-900">Feb 7, 2025</span>
                                                </div>
                                                <div className="w-3 h-3 border border-slate-300 rounded flex items-center justify-center">
                                                    <div className="w-1.5 h-1.5 border-b border-r border-slate-400 rotate-45 transform -translate-y-0.5" />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Main Content Canvas */}
                                <div className="flex-1 bg-[#6FB6F6] relative overflow-hidden">
                                    {/* Grid Background */}
                                    <div className="absolute inset-0 opacity-20" 
                                         style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
                                    />
                                    
                                    {/* Floating Checkout Card */}
                                    <div className="absolute inset-x-8 top-12 bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] p-8 border border-white z-10">
                                        <h3 className="text-[22px] font-bold text-slate-900 mb-8">Time to check out</h3>
                                        
                                        <div className="space-y-6 mb-10">
                                            <div>
                                                <label className="text-[11px] font-bold text-slate-900 mb-2 block">Number of Seats</label>
                                                <div className="px-4 py-3 bg-white rounded-xl border border-slate-100 flex justify-between items-center shadow-sm">
                                                    <span className="text-[13px] font-medium text-slate-500">Included in your plan</span>
                                                    <span className="text-[14px] font-bold text-slate-900">3</span>
                                                </div>
                                            </div>

                                            <div>
                                                <div className="px-4 py-3 bg-white rounded-xl border border-slate-100 flex justify-between items-center shadow-sm">
                                                    <span className="text-[13px] font-medium text-slate-400">Additional Seats</span>
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-6 h-6 rounded-md border border-slate-200 flex items-center justify-center text-slate-300 text-lg">-</div>
                                                        <span className="text-[14px] font-bold text-slate-900">2</span>
                                                        <div className="w-6 h-6 rounded-md border border-slate-200 flex items-center justify-center text-slate-400 text-lg">+</div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div>
                                                <label className="text-[11px] font-bold text-slate-900 mb-2 block">Billing Cycle</label>
                                                <div className="flex p-1 bg-slate-50 rounded-xl border border-slate-100">
                                                    <div className="flex-1 py-2 text-center text-[12px] font-bold text-slate-900">Monthly</div>
                                                    <div className="flex-1 py-1.5 text-center text-[12px] font-bold text-white bg-[#6FB6F6] rounded-lg shadow-md">Yearly</div>
                                                </div>
                                            </div>

                                            <div>
                                                <label className="text-[11px] font-bold text-slate-900 mb-2 block">Card Details</label>
                                                <div className="px-4 py-3 bg-white rounded-xl border border-slate-100 flex items-center gap-3 shadow-sm">
                                                    <div className="w-6 h-4 border border-slate-300 rounded-sm" />
                                                    <div className="flex-1 flex gap-1 items-center">
                                                        <div className="flex gap-0.5">{[1,2,3,4].map(j => <div key={j} className="w-1 h-1 bg-slate-200 rounded-full" />)}</div>
                                                        <div className="flex gap-0.5 mx-2">{[1,2,3,4].map(j => <div key={j} className="w-1 h-1 bg-slate-200 rounded-full" />)}</div>
                                                        <div className="flex gap-0.5">{[1,2,3,4].map(j => <div key={j} className="w-1 h-1 bg-slate-200 rounded-full" />)}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex justify-between items-center mb-6">
                                            <div className="flex flex-col">
                                                <span className="text-[13px] font-bold text-slate-900">Total Due</span>
                                                <span className="text-[10px] font-bold text-slate-400">$400 x 12 Months</span>
                                            </div>
                                            <span className="text-[15px] font-black text-slate-900">$4800 / Year</span>
                                        </div>
                                        
                                        <div className="flex gap-3">
                                            <button className="flex-1 py-3.5 border border-slate-900 text-slate-900 rounded-full text-[12px] font-bold hover:bg-slate-50 transition-colors">
                                                Agree & purchase
                                            </button>
                                            <button className="flex-1 py-3.5 bg-[#6FB6F6] text-white rounded-full text-[12px] font-bold shadow-lg shadow-blue-100">
                                                Go back & edit plan
                                            </button>
                                        </div>

                                        {/* Cursor & Fixed Path (No Animation) */}
                                        <div className="absolute top-[48%] left-[65%] z-20">
                                            <div className="relative">
                                                {/* Purple Pulse Circle (Static) */}
                                                <div className="absolute -inset-4 bg-purple-500/20 rounded-full" />
                                                <div className="absolute -inset-2 bg-purple-500/30 rounded-full" />
                                                
                                                {/* Mouse Pointer */}
                                                <MousePointer2 className="w-6 h-6 text-slate-900 fill-white drop-shadow-lg rotate-[22deg] relative z-10" />
                                                
                                                {/* Red Path Line (Static) */}
                                                <svg className="absolute -top-32 -right-4 w-[240px] h-[300px] pointer-events-none overflow-visible" style={{ color: '#FF6B6B' }}>
                                                    <path 
                                                        d="M230,0 C180,10 160,150 50,120 S0,300 -100,280" 
                                                        stroke="currentColor" 
                                                        strokeWidth="1.5" 
                                                        fill="none" 
                                                        strokeDasharray="1 0"
                                                        className="opacity-40"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* SECOND SECTION: Link product insights to revenue growth */}
            <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-18 flex flex-col md:flex-row-reverse items-center gap-16 lg:gap-24 py-24">
                
                {/* Right: Content (45% Width) */}
                <div className="flex-[0.45] text-left">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-[40px] md:text-[48px] lg:text-[56px] font-bold text-slate-900 leading-[1.1] tracking-tight mb-8"
                    >
                        Link product insights <br/> to revenue growth
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-[17px] md:text-[18px] text-slate-500 font-medium leading-relaxed max-w-xl"
                    >
                        Connect product usage with key business metrics to see how each decision impacts ROI. Find out what increases revenue and optimize your strategy with Multi-Touch Attribution Models, Cohort Analysis, and Funnel Analysis.
                    </motion.p>
                </div>

                {/* Left: UI Visualization (Flow Diagram) */}
                <div className="flex-[0.55] relative w-full">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative rounded-[40px] p-6 md:p-10 overflow-hidden shadow-2xl"
                        style={{ 
                            background: 'linear-gradient(225deg, rgb(250, 250, 250) 0%, rgb(255, 241, 238) 14%, rgb(255, 240, 237) 20%, rgb(255, 191, 177) 36%, rgb(144, 116, 255) 68%, rgb(95, 65, 207) 100%)'
                        }}
                    >
                        <div className="bg-white rounded-2xl shadow-xl border border-white/40 h-[520px] overflow-hidden relative p-8">
                            {/* Sankey-style Header */}
                            <div className="flex justify-between mb-12 relative z-10">
                                {['A - 3', 'A - 2', 'A - 1', 'A Sign Up'].map((label, idx) => (
                                    <div key={idx} className="flex flex-col items-center gap-1">
                                        <div className="px-5 py-1.5 bg-slate-50 rounded-lg text-[11px] font-bold text-slate-400 border border-slate-100 flex items-center justify-between min-w-[120px]">
                                            <span>{label}</span>
                                            <div className="w-1.5 h-1.5 border-r border-b border-slate-300 rotate-[-45deg]" />
                                        </div>
                                        {idx < 3 ? (
                                            <div className="text-center">
                                                <div className="text-[12px] font-bold text-slate-900 mt-2">Checkout Started</div>
                                                <div className="text-[10px] font-bold text-slate-400">{11 + idx * 2}.{4 + idx}% <span className="ml-1 text-[9px] font-medium opacity-60">{800 + idx * 150}</span></div>
                                            </div>
                                        ) : (
                                            <div className="text-center">
                                                <div className="text-[12px] font-bold text-slate-900 mt-2">Sign Up Completed</div>
                                                <div className="text-[10px] font-bold text-slate-400">100% <span className="ml-1 text-[9px] font-medium opacity-60">6,999</span></div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Flow Visualization Canvas */}
                            <div className="relative h-full w-full">
                                {/* Flow Layers */}
                                <div className="absolute inset-0 flex">
                                    {/* Vertical Bars and Connectors */}
                                    <div className="w-full h-full flex justify-between relative">
                                        {/* Flow Column 1 */}
                                        <div className="flex flex-col gap-8 w-24">
                                            <div className="w-12 h-12 bg-[#7856FF] rounded-lg relative z-20 shadow-lg">
                                                <div className="absolute top-1/2 left-full w-32 h-[80px] bg-[#7856FF]/10 clip-flow transform -translate-y-1/2" />
                                            </div>
                                            <div className="w-24 h-4 text-[10px] font-bold text-slate-300 flex items-center gap-2 mb-4">
                                                <div className="w-4 h-4 rounded border border-slate-100" /> Product Viewed
                                            </div>
                                            <div className="w-12 h-12 bg-[#7856FF]/20 rounded-lg relative z-10" />
                                            <div className="w-24 h-4 text-[10px] font-bold text-slate-300 flex items-center gap-2 mb-4">
                                                <div className="w-4 h-4 rounded border border-slate-100" /> Product Added
                                            </div>
                                            <div className="w-12 h-12 bg-[#7856FF]/15 rounded-lg relative z-10" />
                                        </div>

                                        {/* Flow Column 2 */}
                                        <div className="flex flex-col gap-8 w-24 pt-4">
                                            <div className="w-12 h-12 bg-[#7856FF] rounded-lg relative z-20 shadow-lg" />
                                            <div className="w-24 h-4 text-[10px] font-bold text-slate-300 flex items-center gap-2 mb-4">
                                                <div className="w-4 h-4 rounded border border-slate-100" /> Page View
                                            </div>
                                            <div className="w-12 h-20 bg-[#7856FF] rounded-lg relative z-20 shadow-md" />
                                            <div className="w-24 h-4 text-[10px] font-bold text-slate-300 flex items-center gap-2 mb-4">
                                                <div className="w-4 h-4 rounded border border-slate-100" /> Product Viewed
                                            </div>
                                            <div className="w-12 h-12 bg-[#7856FF] rounded-lg relative z-20 shadow-md" />
                                        </div>

                                        {/* Final Destination Bar */}
                                        <div className="w-16 h-[320px] bg-[#7856FF] rounded-lg relative z-20 shadow-xl self-start mt-[-20px]" />
                                    </div>
                                </div>
                                
                                {/* SVG Flow Paths */}
                                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10">
                                    <path d="M50,25 C150,25 150,150 250,150" stroke="#7856FF" strokeWidth="60" fill="none" />
                                    <path d="M50,150 C150,150 150,250 250,250" stroke="#7856FF" strokeWidth="40" fill="none" />
                                    <path d="M250,150 C350,150 350,100 450,100" stroke="#7856FF" strokeWidth="80" fill="none" />
                                </svg>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* THIRD SECTION: See beyond the product journey */}
            <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-18 flex flex-col md:flex-row items-center gap-16 lg:gap-24 py-24">
                
                {/* Left: Content (45% Width) */}
                <div className="flex-[0.45] text-left">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-[40px] md:text-[48px] lg:text-[56px] font-bold text-slate-900 leading-[1.1] tracking-tight mb-8"
                    >
                        See beyond the <br/> product journey
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-[17px] md:text-[18px] text-slate-500 font-medium leading-relaxed max-w-xl"
                    >
                        Gain a complete view of performance with a unified platform that blends product, marketing, and all other relevant business data. Use Custom Dashboards to monitor key metrics, Cross-Platform Tracking, and dive deep into behavior analysis.
                    </motion.p>
                </div>

                {/* Right: UI Visualization (Bar Chart & Overlays) */}
                <div className="flex-[0.55] relative w-full">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative rounded-[40px] p-6 md:p-10 overflow-hidden shadow-2xl"
                        style={{ 
                            background: 'linear-gradient(225deg, rgb(250, 250, 250) 0%, rgb(255, 241, 238) 14%, rgb(255, 240, 237) 20%, rgb(255, 191, 177) 36%, rgb(144, 116, 255) 68%, rgb(95, 65, 207) 100%)'
                        }}
                    >
                        <div className="bg-white rounded-2xl shadow-xl border border-white/40 h-[520px] overflow-hidden relative p-12">
                            {/* Bar Chart Container */}
                            <div className="relative h-full w-full flex flex-col">
                                {/* Axis and Grid */}
                                <div className="absolute inset-0 flex flex-col justify-between">
                                    {[100, 75, 50, 25, 0].map(val => (
                                        <div key={val} className="flex items-center gap-4 w-full">
                                            <span className="text-[11px] font-bold text-slate-300 w-10">{val}%</span>
                                            <div className="flex-1 h-[1px] bg-slate-50" />
                                        </div>
                                    ))}
                                </div>

                                {/* Bars Group */}
                                <div className="flex-1 relative z-10 flex items-end justify-around px-8 pb-8">
                                    <div className="flex flex-col items-center gap-4 w-full max-w-[400px]">
                                        <div className="flex items-end gap-6 w-full h-[300px]">
                                            <div className="flex-1 h-[90%] bg-[#9074FF] rounded-lg shadow-lg relative">
                                                <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-center">
                                                    <div className="text-[12px] font-bold text-slate-900">100%</div>
                                                    <div className="text-[10px] font-bold text-slate-400">10.0K</div>
                                                </div>
                                            </div>
                                            <div className="flex-1 h-[65%] bg-[#FFBFB1] rounded-lg shadow-md" />
                                            <div className="flex-1 h-[45%] bg-[#B1F1FF]/30 rounded-lg" />
                                        </div>
                                        <span className="text-[14px] font-bold text-slate-400">Step 1</span>
                                    </div>

                                    <div className="flex flex-col items-center gap-4 w-full max-w-[400px]">
                                        <div className="flex items-end gap-6 w-full h-[300px]">
                                            <div className="flex-1 h-[70%] bg-[#9074FF]/60 rounded-lg" />
                                            <div className="flex-1 h-[60%] bg-[#FFBFB1] rounded-lg shadow-md relative">
                                                <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-center">
                                                    <div className="text-[12px] font-bold text-slate-900">80%</div>
                                                    <div className="text-[10px] font-bold text-slate-400">8.0K</div>
                                                </div>
                                            </div>
                                            <div className="flex-1 h-[55%] bg-[#B1F1FF]/60 rounded-lg" />
                                        </div>
                                        <span className="text-[14px] font-bold text-slate-400">Step 2</span>
                                    </div>
                                </div>

                                {/* Floating UI Overlays */}
                                <div className="absolute top-10 left-1/2 -translate-x-1/4 z-20 space-y-4">
                                    {/* Breakdown Popover */}
                                    <div className="bg-white rounded-xl shadow-2xl border border-slate-100 p-4 w-[280px]">
                                        <div className="text-[11px] font-bold text-slate-400 mb-3 uppercase tracking-wider">Breakdown</div>
                                        <div className="space-y-2">
                                            <div className="p-3 bg-white border border-slate-200 rounded-lg flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-5 h-5 bg-emerald-50 rounded flex items-center justify-center text-[10px] font-bold text-emerald-600">Aa</div>
                                                    <span className="text-[12px] font-bold text-slate-700">Email Read</span>
                                                </div>
                                                <div className="w-4 h-2 border-y border-slate-200" />
                                            </div>
                                            <div className="p-3 bg-purple-50 border border-purple-100 rounded-lg flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-5 h-5 bg-purple-100 rounded flex items-center justify-center text-[10px] font-bold text-purple-600">Aa</div>
                                                    <span className="text-[12px] font-bold text-purple-900 font-bold">Book a Visit</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Search Property Popover */}
                                    <div className="bg-white rounded-xl shadow-2xl border border-slate-100 p-3 w-[260px] ml-16">
                                        <div className="relative mb-3">
                                            <input disabled placeholder="Search..." className="w-full bg-slate-50 border border-slate-200 rounded-md py-2 px-3 text-[12px] font-medium" />
                                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-300 text-lg">+</span>
                                        </div>
                                        <div className="space-y-1">
                                            {['Book a Visit', 'Email Read', 'Visit Appointments', 'City', 'Power User'].map((item, i) => (
                                                <div key={i} className={`px-3 py-2 rounded-md flex justify-between items-center ${i === 0 ? 'bg-purple-50 text-purple-900' : 'text-slate-600'}`}>
                                                    <span className="text-[12px] font-bold">{item}</span>
                                                    <span className="text-[9px] font-bold text-slate-300 uppercase">{i < 3 ? 'Event' : i === 3 ? 'User' : 'Cohort'}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SolutionFeature;
