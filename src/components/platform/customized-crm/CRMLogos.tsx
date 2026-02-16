import { motion } from "framer-motion";

const LOGOS = [
  {
    name: "coinbase",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Coinbase.svg/1280px-Coinbase.svg.png",
    height: "h-5 md:h-6"
  },
  {
    name: "dropbox",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Dropbox_Logo_01.svg/960px-Dropbox_Logo_01.svg.png",
    height: "h-6 md:h-7"
  },
  {
    name: "google",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1024px-Google_2015_logo.svg.png",
    height: "h-6 md:h-8"
  },
  {
    name: "slack",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/1024px-Slack_icon_2019.svg.png",
    height: "h-6 md:h-7",
    hasWordmark: true,
    wordmark: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Slack_Technologies_Logo.svg/1024px-Slack_Technologies_Logo.svg.png"
  },
  {
    name: "square",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Square%2C_Inc._logo.svg/3840px-Square%2C_Inc._logo.svg.png",
    height: "h-6 md:h-7"
  },
  {
    name: "zoom",
    src: "https://upload.wikimedia.org/wikipedia/commons/2/24/Zoom-Logo.png",
    height: "h-5 md:h-6"
  }
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
            20+ Businesses and Companies uses Converge <br className="hidden md:block" />
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
