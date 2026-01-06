import { Gallery6 } from "@/components/ui/gallery6";

const galleryData = {
  heading: "Featured Solutions",
  demoUrl: "#",
  items: [
    {
      id: "item-1",
      title: "Analytics Dashboard",
      summary:
        "Real-time business intelligence and data visualization tools that transform complex data into actionable insights for better decision-making.",
      url: "#",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    },
    {
      id: "item-2",
      title: "CRM Platform",
      summary:
        "Comprehensive customer relationship management system designed to streamline sales, marketing, and customer service operations seamlessly.",
      url: "#",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    },
    {
      id: "item-3",
      title: "E-Commerce Suite",
      summary:
        "Complete online selling platform with inventory management, payment processing, and customer analytics built-in for growth.",
      url: "#",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    },
    {
      id: "item-4",
      title: "Project Management",
      summary:
        "Collaborative workspace for teams to plan, track, and deliver projects efficiently with real-time updates and comprehensive reporting.",
      url: "#",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    },
    {
      id: "item-5",
      title: "Marketing Automation",
      summary:
        "Intelligent marketing platform that automates campaigns, tracks performance, and optimizes customer engagement across all channels.",
      url: "#",
      image: "https://www.sweetprocess.com/wp-content/uploads/2022/05/Picture2.png",
    },
    {
      id: "item-6",
      title: "Supply Chain Logistics",
      summary:
        "Global logistics tracking and optimization tools to ensure your products reach their destination efficiently and on time.",
      url: "#",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
    },
    {
      id: "item-7",
      title: "AI Customer Support",
      summary:
        "Next-generation AI assistants that provide instant, multi-language support to your customers 24/7 with human-like precision.",
      url: "#",
      image: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=600&h=400&fit=crop",
    },
    {
      id: "item-8",
      title: "HR Management",
      summary:
        "Streamline employee onboarding, payroll processing, and performance tracking in a single, unified people platform.",
      url: "#",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop",
    },
    {
      id: "item-9",
      title: "Cybersecurity Suite",
      summary:
        "Enterprise-grade threat detection and prevention systems to protect your business data and infrastructure from evolving cyber threats.",
      url: "#",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
    },
    {
      id: "item-10",
      title: "Financial Reporting",
      summary:
        "Automated financial audits, real-time tax compliance, and advanced cloud accounting for modern global enterprises.",
      url: "#",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    },
  ],
};

export default function GallerySection() {
  return <Gallery6 {...galleryData} />;
}
