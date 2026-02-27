import { ChevronRight, CheckCircle2 } from "lucide-react";
import { FlipWords } from "../ui/flip-words";
import dashboardMain from "../../assets/dashboard_main.png";
import dashboardSidebar from "../../assets/dashboard_part_2.png";
import dashboardShare from "../../assets/dashboard_part_3.png";
import dashboardSearch from "../../assets/dashboard_part_4.png";
import img1 from "../../assets/shopify.webp";
import img2 from "../../assets/WooCommerce2025_logo.webp";
import img3 from "../../assets/GoogleSheet.webp";
import img4 from "../../assets/TallyPrime.webp";
import img5 from "../../assets/Rozarpay.webp";
import img6 from "../../assets/Payu.webp";
import img7 from "../../assets/WhatsappPay.webp";
import img8 from "../../assets/duitku.webp";
import img9 from "../../assets/XENDIT.webp";
import img10 from "../../assets/Stripe.webp";
import img11 from "../../assets/zoho.webp";
import img12 from "../../assets/Husbspot.webp";
import img13 from "../../assets/Freshworks_Logo.webp";
import img14 from "../../assets/bigin-crm.webp";
import img15 from "../../assets/freshdesk_logo_icon_170122.webp";
import img16 from "../../assets/Facebook_Logo_(2019).webp";
import img17 from "../../assets/web.webp";
import img18 from "../../assets/moengage.webp";
import img19 from "../../assets/Clevertap.webp";
import img20 from "../../assets/Salesforce.webp";

const LOGOS = [
  { src: img1, alt: "Shopify", height: "h-4 md:h-5" },
  { src: img2, alt: "WooCommerce", height: "h-4 md:h-5" },
  { src: img3, height: "h-25 md:h-20" },
  { src: img4, alt: "TallyPrime", height: "h-20 md:h-15" },
  { src: img5, alt: "Razorpay", height: "h-5 md:h-7" },
  { src: img6, alt: "PayU", height: "h-20 md:h-15" },
  { src: img7, alt: "Whatsapp Pay", height: "h-25 md:h-20" },
  { src: img8, alt: "Duitku", height: "h-3 md:h-7" },
  { src: img9, alt: "Xendit", height: "h-20 md:h-10" },
  { src: img10, alt: "Stripe", height: "h-5 md:h-7" },
  { src: img11, alt: "Zoho", height: "h-15 md:h-10" },
  { src: img12, alt: "HubSpot", height: "h-25 md:h-20" },
  { src: img13, alt: "Freshworks", height: "h-5 md:h-7" },
  { src: img14, alt: "Bigin", height: "h-15 md:h-10" },
  { src: img15, alt: "Freshdesk", height: "h-25 md:h-20" },
  { src: img16, alt: "Facebook", height: "h-15 md:h-10" },
  { src: img17, alt: "WebEngin", height: "h-15 md:h-10" },
  { src: img18, alt: "MoEngage", height: "h-15 md:h-10" },
  { src: img19, alt: "Clevertap", height: "h-25 md:h-20" },
  { src: img20, alt: "Salesforce", height: "h-25 md:h-20" },
];

