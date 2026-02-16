import AIAutomationHero from "../../components/platform/ai-automation/AIAutomationHero";
import AIRetentionShowcase from "../../components/platform/ai-automation/AIRetentionShowcase";
import AIAutomationQuickstart from "../../components/platform/ai-automation/AIAutomationQuickstart";
import AIInsightReports from "../../components/platform/ai-automation/AIInsightReports";
import AIAutomationResources from "../../components/platform/ai-automation/AIAutomationResources";

const AIAutomation = () => {
  return (
    <div className="min-h-screen bg-white">
      <AIAutomationHero />
      <AIRetentionShowcase />
      <AIAutomationQuickstart />
      <AIInsightReports />
      <AIAutomationResources />
    </div>
  );
};

export default AIAutomation;
