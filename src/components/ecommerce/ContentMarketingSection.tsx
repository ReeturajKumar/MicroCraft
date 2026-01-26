import { useState } from "react";
import {
  Check,
  BarChart3,
  Instagram,
  Facebook,
  Twitter,
  Mail,
  TrendingUp,
  Users,
  Target,
  FileText,
  Share2,
  Eye,
} from "lucide-react";

const FEATURES = [
  {
    id: 1,
    title: "Strategic Content Planning",
    description:
      "Data-driven content strategies that align with your business goals and target audience preferences.",
    icon: Target,
    stat: "245%",
    label: "Growth Rate",
  },
  {
    id: 2,
    title: "Multi-Channel Distribution",
    description:
      "Amplify your reach across social media, email, blogs, and more with optimized posting schedules.",
    icon: Share2,
    stat: "1.2M",
    label: "Total Reach",
  },
  {
    id: 3,
    title: "Engagement & Analytics",
    description:
      "Track performance metrics, engagement rates, and ROI with real-time analytics dashboard.",
    icon: BarChart3,
    stat: "94%",
    label: "Engagement",
  },
  {
    id: 4,
    title: "Brand Authority Building",
    description:
      "Establish thought leadership and build trust through consistent, high-quality content.",
    icon: Users,
    stat: "17K+",
    label: "Content Published",
  },
];

