import React from "react";
import { Quote, ArrowRight, Smile, BarChart3 } from "lucide-react";

const SuccessStoriesSection: React.FC = () => {
  return (
    <section className="relative w-full bg-white py-12 lg:py-20 overflow-hidden font-sans">
      {/* --- CSS ANIMATIONS --- */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        /* Vertical Text Slide Animation */
        @keyframes textSlide {
          0%, 20% { transform: translateY(0%); }
          25%, 45% { transform: translateY(-25%); }
          50%, 70% { transform: translateY(-50%); }
          75%, 95% { transform: translateY(-75%); }
          100% { transform: translateY(-75%); }
        }

        .animate-fade-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
        
        /* Scrolling Text Classes */
        .scrolling-text-container {
          height: 1.2em;
          overflow: hidden;
          display: inline-block;
          vertical-align: bottom;
          position: relative;
        }
        .scrolling-text-inner {
          animation: textSlide 6s cubic-bezier(0.16, 1, 0.3, 1) infinite;
        }

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
      `}</style>

      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-50 rounded-full blur-3xl -z-10 mix-blend-multiply opacity-60" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-50 rounded-full blur-3xl -z-10 mix-blend-multiply opacity-60" />

      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
        {/* === TOP SECTION: Header & Hero Image (Compact) === */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-15 items-center mb-10 lg:mb-15">
          {/* LEFT: Header with Animation */}
          <div className="animate-fade-up relative z-10">
            <h2 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-4">
              Success Stories <br />
              {/* ANIMATED TEXT CONTAINER */}
              <div className="scrolling-text-container">
                <div className="scrolling-text-inner flex flex-col text-left">
                  {/* Apply gradient classes directly to EACH span */}
                  <span className="block h-[1.2em] text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                    Microkraft CRM
                  </span>
                  <span className="block h-[1.2em] text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                    Real Results
                  </span>
                  <span className="block h-[1.2em] text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                    Smart Tools
                  </span>
                  <span className="block h-[1.2em] text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                    Microkraft CRM
                  </span>
                </div>
              </div>
            </h2>

            <p className="text-sm lg:text-base text-slate-500 leading-relaxed max-w-md">
              Join satisfied clients scaling effortlessly with our tools.
              Experience the transformation firsthand.
            </p>
          </div>

          {/* RIGHT: Compact Hero Image */}
          <div className="relative animate-fade-up delay-100 flex justify-center lg:justify-end h-[300px] lg:h-[330px]">
            <div className="relative z-10 w-full max-w-sm h-full">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600"
                alt="Happy Client"
                className="w-full h-full object-cover rounded-[1.5rem] shadow-xl z-10 relative"
              />

              {/* Floating Card: Client Satisfaction */}
              <div className="absolute top-6 -left-6 bg-white p-2 pr-4 rounded-xl shadow-lg border border-slate-100 animate-float flex items-center gap-2 z-20">
                <div className="flex -space-x-2">
                  <img
                    src="https://i.pravatar.cc/150?img=11"
                    className="w-6 h-6 rounded-full border border-white"
                    alt=""
                  />
                  <img
                    src="https://i.pravatar.cc/150?img=12"
                    className="w-6 h-6 rounded-full border border-white"
                    alt=""
                  />
                </div>
                <div>
                  <div className="text-[9px] text-slate-400 font-bold uppercase">
                    Satisfaction
                  </div>
                  <div className="text-xs font-bold text-slate-900 flex items-center gap-1">
                    14.9/15k{" "}
                    <span className="text-green-500 bg-green-50 px-1 rounded text-[9px]">
                      +25%
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Card: Insight */}
              <div
                className="absolute bottom-8 -right-4 bg-white p-3 rounded-xl shadow-lg border border-slate-100 animate-float z-20 max-w-[140px]"
                style={{ animationDelay: "2s" }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className="bg-purple-100 p-1 rounded-md text-purple-600">
                    <BarChart3 size={12} />
                  </div>
                  <span className="font-bold text-slate-900 text-xs">
                    Analysis
                  </span>
                </div>
                <p className="text-[9px] text-slate-400 leading-tight">
                  Effectively modular risk management.
                </p>
              </div>

              <div
                className="absolute top-1/2 -right-6 text-green-400 animate-float"
                style={{ animationDelay: "0.5s" }}
              >
                <Smile
                  size={32}
                  fill="currentColor"
                  className="drop-shadow-md"
                />
              </div>
            </div>
          </div>
        </div>

        {/* === BOTTOM SECTION: Compact Testimonials Grid === */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 items-end">
          {/* Card 1: Standard (Compact) */}
          <div className="bg-slate-50 p-5 rounded-[1.5rem] relative group hover:bg-white hover:shadow-lg transition-all duration-300 animate-fade-up delay-200">
            <Quote
              size={28}
              className="text-purple-200 mb-20 group-hover:text-purple-500 transition-colors"
            />

            {/* Small Image Overlay */}
            <div className="absolute top-5 right-5 w-16 h-16 rounded-xl overflow-hidden shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200"
                className="w-full h-full object-cover"
                alt="Illumi"
              />
            </div>

            <div className="relative z-10 mt-2">
              <h4 className="font-bold text-slate-900 text-sm">
                Illumi Parker
              </h4>
              <p className="text-[10px] text-slate-500 mb-2">
                Marketing Manager, TecId.
              </p>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                "We've seen a significant boost in our ROI and customer
                engagement."
              </p>
            </div>
          </div>

          {/* Card 2: FEATURED (Active State - Compact) */}
          <div className="bg-gradient-to-br from-purple-600 to-pink-500 p-1 rounded-[1.5rem] shadow-xl shadow-purple-200/50 transform md:-translate-y-4 animate-fade-up delay-300 relative overflow-hidden group h-[280px]">
            <div className="absolute inset-1 rounded-[1.3rem] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                alt="Nami"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/40 to-transparent mix-blend-multiply" />
            </div>

            <div className="relative h-full p-5 flex flex-col justify-between text-white">
              <Quote size={28} className="text-white/40" />

              {/* Button */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border border-white/30 backdrop-blur-sm flex items-center justify-center cursor-pointer group-hover:scale-110 transition-transform">
                <div className="absolute inset-0 rounded-full border border-white/50 border-dashed animate-spin-slow"></div>
                <ArrowRight className="text-white" size={18} />
              </div>

              <div>
                <h4 className="font-bold text-base mb-0.5">Nami Anderson</h4>
                <p className="text-[10px] text-white/80 mb-2">
                  Director Ops, Retail
                </p>
                <p className="text-xs font-medium leading-relaxed opacity-90">
                  "Training & support were fantastic! Highly recommended!"
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Standard (Compact) */}
          <div className="bg-slate-50 p-5 rounded-[1.5rem] relative group hover:bg-white hover:shadow-lg transition-all duration-300 animate-fade-up delay-200">
            <Quote
              size={28}
              className="text-purple-200 mb-20 group-hover:text-purple-500 transition-colors"
            />

            <div className="absolute top-5 right-5 w-16 h-16 rounded-xl overflow-hidden shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200"
                className="w-full h-full object-cover"
                alt="Sarah"
              />
            </div>

            <div className="relative z-10 mt-2">
              <h4 className="font-bold text-slate-900 text-sm">
                Sarah Zoldyck
              </h4>
              <p className="text-[10px] text-slate-500 mb-2">
                CEO, TechSolutions.
              </p>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                "Our team is more efficient, client satisfaction has never been
                higher!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
