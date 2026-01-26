import React from "react";
import {
  TrendingUp,
  MessageCircle,
  Calendar,
  BarChart3,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const ComprehensiveServicesSection: React.FC = () => {
  return (
    <section className="relative w-full bg-white py-4 sm:py-12 md:py-16 lg:py-10 overflow-hidden font-sans">
      {/* Styles moved to index.css - see: animate-fade-up, scrolling-text-container-h2-alt, scrolling-text-inner-8s, delay-* */}

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] bg-purple-100/25 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] bg-pink-100/25 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8 max-w-7xl relative z-10">
        {/* === HEADER SECTION === */}
        <div className="max-w-7xl animate-fade-up delay-100 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            Business Solutions That{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
              Make Your Life Easier
            </span>
          </h2>
          <p className=" text-sm sm:text-base md:text-lg text-slate-600 max-w-3xl">
            We solve real business problems. Here's how each solution makes your
            day-to-day operations smoother and more efficient.
          </p>
        </div>

        {/* === OUTCOME-BASED SERVICES GRID - 4 Cards in One Line === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          {/* 1. Sales and Lead Management */}
          <div className="bg-white p-3 sm:p-4 md:p-5 rounded-lg shadow-md border border-slate-100 hover:border-purple-200 transition-all duration-300 animate-fade-up delay-200 group flex flex-col h-full">
            <div className="flex flex-col items-center text-center mb-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform mb-2.5">
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900 mb-2 leading-tight">
                Sales and Lead Management
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-snug mb-3">
                Never miss a lead. Automatic follow-ups. Clear pipeline
                visibility.
              </p>
            </div>

            {/* How it makes your life easier */}
            <div className="bg-slate-50 rounded-md p-2.5 sm:p-3 border border-slate-100 flex-1 flex flex-col">
              <p className="text-[10px] sm:text-xs font-semibold text-slate-700 mb-2 text-center">
                How does this make your life easier?
              </p>
              <ul className="space-y-1.5 flex-1">
                {[
                  "Lead capture from multiple sources",
                  "Automatic follow-ups",
                  "Pipeline visibility",
                  "Better conversion rates",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-1.5 text-[10px] sm:text-xs text-slate-600 leading-tight"
                  >
                    <CheckCircle2 className="w-3 h-3 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 2. Customer Support Automation */}
          <div className="bg-white p-3 sm:p-4 md:p-5 rounded-lg shadow-md border border-slate-100 hover:border-pink-200 transition-all duration-300 animate-fade-up delay-300 group flex flex-col h-full">
            <div className="flex flex-col items-center text-center mb-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform mb-2.5">
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900 mb-2 leading-tight">
                Customer Support Automation
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-snug mb-3">
                Customer support without chaos. 24/7 call handling and chat
                support.
              </p>
            </div>

            {/* How it makes your life easier */}
            <div className="bg-slate-50 rounded-md p-2.5 sm:p-3 border border-slate-100 flex-1 flex flex-col">
              <p className="text-[10px] sm:text-xs font-semibold text-slate-700 mb-2 text-center">
                How does this make your life easier?
              </p>
              <ul className="space-y-1.5 flex-1">
                {[
                  "24/7 call handling",
                  "Instant chat support",
                  "Auto query resolution",
                  "Never miss a customer",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-1.5 text-[10px] sm:text-xs text-slate-600 leading-tight"
                  >
                    <CheckCircle2 className="w-3 h-3 text-pink-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 3. Operations Automation */}
          <div className="bg-white p-3 sm:p-4 md:p-5 rounded-lg shadow-md border border-slate-100 hover:border-indigo-200 transition-all duration-300 animate-fade-up delay-400 group flex flex-col h-full">
            <div className="flex flex-col items-center text-center mb-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform mb-2.5">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900 mb-2 leading-tight">
                Operations Automation
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-snug mb-3">
                Stop juggling tasks manually. Automated scheduling and
                reminders.
              </p>
            </div>

            {/* How it makes your life easier */}
            <div className="bg-slate-50 rounded-md p-2.5 sm:p-3 border border-slate-100 flex-1 flex flex-col">
              <p className="text-[10px] sm:text-xs font-semibold text-slate-700 mb-2 text-center">
                How does this make your life easier?
              </p>
              <ul className="space-y-1.5 flex-1">
                {[
                  "Automated scheduling",
                  "Document organization",
                  "Smart reminders",
                  "Task discipline",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-1.5 text-[10px] sm:text-xs text-slate-600 leading-tight"
                  >
                    <CheckCircle2 className="w-3 h-3 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 4. Business Insights and Reporting */}
          <div className="bg-white p-3 sm:p-4 md:p-5 rounded-lg shadow-md border border-slate-100 hover:border-emerald-200 transition-all duration-300 animate-fade-up delay-500 group flex flex-col h-full">
            <div className="flex flex-col items-center text-center mb-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform mb-2.5">
                <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900 mb-2 leading-tight">
                Business Insights and Reporting
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-snug mb-3">
                Make decisions with confidence. Sales dashboards and visibility.
              </p>
            </div>

            {/* How it makes your life easier */}
            <div className="bg-slate-50 rounded-md p-2.5 sm:p-3 border border-slate-100 flex-1 flex flex-col">
              <p className="text-[10px] sm:text-xs font-semibold text-slate-700 mb-2 text-center">
                How does this make your life easier?
              </p>
              <ul className="space-y-1.5 flex-1">
                {[
                  "Sales dashboards",
                  "Bottleneck identification",
                  "Owner-level visibility",
                  "Reliable data insights",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-1.5 text-[10px] sm:text-xs text-slate-600 leading-tight"
                  >
                    <CheckCircle2 className="w-3 h-3 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className=" sm:mt-8 md:mt-10 text-center animate-fade-up delay-600">
          <div className="bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 shadow-lg relative overflow-hidden max-w-7xl mx-auto">
            <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-white/10 rounded-full blur-2xl"></div>
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
              <div className="flex-1 text-left sm:text-left">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1 sm:mb-1.5">
                  Ready to Make Your Business Run Smoother?
                </h3>
                <p className="text-xs sm:text-sm text-white/90">
                  See how these solutions can transform your day-to-day
                  operations.
                </p>
              </div>
              <button className="px-4 sm:px-5 py-2 sm:py-2.5 bg-white text-purple-700 rounded-lg font-semibold hover:bg-slate-50 transition-all flex items-center justify-center gap-2 text-xs sm:text-sm flex-shrink-0 group">
                Get Started{" "}
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComprehensiveServicesSection;
