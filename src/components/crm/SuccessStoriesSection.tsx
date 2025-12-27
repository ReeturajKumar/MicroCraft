import React from "react";
import { Quote, ArrowRight, Smile, BarChart3 } from "lucide-react";

const SuccessStoriesSection: React.FC = () => {
  return (
    <section className="relative w-full bg-white py-12 md:py-16 lg:py-20 overflow-hidden font-sans">
      {/* Styles moved to index.css - see: animate-fade-up, animate-float-crm, animate-spin-slow, scrolling-text-container-h2-alt, scrolling-text-inner, delay-* */}

      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-purple-50 rounded-full blur-3xl -z-10 mix-blend-multiply opacity-40" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-50 rounded-full blur-3xl -z-10 mix-blend-multiply opacity-40" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* === TOP SECTION: Header & Hero Image (Compact) === */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-8 lg:mb-12">
          {/* LEFT: Header with Animation */}
          <div className="animate-fade-up relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4">
              Success Stories <br />
              {/* ANIMATED TEXT CONTAINER */}
              <div className="scrolling-text-container-h2-alt">
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

            <p className="text-sm md:text-base text-slate-500 leading-relaxed max-w-md">
              Join satisfied clients scaling effortlessly with our tools.
              Experience the transformation firsthand.
            </p>
          </div>

          {/* RIGHT: Compact Hero Image */}
          <div className="relative animate-fade-up delay-100 flex justify-center lg:justify-end h-[280px] lg:h-[300px]">
            <div className="relative z-10 w-full max-w-sm h-full">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600"
                alt="Happy Client"
                className="w-full h-full object-cover rounded-2xl shadow-lg z-10 relative"
              />

              {/* Floating Card: Client Satisfaction */}
              <div className="absolute top-4 -left-4 bg-white p-1.5 pr-3 rounded-lg shadow-md border border-slate-100 animate-float flex items-center gap-1.5 z-20">
                <div className="flex -space-x-1.5">
                  <img
                    src="https://i.pravatar.cc/150?img=11"
                    className="w-5 h-5 rounded-full border border-white"
                    alt=""
                  />
                  <img
                    src="https://i.pravatar.cc/150?img=12"
                    className="w-5 h-5 rounded-full border border-white"
                    alt=""
                  />
                </div>
                <div>
                  <div className="text-[8px] text-slate-400 font-semibold uppercase">
                    Satisfaction
                  </div>
                  <div className="text-[10px] font-semibold text-slate-900 flex items-center gap-0.5">
                    14.9/15k{" "}
                    <span className="text-green-500 bg-green-50 px-1 rounded text-[8px]">
                      +25%
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Card: Insight */}
              <div
                className="absolute bottom-6 -right-3 bg-white p-2.5 rounded-lg shadow-md border border-slate-100 animate-float z-20 max-w-[130px]"
                style={{ animationDelay: "2s" }}
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <div className="bg-purple-100 p-1 rounded-md text-purple-600">
                    <BarChart3 size={10} />
                  </div>
                  <span className="font-semibold text-slate-900 text-[10px]">
                    Analysis
                  </span>
                </div>
                <p className="text-[8px] text-slate-400 leading-tight">
                  Effectively modular risk management.
                </p>
              </div>

              <div
                className="absolute top-1/2 -right-5 text-green-400 animate-float"
                style={{ animationDelay: "0.5s" }}
              >
                <Smile
                  size={24}
                  fill="currentColor"
                  className="drop-shadow-md"
                />
              </div>
            </div>
          </div>
        </div>

        {/* === BOTTOM SECTION: Compact Testimonials Grid === */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5 items-end">
          {/* Card 1: Standard (Compact) */}
          <div className="bg-slate-50 p-4 rounded-2xl relative group hover:bg-white hover:shadow-md transition-all duration-300 animate-fade-up delay-200">
            <Quote
              size={24}
              className="text-purple-200 mb-16 group-hover:text-purple-500 transition-colors"
            />

            {/* Small Image Overlay */}
            <div className="absolute top-4 right-4 w-12 h-12 rounded-lg overflow-hidden shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200"
                className="w-full h-full object-cover"
                alt="Illumi"
              />
            </div>

            <div className="relative z-10 mt-1">
              <h4 className="font-semibold text-slate-900 text-sm">
                Illumi Parker
              </h4>
              <p className="text-[9px] text-slate-500 mb-1.5">
                Marketing Manager, TecId.
              </p>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                "We've seen a significant boost in our ROI and customer
                engagement."
              </p>
            </div>
          </div>

          {/* Card 2: FEATURED (Active State - Compact) */}
          <div className="bg-gradient-to-br from-purple-600 to-pink-500 p-1 rounded-2xl shadow-lg shadow-purple-200/50 transform md:-translate-y-3 animate-fade-up delay-300 relative overflow-hidden group h-[260px]">
            <div className="absolute inset-1 rounded-[1.3rem] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                alt="Nami"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/40 to-transparent mix-blend-multiply" />
            </div>

            <div className="relative h-full p-4 flex flex-col justify-between text-white">
              <Quote size={24} className="text-white/40" />

              {/* Button */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full border border-white/30 backdrop-blur-sm flex items-center justify-center cursor-pointer group-hover:scale-110 transition-transform">
                <div className="absolute inset-0 rounded-full border border-white/50 border-dashed animate-spin-slow"></div>
                <ArrowRight className="text-white" size={16} />
              </div>

              <div>
                <h4 className="font-semibold text-sm mb-0.5">Nami Anderson</h4>
                <p className="text-[9px] text-white/80 mb-1.5">
                  Director Ops, Retail
                </p>
                <p className="text-xs font-medium leading-relaxed opacity-90">
                  "Training & support were fantastic! Highly recommended!"
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Standard (Compact) */}
          <div className="bg-slate-50 p-4 rounded-2xl relative group hover:bg-white hover:shadow-md transition-all duration-300 animate-fade-up delay-200">
            <Quote
              size={24}
              className="text-purple-200 mb-16 group-hover:text-purple-500 transition-colors"
            />

            <div className="absolute top-4 right-4 w-12 h-12 rounded-lg overflow-hidden shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200"
                className="w-full h-full object-cover"
                alt="Sarah"
              />
            </div>

            <div className="relative z-10 mt-1">
              <h4 className="font-semibold text-slate-900 text-sm">
                Sarah Zoldyck
              </h4>
              <p className="text-[9px] text-slate-500 mb-1.5">
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
