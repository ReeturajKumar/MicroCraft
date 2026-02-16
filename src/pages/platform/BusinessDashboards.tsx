import { WhyChooseSection } from "@/components/home/WhyChooseSection";
import BusinessDashboardHero from "@/components/platform/business-dashboards/BusinessDashboardHero";
import BusinessPartners from "@/components/platform/business-dashboards/BusinessPartners";
import BusinessDashboardFAQ from "@/components/platform/business-dashboards/BusinessDashboardFAQ";
import BusinessDashboardCTA from "@/components/platform/business-dashboards/BusinessDashboardCTA";
import CRMLogos from "@/components/platform/customized-crm/CRMLogos";
import CRMVentureAdvantage from "@/components/platform/customized-crm/CRMVentureAdvantage";

const BusinessDashboards = () => {
  return (
    <div className="w-full bg-white font-sans overflow-x-hidden">
      <BusinessDashboardHero />
      <BusinessPartners />
      <WhyChooseSection/>
      <CRMVentureAdvantage/>
      <BusinessDashboardFAQ />
      <BusinessDashboardCTA />
      <CRMLogos/>
    </div>
  );
};

export default BusinessDashboards;
