import { motion } from "framer-motion";
import { Sparkles, Layers, Wrench, Shield } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  index: number;
  className?: string;
}

const ServiceCard = ({ title, description, index, className = "" }: ServiceCardProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    className={`relative overflow-hidden p-10 rounded-[2.5rem] flex flex-col items-center justify-center text-center shadow-2xl border border-white/5 ${className}`}
  >
    {/* Elegant Dark Purple Matte Background */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#7A69A5] to-[#4A3D6D] pointer-events-none opacity-90"></div>
    
    {/* Content */}
    <div className="relative z-10 flex flex-col items-center">
      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white mb-8 border border-white/10">
        <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-sm">
          <div className="w-2.5 h-1.25 border-b-2 border-r-2 border-[#4A3D6D] rotate-45 mb-[1px]"></div>
        </div>
      </div>
      
      <div className="space-y-4 max-w-[90%]">
        <h3 className="text-3xl font-bold text-white tracking-tight leading-tight">{title}</h3>
        <p className="text-white/60 text-lg leading-relaxed font-medium">
          {description}
        </p>
      </div>
    </div>
  </motion.div>
);

const IndustryServices = () => {
  const services = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "AI-Native Operations",
      description: "Automate complex industrial workflows with our proprietary AI core, designed for precision and scale.",
      className: "md:col-span-8 h-[320px]",
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Unified Commerce",
      description: "Seamlessly integrate production metrics with global market demand.",
      className: "md:col-span-4 h-[320px]",
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Predictive Analytics",
      description: "Turn raw data into actionable insights with real-time forecasting.",
      className: "md:col-span-4 h-[320px]",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Governance",
      description: "Maintain absolute control with advanced security protocols and industry-standard compliance.",
      className: "md:col-span-8 h-[320px]",
    },
  ];

  return (
    <section className="w-full py-32 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-3xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold text-[#1A1A1A] tracking-tight leading-[0.95]"
            >
              Vertical Excellence <br />
              <span className="text-[#7856FF]">Redefined by AI.</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-500 font-medium max-w-sm mb-2"
          >
            Revolutionizing how industries operate with real-time intelligence and AI-native architecture.
          </motion.p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              index={index}
              title={service.title}
              description={service.description}
              className={service.className}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default IndustryServices;
