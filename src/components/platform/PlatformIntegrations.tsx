import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import img1 from "../../assets/shopify.webp";
import img2 from "../../assets/WooCommerce2025_logo.webp";
import img3 from "../../assets/Rozarpay.webp";
import img4 from "../../assets/Stripe.webp";
import img5 from "../../assets/zoho.webp";
import img6 from "../../assets/Husbspot.webp";
import img7 from "../../assets/Facebook_Logo_(2019).webp";
import img8 from "../../assets/Salesforce.webp";
import img9 from "../../assets/Clevertap.webp";
import img10 from "../../assets/Hello-Leads.webp";

const LOGOS = [
  { src: img1, alt: "Shopify" },
  { src: img2, alt: "WooCommerce" },
  { src: img3, alt: "Razorpay" },
  { src: img4, alt: "Stripe" },
  { src: img5, alt: "Zoho" },
  { src: img6, alt: "HubSpot" },
  { src: img7, alt: "Facebook" },
  { src: img8, alt: "Salesforce" },
  { src: img9, alt: "Clevertap" },
  { src: img10, alt: "Hello Leads" },
];

const PlatformIntegrations = () => {
  return (
    <section className="w-full bg-[#fdfdfd] px-4 md:px-8 lg:px-12 xl:px-16 pt-12 pb-16 md:pb-24 font-sans focus-within:z-40">
      <div className="max-w-8xl mx-auto">
        <div className="relative w-full bg-[#001f15] rounded-[24px] md:rounded-[48px] overflow-hidden min-h-fit md:min-h-[500px] flex flex-col md:flex-row items-center border border-white/5">
          {/* Background Radial Glow */}
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#00ff8c]/10 blur-[120px] rounded-full pointer-events-none" />

          {/* Left content: Content Side */}
          <div className="relative z-20 flex-1 p-8 md:p-12 lg:p-16 xl:p-24 flex flex-col items-center md:items-start text-center md:text-left justify-center">
            <div className="mb-6 px-3 py-1.5 border border-emerald-500/40 rounded bg-emerald-500/5 w-fit">
              <span className="text-emerald-400 text-[10px] md:text-[12px] font-black uppercase tracking-[0.2em]">
                Integrations
              </span>
            </div>

            <h2 className="text-[30px] sm:text-[36px] md:text-[44px] lg:text-[52px] xl:text-[56px] font-bold text-white leading-[1.1] tracking-tight mb-6">
              Get started today, <br className="hidden sm:block" />
              quick and easy
            </h2>

            <p className="text-[15px] md:text-[17px] lg:text-[18px] text-slate-400 font-medium leading-relaxed max-w-xl mb-8 md:mb-10 opacity-90 mx-auto md:mx-0">
              MicroCraft integrates with 100+ marketing tools, so you can rest
              assured we work with your tech stack.
            </p>

            <button className="px-6 md:px-7 py-3 md:py-3.5 bg-[#142d24] hover:bg-[#1a382c] border border-white/10 text-white rounded-full text-[13px] md:text-[14px] font-black transition-all flex items-center gap-2 shadow-2xl group hover:-translate-y-0.5">
              View Integrations{" "}
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right content: Visual Magic */}
          <div className="relative z-10 flex-1 w-full h-full min-h-[350px] md:min-h-[500px] flex items-center justify-center pointer-events-none overflow-hidden pb-12 md:pb-0">
            {/* Background Logo Grid - High Fidelity Integration */}
            <div className="absolute inset-0 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-y-10 md:gap-y-14 gap-x-6 md:gap-x-10 p-8 md:p-16 opacity-[0.05] brightness-0 invert rotate-12 scale-125">
              {[...LOGOS, ...LOGOS, ...LOGOS].slice(0, 30).map((logo, i) => (
                <div key={i} className="flex items-center justify-center">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="w-10 md:w-14 h-auto grayscale"
                  />
                </div>
              ))}
            </div>

            {/* Animated Concentric Rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              {[280, 210, 160].map((size, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: [0.1, 0.4, 0.1],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeInOut",
                  }}
                  className="absolute border border-emerald-500/20 rounded-full"
                  style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    maxWidth: "70%",
                    maxHeight: "70%",
                  }}
                />
              ))}
            </div>

            {/* The Central Logo Card */}
            <div className="relative z-30 group">
              {/* Inner Refractive Glow */}
              <div className="absolute -inset-20 bg-emerald-500/30 blur-[70px] rounded-full group-hover:bg-emerald-400/40 transition-colors duration-700" />

              {/* High-Fidelity MicroKraft Logo Card */}
              <div className="relative w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-[#004a32] via-[#001f15] to-[#000d09] rounded-[24px] md:rounded-[36px] flex items-center justify-center border border-white/10 shadow-[0_0_60px_rgba(0,255,140,0.15)] overflow-hidden">
                <img
                  src="/logo.png"
                  alt="MicroKraft Logo"
                  className="w-14 h-14 md:w-20 md:h-20 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]"
                />
                {/* Refraction Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformIntegrations;
