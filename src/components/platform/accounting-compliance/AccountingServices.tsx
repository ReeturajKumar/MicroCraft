import React from "react";
import { motion } from "framer-motion";
import { 
  FileText, 
  Wallet, 
  PieChart, 
  Key, 
  Briefcase, 
  ShieldCheck, 
  Settings, 
  Users, 
  Calculator, 
  Banknote, 
  Scroll,
  ArrowRight
} from "lucide-react";

const services = {
  individuals: [
    {
      title: "Personal Tax Filing & Planning",
      desc: "Seamlessly file individual returns with AI-driven tax optimization that identifies every eligible deduction and credit automatically.",
      icon: <Wallet className="w-6 h-6 text-[#D13E89]" />,
    },
    {
      title: "Wealth & Budget Management",
      desc: "Real-time tracking of assets and spending patterns to help you build long-term wealth with automated, intelligent budgeting tools.",
      icon: <FileText className="w-6 h-6 text-[#D13E89]" />,
    },
    {
      title: "Investment Portfolio Analysis",
      desc: "Comprehensive performance auditing for your stocks, crypto, and real estate, ensuring full compliance for all capital gains.",
      icon: <PieChart className="w-6 h-6 text-[#D13E89]" />,
    },
    {
      title: "Retirement & Estate Planning",
      desc: "Strategize your future with intelligent forecasting that secures your legacy while optimizing long-term inheritance tax liabilities.",
      icon: <Key className="w-6 h-6 text-[#D13E89]" />,
    },
    {
      title: "Freelance & Small Business Accounting",
      desc: "Tailored bookkeeping for independent professionals, simplifying complex expense tracking and quarterly tax estimations.",
      icon: <Briefcase className="w-6 h-6 text-[#D13E89]" />,
    },
  ],
  corporate: [
    {
      title: "Financial Auditing & Compliance",
      desc: "Maintain constant financial health with automated audit trails and real-time checks against the latest regulatory standards.",
      icon: <ShieldCheck className="w-6 h-6 text-[#D13E89]" />,
    },
    {
      title: "ERP & Software Integration",
      desc: "Connect your entire tech stack—from CRM to HRIS—into a unified, real-time financial ledger with no manual entry required.",
      icon: <Settings className="w-6 h-6 text-[#D13E89]" />,
    },
    {
      title: "CFO & Controller Services",
      desc: "Get high-level financial strategy and risk management powered by AI predictive analytics to guide your business growth.",
      icon: <Users className="w-6 h-6 text-[#D13E89]" />,
    },
    {
      title: "Bookkeeping & Reporting",
      desc: "Instant generation of P&L statements, balance sheets, and cash flow reports that are investor-ready at any moment.",
      icon: <Calculator className="w-6 h-6 text-[#D13E89]" />,
    },
    {
      title: "Payroll Services",
      desc: "Automated global payroll processing with localized tax compliance and multi-currency support for your distributed team.",
      icon: <Banknote className="w-6 h-6 text-[#D13E89]" />,
    },
    {
      title: "Corporate Tax Strategy & Filing",
      desc: "Complex multi-entity tax structuring and filing, optimized for maximum operational efficiency and minimal tax leakage.",
      icon: <Scroll className="w-6 h-6 text-[#D13E89]" />,
    },
  ]
};

