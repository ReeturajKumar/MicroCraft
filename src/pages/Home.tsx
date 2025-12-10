import Hero from "../components/home/Hero";
import StatsSection from "../components/home/StatsSection";
import ProductTrio from "../components/home/ProductTrio";
import Simulator from "../components/home/Simulator";
import Pricing from "../components/home/Pricing";
import Testimonial from "../components/home/Testimonial";

const Home = () => {
  return (
    <>
      <Hero />
      <StatsSection />
      <ProductTrio />
      <Simulator />
      <Pricing />
      <Testimonial />
    </>
  );
};

export default Home;
