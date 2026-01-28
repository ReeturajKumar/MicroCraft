import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const PlatformTestimonial = () => {
    return (
        <section className="w-full bg-[#fdfdfd] py-20 px-6 overflow-hidden">
            <div className="max-w-4xl mx-auto text-center">
                {/* Yelp Logo Recreation */}
                <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center items-center gap-2 mb-10"
                >
                    <div className="flex items-center gap-1">
                        <span className="text-[32px] font-black text-slate-900 tracking-tighter">yelp</span>
                        <svg className="w-8 h-8 text-[#D32323]" viewBox="0 0 24 24" fill="currentColor">
                           <path d="M12 11.2c-.4 0-.8.4-.8.8v8.8c0 .4.4.8.8.8.4 0 .8-.4.8-.8V12c0-.4-.4-.8-.8-.8zM11.1 9.9c.2.3.6.4.9.2l7.6-4.4c.3-.2.4-.6.2-.9s-.6-.4-.9-.2L11.3 9c-.3.2-.4.6-.2.9zM7.2 12.8c.4 0 .8-.4.8-.8V3.2c0-.4-.4-.8-.8-.8-.4 0-.8.4-.8.8V12c0 .4.4.8.8.8zM4.1 6.3c.3.2.7.1.9-.2l4.4-7.6c.2-.3.1-.7-.2-.9s-.7-.1-.9.2L3.9 5.4c-.2.3-.1.7.2.9zM19.9 6.3c-.3.2-.7.1-.9-.2l-4.4-7.6c-.2-.3-.1-.7.2-.9.3-.2.7-.1.9.2l4.4 7.6c.2.3.1.7-.2.9z" visibility="hidden"/>
                           <path d="M12 12l.6 5.8c.1.7.9.9 1.4.3l4-4.5c.5-.5.2-1.4-.5-1.5L12 12zM12 12l5.4-2.5c.7-.3.7-1.2.1-1.6l-5.3-3.2c-.6-.4-1.4.1-1.3.8L12 12zM12 12L6.6 9.5c-.7-.3-.7-1.2-.1-1.6l5.3-3.2c.6-.4 1.4.1 1.3.8L12 12zM12 12l-5.4 2.5c-.7.3-.7 1.2-.1 1.6l5.3 3.2c.6.4 1.4-.1 1.3-.8L12 12zM12 12l-.6-5.8c-.1-.7-.9-.9-1.4-.3l-4 4.5c-.5.5-.2 1.4.5 1.5L12 12z" />
                        </svg>
                    </div>
                </motion.div>

                {/* Quote */}
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-[28px] md:text-[36px] font-bold text-slate-800 leading-[1.3] mb-8 tracking-tight"
                >
                    &ldquo;MicroCraft is the &lsquo;intuition pump&rsquo; for our product team. It enables our product managers and designers to uncover and focus on larger opportunities for product discovery and improvement.&rdquo;
                </motion.h2>

                {/* Author */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col items-center mb-10"
                >
                    <p className="text-[14px] md:text-[16px] font-bold text-slate-800">
                        Angela Sun <span className="mx-2 text-slate-300">|</span> <span className="text-slate-500 font-medium tracking-tight">Sr. Product Manager</span>
                    </p>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <button className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-full text-[14px] font-bold transition-all flex items-center gap-1.5 mx-auto">
                        Read Case Study <ChevronRight className="w-4 h-4" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default PlatformTestimonial;
