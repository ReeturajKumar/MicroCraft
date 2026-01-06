"use client";

import { ArrowRight, Database, LayoutTemplate } from "lucide-react";

/**
 * SIMPLE START COMPONENT
 * "Simple to start, easy to scale" section.
 * Features: Integrations (Data Stack) and Templates.
 */

const integrations = [
  { name: "Snowflake", icon: "/assets/logos/snowflake.svg" },
  { name: "BigQuery", icon: "/assets/logos/bigquery.svg" },
  { name: "Redshift", icon: "/assets/logos/redshift.svg" },
  { name: "Databricks", icon: "/assets/logos/databricks.svg" },
  { name: "Segment", icon: "/assets/logos/segment.svg" },
  { name: "Census", icon: "/assets/logos/census.svg" },
];

const templates = [
  { title: "Company KPIs", color: "bg-purple-100", icon: "KP" },
  { title: "Product Benchmarks", color: "bg-teal-100", icon: "PB" },
  { title: "Retention Analysis", color: "bg-orange-100", icon: "RA" },
];

export function SimpleStart() {
  return (
    <section className="w-full bg-white py-24 font-sans border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-20 max-w-3xl">
           <h2 className="text-[48px] lg:text-[64px] leading-[1] font-medium text-[#1F2023] tracking-tight mb-6">
             Simple to start, <br className="hidden lg:block" />
             easy to scale.
           </h2>
           <p className="text-[20px] leading-[1.6] text-[#3F3F46]">
             Whether you have a modern data stack or just a CSV, Mixpanel works with what you have. Start fast with templates and scale as you grow.
           </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Card 1: Integrations */}
            <div className="group relative bg-[#F9F9FA] rounded-[32px] p-10 lg:p-12 transition-all hover:bg-[#F4F4F5] flex flex-col justify-between overflow-hidden">
                <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6">
                        <Database className="w-6 h-6 text-[#7856FF]" />
                    </div>
                    <h3 className="text-[32px] font-bold text-[#1F2023] mb-4 tracking-tight">Connect your data</h3>
                    <p className="text-[18px] text-[#3F3F46] max-w-md mb-12">
                        Don't start from scratch. Connect your warehouse or CDP and get answers in minutes.
                    </p>
                    <button className="inline-flex items-center font-bold text-[#7856FF] hover:text-[#5E3BEE] transition-colors">
                        View all 100+ integrations <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                </div>

                {/* Integration Logos Grid Visual */}
                <div className="mt-12 w-full">
                    <div className="grid grid-cols-3 gap-4">
                        {integrations.map((item, i) => (
                             <div key={i} className="bg-white rounded-xl h-20 flex items-center justify-center shadow-sm border border-gray-100 hover:scale-105 transition-transform">
                                {/* Using text fallback for now, ideally SVGs */}
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{item.name}</span>
                             </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Card 2: Templates */}
            <div className="group relative bg-[#1F2023] rounded-[32px] p-10 lg:p-12 transition-all hover:shadow-2xl hover:shadow-purple-900/20 flex flex-col justify-between overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-900/30 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                <div className="relative z-10 text-white">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 backdrop-blur-md">
                        <LayoutTemplate className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-[32px] font-bold text-white mb-4 tracking-tight">Start with a template</h3>
                    <p className="text-[18px] text-gray-400 max-w-md mb-12">
                        Get to insights faster with pre-built boards for every use case.
                    </p>
                    <button className="inline-flex items-center font-bold text-white hover:text-purple-300 transition-colors">
                        Explore Templates <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                </div>

                 {/* Templates Stack Visual */}
                 <div className="mt-12 relative h-[200px] w-full flex justify-center items-end">
                      {templates.map((tpl, idx) => (
                          <div 
                            key={idx} 
                            style={{ 
                                zIndex: idx, 
                                transform: `translateY(${idx * -15}px) scale(${1 - (templates.length - 1 - idx) * 0.05})`,
                                opacity: 1 - (templates.length - 1 - idx) * 0.2
                            }}
                            className="absolute bottom-0 w-[80%] bg-white rounded-t-2xl shadow-lg border border-gray-200 p-6 pb-20"
                          >
                               <div className="flex items-center gap-3 mb-4">
                                   <div className={`w-8 h-8 rounded-lg ${tpl.color} flex items-center justify-center text-[10px] font-bold`}>
                                       {tpl.icon}
                                   </div>
                                   <div className="text-sm font-bold text-gray-900">{tpl.title}</div>
                               </div>
                               <div className="space-y-2">
                                   <div className="h-2 w-full bg-gray-100 rounded-full"></div>
                                   <div className="h-2 w-2/3 bg-gray-100 rounded-full"></div>
                               </div>
                          </div>
                      ))}
                 </div>
            </div>

        </div>
      </div>
    </section>
  );
}
