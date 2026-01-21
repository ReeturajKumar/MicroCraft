"use client";

import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden -mt-[4px] z-30" style={{ 
      background: 'linear-gradient(to bottom, white 0%, white 100px, #FFE5E5 350px, #E8C9FF 70%, #B187FF 100%)' 
    }}>
      {/* Dynamic Background Glows - Sides using matching palette */}
      <div className="absolute top-[240px] -left-[35%] w-[80%] h-[1200px] bg-[#E8C9FF]/55 blur-[180px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-[350px] -right-1/4 w-1/2 h-[1000px] bg-[#FFE5E5]/45 blur-[130px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-0 left-1/4 w-1/2 h-[500px] bg-[#B187FF]/20 blur-[100px] rounded-full pointer-events-none z-0" />

      {/* Pre-Footer CTA Section - Transparent so the footer background shows */}
      <div className="w-full pt-48 pb-24 text-center relative z-10">
        <div className="max-w-[1440px] mx-auto px-4">
          <h2 className="text-[44px] lg:text-[64px] font-bold text-[#1F2937] leading-[1.05] mb-10 tracking-tight">
            Microkraft is for teams that move.
            <br />
            Make your move.
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="flex items-center gap-2 bg-[#0a0118] text-white px-8 py-4 rounded-full text-[15px] font-bold hover:bg-black transition-all shadow-xl hover:-translate-y-0.5 group">
              Get Started Free
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="flex items-center gap-2 bg-[#f3f0ff] text-[#0a0118] px-8 py-4 rounded-full text-[15px] font-bold hover:bg-[#e9e4ff] transition-all shadow-lg hover:-translate-y-0.5 group border border-purple-100">
              Book a Demo
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Box */}
      <div className="w-full px-4 lg:px-4 pt-20 pb-4 relative z-10">
        <div className="w-full max-w-[1560px] mx-auto rounded-[48px] bg-gradient-to-b from-[#48348a] via-[#0D0121] to-[#0D0121] p-12 lg:p-20 border border-white/5 relative overflow-hidden">
          {/* Subtle top reflection glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-x-16 gap-y-16 mb-24">
            {/* Column 1: Product */}
            <div>
              <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white brightness-150 opacity-100 mb-8">
                Product
              </h3>
              <ul className="space-y-4">
                <FooterItem text="Overview" />
                <FooterItem text="Customized CRM" />
                <FooterItem text="AI Automation" />
                <FooterItem text="POS & Inventory" />
                <FooterItem text="Finance & Compliance" />
                <FooterItem text="Dashboards" />
                <FooterItem text="Integrations" />
                <FooterItem text="Security & Privacy" />
                <FooterItem text="Mobile App" />
              </ul>
            </div>

            {/* Column 2: Business Growth */}
            <div>
              <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white brightness-150 opacity-100 mb-8">
                Business Growth
              </h3>
              <ul className="space-y-4 font-medium">
                <FooterItem text="Lead Management & CRM" />
                <FooterItem text="WhatsApp Automation" />
                <FooterItem text="Revenue Websites" />
                <FooterItem text="Digital Marketing AI" />
                <FooterItem text="Customer Retention" />
              </ul>
            </div>

            {/* Column 3: Operations Automation */}
            <div>
              <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white brightness-150 opacity-100 mb-8">
                Operations Automation
              </h3>
              <ul className="space-y-4">
                <FooterItem text="Task & Workflow AI" />
                <FooterItem text="POS & Inventory" />
                <FooterItem text="Billing & Payments" />
                <FooterItem text="Accounting & Compliance" />
                <FooterItem text="Vendor Procurement" />
              </ul>
            </div>

            {/* Column 4: Business Intelligence */}
            <div>
              <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white brightness-150 opacity-100 mb-8">
                Business Intelligence
              </h3>
              <ul className="space-y-4">
                <FooterItem text="Sales Dashboards" />
                <FooterItem text="Performance Analytics" />
                <FooterItem text="AI Forecasting" />
                <FooterItem text="Business Reports" />
                <FooterItem text="Multi-Branch Analytics" />
              </ul>
            </div>

            {/* Column 5: Industries */}
            <div>
              <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white brightness-150 opacity-100 mb-8">
                Industries
              </h3>
              <ul className="space-y-4">
                <FooterItem text="Manufacturing" />
                <FooterItem text="Technology & IT Services" />
                <FooterItem text="Retail & local commerce" />
                <FooterItem text="Restaurants & Hospitality" />
                <FooterItem text="Healthcare & Clinics" />
                <FooterItem text="Logistics & Transport" />
                <FooterItem text="Education & Training" />
                <FooterItem text="Service Businesses" />
                <FooterItem text="Agriculture & Allied" />
                <FooterItem text="E-commerce & D2C" />
                <FooterItem text="Startups" />
              </ul>
            </div>

            {/* Column 6: Resources */}
            <div>
              <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white brightness-150 opacity-100 mb-8">
                Resources
              </h3>
              <ul className="space-y-4">
                <FooterItem text="Docs & Guides" />
                <FooterItem text="Getting Started" />
                <FooterItem text="Product Updates" />
                <FooterItem text="FAQs" />
                <FooterItem text="Support Center" />
                <FooterItem text="Business Playbooks" />
                <FooterItem text="Industry Insights" />
                <FooterItem text="Become a Partner" />
              </ul>
            </div>

            {/* Column 7: About */}
            <div>
              <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white brightness-150 opacity-100 mb-8">
                About Microkraft
              </h3>
              <ul className="space-y-4">
                <FooterItem text="About Microkraft AI" />
                <FooterItem text="Our Approach" />
                <FooterItem text="Partners" />
                <FooterItem text="Careers" />
                <FooterItem text="Contact Us" />
              </ul>
            </div>

          </div>

          {/* Bottom Row */}
          <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between pt-12 border-t border-white/5 space-y-8 lg:space-y-0 relative">
            {/* LEFT: BRAND & COPYRIGHT */}
            <div className="lg:flex-1 flex flex-col items-center lg:items-start gap-y-2">
              <span className="text-[28px] font-bold tracking-tight text-white leading-none">
                Microkraft.ai
              </span>
              <span className="text-[11px] text-white/40 whitespace-nowrap uppercase tracking-wider">
                ©{new Date().getFullYear()} All rights reserved
              </span>
            </div>

            {/* CENTER: SOCIAL LINKS */}
            <div className="lg:flex-1 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {["LinkedIn", "Instagram", "YouTube", "WhatsApp", "Email Support"].map((item) => (
                <Link
                  key={item}
                  to="#"
                  className="text-[13px] font-bold text-white/50 hover:text-white transition-all whitespace-nowrap"
                >
                  {item}
                </Link>
              ))}
            </div>

            {/* RIGHT: LEGAL LINKS */}
            <div className="lg:flex-1 flex flex-wrap justify-center lg:justify-end gap-x-6 gap-y-2 text-[11px] font-bold text-white/20 transition-opacity">
              <Link to="#" className="hover:underline hover:text-white">Privacy</Link>
              <Link to="#" className="hover:underline hover:text-white">Legal</Link>
              <Link to="#" className="hover:underline hover:text-white">Security</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterItem = ({ text }: { text: string }) => (
  <li>
    <Link
      to="#"
      className="inline-flex items-center text-[13px] font-bold text-white/80 hover:text-white group transition-all whitespace-nowrap"
    >
      {text}
    </Link>
  </li>
);

export default Footer;
