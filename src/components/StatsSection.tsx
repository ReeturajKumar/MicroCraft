import React, { useState, useEffect } from "react";

// --- Mock Data ---
const SUCCESS_STORIES = [
  {
    id: 1,
    brandName: "Crude Origins",
    logo: "https://images.unsplash.com/photo-1516876437184-593fda40c7ce?auto=format&fit=crop&w=200&q=80",
    stats: [
      { value: "1.58K", label: "Traffic Generated" },
      { value: "5X", label: "ROAS" },
      { value: "74%", label: "Revenue Growth" },
    ],
  },
  {
    id: 2,
    brandName: "Velvet & Co",
    logo: "https://images.unsplash.com/photo-1496200186974-4293800e2c20?auto=format&fit=crop&w=200&q=80",
    stats: [
      { value: "850K", label: "Page Views" },
      { value: "3.2X", label: "Conversion Rate" },
      { value: "$1.2M", label: "Total Sales" },
    ],
  },
  {
    id: 3,
    brandName: "Urban Pulse",
    logo: "https://images.unsplash.com/photo-1554629947-334ff61d85dc?auto=format&fit=crop&w=200&q=80",
    stats: [
      { value: "200+", label: "New Leads" },
      { value: "12X", label: "Engagement" },
      { value: "45%", label: "Retention" },
    ],
  },
];

const StatsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // --- MOUSE TRACKING HANDLER ---
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Auto-cycle through brands every 3.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SUCCESS_STORIES.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      onMouseMove={handleMouseMove}
      className="w-full bg-white py-8 font-sans relative overflow-hidden group"
    >
      {/* ========================================================
          INTERACTIVE BACKGROUND LAYERS (Copied from Hero)
      ======================================================== */}

      {/* 1. Base Gradient (Subtle Ambient Light) */}
      <div className="absolute top-[-50%] left-[-20%] w-[800px] h-[800px] bg-violet-50/50 rounded-full blur-3xl pointer-events-none mix-blend-multiply" />
      <div className="absolute bottom-[-50%] right-[-20%] w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-3xl pointer-events-none mix-blend-multiply" />

      {/* 2. THE SPOTLIGHT GRID (Reveals only on hover) */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(124, 58, 237, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(124, 58, 237, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          maskImage: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
          WebkitMaskImage: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
        }}
      />

      {/* 3. THE GLOWING CURSOR BALL */}
      <div
        className="absolute pointer-events-none h-[250px] w-[250px] rounded-full bg-violet-400/10 blur-[60px] transition-transform duration-75 ease-out z-0"
        style={{
          left: mousePos.x,
          top: mousePos.y,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* ========================================================
          MAIN CONTENT
      ======================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* --- Header --- */}
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Trusted by{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500">
              15K+ Global Brands
            </span>
          </h2>
        </div>

        {/* --- Main Content Layout --- */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* LEFT: Brand Logo Card */}
          <div className="flex-shrink-0">
            <div className="w-64 h-48 rounded-2xl  border border-gray-100 flex items-center justify-center p-8 relative overflow-hidden group/card">
              {/* Vertical Carousel for Logos */}
              <div
                className="absolute inset-0 flex flex-col transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                style={{ transform: `translateY(-${currentIndex * 100}%)` }}
              >
                {SUCCESS_STORIES.map((story) => (
                  <div
                    key={story.id}
                    className="h-full w-full flex-shrink-0 flex flex-col items-center justify-center"
                  >
                    <div className="w-24 h-24 rounded-full overflow-hidden mb-3 border border-gray-100 ">
                      <img
                        src={story.logo}
                        alt={story.brandName}
                        className="w-full h-full object-fit grayscale hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                    <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest">
                      {story.brandName}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Dynamic Stats Grid */}
          <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-100/80">
            {[0, 1, 2].map((statIndex) => (
              <div
                key={statIndex}
                className="px-6 py-8 sm:py-0 flex flex-col items-center text-center"
              >
                {/* The "Sliding" Number Container */}
                <div className="h-16 overflow-hidden relative w-full">
                  <div
                    className="absolute inset-x-0 top-0 flex flex-col transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                    style={{ transform: `translateY(-${currentIndex * 4}rem)` }} // 4rem = h-16
                  >
                    {SUCCESS_STORIES.map((story) => (
                      <div
                        key={story.id}
                        className="h-16 flex items-center justify-center flex-shrink-0"
                      >
                        <span className="text-5xl font-extrabold text-gray-900 tracking-tight">
                          {story.stats[statIndex].value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* The "Sliding" Label Container */}
                <div className="h-8 overflow-hidden relative w-full mt-2">
                  <div
                    className="absolute inset-x-0 top-0 flex flex-col transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                    style={{
                      transform: `translateY(-${currentIndex * 2}rem)`, // 2rem = h-8
                      transitionDelay: "50ms",
                    }}
                  >
                    {SUCCESS_STORIES.map((story) => (
                      <div
                        key={story.id}
                        className="h-8 flex items-center justify-center flex-shrink-0"
                      >
                        {/* Added 'text-transparent' here */}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 uppercase tracking-wide font-bold">
                          {story.stats[statIndex].label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
