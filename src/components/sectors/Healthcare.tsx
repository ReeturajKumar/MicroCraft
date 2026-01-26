import React from "react";
import {
  Heart,
  CheckCircle2,
} from "lucide-react";

const Healthcare: React.FC = () => {
  return (
    <section
      id="healthcare"
      className="relative py-6 sm:py-8 md:py-10 lg:py-12 bg-gradient-to-br from-slate-50 via-white to-purple-50/30 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] bg-purple-200/10 rounded-full blur-2xl sm:blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] bg-pink-200/10 rounded-full blur-2xl sm:blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8 max-w-7xl relative z-10">
        {/* Single Column Layout - 7xl Width */}
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-4 sm:mb-5 md:mb-6">
            <div className="flex items-start gap-2 sm:gap-2.5 mb-2">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white shadow-lg flex-shrink-0">
                <Heart size={16} className="sm:w-[18px] sm:h-[18px]" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-purple-600 mb-0.5">
                  Medical & Pharma
                </div>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-slate-900">
                  Healthcare
                </h2>
              </div>
            </div>
            <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
              Healthcare facilities face critical operational challenges.
              Here's what businesses like yours struggle with—and how we help.
            </p>
          </div>

          {/* Cards Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
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
                    Patient records are scattered across notebooks and files
                  </span>
                </li>
                <li className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                  <span className="text-red-600 font-bold mt-0.5">•</span>
                  <span>Appointments get missed or double-booked</span>
                </li>
                <li className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                  <span className="text-red-600 font-bold mt-0.5">•</span>
                  <span>Can't track medication inventory and expiry dates</span>
                </li>
                <li className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                  <span className="text-red-600 font-bold mt-0.5">•</span>
                  <span>
                    Compliance documentation is time-consuming and error-prone
                  </span>
                </li>
                <li className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                  <span className="text-red-600 font-bold mt-0.5">•</span>
                  <span>
                    No system to follow up with patients after treatment
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
                We set up a system that manages all patient records in one
                place, sends automatic appointment reminders, tracks medication
                inventory with expiry alerts, and helps you maintain compliance
                documentation easily. Everything is automated—from booking to
                follow-up.
              </p>
            </div>

            {/* Real Example Section */}
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 sm:p-5 md:p-6">
              <h3 className="text-sm sm:text-base font-bold text-blue-900 mb-2 sm:mb-3">
                Real Example:
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                A clinic in Delhi was losing 25% of appointments due to no-show
                patients and manual booking errors. We automated their
                appointment system with reminders, and now they save 50% of
                their time on administrative tasks. Their medication inventory
                is always tracked, and they never miss an expiry date.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Healthcare;
