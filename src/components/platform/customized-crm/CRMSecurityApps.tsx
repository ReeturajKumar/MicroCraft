import { motion } from "framer-motion";

const CRMSecurityApps = () => {
  return (
    <section className="w-full bg-white py-12 md:py-20 px-10 sm:px-6 lg:px-28">
      <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        
        {/* Left Visual - Clean Image Integration */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center lg:justify-start"
        >
          <img 
            src="/Content 01.png" 
            alt="App Integrations Portfolio" 
            className="w-full h-auto max-w-2xl"
          />
        </motion.div>

        {/* We're Aware with Security Section - Compact Design */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white rounded-[32px] p-8 sm:p-10 flex flex-col items-center text-center relative overflow-hidden"
        >
          <div className="relative z-10 w-full flex flex-col items-center">
            {/* Trust Badge - Compact */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-50 border border-slate-100 rounded-full mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Enterprise Security</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 tracking-tight leading-tight">
              Security & Compliance
            </h2>
            <p className="text-sm text-slate-500 font-medium leading-relaxed mb-6 max-w-md mx-auto">
              Built on trust. We adhere to rigorous industry standards to ensure your data remains protected and compliant globally.
            </p>
            
            <button className="h-10 px-8 bg-slate-900 text-white rounded-lg font-bold text-[13px] mb-10 hover:bg-black transition-all flex items-center gap-2">
              Explore Standards
            </button>

            {/* Security Certifications Grid - Compact & Clean */}
            <div className="w-full grid grid-cols-2 gap-3 sm:gap-4">
              {/* ISO 27001 */}
              <div className="bg-slate-50/50 border border-slate-100 rounded-2xl p-4 flex flex-col items-center justify-center transition-all group">
                <div className="w-10 h-10 mb-2 text-slate-900 transition-transform group-hover:scale-105">
                  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                    <path d="M12 2L3 7V12C3 17.5 7.1 21.3 12 22C16.9 21.3 21 17.5 21 12V7L12 2Z" className="fill-slate-900" />
                    <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-[10px] font-black text-slate-900 uppercase tracking-widest leading-none">ISO 27001</p>
              </div>

              {/* CCPA */}
              <div className="bg-slate-50/50 border border-slate-100 rounded-2xl p-4 flex flex-col items-center justify-center transition-all group font-sans">
                <div className="text-xl font-black text-slate-900 tracking-tighter mb-1.5">CCPA</div>
                <div className="text-[#059669] text-[9px] font-bold tracking-wider uppercase">COMPLIANT</div>
              </div>

              {/* GDPR */}
              <div className="bg-slate-50/50 border border-slate-100 rounded-2xl p-4 flex flex-col items-center justify-center transition-all group font-sans">
                <div className="text-xl font-black text-slate-900 tracking-tight mb-1.5 leading-none">GDPR</div>
                <div className="text-[#2563EB] text-[9px] font-bold tracking-wider uppercase">PROTECTED</div>
              </div>

              {/* ISO 9001 */}
              <div className="bg-slate-50/50 border border-slate-100 rounded-2xl p-4 flex items-center justify-center gap-3 transition-all group">
                <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-[9px] font-black text-white">9001</div>
                <p className="text-[10px] font-black text-slate-900 uppercase tracking-widest leading-none">ISO 9001</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default CRMSecurityApps;
