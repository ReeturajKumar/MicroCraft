import Hero from "../components/home/Hero";
import ProductTrio from "../components/home/ProductTrio";
import TrustAndIntegrationsSection from "../components/home/TrustAndIntegrationsSection";
import AIColleaguesSection from "../components/home/AIColleaguesSection";
import Simulator from "../components/home/Simulator";
import Pricing from "../components/home/Pricing";
import Testimonial from "../components/home/Testimonial";
import LogoMarquee from "../components/ecommerce/LogoMarquee";

const Home = () => {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <AIColleaguesSection />
      <ProductTrio />
      <TrustAndIntegrationsSection />
      <Simulator />
      <Pricing />
      <Testimonial />
    </>
  );
};

export default Home;
