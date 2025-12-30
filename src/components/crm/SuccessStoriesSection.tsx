import React from "react";
import { Quote, ArrowRight, Smile, BarChart3 } from "lucide-react";

const SuccessStoriesSection: React.FC = () => {
  return (
    <section className="relative w-full bg-white py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden font-sans">
      {/* Styles moved to index.css - see: animate-fade-up, animate-float-crm, animate-spin-slow, scrolling-text-container-h2-alt, scrolling-text-inner, delay-* */}

      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] bg-purple-50 rounded-full blur-3xl -z-10 mix-blend-multiply opacity-40" />
      <div className="absolute bottom-0 right-0 w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] bg-pink-50 rounded-full blur-3xl -z-10 mix-blend-multiply opacity-40" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8 max-w-7xl relative z-10">
        {/* === TOP SECTION: Header & Hero Image (Compact) === */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          {/* LEFT: Header with Animation */}
          <div className="animate-fade-up relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-3 sm:mb-4">
              Success Stories <br />
              {/* ANIMATED TEXT CONTAINER */}
              <div className="scrolling-text-container-h2-alt">
                <div className="scrolling-text-inner flex flex-col text-left">
                  {/* Apply gradient classes directly to EACH span */}
                  <span className="block h-[1.25em] sm:h-[1.2em] text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                    Microkraft CRM
                  </span>
                  <span className="block h-[1.25em] sm:h-[1.2em] text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                    Real Results
                  </span>
                  <span className="block h-[1.25em] sm:h-[1.2em] text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                    Smart Tools
                  </span>
                  <span className="block h-[1.25em] sm:h-[1.2em] text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                    Microkraft CRM
                  </span>
                </div>
              </div>
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-slate-500 leading-relaxed max-w-md">
              Join satisfied clients scaling effortlessly with our tools.
              Experience the transformation firsthand.
            </p>
          </div>

          {/* RIGHT: Compact Hero Image */}
          <div className="relative animate-fade-up delay-100 flex justify-center lg:justify-end h-[220px] sm:h-[260px] md:h-[280px] lg:h-[300px]">
            <div className="relative z-10 w-full max-w-sm h-full">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600"
                alt="Happy Client"
                className="w-full h-full object-cover rounded-xl sm:rounded-2xl shadow-lg z-10 relative"
              />

              {/* Floating Card: Client Satisfaction */}
              <div className="absolute top-2 sm:top-4 -left-2 sm:-left-4 bg-white p-1 sm:p-1.5 pr-2 sm:pr-3 rounded-md sm:rounded-lg shadow-md border border-slate-100 animate-float flex items-center gap-1 sm:gap-1.5 z-20">
                <div className="flex -space-x-1 sm:-space-x-1.5">
                  <img
                    src="https://i.pravatar.cc/150?img=11"
                    className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border border-white"
                    alt=""
                  />
                  <img
                    src="https://i.pravatar.cc/150?img=12"
                    className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border border-white"
                    alt=""
                  />
                </div>
                <div className="min-w-0">
                  <div className="text-[7px] sm:text-[8px] text-slate-400 font-semibold uppercase">
                    Satisfaction
                  </div>
                  <div className="text-[9px] sm:text-[10px] font-semibold text-slate-900 flex items-center gap-0.5">
                    <span className="truncate">14.9/15k</span>{" "}
                    <span className="text-green-500 bg-green-50 px-0.5 sm:px-1 rounded text-[7px] sm:text-[8px] whitespace-nowrap flex-shrink-0">
                      +25%
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Card: Insight */}
              <div
                className="absolute bottom-4 sm:bottom-6 -right-2 sm:-right-3 bg-white p-2 sm:p-2.5 rounded-md sm:rounded-lg shadow-md border border-slate-100 animate-float z-20 max-w-[110px] sm:max-w-[130px]"
                style={{ animationDelay: "2s" }}
              >
                <div className="flex items-center gap-1 sm:gap-1.5 mb-0.5 sm:mb-1">
                  <div className="bg-purple-100 p-0.5 sm:p-1 rounded-md text-purple-600 flex-shrink-0">
                    <BarChart3 size={8} className="sm:w-2.5 sm:h-2.5" />
                  </div>
                  <span className="font-semibold text-slate-900 text-[9px] sm:text-[10px] truncate">
                    Analysis
                  </span>
                </div>
                <p className="text-[7px] sm:text-[8px] text-slate-400 leading-tight">
                  Effectively modular risk management.
                </p>
              </div>

              <div
                className="absolute top-1/2 -right-3 sm:-right-5 text-green-400 animate-float"
                style={{ animationDelay: "0.5s" }}
              >
                <Smile
                  size={18}
                  className="sm:w-6 sm:h-6 fill-current drop-shadow-md"
                />
              </div>
            </div>
          </div>
        </div>

        {/* === BOTTOM SECTION: Compact Testimonials Grid === */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-5 items-end">
          {/* Card 1: Standard (Compact) */}
          <div className="bg-slate-50 p-3 sm:p-4 rounded-xl sm:rounded-2xl relative group hover:bg-white hover:shadow-md transition-all duration-300 animate-fade-up delay-200">
            <Quote
              size={20}
              className="sm:w-6 sm:h-6 text-purple-200 mb-12 sm:mb-14 md:mb-16 group-hover:text-purple-500 transition-colors"
            />

            {/* Small Image Overlay */}
            <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 rounded-lg overflow-hidden shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200"
                className="w-full h-full object-cover"
                alt="Illumi"
              />
            </div>

            <div className="relative z-10 mt-1">
              <h4 className="font-semibold text-slate-900 text-xs sm:text-sm">
                Illumi Parker
              </h4>
              <p className="text-[8px] sm:text-[9px] text-slate-500 mb-1 sm:mb-1.5">
                Marketing Manager, TecId.
              </p>
              <p className="text-[10px] sm:text-xs text-slate-600 leading-relaxed font-medium">
                "We've seen a significant boost in our ROI and customer
                engagement."
              </p>
            </div>
          </div>

          {/* Card 2: FEATURED (Active State - Compact) */}
          <div className="bg-gradient-to-br from-purple-600 to-pink-500 p-1 rounded-xl sm:rounded-2xl shadow-lg shadow-purple-200/50 transform md:-translate-y-3 animate-fade-up delay-300 relative overflow-hidden group min-h-[240px] sm:min-h-[260px] md:h-[260px]">
            <div className="absolute inset-1 rounded-[1.1rem] sm:rounded-[1.3rem] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                alt="Nami"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/40 to-transparent mix-blend-multiply" />
            </div>

            <div className="relative h-full p-3 sm:p-4 flex flex-col justify-between text-white">
              <Quote size={20} className="sm:w-6 sm:h-6 text-white/40" />

              {/* Button */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/30 backdrop-blur-sm flex items-center justify-center cursor-pointer group-hover:scale-110 transition-transform">
                <div className="absolute inset-0 rounded-full border border-white/50 border-dashed animate-spin-slow"></div>
                <ArrowRight className="text-white w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>

              <div>
                <h4 className="font-semibold text-xs sm:text-sm mb-0.5">Nami Anderson</h4>
                <p className="text-[8px] sm:text-[9px] text-white/80 mb-1 sm:mb-1.5">
                  Director Ops, Retail
                </p>
                <p className="text-[10px] sm:text-xs font-medium leading-relaxed opacity-90">
                  "Training & support were fantastic! Highly recommended!"
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Standard (Compact) */}
          <div className="bg-slate-50 p-3 sm:p-4 rounded-xl sm:rounded-2xl relative group hover:bg-white hover:shadow-md transition-all duration-300 animate-fade-up delay-200">
            <Quote
              size={20}
              className="sm:w-6 sm:h-6 text-purple-200 mb-12 sm:mb-14 md:mb-16 group-hover:text-purple-500 transition-colors"
            />

            <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 rounded-lg overflow-hidden shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200"
                className="w-full h-full object-cover"
                alt="Sarah"
              />
            </div>

            <div className="relative z-10 mt-1">
              <h4 className="font-semibold text-slate-900 text-xs sm:text-sm">
                Sarah Zoldyck
              </h4>
              <p className="text-[8px] sm:text-[9px] text-slate-500 mb-1 sm:mb-1.5">
                CEO, TechSolutions.
              </p>
              <p className="text-[10px] sm:text-xs text-slate-600 leading-relaxed font-medium">
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
