import Hero from "../components/home/Hero";
import { FeaturesLoop } from "../components/home/FeaturesLoop";
import { MetricTreeSection } from "../components/home/MetricTreeSection";
import { WhyChooseSection } from "../components/home/WhyChooseSection";
import { EnterpriseSection } from "../components/home/EnterpriseSection";
import { SupportSection } from "../components/home/SupportSection";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturesLoop />
      <MetricTreeSection />
      <WhyChooseSection />
      <EnterpriseSection />
      <SupportSection />
    </>
  );
};

export default Home;
