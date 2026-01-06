import { TestimonialsColumn } from "@/components/ui/testimonials-columns";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "MicroCraft revolutionized our operations, streamlining finance and inventory. The cloud-based platform keeps us productive, even remotely.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    name: "Sarah Mitchell",
    role: "Operations Manager",
  },
  {
    text: "Implementing MicroCraft was smooth and quick. The customizable, user-friendly interface made team training effortless.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    name: "James Anderson",
    role: "IT Manager",
  },
  {
    text: "The support team is exceptional, guiding us through setup and providing ongoing assistance, ensuring our satisfaction.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    name: "Emily Chen",
    role: "Customer Support Lead",
  },
  {
    text: "MicroCraft's seamless integration enhanced our business operations and efficiency. Highly recommend for its intuitive interface.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    name: "Michael Roberts",
    role: "CEO",
  },
  {
    text: "Its robust features and quick support have transformed our workflow, making us significantly more efficient.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
    name: "Jessica Taylor",
    role: "Project Manager",
  },
  {
    text: "The smooth implementation exceeded expectations. It streamlined processes, improving overall business performance.",
    image:
      "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop",
    name: "Rachel Kim",
    role: "Business Analyst",
  },
  {
    text: "Our business functions improved with a user-friendly design and positive customer feedback.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    name: "David Martinez",
    role: "Marketing Director",
  },
  {
    text: "They delivered a solution that exceeded expectations, understanding our needs and enhancing our operations.",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop",
    name: "Lisa Johnson",
    role: "Sales Manager",
  },
  {
    text: "Using MicroCraft, our online presence and conversions significantly improved, boosting business performance.",
    image:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop",
    name: "Alex Thompson",
    role: "E-commerce Manager",
  },
  {
    text: "The platform's analytics helped us make data-driven decisions that doubled our revenue in just 6 months.",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop",
    name: "Amanda Foster",
    role: "Data Analyst",
  },
  {
    text: "MicroCraft's automation features saved us countless hours. We can now focus on growing our business instead of manual tasks.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
    name: "Ryan Cooper",
    role: "Operations Director",
  },
  {
    text: "The customer insights we gained through MicroCraft transformed our marketing strategy completely. Highly recommended!",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop",
    name: "Sophie Williams",
    role: "Marketing Head",
  },
  {
    text: "Best investment we made for our business. The ROI was visible within the first month itself.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop",
    name: "Daniel Lee",
    role: "Finance Director",
  },
  {
    text: "MicroCraft's real-time reporting gives us the agility to respond to market changes instantly.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop",
    name: "Olivia Brown",
    role: "Strategy Manager",
  },
  {
    text: "The integration with our existing tools was seamless. No disruption to our workflow at all.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop",
    name: "Chris Evans",
    role: "Tech Lead",
  },
];

// Split into 5 columns
const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);
const fourthColumn = testimonials.slice(9, 12);

const Testimonial = () => {
  return (
    <section className="relative pb-10">
      <div className="relative z-10 max-w-8xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-3xl mx-auto mb-16"
        ></motion.div>

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] max-h-[700px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={20} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden sm:block"
            duration={25}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden md:block"
            duration={22}
          />
          <TestimonialsColumn
            testimonials={fourthColumn}
            className="hidden lg:block"
            duration={24}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
