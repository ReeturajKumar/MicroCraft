import React from "react";
import {
  Utensils,
  ShoppingBag,
  Receipt,
  MessageSquare,
  CheckCircle2,
  TrendingUp,
  ArrowDown,
} from "lucide-react";

const FoodHospitality: React.FC = () => {
  const features = [
    {
      icon: ShoppingBag,
      title: "Aggregator Order / QR",
      description: "Zomato/Swiggy orders land directly on the POS. No manual entry required",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      icon: Receipt,
      title: "Digital KOT Routing",
      description: "Order auto-routed to Kitchen Display System (KDS). Chef marks 'Ready'",
      gradient: "from-pink-500 to-pink-600",
    },
    {
      icon: MessageSquare,
      title: "Automated Feedback",
      description: "30 mins after payment, WhatsApp bot asks for a rating & offers a coupon",
      gradient: "from-indigo-500 to-indigo-600",
    },
  ];

  const stats = [
    { value: "-15%", label: "Table Turn Time", icon: TrendingUp },
    { value: "+22%", label: "Repeat Visits", icon: CheckCircle2 },
  ];

  // Workflow steps for visualization
  const workflowSteps = [
    {
      icon: ShoppingBag,
      title: "Order Received",
      color: "from-purple-500 to-purple-600",
      delay: "0s",
    },
    {
      icon: Receipt,
      title: "KOT to Kitchen",
      color: "from-pink-500 to-pink-600",
      delay: "0.3s",
    },
    {
      icon: CheckCircle2,
      title: "Order Ready",
      color: "from-indigo-500 to-indigo-600",
      delay: "0.6s",
    },
    {
      icon: MessageSquare,
      title: "Feedback",
      color: "from-purple-600 to-pink-600",
      delay: "0.9s",
    },
  ];

  return (
    <section
      id="food-hospitality"
      className="relative py-6 sm:py-8 md:py-10 lg:py-12 bg-gradient-to-br from-slate-50 via-white to-purple-50/30 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] bg-purple-200/10 rounded-full blur-2xl sm:blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] bg-pink-200/10 rounded-full blur-2xl sm:blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8 max-w-7xl relative z-10">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8 items-start">
          {/* === LEFT COLUMN: Content === */}
          <div className="space-y-3 sm:space-y-4">
            {/* Header */}
            <div className="mb-3 sm:mb-4">
              <div className="flex items-start gap-2 sm:gap-2.5 mb-2">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white shadow-lg flex-shrink-0">
                  <Utensils size={16} className="sm:w-[18px] sm:h-[18px]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-purple-600 mb-0.5">
                    Restaurants & QSR
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-slate-900">
                    Food & Hospitality
                  </h2>
                </div>
              </div>
              <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
                Optimize operations from order to delivery with integrated POS and kitchen
                systems. Enhance customer experience with automated feedback collection.
              </p>
            </div>

            {/* Problem & Solution Cards */}
            <div className="grid grid-cols-1 gap-2 sm:gap-2.5">
              {/* Problem Card */}
              <div className="bg-red-50 border-2 border-red-200 rounded-lg p-2 sm:p-2.5">
                <div className="flex items-start gap-1.5 sm:gap-2">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-red-500 flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                    <span className="text-[9px] sm:text-[10px] font-bold">!</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[11px] sm:text-xs font-bold text-red-900 mb-0.5">
                      The Problem
                    </h3>
                    <p className="text-[9px] sm:text-[10px] text-slate-700 leading-relaxed">
                      Chaos during peak hours. Missed KOTs lead to angry guests. No customer
                      data for retargeting. Manual order management causes delays.
                    </p>
                  </div>
                </div>
              </div>

              {/* Solution Card */}
              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-2 sm:p-2.5">
                <div className="flex items-start gap-1.5 sm:gap-2">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-green-500 flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                    <CheckCircle2 size={10} className="sm:w-[11px] sm:h-[11px] text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[11px] sm:text-xs font-bold text-green-900 mb-0.5">
                      The Solution
                    </h3>
                    <p className="text-[9px] sm:text-[10px] text-slate-700 leading-relaxed">
                      A unified flow from aggregator order to kitchen display to automated
                      feedback collection. Streamlined operations for better customer experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-xs sm:text-sm md:text-base font-bold text-slate-900 mb-2">
                Key Features
              </h3>
              <div className="space-y-1.5 sm:space-y-2">
                {features.map((feature, idx) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-white border-2 border-slate-200 rounded-lg p-2 sm:p-2.5 hover:border-purple-300 hover:shadow-md transition-all duration-300 group"
                    >
                      <div className="flex items-start gap-1.5 sm:gap-2">
                        <div
                          className={`w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform flex-shrink-0 mt-0.5`}
                        >
                          <Icon size={10} className="sm:w-3 sm:h-3" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-[11px] sm:text-xs font-bold text-slate-900 mb-0.5">
                            {feature.title}
                          </h4>
                          <p className="text-[9px] sm:text-[10px] text-slate-600 leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-2">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={idx}
                    className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-100 rounded-lg p-1.5 sm:p-2"
                  >
                    <div className="flex items-start gap-1.5 sm:gap-2">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-md flex-shrink-0 mt-0.5">
                        <Icon size={10} className="sm:w-3 sm:h-3" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm sm:text-base font-bold text-purple-600 mb-0.5">
                          {stat.value}
                        </div>
                        <div className="text-[9px] sm:text-[10px] text-slate-600 font-medium leading-tight">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* === RIGHT COLUMN: Visual Workflow === */}
          <div className="relative mt-4 sm:mt-6 lg:mt-0">
            <div className="bg-white rounded-lg sm:rounded-xl border-2 border-slate-200 p-3 sm:p-4 md:p-5 lg:p-5 shadow-lg sticky top-4">
              <h3 className="text-xs sm:text-sm md:text-base font-bold text-slate-900 mb-3 sm:mb-4 text-center">
                Restaurant Workflow
              </h3>

              {/* Workflow Visualization */}
              <div className="space-y-2 sm:space-y-2.5">
                {workflowSteps.map((step, idx) => {
                  const Icon = step.icon;
                  const isLast = idx === workflowSteps.length - 1;
                  return (
                    <div key={idx}>
                      {/* Step Card */}
                      <div
                        className={`bg-gradient-to-br ${step.color} rounded-lg p-2.5 sm:p-3 text-white shadow-md group hover:scale-105 transition-transform duration-300`}
                        style={{
                          animation: `fadeInUp 0.6s ease-out ${step.delay} forwards`,
                          opacity: 0,
                        }}
                      >
                        <div className="flex items-center gap-2 sm:gap-2.5">
                          <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm flex-shrink-0">
                            <Icon size={14} className="sm:w-4 sm:h-4 md:w-4 md:h-4 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-[9px] sm:text-[10px] font-semibold opacity-90 mb-0.5">
                              Step {idx + 1}
                            </div>
                            <div className="text-[11px] sm:text-xs font-bold">{step.title}</div>
                          </div>
                          {!isLast && (
                            <ArrowDown
                              size={12}
                              className="sm:w-[14px] sm:h-[14px] text-white/70 animate-bounce flex-shrink-0"
                            />
                          )}
                        </div>
                      </div>

                      {/* Connecting Arrow (except last) */}
                      {!isLast && (
                        <div className="flex justify-center py-0.5 sm:py-1">
                          <div className="w-0.5 h-2 sm:h-3 bg-gradient-to-b from-purple-300 to-pink-300"></div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Progress Indicator */}
              <div className="mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-slate-200">
                <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                  <span className="text-[9px] sm:text-[10px] font-semibold text-slate-700">
                    Operational Efficiency
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-bold text-green-600">88%</span>
                </div>
                <div className="h-1 sm:h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 rounded-full transition-all duration-1000"
                    style={{
                      width: "88%",
                      transform: "scaleX(0)",
                      transformOrigin: "left",
                      animation: "progressFill 1.5s ease-out 1.2s forwards",
                    }}
                  />
                </div>
              </div>

              {/* Floating Stats */}
              <div className="mt-3 sm:mt-4 grid grid-cols-2 gap-2">
                <div className="bg-slate-50 rounded-lg p-1.5 sm:p-2 border border-slate-200">
                  <div className="text-sm sm:text-base font-bold text-slate-900">-15%</div>
                  <div className="text-[8px] sm:text-[9px] text-slate-600">Table Turn Time</div>
                </div>
                <div className="bg-slate-50 rounded-lg p-1.5 sm:p-2 border border-slate-200">
                  <div className="text-sm sm:text-base font-bold text-slate-900">+22%</div>
                  <div className="text-[8px] sm:text-[9px] text-slate-600">Repeat Visits</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodHospitality;
