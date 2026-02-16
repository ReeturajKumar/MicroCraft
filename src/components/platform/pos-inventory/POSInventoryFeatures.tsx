import { motion } from "framer-motion";
import { TrendingUp, BarChart3, PieChart, Activity, Wallet } from "lucide-react";

/**
 * POSInventoryFeatures Component
 * Recreated based on the user-provided "Powerful Features" design image.
 * Adapted to MicroKraft's green/slate theme.
 */

const FeatureCard = ({ icon: Icon, title, description, visualization, className = "" }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`bg-white rounded-[24px] p-6 border border-slate-100 hover:border-slate-200 hover:shadow-md hover:shadow-violet-500/5 transition-all duration-500 group ${className}`}
  >
    <div className="flex flex-col h-full">
      {/* Visualization Area */}
      <div className="flex-1 min-h-[160px] bg-slate-50/50 rounded-xl mb-6 flex items-center justify-center p-4 overflow-hidden">
        {visualization}
      </div>

      {/* Content */}
      <div className="flex items-center gap-2.5 mb-3">
        <div className="w-7 h-7 rounded-lg bg-violet-50 flex items-center justify-center text-violet-600">
          <Icon className="w-3.5 h-3.5" />
        </div>
        <h3 className="text-lg font-bold text-[#0F172A] leading-tight">{title}</h3>
      </div>
      <p className="text-xs text-slate-500 font-medium leading-relaxed line-clamp-2">
        {description}
      </p>
    </div>
  </motion.div>
);

const POSInventoryFeatures = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-8xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-end justify-between gap-8 mb-10">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#0F172A] tracking-tight leading-[1.1]"
            >
              Powerful Features to Streamline <br className="hidden md:block" />
              Your Sales Process
            </motion.h2>
          </div>
          
          <div className="max-w-md mb-2">
            <motion.p 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-sm text-slate-500 font-medium leading-relaxed"
            >
              Harness the power of real-time data to optimize every transaction and inventory movement across your entire enterprise.
            </motion.p>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          
          {/* Sales Overview - Half Width */}
          <FeatureCard
            icon={TrendingUp}
            title="Sales Overview"
            description="Track overall sales performance and monitor progress towards targets in real-time."
            className="md:col-span-3"
            visualization={
              <div className="relative w-full max-w-[180px]">
                {/* Semi-circular Gauge */}
                <svg viewBox="0 0 200 120" className="w-full">
                  <path
                    d="M20 100 A 80 80 0 0 1 180 100"
                    fill="none"
                    stroke="#F1F5F9"
                    strokeWidth="18"
                    strokeLinecap="round"
                  />
                  <motion.path
                    initial={{ strokeDasharray: "0 1000" }}
                    whileInView={{ strokeDasharray: "180 1000" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    d="M20 100 A 80 80 0 0 1 180 100"
                    fill="none"
                    stroke="#8B5CF6"
                    strokeWidth="18"
                    strokeLinecap="round"
                    strokeDashoffset="0"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-end pb-1">
                  <span className="text-3xl font-black text-[#0F172A] tracking-tighter">67.2%</span>
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Sales Goal</span>
                </div>
              </div>
            }
          />

          {/* Engagement Rate - Half Width */}
          <FeatureCard
            icon={BarChart3}
            title="Engagement Rate"
            description="Measure how engaged your audience is with your products and content tracking."
            className="md:col-span-3"
            visualization={
              <div className="w-full flex items-end justify-between gap-1 h-24 relative px-2">
                {[40, 60, 30, 80, 50, 45, 95, 70, 65, 55, 40, 60].map((h, i) => (
                  <div key={i} className="flex-1 bg-slate-200/50 rounded-full relative overflow-hidden h-full max-w-[8px]">
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05, duration: 0.8 }}
                      className={`absolute bottom-0 w-full rounded-full ${i === 6 ? 'bg-violet-600' : 'bg-slate-300'}`}
                    />
                  </div>
                ))}
              </div>
            }
          />

          {/* Product Analytics - 1/3 Width */}
          <FeatureCard
            icon={PieChart}
            title="Product Analytics"
            description="Analyze product performance by tracking visit frequency and engagement."
            className="md:col-span-2"
            visualization={
              <div className="grid grid-cols-4 gap-1.5 w-full max-w-[120px]">
                {Array.from({ length: 16 }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03 }}
                    className="aspect-square rounded-[4px]"
                    style={{ 
                      backgroundColor: i % 3 === 0 ? '#7C3AED' : i % 5 === 0 ? '#A78BFA' : i % 2 === 0 ? '#DDD6FE' : '#f8fafc',
                      opacity: 0.3 + (Math.random() * 0.7)
                    }}
                  />
                ))}
              </div>
            }
          />

          {/* Growth - 1/3 Width */}
          <FeatureCard
            icon={TrendingUp}
            title="Growth"
            description="Monitor the growth of your sales and product interest over periods."
            className="md:col-span-2"
            visualization={
              <div className="relative w-24 h-24">
                <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                  <circle cx="50" cy="50" r="40" fill="transparent" stroke="#F1F5F9" strokeWidth="10" />
                  <motion.circle
                    initial={{ strokeDashoffset: 251 }}
                    whileInView={{ strokeDashoffset: 125 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    cx="50" cy="50" r="40"
                    fill="transparent"
                    stroke="#8B5CF6"
                    strokeWidth="10"
                    strokeDasharray="251"
                    strokeDashoffset="125"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-lg font-black text-[#0F172A]">+32%</span>
                  <span className="text-[7.5px] font-bold text-slate-400 uppercase">Weekly</span>
                </div>
              </div>
            }
          />

          {/* Balance Overview - 1/3 Width */}
          <FeatureCard
            icon={Wallet}
            title="Balance Overview"
            description="Get valuable insights into your website balance and settlements."
            className="md:col-span-2"
            visualization={
              <div className="w-full space-y-2">
                <div className="bg-white border border-slate-100 p-2.5 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-slate-900 flex items-center justify-center text-white">
                      <Wallet className="w-3 h-3" />
                    </div>
                    <div>
                      <p className="text-[7px] font-bold text-slate-400 uppercase tracking-widest">Available</p>
                      <p className="text-xs font-bold text-[#0F172A]">$27,980.24</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-slate-100 p-2.5 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-violet-600 flex items-center justify-center text-white">
                      <Activity className="w-3 h-3" />
                    </div>
                    <div>
                      <p className="text-[7px] font-bold text-slate-400 uppercase tracking-widest">Pending</p>
                      <p className="text-xs font-bold text-[#0F172A]">$12,450.00</p>
                    </div>
                  </div>
                </div>
              </div>
            }
          />

        </div>
      </div>
    </section>
  );
};


export default POSInventoryFeatures;
