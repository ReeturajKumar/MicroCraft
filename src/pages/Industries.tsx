import IndustriesHero from "../components/industries/IndustriesHero";
import IndustryServices from "../components/industries/IndustryServices";
import IndustryBenefits from "../components/industries/IndustryBenefits";
import IndustryIntegrations from "../components/industries/IndustryIntegrations";

const Industries = () => {
    return (
        <main className="w-full bg-white relative">
            <IndustriesHero />
            <IndustryServices />
            <IndustryBenefits />
            <IndustryIntegrations />
            
        </main>
    );
};

export default Industries;
