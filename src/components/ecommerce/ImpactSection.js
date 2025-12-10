import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ArrowRight, Sparkles, Zap, Rocket, TrendingUp } from "lucide-react";
const ImpactSection = () => {
    return (_jsxs("section", { className: "relative w-full bg-white py-16 lg:py-24 overflow-hidden font-sans flex items-center justify-center", children: [_jsx("style", { children: `
        /* 1. Fade Up Entry */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        /* 2. Text Reveal (Slide Up Mask) */
        @keyframes textRevealUp {
            0% { transform: translateY(100%); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
        }

        /* 3. Floating Icons */
        @keyframes float-icon {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        /* 4. Scrolling Text */
        @keyframes textSlide {
          0%, 20% { transform: translateY(0%); }
          25%, 45% { transform: translateY(-25%); }
          50%, 70% { transform: translateY(-50%); }
          75%, 95% { transform: translateY(-75%); }
          100% { transform: translateY(-75%); }
        }

        /* 5. Shimmer */
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        /* Utility Classes */
        .animate-fade-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0; /* Start hidden */
        }
        
        .animate-float-icon {
          animation: float-icon 5s ease-in-out infinite;
        }
        
        .animate-shimmer {
          background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 100%);
          background-size: 200% 100%;
          animation: shimmer 3s infinite linear;
        }

        /* REVEAL LOGIC FIX */
        .reveal-text-wrapper {
            overflow: hidden; /* This masks the text */
            display: block;
            line-height: 1.5;
        }
        
        .reveal-text-inner {
            display: block;
            /* Animation applied here */
            animation: textRevealUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            
            /* Initial State: Pushed down and invisible */
            transform: translateY(100%); 
            opacity: 0; 
        }

        .scrolling-text-container {
          height: 1em;
          overflow: hidden;
          display: inline-block;
          vertical-align: bottom;
          margin-left: 0.2em;
        }
        
        .scrolling-text-inner {
          animation: textSlide 6s cubic-bezier(0.16, 1, 0.3, 1) infinite;
        }

        /* Delays */
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-500 { animation-delay: 0.5s; }
      ` }), _jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-purple-200/40 via-pink-100/40 to-blue-100/40 rounded-full blur-[120px] -z-10 pointer-events-none" }), _jsx("div", { className: "absolute inset-0 pointer-events-none opacity-[0.03]", style: {
                    backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
                    backgroundSize: "60px 60px",
                } }), _jsxs("div", { className: "container mx-auto px-6 lg:px-8 max-w-6xl relative z-10 text-center", children: [_jsxs("div", { className: "flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 mb-2 animate-fade-up", children: [_jsx("span", { className: "text-6xl md:text-8xl lg:text-9xl font-black text-slate-900 tracking-tighter", children: "ONE" }), _jsxs("div", { className: "relative group", children: [_jsx("div", { className: "absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-500" }), _jsxs("div", { className: "relative flex items-center gap-4 bg-white/80 backdrop-blur-md px-6 py-4 rounded-full border border-white shadow-xl overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 animate-shimmer pointer-events-none opacity-30" }), _jsx("div", { className: "w-14 h-14 bg-purple-50 rounded-full flex items-center justify-center text-purple-600 animate-float-icon border border-purple-100 shadow-sm", style: { animationDelay: "0s" }, children: _jsx(Zap, { size: 26, strokeWidth: 2.5, className: "fill-purple-600/20" }) }), _jsx("div", { className: "w-14 h-14 bg-pink-50 rounded-full flex items-center justify-center text-pink-500 animate-float-icon border border-pink-100 shadow-sm", style: { animationDelay: "0.2s" }, children: _jsx(Rocket, { size: 26, strokeWidth: 2.5, className: "fill-pink-500/20" }) }), _jsx("div", { className: "w-14 h-14 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 animate-float-icon border border-indigo-100 shadow-sm", style: { animationDelay: "0.4s" }, children: _jsx(TrendingUp, { size: 26, strokeWidth: 2.5 }) })] })] }), _jsx("span", { className: "text-6xl md:text-8xl lg:text-9xl font-black text-slate-900 tracking-tighter", children: "CLICK" })] }), _jsx("div", { className: "animate-fade-up delay-100 flex flex-col md:flex-row justify-center items-center", children: _jsxs("h1", { className: "text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 tracking-tighter leading-none flex flex-wrap justify-center gap-x-4", children: [_jsx("span", { children: "MAXIMIZING" }), _jsx("div", { className: "scrolling-text-container", children: _jsxs("div", { className: "scrolling-text-inner flex flex-col text-left", children: [_jsx("span", { className: "block h-[1.1em] text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500", children: "IMPACT" }), _jsx("span", { className: "block h-[1.1em] text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500", children: "REVENUE" }), _jsx("span", { className: "block h-[1.1em] text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500", children: "GROWTH" }), _jsx("span", { className: "block h-[1.1em] text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500", children: "IMPACT" })] }) })] }) }), _jsxs("div", { className: "mt-12 mb-12 flex flex-col items-center justify-center", children: [_jsx("span", { className: "reveal-text-wrapper", children: _jsx("span", { className: "reveal-text-inner delay-300 text-xl md:text-2xl text-slate-500 font-medium", children: "Unlock a world of possibilities for your brand." }) }), _jsx("span", { className: "reveal-text-wrapper", children: _jsxs("span", { className: "reveal-text-inner delay-500 text-xl md:text-2xl text-slate-500 font-medium", children: ["Our streamlined approach ensures effortless", " ", _jsx("span", { className: "text-purple-600 font-semibold", children: "scaling" }), " and", " ", _jsx("span", { className: "text-pink-500 font-semibold", children: "engagement" }), "."] }) })] }), _jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-5 animate-fade-up delay-500", children: [_jsxs("button", { className: "relative px-10 py-5 bg-slate-900 text-white rounded-full font-bold text-lg hover:translate-y-[-2px] transition-transform shadow-2xl shadow-purple-900/30 flex items-center gap-3 group overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" }), _jsxs("span", { className: "relative z-10 flex items-center gap-2", children: ["Get Started Now", " ", _jsx(ArrowRight, { size: 20, className: "group-hover:translate-x-1 transition-transform" })] })] }), _jsxs("button", { className: "px-10 py-5 bg-white text-slate-900 border-2 border-slate-100 rounded-full font-bold text-lg hover:border-purple-200 hover:bg-purple-50 transition-colors flex items-center gap-2 group", children: [_jsx(Sparkles, { size: 20, className: "text-purple-400 group-hover:text-purple-600 transition-colors" }), "Learn More"] })] })] })] }));
};
export default ImpactSection;
