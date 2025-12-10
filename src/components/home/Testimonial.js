import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Star, Quote, ArrowRight, CheckCircle2 } from "lucide-react";
// --- MOCK DATA ---
const TESTIMONIALS = [
    {
        id: 1,
        name: "Hrishikesh Srivastava",
        role: "Founder, Agrani Bazaar",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
        quote: "Microkraft helped me bring my business online with remarkable ease. The Account Managers guided me to get better results. It feels like the backbone of our economy.",
        growth: "+140% Orders",
    },
    {
        id: 2,
        name: "Ehtesham Wasim",
        role: "Director, Mega Fashion",
        image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=100&q=80",
        quote: "Started in 2021, and I've seen an upward graph ever since. The support team played a major role in my growth. I now receive a minimum of 700+ orders monthly.",
        growth: "700+ Monthly Orders",
    },
    {
        id: 3,
        name: "Sarah Jenkins",
        role: "CEO, Lumiere Paris",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
        quote: "We replaced Salesforce and Shopify plugins with just this one platform. It feels like the software actually works for us, not against us. Absolutely brilliant.",
        growth: "3x Revenue",
    },
    {
        id: 4,
        name: "David Chen",
        role: "Ops Lead, TechFlow",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80",
        quote: "The ONDC integration was seamless. We went from local delivery to shipping nationwide in 48 hours. The inventory sync is magic.",
        growth: "Nationwide Scale",
    },
];
const Testimonial = () => {
    return (_jsxs("section", { className: "relative w-full bg-[#FAFAFA] py-32 overflow-hidden font-sans", children: [_jsxs("div", { className: "absolute inset-0 pointer-events-none", children: [_jsx("div", { className: "absolute inset-0 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" }), _jsx("div", { className: "absolute top-[10%] left-[50%] -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-r from-purple-200/40 via-pink-200/40 to-blue-200/40 blur-[100px] rounded-full mix-blend-multiply" })] }), _jsxs("div", { className: "relative z-10 max-w-7xl mx-auto px-6", children: [_jsxs("div", { className: "flex flex-col md:flex-row items-end justify-between mb-20 gap-8", children: [_jsxs("div", { className: "max-w-2xl", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 10 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-purple-100 shadow-sm mb-6", children: [_jsx("div", { className: "flex -space-x-2", children: [1, 2, 3].map((i) => (_jsx("div", { className: "w-6 h-6 rounded-full bg-gray-200 border-2 border-white overflow-hidden", children: _jsx("img", { src: `https://i.pravatar.cc/100?img=${i + 10}`, alt: "user", className: "w-full h-full object-cover" }) }, i))) }), _jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-purple-900", children: "Join 15,000+ Founders" })] }), _jsxs(motion.h2, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, className: "text-5xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1]", children: ["What our", " ", _jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500", children: "Customers Say" })] })] }), _jsx("div", { className: "mb-2 hidden md:block", children: _jsxs("button", { className: "group flex items-center gap-3 px-6 py-3 bg-white border border-gray-200 rounded-full text-sm font-bold text-slate-900 shadow-sm hover:shadow-md hover:border-purple-200 transition-all cursor-pointer", children: [_jsx("span", { children: "Read all success stories" }), _jsx("div", { className: "w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-purple-100 group-hover:text-purple-600 transition-colors", children: _jsx(ArrowRight, { size: 14 }) })] }) })] }), _jsx("div", { className: "relative w-[100vw] left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] overflow-hidden mask-linear-fade", children: _jsx("div", { className: "flex w-max gap-8 animate-scroll hover:pause py-10 px-8", children: [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (_jsx(TestimonialCard, { data: t }, i))) }) })] }), _jsx("style", { children: `
        .mask-linear-fade {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      ` })] }));
};
// --- SINGLE CARD COMPONENT ---
const TestimonialCard = ({ data }) => {
    return (_jsxs("div", { className: "group relative w-[450px] bg-white rounded-[2rem] p-8 border border-gray-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(168,85,247,0.15)] transition-all duration-500 cursor-default hover:-translate-y-2 flex flex-col justify-between", children: [_jsx("div", { className: "absolute inset-0 rounded-[2rem] border-2 border-transparent group-hover:border-purple-100 transition-colors duration-500 pointer-events-none" }), _jsx("div", { className: "absolute top-6 right-8 text-gray-100 group-hover:text-purple-50 transition-colors duration-500 transform group-hover:scale-110 group-hover:rotate-12 pointer-events-none", children: _jsx(Quote, { size: 80, fill: "currentColor" }) }), _jsxs("div", { children: [_jsx("div", { className: "relative z-10 flex items-start justify-between mb-8", children: _jsxs("div", { className: "flex items-center gap-4", children: [_jsxs("div", { className: "relative", children: [_jsx("div", { className: "w-14 h-14 rounded-full p-[2px] bg-gradient-to-br from-purple-500 to-pink-500", children: _jsx("img", { src: data.image, alt: data.name, className: "w-full h-full rounded-full object-cover border-2 border-white" }) }), _jsx("div", { className: "absolute -bottom-1 -right-1 bg-white p-1 rounded-full shadow-sm", children: _jsx("div", { className: "bg-blue-500 rounded-full p-0.5", children: _jsx(CheckCircle2, { size: 10, className: "text-white" }) }) })] }), _jsxs("div", { children: [_jsx("h3", { className: "font-bold text-slate-900 text-lg", children: data.name }), _jsx("p", { className: "text-xs text-slate-500 font-medium", children: data.role })] })] }) }), _jsxs("div", { className: "relative z-10 mb-8 min-h-[140px]", children: [_jsx("div", { className: "flex gap-1 mb-3", children: [1, 2, 3, 4, 5].map((s) => (_jsx(Star, { size: 14, className: "text-yellow-400 fill-yellow-400" }, s))) }), _jsxs("p", { className: "text-xl text-slate-700 font-serif leading-relaxed line-clamp-4 group-hover:text-slate-900 transition-colors", children: ["\"", data.quote, "\""] })] })] }), _jsxs("div", { className: "relative z-10 pt-6 border-t border-gray-100 flex items-center justify-between mt-auto", children: [_jsxs("div", { className: "bg-green-50 px-3 py-1.5 rounded-lg border border-green-100 inline-flex items-center gap-2", children: [_jsx("span", { className: "w-2 h-2 rounded-full bg-green-500 animate-pulse" }), _jsx("span", { className: "text-xs font-bold text-green-700", children: data.growth })] }), _jsxs("button", { className: "flex items-center gap-2 text-sm font-bold text-purple-600 group-hover:gap-3 transition-all cursor-pointer", children: ["Start Selling ", _jsx(ArrowRight, { size: 16 })] })] })] }));
};
export default Testimonial;
