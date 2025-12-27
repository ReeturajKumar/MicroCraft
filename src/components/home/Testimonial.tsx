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
    <section className="relative w-full bg-[#FAFAFA] py-5 md:py-24 overflow-hidden font-sans">
      {/* --- BACKGROUND ATMOSPHERE --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        <div className="absolute top-[10%] left-[50%] -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-r from-purple-200/30 via-pink-200/30 to-blue-200/30 blur-[80px] rounded-full mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-4 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-purple-100 shadow-sm mb-4"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-5 h-5 rounded-full bg-gray-200 border-2 border-white overflow-hidden"
                  >
                    <img
                      src={`https://i.pravatar.cc/100?img=${i + 10}`}
                      alt="user"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-purple-900">
                Join 15,000+ Founders
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight"
            >
              What our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500">
                Customers Say
              </span>
            </motion.h2>
          </div>

          <div className="hidden md:block">
            <button className="group flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-full text-sm font-semibold text-slate-900 shadow-sm hover:shadow-md hover:border-purple-200 transition-all cursor-pointer">
              <span>Read all success stories</span>
              <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-purple-100 group-hover:text-purple-600 transition-colors">
                <ArrowRight size={12} />
              </div>
            </button>
          </div>
        </div>

        {/* --- INFINITE MARQUEE --- */}
        {/* We use a mask to fade the edges */}
        <div className="relative w-[100vw] left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] overflow-hidden mask-gradient">
          <div className="flex w-max gap-6 scroll-track px-4 md:px-6">
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
    <div className="group relative w-[340px] md:w-[380px] bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_40px_-8px_rgba(168,85,247,0.15)] transition-all duration-500 cursor-default hover:-translate-y-1 flex flex-col justify-between">
      {/* Decorative Gradient Border on Hover */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-purple-100 transition-colors duration-500 pointer-events-none"></div>

      {/* Background Quote Icon */}
      <div className="absolute top-4 right-6 text-gray-100 group-hover:text-purple-50 transition-colors duration-500 transform group-hover:scale-105 group-hover:rotate-6 pointer-events-none">
        <Quote size={60} fill="currentColor" />
      </div>

      <div>
        {/* Header: User & Growth Badge */}
        <div className="relative z-10 flex items-start justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-11 h-11 rounded-full p-[2px] bg-gradient-to-br from-purple-500 to-pink-500">
                <img
                  src={data.image}
                  alt={data.name}
                  className="w-full h-full rounded-full object-cover border-2 border-white"
                />
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 bg-white p-0.5 rounded-full shadow-sm">
                <div className="bg-blue-500 rounded-full p-0.5">
                  <CheckCircle2 size={8} className="text-white" />
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 text-base leading-tight">
                {data.name}
              </h3>
              <p className="text-xs text-slate-500 font-medium mt-0.5">
                {data.role}
              </p>
            </div>
          </div>
        </div>

        {/* The Quote (Serif for Classic feel) */}
        <div className="relative z-10 mb-6 min-h-[100px]">
          <div className="flex gap-0.5 mb-2.5">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star
                key={s}
                size={12}
                className="text-yellow-400 fill-yellow-400"
              />
            ))}
          </div>
          <p className="text-base text-slate-700 font-serif leading-relaxed line-clamp-4 group-hover:text-slate-900 transition-colors">
            "{data.quote}"
          </p>
        </div>
      </div>

      {/* Footer: Growth Metric & CTA */}
      <div className="relative z-10 pt-5 border-t border-gray-100 flex items-center justify-between mt-auto">
        <div className="bg-green-50 px-2.5 py-1 rounded-lg border border-green-100 inline-flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-xs font-semibold text-green-700">
            {data.growth}
          </span>
        </div>

        <button className="flex items-center gap-1.5 text-xs font-semibold text-purple-600 group-hover:gap-2 transition-all cursor-pointer">
          Start Selling <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
