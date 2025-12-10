import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
const TopStrip = () => {
    const [language, setLanguage] = useState("EN");
    const languages = ["EN", "HI", "MR"];
    const taglines = [
        "From lead to loyal customer — on autopilot.",
        "Automate your CRM, WhatsApp & sales in one place.",
        "Grow your business effortlessly every day.",
        "Turn conversations into conversions with ease.",
    ];
    const [index, setIndex] = useState(0);
    const itemHeight = 20;
    const transitionMs = 600;
    const pauseMs = 2400;
    // rotate index
    useEffect(() => {
        const t = setInterval(() => {
            setIndex((p) => (p + 1) % taglines.length);
        }, pauseMs + transitionMs);
        return () => clearInterval(t);
    }, []);
    const liveRef = useRef(null);
    useEffect(() => {
        if (liveRef.current) {
            liveRef.current.textContent = taglines[index];
        }
    }, [index]);
    return (_jsxs("div", { className: "w-full bg-gradient-to-r from-white via-purple-200 to-pink-200 border-b border-purple-100", children: [_jsx("style", { children: `
        .ts-transition {
          transition: transform ${transitionMs}ms cubic-bezier(.22,.9,.28,1);
        }
      ` }), _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "flex items-center justify-between h-12", children: [_jsxs("div", { className: "flex items-center gap-3 min-w-0", children: [_jsx("div", { className: "w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse" }), _jsx("div", { className: "overflow-hidden h-6 flex-1 min-w-0", children: _jsx("div", { className: "ts-transition", style: {
                                            transform: `translateY(-${index * itemHeight}px)`,
                                            display: "flex",
                                            flexDirection: "column",
                                        }, "aria-hidden": "false", children: taglines.map((t, i) => (_jsx("div", { style: {
                                                height: `${itemHeight}px`,
                                                lineHeight: `${itemHeight}px`,
                                                whiteSpace: "nowrap",
                                                textOverflow: "ellipsis",
                                                overflow: "hidden",
                                            }, className: `text-sm font-medium ${i === index ? "text-slate-700" : "text-slate-600"}`, children: t }, i))) }) }), _jsx("div", { className: "sr-only", "aria-live": "polite", ref: liveRef, children: taglines[index] })] }), _jsxs("div", { className: "flex items-center gap-4", children: [_jsx("div", { className: "hidden md:block h-4 w-px bg-slate-200" }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("span", { className: "text-xs text-slate-500", children: "Language:" }), _jsx("div", { className: "flex bg-slate-50 rounded-lg p-0.5", children: languages.map((lang) => (_jsx("button", { onClick: () => setLanguage(lang), className: `px-2.5 py-1 text-xs font-medium rounded-md transition-all duration-200 cursor-pointer ${language === lang
                                                    ? "bg-white text-slate-800 shadow-sm border border-slate-200"
                                                    : "text-slate-500 hover:text-slate-700"}`, children: lang }, lang))) })] }), _jsxs("button", { className: "hidden md:flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors duration-200", children: [_jsx("svg", { className: "w-3.5 h-3.5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" }) }), _jsx("span", { children: "+91 98765 43210" })] })] })] }) })] }));
};
export default TopStrip;
