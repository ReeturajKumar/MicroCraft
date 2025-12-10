import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Quote, ArrowRight, Smile, BarChart3 } from "lucide-react";
const SuccessStoriesSection = () => {
    return (_jsxs("section", { className: "relative w-full bg-white py-12 lg:py-20 overflow-hidden font-sans", children: [_jsx("style", { children: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        /* Vertical Text Slide Animation */
        @keyframes textSlide {
          0%, 20% { transform: translateY(0%); }
          25%, 45% { transform: translateY(-25%); }
          50%, 70% { transform: translateY(-50%); }
          75%, 95% { transform: translateY(-75%); }
          100% { transform: translateY(-75%); }
        }

        .animate-fade-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
        
        /* Scrolling Text Classes */
        .scrolling-text-container {
          height: 1.2em;
          overflow: hidden;
          display: inline-block;
          vertical-align: bottom;
          position: relative;
        }
        .scrolling-text-inner {
          animation: textSlide 6s cubic-bezier(0.16, 1, 0.3, 1) infinite;
        }

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
      ` }), _jsx("div", { className: "absolute top-0 left-0 w-[500px] h-[500px] bg-purple-50 rounded-full blur-3xl -z-10 mix-blend-multiply opacity-60" }), _jsx("div", { className: "absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-50 rounded-full blur-3xl -z-10 mix-blend-multiply opacity-60" }), _jsxs("div", { className: "container mx-auto px-6 lg:px-8 max-w-7xl relative z-10", children: [_jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-15 items-center mb-10 lg:mb-15", children: [_jsxs("div", { className: "animate-fade-up relative z-10", children: [_jsxs("h2", { className: "text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-4", children: ["Success Stories ", _jsx("br", {}), _jsx("div", { className: "scrolling-text-container", children: _jsxs("div", { className: "scrolling-text-inner flex flex-col text-left", children: [_jsx("span", { className: "block h-[1.2em] text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500", children: "Microkraft CRM" }), _jsx("span", { className: "block h-[1.2em] text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500", children: "Real Results" }), _jsx("span", { className: "block h-[1.2em] text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500", children: "Smart Tools" }), _jsx("span", { className: "block h-[1.2em] text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500", children: "Microkraft CRM" })] }) })] }), _jsx("p", { className: "text-sm lg:text-base text-slate-500 leading-relaxed max-w-md", children: "Join satisfied clients scaling effortlessly with our tools. Experience the transformation firsthand." })] }), _jsx("div", { className: "relative animate-fade-up delay-100 flex justify-center lg:justify-end h-[300px] lg:h-[330px]", children: _jsxs("div", { className: "relative z-10 w-full max-w-sm h-full", children: [_jsx("img", { src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600", alt: "Happy Client", className: "w-full h-full object-cover rounded-[1.5rem] shadow-xl z-10 relative" }), _jsxs("div", { className: "absolute top-6 -left-6 bg-white p-2 pr-4 rounded-xl shadow-lg border border-slate-100 animate-float flex items-center gap-2 z-20", children: [_jsxs("div", { className: "flex -space-x-2", children: [_jsx("img", { src: "https://i.pravatar.cc/150?img=11", className: "w-6 h-6 rounded-full border border-white", alt: "" }), _jsx("img", { src: "https://i.pravatar.cc/150?img=12", className: "w-6 h-6 rounded-full border border-white", alt: "" })] }), _jsxs("div", { children: [_jsx("div", { className: "text-[9px] text-slate-400 font-bold uppercase", children: "Satisfaction" }), _jsxs("div", { className: "text-xs font-bold text-slate-900 flex items-center gap-1", children: ["14.9/15k", " ", _jsx("span", { className: "text-green-500 bg-green-50 px-1 rounded text-[9px]", children: "+25%" })] })] })] }), _jsxs("div", { className: "absolute bottom-8 -right-4 bg-white p-3 rounded-xl shadow-lg border border-slate-100 animate-float z-20 max-w-[140px]", style: { animationDelay: "2s" }, children: [_jsxs("div", { className: "flex items-center gap-2 mb-1", children: [_jsx("div", { className: "bg-purple-100 p-1 rounded-md text-purple-600", children: _jsx(BarChart3, { size: 12 }) }), _jsx("span", { className: "font-bold text-slate-900 text-xs", children: "Analysis" })] }), _jsx("p", { className: "text-[9px] text-slate-400 leading-tight", children: "Effectively modular risk management." })] }), _jsx("div", { className: "absolute top-1/2 -right-6 text-green-400 animate-float", style: { animationDelay: "0.5s" }, children: _jsx(Smile, { size: 32, fill: "currentColor", className: "drop-shadow-md" }) })] }) })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 items-end", children: [_jsxs("div", { className: "bg-slate-50 p-5 rounded-[1.5rem] relative group hover:bg-white hover:shadow-lg transition-all duration-300 animate-fade-up delay-200", children: [_jsx(Quote, { size: 28, className: "text-purple-200 mb-20 group-hover:text-purple-500 transition-colors" }), _jsx("div", { className: "absolute top-5 right-5 w-16 h-16 rounded-xl overflow-hidden shadow-sm", children: _jsx("img", { src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200", className: "w-full h-full object-cover", alt: "Illumi" }) }), _jsxs("div", { className: "relative z-10 mt-2", children: [_jsx("h4", { className: "font-bold text-slate-900 text-sm", children: "Illumi Parker" }), _jsx("p", { className: "text-[10px] text-slate-500 mb-2", children: "Marketing Manager, TecId." }), _jsx("p", { className: "text-xs text-slate-600 leading-relaxed font-medium", children: "\"We've seen a significant boost in our ROI and customer engagement.\"" })] })] }), _jsxs("div", { className: "bg-gradient-to-br from-purple-600 to-pink-500 p-1 rounded-[1.5rem] shadow-xl shadow-purple-200/50 transform md:-translate-y-4 animate-fade-up delay-300 relative overflow-hidden group h-[280px]", children: [_jsxs("div", { className: "absolute inset-1 rounded-[1.3rem] overflow-hidden", children: [_jsx("img", { src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400", className: "w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700", alt: "Nami" }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/40 to-transparent mix-blend-multiply" })] }), _jsxs("div", { className: "relative h-full p-5 flex flex-col justify-between text-white", children: [_jsx(Quote, { size: 28, className: "text-white/40" }), _jsxs("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border border-white/30 backdrop-blur-sm flex items-center justify-center cursor-pointer group-hover:scale-110 transition-transform", children: [_jsx("div", { className: "absolute inset-0 rounded-full border border-white/50 border-dashed animate-spin-slow" }), _jsx(ArrowRight, { className: "text-white", size: 18 })] }), _jsxs("div", { children: [_jsx("h4", { className: "font-bold text-base mb-0.5", children: "Nami Anderson" }), _jsx("p", { className: "text-[10px] text-white/80 mb-2", children: "Director Ops, Retail" }), _jsx("p", { className: "text-xs font-medium leading-relaxed opacity-90", children: "\"Training & support were fantastic! Highly recommended!\"" })] })] })] }), _jsxs("div", { className: "bg-slate-50 p-5 rounded-[1.5rem] relative group hover:bg-white hover:shadow-lg transition-all duration-300 animate-fade-up delay-200", children: [_jsx(Quote, { size: 28, className: "text-purple-200 mb-20 group-hover:text-purple-500 transition-colors" }), _jsx("div", { className: "absolute top-5 right-5 w-16 h-16 rounded-xl overflow-hidden shadow-sm", children: _jsx("img", { src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200", className: "w-full h-full object-cover", alt: "Sarah" }) }), _jsxs("div", { className: "relative z-10 mt-2", children: [_jsx("h4", { className: "font-bold text-slate-900 text-sm", children: "Sarah Zoldyck" }), _jsx("p", { className: "text-[10px] text-slate-500 mb-2", children: "CEO, TechSolutions." }), _jsx("p", { className: "text-xs text-slate-600 leading-relaxed font-medium", children: "\"Our team is more efficient, client satisfaction has never been higher!\"" })] })] })] })] })] }));
};
export default SuccessStoriesSection;
