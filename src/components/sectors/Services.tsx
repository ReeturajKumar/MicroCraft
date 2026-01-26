import React from "react";
import { CheckCircle2 } from "lucide-react";

const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="relative py-6 sm:py-8 md:py-10 lg:py-12 bg-gradient-to-br from-slate-50 via-white to-purple-50/30 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] bg-purple-200/10 rounded-full blur-2xl sm:blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] bg-pink-200/10 rounded-full blur-2xl sm:blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8 max-w-7xl relative z-10">
        {/* Header Section */}
        <div className="text-center mb-5 sm:mb-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-2 leading-tight">
            Deliver{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600">
              Exceptional Services
            </span>{" "}
            with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600">
              Intelligent Automation
            </span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed px-2">
            Service businesses face unique challenges in managing clients and
            projects. Here's what businesses like yours struggle with—and how we
            help.
          </p>
        </div>

        {/* Cards Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 max-w-7xl mx-auto">
          {/* Common Problems Section */}
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 sm:p-5 md:p-6">
            <h3 className="text-sm sm:text-base font-bold text-red-900 mb-2 sm:mb-3 flex items-center gap-2">
              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-red-500 flex items-center justify-center text-white text-xs font-bold">
                !
              </span>
              Common Problems:
            </h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                <span className="text-red-600 font-bold mt-0.5">•</span>
                <span>
                  Client onboarding takes too long with manual paperwork
                </span>
              </li>
              <li className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                <span className="text-red-600 font-bold mt-0.5">•</span>
                <span>Can't track project progress in real-time</span>
              </li>
              <li className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                <span className="text-red-600 font-bold mt-0.5">•</span>
                <span>Invoicing gets delayed, affecting cash flow</span>
              </li>
              <li className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                <span className="text-red-600 font-bold mt-0.5">•</span>
                <span>Administrative tasks consume too much time</span>
              </li>
              <li className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                <span className="text-red-600 font-bold mt-0.5">•</span>
                <span>
                  No system to follow up with clients after project completion
                </span>
              </li>
            </ul>
          </div>

          {/* How We Fix It Section */}
          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4 sm:p-5 md:p-6">
            <h3 className="text-sm sm:text-base font-bold text-green-900 mb-2 sm:mb-3 flex items-center gap-2">
              <CheckCircle2
                size={16}
                className="sm:w-5 sm:h-5 text-green-600"
              />
              How We Fix It:
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              We set up automated client onboarding with digital forms,
              real-time project tracking dashboards, and streamlined invoicing
              workflows. Administrative tasks are automated, so you can focus on
              delivering exceptional service instead of managing paperwork.
            </p>
          </div>

          {/* Real Example Section */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 sm:p-5 md:p-6">
            <h3 className="text-sm sm:text-base font-bold text-blue-900 mb-2 sm:mb-3">
              Real Example:
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              A consulting firm in Bangalore was spending 30% of their time on
              administrative tasks. We automated their client onboarding and
              project tracking, and now they save 50% of their time. Their
              invoicing is automated, and they can track every project's
              progress in real-time—no more "where are we on this project?"
              questions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
