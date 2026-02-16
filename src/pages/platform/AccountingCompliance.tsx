import AccountingHero from "../../components/platform/accounting-compliance/AccountingHero";
import AccountingServices from "../../components/platform/accounting-compliance/AccountingServices";
import AccountingCaseStudies from "../../components/platform/accounting-compliance/AccountingCaseStudies";
import PlatformIntegrations from "@/components/platform/PlatformIntegrations";

const AccountingCompliance = () => {
  return (
    <div className="w-full bg-white font-sans overflow-x-hidden">
      <AccountingHero />
      <AccountingServices />
      <AccountingCaseStudies />

      <PlatformIntegrations />
    </div>
  );
};

export default AccountingCompliance;
