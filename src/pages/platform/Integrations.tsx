import IntegrationsHero from "@/components/platform/integrations/IntegrationsHero";
import IntegrationsGrid from "@/components/platform/integrations/IntegrationsGrid";
import PlatformIntegrations from "@/components/platform/PlatformIntegrations";

const Integrations = () => {
  return (
    <div className="w-full bg-white font-sans overflow-x-hidden">
      <IntegrationsHero />
      <IntegrationsGrid />
      <PlatformIntegrations/>
    </div>
  );
};

export default Integrations;
