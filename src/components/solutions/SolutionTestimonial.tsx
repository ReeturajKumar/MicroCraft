import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const SolutionTestimonial = () => {
    return (
        <section className="w-full bg-white py-24 border-y border-slate-50">
            <div className="max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
                
                {/* Logo Area */}
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 mb-12"
                >
                    <div className="flex items-center gap-1.5">
                        <div className="relative w-6 h-6 flex items-center justify-center">
                            <div className="absolute inset-0 bg-[#0070E0] rounded-sm transform rotate-45" />
                            <div className="absolute inset-1 bg-white rounded-sm transform rotate-45" />
                            <div className="absolute top-[20%] left-[20%] right-[20%] bottom-[20%] bg-[#0070E0] rounded-full" />
                        </div>
                        <span className="text-[26px] font-black text-[#0070E0] tracking-tighter">immobiliare.it</span>
                    </div>
                </motion.div>

                {/* Quote */}
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-[28px] md:text-[34px] lg:text-[40px] font-bold text-slate-900 leading-[1.2] tracking-tight mb-10 max-w-4xl"
                >
                    "MicroCraft is a gold mine. It is a must-have for organizations developing data-informed cultures. It allows our team to work from one data source, speak the same language, and see clearly what makes sense to build—and especially what doesn't."
                </motion.h2>

                {/* Author Info */}
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-3 mb-12 text-[14px] font-bold"
                >
                    <span className="text-slate-900">Paolo Sabatinelli</span>
                    <span className="text-slate-300">—</span>
                    <span className="text-slate-400">Chief Product Officer</span>
                </motion.div>

                {/* CTA Button */}
                <motion.button 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="px-8 py-3.5 bg-slate-50 hover:bg-slate-100 text-slate-900 rounded-full font-bold text-[14px] transition-all flex items-center gap-2 border border-slate-100 shadow-sm"
                >
                    Read Case Study <ChevronRight className="w-4 h-4 ml-1" />
                </motion.button>

            </div>
        </section>
    );
};

export default SolutionTestimonial;
