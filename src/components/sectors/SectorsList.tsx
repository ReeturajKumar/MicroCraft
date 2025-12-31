import React from "react";
import { Link } from "react-router-dom";
import {
  Factory,
  Utensils,
  Heart,
  Briefcase,
  Truck,
  Sprout,
  ArrowRight,
  TrendingUp,
  CheckCircle2,
  Zap,
  Users,
  BarChart3,
  Shield,
  Clock,
  Target,
} from "lucide-react";

const sectors = [
  {
    id: "manufacturing",
    label: "Manufacturing",
    icon: Factory,
    href: "#manufacturing",
    gradient: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-100",
    textColor: "text-purple-700",
    stat: "92%",
    statLabel: "Efficiency",
    description: "Streamlined production workflows",
  },
  {
    id: "food-hospitality",
    label: "Food & Hospitality",
    icon: Utensils,
    href: "#food-hospitality",
    gradient: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-100",
    textColor: "text-orange-700",
    stat: "88%",
    statLabel: "Satisfaction",
    description: "Enhanced guest experience",
  },
  {
    id: "healthcare",
    label: "Healthcare",
    icon: Heart,
    href: "#healthcare",
    gradient: "from-red-500 to-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-100",
    textColor: "text-red-700",
    stat: "95%",
    statLabel: "Accuracy",
    description: "Patient care optimization",
  },
  {
    id: "services",
    label: "Services",
    icon: Briefcase,
    href: "#services",
    gradient: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-100",
    textColor: "text-blue-700",
    stat: "85%",
    statLabel: "Productivity",
    description: "Service delivery excellence",
  },
  {
    id: "logistics",
    label: "Logistics",
    icon: Truck,
    href: "#logistics",
    gradient: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-100",
    textColor: "text-green-700",
    stat: "90%",
    statLabel: "On-Time",
    description: "Supply chain optimization",
  },
  {
    id: "agriculture",
    label: "Agriculture",
    icon: Sprout,
    href: "#agriculture",
    gradient: "from-emerald-500 to-emerald-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-100",
    textColor: "text-emerald-700",
    stat: "87%",
    statLabel: "Yield",
    description: "Farm management solutions",
  },
];

const benefits = [
  {
    icon: Zap,
    title: "AI-Powered Automation",
    description: "Intelligent workflows that adapt to your industry needs",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Target,
    title: "Industry-Specific",
    description: "Tailored solutions designed for your sector's unique challenges",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Insights",
    description: "Real-time analytics to optimize operations and drive growth",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security and compliance for all industries",
    color: "from-green-500 to-emerald-500",
  },
];

const stats = [
  { value: "500+", label: "Enterprises Served", icon: Users },
  { value: "98%", label: "Client Satisfaction", icon: CheckCircle2 },
  { value: "6", label: "Industry Sectors", icon: Target },
  { value: "24/7", label: "Support Available", icon: Clock },
];

