import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import ImpactSection from "../components/ecommerce/ImpactSection";
import DigitalMarketingDashboard from "../components/ecommerce/DigitalMarketingDashboard";
import LogoMarquee from "../components/ecommerce/LogoMarquee";
import ContentMarketingSection from "../components/ecommerce/ContentMarketingSection";
import BusinessPlanningSection from "../components/ecommerce/BusinessPlanningSection";
import SolutionsSection from "../components/ecommerce/SolutionsSection";
import AchievementsSection from "../components/ecommerce/AchievementsAndFAQ";
const DigitalCommerce = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };
    return (_jsxs("div", { onMouseMove: handleMouseMove, className: "relative w-full min-h-screen bg-slate-50 overflow-hidden", children: [_jsxs("div", { className: "relative z-10", children: [_jsx(ImpactSection, {}), _jsx(DigitalMarketingDashboard, {}), _jsx(LogoMarquee, {}), _jsx(ContentMarketingSection, {}), _jsx(BusinessPlanningSection, {}), _jsx(SolutionsSection, {}), _jsx(AchievementsSection, {})] }), _jsxs("div", { className: "pointer-events-none absolute inset-0 z-10 overflow-hidden", children: [_jsx("div", { className: "absolute top-0 right-0 w-[800px] h-[800px] bg-purple-200/20 rounded-full blur-[120px] mix-blend-multiply" }), _jsx("div", { className: "absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-200/20 rounded-full blur-[120px] mix-blend-multiply" }), _jsx("div", { className: "absolute inset-0", style: {
                            backgroundImage: `
              linear-gradient(to right, rgba(124, 58, 237, 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(124, 58, 237, 0.15) 1px, transparent 1px)
            `,
                            backgroundSize: "40px 40px",
                            maskImage: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
                            WebkitMaskImage: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
                        } }), _jsx("div", { className: "absolute h-[300px] w-[300px] rounded-full bg-purple-400/20 blur-[80px] transition-transform duration-75 ease-out", style: {
                            left: mousePos.x,
                            top: mousePos.y,
                            transform: "translate(-50%, -50%)",
                        } })] })] }));
};
export default DigitalCommerce;
