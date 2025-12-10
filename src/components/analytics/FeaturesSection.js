import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { ArrowUpRight, MoreHorizontal, Zap, TrendingUp, Activity, Layers, } from "lucide-react";
// --- UTILITY: Looping Wrapper ---
// This forces the content inside to "restart" every (duration) milliseconds
const LiveLoop = ({ duration, children, className, }) => {
    const [key, setKey] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setKey((prev) => prev + 1);
        }, duration);
        return () => clearInterval(interval);
    }, [duration]);
    return (_jsx("div", { className: `w-full h-full ${className}`, children: children }, key));
};
// --- CUSTOM HOOK: Count Up ---
const useCountUp = (end, duration = 2000, prefix = "", suffix = "") => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp)
                startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            // Ease out quartic for smooth landing
            const ease = 1 - Math.pow(1 - progress, 4);
            setCount(ease * end);
            if (progress < 1)
                window.requestAnimationFrame(step);
        };
        window.requestAnimationFrame(step);
    }, [end, duration]);
    const formatted = count.toLocaleString("en-US", {
        minimumFractionDigits: Number.isInteger(end) ? 0 : 2,
        maximumFractionDigits: Number.isInteger(end) ? 0 : 2,
    });
    return `${prefix}${formatted}${suffix}`;
};
// ==========================================
// 1. ANALYTICS CARD (Looping Graphs)
// ==========================================
const AnalyticsMockup = () => {
    // We use the LiveLoop parent to reset this component, so standard hooks work once per cycle
    const val1 = useCountUp(7832.5, 1500, "$");
    const val2 = useCountUp(4250.1, 1800, "$");
    const val3 = useCountUp(6485.9, 2000, "$");
    const totalUsers = useCountUp(2836, 1200);
    return (_jsxs("div", { className: "flex flex-col gap-4 w-full h-full", children: [_jsxs("div", { className: "flex gap-4", children: [_jsxs("div", { className: "bg-white/80 backdrop-blur-xl p-4 rounded-2xl shadow-lg shadow-purple-500/5 border border-purple-100 flex-1 relative overflow-hidden group", children: [_jsx("div", { className: "absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500" }), _jsxs("div", { className: "flex justify-between mb-2", children: [_jsx("div", { className: "p-1.5 bg-purple-50 rounded-lg text-purple-600", children: _jsx(Activity, { size: 16 }) }), _jsx("span", { className: "text-[10px] bg-green-50 text-green-600 px-2 py-0.5 rounded-full font-bold", children: "+12%" })] }), _jsx("div", { className: "text-2xl font-black text-slate-900", children: totalUsers }), _jsx("div", { className: "text-[10px] text-slate-500", children: "Active Tasks" })] }), _jsxs("div", { className: "bg-white/80 backdrop-blur-xl p-4 rounded-2xl shadow-lg shadow-pink-500/5 border border-pink-100 flex-1 relative overflow-hidden", children: [_jsx("div", { className: "absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-pink-500 to-purple-500" }), _jsx("div", { className: "flex justify-between mb-2", children: _jsx("div", { className: "p-1.5 bg-pink-50 rounded-lg text-pink-600", children: _jsx(TrendingUp, { size: 16 }) }) }), _jsx("div", { className: "text-lg font-bold text-slate-900", children: "$14k" }), _jsx("div", { className: "h-8 w-full mt-2", children: _jsx("svg", { viewBox: "0 0 100 40", className: "w-full h-full overflow-visible", children: _jsx("path", { d: "M0,35 Q20,35 30,20 T60,25 T100,5", fill: "none", stroke: "#ec4899", strokeWidth: "3", strokeLinecap: "round", className: "animate-draw-line" }) }) })] })] }), _jsxs("div", { className: "bg-white p-5 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex-1", children: [_jsxs("div", { className: "flex justify-between items-center mb-5", children: [_jsx("h4", { className: "text-sm font-bold text-slate-800", children: "Team Performance" }), _jsx(MoreHorizontal, { size: 16, className: "text-slate-300" })] }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "space-y-1", children: [_jsxs("div", { className: "flex justify-between text-xs font-medium", children: [_jsx("span", { className: "text-slate-500", children: "Foysal" }), _jsx("span", { className: "text-slate-900", children: val1 })] }), _jsx("div", { className: "h-2 w-full bg-slate-50 rounded-full overflow-hidden", children: _jsx("div", { className: "h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full w-0 animate-grow-bar", style: { "--target-width": "85%" } }) })] }), _jsxs("div", { className: "space-y-1", children: [_jsxs("div", { className: "flex justify-between text-xs font-medium", children: [_jsx("span", { className: "text-slate-500", children: "Hasan" }), _jsx("span", { className: "text-slate-900", children: val2 })] }), _jsx("div", { className: "h-2 w-full bg-slate-50 rounded-full overflow-hidden", children: _jsx("div", { className: "h-full bg-gradient-to-r from-pink-500 to-rose-400 rounded-full w-0 animate-grow-bar", style: { "--target-width": "45%", animationDelay: "0.1s" } }) })] }), _jsxs("div", { className: "space-y-1", children: [_jsxs("div", { className: "flex justify-between text-xs font-medium", children: [_jsx("span", { className: "text-slate-500", children: "Moshar" }), _jsx("span", { className: "text-slate-900", children: val3 })] }), _jsx("div", { className: "h-2 w-full bg-slate-50 rounded-full overflow-hidden", children: _jsx("div", { className: "h-full bg-gradient-to-r from-violet-500 to-purple-400 rounded-full w-0 animate-grow-bar", style: { "--target-width": "65%", animationDelay: "0.2s" } }) })] })] })] })] }));
};
// ==========================================
// 2. WORKFLOW CARD (Moving Particles)
// ==========================================
const WorkflowMockup = () => {
    return (_jsx("div", { className: "bg-white p-5 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 w-full h-full relative overflow-hidden", children: _jsxs("div", { className: "relative z-10 flex flex-col items-center gap-2 h-full justify-center", children: [_jsx("div", { className: "bg-slate-900 text-white px-4 py-2 rounded-xl text-xs font-bold shadow-lg shadow-slate-900/20 z-10 animate-pop-in", children: "Trigger" }), _jsx("div", { className: "h-8 w-0.5 bg-slate-100 relative overflow-visible", children: _jsx("div", { className: "absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)] animate-drop-particle" }) }), _jsx("div", { className: "bg-white border-2 border-purple-100 text-purple-600 px-4 py-2 rounded-xl text-xs font-bold z-10 animate-pop-in", style: { animationDelay: "0.5s" }, children: "Check Condition" }), _jsx("div", { className: "h-8 w-0.5 bg-slate-100 relative overflow-visible", children: _jsx("div", { className: "absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-pink-500 rounded-full shadow-[0_0_10px_rgba(236,72,153,0.8)] animate-drop-particle", style: { animationDelay: "0.8s" } }) }), _jsx("div", { className: "bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl text-sm font-bold shadow-lg shadow-purple-500/30 z-10 animate-pop-in", style: { animationDelay: "1.2s" }, children: "Send Email" })] }) }));
};
// ==========================================
// 3. PIPELINE CARD (Sliding Cards)
// ==========================================
const PipelineMockup = () => {
    return (_jsxs("div", { className: "bg-white p-5 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 w-full h-full overflow-hidden relative", children: [_jsxs("div", { className: "flex justify-between items-center mb-4", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Layers, { size: 14, className: "text-purple-500" }), _jsx("h4", { className: "text-sm font-bold text-slate-800", children: "Recent Deals" })] }), _jsx("div", { className: "h-1.5 w-1.5 rounded-full bg-green-500 animate-ping" })] }), _jsxs("div", { className: "space-y-3", children: [_jsxs("div", { className: "bg-slate-50 p-3 rounded-xl flex items-center justify-between animate-slide-in-right", style: { animationDelay: "0s" }, children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-xs", children: "V" }), _jsxs("div", { children: [_jsx("div", { className: "text-xs font-bold text-slate-800", children: "Voxelx Inc" }), _jsx("div", { className: "text-[10px] text-slate-500", children: "Negotiation" })] })] }), _jsx("span", { className: "text-xs font-bold text-slate-900", children: "$12k" })] }), _jsxs("div", { className: "bg-slate-50 p-3 rounded-xl flex items-center justify-between animate-slide-in-right", style: { animationDelay: "0.2s" }, children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-bold text-xs", children: "F" }), _jsxs("div", { children: [_jsx("div", { className: "text-xs font-bold text-slate-800", children: "Framer" }), _jsx("div", { className: "text-[10px] text-slate-500", children: "Closed Won" })] })] }), _jsx("span", { className: "text-xs font-bold text-slate-900", children: "$8.5k" })] }), _jsxs("div", { className: "bg-slate-50 p-3 rounded-xl flex items-center justify-between animate-slide-in-right", style: { animationDelay: "0.4s" }, children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs", children: "S" }), _jsxs("div", { children: [_jsx("div", { className: "text-xs font-bold text-slate-800", children: "Stripe" }), _jsx("div", { className: "text-[10px] text-slate-500", children: "Proposal" })] })] }), _jsx("span", { className: "text-xs font-bold text-slate-900", children: "$24k" })] })] })] }));
};
// ==========================================
// MAIN COMPONENT
// ==========================================
const RotatingFeatureText = () => {
    return (_jsx("div", { className: "inline-block relative h-[1.2em] w-full md:w-auto align-bottom overflow-hidden align-middle mt-1 md:mt-0", children: _jsxs("div", { className: "feature-scroll-inner flex flex-col text-left pl-2 md:pl-3", children: [_jsx("span", { className: "block h-[1.2em] text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-purple-400 pb-2", children: "Selling Easier" }), _jsx("span", { className: "block h-[1.2em] text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-purple-400 pb-2", children: "Scaling Faster" }), _jsx("span", { className: "block h-[1.2em] text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-purple-400 pb-2", children: "Growth Simpler" }), _jsx("span", { className: "block h-[1.2em] text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-purple-400 pb-2", children: "Selling Easier" })] }) }));
};
const FeaturesSection = () => {
    return (_jsxs("section", { className: "py-24 px-4 md:px-8 font-sans relative overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 pointer-events-none" }), _jsxs("div", { className: "max-w-7xl mx-auto relative z-10", children: [_jsxs("div", { className: "text-center mb-20 animate-fade-in-up", children: [_jsx("span", { className: "inline-block py-1 px-3 rounded-full bg-purple-50 border border-purple-100 text-purple-600 text-xs font-bold tracking-wider mb-4 uppercase", children: "Powerful Features" }), _jsxs("h2", { className: "text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight flex flex-col md:block items-center justify-center leading-tight", children: ["Features That Make ", _jsx(RotatingFeatureText, {})] }), _jsx("p", { className: "mt-6 text-lg text-slate-500 max-w-2xl mx-auto", children: "Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups." })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8", children: [_jsxs("div", { className: "md:col-span-7 lg:col-span-8 bg-white rounded-[40px] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col md:flex-row items-center gap-10 overflow-hidden relative group", children: [_jsx("div", { className: "absolute -right-20 -top-20 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" }), _jsxs("div", { className: "flex-1 space-y-6 text-left relative z-10", children: [_jsx("div", { className: "w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mb-2", children: _jsx(Activity, { size: 24 }) }), _jsxs("h3", { className: "text-3xl md:text-4xl font-bold text-slate-900 leading-tight", children: ["Manage Operations with", " ", _jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500", children: "Rich Analytics" })] }), _jsx("p", { className: "text-slate-500 text-lg leading-relaxed", children: "Derive actionable insights and measure operations in real-time. Our loops never stop, just like your growth." }), _jsxs("button", { className: "px-8 py-4 bg-slate-900 text-white rounded-full font-bold flex items-center gap-2 hover:bg-purple-600 transition-all hover:shadow-lg hover:shadow-purple-500/20 active:scale-95 duration-300", children: ["Explore Analytics ", _jsx(ArrowUpRight, { size: 18 })] })] }), _jsx("div", { className: "flex-1 w-full max-w-sm h-[320px] relative z-10", children: _jsx(LiveLoop, { duration: 5000, className: "relative", children: _jsx(AnalyticsMockup, {}) }) })] }), _jsxs("div", { className: "md:col-span-5 lg:col-span-4 bg-slate-900 rounded-[40px] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.2)] flex flex-col items-center justify-between text-center relative overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-900" }), _jsx("div", { className: "absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" }), _jsxs("div", { className: "relative z-10 w-full mb-8", children: [_jsx("h3", { className: "text-2xl font-bold text-white mb-3", children: "Streamline Workflow" }), _jsx("p", { className: "text-slate-400 text-sm", children: "Automate your busy work with visual pipelines." })] }), _jsx("div", { className: "relative z-10 w-full h-[280px]", children: _jsx(LiveLoop, { duration: 3000, children: _jsx(WorkflowMockup, {}) }) })] }), _jsxs("div", { className: "md:col-span-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-[40px] p-8 md:p-12 shadow-[0_20px_50px_rgba(168,85,247,0.3)] flex flex-col md:flex-row items-center justify-between gap-10 text-white relative overflow-hidden", children: [_jsx("div", { className: "absolute -left-20 -bottom-40 w-80 h-80 border-[30px] border-white/10 rounded-full blur-sm" }), _jsx("div", { className: "absolute left-20 -bottom-20 w-40 h-40 border-[15px] border-white/10 rounded-full blur-sm" }), _jsxs("div", { className: "flex-1 relative z-10 space-y-4 max-w-lg", children: [_jsxs("div", { className: "inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold border border-white/20", children: [_jsx(Zap, { size: 12, className: "text-yellow-300 fill-yellow-300" }), " ", "Real-time Sync"] }), _jsx("h3", { className: "text-3xl font-bold", children: "Performance Management" }), _jsx("p", { className: "text-purple-100 text-lg opacity-90", children: "With the right set of tools, your team will never have to struggle. Generate price quotes, and access sales scripts instantly." })] }), _jsx("div", { className: "flex-1 w-full max-w-md h-[200px] relative z-10", children: _jsx(LiveLoop, { duration: 4000, children: _jsx(PipelineMockup, {}) }) })] })] })] }), _jsx("style", { children: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes featureVerticalScroll {
            0%, 20% { transform: translateY(0%); }
            25%, 45% { transform: translateY(-25%); }
            50%, 70% { transform: translateY(-50%); }
            75%, 95% { transform: translateY(-75%); }
            100% { transform: translateY(-75%); }
        }
        @keyframes growBar {
            from { width: 0; }
            to { width: var(--target-width); }
        }
        @keyframes drawLine {
            from { stroke-dasharray: 200; stroke-dashoffset: 200; }
            to { stroke-dasharray: 200; stroke-dashoffset: 0; }
        }
        @keyframes dropParticle {
            0% { transform: translate(-50%, -10px) scale(0); opacity: 0; }
            20% { opacity: 1; transform: translate(-50%, 0) scale(1); }
            80% { opacity: 1; transform: translate(-50%, 30px) scale(1); }
            100% { transform: translate(-50%, 40px) scale(0.5); opacity: 0; }
        }
        @keyframes popIn {
            0% { transform: scale(0.8); opacity: 0; }
            50% { transform: scale(1.05); opacity: 1; }
            100% { transform: scale(1); opacity: 1; }
        }
        @keyframes slideInRight {
            from { transform: translateX(50px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }

        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
        .feature-scroll-inner { animation: featureVerticalScroll 6s cubic-bezier(0.16, 1, 0.3, 1) infinite; }
        .animate-grow-bar { animation: growBar 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-draw-line { stroke-dasharray: 200; stroke-dashoffset: 200; animation: drawLine 1.5s ease-out forwards; }
        .animate-drop-particle { animation: dropParticle 1.5s ease-in-out infinite; }
        .animate-pop-in { animation: popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
        .animate-slide-in-right { animation: slideInRight 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      ` })] }));
};
export default FeaturesSection;