const AccountingServices = () => {
  return (
    <section className=" py-15 relative overflow-hidden font-sans">
      {/* Abstract 3D Shapes (Simulated with CSS) */}
      <div className="absolute top-20 right-[5%] w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl rotate-12 blur-[1px] opacity-20 hidden lg:block shadow-2xl" />
      <div className="absolute bottom-40 left-[-2%] w-48 h-48 bg-pink-400 rounded-full blur-[60px] opacity-20" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-20 relative z-10">
        
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
             <div className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center rotate-12">
                <FileText className="text-[#D13E89] w-6 h-6" />
             </div>
             <div>
                <span className="block text-[14px] font-bold text-[#D13E89] opacity-60 uppercase tracking-widest">We are Dealing</span>
                <h2 className="text-[42px] font-black text-[#1F1F1F] leading-none">Our Services</h2>
             </div>
          </div>
        </div>

        {/* INDIVIDUALS SECTION */}
        <div className="relative mb-32">
          {/* Connector System - Desktop Only */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none">
            {/* From Pill to Card 1 */}
            <svg className="absolute w-full h-full">
               {/* Vertical line from pill down to row 2 */}
               <motion.path 
                 d="M 120 40 L 120 280" 
                 stroke="#D13E89" 
                 strokeWidth="1.5" 
                 fill="none" 
                 initial={{ pathLength: 0 }}
                 whileInView={{ pathLength: 1 }}
                 viewport={{ once: true }}
               />
               {/* Horizontal to Card 1 */}
               <motion.path 
                 d="M 120 40 L 350 40" 
                 stroke="#D13E89" 
                 strokeWidth="1.5" 
                 fill="none" 
                 initial={{ pathLength: 0 }}
                 whileInView={{ pathLength: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.2 }}
               />
               {/* Horizontal from Card 1 to 2 */}
               <motion.path 
                 d="M 670 40 L 740 40" 
                 stroke="#D13E89" 
                 strokeWidth="1.5" 
                 fill="none" 
                 initial={{ pathLength: 0 }}
                 whileInView={{ pathLength: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.4 }}
               />
               {/* Horizontal from main line to Card 3 */}
               <motion.path 
                 d="M 120 280 L 180 280" 
                 stroke="#D13E89" 
                 strokeWidth="1.5" 
                 fill="none" 
                 initial={{ pathLength: 0 }}
                 whileInView={{ pathLength: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.6 }}
               />
               {/* Horizontal from Card 3 to 4 */}
               <motion.path 
                 d="M 500 280 L 570 280" 
                 stroke="#D13E89" 
                 strokeWidth="1.5" 
                 fill="none" 
                 initial={{ pathLength: 0 }}
                 whileInView={{ pathLength: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.8 }}
               />
               {/* Horizontal from Card 4 to 5 */}
               <motion.path 
                 d="M 890 280 L 960 280" 
                 stroke="#D13E89" 
                 strokeWidth="1.5" 
                 fill="none" 
                 initial={{ pathLength: 0 }}
                 whileInView={{ pathLength: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: 1.0 }}
               />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
            {/* Pill */}
            <div className="lg:h-[80px] flex items-center">
               <div className="bg-[#D13E89] text-white px-8 py-3 rounded-full font-bold text-[15px] shadow-xl inline-block relative z-20 whitespace-nowrap">
                  For Individuals:
               </div>
            </div>

            {services.individuals.slice(0, 2).map((item, idx) => (
              <ServiceCard key={idx} {...item} />
            ))}
            
            {services.individuals.slice(2).map((item, idx) => (
              <ServiceCard key={idx + 2} {...item} />
            ))}
          </div>
        </div>

        {/* CORPORATE SECTION */}
        <div className="relative">
          {/* Connector System - Desktop Only */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none">
            <svg className="absolute w-full h-full">
               {/* Vertical line from pill down to row 1 & row 2 */}
               <motion.path 
                 d="M 120 -40 L 120 400" 
                 stroke="#D13E89" 
                 strokeWidth="1.5" 
                 fill="none" 
                 initial={{ pathLength: 0 }}
                 whileInView={{ pathLength: 1 }}
                 viewport={{ once: true }}
               />
               {/* Horizontal to Card 6 */}
               <motion.path 
                 d="M 120 80 L 180 80" 
                 stroke="#D13E89" 
                 strokeWidth="1.5" 
                 fill="none" 
                 initial={{ pathLength: 0 }}
                 whileInView={{ pathLength: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.2 }}
               />
               {/* Horizontal from 6 to 7 */}
               <motion.path 
                 d="M 500 80 L 570 80" 
                 stroke="#D13E89" 
                 strokeWidth="1.5" 
                 fill="none" 
                 initial={{ pathLength: 0 }}
                 whileInView={{ pathLength: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.4 }}
               />
               {/* Horizontal from 7 to 8 */}
               <motion.path 
                 d="M 890 80 L 960 80" 
                 stroke="#D13E89" 
                 strokeWidth="1.5" 
                 fill="none" 
                 initial={{ pathLength: 0 }}
                 whileInView={{ pathLength: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.6 }}
               />
               
               {/* Horizontal to Card 9 */}
               <motion.path 
                 d="M 120 400 L 180 400" 
                 stroke="#D13E89" 
                 strokeWidth="1.5" 
                 fill="none" 
                 initial={{ pathLength: 0 }}
                 whileInView={{ pathLength: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.8 }}
               />
               {/* Horizontal from 9 to 10 */}
               <motion.path 
                 d="M 500 400 L 570 400" 
                 stroke="#D13E89" 
                 strokeWidth="1.5" 
                 fill="none" 
                 initial={{ pathLength: 0 }}
                 whileInView={{ pathLength: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: 1.0 }}
               />
               {/* Horizontal from 10 to 11 */}
               <motion.path 
                 d="M 890 400 L 960 400" 
                 stroke="#D13E89" 
                 strokeWidth="1.5" 
                 fill="none" 
                 initial={{ pathLength: 0 }}
                 whileInView={{ pathLength: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: 1.2 }}
               />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
            {/* Pill */}
            <div className="lg:h-[0px] flex items-center mb-12 lg:mb-20">
               <div className="bg-[#D13E89] text-white px-8 py-3 rounded-full font-bold text-[15px] shadow-xl inline-block relative z-20 whitespace-nowrap">
                  For Corporate
               </div>
            </div>
            {/* Empty spaces to align with pill structure if needed, 
                but based on image Corporate Pill is centered above its grid */}
            <div className="hidden lg:block"></div>
            <div className="hidden lg:block"></div>

            {services.corporate.map((item, idx) => (
              <ServiceCard key={idx} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ title, desc, icon }: { title: string, desc: string, icon: React.ReactNode }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    className="bg-white p-10 rounded-[40px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] border border-white relative z-20 group"
  >
    <div className="mb-6 flex flex-col gap-4">
       <div className="w-12 h-12 bg-[#FAF5F7] rounded-2xl flex items-center justify-center transition-transform group-hover:rotate-12 group-hover:scale-110">
          {icon}
       </div>
       <h3 className="text-[20px] font-black text-[#1F1F1F] leading-tight pr-6">{title}</h3>
    </div>
    <div className="w-full h-px bg-slate-100 mb-6" />
    <p className="text-[14px] text-slate-400 font-medium leading-[1.7] mb-8">
       {desc}
    </p>
    <button className="flex items-center gap-2 text-[#D13E89] font-bold text-[14px] group/btn">
       Learn More <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform" />
    </button>
  </motion.div>
);

export default AccountingServices;
