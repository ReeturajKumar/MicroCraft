import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Globe, Plus, RefreshCcw, TrendingUp, LayoutGrid, ArrowRight, } from "lucide-react";
const CreativeCustomerSection = () => {
    return (_jsxs("section", { className: "relative w-full py-24 lg:py-32 overflow-hidden bg-slate-50 font-sans", children: [_jsx("style", { children: `
        /* Background Drift */
        @keyframes drift {
          0% { transform: translate(0, 0); }
          50% { transform: translate(-20px, 40px); }
          100% { transform: translate(0, 0); }
        }
        /* Card Float */
        @keyframes float-card {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        /* Fade In Up */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        /* Text Slide Animation */
        @keyframes textSlide {
          0%, 20% { transform: translateY(0%); }
          25%, 45% { transform: translateY(-25%); }
          50%, 70% { transform: translateY(-50%); }
          75%, 95% { transform: translateY(-75%); }
          100% { transform: translateY(-75%); }
        }

        .animate-drift {
          animation: drift 10s ease-in-out infinite;
        }
        .animate-float-card {
          animation: float-card 6s ease-in-out infinite;
        }
        .animate-fade-up {
          opacity: 0;
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        /* Scrolling Text Classes */
        .scrolling-text-container {
          height: 1.15em; /* Matches H2 Line Height */
          overflow: hidden;
          display: inline-block;
          vertical-align: bottom;
          position: relative;
          padding-bottom: 2px; /* Visual tweak for descenders */
        }
        .scrolling-text-inner {
          animation: textSlide 6s cubic-bezier(0.16, 1, 0.3, 1) infinite;
        }

        /* Delays */
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
      ` }), _jsx("div", { className: "absolute inset-0 pointer-events-none opacity-[0.03]", style: {
                    backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
                    backgroundSize: "40px 40px",
                } }), _jsx("div", { className: "absolute top-0 right-0 w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-3xl -z-10 animate-drift" }), _jsx("div", { className: "absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-200/40 rounded-full blur-3xl -z-10 animate-drift", style: { animationDelay: "-5s" } }), _jsx("div", { className: "container mx-auto px-6 lg:px-8 max-w-7xl relative z-10", children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center", children: [_jsxs("div", { className: "flex flex-col gap-10", children: [_jsxs("div", { children: [_jsxs("h2", { className: "animate-fade-up text-4xl lg:text-6xl font-extrabold text-slate-900 leading-[1.15] mb-6", children: ["Simple Management, ", _jsx("br", {}), _jsx("div", { className: "scrolling-text-container", children: _jsxs("div", { className: "scrolling-text-inner flex flex-col text-left", children: [_jsx("span", { className: "block h-[1.15em] text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600", children: "Revolutionizing" }), _jsx("span", { className: "block h-[1.15em] text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600", children: "Transforming" }), _jsx("span", { className: "block h-[1.15em] text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600", children: "Optimizing" }), _jsx("span", { className: "block h-[1.15em] text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600", children: "Revolutionizing" })] }) }), _jsx("br", {}), "Customer Relations"] }), _jsx("p", { className: "animate-fade-up delay-100 text-lg text-slate-600 leading-relaxed max-w-lg", children: "Empower your business growth through revolutionary customer relations. Manage everything from a single, intuitive dashboard designed for scale." })] }), _jsxs("div", { className: "animate-fade-up delay-200 relative group", children: [_jsx("div", { className: "absolute -inset-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg -z-10" }), _jsxs("div", { className: "flex flex-wrap items-center gap-x-8 gap-y-6 opacity-60 grayscale group-hover:grayscale-0 transition-all duration-500", children: [_jsxs("div", { className: "flex items-center gap-2 font-bold text-lg text-slate-800 group-hover:scale-105 transition-transform", children: [_jsx(Globe, { size: 20, className: "text-blue-600" }), _jsx("span", { children: "GlobalCorp" })] }), _jsx("div", { className: "font-bold text-xl text-slate-800 tracking-tight group-hover:scale-105 transition-transform", children: "Acme Inc." }), _jsxs("div", { className: "flex items-center gap-1 font-bold text-lg text-slate-800 group-hover:scale-105 transition-transform", children: [_jsx(LayoutGrid, { size: 20, className: "text-indigo-600" }), _jsx("span", { children: "Nexus" })] }), _jsxs("div", { className: "flex items-center gap-2 font-bold text-lg text-slate-800 group-hover:scale-105 transition-transform", children: [_jsxs("div", { className: "flex gap-0.5", children: [_jsx("div", { className: "w-1.5 h-1.5 bg-slate-800 rounded-full" }), _jsx("div", { className: "w-1.5 h-1.5 bg-slate-800 rounded-full" }), _jsx("div", { className: "w-1.5 h-1.5 bg-blue-500 rounded-full" })] }), _jsx("span", { children: "TechFlow" })] })] })] }), _jsx("div", { className: "animate-fade-up delay-300", children: _jsxs("a", { href: "#", className: "inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-4 transition-all duration-300 group", children: ["Explore Integration", " ", _jsx(ArrowRight, { size: 20, className: "group-hover:translate-x-1" })] }) })] }), _jsxs("div", { className: "relative perspective-1000 group animate-fade-up delay-200", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-[3rem] blur-2xl transform scale-90 opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10" }), _jsxs("div", { className: "relative bg-white/60 backdrop-blur-xl border border-white/50 p-8 lg:p-12 rounded-[2.5rem] shadow-2xl transition-transform duration-500 group-hover:-translate-y-2", children: [_jsx("div", { className: "flex justify-between items-start mb-8", children: _jsxs("div", { className: "flex -space-x-4", children: [[1, 2, 3].map((i) => (_jsx("div", { className: "w-14 h-14 rounded-full border-[3px] border-white shadow-sm overflow-hidden transition-transform hover:scale-110 hover:z-10 cursor-pointer", children: _jsx("img", { src: `https://i.pravatar.cc/150?img=${i + 30}`, alt: "Team", className: "w-full h-full object-cover" }) }, i))), _jsx("button", { className: "w-14 h-14 rounded-full bg-slate-900 text-white flex items-center justify-center border-[3px] border-white hover:bg-blue-600 transition-colors shadow-sm", children: _jsx(Plus, { size: 24 }) })] }) }), _jsxs("div", { className: "space-y-6", children: [_jsxs("h3", { className: "text-2xl font-bold text-slate-900", children: ["Driving Growth for ", _jsx("br", {}), " Your Business."] }), _jsx("p", { className: "text-slate-600 leading-relaxed", children: "We're revolutionizing customer relations with our empowering CRM platform." })] }), _jsxs("div", { className: "mt-8 bg-white rounded-2xl p-6 shadow-lg border border-slate-100 flex items-center gap-5 transform transition-transform group-hover:scale-[1.02]", children: [_jsx("div", { className: "bg-blue-600 text-white p-3 rounded-xl shadow-blue-200 shadow-md", children: _jsx(RefreshCcw, { size: 24 }) }), _jsxs("div", { children: [_jsx("div", { className: "text-3xl font-extrabold text-slate-900 animate-pulse", children: "14.7k+" }), _jsx("div", { className: "text-sm font-medium text-slate-500", children: "Repeat Customers" })] })] })] }), _jsxs("div", { className: "absolute -top-6 -right-2 lg:-right-8 w-56 bg-white p-5 rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-100 z-20 animate-float-card", children: [_jsxs("div", { className: "flex items-center justify-between mb-3", children: [_jsxs("div", { className: "flex -space-x-2", children: [_jsx("div", { className: "w-8 h-8 rounded-full border-2 border-white bg-green-100 overflow-hidden", children: _jsx("img", { src: "https://i.pravatar.cc/150?img=12", alt: "Client" }) }), _jsx("div", { className: "w-8 h-8 rounded-full border-2 border-white bg-blue-100 overflow-hidden", children: _jsx("img", { src: "https://i.pravatar.cc/150?img=11", alt: "Client" }) })] }), _jsxs("div", { className: "bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1", children: ["25% ", _jsx(TrendingUp, { size: 10 })] })] }), _jsx("p", { className: "text-xs font-bold text-slate-400 uppercase tracking-wide", children: "Satisfaction" }), _jsxs("div", { className: "flex items-end gap-1 mt-1", children: [_jsx("span", { className: "text-2xl font-bold text-slate-900", children: "14.9" }), _jsx("span", { className: "text-sm font-medium text-slate-400 mb-1", children: "/ 15k" })] })] })] })] }) })] }));
};
export default CreativeCustomerSection;
