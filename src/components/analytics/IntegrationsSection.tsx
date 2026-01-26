import { useState, useEffect } from "react";
import {
  ArrowRight,
  Slack,
  Trello,
  Mail,
  Database,
  Github,
  Globe,
  Layers,
} from "lucide-react";

const INTEGRATIONS = [
  { icon: Slack, colorHex: "#4A154B", x: -140, y: -80, delay: 0.1 },
  { icon: Trello, colorHex: "#0079BF", x: 0, y: -150, delay: 0.2 },
  { icon: Github, colorHex: "#333333", x: 140, y: -80, delay: 0.3 },
  { icon: Mail, colorHex: "#EF4444", x: 140, y: 80, delay: 0.4 },
  { icon: Database, colorHex: "#059669", x: 0, y: 150, delay: 0.5 },
  { icon: Globe, colorHex: "#3B82F6", x: -140, y: 80, delay: 0.6 },
];

const RotatingText = () => {
  const words = [
    "Business Operations",
    "Data Analytics",
    "Team Collaboration",
    "Workflow Automation",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className="inline-block relative overflow-hidden align-bottom text-2xl md:text-3xl lg:text-4xl"
      style={{ height: "1.2em" }}
    >
      {words.map((word, index) => (
        <span
          key={word}
          className="absolute left-0 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 whitespace-nowrap font-bold"
          style={{
            transform:
              index === currentIndex
                ? "translateY(0%)"
                : index === (currentIndex - 1 + words.length) % words.length
                ? "translateY(-100%)"
                : "translateY(100%)",
            opacity: index === currentIndex ? 1 : 0,
            transition:
              "transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {word}
        </span>
      ))}
      {/* Invisible span to set container width */}
      <span className="invisible whitespace-nowrap font-bold">
        {words[currentIndex]}
      </span>
    </span>
  );
};

// --- SVG Logo Components ---
const Logo1 = () => (
  <svg
    className="h-8"
    viewBox="0 0 120 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 4L4 28H28L16 4Z"
      fill="currentColor"
      className="text-slate-800"
    />
    <path
      d="M42 28V16H48V20H46V24H48V28H42ZM54 28V16H60V20H58V24H60V28H54ZM66 28V16H72V19H68V28H66ZM78 28V16H84V19H80V20H83V23H80V25H84V28H78Z"
      fill="currentColor"
      className="text-slate-600"
    />
  </svg>
);

const Logo2 = () => (
  <svg
    className="h-8"
    viewBox="0 0 120 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="16"
      cy="16"
      r="10"
      fill="currentColor"
      className="text-slate-800"
    />
    <path
      d="M40 10H44V22H40V10ZM50 10H54V22H50V10ZM60 10H64V19H68V10H72V22H68V20H64V22H60V10Z"
      fill="currentColor"
      className="text-slate-600"
    />
  </svg>
);

const Logo3 = () => (
  <svg
    className="h-8"
    viewBox="0 0 120 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="4"
      y="4"
      width="24"
      height="24"
      rx="4"
      fill="currentColor"
      className="text-slate-800"
    />
    <path
      d="M44 10H54V13H47V15H53V18H47V22H44V10ZM58 10H61L64 22H61L60 18H58L57 22H54L58 10ZM68 10H72V22H68V10Z"
      fill="currentColor"
      className="text-slate-600"
    />
  </svg>
);

const Logo4 = () => (
  <svg
    className="h-8"
    viewBox="0 0 120 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 16L16 4L28 16L16 28L4 16Z"
      fill="currentColor"
      className="text-slate-800"
    />
    <path
      d="M44 10H48V19H54V22H44V10ZM58 10H62V22H58V10ZM68 10H72L75 16L78 10H82V22H78V15L75 21L72 15V22H68V10Z"
      fill="currentColor"
      className="text-slate-600"
    />
  </svg>
);

export default function IntegrationsSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative w-full bg-gradient-to-b from-slate-50 to-white py-6 overflow-hidden font-sans">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-purple-200/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-pink-200/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* --- LEFT: Visual Integration Hub --- */}
          <div className="relative h-[400px] lg:h-[480px] flex items-center justify-center">
            <div
              className={`relative z-20 w-28 h-28 bg-white rounded-3xl shadow-2xl shadow-purple-500/20 border border-purple-100 flex items-center justify-center p-2.5 transition-all duration-700 ${
                mounted ? "scale-100 opacity-100" : "scale-0 opacity-0"
              }`}
            >
              <div className="w-full h-full bg-gradient-to-br from-purple-600 via-pink-500 to-purple-600 rounded-2xl flex items-center justify-center text-white shadow-inner relative overflow-hidden">
                <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                <span className="text-3xl font-black relative z-10 tracking-tighter">
                  MC
                </span>
              </div>
            </div>

          {/* Dotted Connection Lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 5 }}
          >
            {INTEGRATIONS.map((item, i) => {
              const centerX = "50%";
              const centerY = "50%";
              const iconX = `calc(50% + ${item.x}px)`;
              const iconY = `calc(50% + ${item.y}px)`;

              return (
                <line
                  key={i}
                  x1={centerX}
                  y1={centerY}
                  x2={iconX}
                  y2={iconY}
                  stroke="#CBD5E1"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                  className={`transition-opacity duration-700 ${
                    mounted ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    transitionDelay: `${item.delay + 0.2}s`,
                  }}
                />
              );
            })}
          </svg>

            {/* Satellite Integration Icons */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {INTEGRATIONS.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className={`absolute w-16 h-16 bg-white rounded-2xl shadow-xl border-2 border-slate-200/50 flex items-center justify-center z-10 transition-all duration-700 hover:scale-110 hover:shadow-2xl hover:border-purple-200 cursor-pointer pointer-events-auto ${
                      mounted ? "scale-100 opacity-100" : "scale-0 opacity-0"
                    }`}
                    style={{
                      transform: mounted
                        ? `translate(${item.x}px, ${item.y}px) scale(1)`
                        : `translate(${item.x}px, ${item.y}px) scale(0)`,
                      transitionDelay: `${item.delay + 0.3}s`,
                    }}
                  >
                    <Icon size={28} strokeWidth={2} color={item.colorHex} />
                  </div>
                );
              })}
            </div>
          </div>

          {/* --- RIGHT: Content Section --- */}
          <div className="space-y-6 text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span>Everything in One Place for</span>
              <RotatingText />
            </h2>

            <p className="text-base text-slate-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Seamlessly connect and integrate all your business tools and data sources into one powerful platform. Streamline operations, enhance collaboration, and gain comprehensive insights.
            </p>

            {/* Key Benefits Grid */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm hover:shadow-md hover:border-purple-200 transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-sm">
                    <Layers size={14} className="text-white" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-slate-900">50+</p>
                    <p className="text-[10px] text-slate-600">Integrations</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm hover:shadow-md hover:border-purple-200 transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-sm">
                    <Database size={14} className="text-white" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-slate-900">Real-Time</p>
                    <p className="text-[10px] text-slate-600">Data Sync</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
              <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold shadow-lg shadow-purple-500/25 flex items-center justify-center gap-2 transition-all hover:from-purple-700 hover:to-pink-700 hover:shadow-xl">
                Get Started <ArrowRight size={16} />
              </button>

              <button className="px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-xl font-semibold hover:border-purple-300 hover:bg-purple-50 transition-colors shadow-sm">
                Learn More
              </button>
            </div>

            {/* Trusted By Section */}
            <div className="pt-4 border-t border-slate-200">
              <p className="text-xs text-slate-500 font-medium mb-3">
                TRUSTED BY LEADING COMPANIES
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 opacity-60 hover:opacity-100 transition-all duration-500">
                <Logo1 />
                <Logo2 />
                <Logo3 />
                <Logo4 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
