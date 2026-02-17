import { motion } from "framer-motion";
import { ArrowUpRight, ClipboardList, Map, Users, Zap, Calendar, BarChart3 } from "lucide-react";

const services = [
  {
    title: "Project\nManagement",
    bg: "bg-gradient-to-br from-indigo-100/80 to-white",
    titleBg: "bg-indigo-600",
    titleText: "text-white",
    arrowBg: "bg-indigo-600",
    arrowText: "text-slate-700",
    arrowIcon: "text-white",
    Icon: ClipboardList,
    iconColor: "text-indigo-600",
  },
  {
    title: "Product\nRoadmaps",
    bg: "bg-gradient-to-br from-blue-100/80 to-white",
    titleBg: "bg-blue-600",
    titleText: "text-white",
    arrowBg: "bg-blue-600",
    arrowText: "text-slate-700",
    arrowIcon: "text-white",
    Icon: Map,
    iconColor: "text-blue-600",
  },
  {
    title: "Team\nCollaboration",
    bg: "bg-gradient-to-br from-slate-200/80 to-white",
    titleBg: "bg-slate-900",
    titleText: "text-white",
    arrowBg: "bg-slate-800",
    arrowText: "text-slate-700",
    arrowIcon: "text-white",
    Icon: Users,
    iconColor: "text-slate-500",
  },
  {
    title: "Automated\nWorkflows",
    bg: "bg-gradient-to-br from-emerald-100/80 to-white",
    titleBg: "bg-emerald-600",
    titleText: "text-white",
    arrowBg: "bg-emerald-600",
    arrowText: "text-slate-700",
    arrowIcon: "text-white",
    Icon: Zap,
    iconColor: "text-emerald-600",
  },
  {
    title: "Resource\nPlanning",
    bg: "bg-gradient-to-br from-violet-100/80 to-white",
    titleBg: "bg-violet-600",
    titleText: "text-white",
    arrowBg: "bg-violet-600",
    arrowText: "text-slate-700",
    arrowIcon: "text-white",
    Icon: Calendar,
    iconColor: "text-violet-600",
  },
  {
    title: "Analytics &\nReporting",
    bg: "bg-gradient-to-br from-indigo-200/80 to-white",
    titleBg: "bg-indigo-700",
    titleText: "text-white",
    arrowBg: "bg-indigo-700",
    arrowText: "text-slate-700",
    arrowIcon: "text-white",
    Icon: BarChart3,
    iconColor: "text-indigo-700",
  }
];

const ProductServices = () => {
  return (
    <section className="py-8 md:py-12 bg-white overflow-hidden">
      <div className="max-w-8xl mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Section Header */}
        <div className="flex flex-col gap-4 mb-12">
          <div className="bg-indigo-600 px-4 py-1.5 rounded-[8px] w-fit">
            <h2 className="text-[24px] md:text-[32px] font-bold text-white tracking-tight">Platform Capabilities</h2>
          </div>
          <p className="text-slate-600 text-[16px] md:text-[18px] max-w-2xl leading-relaxed">
            Everything your team needs to conceptualize, build, and iterate in one unified environment. Powerful tools engineered for the modern product lifecycle.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`${service.bg} rounded-[16px] p-5 md:p-6 border-2 border-slate-200 flex flex-col relative min-h-[160px] md:min-h-[180px] overflow-hidden`}
            >
              <div className="absolute right-4 top-1/3 -translate-y-1/2 opacity-30 pointer-events-none">
                 <service.Icon className={`w-28 h-28 ${service.iconColor}`} strokeWidth={1} />
              </div>

              {/* Content Container */}
              <div className="flex flex-col flex-1 relative z-10 w-full justify-between">
                <div className="flex flex-col items-start gap-1">
                  {service.title.split('\n').map((line, i) => (
                    <span 
                      key={i} 
                      className={`${service.titleBg} px-2 py-0.5 text-[18px] md:text-[20px] font-bold ${service.titleText} rounded-[4px] leading-tight block`}
                    >
                      {line}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-end mt-4">
                  <div className="flex items-center gap-2 group cursor-pointer hover:opacity-80 transition-opacity">
                    <span className={`text-[14px] md:text-[15px] font-bold ${service.arrowText} group-hover:text-indigo-400 transition-colors`}>View Feature</span>
                    <div className={`w-8 h-8 rounded-full ${service.arrowBg} flex items-center justify-center transition-transform group-hover:rotate-45 shadow-sm`}>
                      <ArrowUpRight className={`w-4 h-4 ${service.arrowIcon}`} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductServices;
