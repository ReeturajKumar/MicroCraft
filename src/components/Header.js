import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, Check } from "lucide-react";
// --- DATA ---
const navLinks = [
    {
        name: "Products",
        href: "/products",
        dropdown: [
            { name: "CRM & Engagement", href: "/products/crm" },
            { name: "Digital Commerce", href: "/products/commerce" },
            { name: "Analytics & AI", href: "/products/analytics" },
        ],
    },
    {
        name: "Sectors",
        href: "#sectors",
        dropdown: [
            { name: "Manufacturing", href: "/sectors/manufacturing" },
            { name: "Food & Hospitality", href: "/sectors/food-hospitality" },
            { name: "Healthcare", href: "/sectors/healthcare" },
            { name: "Services", href: "/sectors/services" },
            { name: "Logistics", href: "/sectors/logistics" },
            { name: "Agriculture", href: "/sectors/agriculture" },
        ],
    },
    { name: "Case Studies", href: "/case-studies" },
    {
        name: "Resources",
        href: "#resources",
        dropdown: [
            { name: "ONDC Guide", href: "/resources/ondc-guide" },
            { name: "WhatsApp Templates", href: "/resources/whatsapp-templates" },
            { name: "Migration Guide", href: "/resources/migration-guide" },
        ],
    },
    { name: "Integrations", href: "/integrations" },
];
const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    // --- ACTIVE STATE MANAGEMENT ---
    // 1. Fixed: Initial state is null (nothing selected)
    const [activeNav, setActiveNav] = useState(null);
    const [activeSubNav, setActiveSubNav] = useState(null);
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", handleScroll);
            handleScroll();
        }
        return () => {
            if (typeof window !== "undefined") {
                window.removeEventListener("scroll", handleScroll);
            }
        };
    }, []);
    // --- CLICK HANDLER ---
    const handleNavClick = (parentName, subItemName) => {
        // Set the main active tab (Products, Case Studies, etc.)
        setActiveNav(parentName);
        // If a sub-item (dropdown) was clicked, set it active.
        // If a top-level link (Case Studies) was clicked, clear the sub-nav.
        if (subItemName) {
            setActiveSubNav(subItemName);
        }
        else {
            setActiveSubNav(null);
        }
        // Close menus
        setMobileMenuOpen(false);
        setActiveDropdown(null);
    };
    return (_jsxs("header", { className: `w-full sticky top-0 z-50 transition-all duration-500 ${scrolled
            ? "bg-white/80 backdrop-blur-2xl border-b border-white/20 shadow-sm"
            : "bg-white/40 backdrop-blur-xl border-b border-transparent"}`, children: [_jsx("div", { className: "absolute inset-0 opacity-[0.015] pointer-events-none", style: {
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
                } }), _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative", children: [_jsxs("div", { className: "flex items-center justify-between h-20", children: [_jsx("div", { className: "shrink-0 relative group", children: _jsx("a", { href: "/", className: "flex items-center cursor-pointer", onClick: () => handleNavClick(""), children: _jsxs("div", { className: "ml-3", children: [_jsx("span", { className: "text-2xl font-black tracking-tight bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 bg-clip-text text-transparent", children: "Microkraft" }), _jsxs("div", { className: "flex items-center gap-1.5 -mt-0.5", children: [_jsx("div", { className: "h-[2px] w-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full" }), _jsx("span", { className: "text-[9px] font-bold text-slate-500 tracking-[0.2em] uppercase", children: "Growth OS" })] })] }) }) }), _jsx("nav", { className: "hidden lg:flex items-center bg-white/80 rounded-full p-1.5 border border-white/60 shadow-lg ml-12 mr-8", children: navLinks.map((link) => (_jsxs("div", { className: "relative", onMouseEnter: () => link.dropdown && setActiveDropdown(link.name), onMouseLeave: () => setActiveDropdown(null), children: [_jsxs("a", { href: link.href, 
                                            // 2. Fixed: Ensures clicking "Case Studies" sets activeNav to "Case Studies"
                                            onClick: () => handleNavClick(link.name), className: `cursor-pointer group relative flex items-center gap-1 px-5 py-2 text-sm font-semibold rounded-full transition-all duration-300 mx-0.5 ${activeNav === link.name
                                                ? "text-white shadow-md"
                                                : "text-slate-600 hover:text-slate-900"}`, children: [activeNav === link.name && (_jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full" })), activeNav !== link.name && (_jsx("div", { className: "absolute inset-0 bg-slate-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" })), _jsxs("span", { className: "relative z-10 flex items-center gap-1", children: [link.name, link.dropdown && (_jsx(ChevronDown, { className: `w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === link.name ? "rotate-180" : ""}` }))] })] }), link.dropdown && activeDropdown === link.name && (_jsxs("div", { className: "absolute left-0 top-full mt-2 w-72 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden transform transition-all duration-300 animate-in fade-in slide-in-from-top-2", children: [_jsx("div", { className: "h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" }), _jsx("div", { className: "p-2 space-y-1", children: link.dropdown.map((item) => {
                                                        const isActiveSub = activeSubNav === item.name;
                                                        return (_jsxs("a", { href: item.href, onClick: (e) => {
                                                                e.stopPropagation();
                                                                // 3. Sets parent Active AND child Active
                                                                handleNavClick(link.name, item.name);
                                                            }, className: `cursor-pointer group relative flex items-center justify-between px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${isActiveSub
                                                                ? "bg-purple-50 text-purple-700"
                                                                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"}`, children: [_jsxs("span", { className: "flex items-center gap-3", children: [_jsx("div", { className: `w-2 h-2 rounded-full transition-all duration-200 ${isActiveSub
                                                                                ? "bg-purple-600 scale-110"
                                                                                : "bg-slate-300 group-hover:bg-purple-400"}` }), item.name] }), isActiveSub && (_jsx(Check, { className: "w-4 h-4 text-purple-600" }))] }, item.name));
                                                    }) })] }))] }, link.name))) }), _jsxs("div", { className: "hidden lg:flex items-center gap-3", children: [_jsx("a", { href: "https://wa.me/919876543210", target: "_blank", rel: "noopener noreferrer", className: "cursor-pointer group relative px-5 py-2.5 text-sm font-semibold text-slate-700 rounded-full overflow-hidden transition-all duration-300 hover:text-purple-700 bg-white border border-slate-200 hover:border-purple-200 hover:shadow-sm", children: _jsx("span", { className: "relative", children: "WhatsApp" }) }), _jsxs("button", { className: "cursor-pointer group relative px-6 py-2.5 text-sm font-semibold text-white rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 active:scale-95", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 transition-all duration-300 group-hover:scale-110" }), _jsx("span", { className: "relative flex items-center gap-2", children: "Book Demo" })] })] }), _jsx("button", { onClick: () => setMobileMenuOpen(!mobileMenuOpen), className: "cursor-pointer lg:hidden relative p-2.5 rounded-xl text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-all duration-200", "aria-label": "Toggle menu", type: "button", children: mobileMenuOpen ? (_jsx(X, { className: "w-6 h-6" })) : (_jsx(Menu, { className: "w-6 h-6" })) })] }), mobileMenuOpen && (_jsxs("div", { className: "lg:hidden py-4 mt-2 mb-4 bg-white rounded-2xl border border-slate-100 shadow-xl", children: [_jsx("nav", { className: "space-y-1 px-3", children: navLinks.map((link) => (_jsxs("div", { children: [_jsxs("a", { href: link.href, onClick: () => handleNavClick(link.name), className: `cursor-pointer group relative flex items-center justify-between px-4 py-3 text-base font-semibold rounded-xl transition-all duration-300 ${activeNav === link.name
                                                ? "bg-purple-50 text-purple-700"
                                                : "text-slate-700 hover:bg-slate-50"}`, children: [link.name, link.dropdown && (_jsx(ChevronDown, { className: `w-4 h-4 ${activeNav === link.name
                                                        ? "text-purple-600"
                                                        : "text-slate-400"}` }))] }), link.dropdown && (_jsx("div", { className: "pl-4 mt-1 space-y-1 border-l-2 border-slate-100 ml-4 mb-2", children: link.dropdown.map((item) => {
                                                const isActiveSub = activeSubNav === item.name;
                                                return (_jsx("a", { href: item.href, onClick: (e) => {
                                                        e.stopPropagation();
                                                        handleNavClick(link.name, item.name);
                                                    }, className: `block px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${isActiveSub
                                                        ? "text-purple-700 bg-purple-50"
                                                        : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"}`, children: _jsxs("div", { className: "flex items-center justify-between", children: [item.name, isActiveSub && _jsx(Check, { className: "w-3.5 h-3.5" })] }) }, item.name));
                                            }) }))] }, link.name))) }), _jsxs("div", { className: "mt-4 pt-4 border-t border-slate-100 px-4 space-y-3", children: [_jsx("a", { href: "https://wa.me/919876543210", className: "cursor-pointer block w-full px-5 py-3 text-center text-sm font-semibold text-slate-700 rounded-xl bg-slate-50 border border-slate-200 hover:bg-slate-100 transition-all", children: "WhatsApp" }), _jsx("button", { className: "cursor-pointer block w-full px-5 py-3 text-center text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:shadow-lg transition-all", children: "Book Demo" })] })] }))] })] }));
};
export default Header;