const SectorsList: React.FC = () => {
  return (
    <section
      id="sectors"
      className="relative py-6 sm:py-8 md:py-10 lg:py-12 bg-gradient-to-br from-slate-50 via-white to-purple-50/30 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] bg-purple-200/10 rounded-full blur-2xl sm:blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] bg-pink-200/10 rounded-full blur-2xl sm:blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-5 sm:mb-6 md:mb-7">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 mb-1 sm:mb-1.5 leading-tight">
            Transform Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600">
              Industry
            </span>
            {" "}with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600">
              Smart Solutions
            </span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed px-2">
            Industry-specific automation and workflows that drive real results.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8 items-start">
          {/* === LEFT COLUMN: Impactful Content === */}
          <div className="space-y-2.5 sm:space-y-3">
            {/* Key Benefits */}
            <div className="bg-white rounded-lg sm:rounded-xl border-2 border-slate-200 p-2.5 sm:p-3 md:p-4 lg:p-3 shadow-lg">
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900 mb-2 sm:mb-2.5">
                Why Choose Our Solutions?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {benefits.map((benefit, idx) => {
                  const Icon = benefit.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-start gap-1.5 sm:gap-2 p-1.5 sm:p-2 rounded-lg bg-slate-50 hover:bg-gradient-to-br hover:from-purple-50 hover:to-pink-50 transition-all duration-300 group"
                    >
                      <div
                        className={`w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-gradient-to-br ${benefit.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform flex-shrink-0 mt-0.5`}
                      >
                        <Icon size={10} className="sm:w-3 sm:h-3" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-[10px] sm:text-xs font-semibold text-slate-900 mb-0.5">
                          {benefit.title}
                        </h4>
                        <p className="text-[9px] sm:text-[10px] text-slate-600 leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-2 lg:gap-3">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-lg border-2 border-slate-200 p-1.5 sm:p-2 lg:p-3 hover:border-purple-300 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-1 sm:gap-1.5 lg:gap-2.5">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform flex-shrink-0 mt-0.5">
                        <Icon size={10} className="sm:w-[11px] sm:h-[11px] lg:w-5 lg:h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm sm:text-base lg:text-xl font-bold text-slate-900 mb-0.5 lg:mb-1">
                          {stat.value}
                        </div>
                        <div className="text-[8px] sm:text-[9px] lg:text-sm text-slate-600 font-medium leading-tight">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* === RIGHT COLUMN: Sector Cards Grid === */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 md:gap-3 mt-4 sm:mt-0">
            {sectors.map((sector) => {
              const Icon = sector.icon;
              return (
                <Link
                  key={sector.id}
                  to={sector.href}
                  className="group relative bg-white rounded-lg border-2 border-slate-200 p-2 sm:p-2.5 md:p-3 hover:border-purple-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Card Background Gradient on Hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${sector.gradient} opacity-0 group-hover:opacity-5 rounded-lg transition-opacity duration-300`}
                  />

                  {/* Icon and Heading Row */}
                  <div className="flex items-start gap-1.5 sm:gap-2 mb-1.5 sm:mb-2 relative">
                    <div
                      className={`w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-gradient-to-br ${sector.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform flex-shrink-0 mt-0.5`}
                    >
                      <Icon size={10} className="sm:w-3 sm:h-3" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xs sm:text-sm md:text-base font-bold text-slate-900 mb-0.5 group-hover:text-purple-700 transition-colors">
                        {sector.label}
                      </h3>
                      <p className="text-[9px] sm:text-[10px] text-slate-600 leading-relaxed">
                        {sector.description}
                      </p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between pt-1.5 sm:pt-2 border-t border-slate-100 group-hover:border-purple-100 transition-colors">
                    <div>
                      <div className="flex items-center gap-0.5 sm:gap-1">
                        <TrendingUp
                          size={9}
                          className={`${sector.textColor} opacity-70 sm:w-[10px] sm:h-[10px]`}
                        />
                        <span
                          className={`text-[10px] sm:text-xs font-bold ${sector.textColor}`}
                        >
                          {sector.stat}
                        </span>
                      </div>
                      <span className="text-[7px] sm:text-[8px] text-slate-500">
                        {sector.statLabel}
                      </span>
                    </div>
                    <div
                      className={`w-6 h-6 sm:w-7 sm:h-7 rounded-lg ${sector.bgColor} flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-300 flex-shrink-0`}
                    >
                      <ArrowRight
                        size={10}
                        className={`${sector.textColor} group-hover:text-white group-hover:translate-x-1 transition-all duration-300 sm:w-3 sm:h-3`}
                      />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* CTA Card - Full Width */}
        <div className="mt-4 sm:mt-5 md:mt-6 lg:mt-8">
          <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-indigo-600 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 lg:p-6 text-white shadow-xl">
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-2 sm:mb-2.5">
              Ready to Transform Your Industry?
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-white/90 mb-3 sm:mb-4 leading-relaxed max-w-3xl">
              Get started with a custom solution designed specifically for
              your sector. Our experts are ready to help.
            </p>
            <Link
              to="/case-studies"
              className="flex items-center justify-center gap-2 sm:gap-2.5 px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm sm:text-base md:text-lg w-full"
            >
              <span>View Case Studies</span>
              <ArrowRight size={16} className="sm:w-5 sm:h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectorsList;
