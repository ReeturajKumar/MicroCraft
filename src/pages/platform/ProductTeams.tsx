import ProductTeamsHero from "../../components/platform/product-teams/ProductTeamsHero";
import BusinessPartners from "../../components/platform/business-dashboards/BusinessPartners";
import ProductServices from "../../components/platform/product-teams/ProductServices";
import AccountingCaseStudies from "@/components/platform/accounting-compliance/AccountingCaseStudies";
import PlatformIntegrations from "@/components/platform/PlatformIntegrations";

const ProductTeams = () => {
  return (
    <main className="w-full relative pt-16">
      <ProductTeamsHero />
      <BusinessPartners />
      <ProductServices />
      <AccountingCaseStudies/>
      <PlatformIntegrations/>
    </main>
  );
};

export default ProductTeams;
