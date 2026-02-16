import { motion } from "framer-motion";

const partners = [
  { name: "HubSpot", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg" },
  { name: "Slack", logo: "https://www.smarsh.com/media/Slack.png" },
  { name: "Mailchimp", logo: "https://cdn.worldvectorlogo.com/logos/mailchimp-logo.svg" },
  { name: "Dropbox", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Dropbox_logo_2017.svg" },
  { name: "Linear", logo: "https://cdn.prod.website-files.com/63be620d63863b897c02c28a/6570e2dde847766c83ca409b_idOReMseAv.png" },
  { name: "Shopify", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg" },
  { name: "Stripe", logo: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" },
  { name: "Notion", logo: "https://get.site/wp-content/uploads/2021/10/notion-logo.png" },
  { name: "Figma", logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" },
  { name: "Discord", logo: "https://static.vecteezy.com/system/resources/thumbnails/018/930/718/small_2x/discord-logo-discord-icon-transparent-free-png.png" },
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
  { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
  { name: "Salesforce", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" }
];

const BusinessPartners = () => {
  return (
    <section className="py-12 bg-white border-y border-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-[13px] font-medium text-slate-400 tracking-tight">
            Loved by 20+ large companies in the world
          </p>
        </div>
        
        <div className="relative w-full overflow-hidden">
          <motion.div 
            className="flex items-center gap-10 md:gap-14 lg:gap-20 w-max"
            animate={{ 
              x: [0, -2500] 
            }}
            transition={{ 
              duration: 50, 
              repeat: Infinity, 
              ease: "linear" 
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
          <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-white to-transparent z-10" />
        </div>
      </div>
    </section>
  );
};

export default BusinessPartners;
