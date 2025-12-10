import {
  Hexagon,
  Triangle,
  Circle,
  Square,
  CloudLightning,
  Globe,
  ShieldCheck,
  Gem,
} from "lucide-react";

const LogoMarquee = () => {
  const partners = [
    { name: "Acme Corp", icon: Hexagon, color: "text-blue-600" },
    { name: "Quantum", icon: Triangle, color: "text-purple-600" },
    { name: "Echo", icon: Circle, color: "text-cyan-600" },
    { name: "SquareSpace", icon: Square, color: "text-pink-600" },
    { name: "Bolt", icon: CloudLightning, color: "text-yellow-500" },
    { name: "Global", icon: Globe, color: "text-green-600" },
    { name: "SecureIT", icon: ShieldCheck, color: "text-indigo-600" },
    { name: "Ruby", icon: Gem, color: "text-red-500" },
  ];

  return (
    <div className="w-full py-8 bg-white border-t border-gray-100 overflow-hidden">
      {/* --- HEADER --- */}
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold text-gray-900">
          Powering{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
            1,500+
          </span>{" "}
          Modern Brands
        </h3>
      </div>

      {/* --- MARQUEE --- */}
      <div className="relative w-full group pt-10">
        {/* Left White Fade (Hides the entrance) */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />

        {/* Right White Fade (Hides the exit) */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track */}
        <div className="flex w-max scroll-track group-hover:paused">
          {/* Render list 3 times for seamless loop */}
          {[...partners, ...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center mx-12 min-w-[140px] opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer hover:scale-105"
            >
              <div className="flex items-center gap-3">
                <partner.icon
                  className={`w-8 h-8 ${partner.color}`}
                  strokeWidth={2}
                />
                <span className="text-xl font-bold text-gray-800">
                  {partner.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- INLINE CSS FOR ANIMATION (No Config Needed) --- */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .scroll-track {
          animation: scroll 40s linear infinite;
        }

        /* Pause animation on hover */
        .group:hover .scroll-track {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default LogoMarquee;
