import React, { useState } from "react";
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
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-100/40 rounded-full blur-[80px] pointer-events-none mix-blend-multiply" />
      <div className="absolute top-0 left-[-20%] w-[400px] h-[400px] bg-blue-50/40 rounded-full blur-[80px] pointer-events-none mix-blend-multiply" />

      {/* The Grid with Mouse Mask (The Spotlight) */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          // Increased opacity to 0.1 so it's visible on white
          backgroundImage: `
            linear-gradient(to right, rgba(124, 58, 237, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(124, 58, 237, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          // The Mask: A radial gradient that acts as the flashlight
          maskImage: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
          WebkitMaskImage: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
        }}
      />

      {/* Glowing Cursor Follower (The Moving Ball) */}
      <div
        className="absolute pointer-events-none h-[200px] w-[200px] rounded-full bg-purple-400/8 blur-[60px] transition-transform duration-75 ease-out z-0"
        style={{
          left: mousePos.x,
          top: mousePos.y,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* =========================================
          CONTENT LAYERS
         ========================================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-4">
        {/* SECTION 1: THE "EDITORIAL" CTA */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-5 md:mb-20 pb-4 md:pb-6 border-b border-slate-100 relative">
          <div className="max-w-2xl relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight mb-6">
              Ready to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                Scale Up?
              </span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <button className="group relative px-6 py-3 bg-slate-900 text-white rounded-lg font-semibold text-base shadow-lg shadow-purple-900/10 hover:shadow-xl hover:shadow-purple-900/20 transition-all hover:-translate-y-0.5 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center gap-2 z-10">
                  Get Started{" "}
                  <ArrowUpRight
                    size={16}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </span>
              </button>
              <p className="text-slate-500 text-sm max-w-xs font-medium">
                Join 15,000+ fast-growing Indian brands today. No credit card
                required.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 2: CLEAN NAVIGATION GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-10 mb-5 md:mb-20">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2 space-y-4">
            <div className="shrink-0 relative group">
              <a href="/" className="flex items-center cursor-pointer gap-3">
                <img
                  src="/logo.png"
                  alt="Microkraft Logo"
                  className="h-8 md:h-10 w-auto object-contain"
                />
                <div>
                  <span className="text-xl md:text-2xl font-black tracking-tight bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 bg-clip-text text-transparent">
                    Microkraft
                  </span>
                  <div className="flex items-center gap-1.5 -mt-0.5">
                    <div className="h-[2px] w-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full" />
                    <span className="text-[9px] font-semibold text-slate-500 tracking-[0.2em] uppercase">
                      Growth OS
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs font-medium">
              The Operating System for Modern Commerce. Empowering India's MSMEs
              with enterprise-grade tools.
            </p>
            <div className="flex gap-2.5">
              <SocialIcon icon={Twitter} />
              <SocialIcon icon={Linkedin} />
              <SocialIcon icon={Instagram} />
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-4 text-sm">
              Product
            </h3>
            <ul className="space-y-3">
              <FooterLink text="CRM" badge="New" />
              <FooterLink text="Commerce" />
              <FooterLink text="Analytics" />
              <FooterLink text="WhatsApp" />
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-4 text-sm">
              Company
            </h3>
            <ul className="space-y-3">
              <FooterLink text="About Us" />
              <FooterLink text="Careers" />
              <FooterLink text="Blog" />
              <FooterLink text="Contact" />
            </ul>
          </div>

          {/* Contact Card */}
          <div className="col-span-2 bg-slate-50/50 backdrop-blur-sm p-5 rounded-xl border border-slate-100 hover:border-purple-100 transition-colors">
            <h3 className="font-semibold text-slate-900 mb-3.5 text-sm">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm text-slate-600 font-medium">
              <li className="flex items-center gap-2.5 hover:text-purple-600 transition-colors cursor-pointer group">
                <div className="p-1.5 bg-white rounded-md border border-slate-100 group-hover:border-purple-100 transition-colors">
                  <Phone size={12} />
                </div>
                +91 98765 43210
              </li>
              <li className="flex items-center gap-2.5 hover:text-purple-600 transition-colors cursor-pointer group">
                <div className="p-1.5 bg-white rounded-md border border-slate-100 group-hover:border-purple-100 transition-colors">
                  <Mail size={12} />
                </div>
                hello@microkraft.in
              </li>
              <li className="flex items-center gap-2.5 group">
                <div className="p-1.5 bg-white rounded-md border border-slate-100">
                  <MapPin size={12} />
                </div>
                Nagpur, Maharashtra
              </li>
            </ul>
            <div className="mt-5 pt-4 border-t border-slate-200 flex items-center gap-2 text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
              <Heart
                size={10}
                className="text-red-500 fill-red-500 animate-pulse"
              />{" "}
              Made in India
            </div>
          </div>
        </div>

        {/* SECTION 3: MINIMAL BOTTOM BAR */}
        <div className="pb-6 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs md:text-sm text-slate-400 font-medium">
            © {new Date().getFullYear()} Microkraft Inc. All rights reserved.
          </div>

          <div className="flex gap-6 md:gap-8 text-xs md:text-sm font-medium text-slate-500">
            <a href="#" className="hover:text-purple-600 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-purple-600 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-purple-600 transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- SUB-COMPONENTS ---

const FooterLink: React.FC<FooterLinkProps> = ({ text, badge }) => (
  <li className="group flex items-center gap-2 cursor-pointer">
    <span className="text-sm text-slate-500 font-medium group-hover:text-purple-600 group-hover:translate-x-1 transition-all duration-300">
      {text}
    </span>
    {badge && (
      <span className="px-1.5 py-0.5 rounded bg-purple-50 border border-purple-100 text-purple-600 text-[9px] font-bold uppercase tracking-wider">
        {badge}
      </span>
    )}
  </li>
);

const SocialIcon: React.FC<SocialIconProps> = ({ icon: Icon }) => (
  <a
    href="#"
    className="w-9 h-9 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
  >
    <Icon size={14} />
  </a>
);

export default Footer;
