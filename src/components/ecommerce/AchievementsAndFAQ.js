import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
// --- Data: Achievements ---
const achievements = [
    { year: "2019", title: "Excellence in Innovation Award" },
    { year: "2020", title: "Pinnacle of Performance Recognition" },
    { year: "2021", title: "Visionary Leadership Accolade" },
    { year: "2022", title: "Outstanding Customer Experience Distinction" },
    { year: "2023", title: "Masters of Team Collaboration Honor" },
];
// --- Data: FAQs ---
const faqs = [
    {
        question: "What Services Does MicroCraft Offer?",
        answer: "MicroCraft offers a comprehensive suite of digital solutions, including custom web development, UI/UX design, cloud infrastructure management, and strategic digital marketing tailored to scale your business.",
    },
    {
        question: "How Can I Contact Customer Support?",
        answer: (_jsxs(_Fragment, { children: ["Our customer support team is available", " ", _jsx("span", { className: "font-semibold text-gray-900", children: "9AM-5PM GMT+7" }), ". You can reach us by", " ", _jsx("a", { href: "mailto:MicroCraft@helpsupport.com", className: "text-purple-600 font-medium underline", children: "microCraft@helpsupport.com" })] })),
    },
    {
        question: "What Sets MicroCraft Apart From Competitors?",
        answer: "We prioritize a client-centric approach, combining cutting-edge technology with deep industry insights. Our dedicated support team and agile development process ensure faster delivery without compromising quality.",
    },
    {
        question: "Are There Any Ongoing Support Options After Service Implementation?",
        answer: "Yes, we offer ongoing support to ensure the continued success of our services. Our team is dedicated to providing post-implementation support, addressing any questions or concerns you may have.",
    },
];
// --- Helper Component: Laurel Wreath SVG ---
const LaurelWreath = ({ year }) => (_jsxs("div", { className: "relative w-32 h-32 flex items-center justify-center group hover:scale-105 transition-transform duration-300", children: [_jsxs("svg", { viewBox: "0 0 100 100", className: "w-full h-full text-gray-300 fill-current group-hover:text-purple-200 transition-colors duration-300", children: [_jsx("path", { d: "M18.5,75 C10,60 15,35 35,20 C35,20 32,25 32,30 C32,30 20,40 22,65 L18.5,75 Z M22,65 C20,55 25,45 30,42 L28,48 C25,52 24,60 22,65 Z M30,42 C30,35 38,30 42,28 L40,32 C38,34 32,38 30,42 Z M81.5,75 C90,60 85,35 65,20 C65,20 68,25 68,30 C68,30 80,40 78,65 L81.5,75 Z M78,65 C80,55 75,45 70,42 L72,48 C75,52 76,60 78,65 Z M70,42 C70,35 62,30 58,28 L60,32 C62,34 68,38 70,42 Z", opacity: "0.4" }), _jsx("path", { d: "M10,60 C5,40 20,10 50,5", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", className: "text-gray-200" }), _jsx("path", { d: "M90,60 C95,40 80,10 50,5", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", className: "text-gray-200" }), _jsx("path", { d: "M20,60 Q10,40 30,25", fill: "none", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round", opacity: "0.6" }), _jsx("path", { d: "M25,55 Q18,45 32,35", fill: "none", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round", opacity: "0.6" }), _jsx("path", { d: "M30,50 Q25,40 38,30", fill: "none", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round", opacity: "0.6" }), _jsx("path", { d: "M80,60 Q90,40 70,25", fill: "none", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round", opacity: "0.6" }), _jsx("path", { d: "M75,55 Q82,45 68,35", fill: "none", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round", opacity: "0.6" }), _jsx("path", { d: "M70,50 Q75,40 62,30", fill: "none", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round", opacity: "0.6" })] }), _jsx("span", { className: "absolute text-xl font-bold text-gray-400 group-hover:text-purple-600 transition-colors duration-300 mt-2", children: year })] }));
// --- Main Component ---
const AchievementsSection = () => {
    // State for FAQ Accordion
    const [openIndex, setOpenIndex] = useState(1); // Defaulting 2nd item open like image
    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (_jsx("section", { className: "w-full bg-white py-20 px-4 md:px-8 font-sans", children: _jsxs("div", { className: "max-w-6xl mx-auto space-y-24", children: [_jsxs("div", { className: "text-center", children: [_jsxs("div", { className: "mb-12", children: [_jsx("h2", { className: "text-3xl md:text-5xl font-bold text-gray-900 mb-4", children: "Achievements That Define Our Success!" }), _jsxs("p", { className: "text-gray-500 max-w-2xl mx-auto text-sm md:text-base", children: ["Step into a world of accolades and achievements that underscore our commitment to excellence at", " ", _jsx("span", { className: "text-red-500 font-semibold", children: "MicroCraft" }), "."] })] }), _jsx("div", { className: "grid grid-cols-2 md:grid-cols-5 gap-8 items-start justify-items-center", children: achievements.map((item, idx) => (_jsxs("div", { className: "flex flex-col items-center text-center max-w-[150px]", children: [_jsx(LaurelWreath, { year: item.year }), _jsx("p", { className: "text-xs md:text-xs font-medium text-gray-500 mt-2 leading-relaxed uppercase tracking-wide", children: item.title })] }, idx))) })] }), _jsxs("div", { className: "max-w-3xl mx-auto", children: [_jsx("div", { className: "text-center mb-12", children: _jsxs("h2", { className: "text-4xl md:text-5xl font-bold text-gray-900", children: ["Frequently ", _jsx("br", { className: "md:hidden" }), " Asked Questions"] }) }), _jsx("div", { className: "space-y-4", children: faqs.map((faq, idx) => (_jsxs("div", { className: "border-b border-gray-200 pb-4 last:border-0", children: [_jsxs("button", { onClick: () => toggleFAQ(idx), className: "w-full flex items-center justify-between py-4 text-left group focus:outline-none", children: [_jsx("span", { className: `text-lg font-bold transition-colors duration-300 ${openIndex === idx
                                                    ? "text-gray-900"
                                                    : "text-gray-600 group-hover:text-purple-600"}`, children: faq.question }), _jsx("div", { className: `transform transition-transform duration-300 ${openIndex === idx ? "rotate-180" : "rotate-0"}`, children: _jsx(ChevronDown, { className: "text-gray-400 group-hover:text-purple-600" }) })] }), _jsx("div", { className: `grid transition-[grid-template-rows] duration-300 ease-out ${openIndex === idx
                                            ? "grid-rows-[1fr] opacity-100"
                                            : "grid-rows-[0fr] opacity-0"}`, children: _jsx("div", { className: "overflow-hidden", children: _jsx("div", { className: "pb-4 text-gray-500 leading-relaxed text-sm md:text-base", children: faq.answer }) }) })] }, idx))) })] })] }) }));
};
export default AchievementsSection;
