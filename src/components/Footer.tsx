"use client";

import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative w-full">
      {/* Main Container */}
      <div className="max-w-full mx-auto rounded-t-[3rem] bg-gradient-to-b from-[#150f33] via-[#0d0822] to-[#180c5a] backdrop-blur-3xl border border-white/5 border-b-0  p-10 md:p-16 lg:p-20 text-white/60 relative z-10">
        {/* Subtle glass reflection overlay */}
        <div className="absolute inset-0 rounded-t-[3rem] bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-16 gap-x-8 md:gap-x-12 mb-20">
          {/* Column 1: Platform */}
          <div className="space-y-16">
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.25em] text-white/30 mb-8">
                Platform
              </h3>
              <ul className="space-y-4">
                <FooterItem text="Product Analytics" />
                <FooterItem text="Web Analytics" />
                <FooterItem text="Mobile Analytics" />
                <FooterItem text="Experiments" />
                <FooterItem text="Metric Trees" />
                <FooterItem text="Warehouse Connectors" />
                <FooterItem text="Session Replay" />
                <FooterItem text="Integrations" />
                <FooterItem text="Security & Privacy" />
              </ul>
              <div className="mt-8">
                <Link
                  to="#"
                  className="inline-flex items-center px-5 py-2 rounded-full bg-white/5 hover:bg-white/10 text-white text-[13px] font-bold transition-all border border-white/5 group"
                >
                  Pricing{" "}
                  <ChevronRight className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Column 2: Solutions & Teams */}
          <div className="space-y-16">
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.25em] text-white/30 mb-8">
                Use Cases
              </h3>
              <ul className="space-y-4">
                <FooterItem text="Acquire New Users" />
                <FooterItem text="Engage Your Users" />
                <FooterItem text="Grow Your Usership" />
                <FooterItem text="Empower Your Team" />
              </ul>
            </div>
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.25em] text-white/30 mb-8">
                Teams
              </h3>
              <ul className="space-y-4">
                <FooterItem text="Product Teams" />
                <FooterItem text="Data Analyst Teams" />
                <FooterItem text="Marketing Teams" />
                <FooterItem text="Engineering Teams" />
              </ul>
            </div>
          </div>

          {/* Column 3: Industries & Size */}
          <div className="space-y-16">
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.25em] text-white/30 mb-8">
                Industries
              </h3>
              <ul className="space-y-4">
                <FooterItem text="Finance" />
                <FooterItem text="Media & Entertainment" />
                <FooterItem text="B2B SaaS" />
                <FooterItem text="Ecommerce" />
                <FooterItem text="Healthcare" />
                <FooterItem text="AI" />
              </ul>
            </div>
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.25em] text-white/30 mb-8">
                Business Size
              </h3>
              <ul className="space-y-4">
                <FooterItem text="Enterprise" />
                <FooterItem text="Small & Midsize" />
                <FooterItem text="Startup Program" />
              </ul>
            </div>
          </div>

          {/* Column 4: Resources & Company */}
          <div className="space-y-16">
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.25em] text-white/30 mb-8">
                Resources
              </h3>
              <ul className="space-y-4">
                <FooterItem text="Docs & Guides" />
                <FooterItem text="Contact Support" />
                <FooterItem text="What's New" />
                <FooterItem text="Troubleshooting FAQs" />
                <FooterItem text="Blog" />
                <FooterItem text="Events & Webinars" />
                <FooterItem text="Community" />
                <FooterItem text="Customer Stories" />
              </ul>
            </div>
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.25em] text-white/30 mb-8">
                Company
              </h3>
              <ul className="space-y-4">
                <FooterItem text="About Us" />
                <FooterItem text="Become a Partner" />
                <FooterItem text="Expert Directory" />
                <FooterItem text="Careers" />
                <FooterItem text="Contact Sales" />
              </ul>
            </div>
          </div>

          {/* Column 5: Templates & Compare */}
          <div className="space-y-16">
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.25em] text-white/30 mb-8">
                Templates
              </h3>
              <ul className="space-y-4">
                <FooterItem text="Company KPIs" />
                <FooterItem text="Feature Launch" />
                <FooterItem text="Lifecycle Cohort Analysis" />
                <FooterItem text="Ecommerce" />
                <FooterItem text="Marketing KPIs" />
                <FooterItem text="Web Analytics" />
                <FooterItem text="AI Company KPIs" />
              </ul>
            </div>
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.25em] text-white/30 mb-8">
                Compare Us
              </h3>
              <ul className="space-y-4">
                <FooterItem text="Amplitude" />
                <FooterItem text="Heap" />
                <FooterItem text="Pendo" />
                <FooterItem text="Google Analytics" />
                <FooterItem text="PostHog" />
                <FooterItem text="Fullstory" />
                <FooterItem text="Adobe Analytics" />
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-end justify-between pt-12 border-t border-white/5">
          <div className="space-y-4">
            <Link to="/" className="block">
              <span className="text-3xl font-bold tracking-tighter text-white font-serif">
                Microcraft.ai
              </span>
            </Link>
            <p className="text-[11px] font-bold text-white/20 uppercase tracking-widest">
              © 2026 Microcraft.ai. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-8 mt-10 md:mt-0 overflow-x-auto no-scrollbar pb-2 md:pb-0">
            <FooterLegalLink text="Privacy Program" />
            <FooterLegalLink text="Legal" />
            <FooterLegalLink text="Security" />
            <FooterLegalLink text="Your Privacy Rights" />
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterItem = ({ text }: { text: string }) => (
  <li className="group">
    <Link
      to="#"
      className="flex items-center justify-between text-[14px] font-bold text-white/50 hover:text-white transition-all"
    >
      <span>{text}</span>
      <ChevronRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
    </Link>
  </li>
);

const FooterLegalLink = ({ text }: { text: string }) => (
  <Link
    to="#"
    className="text-[11px] font-black text-white/20 hover:text-white uppercase tracking-widest transition-colors whitespace-nowrap"
  >
    {text}
  </Link>
);

export default Footer;
