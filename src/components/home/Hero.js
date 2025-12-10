import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Play, Globe, TrendingUp, ShoppingBag, Menu, ArrowUpRight, Search, Bell, } from "lucide-react";
const Hero = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    // --- MOUSE TRACKING HANDLER ---
    const handleMouseMove = (e) => {
        // Get the bounding rectangle of the container to ensure correct X/Y relative to the div
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };
    const slides = [
        {
            id: 0,
            leftWord: "Revenues",
            leftColor: "text-violet-600",
            bgWord: "CONVERT",
            visual: "phone",
            caption: "Automated chat that drives sales 24/7.",
        },
        {
            id: 1,
            leftWord: "Orders",
            leftColor: "text-blue-600",
            bgWord: "ORDERS",
            visual: "laptop",
            caption: "Drag-and-drop builder for instant stores.",
        },
        {
            id: 2,
            leftWord: "Customer",
            leftColor: "text-pink-600",
            bgWord: "CAPTURE",
            visual: "graph",
            caption: "Real-time analytics and growth tracking.",
        },
    ];
    // Auto-rotate every 4 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);
    return (_jsxs("div", { 
        // Attach Mouse Move Listener here
        onMouseMove: handleMouseMove, className: "h-[85vh] w-full bg-white font-sans overflow-hidden relative flex flex-col justify-center group", children: [_jsx("div", { className: "absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-violet-50/40 rounded-full blur-3xl pointer-events-none mix-blend-multiply" }), _jsx("div", { className: "absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-50/40 rounded-full blur-3xl pointer-events-none mix-blend-multiply" }), _jsx("div", { className: "absolute inset-0 pointer-events-none z-0", style: {
                    // Create the grid pattern using gradients
                    backgroundImage: `
            linear-gradient(to right, rgba(124, 58, 237, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(124, 58, 237, 0.15) 1px, transparent 1px)
          `,
                    backgroundSize: "40px 40px",
                    // The Mask: A radial gradient that is opaque at the mouse position and transparent elsewhere
                    maskImage: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
                    WebkitMaskImage: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
                } }), _jsx("div", { className: "absolute pointer-events-none h-[300px] w-[300px] rounded-full bg-violet-400/20 blur-[80px] transition-transform duration-75 ease-out z-0", style: {
                    left: mousePos.x,
                    top: mousePos.y,
                    transform: "translate(-50%, -50%)", // Centers the ball on the cursor
                } }), _jsx("div", { className: "flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center relative z-10", children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 w-full gap-12 lg:gap-0 items-center", children: [_jsxs("div", { className: "col-span-1 lg:col-span-7 flex flex-col justify-center order-1", children: [_jsxs("h1", { className: "text-5xl sm:text-6xl lg:text-[5.5rem] font-bold text-gray-900 leading-[1.1] tracking-tight mb-6", children: ["The intelligent platform to", " ", _jsx("span", { className: "block lg:inline-block", children: _jsxs("span", { className: "relative inline-flex flex-col h-[1.1em] overflow-hidden align-top transition-all duration-500 ease-in-out", children: [_jsx("span", { className: "opacity-0 invisible whitespace-nowrap pointer-events-none", children: slides[activeSlide].leftWord }), slides.map((slide, idx) => (_jsx("span", { className: `absolute left-0 top-0 whitespace-nowrap transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${idx === activeSlide
                                                            ? "translate-y-0 opacity-100"
                                                            : "translate-y-[120%] opacity-0"} ${slide.leftColor}`, children: slide.leftWord }, slide.id)))] }) }), _jsx("span", { className: "block lg:inline", children: " faster." })] }), _jsx("p", { className: "text-lg text-gray-500 max-w-xl font-medium leading-relaxed mb-8", children: "Build your e-commerce ecosystem with data-driven tools: smart chat, store builder, and analytics \u2014 all in one powerful dashboard." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4", children: [_jsx("button", { className: "px-8 py-4 bg-violet-600 text-white rounded-xl font-bold text-lg hover:bg-violet-700 transition-all shadow-lg shadow-violet-200 cursor-pointer", children: "Book a Demo" }), _jsxs("button", { className: "px-8 py-4 bg-white border-2 border-gray-100 text-gray-700 rounded-xl font-bold text-lg hover:border-violet-200 hover:text-violet-600 transition flex items-center justify-center gap-2 cursor-pointer", children: [_jsx(Play, { className: "w-5 h-5 fill-current cursor-pointer" }), "Watch Video"] })] })] }), _jsxs("div", { className: "col-span-1 lg:col-span-5 relative h-[500px] lg:h-[600px] flex items-center justify-center perspective-[2000px] order-2", children: [_jsx("div", { className: "absolute right-0 lg:-right-10 top-1/2 -translate-y-1/2 text-right z-0 select-none pointer-events-none w-full overflow-visible", children: slides.map((slide, index) => (_jsx("h2", { className: `text-[5rem] sm:text-[8rem] lg:text-[7.5rem] font-black text-gray-100/50 uppercase tracking-tighter transition-all duration-700 absolute right-0 top-1/2 -translate-y-1/2 whitespace-nowrap ${index === activeSlide
                                            ? "opacity-100 translate-x-0 scale-100 text-violet-100"
                                            : "opacity-0 translate-x-10 scale-90"}`, children: slide.bgWord }, slide.id))) }), _jsx("div", { className: "relative w-[340px] h-[500px] sm:w-[420px] sm:h-[580px] z-10 flex items-center justify-center preserve-3d transform scale-[0.85] sm:scale-100 origin-center", children: slides.map((slide, index) => {
                                        const isActive = index === activeSlide;
                                        const transformStyles = isActive
                                            ? "opacity-100 translate-x-0 rotate-y-0 scale-100 z-20"
                                            : "opacity-0 translate-x-32 rotate-y-[-15deg] scale-90 z-0 grayscale";
                                        return (_jsxs("div", { className: `absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${transformStyles}`, children: [slide.visual === "phone" && (_jsx("div", { className: "w-[300px] h-[560px] bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl shadow-violet-500/20 ring-1 ring-black/5 animate-float", children: _jsxs("div", { className: "w-full h-full bg-white rounded-[2rem] overflow-hidden flex flex-col relative", children: [_jsxs("div", { className: "bg-violet-600 h-20 p-5 flex items-end justify-between text-white z-10", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold", children: "AI" }), _jsxs("div", { children: [_jsx("div", { className: "font-bold text-sm", children: "Support Agent" }), _jsxs("div", { className: "text-[10px] text-violet-200 flex items-center gap-1", children: [_jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-green-400" }), " ", "Online"] })] })] }), _jsx(Menu, { size: 18, className: "text-white/80" })] }), _jsxs("div", { className: "flex-1 bg-slate-50 p-4 space-y-4 pt-6 overflow-hidden flex flex-col", children: [_jsxs("div", { className: "self-start max-w-[85%] animate-slide-in", children: [_jsx("div", { className: "bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 text-sm text-gray-700", children: "Hi! I'm looking for running shoes under $150. \uD83D\uDC5F" }), _jsx("div", { className: "text-[10px] text-gray-400 mt-1 ml-1", children: "10:23 AM" })] }), _jsx("div", { className: "self-end max-w-[85%] animate-slide-in animation-delay-200", children: _jsx("div", { className: "bg-violet-600 p-3 rounded-2xl rounded-tr-none shadow-md text-sm text-white", children: "I found these top-rated options for you!" }) }), _jsxs("div", { className: "self-end max-w-[85%] animate-slide-in animation-delay-400", children: [_jsxs("div", { className: "bg-white p-3 rounded-2xl rounded-tr-none shadow-md border border-gray-100", children: [_jsx("div", { className: "w-full h-32 bg-gray-100 rounded-lg mb-2 overflow-hidden relative", children: _jsx("img", { src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", alt: "Shoe", className: "w-full h-full object-cover" }) }), _jsx("div", { className: "font-bold text-gray-800 text-sm", children: "Nike Air Zoom" }), _jsx("div", { className: "text-gray-500 text-xs mb-2", children: "Men's Running Shoe" }), _jsx("button", { className: "w-full py-1.5 bg-gray-900 text-white text-xs font-bold rounded", children: "Buy Now - $120" })] }), _jsx("div", { className: "text-[10px] text-gray-400 mt-1 text-right", children: "Just now" })] })] }), _jsx("div", { className: "p-3 bg-white border-t border-gray-100", children: _jsx("div", { className: "h-10 bg-gray-100 rounded-full flex items-center px-4 text-xs text-gray-400", children: "Type a message..." }) })] }) })), slide.visual === "laptop" && (_jsx("div", { className: "w-[500px] h-[340px] bg-gray-800 rounded-xl p-2 shadow-2xl shadow-blue-500/20 ring-1 ring-black/5 animate-float relative", children: _jsxs("div", { className: "w-full h-full bg-gray-50 rounded-lg overflow-hidden flex flex-col", children: [_jsxs("div", { className: "h-7 bg-white border-b flex items-center px-3 gap-1.5", children: [_jsx("div", { className: "w-2.5 h-2.5 rounded-full bg-red-400" }), _jsx("div", { className: "w-2.5 h-2.5 rounded-full bg-yellow-400" }), _jsx("div", { className: "w-2.5 h-2.5 rounded-full bg-green-400" }), _jsx("div", { className: "ml-4 flex-1 max-w-[200px] h-4 bg-gray-100 rounded text-[9px] flex items-center px-2 text-gray-400", children: "store.bikayi.com/dashboard" })] }), _jsxs("div", { className: "flex-1 flex overflow-hidden", children: [_jsxs("div", { className: "w-14 bg-white border-r border-gray-200 flex flex-col items-center py-4 gap-4", children: [_jsx("div", { className: "w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white", children: _jsx(Globe, { size: 16 }) }), _jsx("div", { className: "w-8 h-8 hover:bg-gray-100 rounded-lg flex items-center justify-center text-gray-400", children: _jsx(ShoppingBag, { size: 16 }) }), _jsx("div", { className: "w-8 h-8 hover:bg-gray-100 rounded-lg flex items-center justify-center text-gray-400", children: _jsx(TrendingUp, { size: 16 }) })] }), _jsxs("div", { className: "flex-1 p-5 overflow-hidden", children: [_jsxs("div", { className: "flex justify-between items-center mb-4", children: [_jsx("h3", { className: "font-bold text-gray-800 text-lg", children: "Overview" }), _jsxs("div", { className: "flex gap-2", children: [_jsx("span", { className: "p-1.5 bg-white border rounded text-gray-400", children: _jsx(Search, { size: 14 }) }), _jsx("span", { className: "p-1.5 bg-white border rounded text-gray-400", children: _jsx(Bell, { size: 14 }) })] })] }), _jsxs("div", { className: "grid grid-cols-2 gap-3 mb-4", children: [_jsxs("div", { className: "bg-white p-3 rounded-xl border border-gray-200 shadow-sm", children: [_jsx("div", { className: "text-xs text-gray-500 mb-1", children: "Total Sales" }), _jsx("div", { className: "text-lg font-bold text-gray-900", children: "$12,405" }), _jsx("div", { className: "text-[10px] text-green-500 font-bold", children: "+12% this week" })] }), _jsxs("div", { className: "bg-white p-3 rounded-xl border border-gray-200 shadow-sm", children: [_jsx("div", { className: "text-xs text-gray-500 mb-1", children: "Active Orders" }), _jsx("div", { className: "text-lg font-bold text-gray-900", children: "45" }), _jsx("div", { className: "text-[10px] text-blue-500 font-bold", children: "5 pending" })] })] }), _jsxs("div", { className: "bg-white rounded-xl border border-gray-200 shadow-sm p-3", children: [_jsx("div", { className: "text-xs font-bold text-gray-700 mb-2", children: "Recent Activity" }), _jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "flex items-center gap-3 py-1 border-b border-gray-50 pb-2", children: [_jsx("img", { src: "https://i.pravatar.cc/100?img=1", className: "w-8 h-8 rounded-full border border-gray-200", alt: "User 1" }), _jsxs("div", { className: "flex-1", children: [_jsx("div", { className: "text-xs font-semibold text-gray-800", children: "Sarah Jenkins" }), _jsx("div", { className: "text-[10px] text-gray-400", children: "Purchased Nike Air" })] }), _jsx("div", { className: "text-xs font-bold text-green-600", children: "+$120.00" })] }), _jsxs("div", { className: "flex items-center gap-3 py-1", children: [_jsx("img", { src: "https://i.pravatar.cc/100?img=3", className: "w-8 h-8 rounded-full border border-gray-200", alt: "User 2" }), _jsxs("div", { className: "flex-1", children: [_jsx("div", { className: "text-xs font-semibold text-gray-800", children: "Mike Ross" }), _jsx("div", { className: "text-[10px] text-gray-400", children: "Purchased Hoodie" })] }), _jsx("div", { className: "text-xs font-bold text-green-600", children: "+$85.00" })] })] })] })] })] })] }) })), slide.visual === "graph" && (_jsxs("div", { className: "w-[360px] h-[360px] relative flex items-center justify-center animate-float", children: [_jsxs("div", { className: "w-[340px] bg-white/90 backdrop-blur-md rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] border border-white/50 p-6 z-10 relative", children: [_jsxs("div", { className: "flex justify-between items-center mb-6", children: [_jsxs("div", { children: [_jsx("div", { className: "text-gray-400 text-xs font-bold uppercase tracking-wider", children: "Total Revenue" }), _jsx("div", { className: "text-3xl font-black text-gray-900 mt-1", children: "$142,300" })] }), _jsx("div", { className: "w-10 h-10 bg-green-50 border border-green-100 rounded-full flex items-center justify-center text-green-600", children: _jsx(TrendingUp, { size: 20 }) })] }), _jsx("div", { className: "flex items-end justify-between h-36 gap-3", children: [35, 60, 45, 85, 50, 95, 75].map((h, i) => (_jsx("div", { className: "w-full bg-gray-50 rounded-t-md relative h-full flex items-end overflow-hidden group", children: _jsx("div", { style: { height: `${h}%` }, className: `w-full rounded-t-md transition-all duration-1000 ease-out ${i === 6
                                                                                ? "bg-gradient-to-t from-violet-600 to-fuchsia-500 shadow-lg shadow-violet-200"
                                                                                : "bg-violet-200 group-hover:bg-violet-300"}` }) }, i))) }), _jsxs("div", { className: "flex justify-between mt-4 text-[10px] text-gray-400 font-medium px-1 uppercase tracking-wide", children: [_jsx("span", { children: "Mon" }), _jsx("span", { children: "Tue" }), _jsx("span", { children: "Wed" }), _jsx("span", { children: "Thu" }), _jsx("span", { children: "Fri" }), _jsx("span", { children: "Sat" }), _jsx("span", { children: "Sun" })] })] }), _jsxs("div", { className: "absolute -right-8 top-16 bg-white p-3 rounded-2xl shadow-xl border border-gray-100 flex gap-3 z-20 animate-bounce-slow", children: [_jsx("div", { className: "w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold text-xs", children: "ADS" }), _jsxs("div", { children: [_jsx("div", { className: "text-[10px] text-gray-400 font-bold uppercase", children: "ROAS" }), _jsx("div", { className: "text-sm font-bold text-gray-800", children: "4.2x" })] })] }), _jsxs("div", { className: "absolute -left-6 bottom-12 bg-gray-900 text-white p-3 rounded-2xl shadow-xl flex gap-3 z-20 animate-bounce-slow animation-delay-500", children: [_jsx("div", { className: "w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center", children: _jsx(ArrowUpRight, { size: 18, className: "text-green-400" }) }), _jsxs("div", { children: [_jsx("div", { className: "text-[10px] text-gray-400 font-bold uppercase", children: "Traffic" }), _jsx("div", { className: "text-sm font-bold", children: "+12.5%" })] })] })] }))] }, slide.id));
                                    }) })] })] }) }), _jsx("style", { children: `
        .perspective-[2000px] { perspective: 2000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .rotate-y-[-15deg] { transform: rotateY(-15deg); }
        .rotate-y-0 { transform: rotateY(0deg); }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }

        @keyframes slideIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-in { animation: slideIn 0.5s ease-out forwards; }
        .animation-delay-200 { animation-delay: 200ms; }
        .animation-delay-400 { animation-delay: 400ms; }
        .animation-delay-500 { animation-delay: 500ms; }
        
        @keyframes bounceSlow {
           0%, 100% { transform: translateY(0); }
           50% { transform: translateY(-5px); }
        }
        .animate-bounce-slow { animation: bounceSlow 3s ease-in-out infinite; }
      ` })] }));
};
export default Hero;
