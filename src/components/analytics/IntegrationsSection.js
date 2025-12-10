import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { ArrowRight, Slack, Trello, Mail, Database, Github, Globe, Layers, } from "lucide-react";
const INTEGRATIONS = [
    { icon: Slack, colorHex: "#4A154B", x: -140, y: -80, delay: 0.1 },
    { icon: Trello, colorHex: "#0079BF", x: 0, y: -150, delay: 0.2 },
    { icon: Github, colorHex: "#333333", x: 140, y: -80, delay: 0.3 },
    { icon: Mail, colorHex: "#EF4444", x: 140, y: 80, delay: 0.4 },
    { icon: Database, colorHex: "#059669", x: 0, y: 150, delay: 0.5 },
    { icon: Globe, colorHex: "#3B82F6", x: -140, y: 80, delay: 0.6 },
];
const RotatingText = () => {
    const words = ["Workflow", "Stack", "Team", "Data"];
    const [index, setIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true);
            setTimeout(() => {
                setIndex((prev) => (prev + 1) % words.length);
                setIsAnimating(false);
            }, 250);
        }, 2500);
        return () => clearInterval(interval);
    }, []);
    return (_jsx("span", { className: "inline-grid h-[1.1em] overflow-hidden align-bottom min-w-[160px]", children: _jsx("span", { className: `col-start-1 row-start-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500 ${isAnimating
                ? "opacity-0 -translate-y-12"
                : "opacity-100 translate-y-0"}`, children: words[index] }) }));
};
// --- SVG Logo Components ---
const Logo1 = () => (_jsxs("svg", { className: "h-8", viewBox: "0 0 120 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [_jsx("path", { d: "M16 4L4 28H28L16 4Z", fill: "currentColor", className: "text-slate-800" }), _jsx("path", { d: "M42 28V16H48V20H46V24H48V28H42ZM54 28V16H60V20H58V24H60V28H54ZM66 28V16H72V19H68V28H66ZM78 28V16H84V19H80V20H83V23H80V25H84V28H78Z", fill: "currentColor", className: "text-slate-600" })] }));
const Logo2 = () => (_jsxs("svg", { className: "h-8", viewBox: "0 0 120 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [_jsx("circle", { cx: "16", cy: "16", r: "10", fill: "currentColor", className: "text-slate-800" }), _jsx("path", { d: "M40 10H44V22H40V10ZM50 10H54V22H50V10ZM60 10H64V19H68V10H72V22H68V20H64V22H60V10Z", fill: "currentColor", className: "text-slate-600" })] }));
const Logo3 = () => (_jsxs("svg", { className: "h-8", viewBox: "0 0 120 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [_jsx("rect", { x: "4", y: "4", width: "24", height: "24", rx: "4", fill: "currentColor", className: "text-slate-800" }), _jsx("path", { d: "M44 10H54V13H47V15H53V18H47V22H44V10ZM58 10H61L64 22H61L60 18H58L57 22H54L58 10ZM68 10H72V22H68V10Z", fill: "currentColor", className: "text-slate-600" })] }));
const Logo4 = () => (_jsxs("svg", { className: "h-8", viewBox: "0 0 120 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [_jsx("path", { d: "M4 16L16 4L28 16L16 28L4 16Z", fill: "currentColor", className: "text-slate-800" }), _jsx("path", { d: "M44 10H48V19H54V22H44V10ZM58 10H62V22H58V10ZM68 10H72L75 16L78 10H82V22H78V15L75 21L72 15V22H68V10Z", fill: "currentColor", className: "text-slate-600" })] }));
export default function MicroCraftLanding() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    return (_jsxs("div", { className: "min-h-screen bg-white text-slate-900 font-sans flex items-center justify-center overflow-hidden relative selection:bg-blue-100 selection:text-blue-900", children: [_jsx("div", { className: "absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl -z-10 opacity-70" }), _jsx("div", { className: "absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-50 rounded-full blur-3xl -z-10 opacity-70" }), _jsxs("main", { className: "max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full py-12", children: [_jsxs("div", { className: "relative h-[450px] sm:h-[500px] flex items-center justify-center order-2 lg:order-1", children: [_jsx("div", { className: `relative z-20 w-32 h-32 bg-white rounded-[2rem] shadow-2xl shadow-slate-200 flex items-center justify-center p-2 transition-all duration-700 ${mounted ? "scale-100 opacity-100" : "scale-0 opacity-0"}`, children: _jsxs("div", { className: "w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 rounded-[1.5rem] flex items-center justify-center text-white shadow-inner relative overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 bg-white/20 animate-pulse" }), _jsx("span", { className: "text-4xl font-black relative z-10 tracking-tighter", children: "MC" })] }) }), _jsx("svg", { className: "absolute inset-0 w-full h-full pointer-events-none", style: { zIndex: 5 }, children: INTEGRATIONS.map((item, i) => {
                                    const centerX = "50%";
                                    const centerY = "50%";
                                    const iconX = `calc(50% + ${item.x}px)`;
                                    const iconY = `calc(50% + ${item.y}px)`;
                                    return (_jsx("line", { x1: centerX, y1: centerY, x2: iconX, y2: iconY, stroke: "#CBD5E1", strokeWidth: "2", strokeDasharray: "6 6", className: `transition-opacity duration-700 ${mounted ? "opacity-100" : "opacity-0"}`, style: {
                                            transitionDelay: `${item.delay + 0.2}s`,
                                        } }, i));
                                }) }), _jsx("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none", children: INTEGRATIONS.map((item, i) => {
                                    const Icon = item.icon;
                                    return (_jsx("div", { className: `absolute w-14 h-14 bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center z-10 transition-all duration-700 hover:scale-110 cursor-pointer pointer-events-auto ${mounted ? "scale-100 opacity-100" : "scale-0 opacity-0"}`, style: {
                                            transform: mounted
                                                ? `translate(${item.x}px, ${item.y}px) scale(1)`
                                                : `translate(${item.x}px, ${item.y}px) scale(0)`,
                                            transitionDelay: `${item.delay + 0.3}s`,
                                        }, children: _jsx(Icon, { size: 26, strokeWidth: 2, color: item.colorHex }) }, i));
                                }) })] }), _jsxs("div", { className: "space-y-8 order-1 lg:order-2 text-center lg:text-left", children: [_jsxs("div", { className: `inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-bold border border-slate-200 transition-all duration-500 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`, children: [_jsx(Layers, { size: 16, className: "text-blue-600" }), "Introducing MicroCraft v2"] }), _jsxs("h1", { className: "text-5xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.1]", children: ["Connect your ", _jsx(RotatingText, {})] }), _jsxs("p", { className: "text-xl text-slate-500 max-w-lg mx-auto lg:mx-0 leading-relaxed", children: ["Stop switching tabs.", " ", _jsx("span", { className: "font-semibold text-slate-900", children: "MicroCraft" }), " ", "unifies your community tools and business data into a single source of truth."] }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center lg:justify-start", children: [_jsxs("button", { className: "px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl shadow-xl shadow-slate-200 flex items-center justify-center gap-2 transition-transform hover:scale-105 active:scale-95", children: ["Start for free ", _jsx(ArrowRight, { size: 20 })] }), _jsx("button", { className: "px-8 py-4 bg-white text-slate-900 font-bold rounded-2xl border-2 border-slate-100 hover:border-slate-300 hover:bg-slate-50 transition-all", children: "Book a demo" })] }), _jsxs("div", { className: "pt-8 border-t border-gray-100 mt-8", children: [_jsx("p", { className: "text-sm text-gray-400 font-medium mb-4", children: "TRUSTED BY INNOVATIVE TEAMS" }), _jsxs("div", { className: "flex flex-wrap justify-center lg:justify-start gap-8 opacity-40 hover:opacity-100 transition-all duration-500", children: [_jsx(Logo1, {}), _jsx(Logo2, {}), _jsx(Logo3, {}), _jsx(Logo4, {})] })] })] })] })] }));
}
