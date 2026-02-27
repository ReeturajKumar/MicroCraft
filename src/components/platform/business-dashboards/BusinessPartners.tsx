import { motion } from "framer-motion";
import img1 from "../../../assets/Husbspot.webp";
import img2 from "../../../assets/Slack-logo.webp";
import img3 from "../../../assets/mailchip.webp";
import img4 from "../../../assets/Dropbox-logo.webp";
import img5 from "../../../assets/linear.webp";
import img6 from "../../../assets/shopify.webp";
import img7 from "../../../assets/Stripe.webp";
import img8 from "../../../assets/Notion.webp";
import img9 from "../../../assets/figma.webp";
import img10 from "../../../assets/discord.webp";
import img11 from "../../../assets/google.webp";
import img12 from "../../../assets/Microsoft_Logo_512px.webp";
import img13 from "../../../assets/Meta.webp";
import img14 from "../../../assets/Salesforce.webp";

const partners = [
  { name: "HubSpot", logo: img1 },
  { name: "Slack", logo: img2 },
  { name: "Mailchimp", logo: img3 },
  { name: "Dropbox", logo: img4 },
  { name: "Linear", logo: img5 },
  { name: "Shopify", logo: img6 },
  { name: "Stripe", logo: img7 },
  { name: "Notion", logo: img8 },
  { name: "Figma", logo: img9 },
  { name: "Discord", logo: img10 },
  { name: "Google", logo: img11 },
  { name: "Amazon", logo: img11 },
  { name: "Microsoft", logo: img12 },
  { name: "Meta", logo: img13 },
  { name: "Salesforce", logo: img14 },
];

const BusinessPartners = () => {
  return (
    <section className="py-6 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-5">
          <p className="text-[13px] font-medium text-slate-400 tracking-tight">
            Loved by 20+ large companies in the world
          </p>
        </div>

        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex items-center gap-10 md:gap-14 lg:gap-20 w-max"
            animate={{
              x: [0, -2500],
            }}
            transition={{
              duration: 50,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* Duplicating once solely for infinite loop logic */}
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex items-center gap-2 duration-300"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-6 md:h-7 lg:h-8 w-auto object-contain pointer-events-none"
                />
              </div>
            ))}
          </motion.div>

          {/* Gradient Fades for a premium look */}
          <div className="absolute top-0 left-0 w-24 h-full bg-linear-to-r from-white to-transparent z-10" />
          <div className="absolute top-0 right-0 w-24 h-full bg-linear-to-l from-white to-transparent z-10" />
        </div>
      </div>
    </section>
  );
};

export default BusinessPartners;
