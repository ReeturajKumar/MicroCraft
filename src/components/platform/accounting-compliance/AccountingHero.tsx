import { motion } from "framer-motion";
import { MessageSquare, Instagram, Facebook, Linkedin } from "lucide-react";
import img1 from "../../../assets/busnessman.webp";
import img2 from "../../../assets/person.webp";

const AccountingHero = () => {
  return (
    <section className="relative pt-30 pb-32 overflow-hidden min-h-screen font-sans flex flex-col items-center justify-center">
      {/* Background Radial Pattern */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-gradient-to-bl from-pink-200/40 to-transparent rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-to-tr from-pink-100/30 to-transparent rounded-full blur-[120px]" />
      </div>

      <div className="max-w-8xl w-full mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          {/* Left Column: Typography & CTAs */}
          <div className="flex-1 z-20">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[32px] md:text-[42px] lg:text-[52px] font-bold text-[#1F1F1F] leading-[1.1] tracking-[-0.02em] mb-8"
            >
              Smart, Secure, and <br /> Scalable Finance Solutions for <br />
              Businesses and Individuals
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-[17px] text-slate-500 font-medium leading-[1.7] max-w-xl mb-14"
            >
              Manage your money with confidence. From personal tax filing to
              corporate <br className="hidden md:block" />
              finance management — we simplify the complex and deliver peace of
              mind.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-12"
            >
              <button className="px-12 py-4.5 bg-[#1F1F1F] text-white rounded-full font-bold text-[16px] hover:bg-black transition-all shadow-2xl hover:scale-[1.02] active:scale-[0.98]">
                Get the app
              </button>
              <button className="flex items-center gap-2 text-[16px] font-bold text-[#1F1F1F] group">
                Learn More{" "}
                <span className="text-2xl group-hover:translate-x-1.5 transition-transform">
                  →
                </span>
              </button>
            </motion.div>
          </div>

          {/* Right Column: Imagery & Nameplate */}
          <div className="flex-1 relative lg:-mt-16 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 max-w-lg w-full"
            >
              {/* Professional Man Image */}
              <div className="relative overflow-hidden rounded-b-[64px] border border-white/20">
                <img
                  src={img1}
                  alt="Professional Executive"
                  className="w-full h-[500px] object-cover object-top mix-blend-multiply shadow-[0_50px_100px_-30px_rgba(0,0,0,0.12)]"
                />

                {/* Social Sidebar */}
                <div className="absolute top-12 right-4 flex flex-col gap-3 p-2 bg-white/40 backdrop-blur-xl rounded-full border border-white/60 z-30 shadow-xl">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-slate-400 hover:text-[#D13E89] transition-all cursor-pointer shadow-sm">
                    <Instagram className="w-3.5 h-3.5" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-slate-400 hover:text-[#D13E89] transition-all cursor-pointer shadow-sm">
                    <Facebook className="w-3.5 h-3.5" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-slate-400 hover:text-[#D13E89] transition-all cursor-pointer shadow-sm">
                    <Linkedin className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Integrated Executive Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="absolute bottom-0 left-0 right-0 z-50 bg-[#0F172A]/90 backdrop-blur-lg text-white p-7 border-t border-white/10"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="text-[17px] font-black tracking-tight leading-none mb-1">
                        Jonathan Reed
                      </div>
                      <div className="text-[10px] font-bold text-white/40 tracking-wide uppercase">
                        Audit & Compliance Partner
                      </div>
                    </div>
                    <div className="opacity-40">
                      <MessageSquare className="text-pink-500 fill-pink-500 w-5 h-5" />
                    </div>
                  </div>
                  <p className="text-[12px] font-medium leading-[1.6] text-slate-300">
                    "Automating compliance isn't just about efficiency; it's
                    about building a foundation of trust and precision for every
                    financial decision."
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Standalone Mikal Testimonial - Positioned in the central marked area */}
      <div className="absolute top-[24%] left-[38%] hidden xl:block z-[60] pointer-events-none">
        <TestimonialCard
          name="Mikal lone"
          role="Chairman"
          text="MicroKraft transformed our audit process. What used to take weeks now happens in real-time with perfect accuracy."
          delay={1.4}
          className="pointer-events-auto scale-[0.85] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)]"
        />
      </div>

      {/* Partners Bar - Fully Responsive */}
      <div className="absolute bottom-0 left-0 w-full bg-[#D13E89] py-6 md:py-10 z-40 shadow-[0_-20px_40px_rgba(0,0,0,0.05)]">
        <div className="max-w-8xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 md:gap-0">
          <div className="text-white text-[13px] md:text-[15px] font-bold opacity-80 tracking-[0.2em] uppercase text-center md:text-left">
            created by
          </div>

          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20">
            <div className="flex items-center gap-3 md:gap-5 text-white hover:opacity-100 transition-opacity cursor-pointer group">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-lg md:rounded-xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                <span className="text-[#D13E89] font-black text-lg md:text-xl">
                  R
                </span>
              </div>
              <span className="text-[22px] md:text-[26px] font-black tracking-tighter">
                Revolut
              </span>
            </div>

            <div className="flex items-center gap-3 md:gap-5 text-white hover:opacity-100 transition-opacity cursor-pointer group">
              <div className="w-8 h-8 md:w-10 md:h-10 border-2 border-white/40 flex items-center justify-center rotate-45 shadow-sm transition-transform group-hover:scale-110">
                <span className="-rotate-45 text-white font-black text-lg md:text-2xl mb-1">
                  M
                </span>
              </div>
              <span className="text-[22px] md:text-[26px] font-black tracking-tighter italic">
                Mobbin
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({
  name,
  role,
  text,
  className = "",
  delay = 0,
}: any) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.6 }}
    className={`bg-white rounded-[40px] p-8 pb-10 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] border border-white/50 max-w-[320px] ${className}`}
  >
    <div className="flex items-center gap-4 mb-8">
      <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-slate-50 shadow-sm">
        <img src={img2} alt={name} className="w-full h-full object-cover" />
      </div>
      <div>
        <div className="text-[16px] font-black text-[#1F1F1F] leading-none mb-1">
          {name}
        </div>
        <div className="text-[12px] font-bold text-slate-400">{role}</div>
      </div>
    </div>
    <p className="text-[12px] text-slate-500 font-medium leading-[1.7] italic">
      "{text}"
    </p>
  </motion.div>
);

export default AccountingHero;
