import React from "react";
import { Truck, Route, Package, CheckCircle2, MapPin } from "lucide-react";

const Logistics: React.FC = () => {
  const features = [
    {
      icon: Truck,
      title: "Fleet Management",
      description:
        "Complete fleet visibility with vehicle status, maintenance tracking, and driver management",
      gradient: "from-purple-500 to-purple-600",
      stat: "99%",
      statLabel: "On-Time",
    },
    {
      icon: Route,
      title: "Route Optimization",
      description:
        "AI-powered route planning to minimize fuel costs and delivery time",
      gradient: "from-pink-500 to-pink-600",
      stat: "30%",
      statLabel: "Fuel Saved",
    },
    {
      icon: Package,
      title: "Real-time Tracking",
      description:
        "Live shipment tracking with GPS integration and automated customer notifications",
      gradient: "from-indigo-500 to-indigo-600",
      stat: "100%",
      statLabel: "Visibility",
    },
  ];

  // Logistics flow visualization
  const logisticsFlow = [
    {
      icon: Package,
      title: "Pickup",
      color: "from-purple-500 to-purple-600",
      delay: "0s",
    },
    {
      icon: Route,
      title: "In Transit",
      color: "from-pink-500 to-pink-600",
      delay: "0.3s",
    },
    {
      icon: MapPin,
      title: "Delivery",
      color: "from-indigo-500 to-indigo-600",
      delay: "0.6s",
    },
  ];

  return (
    <section
      id="logistics"
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
            Optimize{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600">
              Supply Chain
            </span>{" "}
            with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600">
              Smart Logistics
            </span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed px-2">
            Track shipments, manage fleets, and optimize routes with real-time
            visibility. Enhance supply chain efficiency with intelligent
            logistics solutions.
          </p>
        </div>

        {/* Problem & Solution - Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3 mb-4 sm:mb-5">
          {/* Problem Card */}
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-2.5 sm:p-3">
            <div className="flex items-start gap-1.5 sm:gap-2">
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-red-500 flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                <span className="text-[9px] sm:text-[10px] font-bold">!</span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[11px] sm:text-xs font-bold text-red-900 mb-1">
                  The Problem
                </h3>
                <p className="text-[9px] sm:text-[10px] text-slate-700 leading-relaxed">
                  Lack of real-time shipment visibility. Inefficient route
                  planning. Fleet management challenges. Delayed deliveries
                  impact customer satisfaction.
                </p>
              </div>
            </div>
          </div>

          {/* Solution Card */}
          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-2.5 sm:p-3">
            <div className="flex items-start gap-1.5 sm:gap-2">
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-green-500 flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                <CheckCircle2 size={10} className="sm:w-[11px] sm:h-[11px] text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[11px] sm:text-xs font-bold text-green-900 mb-1">
                  The Solution
                </h3>
                <p className="text-[9px] sm:text-[10px] text-slate-700 leading-relaxed">
                  Real-time tracking with GPS integration. AI-powered route
                  optimization. Comprehensive fleet management for better
                  operational control.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Logistics Flow Visualization */}
        <div className="bg-white rounded-lg border-2 border-slate-200 p-2.5 sm:p-3 lg:p-3 shadow-lg mb-4 sm:mb-5">
          <h3 className="text-xs sm:text-sm md:text-base font-bold text-slate-900 mb-2 sm:mb-2.5 text-center">
            Logistics Flow
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-between gap-2.5 sm:gap-3 relative">
            {/* Connecting Line (Horizontal) */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 transform -translate-y-1/2 z-0"></div>

            {logisticsFlow.map((step, idx) => {
              const Icon = step.icon;
              const isLast = idx === logisticsFlow.length - 1;
              return (
                <div
                  key={idx}
                  className="relative z-10 flex flex-col items-center gap-1.5 sm:gap-2 flex-1 w-full md:w-auto"
                >
                  {/* Step Card */}
                  <div
                    className={`bg-gradient-to-br ${step.color} rounded-lg p-2 sm:p-2.5 text-white shadow-md group hover:scale-105 transition-transform duration-300 w-full md:max-w-[100px]`}
                    style={{
                      animation: `fadeInUp 0.6s ease-out ${step.delay} forwards`,
                      opacity: 0,
                    }}
                  >
                    <div className="flex flex-col items-center text-center gap-1 sm:gap-1.5">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                        <Icon size={12} className="sm:w-3.5 sm:h-3.5 md:w-[14px] md:h-[14px] text-white" />
                      </div>
                      <div className="text-[9px] sm:text-[10px] font-bold">{step.title}</div>
                    </div>
                  </div>

                  {/* Arrow (Desktop only) */}
                  {!isLast && (
                    <div className="hidden md:block absolute top-1/2 left-full transform -translate-x-1/2 -translate-y-1/2 z-20">
                      <Route
                        size={12}
                        className="sm:w-3.5 sm:h-3.5 text-purple-400 animate-pulse"
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Feature Cards Grid with Integrated Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="bg-white border-2 border-slate-200 rounded-lg p-2.5 sm:p-3 hover:border-purple-300 hover:shadow-lg transition-all duration-300 group relative overflow-hidden"
              >
                {/* Background Gradient on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon and Stat Row */}
                  <div className="flex items-center justify-between mb-2 sm:mb-2.5">
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform flex-shrink-0`}
                    >
                      <Icon size={14} className="sm:w-4 sm:h-4" />
                    </div>
                    <div className="text-right min-w-0">
                      <div className="text-base sm:text-lg font-bold text-purple-600">
                        {feature.stat}
                      </div>
                      <div className="text-[8px] sm:text-[9px] text-slate-500 font-medium">
                        {feature.statLabel}
                      </div>
                    </div>
                  </div>

                  {/* Title and Description */}
                  <h4 className="text-[11px] sm:text-xs font-bold text-slate-900 mb-1 sm:mb-1.5 group-hover:text-purple-700 transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-[9px] sm:text-[10px] text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Logistics;
