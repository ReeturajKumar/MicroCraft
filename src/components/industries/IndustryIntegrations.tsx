import { motion } from "framer-motion";

const IndustryIntegrations = () => {
    // Precise trigonometric arrangement for a perfect orbital map
    const integrations = [
        // Outer Ring (Radius ~40%) - 0, 45, 90, 135, 180, 225, 270, 315 degrees
        { id: 1, x: "50.0%", y: "10.0%", logo: "https://www.vectorlogo.zone/logos/slack/slack-icon.svg" },
        { id: 2, x: "78.3%", y: "21.7%", logo: "https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg" },
        { id: 3, x: "90.0%", y: "50.0%", logo: "https://www.vectorlogo.zone/logos/salesforce/salesforce-icon.svg" },
        { id: 4, x: "78.3%", y: "78.3%", logo: "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg" },
        { id: 5, x: "50.0%", y: "90.0%", logo: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg" },
        { id: 6, x: "21.7%", y: "78.3%", logo: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg" },
        { id: 7, x: "10.0%", y: "50.0%", logo: "https://www.vectorlogo.zone/logos/zapier/zapier-icon.svg" },
        { id: 8, x: "21.7%", y: "21.7%", logo: "https://www.vectorlogo.zone/logos/atlassian_jira/atlassian_jira-icon.svg" },
        
        // Inner Ring (Radius ~22%, Staggered at 45, 135, 225, 315 degrees)
        { id: 9, x: "65.6%", y: "34.4%", logo: "https://www.vectorlogo.zone/logos/shopify/shopify-icon.svg" },
        { id: 10, x: "65.6%", y: "65.6%", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/960px-Notion-logo.svg.png" },
        { id: 11, x: "34.4%", y: "65.6%", logo: "https://cdn-icons-png.flaticon.com/512/2965/2965327.png" },
        { id: 12, x: "34.4%", y: "34.4%", logo: "https://www.vectorlogo.zone/logos/trello/trello-icon.svg" },
    ];

    return (
        <section className="w-full py-16 bg-white overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-32">
                    
                    {/* Left Content */}
                    <div className="flex-1 max-w-xl text-left">
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold text-[#1A1A1A] leading-[1.1] mb-6 tracking-tight"
                        >
                            Unified Connection with <br />
                            <span className="text-[#7856FF]">MicroCraft AI Connect</span>
                        </motion.h2>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-base md:text-lg text-gray-500 mb-8 leading-relaxed font-medium"
                        >
                            Sync your entire enterprise stack. MicroCraft AI Connect bridges your legacy systems with our AI-native OS, ensuring real-time data flow across all your favorite tools.
                        </motion.p>
                        <motion.button 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="px-8 py-3.5 bg-[#7856FF] text-white rounded-full font-bold hover:bg-[#6344d4] transition-all shadow-lg"
                        >
                            Sync Your Stack
                        </motion.button>
                    </div>

                    {/* Right Visual: Animated Circular Integration Map */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 relative aspect-square w-full max-w-[500px]"
                    >
                        <div className="absolute inset-0 bg-[#7856FF]/5 rounded-[2.5rem] flex items-center justify-center overflow-hidden">
                            {/* Inner/Outer Circles (Static) */}
                            <div className="absolute w-[75%] h-[75%] rounded-full border border-[#7856FF]/10 z-0"></div>
                            <div className="absolute w-[45%] h-[45%] rounded-full border border-[#7856FF]/10 z-0"></div>

                            {/* Rotating Orbit Container */}
                            <motion.div 
                                className="absolute inset-0 z-10"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                            >
                                {integrations.map((item) => (
                                    <motion.div
                                        key={item.id}
                                        className="absolute w-10 h-10 md:w-14 md:h-14 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center p-2"
                                        style={{ left: item.x, top: item.y, transform: "translate(-50%, -50%)" }}
                                    >
                                        <motion.div 
                                            className="w-full h-full flex items-center justify-center"
                                            animate={{ rotate: -360 }}
                                            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                                        >
                                            <img src={item.logo} alt="Integration" className="w-full h-full object-contain" />
                                        </motion.div>
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* Static Center Logo/Core */}
                            <div className="relative z-20 w-14 h-14 md:w-20 md:h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center border border-[#7856FF]/20 p-3">
                                <img src="/logo.png" alt="MicroCraft Logo" className="w-full h-full object-contain" />
                                <div className="absolute inset-0 rounded-2xl bg-[#7856FF]/5 animate-pulse"></div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default IndustryIntegrations;
