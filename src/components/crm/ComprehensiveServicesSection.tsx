import React from "react";
import {
  Database,
  Settings,
  ArrowRight,
  Layers,
  BarChart3,
} from "lucide-react";

const ComprehensiveServicesSection: React.FC = () => {
  return (
    <section className="relative w-full bg-white py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden font-sans">
      {/* Styles moved to index.css - see: animate-fade-up, scrolling-text-container-h2-alt, scrolling-text-inner-8s, delay-* */}

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] bg-purple-100/25 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] bg-pink-100/25 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8 max-w-7xl relative z-10">
        {/* === HEADER SECTION === */}
        <div className="max-w-7xl animate-fade-up delay-100 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            Tailored Solutions for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
              Comprehensive{" "}
            </span>
            {/* === FLOATING TEXT ANIMATION START === */}
            <div className="scrolling-text-container-h2-alt text-purple-600">
              <div className="scrolling-text-inner-8s flex flex-col text-left">
                {/* 4 Items matching the keyframes (0, -25, -50, -75) */}
                <span className="block h-[1.25em] sm:h-[1.2em]">CRM Services</span>
                <span className="block h-[1.25em] sm:h-[1.2em]">Growth</span>
                <span className="block h-[1.25em] sm:h-[1.2em]">Automation</span>
                <span className="block h-[1.25em] sm:h-[1.2em]">CRM Services</span>{" "}
                {/* Repeat First */}
              </div>
            </div>
            {/* === FLOATING TEXT ANIMATION END === */}
          </h2>
        </div>

        {/* === GRID LAYOUT === */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-6">
          {/* 1. LARGE FEATURE CARD (Spans 3 cols on mobile, top row) */}
          <div className="md:col-span-3 bg-white rounded-xl sm:rounded-2xl shadow-lg border border-slate-100 overflow-hidden grid grid-cols-1 lg:grid-cols-2 animate-fade-up delay-200 group hover:border-purple-100 transition-colors">
            {/* Left Content */}
            <div className="p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col justify-center gap-3 sm:gap-4">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-slate-900">
                Comprehensive <span className="text-purple-600">training</span>{" "}
                to <br className="hidden sm:block" /> empower your team
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-slate-500 leading-relaxed">
                Our expert team offers in-depth training sessions to ensure your
                staff is proficient in using Microkraft CRM to its full
                potential. Moreover, our dedicated support team is available
                round the clock.
              </p>
              <button className="w-full sm:w-fit px-4 sm:px-5 py-2 sm:py-2.5 bg-slate-900 text-white rounded-lg text-xs sm:text-sm font-medium hover:bg-purple-600 transition-colors mt-1">
                See How It Works
              </button>
            </div>

            {/* Right Images (Collage Effect) */}
            <div className="relative bg-slate-50 min-h-[200px] sm:min-h-[250px] md:min-h-[280px] lg:min-h-full overflow-hidden">
              {/* Decorative Circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-purple-200/40 rounded-full blur-2xl"></div>

              {/* Image Grid */}
              <div className="absolute inset-2 sm:inset-3 grid grid-cols-2 gap-2 sm:gap-3 rotate-[-6deg] scale-110 origin-center opacity-90 group-hover:rotate-0 group-hover:scale-100 transition-all duration-700">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400"
                  className="rounded-lg sm:rounded-xl shadow-md object-cover h-24 sm:h-28 md:h-32 w-full"
                  alt="Team"
                />
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=400"
                  className="rounded-lg sm:rounded-xl shadow-md object-cover h-24 sm:h-28 md:h-32 w-full mt-4 sm:mt-6"
                  alt="Meeting"
                />
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=400"
                  className="rounded-lg sm:rounded-xl shadow-md object-cover h-24 sm:h-28 md:h-32 w-full -mt-4 sm:-mt-6"
                  alt="Planning"
                />
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=400"
                  className="rounded-lg sm:rounded-xl shadow-md object-cover h-24 sm:h-28 md:h-32 w-full"
                  alt="Office"
                />
              </div>
            </div>
          </div>

          {/* 2. DATA MIGRATION CARD */}
          <div className="bg-white p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-md border border-slate-100 flex flex-col justify-between min-h-[280px] sm:min-h-[320px] md:h-[340px] animate-fade-up delay-300 relative overflow-hidden group">
            <div className="relative z-10">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-pink-100 rounded-lg flex items-center justify-center text-pink-600 mb-3 sm:mb-4">
                <Database size={18} className="sm:w-5 sm:h-5" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-1.5">
                Data Migration
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Safely and efficiently transfer into Microkraft.
              </p>
            </div>

            {/* Visual: Abstract Chart */}
            <div className="relative mt-4 sm:mt-6 bg-slate-50 rounded-lg p-2.5 sm:p-3 border border-slate-100 group-hover:scale-105 transition-transform duration-500">
              <div className="flex justify-between items-end h-16 sm:h-20 gap-1 sm:gap-1.5">
                <div className="w-full bg-purple-100 rounded-t-md h-[40%]"></div>
                <div className="w-full bg-purple-200 rounded-t-md h-[70%]"></div>
                <div className="w-full bg-pink-300 rounded-t-md h-[50%]"></div>
                <div className="w-full bg-pink-500 rounded-t-md h-[90%] relative">
                  <div className="absolute -top-5 sm:-top-6 left-1/2 -translate-x-1/2 bg-white shadow-md text-[8px] sm:text-[9px] font-semibold px-1 sm:px-1.5 py-0.5 rounded text-pink-600 whitespace-nowrap">
                    16.8k
                  </div>
                </div>
              </div>
              <div className="mt-2 flex items-center gap-1.5">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white shadow-sm flex items-center justify-center">
                  <BarChart3 size={10} className="sm:w-3 sm:h-3 text-slate-400" />
                </div>
                <div className="text-[9px] sm:text-[10px] text-slate-400">
                  Growth Analysis
                </div>
              </div>
            </div>
          </div>

          {/* 3. CUSTOMIZATION CARD */}
          <div className="bg-white p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-md border border-slate-100 flex flex-col justify-between min-h-[280px] sm:min-h-[320px] md:h-[340px] animate-fade-up delay-300 relative overflow-hidden group">
            <div className="relative z-10">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mb-3 sm:mb-4">
                <Settings size={18} className="sm:w-5 sm:h-5" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-1.5">
                Customization
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Customize CRM to align your workflows.
              </p>
            </div>

            {/* Visual: UI Elements */}
            <div className="relative mt-4 sm:mt-5">
              <div className="bg-white shadow-md rounded-lg p-2 sm:p-2.5 border border-slate-100 transform rotate-[-5deg] group-hover:rotate-0 transition-transform duration-500 absolute top-0 left-0 right-0 z-10">
                <div className="h-1.5 w-1/2 bg-slate-200 rounded mb-1.5"></div>
                <div className="h-1.5 w-3/4 bg-slate-100 rounded"></div>
              </div>
              <div className="bg-white shadow-sm rounded-lg p-2 sm:p-2.5 border border-slate-100 transform rotate-[5deg] group-hover:rotate-0 transition-transform duration-500 absolute top-5 sm:top-6 left-2 sm:left-3 right-2 sm:right-3 z-0 opacity-80">
                <div className="flex justify-between mb-1.5">
                  <span className="text-[8px] sm:text-[9px] font-semibold text-slate-800">
                    $499,20
                  </span>
                  <span className="h-2 sm:h-2.5 w-2 sm:w-2.5 rounded-full bg-green-400"></span>
                </div>
                <div className="h-1 w-full bg-slate-100 rounded overflow-hidden">
                  <div className="h-full w-[70%] bg-green-500"></div>
                </div>
              </div>
              <div className="h-24 sm:h-28"></div> {/* Spacer */}
            </div>
          </div>

          {/* 4. CTA CARD (Gradient) */}
          <div className="bg-gradient-to-br from-purple-600 to-pink-500 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-lg flex flex-col justify-between min-h-[280px] sm:min-h-[320px] md:h-[340px] animate-fade-up delay-300 relative overflow-hidden group">
            {/* Background shapes */}
            <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-black/10 rounded-full blur-2xl"></div>

            <div className="relative z-10 h-full flex flex-col justify-center">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4 sm:mb-5">
                Join us now for <br />
                your business <br />
                growth!
              </h3>

              <button className="w-full sm:w-fit px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-purple-700 rounded-lg font-semibold hover:bg-slate-50 transition-all flex items-center justify-center gap-2 text-xs sm:text-sm md:text-base group-hover:gap-3">
                View More <ArrowRight size={14} className="sm:w-4 sm:h-4" />
              </button>
            </div>

            {/* Decorative Icon opacity */}
            <Layers
              size={80}
              className="sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-[120px] lg:h-[120px] absolute -bottom-2 sm:-bottom-3 md:-bottom-4 -right-2 sm:-right-3 md:-right-4 text-white/10 rotate-12"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComprehensiveServicesSection;
