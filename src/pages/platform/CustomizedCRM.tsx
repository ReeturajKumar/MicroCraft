import CRMHero from "../../components/platform/customized-crm/CRMHero";
import CRMLogos from "../../components/platform/customized-crm/CRMLogos";
import CRMManagement from "../../components/platform/customized-crm/CRMManagement";
import CRMEmailIntegration from "../../components/platform/customized-crm/CRMEmailIntegration";
import CRMCollaboration from "../../components/platform/customized-crm/CRMCollaboration";
import CRMInsights from "../../components/platform/customized-crm/CRMInsights";
import CRMVentureAdvantage from "../../components/platform/customized-crm/CRMVentureAdvantage";
import CRMSecurityApps from "../../components/platform/customized-crm/CRMSecurityApps";

const CustomizedCRM = () => {
  return (
    <main className="w-full bg-white relative">
      <CRMHero />
      <CRMLogos />
      <CRMManagement />
      <CRMEmailIntegration />
      <CRMCollaboration />
      <CRMInsights />
      <CRMVentureAdvantage />
      <CRMSecurityApps />
    
    </main>
  );
};

export default CustomizedCRM;
