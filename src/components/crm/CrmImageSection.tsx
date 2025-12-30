import React from "react";
import { motion } from "framer-motion";

const CrmImageSection: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden py-6 sm:py-8 md:py-10 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
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
              className="w-full h-auto min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px] xl:h-[93vh] object-contain rounded-lg sm:rounded-xl md:rounded-2xl"
              loading="lazy"
              onError={(e) => {
                // Fallback: Show placeholder if image doesn't exist
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
                const parent = target.parentElement;
                if (parent) {
                  const placeholder = document.createElement("div");
                  placeholder.className =
                    "w-full aspect-video bg-gradient-to-br from-slate-50 to-white rounded-lg sm:rounded-xl md:rounded-2xl border-2 border-slate-200 flex items-center justify-center min-h-[300px] sm:min-h-[400px] md:min-h-[500px]";
                  placeholder.innerHTML =
                    '<div class="text-slate-400 text-xs sm:text-sm">Crm.png</div>';
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
