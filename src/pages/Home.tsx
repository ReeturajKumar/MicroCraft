import Hero from "../components/home/Hero";
import { FeaturesLoop } from "../components/home/FeaturesLoop";
import { MetricTreeSection } from "../components/home/MetricTreeSection";
import { WhyChooseSection } from "../components/home/WhyChooseSection";
import FeaturedSection from "../components/home/FeaturedSection";
import GallerySection from "../components/home/GallerySection";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturesLoop />
      <MetricTreeSection />
      <WhyChooseSection />
      <FeaturedSection />
      <GallerySection />
      {/* <ProblemsSection />
      <LogoMarquee />
      <AIColleaguesSection />
      <ProductTrio />
      <TrustAndIntegrationsSection />
      <Simulator /> */}
      {/* <Pricing /> */}
      {/* <Testimonial /> */}
    </>
  );
};

export default Home;
