import { HeroParallax } from "@/components/ui/hero-parallax";

export const products = [
  {
    title: "MicroCraft Analytics",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=800&fit=crop&q=80",
  },
  {
    title: "Dashboard Pro",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=800&fit=crop&q=80",
  },
  {
    title: "CRM Solutions",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=800&fit=crop&q=80",
  },
  {
    title: "E-Commerce Platform",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=800&fit=crop&q=80",
  },
  {
    title: "Marketing Automation",
    link: "#",
    thumbnail:
      "https://rocketium.com/academy/wp-content/uploads/2020/11/Untitled-design-1.png",
  },
  {
    title: "Project Management",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=800&fit=crop&q=80",
  },
  {
    title: "Team Collaboration",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=800&fit=crop&q=80",
  },
  {
    title: "Data Visualization",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=800&fit=crop&q=80",
  },
  {
    title: "AI Integration",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=800&fit=crop&q=80",
  },
  {
    title: "Cloud Infrastructure",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=800&fit=crop&q=80",
  },
];

export default function FeaturedSection() {
  return (
    <div className="w-full bg-white dark:bg-black">
      <HeroParallax products={products} />
    </div>
  );
}
