import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import img1 from "../../../assets/Slack-logo.webp";
import img2 from "../../../assets/webflow.webp";
import img3 from "../../../assets/Trello.webp";
import img4 from "../../../assets/Asana_logo.webp";
import img5 from "../../../assets/Dribbble_logo_perple.webp";
import img6 from "../../../assets/Dropbox-logo.webp";
import img7 from "../../../assets/Intercom.webp";
import img8 from "../../../assets/Zendesk_logo.webp";
import img9 from "../../../assets/Stripe.webp";

const integrations = [
  {
    name: "Slack",
    description:
      "Sync communications and automate channel updates based on platform triggers.",
    icon: img1,
    category: "Communication",
    color: "#4A154B",
  },
  {
    name: "Webflow",
    description:
      "Pull real-time data from your dashboard directly into your Webflow CMS collections.",
    icon: img2,
    category: "Development",
    color: "#4353FF",
  },
  {
    name: "Trello",
    description:
      "Automatically create cards and move tasks through your pipeline from anywhere.",
    icon: img3,
    category: "Management",
    color: "#0079BF",
  },
  {
    name: "Asana",
    description:
      "Manage complex projects by syncing departmental milestones with external tasks.",
    icon: img4,
    category: "Management",
    color: "#F06595",
  },
  {
    name: "Dribbble",
    description:
      "Showcase your latest designs and track engagement metrics in one central place.",
    icon: img5,
    category: "Design",
    color: "#EA4C89",
  },
  {
    name: "Dropbox",
    description:
      "Securely store and retrieve documents directly within your customer folders.",
    icon: img6,
    category: "Storage",
    color: "#0061FF",
  },
  {
    name: "Intercom",
    description:
      "Connect your support chat history with CRM profiles for a unified customer view.",
    icon: img7,
    category: "Support",
    color: "#00E26B",
  },
  {
    name: "Zendesk",
    description:
      "High-performance ticketing sync for enterprise-level support operations.",
    icon: img8,
    category: "Support",
    color: "#03363D",
  },
  {
    name: "Stripe",
    description:
      "Manage subscriptions, payments, and financial auditing directly from your hub.",
    icon: img9,
    category: "Finance",
    color: "#635BFF",
  },
];

const IntegrationsGrid = () => {
  return (
    <section className="bg-white py-12 md:py-16 font-sans relative">
      {/* Soft Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-100/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[35%] h-[35%] bg-blue-100/30 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-8xl mx-auto px-5 sm:px-8 md:px-12 lg:px-20 relative z-10">
        {/* Direct Header Layout */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 sm:gap-8 lg:gap-12 mb-10 md:mb-12">
          <div className="max-w-2xl text-left">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[24px] sm:text-[30px] md:text-[36px] font-bold text-[#1A1A1A] mb-3 md:mb-4 tracking-tight leading-tight"
            >
              Native Integrations.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-500 text-[15px] sm:text-[16px] md:text-[18px] font-medium leading-relaxed max-w-lg"
            >
              Connect and synchronize your favorite tools to automate workflows
              across every department.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-full sm:w-auto shrink-0"
          >
            <button className="w-full sm:w-auto px-8 sm:px-10 py-4 bg-[#1A1A1A] text-white rounded-[16px] sm:rounded-[18px] font-black text-[15px] sm:text-[16px] hover:bg-[#7856FF] transition-all shadow-xl shadow-slate-100/50">
              Browse Marketplace (100+)
            </button>
          </motion.div>
        </div>

        {/* Grid - Responsive columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {integrations.map((app, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white p-6 sm:p-7 rounded-[20px] sm:rounded-[24px] border border-slate-100 transition-all duration-300 text-left flex flex-col hover:border-slate-200 hover:shadow-lg"
            >
              <div className="flex justify-between items-start mb-5 md:mb-6">
                {/* Icon Container */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white shadow-[0_4px_12px_rgba(0,0,0,0.05)] flex items-center justify-center p-2.5 sm:p-3 border border-slate-50">
                  <img
                    src={app.icon}
                    alt={app.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="flex flex-col items-end">
                  <div className="text-[9px] sm:text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1">
                    {app.category}
                  </div>
                  <div
                    className="w-8 h-1 rounded-full"
                    style={{ backgroundColor: app.color }}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-[18px] sm:text-[20px] font-black text-[#1A1A1A] tracking-tight">
                    {app.name}
                  </h3>
                </div>
                <p className="text-slate-500 text-[14px] sm:text-[15px] leading-relaxed font-medium">
                  {app.description}
                </p>
              </div>

              {/* Action Link */}
              <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-slate-50 flex items-center justify-between text-[12px] sm:text-[13px] font-bold text-slate-400">
                <span>Configure Setup</span>
                <ArrowUpRight className="w-4 h-4 text-slate-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More CTA - Only on mobile/tablet */}
        <div className="mt-10 lg:hidden text-center">
          <button className="w-full sm:w-auto px-10 py-4 bg-[#1A1A1A] text-white rounded-[18px] font-black text-[16px] hover:bg-[#7856FF] transition-all">
            View Marketplace (100+)
          </button>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsGrid;
