import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Check, Circle, BarChart3, Instagram, Facebook, Twitter, Mail, } from "lucide-react";
const FEATURES = [
    {
        id: 1,
        title: "Crafting Compelling Narratives",
        description: "We tell stories that resonate with your audience.",
    },
    {
        id: 2,
        title: "Strategic Content Marketing",
        description: "Data-driven strategies to maximize reach.",
    },
    {
        id: 3,
        title: "Building Authority and Trust",
        description: "Establish your brand as an industry leader.",
    },
    {
        id: 4,
        title: "Measurable Results",
        description: "Real-time analytics to track your growth.",
    },
];
export default function ContentMarketingSection() {
    const [activeFeature, setActiveFeature] = useState(2); // Default to 2nd item active like image
    return (_jsx("section", { className: "py-20 bg-white overflow-hidden relative", children: _jsx("div", { className: "container mx-auto px-4 max-w-7xl", children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center", children: [_jsxs("div", { className: "relative h-[500px] w-full flex items-center justify-center", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-tr from-purple-100/40 to-pink-100/40 rounded-full blur-3xl opacity-50" }), _jsxs("div", { className: "relative z-10 w-64 md:w-80 h-auto aspect-[3/4]", children: [_jsx("img", { src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop", alt: "Content Creator", className: "w-full h-full object-cover rounded-2xl shadow-2xl animate-fade-in" }), _jsxs("svg", { className: "absolute inset-0 w-[150%] h-[150%] -left-[25%] -top-[25%] pointer-events-none z-0 hidden md:block", children: [_jsx("path", { d: "M 280 150 Q 320 100 380 80", fill: "none", stroke: "#e2e8f0", strokeWidth: "2", strokeDasharray: "6 6" }), _jsx("path", { d: "M 100 300 Q 50 300 20 250", fill: "none", stroke: "#e2e8f0", strokeWidth: "2", strokeDasharray: "6 6" })] })] }), _jsxs("div", { className: "absolute top-0 right-0 md:-right-4 bg-white p-4 rounded-2xl shadow-lg shadow-purple-900/5 animate-float delay-100 w-48", children: [_jsxs("div", { className: "flex items-center gap-2 mb-3", children: [_jsx("div", { className: "p-1.5 bg-purple-100 rounded-md", children: _jsx(BarChart3, { size: 16, className: "text-purple-600" }) }), _jsx("span", { className: "text-xs font-bold text-slate-700", children: "Avg. Sales" })] }), _jsx("div", { className: "flex items-end justify-between h-16 gap-2", children: [40, 70, 50, 90, 60].map((h, i) => (_jsx("div", { className: "w-full bg-slate-50 rounded-t-sm relative h-full flex items-end overflow-hidden group", children: _jsx("div", { className: "w-full bg-pink-400 rounded-t-sm animate-grow group-hover:bg-purple-500 transition-colors duration-300", style: {
                                                    height: `${h}%`,
                                                    animationDelay: `${i * 100}ms`,
                                                } }) }, i))) })] }), _jsxs("div", { className: "absolute bottom-10 -left-4 md:-left-12 bg-white p-5 rounded-2xl shadow-lg shadow-purple-900/5 animate-float delay-700 w-40 flex flex-col items-center", children: [_jsxs("div", { className: "relative w-20 h-20 mb-2", children: [_jsxs("svg", { className: "w-full h-full transform -rotate-90", children: [_jsx("circle", { cx: "40", cy: "40", r: "32", stroke: "#f1f5f9", strokeWidth: "8", fill: "transparent" }), _jsx("circle", { cx: "40", cy: "40", r: "32", stroke: "url(#gradient)", strokeWidth: "8", fill: "transparent", strokeDasharray: 200, strokeDashoffset: 40, strokeLinecap: "round" }), _jsx("defs", { children: _jsxs("linearGradient", { id: "gradient", x1: "0%", y1: "0%", x2: "100%", y2: "0%", children: [_jsx("stop", { offset: "0%", stopColor: "#c084fc" }), _jsx("stop", { offset: "100%", stopColor: "#ec4899" })] }) })] }), _jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: _jsx("span", { className: "text-xl font-bold text-slate-800", children: "80%" }) })] }), _jsxs("div", { className: "text-center", children: [_jsx("p", { className: "text-lg font-bold text-slate-900", children: "17K+" }), _jsx("p", { className: "text-[10px] text-slate-400", children: "Contributions in 2024" })] })] }), _jsxs("div", { className: "absolute -bottom-6 right-8 bg-white py-3 px-4 rounded-full shadow-xl shadow-purple-900/10 flex items-center gap-3 animate-fade-in delay-500", children: [_jsx("span", { className: "text-[10px] font-semibold text-slate-500 mr-2", children: "Platforms" }), _jsxs("div", { className: "flex -space-x-2", children: [_jsx("div", { className: "w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center border-2 border-white", children: _jsx(Facebook, { size: 14 }) }), _jsx("div", { className: "w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 to-purple-600 text-white flex items-center justify-center border-2 border-white", children: _jsx(Instagram, { size: 14 }) }), _jsx("div", { className: "w-8 h-8 rounded-full bg-sky-500 text-white flex items-center justify-center border-2 border-white", children: _jsx(Twitter, { size: 14 }) }), _jsx("div", { className: "w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center border-2 border-white", children: _jsx(Mail, { size: 14 }) })] })] })] }), _jsxs("div", { className: "flex flex-col justify-center", children: [_jsxs("h2", { className: "text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight", children: ["Content Creation ", _jsx("br", {}), _jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500", children: "and Marketing" })] }), _jsx("p", { className: "text-slate-500 text-base md:text-lg mb-10 leading-relaxed", children: "Strategic thinkers collaborate to craft compelling narratives that not only captivate your audience but also drive meaningful engagement and measurable growth." }), _jsx("div", { className: "space-y-4", children: FEATURES.map((feature) => {
                                    const isActive = activeFeature === feature.id;
                                    return (_jsxs("div", { onClick: () => setActiveFeature(feature.id), className: `
                        group relative p-4 rounded-xl cursor-pointer transition-all duration-300 border
                        ${isActive
                                            ? "bg-white border-purple-100 shadow-md shadow-purple-100"
                                            : "bg-transparent border-transparent hover:bg-slate-50"}
                      `, children: [_jsxs("div", { className: "flex items-center gap-4", children: [_jsx("div", { className: `
                            w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-colors
                            ${isActive
                                                            ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white"
                                                            : "bg-slate-100 text-slate-400"}
                         `, children: isActive ? (_jsx(Check, { size: 14, strokeWidth: 3 })) : (_jsx(Circle, { size: 14 })) }), _jsxs("div", { children: [_jsx("h3", { className: `font-semibold text-lg ${isActive
                                                                    ? "text-slate-900"
                                                                    : "text-slate-500 group-hover:text-slate-700"}`, children: feature.title }), _jsx("div", { className: `overflow-hidden transition-all duration-300 ${isActive
                                                                    ? "max-h-20 opacity-100 mt-1"
                                                                    : "max-h-0 opacity-0"}`, children: _jsx("p", { className: "text-sm text-slate-500", children: feature.description }) })] })] }), isActive && (_jsx("div", { className: "absolute left-0 top-1/2 -translate-x-full w-8 h-[2px] border-t-2 border-dashed border-purple-200 hidden lg:block" }))] }, feature.id));
                                }) })] })] }) }) }));
}