export default function ContentMarketingSection() {
  const [activeFeature, setActiveFeature] = useState(2);

  return (
    <section className="relative py-20 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-purple-200/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-pink-200/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-3">
            Content Creation{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600">
              & Marketing Excellence
            </span>
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            Drive engagement and deliver measurable results through strategic
            content creation
          </p>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* --- LEFT COLUMN: Content Features --- */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Top Card: Main Heading */}
            <div className="bg-white rounded-2xl p-5 shadow-lg border border-slate-200 hover:shadow-2xl hover:border-purple-200 transition-all duration-500">
              <div className="mb-4">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                  Transform Your{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                    Content Strategy
                  </span>
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Drive meaningful engagement and measurable growth through
                  strategic content creation and intelligent distribution.
                </p>
              </div>

              {/* Feature List */}
              <div className="space-y-2">
                {FEATURES.slice(0, 2).map((feature) => {
                  const Icon = feature.icon;
                  const isActive = activeFeature === feature.id;
                  return (
                    <div
                      key={feature.id}
                      onClick={() => setActiveFeature(feature.id)}
                      className={`
                        group relative p-3 rounded-xl cursor-pointer transition-all duration-300 border
                        ${
                          isActive
                            ? "bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 shadow-md"
                            : "bg-slate-50 border-slate-200 hover:bg-white hover:border-purple-100"
                        }
                      `}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`
                            w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300
                            ${
                              isActive
                                ? "bg-gradient-to-br from-purple-600 to-pink-500 text-white shadow-md"
                                : "bg-slate-100 text-slate-400 group-hover:bg-purple-50 group-hover:text-purple-600"
                            }
                          `}
                        >
                          <Icon size={18} />
                        </div>
                        <div className="flex-1">
                          <h4
                            className={`font-bold text-sm ${
                              isActive ? "text-slate-900" : "text-slate-700"
                            }`}
                          >
                            {feature.title}
                          </h4>
                          {isActive && (
                            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                              {feature.description}
                            </p>
                          )}
                        </div>
                        {isActive && (
                          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center">
                            <Check
                              size={12}
                              className="text-white"
                              strokeWidth={3}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Card: Stats */}
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-5 shadow-xl text-white">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-purple-100 text-xs font-medium mb-1">
                    Total Performance
                  </p>
                  <p className="text-2xl font-bold">17K+</p>
                </div>
                <FileText size={24} className="text-white/80" />
              </div>
              <div className="pt-3 border-t border-white/20">
                <p className="text-purple-100 text-xs">
                  Content pieces published across all channels this year
                </p>
              </div>
            </div>
          </div>

          {/* --- CENTER COLUMN: Visual --- */}
          <div className="lg:col-span-4 flex flex-col">
            <div
              className="bg-gradient-to-br from-slate-100 via-purple-50/20 to-pink-50/20 rounded-2xl relative p-0 flex items-center justify-center overflow-hidden border border-slate-200 shadow-xl"
              style={{ minHeight: "100%" }}
            >
              {/* Background Blobs */}
              <div className="absolute top-8 left-8 w-32 h-32 bg-purple-300 rounded-full blur-[80px] opacity-30 mix-blend-multiply animate-pulse" />
              <div
                className="absolute top-8 right-8 w-32 h-32 bg-pink-300 rounded-full blur-[80px] opacity-30 mix-blend-multiply animate-pulse"
                style={{ animationDelay: "1s" }}
              />

            {/* Main Person Image */}
              <div className="relative z-10 w-56 md:w-64 h-auto aspect-[3/4] py-4">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
                alt="Content Creator"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl border-4 border-white"
                />
            </div>

            {/* FLOATING WIDGET 1: Bar Chart (Top Right) */}
              <div className="absolute top-4 right-3 z-20 bg-white p-3 rounded-xl shadow-2xl shadow-purple-500/20 border border-slate-200 w-40 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg shadow-sm">
                    <BarChart3 size={14} className="text-purple-600" />
                </div>
                  <span className="text-[10px] font-bold text-slate-900">
                    Engagement Rate
                </span>
              </div>
                <div className="flex items-end justify-between h-12 gap-1">
                {[40, 70, 50, 90, 60].map((h, i) => (
                  <div
                    key={i}
                      className="flex-1 bg-gradient-to-b from-pink-50 to-purple-50 rounded-t-md relative h-full flex items-end overflow-hidden border border-pink-100/50"
                  >
                    <div
                        className="w-full bg-gradient-to-t from-pink-500 via-purple-500 to-purple-600 rounded-t-md transition-all duration-300"
                        style={{ height: `${h}%` }}
                    />
                  </div>
                ))}
              </div>
            </div>

              {/* FLOATING WIDGET 2: Social Icons (Bottom Left) */}
              <div className="absolute bottom-4 left-3 z-20 bg-white py-2 px-3 rounded-full shadow-xl shadow-pink-500/20 border border-slate-200 flex items-center gap-2 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <span className="text-[10px] font-bold text-slate-900">
                  Multi-Platform
              </span>
                <div className="flex -space-x-1.5">
                  <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center border-2 border-white shadow-md">
                    <Facebook size={12} />
                </div>
                  <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-yellow-400 to-purple-600 text-white flex items-center justify-center border-2 border-white shadow-md">
                    <Instagram size={12} />
                </div>
                  <div className="w-7 h-7 rounded-full bg-sky-500 text-white flex items-center justify-center border-2 border-white shadow-md">
                    <Twitter size={12} />
                </div>
                  <div className="w-7 h-7 rounded-full bg-red-500 text-white flex items-center justify-center border-2 border-white shadow-md">
                    <Mail size={12} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: Additional Features & Stats --- */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            {/* Feature Cards */}
            <div className="space-y-3">
              {FEATURES.slice(2, 4).map((feature) => {
                const Icon = feature.icon;
                const isActive = activeFeature === feature.id;
                return (
                  <div
                    key={feature.id}
                    onClick={() => setActiveFeature(feature.id)}
                    className={`
                      bg-white rounded-xl p-4 shadow-lg border border-slate-200 cursor-pointer transition-all duration-300 hover:shadow-xl hover:border-purple-200
                      ${isActive ? "ring-2 ring-purple-200" : ""}
                    `}
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div
                        className={`
                          w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300
                            ${
                              isActive
                              ? "bg-gradient-to-br from-purple-600 to-pink-500 text-white shadow-md"
                                : "bg-slate-100 text-slate-400"
                            }
                         `}
                      >
                        <Icon size={18} />
                      </div>
                      <div className="flex-1">
                        <h4
                          className={`font-bold text-sm mb-1 ${
                            isActive ? "text-slate-900" : "text-slate-700"
                          }`}
                        >
                          {feature.title}
                        </h4>
                        {isActive && (
                          <p className="text-xs text-slate-600 leading-relaxed">
                            {feature.description}
                          </p>
                        )}
                        </div>
                      </div>
                    <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                      <div>
                        <p className="text-xl font-bold text-slate-900">
                          {feature.stat}
                        </p>
                        <p className="text-xs text-slate-600">
                          {feature.label}
                        </p>
                    </div>
                    {isActive && (
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center">
                          <Check
                            size={12}
                            className="text-white"
                            strokeWidth={3}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Stats Summary Card */}
            <div className="bg-white rounded-xl p-4 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                  <Eye size={18} className="text-purple-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-600 font-medium">
                    Total Reach
                  </p>
                  <p className="text-lg font-bold text-slate-900">1.2M</p>
                </div>
              </div>
              <div className="pt-3 border-t border-slate-100">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-600">This Month</span>
                  <span className="text-green-600 font-semibold flex items-center gap-1">
                    <TrendingUp size={12} />
                    +24%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
