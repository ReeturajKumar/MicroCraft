import { motion } from "framer-motion";

const LogoMarquee = () => {
  // Platform logos from public folder
  const platforms = [
    {
      name: "Adobe",
      logo: "/Adobe.png",
      alt: "Adobe",
    },
    {
      name: "IBM",
      logo: "/IBM.png",
      alt: "IBM",
    },
    {
      name: "MongoDB",
      logo: "/MongoDB.png",
      alt: "MongoDB",
    },
    {
      name: "Salesforce",
      logo: "/Salesforce.png",
      alt: "Salesforce",
    },
    {
      name: "SAP",
      logo: "/Sap.png",
      alt: "SAP",
    },
    {
      name: "Shopify",
      logo: "/Shopify.png",
      alt: "Shopify",
    },
    {
      name: "Workday",
      logo: "/Workday.png",
      alt: "Workday",
    },
    {
      name: "Zendesk",
      logo: "/Zendesk.png",
      alt: "Zendesk",
    },
  ];

  return (
    <section className="relative w-full pb-8  overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 lg:mb-12 max-w-7xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3">
            Trusted by the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600">
              industry leading brands
            </span>
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            Join thousands of companies that trust our platform to power their
            business operations
          </p>
        </motion.div>

        {/* Logo Marquee */}
        <div className="relative overflow-hidden">
          {/* Left Fade */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white to-transparent z-10 pointer-events-none" />

          {/* Right Fade */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white to-transparent z-10 pointer-events-none" />

          {/* Scrolling Track */}
          <div className="flex w-max scroll-track logo-track group-hover:paused">
            {/* Render logos multiple times for seamless infinite loop */}
            {[...platforms, ...platforms, ...platforms].map(
              (platform, index) => (
                <motion.div
                  key={`${platform.name}-${index}`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center justify-center mx-6 lg:mx-8 min-w-[140px] h-10 opacity-70 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer group/item"
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    <img
                      src={platform.logo}
                      alt={platform.alt}
                      className="max-h-8 w-auto object-contain filter grayscale group-hover/item:grayscale-0 transition-all duration-300 group-hover/item:scale-105"
                      loading="lazy"
                    />
                  </div>
                </motion.div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
