import { HeroParallax } from "@/components/ui/hero-parallax";

export const products = [
  {
    title: "MicroCraft Analytics",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=600&fit=crop",
  },
  {
    title: "Dashboard Pro",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=600&fit=crop",
  },
  {
    title: "CRM Solutions",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=600&fit=crop",
  },
  {
    title: "E-Commerce Platform",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=600&fit=crop",
  },
  {
    title: "Marketing Automation",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=600&h=600&fit=crop",
  },
  {
    title: "Project Management",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=600&fit=crop",
  },
  {
    title: "Team Collaboration",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=600&fit=crop",
  },
  {
    title: "Data Visualization",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=600&fit=crop",
  },
  {
    title: "AI Integration",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=600&fit=crop",
  },
  {
    title: "Cloud Infrastructure",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=600&fit=crop",
  },
  {
    title: "Security Suite",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=600&fit=crop",
  },
  {
    title: "Mobile Apps",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=600&fit=crop",
  },
  {
    title: "API Platform",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=600&fit=crop",
  },
  {
    title: "Business Intelligence",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=600&fit=crop",
  },
  {
    title: "Enterprise Solutions",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=600&fit=crop",
  },
];

export default function FeaturedSection() {
  return (
    <div className="w-full bg-white dark:bg-black">
      <HeroParallax products={products} />
    </div>
  );
}
