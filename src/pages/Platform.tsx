import PlatformHero from "../components/platform/PlatformHero";
import TeamEfficiency from "../components/platform/TeamEfficiency";
import PlatformTestimonial from "../components/platform/PlatformTestimonial";
import PlatformIntegrations from "../components/platform/PlatformIntegrations";

const Platform = () => {
    return (
        <main className="w-full bg-white relative">
            <PlatformHero />
            <TeamEfficiency />
            <PlatformTestimonial />
            <PlatformIntegrations />
        </main>
    );
};

export default Platform;
