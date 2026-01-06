"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface GalleryItem {
  id: string;
  title: string;
  summary: string;
  url: string;
  image: string;
}

interface Gallery6Props {
  heading?: string;
  demoUrl?: string;
  items?: GalleryItem[];
}

const Gallery6 = ({
  heading = "Featured Solutions",
  demoUrl = "#",
  items = [],
}: Gallery6Props) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    if (scrollRef.current) {
      setScrollWidth(scrollRef.current.scrollWidth - window.innerWidth);
    }
    const handleResize = () => {
      if (scrollRef.current) {
        setScrollWidth(scrollRef.current.scrollWidth - window.innerWidth);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [items]);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Calculate horizontal translation precisely based on actual content width
  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollWidth]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-white z-20">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-purple-50/20 to-transparent pointer-events-none" />
        
        {/* Header Section */}
        <div className="relative z-10 w-full mb-4 sm:mb-8 lg:mb-10">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-3">
                    <div className="flex-1">
                        <motion.span 
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="inline-block px-3 py-1 rounded-full bg-purple-50 text-purple-600 text-[10px] sm:text-[11px] font-bold uppercase tracking-widest mb-3"
                        >
                            Our Portfolio
                        </motion.span>
                        <motion.h2 
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-2xl sm:text-4xl lg:text-5xl font-medium text-gray-900 mb-3 sm:mb-5 tracking-tight"
                        >
                            {heading}
                        </motion.h2>
                        <motion.a
                            href={demoUrl}
                            className="group inline-flex items-center gap-2 text-xs sm:text-base font-medium text-gray-500 hover:text-purple-600 transition-all"
                        >
                            Explore Case Studies
                            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </motion.a>
                    </div>
                </div>
            </div>
        </div>

        {/* Horizontal Scrolling Cards Container */}
        <div className="relative z-10 flex items-center">
          <motion.div 
            ref={scrollRef}
            style={{ x }} 
            className="flex gap-6 sm:gap-10 lg:gap-12 px-[max(1rem,calc(50vw-640px))] 2xl:px-[max(1rem,calc(50vw-700px))]"
          >
            {items.map((item, index) => (
              <Card key={item.id} item={item} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Card = ({ item, index }: { item: GalleryItem; index: number }) => {
  return (
    <div
      className="group relative flex-shrink-0 w-[75vw] sm:w-[45vw] md:w-[320px] lg:w-[360px] cursor-pointer"
    >
      <div className="flex flex-col h-[340px] sm:h-[400px] lg:h-[440px] bg-white rounded-[1rem] sm:rounded-[1.25rem] border border-gray-100 shadow-sm overflow-hidden transition-all duration-500 hover:shadow-xl hover:border-purple-200 hover:-translate-y-1">
        {/* Image Area */}
        <div className="relative h-[50%] overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4 sm:top-5 sm:left-5">
            <div className="px-2 py-1 bg-black/40 backdrop-blur-sm rounded-md border border-white/20 text-white text-[8px] sm:text-[10px] font-black tracking-widest">
               CASE 0{index + 1}
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-5 sm:p-6 flex flex-col flex-1">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1.5 sm:mb-2 line-clamp-1 group-hover:text-purple-600 transition-colors">
            {item.title}
          </h3>
          <p className="text-gray-500 leading-relaxed line-clamp-2 sm:line-clamp-3 mb-3 sm:mb-4 text-xs sm:text-sm">
            {item.summary}
          </p>
          
          <div className="mt-auto flex items-center justify-between pt-3 border-t border-gray-50/50">
            <span className="text-[10px] sm:text-xs font-black text-gray-900 tracking-tight">
              PROD STUDY
            </span>
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-purple-600 transition-all duration-300 cursor-pointer">
                <ArrowRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-gray-400 group-hover:text-white transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Gallery6 };
