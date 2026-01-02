import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Instagram,
  Heart,
} from "lucide-react";

// --- TYPES ---
interface FooterLinkProps {
  text: string;
  badge?: string;
}

interface SocialIconProps {
  icon: React.ElementType;
}

const Footer: React.FC = () => {
  // --- MOUSE TRACKING FOR BACKGROUND ---
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <footer
      onMouseMove={handleMouseMove}
      className="relative w-full bg-white border-t border-slate-100 font-sans selection:bg-purple-100 selection:text-purple-900 overflow-hidden group"
    >
      {/* =========================================
          1. INTERACTIVE BACKGROUND (Spotlight + Grid)
         ========================================= */}

      {/* Ambient Orbs (Static Glows) */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] bg-purple-100/40 rounded-full blur-[80px] pointer-events-none mix-blend-multiply" />
      <div className="absolute top-0 left-[-20%] w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] bg-blue-50/40 rounded-full blur-[80px] pointer-events-none mix-blend-multiply" />

      {/* The Grid with Mouse Mask (The Spotlight) */}
      <div
        className="absolute inset-0 pointer-events-none z-0 hidden sm:block"
        style={{
          // Increased opacity to 0.1 so it's visible on white
          backgroundImage: `
            linear-gradient(to right, rgba(124, 58, 237, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(124, 58, 237, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          // The Mask: A radial gradient that acts as the flashlight
          maskImage: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
          WebkitMaskImage: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
        }}
      />

      {/* Glowing Cursor Follower (The Moving Ball) */}
      <div
        className="absolute pointer-events-none h-[150px] w-[150px] sm:h-[180px] sm:w-[180px] md:h-[200px] md:w-[200px] rounded-full bg-purple-400/8 blur-[60px] transition-transform duration-75 ease-out z-0 hidden sm:block"
        style={{
          left: mousePos.x,
          top: mousePos.y,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* =========================================
          CONTENT LAYERS
         ========================================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 md:pt-10">
        {/* SECTION 1: THE "EDITORIAL" CTA */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6 sm:gap-8 mb-8 sm:mb-12 md:mb-16 lg:mb-20 pb-6 sm:pb-8 md:pb-10 border-b border-slate-100 relative">
          <div className="max-w-2xl relative z-10 w-full">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight mb-4 sm:mb-5 md:mb-6">
              Ready to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                Scale Up?
              </span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center">
              <Link to="/products/crm" className="group relative px-5 sm:px-6 py-2.5 sm:py-3 bg-slate-900 text-white rounded-lg font-semibold text-sm sm:text-base shadow-lg shadow-purple-900/10 hover:shadow-xl hover:shadow-purple-900/20 transition-all hover:-translate-y-0.5 overflow-hidden w-full sm:w-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center justify-center gap-2 z-10">
                  Get Started{" "}
                  <ArrowUpRight
                    size={14}
                    className="sm:w-4 sm:h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </span>
              </Link>
              <p className="text-slate-500 text-xs sm:text-sm max-w-xs font-medium">
                Join 15,000+ fast-growing Indian brands today. No credit card
                required.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 2: CLEAN NAVIGATION GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 md:gap-10 mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          {/* Brand Column */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2 space-y-3 sm:space-y-4">
            <div className="shrink-0 relative group">
              <Link
                to="/"
                className="flex items-center cursor-pointer gap-2 sm:gap-3"
              >
                <img
                  src="/logo.png"
                  alt="Microkraft Logo"
                  className="h-7 sm:h-8 md:h-10 w-auto object-contain"
                />
                <div>
                  <span className="text-lg sm:text-xl md:text-2xl font-black tracking-tight bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 bg-clip-text text-transparent">
                    Microkraft.AI
                  </span>
                </div>
              </Link>
            </div>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-xs font-medium">
              The Operating System for Modern Commerce. Empowering India's MSMEs
              with business-grade tools.
            </p>
            <div className="flex gap-2 sm:gap-2.5">
              <SocialIcon icon={Twitter} />
              <SocialIcon icon={Linkedin} />
              <SocialIcon icon={Instagram} />
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-3 sm:mb-4 text-xs sm:text-sm">
              Product
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <FooterLink text="CRM" badge="New" />
              <FooterLink text="Commerce" />
              <FooterLink text="Analytics" />
              <FooterLink text="WhatsApp" />
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-3 sm:mb-4 text-xs sm:text-sm">
              Company
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <FooterLink text="About Us" />
              <FooterLink text="Careers" />
              <FooterLink text="Blog" />
              <FooterLink text="Contact" />
            </ul>
          </div>

          {/* Contact Card */}
          <div className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2  p-4 sm:p-5 rounded-xl ">
            <h3 className="font-semibold text-slate-900 mb-3 sm:mb-3.5 text-xs sm:text-sm">
              Contact Us
            </h3>
            <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-slate-600 font-medium">
              <li className="flex items-center gap-2 sm:gap-2.5 hover:text-purple-600 transition-colors cursor-pointer group">
                <div className="p-1 sm:p-1.5 bg-white rounded-md border border-slate-100 group-hover:border-purple-100 transition-colors flex-shrink-0">
                  <Phone size={11} className="sm:w-3 sm:h-3" />
                </div>
                <span className="break-all">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2 sm:gap-2.5 hover:text-purple-600 transition-colors cursor-pointer group">
                <div className="p-1 sm:p-1.5 bg-white rounded-md border border-slate-100 group-hover:border-purple-100 transition-colors flex-shrink-0">
                  <Mail size={11} className="sm:w-3 sm:h-3" />
                </div>
                <span className="break-all">hello@microkraft.in</span>
              </li>
              <li className="flex items-center gap-2 sm:gap-2.5 group">
                <div className="p-1 sm:p-1.5 bg-white rounded-md border border-slate-100 flex-shrink-0">
                  <MapPin size={11} className="sm:w-3 sm:h-3" />
                </div>
                <span className="break-words">Nagpur, Maharashtra</span>
              </li>
            </ul>
            <div className="mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-slate-200 flex items-center gap-1.5 sm:gap-2 text-[9px] sm:text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
              <Heart
                size={9}
                className="sm:w-2.5 sm:h-2.5 text-red-500 fill-red-500 animate-pulse"
              />{" "}
              Made in India
            </div>
          </div>
        </div>

        {/* SECTION 3: MINIMAL BOTTOM BAR */}
        <div className="pb-4 sm:pb-5 md:pb-6 pt-4 sm:pt-5 md:pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <div className="text-[10px] sm:text-xs md:text-sm text-slate-400 font-medium text-center sm:text-left">
            © {new Date().getFullYear()} Microkraft Inc. All rights reserved.
          </div>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 text-[10px] sm:text-xs md:text-sm font-medium text-slate-500">
            <a
              href="#"
              className="hover:text-purple-600 transition-colors whitespace-nowrap"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-purple-600 transition-colors whitespace-nowrap"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-purple-600 transition-colors whitespace-nowrap"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- SUB-COMPONENTS ---

const FooterLink: React.FC<FooterLinkProps> = ({ text, badge }) => {
  // Map footer links to routes
  const linkMap: Record<string, string> = {
    "CRM": "/products/crm",
    "Commerce": "/products/commerce",
    "Analytics": "/products/analytics",
    "WhatsApp": "/products/ai-automation",
    "Contact": "/consultation",
  };

  const href = linkMap[text] || "#";

  return (
    <li className="group flex items-center gap-1.5 sm:gap-2 cursor-pointer">
      {href !== "#" ? (
        <Link
          to={href}
          className="text-xs sm:text-sm text-slate-500 font-medium group-hover:text-purple-600 group-hover:translate-x-1 transition-all duration-300"
        >
          {text}
        </Link>
      ) : (
        <span className="text-xs sm:text-sm text-slate-500 font-medium group-hover:text-purple-600 group-hover:translate-x-1 transition-all duration-300">
          {text}
        </span>
      )}
      {badge && (
        <span className="px-1 sm:px-1.5 py-0.5 rounded bg-purple-50 border border-purple-100 text-purple-600 text-[8px] sm:text-[9px] font-bold uppercase tracking-wider">
          {badge}
        </span>
      )}
    </li>
  );
};

const SocialIcon: React.FC<SocialIconProps> = ({ icon: Icon }) => (
  <a
    href="#"
    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
  >
    <Icon size={12} className="sm:w-3.5 sm:h-3.5" />
  </a>
);

export default Footer;
