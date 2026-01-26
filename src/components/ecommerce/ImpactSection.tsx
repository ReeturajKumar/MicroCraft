import { Play, MoreVertical } from "lucide-react";

const ImpactSection = () => {
  return (
    <section className="relative w-full bg-white py-16 md:py-20 lg:py-14 overflow-hidden font-sans">
      {/* Styles moved to index.css - see: scrolling-text-container-ecommerce, scrolling-text-inner */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* === MAIN CONTENT: SPLIT LAYOUT === */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-6">
          {/* LEFT SECTION: Marketing Copy */}
          <div className="flex flex-col">
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Streamline Sales,{" "}
              <div className="scrolling-text-container-ecommerce inline-block mb-4">
                <div className="scrolling-text-inner flex flex-col text-left mb-4">
                  <span className="block h-[1.1em] text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                    Maximize Growth
                  </span>
                  <span className="block h-[1.1em] text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                    Boost Revenue
                  </span>
                  <span className="block h-[1.1em] text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                    Scale Operations
                  </span>
                  <span className="block h-[1.2em] text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                    Maximize Growth
                  </span>
                </div>
              </div>
            </h1>

            {/* Description */}
            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-lg">
              Take control of your operations with our intuitive dashboard.
              Track, analyze, and optimize every aspect of your business
              effortlessly.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <button className="px-6 py-3  text-white rounded-lg font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:shadow-lg transition-all">
                Request a Demo
              </button>
              <button className="px-6 py-3 bg-white text-slate-900 border border-slate-200 rounded-lg font-semibold hover:bg-slate-50 transition-colors flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center">
                  <Play size={14} className="text-white ml-0.5" fill="white" />
                </div>
                Watch Demo
              </button>
            </div>
          </div>

          {/* RIGHT SECTION: Dashboard Visualization */}
          <div className="relative">
            {/* Main Dashboard Container */}
            <div className="relative bg-white rounded-2xl border border-slate-200 shadow-xl p-6">
              {/* Country/Product Cards */}
              <div className="absolute -top-4 left-4 z-20 space-y-2">
                <div className="bg-white rounded-lg border border-slate-200 shadow-md p-3 flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-gradient-to-br from-yellow-400 to-red-500"></div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">
                      Spain
                    </div>
                    <div className="text-xs text-slate-500">1.2k products</div>
                  </div>
                </div>
                <div className="bg-white rounded-lg border border-slate-200 shadow-md p-3 flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-gradient-to-br from-blue-500 to-red-500"></div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">
                      France
                    </div>
                    <div className="text-xs text-slate-500">3.6k products</div>
                  </div>
                </div>
              </div>

              {/* Store Management Card */}
              <div className="absolute top-4 right-4 z-20 bg-white rounded-lg border border-slate-200 shadow-md p-4 w-48">
                <h3 className="text-sm font-semibold text-slate-900 mb-3">
                  Handle multiple store
                </h3>
                <div className="space-y-2">
                  <div className="text-sm text-slate-600">Fashion Hive</div>
                  <div className="text-sm text-slate-900 bg-slate-100 px-2 py-1 rounded">
                    HealthMart
                  </div>
                  <div className="text-sm text-slate-600">TechNest</div>
                </div>
              </div>

              {/* Sales Performance Chart */}
              <div className="mt-20 mb-16">
                <div className="flex items-end gap-4 h-48">
                  {/* Y-axis labels */}
                  <div className="flex flex-col justify-between h-full text-xs text-slate-400 pr-2 shrink-0">
                    <span>$25k</span>
                    <span>$20k</span>
                    <span>$15k</span>
                    <span>$10k</span>
                    <span>$5k</span>
                    <span>$0</span>
                  </div>

                  {/* Chart Bars */}
                  <div className="flex-1 flex items-end justify-between gap-3 h-full">
                    {[
                      { month: "Month 1", sales: 14, selected: false },
                      { month: "Month 2", sales: 6, selected: false },
                      { month: "Month 3", sales: 13, selected: true },
                      { month: "Month 4", sales: 10, selected: false },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex-1 flex flex-col items-center h-full"
                      >
                        <div className="relative w-full h-full flex flex-col justify-end">
                          {/* Background bar (potential - full height) */}
                          <div className="absolute inset-0 bg-purple-100 rounded-t"></div>
                          {/* Actual sales bar */}
                          <div
                            className="relative w-full bg-purple-600 rounded-t transition-all"
                            style={{ height: `${(item.sales / 25) * 100}%` }}
                          >
                            {item.selected && (
                              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full border-2 border-white shadow-sm z-10"></div>
                            )}
                          </div>
                        </div>
                        <div className="mt-2 text-xs text-slate-600 font-medium">
                          {item.month}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Profile Pictures */}
              <div className="absolute bottom-6 left-6 z-20">
                <div className="relative">
                  <img
                    src="https://i.pravatar.cc/150?img=12"
                    alt="User"
                    className="w-12 h-12 rounded-full border-2 border-white shadow-md"
                  />
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-blue-500 rounded flex items-center justify-center">
                    <MoreVertical size={10} className="text-white" />
                  </div>
                </div>
              </div>

              <div className="absolute top-20 right-8 z-20">
                <div className="relative">
                  <img
                    src="https://i.pravatar.cc/150?img=47"
                    alt="Store Manager"
                    className="w-12 h-12 rounded-full border-2 border-white shadow-md"
                  />
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-red-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full whitespace-nowrap">
                    Store Manager
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* === BOTTOM SECTION: Trust Badges === */}
        <div className="text-center">
          {/* Brand Logos - Infinite Scroll */}
          <div className="logo-scroll-container">
            <div className="logo-scroll-track">
              {/* First set of logos */}
              <div className="logo-scroll-item text-2xl font-bold text-slate-700 whitespace-nowrap">
                ORVIS
              </div>
              <div className="logo-scroll-item text-xl font-bold text-slate-700 whitespace-nowrap">
                LANDS' END
              </div>
              <div className="logo-scroll-item text-lg font-bold text-slate-700 whitespace-nowrap">
                Office DEPOT
              </div>
              <div className="logo-scroll-item text-xl font-bold text-slate-700 whitespace-nowrap">
                PETSMART
              </div>
              <div className="logo-scroll-item text-lg font-bold text-slate-700 whitespace-nowrap">
                COSTCO WHOLESALE
              </div>
              <div className="logo-scroll-item text-xl font-bold text-slate-700 whitespace-nowrap">
                Walmart
              </div>
              {/* Duplicate set for seamless infinite scroll */}
              <div className="logo-scroll-item text-2xl font-bold text-slate-700 whitespace-nowrap">
                ORVIS
              </div>
              <div className="logo-scroll-item text-xl font-bold text-slate-700 whitespace-nowrap">
                LANDS' END
              </div>
              <div className="logo-scroll-item text-lg font-bold text-slate-700 whitespace-nowrap">
                Office DEPOT
              </div>
              <div className="logo-scroll-item text-xl font-bold text-slate-700 whitespace-nowrap">
                PETSMART
              </div>
              <div className="logo-scroll-item text-lg font-bold text-slate-700 whitespace-nowrap">
                COSTCO WHOLESALE
              </div>
              <div className="logo-scroll-item text-xl font-bold text-blue-600 whitespace-nowrap">
                Walmart
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
