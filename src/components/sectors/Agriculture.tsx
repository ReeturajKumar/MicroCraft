import React from "react";
import { Sprout, CheckCircle2 } from "lucide-react";

const Agriculture: React.FC = () => {

  return (
    <section id="agriculture" className="py-6 sm:py-8 md:py-10 lg:py-12 bg-gradient-to-b from-white to-slate-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-4 sm:mb-5">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1.5 leading-tight">
            Transform <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600">Agriculture</span> with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600">Smart Solutions</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed px-2">
            Agriculture businesses face unique challenges from seed to market. Here's what businesses like yours struggle with—and how we help.
          </p>
        </div>

        {/* Cards Grid Layout */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {/* Common Problems Section */}
            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 sm:p-5 md:p-6">
              <h3 className="text-sm sm:text-base font-bold text-red-900 mb-2 sm:mb-3 flex items-center gap-2">
                <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-red-500 flex items-center justify-center text-white text-xs font-bold">!</span>
                Common Problems:
              </h3>
              <ul className="space-y-1.5 sm:space-y-2">
                <li className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                  <span className="text-red-600 font-bold mt-0.5">•</span>
                  <span>Manual crop tracking leads to inefficiencies and errors</span>
                </li>
                <li className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                  <span className="text-red-600 font-bold mt-0.5">•</span>
                  <span>Inventory management challenges cause waste and losses</span>
                </li>
                <li className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                  <span className="text-red-600 font-bold mt-0.5">•</span>
                  <span>Supply chain gaps reduce profitability</span>
                </li>
                <li className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                  <span className="text-red-600 font-bold mt-0.5">•</span>
                  <span>Can't track crop cycles and harvest schedules effectively</span>
                </li>
                <li className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                  <span className="text-red-600 font-bold mt-0.5">•</span>
                  <span>No system to optimize distribution and pricing</span>
                </li>
              </ul>
            </div>

            {/* How We Fix It Section */}
            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4 sm:p-5 md:p-6">
              <h3 className="text-sm sm:text-base font-bold text-green-900 mb-2 sm:mb-3 flex items-center gap-2">
                <CheckCircle2 size={16} className="sm:w-5 sm:h-5 text-green-600" />
                How We Fix It:
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                We set up comprehensive crop management with real-time tracking, automated inventory systems that eliminate waste, and optimized supply chain management. You can track crop cycles, manage inventory, and maximize profitability—all in one system.
              </p>
            </div>

            {/* Real Example Section */}
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 sm:p-5 md:p-6">
              <h3 className="text-sm sm:text-base font-bold text-blue-900 mb-2 sm:mb-3">
                Real Example:
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                A farm in Punjab was losing 20% of their produce due to poor inventory tracking and supply chain gaps. We automated their crop and inventory management, and now they reduce waste by 35% and increase profitability by 25%. Their supply chain is optimized, and they can track everything from seed to market.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agriculture;
