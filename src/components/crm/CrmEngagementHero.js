import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ArrowUpRight, Star, CheckCircle2, TrendingUp, Users, } from "lucide-react";
const CrmEngagementHero = () => {
    return (_jsxs("section", { className: "relative w-full min-h-screen bg-slate-50 overflow-hidden flex items-center justify-center py-12 lg:py-0", children: [_jsx("style", { children: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        /* NEW: Vertical Text Slide Animation */
        @keyframes textSlide {
          0%, 20% { transform: translateY(0%); }
          25%, 45% { transform: translateY(-25%); }
          50%, 70% { transform: translateY(-50%); }
          75%, 95% { transform: translateY(-75%); }
          100% { transform: translateY(-75%); }
        }

        .animate-fade-up {
          opacity: 0;
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        /* NEW: Scrolling Text Classes */
        .scrolling-text-container {
          height: 1.1em; /* Matches the line-height of H1 */
          overflow: hidden;
          display: inline-block;
          vertical-align: bottom;
          position: relative;
          padding-bottom: 0.1em; /* Slight padding for descenders */
        }
        .scrolling-text-inner {
          animation: textSlide 6s cubic-bezier(0.16, 1, 0.3, 1) infinite;
        }

        /* Delays */
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
      ` }), _jsx("div", { className: "absolute inset-0 pointer-events-none opacity-[0.03]", style: {
                    backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
                    backgroundSize: "40px 40px",
                } }), _jsx("div", { className: "container mx-auto px-6 lg:px-8 max-w-7xl relative z-10", children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-center", children: [_jsxs("div", { className: "flex flex-col gap-5 text-left", children: [_jsxs("h1", { className: "animate-fade-up delay-100 text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1]", children: ["Scale Your ", _jsx("br", {}), _jsxs("div", { className: "scrolling-text-container relative", children: [_jsxs("div", { className: "scrolling-text-inner flex flex-col text-left", children: [_jsx("span", { className: "block h-[1.1em] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-400 text-transparent bg-clip-text", children: "Business" }), _jsx("span", { className: "block h-[1.1em] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-400 text-transparent bg-clip-text", children: "Startup" }), _jsx("span", { className: "block h-[1.1em] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-400 text-transparent bg-clip-text", children: "Venture" }), _jsx("span", { className: "block h-[1.1em] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-400 text-transparent bg-clip-text", children: "Business" })] }), _jsx("svg", { className: "absolute w-full h-3 -bottom-1 left-0 text-purple-200 -z-10", viewBox: "0 0 100 10", preserveAspectRatio: "none", children: _jsx("path", { d: "M0 5 Q 50 10 100 5", stroke: "currentColor", strokeWidth: "8", fill: "none" }) })] }), _jsx("br", {}), "With Intelligent Tools"] }), _jsx("p", { className: "animate-fade-up delay-200 text-lg text-slate-600 max-w-lg", children: "Streamline operations and boost engagement with our all-in-one digital infrastructure." }), _jsxs("div", { className: "animate-fade-up delay-300 flex items-center gap-4", children: [_jsxs("div", { className: "flex -space-x-3", children: [[1, 2, 3, 4].map((i) => (_jsx("div", { className: "w-10 h-10 rounded-full border-2 border-white bg-gray-300 overflow-hidden", children: _jsx("img", { src: `https://i.pravatar.cc/100?img=${i + 10}`, alt: "user", className: "w-full h-full object-cover" }) }, i))), _jsx("div", { className: "w-10 h-10 rounded-full border-2 border-white bg-purple-600 flex items-center justify-center text-white text-xs font-bold", children: "4.9" })] }), _jsxs("div", { className: "flex flex-col", children: [_jsxs("div", { className: "flex text-yellow-500", children: [_jsx(Star, { size: 16, fill: "currentColor" }), _jsx(Star, { size: 16, fill: "currentColor" }), _jsx(Star, { size: 16, fill: "currentColor" }), _jsx(Star, { size: 16, fill: "currentColor" }), _jsx(Star, { size: 16, fill: "currentColor" })] }), _jsx("span", { className: "text-xs font-semibold text-slate-500", children: "From 10k+ Happy Clients" })] })] }), _jsx("div", { className: "animate-fade-up delay-400", children: _jsxs("button", { className: "bg-slate-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl flex items-center gap-2 group", children: ["Start Your Journey", _jsx(ArrowUpRight, { className: "group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" })] }) }), _jsxs("div", { className: "animate-fade-up delay-500 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 max-w-sm mt-4", children: [_jsx("div", { className: "w-16 h-16 rounded-lg bg-green-100 overflow-hidden shrink-0", children: _jsx("img", { src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200", alt: "Success", className: "w-full h-full object-cover" }) }), _jsxs("div", { children: [_jsx("h3", { className: "font-bold text-slate-900 text-lg leading-tight", children: "High Conversion Rates" }), _jsxs("p", { className: "text-sm text-slate-500 mt-1", children: ["Our strategies optimize growth by", " ", _jsx("span", { className: "font-bold text-green-600", children: "+35%" }), "."] })] })] })] }), _jsxs("div", { className: "relative h-[600px] w-full flex items-center justify-center lg:justify-end", children: [_jsxs("div", { className: "relative z-10 w-[80%] lg:w-[90%] max-w-md animate-fade-up", children: [_jsx("div", { className: "absolute top-10 left-0 w-full h-full bg-purple-100 rounded-full blur-3xl -z-10 opacity-60" }), _jsx("img", { src: "https://img.freepik.com/premium-photo/happy-woman-png-mockup-pink-turtleneck_53876-1043839.jpg", alt: "Business Professional", className: "rounded-3xl shadow-2xl object-cover w-full h-auto border-4 border-white" })] }), _jsxs("div", { className: "absolute top-10 right-0 lg:-right-4 bg-white/90 backdrop-blur-sm p-2 pr-4 rounded-full shadow-lg border border-slate-100 flex items-center gap-2 z-20 animate-float", children: [_jsx("div", { className: "bg-lime-400 p-2 rounded-full text-slate-900", children: _jsx(TrendingUp, { size: 18 }) }), _jsx("span", { className: "text-sm font-bold text-slate-800", children: "Market Insights" })] }), _jsxs("div", { className: "absolute top-1/2 left-0 lg:left-8 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 z-20 w-40 animate-float", style: { animationDelay: "1s" }, children: [_jsx("div", { className: "bg-purple-50 w-10 h-10 rounded-full flex items-center justify-center mb-2 text-purple-600", children: _jsx(Users, { size: 20 }) }), _jsx("p", { className: "text-xs text-slate-500 font-medium", children: "Client Retention" }), _jsx("p", { className: "text-xl font-bold text-purple-600", children: "+14,200" })] }), _jsxs("div", { className: "absolute bottom-10 right-4 lg:right-0 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 z-20 max-w-[200px] animate-float", style: { animationDelay: "0.5s" }, children: [_jsxs("div", { className: "flex justify-between items-start mb-2", children: [_jsx("div", { className: "bg-indigo-600 p-2 rounded-lg text-white", children: _jsx(CheckCircle2, { size: 20 }) }), _jsx(ArrowUpRight, { size: 16, className: "text-slate-400" })] }), _jsx("h4", { className: "font-bold text-slate-900 text-sm", children: "Smart Workflows" }), _jsx("p", { className: "text-xs text-slate-500 mt-1 leading-relaxed", children: "Automate your daily tasks effortlessly." })] })] })] }) })] }));
};
export default CrmEngagementHero;
