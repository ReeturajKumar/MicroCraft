import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ADVANTAGES = [
  {
    title: "Effortless Data Management:",
    description: "Simplify centralizing customer data for easy access, updates, and analysis, providing a comprehensive clientele overview.",
    image: "/Content (2).png",
  },
  {
    title: "Contact Management",
    description: "Easily organize and track all contacts in one place, with categorized and updated details for top-notch customer service.",
    image: "/Content (2).png", // Reusing for now, will adjust if needed
  },
  {
    title: "Enhanced Customer Insight",
    description: "Enhance customer understanding with a delving deeper into preferences and behavior to predict future trends.",
    image: "/Content (2).png", // Reusing for now
  }
];

const CRMVentureAdvantage = () => {
  return (
    <section className="w-full bg-white py-10 md:py-16 px-10 sm:px-6 lg:px-28">
      <div className="max-w-8xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-8 md:mb-12 gap-6 text-center md:text-left">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-3 tracking-tight"
            >
              The MicroKraft Advantage
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-sm sm:text-base text-slate-500 font-medium max-w-lg mx-auto md:mx-0"
            >
              Discover why leading businesses choose MicroKraft for their growth.
            </motion.p>
          </div>
          
          {/* Navigation Controls - Hidden on very small screens for better space */}
          <div className="hidden sm:flex items-center gap-3">
            <button className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-slate-50 transition-colors cursor-pointer">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 rounded-full border border-slate-900 flex items-center justify-center text-slate-900 bg-white hover:bg-slate-900 hover:text-white transition-all cursor-pointer shadow-sm">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {ADVANTAGES.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-[#F8F9FA] rounded-[24px] p-6 sm:p-8 flex flex-col h-full group hover:shadow-lg hover:shadow-slate-200/40 transition-all duration-300"
            >
              {/* Dashboard Visual Placeholder */}
              <div className="bg-white rounded-xl overflow-hidden mb-6 aspect-[4/3] flex items-start justify-center pt-5 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                <div className="w-[90%] bg-white rounded-t-lg overflow-hidden border border-slate-50">
                  {/* Browser Bar Mockup */}
                  <div className="h-5 bg-white flex items-center gap-1.5 px-3 border-b border-slate-50">
                    <div className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  </div>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-auto object-top"
                  />
                </div>
              </div>
              
              <div className="flex-grow">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CRMVentureAdvantage;
