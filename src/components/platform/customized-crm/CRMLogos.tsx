import { motion } from "framer-motion";
import img1 from "../../../assets/coinbase.webp";
import img2 from "../../../assets/Dropbox-logo.webp";
import img3 from "../../../assets/google.webp";
import img4 from "../../../assets/Slack-logo.webp";
import img5 from "../../../assets/squre.webp";
import img6 from "../../../assets/Zoom-Logo.webp";

const LOGOS = [
  {
    name: "coinbase",
    src: img1,
    height: "h-5 md:h-6",
  },
  {
    name: "dropbox",
    src: img2,
    height: "h-6 md:h-7",
  },
  {
    name: "google",
    src: img3,
    height: "h-6 md:h-8",
  },
  {
    name: "slack",
    src: img4,
    height: "h-6 md:h-7",
    hasWordmark: true,
    wordmark: img4,
  },
  {
    name: "square",
    src: img5,
    height: "h-5 md:h-6",
  },
  {
    name: "zoom",
    src: img6,
    height: "h-5 md:h-6",
  },
];

const CRMLogos = () => {
  return (
    <section className="w-full bg-white py-12 px-10 lg:px-28">
      <div className="max-w-8xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Side - Text */}
        <div className="flex-1 text-center lg:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight leading-tight"
          >
            Trusted by Many <br />
            Established Companies
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 font-medium text-sm md:text-base max-w-md mx-auto lg:mx-0"
          >
            20+ Businesses and Companies uses Converge{" "}
            <br className="hidden md:block" />
            for theirs CRM Platform
          </motion.p>
        </div>

        {/* Right Side - Logos Grid */}
        <div className="flex-[1.5] w-full">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-10 items-center justify-items-center lg:justify-items-end">
            {LOGOS.map((logo, idx) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center justify-center h-12"
              >
                <img
                  src={logo.wordmark || logo.src}
                  alt={logo.name}
                  className={`${logo.height} w-auto object-contain `}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CRMLogos;
