import { motion } from "framer-motion";
import img1 from '../../../assets/apps/Hubspot.webp'
import img2 from '../../../assets/apps/GoogleSheet.webp'
import img3 from '../../../assets/apps/Payu.webp'
import img4 from '../../../assets/apps/Xendit.webp'
import img5 from '../../../assets/apps/Stripe.webp'
import img6 from '../../../assets/apps/TallyPrime.webp'
import img7 from '../../../assets/apps/Begin.webp'
import img8 from '../../../assets/apps/Zoho.webp'
import img9 from '../../../assets/apps/Salesforce.webp'
import img10 from '../../../assets/apps/FreshdeskIcon.webp'
import img11 from '../../../assets/apps/HelloLeads.webp'
import img12 from '../../../assets/apps/CleverTap_fav.webp'

const CRMSecurityApps = () => {
  return (
    <section className="w-full bg-white py-8 md:py-10 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
        
        {/* Left Side: Recreated Integration Dashboard from Content 01.png */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-[24px] border border-slate-100 p-5 md:p-8 flex flex-col items-center text-center overflow-hidden"
        >
          {/* Header Area */}
          <h2 className="text-[22px] md:text-[28px] font-bold text-slate-900 mb-2 tracking-tight">
            Integrated with 60+ Apps
          </h2>
          <p className="text-[12px] md:text-[14px] text-slate-500 font-medium leading-relaxed max-w-sm mb-4">
            Embark on a transformative journey with our venture. <br className="hidden md:block" />
            Over 60 powerful tools to make your work more efficient.
          </p>
          
          <button className="h-9 px-6 bg-black text-white rounded-lg font-bold text-[12px] mb-6 hover:bg-slate-800 transition-all shadow-md hover:-translate-y-0.5">
            View All App Integration
          </button>

          {/* Staggered Logo Grid */}
          <div className="w-full space-y-3">
            {/* Row 1 */}
            <div className="flex justify-center gap-2 md:gap-3">
              <LogoCard image={img1} />
              <LogoCard image={img2} />
              <LogoCard empty />
              <LogoCard empty />
              <LogoCard image={img3} />
              <LogoCard empty />
              <LogoCard image={img4}/>
            </div>
            
            {/* Row 2 */}
            <div className="flex justify-center gap-2 md:gap-3 -translate-x-4">
              <LogoCard empty />
              <LogoCard image={img5} />
              <LogoCard image={img6} />
              <LogoCard image={img7} />
              <LogoCard image={img8} />
              <LogoCard image={img9} />
              <LogoCard image={img10} />
              <LogoCard empty />
            </div>

            {/* Row 3 */}
            <div className="flex justify-center gap-2 md:gap-3 translate-x-4">
              <LogoCard empty />
              <LogoCard empty />
              <LogoCard image={img11} />
              <LogoCard image={img12} />
              <LogoCard empty />
              <LogoCard empty />
              <LogoCard empty />
            </div>
          </div>
        </motion.div>

        {/* We're Aware with Security Section - Compact Design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-[24px] border border-slate-100 p-4 md:p-6 flex flex-col items-center text-center relative overflow-hidden"
        >
          <div className="relative z-10 w-full flex flex-col items-center">
            {/* Trust Badge - Compact */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 border border-indigo-100/50 rounded-full mb-3 md:mb-5">
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
              <span className="text-[9px] font-bold text-indigo-600 uppercase tracking-widest">Enterprise Security</span>
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-[34px] font-bold text-slate-900 mb-2 md:mb-3 tracking-tight leading-tight max-w-md">
              Security & Compliance
            </h2>
            <p className="text-[13px] md:text-[14px] text-slate-500 font-medium leading-relaxed mb-5 md:mb-6 max-w-md mx-auto">
              Built on trust. We adhere to rigorous industry standards to ensure your data remains protected and compliant globally.
            </p>
            
            <button className="h-9 px-8 bg-slate-900 text-white rounded-lg font-bold text-[12px] mb-6 md:mb-8 hover:bg-black hover:-translate-y-0.5 transition-all flex items-center gap-2 shadow-lg shadow-black/5">
              Explore Standards
            </button>

            {/* Security Certifications Grid - Adaptive & Clean */}
            <div className="w-full grid grid-cols-2 xs:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-3 md:gap-4">
              {/* ISO 27001 */}
              <div className="bg-slate-50/50 border border-slate-100 rounded-xl py-2.5 px-3 flex flex-col items-center justify-center transition-all hover:bg-white hover:shadow-md group">
                <div className="w-7 h-7 md:w-8 md:h-8 mb-1 text-slate-900 transition-transform group-hover:scale-110">
                  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                    <path d="M12 2L3 7V12C3 17.5 7.1 21.3 12 22C16.9 21.3 21 17.5 21 12V7L12 2Z" className="fill-indigo-600" />
                    <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-[8px] md:text-[9px] font-black text-slate-900 uppercase tracking-widest leading-none">ISO 27001</p>
              </div>

              {/* CCPA */}
              <div className="bg-slate-50/50 border border-slate-100 rounded-xl py-2.5 px-3 flex flex-col items-center justify-center transition-all hover:bg-white hover:shadow-md group font-sans">
                <div className="text-lg md:text-xl font-black text-slate-900 tracking-tighter mb-0.5 italics">CCPA</div>
                <div className="text-[#059669] text-[7px] md:text-[8px] font-black tracking-wider uppercase bg-emerald-50 px-2 py-0.5 rounded">COMPLIANT</div>
              </div>

              {/* GDPR */}
              <div className="bg-slate-50/50 border border-slate-100 rounded-xl py-2.5 px-3 flex flex-col items-center justify-center transition-all hover:bg-white hover:shadow-md group font-sans">
                <div className="text-lg md:text-xl font-black text-slate-900 tracking-tight mb-0.5 leading-none">GDPR</div>
                <div className="text-[#2563EB] text-[7px] md:text-[8px] font-black tracking-wider uppercase bg-blue-50 px-2 py-0.5 rounded">PROTECTED</div>
              </div>

              {/* ISO 9001 */}
              <div className="bg-slate-50/50 border border-slate-100 rounded-xl py-2.5 px-3 flex items-center justify-center gap-2 transition-all hover:bg-white hover:shadow-md group">
                <div className="w-7 h-7 rounded bg-indigo-600 flex items-center justify-center text-[8px] font-black text-white shadow-lg shadow-indigo-200">9001</div>
                <p className="text-[8px] md:text-[9px] font-black text-slate-900 uppercase tracking-widest leading-none">ISO 9001</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

const LogoCard = ({ image, empty }: { image?: string, empty?: boolean }) => (
  <div className={`w-10 h-10 md:w-14 md:h-14 rounded-[10px] md:rounded-[14px] flex items-center justify-center transition-all duration-500 ${empty ? 'bg-slate-400/30' : 'bg-white shadow-[0_8px_12px_rgba(0,0,0,0.08)] border border-slate-50 group-hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)]'}`}>
    {!empty && image && (
      <img src={image} alt="App Logo" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
    )}
  </div>
);

export default CRMSecurityApps;
