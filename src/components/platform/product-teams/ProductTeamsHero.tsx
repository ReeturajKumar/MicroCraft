import { motion } from "framer-motion";
import { Heart, Play } from "lucide-react";

/**
 * PRODUCT TEAMS HERO - DIGITAL MARKETING VARIANT
 * Recreating the "Navigating the digital landscape" design with high fidelity.
 */

const ProductTeamsHero = () => {
  return (
    <section className="relative w-full bg-white pt-6 md:pt-12 pb-4 md:pb-8 overflow-hidden font-sans">
      <div className="max-w-8xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
          {/* Left Column: Text Content */}
          <div className="flex-1 text-left max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[32px] sm:text-[42px] md:text-[52px] lg:text-[64px] font-bold text-black leading-[1.1] mb-6 md:mb-8 tracking-tight"
            >
              The Unified Hub for <br className="hidden sm:block" />
              Product Management
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-black/70 text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed mb-8 md:mb-10 max-w-xl"
            >
              MicroCraft gives your team one place to plan, build, and ship.
              Manage your entire product lifecycle from idea to launch without
              jumping between ten different tools.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-10"
            >
              {[
                {
                  title: "Unified Workspace",
                  desc: "One home for all your work",
                },
                { title: "Smart Roadmaps", desc: "Plan what's next, visually" },
                {
                  title: "Live Collaboration",
                  desc: "Work together in real-time",
                },
                {
                  title: "Smart Automations",
                  desc: "Let the system handle the rest",
                },
              ].map((service, i) => (
                <div
                  key={i}
                  className="flex flex-col border-l-2 border-[#B9FF66] pl-4"
                >
                  <span className="text-[14px] md:text-[15px] font-bold text-black">
                    {service.title}
                  </span>
                  <span className="text-[12px] md:text-[13px] text-black/50">
                    {service.desc}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center sm:items-center gap-6"
            >
              <button className="w-full sm:w-auto bg-[#191a23] text-white px-8 py-4.5 rounded-xl text-[16px] md:text-[18px] font-bold transition-all shadow-lg shadow-[#B9FF66]/10">
                Start building for free
              </button>

              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-bold overflow-hidden"
                    >
                      <img
                        src={`https://i.pravatar.cc/100?u=${i}`}
                        alt="User"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col">
                  <span className="text-[13px] md:text-[14px] font-bold text-black whitespace-nowrap">
                    Joined by 200+ teams
                  </span>
                  <span className="text-[11px] md:text-[12px] text-black/40">
                    4.9/5 Rating on Trustpilot
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Stylized Product Management Visual */}
          <div className="flex-1 relative w-full max-w-137.5 lg:max-w-none h-auto lg:h-137.5 flex items-center justify-center mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-full aspect-4/3 lg:aspect-auto lg:h-full flex items-center justify-center"
            >
              {/* High-Quality Dashboard Image from Public Folder */}
              <motion.div className="relative z-20 w-full rounded-3xl overflow-hidden">
                <img
                  src="/dashboard.png"
                  alt="Product Management Dashboard"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/dashboard.png"; // Fallback to png
                  }}
                />
              </motion.div>

              <motion.div className="absolute -top-6 -left-4 md:top-10 md:-left-10 z-30 bg-white p-2 md:p-4 rounded-xl md:rounded-2xl shadow-xl border border-slate-50 flex items-center gap-2 md:gap-4 scale-75 md:scale-100 origin-bottom-right">
                <div className="w-10 h-10 rounded-full bg-[#B9FF66] flex items-center justify-center">
                  <Play className="w-4 h-4 text-black fill-black ml-0.5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[14px] font-bold text-black leading-none mb-1">
                    Weekly Velocity
                  </span>
                  <span className="text-[11px] text-[#10B981] font-bold">
                    +12.5% this week
                  </span>
                </div>
              </motion.div>

              {/* Floating Element 2: User Sentiment */}
              <motion.div className="absolute -bottom-8 -left-4 md:bottom-12 md:left-10 z-30 bg-[#191a23] p-3 md:p-5 rounded-xl md:rounded-2xl shadow-xl flex flex-col gap-2 md:gap-3 min-w-30 md:min-w-40 scale-75 md:scale-100 origin-top-right">
                <div className="flex items-center justify-between">
                  <Heart className="w-4 h-4 text-[#B9FF66] fill-[#B9FF66]" />
                  <span className="text-[10px] uppercase font-bold text-white/40 tracking-widest">
                    Sentiment
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[20px] font-bold text-white">96%</span>
                  <span className="text-[11px] text-white/50">
                    Highly Satisfied
                  </span>
                </div>
              </motion.div>

              {/* Decorative Background Circles */}
              <div className="absolute -top-10 right-20 w-32 h-32 bg-[#B9FF66]/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-500/5 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductTeamsHero;
