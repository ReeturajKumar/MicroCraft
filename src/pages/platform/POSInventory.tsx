import { motion } from "framer-motion";
import POSInventoryHero from "../../components/platform/pos-inventory/POSInventoryHero";
import POSInventoryFeatures from "../../components/platform/pos-inventory/POSInventoryFeatures";
import POSInventoryWhyChoose from "../../components/platform/pos-inventory/POSInventoryWhyChoose";
import POSInventoryCapabilities from "../../components/platform/pos-inventory/POSInventoryCapabilities";
import PlatformIntegrations from "@/components/platform/PlatformIntegrations";

const POSInventory = () => {
  return (
    <div className="w-full bg-white font-sans overflow-x-hidden">
      <POSInventoryHero />
      
      {/* Dashboard Mockup Overlap Container */}
      <div className="relative z-20 px-4 sm:px-6 md:px-12 lg:px-24 -mt-12 sm:-mt-16 md:-mt-24 max-w-8xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="rounded-[24px] sm:rounded-[40px] shadow-2xl shadow-violet-900/10 overflow-hidden border border-slate-100 bg-white"
        >
          <img 
            src="/dashboard.png" 
            alt="Stockly Dashboard" 
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </div>

      <POSInventoryFeatures />
      <POSInventoryWhyChoose />
      <PlatformIntegrations/>
      <POSInventoryCapabilities />
    </div>
  );
};

export default POSInventory;
