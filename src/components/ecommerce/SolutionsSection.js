import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { Zap, BarChart3, Layers, MousePointer2, ArrowRight, Wallet, Mail, Heart, Globe, Play, CheckCircle2, } from "lucide-react";
const SolutionsSection = () => {
    const [count, setCount] = useState(0);
    // Counter Animation
    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prev) => (prev < 80 ? prev + 1 : 80));
        }, 20);
        return () => clearInterval(interval);
    }, []);
    return (_jsxs("section", { className: "w-full bg-white py-16 px-4 md:px-8 font-sans text-slate-900", children: [_jsxs("div", { className: "max-w-6xl mx-auto", children: [_jsxs("div", { className: "text-center mb-16 space-y-4", children: [_jsx("div", { className: "inline-block px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-600 text-xs font-bold uppercase tracking-wider", children: "Our Services" }), _jsxs("h2", { className: "text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight", children: ["Crafting Solutions ", _jsx("br", {}), _jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500", children: "Tailored to You" })] }), _jsx("p", { className: "text-slate-500 text-lg font-medium max-w-2xl mx-auto", children: "At MicroCraft, we take pride in offering a diverse range of solutions meticulously crafted to meet your unique needs." })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsxs("div", { className: "flex flex-col gap-6", children: [_jsxs("div", { className: "bg-white rounded-[2rem] p-6 border border-slate-100 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300", children: [_jsx("div", { className: "w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center mb-4", children: _jsx(Zap, { className: "text-purple-600", size: 20 }) }), _jsx("h3", { className: "text-2xl font-bold text-slate-900 mb-2", children: "Subscription" }), _jsx("p", { className: "text-slate-500 text-sm mb-6", children: "Curated offerings designed to enhance your experience and simplify your life." }), _jsx("div", { className: "space-y-3", children: [
                                                    {
                                                        title: "Tailored Convenience",
                                                        desc: "Customize your subscription",
                                                        color: "bg-red-500",
                                                    },
                                                    {
                                                        title: "Cost Savings",
                                                        desc: "Savings and added value",
                                                        color: "bg-orange-500",
                                                    },
                                                    {
                                                        title: "Priority Access",
                                                        desc: "Gain early access",
                                                        color: "bg-green-500",
                                                    },
                                                    {
                                                        title: "Seamless Experience",
                                                        desc: "No administrative burdens",
                                                        color: "bg-blue-500",
                                                    },
                                                ].map((item, i) => (_jsxs("div", { className: "flex items-center justify-between p-3 rounded-xl border border-slate-100 hover:border-purple-200 hover:bg-purple-50/20 transition-colors cursor-pointer group", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: `w-1 h-8 rounded-full ${item.color}` }), _jsxs("div", { children: [_jsx("h4", { className: "font-bold text-slate-800 text-sm", children: item.title }), _jsx("p", { className: "text-[10px] text-slate-400", children: item.desc })] })] }), _jsx(ArrowRight, { size: 14, className: "text-slate-300 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" })] }, i))) })] }), _jsxs("div", { className: "bg-white rounded-[2rem] p-6 border border-slate-100 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300", children: [_jsxs("div", { className: "flex justify-between items-start mb-4", children: [_jsx("div", { className: "w-10 h-10 bg-pink-50 rounded-xl flex items-center justify-center", children: _jsx(BarChart3, { className: "text-pink-600", size: 20 }) }), _jsxs("div", { className: "text-right", children: [_jsxs("span", { className: "text-3xl font-bold text-slate-900", children: [count, "%"] }), _jsx("p", { className: "text-[10px] text-slate-400 uppercase font-bold", children: "Efficiency" })] })] }), _jsx("h3", { className: "text-2xl font-bold text-slate-900 mb-1", children: "Tracking & Record" }), _jsx("p", { className: "text-slate-500 text-sm mb-6", children: "Precision in tracking enhances operational efficiency." }), _jsx("div", { className: "h-20 w-full flex items-end justify-between gap-2", children: [40, 70, 50, 90, 60, 80].map((h, i) => (_jsx("div", { className: "w-full bg-slate-100 rounded-t-md hover:bg-gradient-to-t hover:from-purple-200 hover:to-pink-300 transition-all duration-300", style: {
                                                        height: `${h}%`,
                                                        animation: `growUp 1s ease-out forwards ${i * 0.1}s`,
                                                    } }, i))) })] })] }), _jsxs("div", { className: "flex flex-col gap-6", children: [_jsxs("div", { className: "bg-white rounded-[2rem] p-6 border border-slate-100 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300", children: [_jsx("div", { className: "w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center mb-4", children: _jsx(Globe, { className: "text-orange-600", size: 20 }) }), _jsx("h3", { className: "text-2xl font-bold text-slate-900 mb-2", children: "Advertising" }), _jsx("p", { className: "text-slate-500 text-sm mb-8", children: "Captivates and resonates with your audience. Be remembered." }), _jsxs("div", { className: "relative h-48 w-full flex items-center justify-center overflow-visible", children: [_jsx("div", { className: "absolute z-10 w-14 h-14 bg-gradient-to-tr from-purple-600 to-pink-500 rounded-full flex items-center justify-center shadow-lg shadow-purple-200 animate-pulse-slow", children: _jsx(Play, { fill: "white", className: "text-white ml-1 w-5 h-5" }) }), _jsxs("div", { className: "w-[180px] h-[180px] rounded-full border border-dashed border-slate-200 animate-spin-slow relative", children: [_jsx("div", { className: "absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-white shadow-md border border-slate-100 rounded-xl flex items-center justify-center animate-reverse-spin", children: _jsx(Wallet, { size: 18, className: "text-purple-500" }) }), _jsx("div", { className: "absolute -bottom-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-white shadow-md border border-slate-100 rounded-xl flex items-center justify-center animate-reverse-spin", children: _jsx(Heart, { size: 18, className: "text-pink-500" }) }), _jsx("div", { className: "absolute top-1/2 -left-4 -translate-y-1/2 w-10 h-10 bg-white shadow-md border border-slate-100 rounded-xl flex items-center justify-center animate-reverse-spin", children: _jsx(Mail, { size: 18, className: "text-blue-500" }) }), _jsx("div", { className: "absolute top-1/2 -right-4 -translate-y-1/2 w-10 h-10 bg-white shadow-md border border-slate-100 rounded-xl flex items-center justify-center animate-reverse-spin", children: _jsx(MousePointer2, { size: 18, className: "text-orange-500" }) })] })] })] }), _jsxs("div", { className: "bg-white rounded-[2rem] p-6 border border-slate-100 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300", children: [_jsx("div", { className: "w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-4", children: _jsx(Layers, { className: "text-blue-600", size: 20 }) }), _jsx("h3", { className: "text-2xl font-bold text-slate-900 mb-2", children: "Efficient Management" }), _jsx("p", { className: "text-slate-500 text-sm mb-6", children: "Streamline operations with our intuitive dashboard systems." }), _jsxs("div", { className: "relative w-full h-40 mt-2", children: [_jsx("div", { className: "absolute top-0 left-6 right-6 h-24 bg-slate-50 rounded-xl transform translate-y-2 scale-90 opacity-60" }), _jsxs("div", { className: "absolute top-4 left-0 right-0 bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-slate-100 p-4 z-20", children: [_jsxs("div", { className: "flex justify-between items-center mb-3", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center", children: _jsx(BarChart3, { size: 16, className: "text-orange-500" }) }), _jsxs("div", { children: [_jsx("h5", { className: "text-xs font-bold text-slate-800", children: "Planning" }), _jsx("div", { className: "h-1 w-12 bg-slate-100 rounded mt-1" })] })] }), _jsx(CheckCircle2, { size: 16, className: "text-green-500" })] }), _jsx("div", { className: "flex items-center gap-2", children: _jsx("div", { className: "h-1.5 w-full bg-slate-100 rounded-full overflow-hidden", children: _jsx("div", { className: "h-full w-3/4 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full animate-grow-width" }) }) })] })] })] })] })] })] }), _jsx("style", { children: `
        @keyframes growUp {
          from { height: 0; }
          to { height: var(--height); }
        }
        @keyframes grow-width {
          from { width: 0; }
          to { width: 75%; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes reverse-spin {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
        /* Crucial: This ensures icons stay upright while parent spins */
        .animate-reverse-spin {
          animation: reverse-spin 12s linear infinite;
        }
        .animate-grow-width {
          animation: grow-width 1.5s ease-out forwards;
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s infinite ease-in-out;
        }
      ` })] }));
};
export default SolutionsSection;
