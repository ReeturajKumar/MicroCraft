import { ChevronRight, CheckCircle2 } from "lucide-react";
import dashboardMain from "../../assets/dashboard_main.png";
import dashboardSidebar from "../../assets/dashboard_part_2.png";
import dashboardShare from "../../assets/dashboard_part_3.png";
import dashboardSearch from "../../assets/dashboard_part_4.png";

const Hero = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden font-sans">
      {/* 1. Content Zone (White Background) */}
      <div className="relative z-10 pt-20 md:pt-28 pb-12 md:pb-16 flex flex-col items-center text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-4">
        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-[60px] leading-[1.1] md:leading-[1.2] font-semibold text-[#1F2023] tracking-tight md:tracking-[-1.2px] mb-6 w-full max-w-[1000px]">
          Analytics that drive decisions
        </h1>

        {/* Subheadline */}
        <p className="text-base md:text-[18px] leading-[1.6] text-[#1F2023]/70 mb-8 font-normal tracking-wide max-w-[600px] px-4 md:px-0">
          Microcraft.ai helps teams turn user behavior insights into{" "}
          <br className="hidden md:block" />
          clear next steps, without delays or SQL bottlenecks.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 w-full sm:w-auto px-6 sm:px-0">
          <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-base font-medium transition-all focus-visible:outline-none rounded-full px-7 py-3.5 bg-[#1F2023] text-white hover:bg-[#7856FF] hover:shadow-lg hover:-translate-y-0.5 duration-300">
            Schedule a Call <ChevronRight className="w-4 h-4" />
          </button>
          <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-base font-medium transition-all focus-visible:outline-none rounded-full px-7 py-3.5 bg-transparent border border-[#E4E4E7] text-[#1F2023] hover:border-[#D1D1D2] hover:bg-[#F4F4F5]">
            Book a Demo <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Logo Strip (Static) */}
        <div className="w-full max-w-7xl mb-8 md:mb-12 px-2 md:px-6">
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-6 md:gap-x-12 md:gap-y-10 opacity-60 md:opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            <img
              src="https://cdn.worldvectorlogo.com/logos/uber-2.svg"
              alt="Uber"
              className="h-4 md:h-5 w-auto object-contain"
            />
            <img
              src="https://cdn.worldvectorlogo.com/logos/zoom-communications-logo.svg"
              alt="Zoom"
              className="h-4 md:h-5 w-auto object-contain"
            />
            <img
              src="https://cdn.worldvectorlogo.com/logos/taskrabbit.svg"
              alt="TaskRabbit"
              className="h-5 md:h-6 w-auto object-contain"
            />
            <img
              src="https://cdn.worldvectorlogo.com/logos/xero.svg"
              alt="Xero"
              className="h-6 md:h-8 w-auto object-contain"
            />
            <img
              src="https://1000logos.net/wp-content/uploads/2023/10/Noom-Logo.png"
              alt="Noom"
              className="h-5 md:h-7 w-auto object-contain"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/40/LOOM-logo.png"
              alt="loom"
              className="h-5 md:h-7 w-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* 2. Gradient Transition & Composite Dashboard */}
      <div className="relative w-full bg-[#15003F]">
        {/* Gradient Background - ABSOLUTE Layer behind content */}
        <div
          className="absolute top-0 left-0 right-0 h-[400px] md:h-[800px] w-full z-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, #FFFFFF 5%, #FFF5F5 30%, #EAD4FF 42%, #9F7AEA 61%, #15003F 80%)",
          }}
        ></div>

        {/* Dashboard Composite */}
        <div className="relative z-10 max-w-[1080px] mx-auto px-4 md:px-6 perspective-2000px pb-16 md:pb-24 pt-4">
          <div className="relative">
            {/* Main Dashboard */}
            <div className="relative z-10 rounded-[12px] md:rounded-[16px] p-0.5 md:p-[4px] bg-white/20 shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_20px_40px_-12px_rgba(0,0,0,0.1)]">
              <img
                src={dashboardMain}
                alt="MicroCraft Main Dashboard"
                className="w-full h-auto rounded-[10px] md:rounded-[12px] shadow-[0_20px_40px_-10px_rgba(50,50,93,0.2),0_15px_30px_-15px_rgba(0,0,0,0.3)] md:shadow-[0_30px_60px_-12px_rgba(50,50,93,0.25),0_18px_36px_-18px_rgba(0,0,0,0.3)]"
              />
            </div>

            {/* Floating 1: Left - Search Menu */}
            <div className="absolute -left-6 lg:-left-12 bottom-12 lg:bottom-24 z-40 w-[20%] hidden sm:block pointer-events-none">
              <img
                src={dashboardSearch}
                alt="Search Menu"
                className="w-full h-auto rounded-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)] border border-white/50"
              />
            </div>

            {/* Floating 2: Top Right - Sidebar Menu */}
            <div className="absolute -right-8 lg:-right-20 -top-6 lg:-top-8 z-30 w-[24%] hidden sm:block pointer-events-none">
              <img
                src={dashboardSidebar}
                alt="Sidebar Menu"
                className="w-full h-auto rounded-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)] border border-white/50 transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Floating 3: Right Bottom - Share Modal */}
            <div className="absolute -right-4 lg:-right-10 bottom-6 lg:bottom-8 z-40 w-[36%] hidden sm:block pointer-events-none">
              <img
                src={dashboardShare}
                alt="Share Modal"
                className="w-full h-auto rounded-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)] border border-white/50"
              />
            </div>
          </div>
        </div>

        {/* 3. Value Props Section (Dark Mode) */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-20 md:pb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-12 sm:gap-x-8 md:gap-x-12 lg:gap-x-20 text-center">
            {/* Item 1: Discover */}
            <div className="flex flex-col items-center group px-4">
              <div className="bg-white rounded-full p-0.5 mb-5 shadow-[0_0_20px_rgba(255,255,255,0.2)] group-hover:scale-110 transition-transform duration-300">
                <CheckCircle2 className="w-6 h-6 text-[#15003F] fill-white" />
              </div>
              <h3 className="text-lg md:text-[18px] font-bold text-white mb-3 tracking-tight">
                Discover freely
              </h3>
              <p className="text-[#E4E4E7]/70 text-sm md:text-base leading-relaxed max-w-[320px]">
                Answer product questions in seconds without bottlenecks.
              </p>
            </div>

            {/* Item 2: Understand */}
            <div className="flex flex-col items-center group px-4">
              <div className="bg-white rounded-full p-0.5 mb-5 shadow-[0_0_20px_rgba(255,255,255,0.2)] group-hover:scale-110 transition-transform duration-300">
                <CheckCircle2 className="w-6 h-6 text-[#15003F] fill-white" />
              </div>
              <h3 className="text-lg md:text-[18px] font-bold text-white mb-3 tracking-tight">
                Understand behavior
              </h3>
              <p className="text-[#E4E4E7]/70 text-sm md:text-base leading-relaxed max-w-[320px]">
                See how users engage, convert, and return, all in one unified
                view.
              </p>
            </div>

            {/* Item 3: Act */}
            <div className="flex flex-col items-center group px-4 sm:col-span-2 md:col-span-1">
              <div className="bg-white rounded-full p-0.5 mb-5 shadow-[0_0_20px_rgba(255,255,255,0.2)] group-hover:scale-110 transition-transform duration-300">
                <CheckCircle2 className="w-6 h-6 text-[#15003F] fill-white" />
              </div>
              <h3 className="text-lg md:text-[18px] font-bold text-white mb-3 tracking-tight">
                Act with confidence
              </h3>
              <p className="text-[#E4E4E7]/70 text-sm md:text-base leading-relaxed max-w-[320px] mx-auto">
                Back every decision with insights you can trust. Then share,
                test, and improve together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