const Hero = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden font-sans">
      {/* 1. Content Zone (White Background) */}
      <div className="relative z-10 pt-20 md:pt-28 pb-15 md:pb-8 flex flex-col items-center text-center max-w-7xl mx-auto px-4 md:px-12">
        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-sans leading-tight mb-4 sm:mb-6 text-slate-900 drop-shadow-sm max-w-7xl mx-auto px-4">
          <span className="block">We Solve Everyday Business Problems</span>
          <span className="block mt-2">
            Using {""}
            <FlipWords
              words={[
                "Smart Automation",
                "CRM Solutions",
                "AI Technology",
                "Intelligent Systems",
              ]}
              duration={3000}
            />
          </span>
          <span className="block text-slate-700 font-semibold text-xl sm:text-2xl md:text-3xl mt-2">
            Without Complexity
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-base md:text-[18px] leading-[1.6] text-[#1F2023]/70 mb-8 font-normal font-sans tracking-wide max-w-[650px] px-4 md:px-0">
          Microkraft AI delivers customized CRM, AI automation, and smart
          business systems that simplify operations and help businesses grow
          faster.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-5 w-full sm:w-auto px-6 sm:px-0">
          <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-base font-medium font-sans transition-all focus-visible:outline-none rounded-full px-7 py-3.5 bg-[#1F2023] text-white hover:bg-[#7856FF] hover:shadow-lg hover:-translate-y-0.5 duration-300">
            Talk to an Expert <ChevronRight className="w-4 h-4" />
          </button>
          <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-base font-medium font-sans transition-all focus-visible:outline-none rounded-full px-7 py-3.5 bg-transparent border border-[#E4E4E7] text-[#1F2023] hover:border-[#D1D1D2] hover:bg-[#F4F4F5]">
            Free Business Review <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Logo Strip (Infinite Marquee) */}
        <div className="w-full max-w-6xl mb-4 md:mb-6 px-2 md:px-6 relative">
          {/* Edge Fades */}
          <div className="absolute inset-y-0 left-0 w-20 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden flex whitespace-nowrap mt-4">
            <div className="flex animate-marquee w-max items-center gap-12 md:gap-24  transition-all duration-100 py-4">
              {[...LOGOS, ...LOGOS, ...LOGOS].map((logo, idx) => (
                <img
                  key={idx}
                  src={logo.src}
                  alt={logo.alt}
                  className={`${logo.height} w-auto object-contain flex-shrink-0`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2. Gradient Transition & Composite Dashboard */}
      <div className="mx-2 md:mx-4 lg:mx-auto max-w-[1500px] relative bg-[#15003F] rounded-b-[20px] md:rounded-b-[40px] overflow-hidden">
        {/* Gradient Background - ABSOLUTE Layer behind content */}
        <div
          className="absolute top-0 left-0 right-0 h-[400px] md:h-[800px] w-full z-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, #FFFFFF 5%, #FFF5F5 30%, #EAD4FF 42%, #9F7AEA 61%, #15003F 80%)",
          }}
        ></div>

        {/* Dashboard Composite */}
        <div className="relative z-10 max-w-6xl mx-auto px-8 md:px-12 perspective-2000px pb-24 md:pb-40 pt-12 md:pt-20">
          <div className="relative">
            {/* Main Dashboard */}
            <div className="relative z-10 rounded-[20px] md:rounded-[24px] p-0.5 md:p-[4px] bg-white/20 shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_20px_40px_-12px_rgba(0,0,0,0.1)] transition-all duration-700 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.4)]">
              <img
                src={dashboardMain}
                alt="Microkraft Main Dashboard"
                className="w-full h-auto rounded-[18px] md:rounded-[20px] shadow-[0_20px_40px_-10px_rgba(50,50,93,0.2),0_15px_30px_-15px_rgba(0,0,0,0.3)] md:shadow-[0_30px_60px_-12px_rgba(50,50,93,0.25),0_18px_36px_-18px_rgba(0,0,0,0.3)]"
              />
            </div>

            {/* Floating 1: Left - Search Menu */}
            <div className="absolute -left-6 lg:-left-12 bottom-12 lg:bottom-24 z-40 w-[20%] hidden sm:block pointer-events-none">
              <img
                src={dashboardSearch}
                alt="Search Menu"
                className="w-full h-auto rounded-2xl md:rounded-[20px] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)] border border-white/50"
              />
            </div>

            {/* Floating 2: Top Right - Sidebar Menu */}
            <div className="absolute -right-8 lg:-right-20 -top-6 lg:-top-8 z-30 w-[24%] hidden sm:block pointer-events-none">
              <img
                src={dashboardSidebar}
                alt="Sidebar Menu"
                className="w-full h-auto rounded-2xl md:rounded-[22px] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)] border border-white/50 transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Floating 3: Right Bottom - Share Modal */}
            <div className="absolute -right-4 lg:-right-10 bottom-6 lg:bottom-8 z-40 w-[36%] hidden sm:block pointer-events-none">
              <img
                src={dashboardShare}
                alt="Share Modal"
                className="w-full h-auto rounded-2xl md:rounded-[22px] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)] border border-white/50"
              />
            </div>
          </div>
        </div>

        {/* 3. Value Props Section (Dark Mode) */}
        <div className="relative z-10 max-w-6xl mx-auto px-8 md:px-12 pb-10 md:pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-12 sm:gap-x-8 md:gap-x-12 lg:gap-x-20 text-center">
            {/* Item 1: Lead Management */}
            <div className="flex flex-col items-center group px-4">
              <div className="bg-white rounded-full p-0.5 mb-5 shadow-[0_0_20px_rgba(255,255,255,0.2)] group-hover:scale-110 transition-transform duration-300">
                <CheckCircle2 className="w-6 h-6 text-[#15003F] fill-white" />
              </div>
              <h3 className="text-lg md:text-[18px] font-bold font-sans text-white mb-3 tracking-tight">
                Never Miss a Business Lead
              </h3>
              <p className="text-[#E4E4E7]/70 text-sm md:text-base font-sans leading-relaxed max-w-[320px]">
                Every call, message, website enquiry, and walk-in lands in one
                place — so nothing gets forgotten.
              </p>
            </div>

            {/* Item 2: Automation */}
            <div className="flex flex-col items-center group px-4">
              <div className="bg-white rounded-full p-0.5 mb-5 shadow-[0_0_20px_rgba(255,255,255,0.2)] group-hover:scale-110 transition-transform duration-300">
                <CheckCircle2 className="w-6 h-6 text-[#15003F] fill-white" />
              </div>
              <h3 className="text-lg md:text-[18px] font-bold font-sans text-white mb-3 tracking-tight">
                Follow-Ups Run Automatically
              </h3>
              <p className="text-[#E4E4E7]/70 text-sm md:text-base font-sans leading-relaxed max-w-[320px]">
                Reminders and tasks run on their own — saving time and keeping
                your team on track.
              </p>
            </div>

            {/* Item 3: Growth */}
            <div className="flex flex-col items-center group px-4 sm:col-span-2 md:col-span-1">
              <div className="bg-white rounded-full p-0.5 mb-5 shadow-[0_0_20px_rgba(255,255,255,0.2)] group-hover:scale-110 transition-transform duration-300">
                <CheckCircle2 className="w-6 h-6 text-[#15003F] fill-white" />
              </div>
              <h3 className="text-lg md:text-[18px] font-bold font-sans text-white mb-3 tracking-tight">
                See Your Business Growing
              </h3>
              <p className="text-[#E4E4E7]/70 text-sm md:text-base font-sans leading-relaxed max-w-[320px] mx-auto">
                View sales, performance, and daily activity in one place —
                always know how your business is doing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
