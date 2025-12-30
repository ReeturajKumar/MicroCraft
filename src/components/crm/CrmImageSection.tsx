import React from "react";
import { motion } from "framer-motion";

const CrmImageSection: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full"
        >
          <div className="relative w-full max-w-7xl mx-auto">
            <img
              src="/Crm.png"
              alt="CRM Platform Overview"
              className="w-full h-[93vh] object-contain"
              loading="lazy"
              onError={(e) => {
                // Fallback: Show placeholder if image doesn't exist
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
                const parent = target.parentElement;
                if (parent) {
                  const placeholder = document.createElement("div");
                  placeholder.className =
                    "w-full aspect-video bg-gradient-to-br from-slate-50 to-white rounded-2xl border-2 border-slate-200 flex items-center justify-center";
                  placeholder.innerHTML =
                    '<div class"text-slate-400 text-sm">Crm.png</div>';
                  parent.appendChild(placeholder);
                }
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CrmImageSection;
