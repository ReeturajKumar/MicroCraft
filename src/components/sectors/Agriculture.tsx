import React from "react";
import {
  Sprout,
  Wheat,
  Package,
  TrendingUp,
  CheckCircle2,
  Droplets,
  Sun,
  BarChart3,
} from "lucide-react";

const Agriculture: React.FC = () => {
  const growthCycle = [
    {
      icon: Sprout,
      title: "Planting",
      description: "Smart seed management and planting schedules",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      icon: Droplets,
      title: "Irrigation",
      description: "Automated water management systems",
      gradient: "from-pink-500 to-pink-600",
    },
    {
      icon: Sun,
      title: "Growth Monitoring",
      description: "Real-time crop health tracking",
      gradient: "from-indigo-500 to-indigo-600",
    },
    {
      icon: Wheat,
      title: "Harvest",
      description: "Optimized harvest planning and execution",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      icon: Package,
      title: "Storage",
      description: "Intelligent inventory and warehouse management",
      gradient: "from-pink-500 to-indigo-600",
    },
    {
      icon: BarChart3,
      title: "Market Analytics",
      description: "Data-driven pricing and distribution insights",
      gradient: "from-indigo-500 to-purple-600",
    },
  ];

  const keyStats = [
    { value: "25%", label: "Yield Increase", icon: TrendingUp },
    { value: "20%", label: "Cost Reduction", icon: CheckCircle2 },
    { value: "30%", label: "Efficiency Gain", icon: BarChart3 },
  ];

  return (
    <section id="agriculture" className="py-6 md:py-8 bg-gradient-to-b from-white to-slate-50/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-4 md:mb-5">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-1.5">
            Transform <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600">Agriculture</span> with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600">Smart Solutions</span>
          </h2>
          <p className="text-[10px] md:text-xs text-slate-600 max-w-2xl mx-auto leading-relaxed">
            From seed to market, optimize every stage of your agricultural operations with intelligent automation and data-driven insights.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-3 md:gap-4">
          {/* Left Column: Content */}
          <div className="space-y-2.5 md:space-y-3">
            {/* Problem & Solution */}
            <div className="space-y-2">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 rounded-lg p-2.5 shadow-lg">
                <div className="flex items-start gap-2 mb-1.5">
                  <div className="w-6 h-6 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-[10px]">!</span>
                  </div>
                  <div>
                    <h3 className="text-xs md:text-sm font-bold text-red-900 mb-1">
                      The Challenge
                    </h3>
                    <p className="text-[9px] md:text-[10px] text-slate-700 leading-relaxed">
                      Manual crop tracking leads to inefficiencies. Inventory management challenges cause waste. Supply chain gaps reduce profitability.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-lg p-2.5 shadow-lg">
                <div className="flex items-start gap-2 mb-1.5">
                  <div className="w-6 h-6 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="text-white" size={12} />
                  </div>
                  <div>
                    <h3 className="text-xs md:text-sm font-bold text-green-900 mb-1">
                      Our Solution
                    </h3>
                    <p className="text-[9px] md:text-[10px] text-slate-700 leading-relaxed">
                      Comprehensive crop management with real-time tracking. Automated inventory systems eliminate waste. Optimized supply chain maximizes profitability.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Dashboard */}
            <div className="bg-white rounded-lg border-2 border-slate-200 shadow-lg p-2.5">
              <h3 className="text-xs md:text-sm font-bold text-slate-900 mb-2 text-center">
                Proven Results
              </h3>
              <div className="grid grid-cols-3 gap-2">
                {keyStats.map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-100 rounded-lg p-2 text-center"
                      style={{
                        animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s forwards`,
                        opacity: 0,
                      }}
                    >
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-md">
                          <Icon size={12} />
                        </div>
                      </div>
                      <div className="text-base md:text-lg font-bold text-purple-600 mb-0.5">
                        {stat.value}
                      </div>
                      <div className="text-[8px] md:text-[9px] text-slate-600 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-2">
              {[
                {
                  icon: Wheat,
                  title: "Crop Management",
                  description: "Track crop cycles, monitor growth, and manage farming schedules with intelligent data insights.",
                  gradient: "from-purple-500 to-purple-600",
                },
                {
                  icon: Package,
                  title: "Inventory Tracking",
                  description: "Real-time tracking of seeds, fertilizers, and equipment with automated alerts and optimization.",
                  gradient: "from-pink-500 to-pink-600",
                },
                {
                  icon: TrendingUp,
                  title: "Supply Chain",
                  description: "Optimize supply chain from farm to market with real-time visibility and predictive analytics.",
                  gradient: "from-indigo-500 to-indigo-600",
                },
              ].map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={idx}
                    className={`bg-white border-2 border-slate-200 rounded-lg p-2.5 shadow-lg hover:shadow-xl transition-all duration-300 ${idx === 2 ? 'col-span-2' : ''}`}
                    style={{
                      animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s forwards`,
                      opacity: 0,
                    }}
                  >
                    <div className="flex items-start gap-2.5">
                      <div className={`w-8 h-8 bg-gradient-to-br ${feature.gradient} rounded-lg flex items-center justify-center flex-shrink-0 shadow-md`}>
                        <Icon className="text-white" size={16} />
                      </div>
                      <div>
                        <h4 className="text-xs md:text-sm font-bold text-slate-900 mb-0.5">
                          {feature.title}
                        </h4>
                        <p className="text-[9px] md:text-[10px] text-slate-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Visual Growth Cycle */}
          <div className="bg-white rounded-lg border-2 border-slate-200 shadow-xl p-3 md:p-4 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full blur-3xl opacity-40"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full blur-3xl opacity-40"></div>

            {/* Central Hub */}
            <div className="relative z-10 flex flex-col items-center justify-center mb-3 md:mb-3.5">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-500 via-pink-500 to-indigo-500 rounded-full flex items-center justify-center shadow-2xl mb-2 animate-pulse">
                <Sprout className="text-white" size={24} />
              </div>
              <h3 className="text-xs md:text-sm font-bold text-slate-900 mb-1 text-center">
                Complete Growth Cycle
              </h3>
              <p className="text-[8px] md:text-[9px] text-slate-600 text-center max-w-xs">
                End-to-end agricultural management from planting to market distribution
              </p>
            </div>

            {/* Growth Cycle Cards Grid */}
            <div className="relative z-10 grid grid-cols-2 gap-2 md:gap-2.5">
              {growthCycle.map((stage, idx) => {
                const Icon = stage.icon;
                return (
                  <div
                    key={idx}
                    className="group relative"
                    style={{
                      animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s forwards`,
                      opacity: 0,
                    }}
                  >
                    <div className="bg-white border-2 border-slate-200 rounded-lg p-2.5 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                      <div className="flex flex-col items-center text-center">
                        <div className={`w-8 h-8 bg-gradient-to-br ${stage.gradient} rounded-lg flex items-center justify-center mb-2 shadow-md group-hover:scale-110 transition-transform`}>
                          <Icon className="text-white" size={14} />
                        </div>
                        <h4 className="text-[10px] md:text-xs font-bold text-slate-900 mb-1">
                          {stage.title}
                        </h4>
                        <p className="text-[9px] md:text-[10px] text-slate-700 leading-relaxed font-medium">
                          {stage.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Connecting Lines (Visual Flow) */}
            <div className="hidden lg:block absolute inset-0 z-0 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 500 400">
                <path
                  d="M 250 120 Q 330 100 360 120 Q 400 160 360 200 Q 330 240 250 280 Q 170 240 140 200 Q 100 160 140 120 Q 170 100 250 120"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  opacity="0.3"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#9333ea" />
                    <stop offset="50%" stopColor="#ec4899" />
                    <stop offset="100%" stopColor="#6366f1" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agriculture;
