"use client";
import React from "react";
import { motion } from "motion/react";

interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div
                  className="group p-8 rounded-2xl border-2 border-purple-300/30 bg-purple-900/20 backdrop-blur-md hover:border-purple-300/50 hover:bg-purple-900/30 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 max-w-xs w-full"
                  key={i}
                >
                  {/* Inner glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 via-transparent to-transparent rounded-2xl pointer-events-none"></div>
                  
                  <div className="text-white/90 text-sm leading-relaxed mb-6 relative z-10">
                    "{text}"
                  </div>
                  <div className="flex items-center gap-3 pt-4 border-t border-purple-300/20 relative z-10">
                    <div className="relative">
                      <img
                        width={40}
                        height={40}
                        src={image}
                        alt={name}
                        className="h-10 w-10 rounded-full object-cover ring-2 ring-purple-400/50"
                      />
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-purple-500 rounded-full border-2 border-white flex items-center justify-center">
                        <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <div className="font-semibold text-white tracking-tight leading-5">
                        {name}
                      </div>
                      <div className="text-sm text-purple-200/80 tracking-tight leading-5">
                        {role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
