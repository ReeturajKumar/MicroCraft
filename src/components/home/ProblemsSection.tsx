import React from "react";
import {
  AlertCircle,
  TrendingDown,
  Users,
  Eye,
  Phone,
  Clock,
  BarChart3,
} from "lucide-react";

const ProblemsSection = () => {
  const problems = [
    {
      text: "Leads come in, but follow-ups do not happen consistently.",
      icon: TrendingDown,
      gradient: "from-red-500 to-rose-500",
    },
    {
      text: "Sales performance depends heavily on one or two individuals.",
      icon: Users,
      gradient: "from-orange-500 to-amber-500",
    },
    {
      text: "There is no clear visibility into the sales pipeline.",
      icon: Eye,
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      text: "Customer calls and messages are frequently missed.",
      icon: Phone,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      text: "Manual work consumes excessive time and effort.",
      icon: Clock,
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      text: "There is no reliable data or reporting for decision-making.",
      icon: BarChart3,
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section className="relative w-full py-14 sm:py-20 md:py-24 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        {/* Section Header */}
        <div className="text-center sm:mb-12 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
            Does This Sound{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                Familiar?
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-purple-200 via-pink-200 to-purple-200 opacity-60 rounded-full -z-0 blur-sm"></span>
              <span className="absolute -bottom-1 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 opacity-80 rounded-full -z-0"></span>
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
            Many growing businesses face these common challenges.{" "}
          </p>
        </div>

        {/* Problems Layout - Left Column Cards Grid, Right Column Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 sm:mb-12">
          {/* Left Column - Problem Cards in Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
            {problems.map((problem, idx) => {
              const Icon = problem.icon;
              return (
                <div
                  key={idx}
                  className="group relative flex items-center gap-2.5 p-2.5 sm:p-3 rounded-lg border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-300"
                >
                  {/* Icon Container */}
                  <div className="flex-shrink-0">
                    <div
                      className={`relative w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-br ${problem.gradient} flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-300`}
                    >
                      <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm text-slate-800 leading-tight font-medium group-hover:text-slate-900 transition-colors">
                      {problem.text}
                    </p>
                  </div>

                  {/* Subtle Gradient Accent on Hover */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${problem.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                  ></div>
                </div>
              );
            })}
          </div>

          {/* Right Column - Image */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="w-full h-full flex items-center justify-center">
              <img
                src="/ProblemStatement.png"
                alt="Business problems illustration"
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Reassurance Message - Professional */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-5 px-6 sm:px-8 py-5 sm:py-6 rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-300 max-w-3xl">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-slate-50 flex items-center justify-center border border-slate-200">
                <AlertCircle className="w-6 h-6 sm:w-7 sm:h-7 text-slate-600" />
              </div>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-base sm:text-lg md:text-xl font-semibold text-slate-900 mb-1">
                If this sounds familiar, you are not alone.
              </p>
              <p className="text-sm sm:text-base text-slate-600">
                Thousands of businesses face these challenges every day. We're
                here to help.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
