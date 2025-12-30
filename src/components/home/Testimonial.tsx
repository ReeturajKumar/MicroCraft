import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, ArrowRight, CheckCircle2 } from "lucide-react";

// --- TYPES ---
interface TestimonialData {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
  growth: string;
}

// --- MOCK DATA ---
const TESTIMONIALS: TestimonialData[] = [
  {
    id: 1,
    name: "Hrishikesh Srivastava",
    role: "Founder, Agrani Bazaar",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
    quote:
      "Microkraft helped me bring my business online with remarkable ease. The Account Managers guided me to get better results. It feels like the backbone of our economy.",
    growth: "+140% Orders",
  },
  {
    id: 2,
    name: "Ehtesham Wasim",
    role: "Director, Mega Fashion",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=100&q=80",
    quote:
      "Started in 2021, and I've seen an upward graph ever since. The support team played a major role in my growth. I now receive a minimum of 700+ orders monthly.",
    growth: "700+ Monthly Orders",
  },
  {
    id: 3,
    name: "Sarah Jenkins",
    role: "CEO, Lumiere Paris",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
    quote:
      "We replaced Salesforce and Shopify plugins with just this one platform. It feels like the software actually works for us, not against us. Absolutely brilliant.",
    growth: "3x Revenue",
  },
  {
    id: 4,
    name: "David Chen",
    role: "Ops Lead, TechFlow",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80",
    quote:
      "The ONDC integration was seamless. We went from local delivery to shipping nationwide in 48 hours. The inventory sync is magic.",
    growth: "Nationwide Scale",
  },
];

const Testimonial: React.FC = () => {
  return (
    <section className="relative w-full bg-[#FAFAFA] py-6 sm:py-8 md:py-12 lg:py-16 overflow-hidden font-sans">
      {/* --- BACKGROUND ATMOSPHERE --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        <div className="absolute top-[10%] left-[50%] -translate-x-1/2 w-[300px] h-[200px] sm:w-[400px] sm:h-[300px] md:w-[500px] md:h-[350px] lg:w-[600px] lg:h-[400px] bg-gradient-to-r from-purple-200/30 via-pink-200/30 to-blue-200/30 blur-[60px] sm:blur-[70px] md:blur-[80px] rounded-full mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-6 sm:mb-8 md:mb-10 gap-4 sm:gap-5 md:gap-6">
          <div className="max-w-2xl w-full">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white border border-purple-100 shadow-sm mb-3 sm:mb-4"
            >
              <div className="flex -space-x-1.5 sm:-space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gray-200 border-2 border-white overflow-hidden"
                  >
                    <img
                      src={`https://i.pravatar.cc/100?img=${i + 10}`}
                      alt="user"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-purple-900">
                Join 15,000+ Founders
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight px-1 sm:px-0"
            >
              What our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500">
                Customers Say
              </span>
            </motion.h2>
          </div>

          <div className="hidden md:block">
            <button className="group flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 bg-white border border-gray-200 rounded-full text-xs md:text-sm font-semibold text-slate-900 shadow-sm hover:shadow-md hover:border-purple-200 transition-all cursor-pointer">
              <span>Read all success stories</span>
              <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-purple-100 group-hover:text-purple-600 transition-colors">
                <ArrowRight size={11} className="md:w-3 md:h-3" />
              </div>
            </button>
          </div>
        </div>

        {/* --- INFINITE MARQUEE --- */}
        {/* We use a mask to fade the edges */}
        <div className="relative w-[100vw] left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] overflow-hidden mask-gradient">
          <div className="flex w-max gap-4 sm:gap-5 md:gap-6 scroll-track px-4 sm:px-5 md:px-6">
            {/* Render cards twice to create seamless loop */}
            {[...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
              <TestimonialCard key={i} data={t} />
            ))}
          </div>
        </div>
      </div>

      {/* Styles moved to index.css - see: mask-gradient (for mask-linear-fade), animate-infinite-scroll (for animate-scroll) */}
    </section>
  );
};

// --- SINGLE CARD COMPONENT ---
const TestimonialCard: React.FC<{ data: TestimonialData }> = ({ data }) => {
  return (
    <div className="group relative w-[280px] sm:w-[300px] md:w-[340px] lg:w-[360px] bg-white rounded-lg sm:rounded-xl p-3.5 sm:p-4 md:p-5 border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_-8px_rgba(168,85,247,0.2)] transition-all duration-300 cursor-default hover:-translate-y-0.5 flex flex-col justify-between">
      {/* Decorative Gradient Border on Hover */}
      <div className="absolute inset-0 rounded-lg sm:rounded-xl border-2 border-transparent group-hover:border-purple-100 transition-colors duration-300 pointer-events-none"></div>

      {/* Background Quote Icon */}
      <div className="absolute top-2.5 sm:top-3 right-3 sm:right-4 text-gray-100 group-hover:text-purple-50 transition-colors duration-300 transform group-hover:scale-105 pointer-events-none">
        <Quote size={36} className="sm:w-10 sm:h-10 md:w-12 md:h-12" fill="currentColor" />
      </div>

      <div>
        {/* Header: User & Growth Badge */}
        <div className="relative z-10 flex items-start justify-between mb-3 sm:mb-4">
          <div className="flex items-center gap-2 sm:gap-2.5">
            <div className="relative flex-shrink-0">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full p-[1.5px] bg-gradient-to-br from-purple-500 to-pink-500">
                <img
                  src={data.image}
                  alt={data.name}
                  className="w-full h-full rounded-full object-cover border-2 border-white"
                />
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 bg-white p-0.5 rounded-full shadow-sm">
                <div className="bg-blue-500 rounded-full p-0.5">
                  <CheckCircle2 size={6} className="sm:w-[7px] sm:h-[7px] text-white" />
                </div>
              </div>
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-semibold text-slate-900 text-xs sm:text-sm md:text-base leading-tight truncate">
                {data.name}
              </h3>
              <p className="text-[9px] sm:text-[10px] md:text-xs text-slate-500 font-medium mt-0.5 truncate">
                {data.role}
              </p>
            </div>
          </div>
        </div>

        {/* The Quote */}
        <div className="relative z-10 mb-3 sm:mb-4 min-h-[70px] sm:min-h-[80px]">
          <div className="flex gap-0.5 mb-1.5 sm:mb-2">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star
                key={s}
                size={9}
                className="sm:w-2.5 sm:h-2.5 text-yellow-400 fill-yellow-400"
              />
            ))}
          </div>
          <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed line-clamp-3 group-hover:text-slate-900 transition-colors">
            "{data.quote}"
          </p>
        </div>
      </div>

      {/* Footer: Growth Metric & CTA */}
      <div className="relative z-10 pt-3 sm:pt-3.5 border-t border-gray-100 flex items-center justify-between mt-auto">
        <div className="bg-green-50 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md sm:rounded-lg border border-green-100 inline-flex items-center gap-1 sm:gap-1.5">
          <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-[9px] sm:text-[10px] md:text-xs font-semibold text-green-700">
            {data.growth}
          </span>
        </div>

        <button className="flex items-center gap-0.5 sm:gap-1 text-[9px] sm:text-[10px] md:text-xs font-semibold text-purple-600 group-hover:gap-1 sm:group-hover:gap-1.5 transition-all cursor-pointer">
          Start Selling <ArrowRight size={10} className="sm:w-3 sm:h-3" />
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
