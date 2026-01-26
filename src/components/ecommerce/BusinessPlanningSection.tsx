import {
  CheckCircle2,
  BarChart3,
  TrendingUp,
  PieChart,
  Settings,
  Megaphone,
  Star,
  Activity,
} from "lucide-react";

const FEATURES = [
  {
    id: 1,
    icon: Activity,
    title: "Strategic Roadmapping",
    description:
      "Comprehensive roadmaps that outline clear steps to achieve your business objectives and milestones.",
  },
  {
    id: 2,
    icon: PieChart,
    title: "Financial Modeling",
    description:
      "Advanced forecasting and investment analysis to empower data-driven financial decision-making.",
  },
  {
    id: 3,
    icon: TrendingUp,
    title: "Market Diversification",
    description:
      "Strategic expansion opportunities to reach new markets and diversify your business portfolio.",
  },
  {
    id: 4,
    icon: Settings,
    title: "Operational Efficiency",
    description:
      "Process optimization and cost reduction strategies to enhance productivity and profitability.",
  },
];

export default function BusinessPlanningSection() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-purple-200/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-pink-200/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-3">
            Business Planning{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600">
              & Strategic Development
            </span>
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            Comprehensive solutions to guide your business through every stage
            of growth and expansion
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* --- LEFT COLUMN: Features --- */}
          <div className="flex flex-col gap-4">
            {/* Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {FEATURES.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.id}
                    className="bg-white rounded-xl p-4 shadow-lg border border-slate-200 hover:shadow-xl hover:border-purple-200 transition-all duration-300"
                  >
                    <div className="flex flex-col gap-2.5">
                      {/* Icon */}
                      <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-600 to-pink-500 text-white flex items-center justify-center shadow-md">
                        <Icon size={18} />
                      </div>
                      {/* Content */}
                      <div>
                        <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                          {feature.title}
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Stats Card */}
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl p-4 shadow-xl text-white mt-2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-xs font-medium mb-1">
                    Client Satisfaction
                  </p>
                  <p className="text-xl font-bold">100%</p>
                </div>
                <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <CheckCircle2 size={20} className="text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: Visual --- */}
          <div className="relative h-[500px] w-full flex items-center justify-center">
            {/* Background Decor */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-100/30 to-pink-100/30 rounded-full blur-3xl opacity-60" />

            {/* Main Person Image */}
            <div className="relative z-10 w-72 md:w-80 h-auto aspect-[3/4]">
              <img
                src="https://getwpteam.com/wp-content/uploads/2022/02/25.png"
                alt="Business Consultant"
                className="w-full h-full object-cover object-top rounded-2xl shadow-2xl border-4 border-white"
              />
            </div>

            {/* FLOATING WIDGET 1: Star Icon (Left) */}
            <div className="absolute top-32 left-4 bg-gradient-to-br from-purple-600 to-pink-500 text-white p-4 rounded-2xl shadow-xl shadow-purple-500/30 w-16 h-16 flex items-center justify-center animate-float hover:shadow-2xl transition-all duration-300">
              <Star size={28} className="text-white fill-white" />
            </div>

            {/* FLOATING WIDGET 2: Megaphone Icon (Left) */}
            <div
              className="absolute top-52 left-4 bg-gradient-to-br from-purple-600 to-pink-500 text-white p-4 rounded-2xl shadow-xl shadow-purple-500/30 w-16 h-16 flex items-center justify-center animate-float hover:shadow-2xl transition-all duration-300"
              style={{ animationDelay: "300ms" }}
            >
              <Megaphone size={28} className="text-white" />
            </div>

            {/* FLOATING WIDGET 3: Verified Badge (Top Right) */}
            <div className="absolute top-20 right-4 bg-white p-4 rounded-2xl shadow-xl shadow-purple-500/20 border border-slate-200 z-20 flex flex-col items-center hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white mb-2 shadow-md shadow-green-200">
                <CheckCircle2 size={20} strokeWidth={3} />
              </div>
              <p className="text-sm font-bold text-slate-900">Verified!</p>
              <p className="text-[10px] text-green-600 font-medium">
                100% Satisfied
              </p>
            </div>

            {/* FLOATING WIDGET 4: Income Chart (Bottom) */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white p-5 rounded-2xl shadow-xl shadow-purple-500/20 border border-slate-200 z-30 w-[320px] hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-gradient-to-br from-purple-600 to-pink-500 text-white rounded-lg shadow-sm">
                    <BarChart3 size={18} className="text-white" />
                  </div>
                  <span className="text-sm font-bold text-slate-900">
                    B2B Income 2023
                  </span>
                </div>
                <div className="flex gap-1.5">
                  <span className="text-[9px] px-2 py-0.5 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full font-bold">
                    Monthly
                  </span>
                  <span className="text-[9px] px-2 py-0.5 bg-slate-100 text-slate-600 rounded-full font-medium">
                    Yearly
                  </span>
                </div>
              </div>

              {/* Chart */}
              <div className="relative h-7 w-full">
                <svg
                  className="w-full h-full overflow-visible"
                  viewBox="0 0 100 35"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient
                      id="chartGradient-business"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#fb7185" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#fb7185" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 30 L 8 25 L 17 27 L 25 15 L 33 20 L 42 10 L 50 17 L 58 5 L 67 13 L 75 2 L 83 5 L 100 3 V 35 H 0 Z"
                    fill="url(#chartGradient-business)"
                  />
                  <path
                    d="M0 30 L 8 25 L 17 27 L 25 15 L 33 20 L 42 10 L 50 17 L 58 5 L 67 13 L 75 2 L 83 5 L 100 3"
                    fill="none"
                    stroke="#fb7185"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                {/* X-Axis Labels */}
                <div className="flex justify-between mt-1.5 px-1">
                  {["Jan", "Mar", "May", "Jul", "Sep", "Nov"].map((m) => (
                    <span
                      key={m}
                      className="text-[8px] text-slate-400 font-medium"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
