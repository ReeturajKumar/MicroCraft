import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CheckCircle2, BarChart3, TrendingUp, PieChart, Settings, Megaphone, Star, Activity, } from "lucide-react";
const FEATURES = [
    {
        id: 1,
        icon: _jsx(Activity, { size: 20, className: "text-white" }),
        title: "Roadmapping",
        description: "Our strategic roadmaps provide a roadmap for success, outlining the steps needed to reach your objectives.",
    },
    {
        id: 2,
        icon: _jsx(PieChart, { size: 20, className: "text-white" }),
        title: "Financial Modeling",
        description: "Forecasts to evaluating investment opportunities, we provide insights that empower informed decision-making.",
    },
    {
        id: 3,
        icon: _jsx(TrendingUp, { size: 20, className: "text-white" }),
        title: "Diversification",
        description: "Our team explores opportunities for market expansion and diversification, helping you reach new audiences.",
    },
    {
        id: 4,
        icon: _jsx(Settings, { size: 20, className: "text-white" }),
        title: "Operational Efficiency",
        description: "We assess your current processes and identify areas for improvement to enhance efficiency and reduce costs.",
    },
];
export default function BusinessPlanningSection() {
    return (_jsx("section", { className: "py-24 bg-white overflow-hidden relative font-sans text-slate-800", children: _jsx("div", { className: "container mx-auto px-4 max-w-7xl", children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-20 items-center", children: [_jsxs("div", { children: [_jsxs("h2", { className: "text-4xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight", children: ["Business Planning ", _jsx("br", {}), "and Development"] }), _jsxs("p", { className: "text-slate-500 text-lg mb-12 leading-relaxed max-w-lg", children: ["At", " ", _jsx("span", { className: "bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500 font-semibold", children: "MicroCraft" }), ", we offer comprehensive solutions designed to guide your business through every stage of its journey."] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10", children: FEATURES.map((feature) => (_jsxs("div", { className: "flex flex-col items-start gap-4", children: [_jsx("div", { className: "w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white flex items-center justify-center shadow-md shadow-rose-200", children: feature.icon }), _jsxs("div", { children: [_jsx("h3", { className: "text-lg font-bold text-slate-900 mb-2", children: feature.title }), _jsx("p", { className: "text-slate-500 text-sm leading-relaxed", children: feature.description })] })] }, feature.id))) })] }), _jsxs("div", { className: "relative h-[600px] w-full flex items-center justify-center", children: [_jsxs("svg", { className: "absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible hidden lg:block", children: [_jsx("defs", { children: _jsx("marker", { id: "dot-dark", markerWidth: "8", markerHeight: "8", refX: "4", refY: "4", children: _jsx("circle", { cx: "4", cy: "4", r: "2.5", fill: "#1e293b" }) }) }), _jsx("path", { d: "M 80 200 L 80 120 L 480 120 L 480 180", fill: "none", stroke: "#94a3b8" // Slate-400 (Darker Grey)
                                        , strokeWidth: "2", strokeDasharray: "8 8", markerStart: "url(#dot-dark)", markerEnd: "url(#dot-dark)" }), _jsx("path", { d: "M 480 250 L 480 400", fill: "none", stroke: "#94a3b8" // Slate-400
                                        , strokeWidth: "2", strokeDasharray: "8 8", markerEnd: "url(#dot-dark)" }), _jsx("path", { d: "M 600 480 L 700 480", fill: "none", stroke: "#94a3b8" // Slate-400
                                        , strokeWidth: "2", strokeDasharray: "8 8" })] }), _jsx("div", { className: "relative z-10 w-[380px] h-[480px]", children: _jsx("img", { src: "https://getwpteam.com/wp-content/uploads/2022/02/25.png", alt: "Business Consultant", className: "w-full h-full object-cover object-top rounded-b-none rounded-t-full shadow-none", 
                                    // Note: The image in reference is cut out (transparent bg),
                                    // but for this code we use a standard photo.
                                    style: { borderRadius: "200px 200px 0 0" } }) }), _jsx("div", { className: "absolute top-48 left-8 bg-gradient-to-r from-purple-600 to-pink-500 text-white-50 p-4 rounded-3xl shadow-sm z-20 animate-float w-20 h-20 flex items-center justify-center", children: _jsx(Star, { size: 32, className: "text-white fill-white" }) }), _jsx("div", { className: "absolute top-72 left-8 bg-gradient-to-r from-purple-600 to-pink-500 text-white-50 p-4 rounded-3xl shadow-sm z-20 animate-float delay-300 w-20 h-20 flex items-center justify-center", children: _jsx(Megaphone, { size: 32, className: "text-white fill-white" }) }), _jsxs("div", { className: "absolute top-40 right-10 bg-white p-5 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] z-20 flex flex-col items-center animate-fade-in delay-200", children: [_jsx("div", { className: "w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white mb-2 shadow-lg shadow-green-200", children: _jsx(CheckCircle2, { size: 20, strokeWidth: 3 }) }), _jsx("p", { className: "text-sm font-bold text-slate-800", children: "Verified!" }), _jsx("p", { className: "text-[10px] text-green-600 font-medium", children: "100% Client Satisfied" })] }), _jsxs("div", { className: "absolute bottom-20 left-1/2 -translate-x-1/2 bg-white p-6 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-30 w-80 md:w-86 animate-slide-up delay-500", children: [_jsxs("div", { className: "flex items-center justify-between mb-6", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "p-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white-100 rounded-lg", children: _jsx(BarChart3, { size: 20, className: "text-white fill-white" }) }), _jsx("span", { className: "text-base font-bold text-slate-900", children: "B2B Income 2023" })] }), _jsxs("div", { className: "flex gap-2", children: [_jsx("span", { className: "text-[10px] px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-500 text-white-500 text-white rounded-full font-bold", children: "Monthly" }), _jsx("span", { className: "text-[10px] px-3 py-1 bg-slate-100 text-slate-500 rounded-full font-medium", children: "Yearly" })] })] }), _jsxs("div", { className: "relative h-8 w-full", children: [_jsxs("svg", { className: "w-full h-full overflow-visible", viewBox: "0 0 100 40", preserveAspectRatio: "none", children: [_jsx("defs", { children: _jsxs("linearGradient", { id: "chartGradient", x1: "0", y1: "0", x2: "0", y2: "1", children: [_jsx("stop", { offset: "0%", stopColor: "#fb7185", stopOpacity: "0.4" }), _jsx("stop", { offset: "100%", stopColor: "#fb7185", stopOpacity: "0" })] }) }), _jsx("path", { d: "M0 35 L 10 30 L 20 32 L 30 20 L 40 25 L 50 15 L 60 22 L 70 10 L 80 18 L 90 5 L 100 8 V 40 H 0 Z", fill: "url(#chartGradient)" }), _jsx("path", { d: "M0 35 L 10 30 L 20 32 L 30 20 L 40 25 L 50 15 L 60 22 L 70 10 L 80 18 L 90 5 L 100 8", fill: "none", stroke: "#fb7185", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })] }), _jsxs("div", { className: "absolute inset-0 flex flex-col justify-between pointer-events-none", children: [_jsx("div", { className: "border-b border-dashed border-slate-100 h-1/4 w-full" }), _jsx("div", { className: "border-b border-dashed border-slate-100 h-1/4 w-full" }), _jsx("div", { className: "border-b border-dashed border-slate-100 h-1/4 w-full" })] }), _jsx("div", { className: "flex justify-between mt-2 px-1", children: [
                                                    "Jan",
                                                    "Feb",
                                                    "Mar",
                                                    "Apr",
                                                    "May",
                                                    "Jun",
                                                    "Jul",
                                                    "Aug",
                                                    "Sep",
                                                    "Oct",
                                                    "Nov",
                                                    "Dec",
                                                ].map((m) => (_jsx("span", { className: "text-[8px] text-slate-400 font-medium", children: m }, m))) })] })] })] })] }) }) }));
}
