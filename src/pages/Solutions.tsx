import SolutionsHero from "../components/solutions/SolutionsHero";
import SolutionFeature from "../components/solutions/SolutionFeature";
import SolutionTestimonial from "../components/solutions/SolutionTestimonial";
import SolutionsResources from "../components/solutions/SolutionsResources";

const Solutions = () => {
    return (
        <main className="w-full bg-white relative">
            <SolutionsHero />
            <SolutionFeature />
            <SolutionTestimonial />
            <SolutionsResources />
        </main>
    );
};

export default Solutions;
