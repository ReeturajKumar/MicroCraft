import {
  ArrowRight,
  Heart,
  CheckCircle2,
  Globe,
  BarChart3,
  Megaphone,
} from "lucide-react";

export default function DigitalMarketingDashboard() {
  return (
    <>
      {/* Styles moved to index.css - see: animate-slide-up, animate-fade-in, animate-grow, animate-float, delay-* */}

      <div className="relative min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 p-4 md:p-8 flex items-center justify-center font-sans text-slate-800 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-purple-200/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-200/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl w-full relative z-10">
          {/* Section Header - Top Center */}
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-3">
              Real-Time Campaign{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600">
                Performance Dashboard
              </span>
            </h2>
            <p className="text-base text-slate-600 max-w-2xl mx-auto">
              Real-time analytics and actionable insights for your marketing campaigns
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* --- LEFT COLUMN --- */}
          <div className="lg:col-span-3 flex flex-col h-[480px]">
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-200 flex flex-col justify-between hover:shadow-2xl hover:border-purple-200 transition-all duration-500 h-full">
              <div>
                {/* Heading with Reveal Effect */}
                <h2 className="text-xl md:text-2xl font-bold leading-tight mb-4">
                  <div className="text-slate-900">Transform Your Business with</div>
                  <div>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 inline-block">
                      Data-Driven Marketing
                    </span>
                  </div>
                </h2>

                {/* 3D Icon Representation */}
                <div className="py-6 flex justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-100/40 to-pink-100/40 rounded-full blur-3xl opacity-70" />
                  <div className="relative animate-float">
                    <div className="bg-gradient-to-br from-pink-500 via-purple-600 to-purple-700 p-5 rounded-2xl shadow-2xl shadow-purple-500/40 text-white transform rotate-12 transition-all hover:rotate-0 hover:scale-105 duration-500 border border-white/10">
                      <Megaphone
                        size={48}
                        strokeWidth={1.5}
                        className="drop-shadow-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="mb-5">
                  <p className="text-slate-700 text-sm leading-relaxed font-medium">
                    Unlock powerful insights, optimize campaigns, and drive
                    measurable results with our comprehensive marketing platform.
                  </p>
                </div>

                <div>
                  <button className="group flex items-center gap-2 bg-gradient-to-r from-slate-900 to-slate-800 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:from-purple-600 hover:to-pink-600 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105">
                    Learn More
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* --- CENTER COLUMN (Image & Floating UI) --- */}
          <div className="lg:col-span-5 flex flex-col h-[480px]">
            <div className="bg-gradient-to-br from-slate-100 via-purple-50/20 to-pink-50/20 rounded-3xl h-full relative p-0 flex items-center justify-center overflow-hidden border border-slate-200 shadow-xl">
              {/* Background Blobs */}
              <div className="absolute top-10 left-10 w-40 h-40 bg-purple-300 rounded-full blur-[100px] opacity-30 mix-blend-multiply animate-pulse" />
              <div
                className="absolute top-10 right-10 w-40 h-40 bg-pink-300 rounded-full blur-[100px] opacity-30 mix-blend-multiply animate-pulse"
                style={{ animationDelay: "1s" }}
              />

              {/* Main Image */}
              <img
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=687&auto=format&fit=crop"
                alt="Student"
                className="relative z-10 w-3/4 object-cover object-top h-full rounded-3xl shadow-2xl border-4 border-white"
              />

              {/* Floating UI: Google Ads (Left) */}
              <div className="absolute top-1/3 left-4 z-20 bg-white p-4 rounded-2xl shadow-2xl shadow-blue-500/20 w-44 border border-slate-200 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-md">
                    <span className="font-bold text-xs text-white">G</span>
                  </div>
                  <span className="text-[10px] bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-2 py-0.5 rounded-full font-semibold flex items-center gap-1 border border-green-200/50">
                    <CheckCircle2 size={8} className="fill-green-600" />{" "}
                    Verified
                  </span>
                </div>
                <p className="font-bold text-base text-slate-900 mb-1.5">
                  Google Ads
                </p>
                <div className="flex text-xs text-slate-700 gap-1.5 items-center">
                  <span className="text-slate-900 font-bold text-xs">
                    4.8/5
                  </span>
                  <span className="text-yellow-500">★★★★★</span>
                </div>
              </div>

              {/* Floating UI: Growth Chart (Right) */}
              <div className="absolute top-10 right-4 z-20 bg-white p-4 rounded-2xl shadow-2xl shadow-pink-500/20 w-44 border border-slate-200 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-1.5 bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg shadow-sm">
                    <BarChart3 size={16} className="text-pink-600" />
                  </div>
                  <span className="text-sm font-bold text-slate-900">
                    Segmentation
                  </span>
                </div>
                <div className="flex items-end justify-between h-10 gap-1.5">
                  {[40, 60, 45, 70, 90].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-gradient-to-b from-pink-50 to-purple-50 rounded-t-md relative h-full flex items-end border border-pink-100/50"
                    >
                      <div
                        style={{
                          height: `${h}%`,
                          animationDelay: `${800 + i * 100}ms`,
                        }}
                        className="w-full bg-gradient-to-t from-pink-500 via-purple-500 to-purple-600 rounded-t-md animate-grow shadow-sm"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating UI: Let's Growth (Top Left) */}
              <div className="absolute top-6 left-6 z-20 bg-white py-2.5 px-5 rounded-full shadow-lg border border-slate-200 flex items-center gap-2 hover:shadow-xl hover:scale-105 transition-all duration-300">
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-sm">
                  <Globe size={12} className="text-white" />
                </div>
                <span className="text-xs font-bold text-slate-900">
                  Let's Growth!
                </span>
              </div>

              {/* Floating UI: Views (Bottom Right) */}
              <div className="absolute bottom-12 right-6 z-20 bg-white py-3 px-4 rounded-xl shadow-2xl shadow-pink-500/20 flex items-center gap-3 border border-slate-200 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white rounded-full p-2 shadow-lg">
                  <ArrowRight size={14} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">
                    2,924 Views
                  </p>
                  <div className="h-1.5 w-16 bg-slate-100 rounded-full mt-1.5 overflow-hidden border border-slate-200">
                    <div className="h-full w-3/4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full shadow-sm" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN --- */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Top Right Card: Satisfied Customers */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-200 hover:shadow-2xl hover:border-purple-200 transition-all duration-500">
              <div className="mb-5">
                <h3 className="text-xl font-bold text-slate-900">
                  Satisfied Customers
                </h3>
              </div>

              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-50 to-pink-50 flex items-center justify-center text-red-500 shadow-md border border-red-100/50">
                  <Heart className="fill-current" size={24} />
                </div>

                <div>
                  <span className="block text-4xl font-bold text-slate-900">
                    15.823
                  </span>
                </div>

                {/* Avatars */}
                <div className="flex -space-x-2 ml-auto">
                  {[1, 2, 3].map((i) => (
                    <img
                      key={i}
                      src={`https://i.pravatar.cc/100?img=${i + 25}`}
                      className="w-10 h-10 rounded-full border-3 border-white shadow-lg hover:scale-110 transition-transform"
                      alt="user"
                    />
                  ))}
                </div>
              </div>

              <div>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  Our tailored solutions have left a lasting impact on brands
                  seeking to thrive in the digital age.
                </p>
              </div>
            </div>

            {/* Bottom Right Card: B2B Startup */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-200 flex flex-col justify-between hover:shadow-2xl hover:border-purple-200 transition-all duration-500">
              <div>
                <div className="mb-3">
                  <h3 className="text-xl font-bold text-slate-900">
                    Potential in the B2B Startup Realm
                  </h3>
                </div>
                <div className="mb-5">
                  <p className="text-slate-700 text-sm leading-relaxed font-medium">
                    Commitment to excellence, agility, and forward-thinking
                    positions us as the catalyst for your business growth.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-50 to-purple-50/20 rounded-2xl p-4 flex items-center justify-between border border-slate-200 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-10 bg-gradient-to-b from-pink-500 to-purple-500 rounded-full shadow-sm"></div>
                    <div>
                      <span className="block text-sm font-bold text-slate-900">
                        Contract with Startup
                      </span>
                      <span className="text-xs text-slate-600 font-medium">
                        28 Startup Member
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center text-[10px] font-bold text-white border-2 border-white shadow-md">
                      N
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center text-[10px] font-bold text-white border-2 border-white shadow-md">
                      A
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-500 flex items-center justify-center text-[10px] font-bold text-white border-2 border-white shadow-md">
                      R
                    </div>
                  </div>
                  <ArrowRight size={16} className="text-slate-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
