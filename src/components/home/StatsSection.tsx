import { Play } from "lucide-react";

// --- Stats Data (Following Image Design) ---
const STATS = [
  {
    value: "420%",
    label: "More Speed",
    description:
      "Ut porttitor leo a diam sollicitudin. Integer enim neque volutpat ac.",
  },
  {
    value: "21.2K",
    label: "Total Ratings",
    description:
      "Maecenas pharetra convallis posuere morbi. Scelerisque felis.",
  },
  {
    value: "110X",
    label: "Efficiency Level",
    description:
      "Lacinia at quis risus sed vulputate. Lectus mauris ultrices eros.",
  },
  {
    value: "16M",
    label: "Total Users",
    description:
      "Fames ac turpis egestas sed tempus. Tellus mauris a diam maecenas.",
  },
];

const StatsSection = () => {
  return (
    <section className="w-full relative overflow-hidden stats-section-bg hero-container-font stats-section-container">
      {/* ========================================================
          MAIN CONTENT (Following Image Design)
      ======================================================== */}
      <div className="max-w-7xl mx-auto relative z-10 stats-content-container">
        {/* --- Top Section: Headline + Buttons --- */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-8 mb-12 lg:mb-16">
          {/* Left: Headline Section */}
          <div className="flex-1">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-3 stats-headline-new">
              We only deliver results.
            </h2>
            <p className="text-base sm:text-lg stats-subheadline-new">
              We don't use excuses or something. Okay maybe sometimes.
            </p>
          </div>

          {/* Right: Buttons */}
          <div className="flex items-center gap-3 stats-buttons-container">
            <button className="stats-demo-button">
              <Play className="w-4 h-4" />
              <span>Demo</span>
            </button>
            <button className="stats-get-started-button">Get Started</button>
          </div>
        </div>

        {/* --- Bottom Section: Stats Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {STATS.map((stat, index) => (
            <div key={index} className="stats-item-new">
              <div className="stats-value-new">{stat.value}</div>
              <div className="stats-label-new">{stat.label}</div>
              <p className="stats-description-new">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
