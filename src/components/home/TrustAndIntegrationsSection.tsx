/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Animation constants
const ANIMATION_OFFSET = 30;
const ANIMATION_DURATION = 0.6;
const MAX_IMAGE_WIDTH = 600;

const TrustAndIntegrationsSection = () => {
  const [imageError, setImageError] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  // Cleanup function for error state
  useEffect(() => {
    return () => {
      setImageError(false);
    };
  }, []);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <section
      className="relative w-full bg-white overflow-hidden"
      aria-label="Pre-built integrations section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Integrations Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-16">
          {/* Left: Integrations Image */}
          <motion.div
            initial={{ opacity: 0, x: -ANIMATION_OFFSET }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: ANIMATION_DURATION, ease: "easeOut" }}
            className="flex-1 w-full lg:w-auto"
          >
            <div 
              className="relative w-full mx-auto lg:mx-0"
              style={{ maxWidth: `${MAX_IMAGE_WIDTH}px` }}
            >
              {!imageError ? (
                <img
                  ref={imageRef}
                  src="/Integrations.png"
                  alt="Visual representation of pre-built integrations connecting AI agents with business systems including CRM, email platforms, cloud services, and workflow tools"
                  className="w-full h-auto object-contain "
                  loading="lazy"
                  onError={handleImageError}
                  decoding="async"
                />
              ) : (
                <div
                  className="w-full aspect-square bg-gradient-to-br from-slate-50 to-white rounded-2xl border-2 border-slate-200 flex items-center justify-center"
                  role="img"
                  aria-label="Integrations placeholder"
                >
                  <div className="text-slate-400 text-sm font-medium">
                    Integrations Preview
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: ANIMATION_OFFSET }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: ANIMATION_DURATION, ease: "easeOut" }}
            className="flex-1"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-slate-900 leading-tight mb-6">
              Pre-built integrations for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600">
                rapid go-live
              </span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
              AI agents integrate deeply with business systems and workflows.
              Automatic updates from AI agents and internal systems ensure
              seamless connectivity with your existing tools and platforms. Get
              up and running in hours, not weeks.
            </p>
            <Link
              to="/integrations"
              className="group inline-flex items-center gap-2 text-purple-600 font-semibold text-lg hover:text-pink-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded-md px-1 py-1"
              aria-label="Navigate to integrations page to see all available integrations"
            >
              <span>See all integrations</span>
              <ArrowRight
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                aria-hidden="true"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustAndIntegrationsSection;
