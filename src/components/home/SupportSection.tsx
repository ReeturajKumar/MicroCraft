import { ArrowRight } from 'lucide-react';

const SUPPORT_CARDS = [
  {
    title: "Work Directly With Expert",
    description: "Get guidance from consultants who understand your business and help you make the right technology decisions",
    linkText: "Talk to an Expert",
    icon: "/assets/images/support/handshake.png",
    bgColor: "bg-[#F3E8FF]" // Light purple
  },
  {
    title: " Simple Training for Your Team",
    description: "Easy onboarding, clear training sessions, and step-by-step guidance so your staff feels confident using the system",
    linkText: "View Training",
    icon: "/assets/images/support/toggle.png",
    bgColor: "bg-[#E0F2FE]" // Light blue
  },
  {
    title: "Fast Help When You Need It",
    description: "Quick support through calls, WhatsApp, and remote assistance — so problems get solved without delays",
    linkText: "Get Support",
    icon: "/assets/images/support/community.png",
    bgColor: "bg-[#FFEDD5]" // Light orange/peach
  }
];

export function SupportSection() {
  return (
    <section className="w-full py-20 lg:py-28 bg-white flex justify-center px-4 font-sans">
      <div className="w-full max-w-[1440px]">
        {/* Header content with tighter typography */}
        <div className="mb-14 lg:mb-20 text-left">
          <h2 className="text-[34px] lg:text-[46px] font-bold font-sans text-[#111827] leading-[1.05] mb-5 tracking-[-0.03em]">
            Support That Stays With You
          </h2>
          <p className="text-[#6B7280] text-[16px] lg:text-[18px] font-sans max-w-[540px] leading-relaxed font-medium">
            From first discussion to daily usage and future upgrades — our team supports you at every step so 
you never feel stuck with technology
          </p>
        </div>

        {/* Professional Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {SUPPORT_CARDS.map((card, idx) => (
            <div key={idx} className="group cursor-pointer">
              {/* Icon Container - Soft Atmospheric Gradients - More compact height */}
              <div className={`relative aspect-[16/7] mb-8 rounded-[32px] overflow-hidden transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] ring-1 ring-black/[0.03]`}>
                {/* Dynamic Gradient Overlay */}
                <div className={`absolute inset-0 ${card.bgColor} opacity-60`} />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.4),transparent_60%)]" />
                
                <img 
                  src={card.icon} 
                  alt={card.title} 
                  className="relative z-10 w-full h-full object-contain p-8 transition-transform duration-700 group-hover:scale-110 mix-blend-multiply"
                />
              </div>

              {/* Text Content - Refined Hierarchy */}
              <div className="px-1">
                <h3 className="text-[#111827] text-[19px] lg:text-[22px] font-bold font-sans mb-2.5 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-[#6B7280] text-[14px] lg:text-[15px] font-sans mb-5 leading-relaxed font-medium opacity-90">
                  {card.description}
                </p>
                <div className="inline-flex items-center gap-2 text-[14px] font-bold text-[#111827] relative">
                  <span className="relative z-10">{card.linkText}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  {/* Subtle Link Underline */}
                  <div className="absolute bottom-[-2px] left-0 w-0 h-[1.5px] bg-[#111827] transition-all duration-300 group-hover:w-full opacity-20" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
