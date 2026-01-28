import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

/**
 * PLATFORM INTEGRATIONS COMPONENT (v2 - High Fidelity Dark Green Design)
 * Matches the reference image with a focused integration layout.
 */

const LOGOS = [
    { src: "https://cdn.shopify.com/shopifycloud/brochure/assets/brand-assets/logo-bestpractices-old-small-9d48f4906860fcf2c2f4257abede5f6f8d6fbc8f6fe7473e06998c136d77d963.png", alt: "Shopify" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/WooCommerce2025_logo.svg/960px-WooCommerce2025_logo.svg.png", alt: "WooCommerce" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg", alt: "Razorpay" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/1280px-Stripe_Logo%2C_revised_2016.svg.png", alt: "Stripe" },
    { src: "https://www.zoho.com/sites/zweb/images/zoho_general_pages/zoho-logo-512.png", alt: "Zoho" },
    { src: "https://1000logos.net/wp-content/uploads/2022/12/HubSpot-Logo-2006.png", alt: "HubSpot" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/500px-Facebook_Logo_%282019%29.png", alt: "Facebook" },
    { src: "https://www.interakt.shop/wp-content/uploads/2024/10/Salesforce.png", alt: "Salesforce" },
    { src: "https://www.interakt.shop/wp-content/uploads/2024/10/Clevertap.png", alt: "Clevertap" },
    { src: "https://www.interakt.shop/wp-content/uploads/2024/10/Hello-Leads.png", alt: "Hello Leads" },
];

const PlatformIntegrations = () => {
    return (
        <section className="w-full bg-[#fdfdfd] px-6 pb-24 font-sans focus-within:z-40">
            <div className="max-w-7xl mx-auto">
                <div className="relative w-full bg-[#001f15] rounded-[48px] overflow-hidden min-h-[460px] flex flex-col md:flex-row items-center border border-white/5">
                    
                    {/* Background Radial Glow */}
                    <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#00ff8c]/10 blur-[120px] rounded-full pointer-events-none" />
                    
                    {/* Left content: Content Side */}
                    <div className="relative z-20 flex-1 p-10 md:p-16 lg:p-20 flex flex-col items-start justify-center">
                        <div className="mb-6 px-2.5 py-1 border border-emerald-500/40 rounded bg-emerald-500/5">
                             <span className="text-emerald-400 text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em]">
                                Integrations
                            </span>
                        </div>
                        
                        <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold text-white leading-[1.1] tracking-tight mb-6">
                            Get started today, <br/>
                            quick and easy
                        </h2>
                        
                        <p className="text-[15px] md:text-[16px] text-slate-400 font-medium leading-relaxed max-w-sm mb-10 opacity-90">
                            MicroCraft integrates with 100+ marketing tools, so you can rest assured we work with your tech stack.
                        </p>
                        
                        <button className="px-6 py-2.5 bg-[#142d24] hover:bg-[#1a382c] border border-white/10 text-white rounded-full text-[13px] font-black transition-all flex items-center gap-1.5 shadow-2xl group">
                            View Integrations <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/* Right content: Visual Magic */}
                    <div className="relative z-10 flex-1 w-full h-full min-h-[400px] flex items-center justify-center pointer-events-none overflow-hidden">
                        
                        {/* Background Logo Grid - High Fidelity Integration */}
                        <div className="absolute inset-0 grid grid-cols-5 gap-y-12 gap-x-8 p-12 opacity-[0.05] brightness-0 invert rotate-12 scale-125">
                            {[...LOGOS, ...LOGOS, ...LOGOS].slice(0, 30).map((logo, i) => (
                                <div key={i} className="flex items-center justify-center">
                                    <img 
                                        src={logo.src} 
                                        alt={logo.alt} 
                                        className="w-12 h-auto grayscale" 
                                    />
                                </div>
                            ))}
                        </div>
                        
                        {/* Animated Concentric Rings */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            {[240, 180, 140].map((size, i) => (
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
                                        ease: "easeInOut"
                                    }}
                                    className="absolute border border-emerald-500/20 rounded-full"
                                    style={{ width: `${size}px`, height: `${size}px` }}
                                />
                            ))}
                        </div>

                        {/* The Central Logo Card */}
                        <div className="relative z-30 group">
                            {/* Inner Refractive Glow */}
                            <div className="absolute -inset-16 bg-emerald-500/30 blur-[60px] rounded-full group-hover:bg-emerald-400/40 transition-colors duration-700" />
                            
                            {/* High-Fidelity MicroCraft Logo Card */}
                            <div className="relative w-28 h-28 bg-gradient-to-br from-[#004a32] via-[#001f15] to-[#000d09] rounded-[32px] flex items-center justify-center border border-white/10 shadow-[0_0_60px_rgba(0,255,140,0.15)] overflow-hidden">
                                <img 
                                    src="/logo.png" 
                                    alt="MicroCraft Logo" 
                                    className="w-16 h-16 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]"
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
