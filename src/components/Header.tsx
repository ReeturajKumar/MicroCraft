import React, { useEffect, useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  BarChart3,
  LayoutGrid,
  ArrowRight,
  Users,
  Building2,
  Scaling,
  BookOpen,
  MessageSquare,
  Handshake,
  Settings,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

type MenuItem = {
  title: string;
  description?: string;
  href: string;
};

type MenuSection = {
  title: string;
  icon: React.ReactNode;
  items: MenuItem[];
};

// Data for the 'Platform' Menu
const platformMenuData: {
  product: MenuSection;
  useCases: MenuSection;
} = {
  product: {
    title: "Product",
    icon: <BarChart3 className="w-5 h-5 text-[#7856FF]" />,
    items: [
      {
        title: "Product Analytics",
        description: "Measure & optimize products",
        href: "/product-analytics",
      },
      {
        title: "Web Analytics",
        description: "Track & improve website performance",
        href: "/web-analytics",
      },
      {
        title: "Mobile Analytics",
        description: "Analyze & refine mobile apps",
        href: "/mobile-analytics",
      },
      {
        title: "Experiments & Feature Flagging",
        description: "Validate every release",
        href: "/experiments",
      },
      {
        title: "Metric Trees",
        description: "Turn strategy into action",
        href: "/metric-trees",
      },
      {
        title: "Warehouse Connectors",
        description: "Sync trusted data",
        href: "/warehouse",
      },
      {
        title: "Session Replay",
        description: "Watch user journeys",
        href: "/session-replay",
      },
      {
        title: "Integrations",
        description: "Connect the tools you love",
        href: "/integrations",
      },
      {
        title: "Security & Privacy",
        description: "Protect customer data",
        href: "/security",
      },
    ],
  },
  useCases: {
    title: "Use Cases",
    icon: <LayoutGrid className="w-5 h-5 text-[#7856FF]" />,
    items: [
      {
        title: "Acquire New Users",
        description: "Boost marketing campaigns",
        href: "/acquire",
      },
      {
        title: "Engage Your Users",
        description: "Activate & retain more users",
        href: "/engage",
      },
      {
        title: "Grow Your Usership",
        description: "Multiply your customer base",
        href: "/grow",
      },
      {
        title: "Empower Your Team",
        description: "Allow teams to self-serve trusted data",
        href: "/empower",
      },
    ],
  },
};

// Data for the 'Solutions' Menu
const solutionsMenuData = {
  teams: {
    title: "Teams",
    icon: <Users className="w-5 h-5 text-[#7856FF]" />,
    items: [
      { title: "Product", href: "/teams/product" },
      { title: "Data", href: "/teams/data" },
      { title: "Marketing", href: "/teams/marketing" },
      { title: "Engineering", href: "/teams/engineering" },
    ],
  },
  industries: {
    title: "Industries",
    icon: <Building2 className="w-5 h-5 text-[#7856FF]" />,
    items: [
      { title: "Finance", href: "/industries/finance" },
      { title: "Media & Entertainment", href: "/industries/media" },
      { title: "B2B", href: "/industries/b2b" },
      { title: "Ecommerce", href: "/industries/ecommerce" },
      { title: "Healthcare", href: "/industries/healthcare" },
      { title: "AI", href: "/industries/ai" },
    ],
  },
  businessSize: {
    title: "Business Size",
    icon: <Scaling className="w-5 h-5 text-[#7856FF]" />,
    items: [
      { title: "Enterprise", href: "/size/enterprise" },
      { title: "Small & Midsize", href: "/size/smb" },
      { title: "Startups", href: "/size/startups" },
    ],
  },
};

// Data for the 'Resources' Menu
const resourcesMenuData = {
  usingMixpanel: {
    title: "Using MicroCraft.ai",
    icon: <BookOpen className="w-5 h-5 text-[#7856FF]" />,
    items: [
      {
        title: "Docs & Guides",
        description: "Getting started is easy",
        href: "/docs",
      },
      {
        title: "Contact Support",
        description: "Access personal help",
        href: "/support",
      },
      {
        title: "What's New",
        description: "See latest product updates",
        href: "/whats-new",
      },
    ],
  },
  community: {
    title: "Community",
    icon: <MessageSquare className="w-5 h-5 text-[#7856FF]" />,
    items: [
      {
        title: "Blog",
        description: "Explore growth strategies",
        href: "/blog",
      },
      {
        title: "Events & Webinars",
        description: "Join us virtually and in person",
        href: "/events",
      },
      {
        title: "Community",
        description: "Ask questions and learn",
        href: "/community",
      },
      {
        title: "Customer Stories",
        description: "Impact in action",
        href: "/customers",
      },
    ],
  },
  partnerships: {
    title: "Partnerships",
    icon: <Handshake className="w-5 h-5 text-[#7856FF]" />,
    items: [
      {
        title: "Become a Partner",
        description: "Partner and grow with us",
        href: "/partners",
      },
      {
        title: "Hire an Expert",
        description: "Get advanced solution support",
        href: "/experts",
      },
    ],
  },
};

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setExpandedSection(null);
  }, [location.pathname]);

  const toggleExpanded = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 font-sans ${
        mobileMenuOpen
          ? "bg-white h-[100dvh] overflow-hidden"
          : scrolled
          ? "bg-white py-3 shadow-[0_1px_3px_0_rgba(0,0,0,0.05)]"
          : "bg-white/80 backdrop-blur-md py-4 shadow-none border-b-0"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10">
          {/* LEFT: Logo + Nav */}
          <div className="flex items-center gap-10">
            {/* LOGO */}
            <Link to="/" className="flex items-center z-[110] relative">
              <span className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#1F1F1F] font-serif hover:opacity-80 transition-opacity">
                Microcraft.ai
              </span>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-2">
              <div className="flex items-center gap-8">
                {/* --- PLATFORM MEGA MENU --- */}
                <div
                  className="relative group h-full flex items-center"
                  onMouseEnter={() => setActiveDropdown("Platform")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="flex items-center gap-1.5 text-[14px] font-semibold text-[#1F1F1F] hover:text-[#7856FF] transition-colors py-2 cursor-pointer">
                    Platform
                    <ChevronDown
                      strokeWidth={2.5}
                      className={`w-3 h-3 transition-transform duration-200 mt-0.5 ${
                        activeDropdown === "Platform"
                          ? "rotate-180 text-[#7856FF]"
                          : "text-[#9CA3AF]"
                      }`}
                    />
                  </div>

                  <div
                    className={`absolute top-full -left-10 pt-4 transition-all duration-200 origin-top-left z-50 ${
                      activeDropdown === "Platform"
                        ? "opacity-100 translate-y-0 visible"
                        : "opacity-0 translate-y-2 invisible"
                    }`}
                  >
                    <div className="bg-white rounded-[24px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] p-6 w-[980px] flex gap-8 border border-gray-100">
                      {/* COL 1: PRODUCT */}
                      <div className="flex-1 space-y-4">
                        <div className="flex items-center gap-2 text-[#1F1F1F] font-bold text-sm select-none cursor-pointer">
                          {platformMenuData.product.icon}
                          {platformMenuData.product.title}
                        </div>
                        <div className="grid gap-y-3">
                          {platformMenuData.product.items.map((item) => (
                            <Link
                              key={item.title}
                              to={item.href}
                              className="group/item block cursor-pointer"
                            >
                              <div className="flex items-center gap-2">
                                <span className="font-bold text-[13px] text-[#1F1F1F] group-hover/item:text-[#7856FF] transition-colors">
                                  {item.title}
                                </span>
                                <ChevronRight className="w-3 h-3 text-[#9CA3AF] opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200" />
                              </div>
                              <p className="text-[12px] text-[#6B7280] font-medium leading-tight mt-0.5">
                                {item.description}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* COL 2: USE CASES */}
                      <div className="w-60 space-y-4">
                        <div className="flex items-center gap-2 text-[#1F1F1F] font-bold text-sm select-none cursor-pointer">
                          {platformMenuData.useCases.icon}
                          {platformMenuData.useCases.title}
                        </div>
                        <div className="grid gap-y-4">
                          {platformMenuData.useCases.items.map((item) => (
                            <Link
                              key={item.title}
                              to={item.href}
                              className="group/item block cursor-pointer"
                            >
                              <div className="flex items-center gap-2">
                                <span className="font-bold text-[13px] text-[#1F1F1F] group-hover/item:text-[#7856FF] transition-colors">
                                  {item.title}
                                </span>
                                <ChevronRight className="w-3 h-3 text-[#9CA3AF] opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200" />
                              </div>
                              <p className="text-[12px] text-[#6B7280] font-medium leading-tight mt-0.5">
                                {item.description}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* COL 3: PROMO CARD (METRIC TREES) */}
                      <div className="w-[340px]">
                        <div className="bg-gradient-to-br from-[#FFF5F5] to-[#FFF0F5] rounded-xl p-6 h-full relative overflow-hidden group/card border border-purple-50 cursor-pointer">
                          <div className="relative z-10 flex flex-col h-full">
                            <div className="inline-flex items-center px-2 py-1 bg-[#F3E8FF] rounded-md text-[#7856FF] text-[10px] uppercase font-bold tracking-wider w-fit mb-3">
                              Metric Trees
                            </div>
                            <h3 className="text-[18px] font-bold text-[#1F1F1F] leading-snug mb-2">
                              Turn strategy into action with a map for growth
                            </h3>
                            <div className="flex items-center text-[13px] font-bold text-[#1F1F1F] gap-1 group-hover/card:transition-all cursor-pointer">
                              Explore Metric Trees{" "}
                              <ArrowRight className="w-3.5 h-3.5" />
                            </div>
                            <div className="mt-8 relative">
                              <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-3 w-[180px] mx-auto relative z-20">
                                <div className="flex items-center gap-1 mb-2">
                                  <Settings className="w-3 h-3 text-slate-400" />
                                  <span className="text-[9px] text-slate-500 font-bold uppercase">
                                    Annual Recurring Revenue
                                  </span>
                                </div>
                                <div className="text-2xl font-bold text-slate-900 text-center mb-2">
                                  $1.2M
                                </div>
                                <div className="flex gap-1 justify-center">
                                  <div className="bg-green-50 text-green-600 text-[8px] font-bold px-1.5 py-0.5 rounded">
                                    +3.9%
                                  </div>
                                  <div className="bg-green-50 text-green-600 text-[8px] font-bold px-1.5 py-0.5 rounded">
                                    +12.3%
                                  </div>
                                </div>
                              </div>
                              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[1px] h-4 border-l border-dashed border-slate-300 z-10"></div>
                              <div className="absolute top-[calc(100%+16px)] left-1/2 -translate-x-1/2 w-[200px] h-[1px] border-t border-dashed border-slate-300 z-10"></div>
                              <div className="flex justify-between mt-6 relative z-10">
                                <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-2 w-[85px]">
                                  <div className="text-[8px] text-slate-500 font-bold mb-1">
                                    Referral Engagement
                                  </div>
                                  <div className="text-sm font-bold text-slate-900">
                                    27.5k
                                  </div>
                                  <div className="text-[8px] text-slate-400">
                                    users
                                  </div>
                                </div>
                                <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-2 w-[85px]">
                                  <div className="text-[8px] text-slate-500 font-bold mb-1">
                                    Day 30 Retention
                                  </div>
                                  <div className="text-sm font-bold text-slate-900">
                                    21.4%
                                  </div>
                                  <div className="text-[8px] text-slate-400">
                                    users
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* --- SOLUTIONS MEGA MENU --- */}
                <div
                  className="relative group h-full flex items-center"
                  onMouseEnter={() => setActiveDropdown("Solutions")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="flex items-center gap-1.5 text-[14px] font-semibold text-[#1F1F1F] hover:text-[#7856FF] transition-colors py-2 cursor-pointer">
                    Solutions
                    <ChevronDown
                      strokeWidth={2.5}
                      className={`w-3 h-3 transition-transform duration-200 mt-0.5 ${
                        activeDropdown === "Solutions"
                          ? "rotate-180 text-[#7856FF]"
                          : "text-[#9CA3AF]"
                      }`}
                    />
                  </div>

                  <div
                    className={`absolute top-full -left-20 pt-4 transition-all duration-200 origin-top-left z-50 ${
                      activeDropdown === "Solutions"
                        ? "opacity-100 translate-y-0 visible"
                        : "opacity-0 translate-y-2 invisible"
                    }`}
                  >
                    <div className="bg-white rounded-[24px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] p-6 w-[900px] flex gap-8 border border-gray-100">
                      {/* Teams Column */}
                      <div className="flex-1 space-y-4">
                        <div className="flex items-center gap-2 text-[#1F1F1F] font-bold text-sm select-none cursor-pointer">
                          {solutionsMenuData.teams.icon}
                          {solutionsMenuData.teams.title}
                        </div>
                        <div className="grid gap-y-2">
                          {solutionsMenuData.teams.items.map((item) => (
                            <Link
                              key={item.title}
                              to={item.href}
                              className="flex items-center justify-between group/item p-1 hover:text-[#7856FF] transition-colors cursor-pointer"
                            >
                              <span className="font-bold text-[13px] text-[#1F1F1F] group-hover/item:text-[#7856FF]">
                                {item.title}
                              </span>
                              <ChevronRight className="w-3 h-3 text-[#9CA3AF] group-hover/item:text-[#7856FF] transition-colors" />
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Industries Column */}
                      <div className="flex-1 space-y-4">
                        <div className="flex items-center gap-2 text-[#1F1F1F] font-bold text-sm select-none cursor-pointer">
                          {solutionsMenuData.industries.icon}
                          {solutionsMenuData.industries.title}
                        </div>
                        <div className="grid gap-y-2">
                          {solutionsMenuData.industries.items.map((item) => (
                            <Link
                              key={item.title}
                              to={item.href}
                              className="flex items-center justify-between group/item p-1 hover:text-[#7856FF] transition-colors cursor-pointer"
                            >
                              <span className="font-bold text-[13px] text-[#1F1F1F] group-hover/item:text-[#7856FF]">
                                {item.title}
                              </span>
                              <ChevronRight className="w-3 h-3 text-[#9CA3AF] group-hover/item:text-[#7856FF] transition-colors" />
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Business Size Column */}
                      <div className="flex-1 space-y-4">
                        <div className="flex items-center gap-2 text-[#1F1F1F] font-bold text-sm select-none cursor-pointer">
                          {solutionsMenuData.businessSize.icon}
                          {solutionsMenuData.businessSize.title}
                        </div>
                        <div className="grid gap-y-2">
                          {solutionsMenuData.businessSize.items.map((item) => (
                            <Link
                              key={item.title}
                              to={item.href}
                              className="flex items-center justify-between group/item p-1 hover:text-[#7856FF] transition-colors cursor-pointer"
                            >
                              <span className="font-bold text-[13px] text-[#1F1F1F] group-hover/item:text-[#7856FF]">
                                {item.title}
                              </span>
                              <ChevronRight className="w-3 h-3 text-[#9CA3AF] group-hover/item:text-[#7856FF] transition-colors" />
                            </Link>
                          ))}
                        </div>
                      </div>

                      <div className="w-[300px]">
                        <div className="bg-gradient-to-b from-white to-orange-50/50 rounded-xl p-6 h-full relative overflow-hidden group/card border border-orange-100/50 cursor-pointer">
                          <div className="relative z-10 flex flex-col h-full">
                            <span className="text-[10px] uppercase tracking-wider font-bold text-[#7856FF] mb-2">
                              TRANSFORM DATA INTO BUSINESS IMPACT
                            </span>
                            <h3 className="text-[18px] font-bold text-[#1F1F1F] mb-4 leading-snug">
                              Get the framework leading executives use
                            </h3>
                            <div className="inline-flex items-center text-[13px] font-bold text-[#1F1F1F] hover:text-[#7856FF] gap-1 transition-colors mb-4 cursor-pointer">
                              Unlock the Manifesto{" "}
                              <ArrowRight className="w-3.5 h-3.5" />
                            </div>
                            <div className="mt-auto relative flex items-center justify-center py-6">
                              <div className="absolute inset-0 bg-orange-400/20 blur-[40px] rounded-full" />
                              <div className="relative z-10 text-center">
                                <div className="text-[9px] font-medium text-slate-800">
                                  The future will be decided in the
                                </div>
                                <div className="text-xl font-black text-slate-900 tracking-tight">
                                  Messy Middle
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* --- RESOURCES MEGA MENU --- */}
                <div
                  className="relative group h-full flex items-center"
                  onMouseEnter={() => setActiveDropdown("Resources")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="flex items-center gap-1.5 text-[14px] font-semibold text-[#1F1F1F] hover:text-[#7856FF] transition-colors py-2 cursor-pointer">
                    Resources
                    <ChevronDown
                      strokeWidth={2.5}
                      className={`w-3 h-3 transition-transform duration-200 mt-0.5 ${
                        activeDropdown === "Resources"
                          ? "rotate-180 text-[#7856FF]"
                          : "text-[#9CA3AF]"
                      }`}
                    />
                  </div>

                  <div
                    className={`absolute top-full -left-40 pt-4 transition-all duration-200 origin-top-left z-50 ${
                      activeDropdown === "Resources"
                        ? "opacity-100 translate-y-0 visible"
                        : "opacity-0 translate-y-2 invisible"
                    }`}
                  >
                    <div className="bg-white rounded-[24px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] p-6 w-[960px] flex gap-8 border border-gray-100">
                      <div className="flex-1 space-y-4">
                        <div className="flex items-center gap-2 text-[#1F1F1F] font-bold text-sm select-none cursor-pointer">
                          {resourcesMenuData.usingMixpanel.icon}
                          {resourcesMenuData.usingMixpanel.title}
                        </div>
                        <div className="grid gap-y-3">
                          {resourcesMenuData.usingMixpanel.items.map((item) => (
                            <Link
                              key={item.title}
                              to={item.href}
                              className="group/item block cursor-pointer"
                            >
                              <div className="flex items-center gap-2">
                                <span className="font-bold text-[13px] text-[#1F1F1F] group-hover/item:text-[#7856FF]">
                                  {item.title}
                                </span>
                                <ChevronRight className="w-3 h-3 text-[#9CA3AF] opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200" />
                              </div>
                              <p className="text-[12px] text-[#6B7280] font-medium leading-tight mt-0.5">
                                {item.description}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>

                      <div className="flex-1 space-y-4">
                        <div className="flex items-center gap-2 text-[#1F1F1F] font-bold text-sm select-none cursor-pointer">
                          {resourcesMenuData.community.icon}
                          {resourcesMenuData.community.title}
                        </div>
                        <div className="grid gap-y-3">
                          {resourcesMenuData.community.items.map((item) => (
                            <Link
                              key={item.title}
                              to={item.href}
                              className="group/item block cursor-pointer"
                            >
                              <div className="flex items-center gap-2">
                                <span className="font-bold text-[13px] text-[#1F1F1F] group-hover/item:text-[#7856FF]">
                                  {item.title}
                                </span>
                                <ChevronRight className="w-3 h-3 text-[#9CA3AF] opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200" />
                              </div>
                              <p className="text-[12px] text-[#6B7280] font-medium leading-tight mt-0.5">
                                {item.description}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>

                      <div className="flex-1 space-y-4">
                        <div className="flex items-center gap-2 text-[#1F1F1F] font-bold text-sm select-none cursor-pointer">
                          {resourcesMenuData.partnerships.icon}
                          {resourcesMenuData.partnerships.title}
                        </div>
                        <div className="grid gap-y-3">
                          {resourcesMenuData.partnerships.items.map((item) => (
                            <Link
                              key={item.title}
                              to={item.href}
                              className="group/item block cursor-pointer"
                            >
                              <div className="flex items-center gap-2">
                                <span className="font-bold text-[13px] text-[#1F1F1F] group-hover/item:text-[#7856FF]">
                                  {item.title}
                                </span>
                                <ChevronRight className="w-3 h-3 text-[#9CA3AF] opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200" />
                              </div>
                              <p className="text-[12px] text-[#6B7280] font-medium leading-tight mt-0.5">
                                {item.description}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>

                      <div className="w-[300px] space-y-3">
                        <div className="block bg-[#122B24] rounded-xl p-5 group hover:shadow-lg transition-all border border-transparent cursor-pointer">
                          <span className="inline-block px-2 py-0.5 bg-[#D4F5E9] text-[#0D2F28] text-[9px] font-bold uppercase rounded mb-2">
                            Builders
                          </span>
                          <h3 className="text-white font-bold text-[14px] leading-snug mb-2">
                            Sprig's Kevin Mandich on a decade of building with
                            ML and AI
                          </h3>
                          <div className="flex items-center text-white text-[11px] font-bold gap-1 group-hover:gap-2 transition-all">
                            Read Article <ArrowRight className="w-3 h-3" />
                          </div>
                        </div>

                        <div className="block bg-[#9F3819] rounded-xl p-5 group hover:shadow-lg transition-all border border-transparent cursor-pointer">
                          <span className="inline-block px-2 py-0.5 bg-[#FFE8E0] text-[#9F3819] text-[9px] font-bold uppercase rounded mb-2">
                            How to Build
                          </span>
                          <h3 className="text-white font-bold text-[14px] leading-snug mb-2">
                            Product analytics and the data warehouse: A long
                            road to a perfect pairing.
                          </h3>
                          <div className="flex items-center text-white text-[11px] font-bold gap-1 group-hover:gap-2 transition-all">
                            Read Article <ArrowRight className="w-3 h-3" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Link
                  to="/pricing"
                  className="flex items-center gap-1.5 text-[14px] font-semibold text-[#1F1F1F] hover:text-[#7856FF] transition-colors py-2 cursor-pointer"
                >
                  Pricing
                </Link>
              </div>
            </nav>
          </div>

          {/* RIGHT: Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            <Link
              to="/login"
              className="hidden lg:block text-[14px] font-semibold text-[#1F1F1F] hover:text-[#7856FF] transition-colors border-2 border-transparent px-4 py-2"
            >
              Log In
            </Link>
            <Link
              to="/contact"
              className="hidden sm:flex items-center gap-1 px-4 py-2.5 text-[13px] font-bold text-[#1F1F1F] bg-[#F5F5F7] hover:bg-[#E5E7EB] rounded-full transition-all"
            >
              Contact Sales <ChevronRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/signup"
              className="hidden md:flex items-center gap-1 px-5 py-2.5 text-[13px] font-bold text-white bg-[#1F1F1F] hover:bg-[#7856FF] shadow-sm hover:shadow-md rounded-full transition-all"
            >
              Schedule a Call <ChevronRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#1F1F1F] hover:bg-gray-100 rounded-lg transition-colors z-[110] relative"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU DRAWER */}
      <div
        className={`fixed inset-0 h-[100dvh] z-[105] bg-white lg:hidden transition-transform duration-500 ease-in-out transform ${
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="pt-24 pb-8 px-6 flex flex-col h-full overflow-y-auto">
          <div className="space-y-1">
            {/* Platform Mobile */}
            <div className="border-b border-gray-100">
              <button
                onClick={() => toggleExpanded("platform")}
                className="flex items-center justify-between w-full py-4 text-lg font-bold text-[#1F1F1F]"
              >
                Platform
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    expandedSection === "platform" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expandedSection === "platform"
                    ? "max-h-[800px] mb-4"
                    : "max-h-0"
                }`}
              >
                <div className="space-y-6 pt-2 pl-2">
                  <div>
                    <div className="flex items-center gap-2 text-[#7856FF] font-bold text-xs uppercase tracking-wider mb-4">
                      {platformMenuData.product.title}
                    </div>
                    <div className="grid gap-4">
                      {platformMenuData.product.items.map((item) => (
                        <Link
                          key={item.title}
                          to={item.href}
                          className="group block"
                        >
                          <div className="font-bold text-[15px] text-[#1F1F1F] group-active:text-[#7856FF]">
                            {item.title}
                          </div>
                          <div className="text-xs text-gray-500 mt-0.5">
                            {item.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-[#7856FF] font-bold text-xs uppercase tracking-wider mb-4">
                      {platformMenuData.useCases.title}
                    </div>
                    <div className="grid gap-4">
                      {platformMenuData.useCases.items.map((item) => (
                        <Link
                          key={item.title}
                          to={item.href}
                          className="group block"
                        >
                          <div className="font-bold text-[15px] text-[#1F1F1F] group-active:text-[#7856FF]">
                            {item.title}
                          </div>
                          <div className="text-xs text-gray-500 mt-0.5">
                            {item.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Solutions Mobile */}
            <div className="border-b border-gray-100">
              <button
                onClick={() => toggleExpanded("solutions")}
                className="flex items-center justify-between w-full py-4 text-lg font-bold text-[#1F1F1F]"
              >
                Solutions
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    expandedSection === "solutions" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expandedSection === "solutions"
                    ? "max-h-[800px] mb-4"
                    : "max-h-0"
                }`}
              >
                <div className="space-y-6 pt-2 pl-2">
                  <div>
                    <div className="flex items-center gap-2 text-[#7856FF] font-bold text-xs uppercase tracking-wider mb-4">
                      {solutionsMenuData.teams.title}
                    </div>
                    <div className="grid gap-3">
                      {solutionsMenuData.teams.items.map((item) => (
                        <Link
                          key={item.title}
                          to={item.href}
                          className="font-bold text-[15px] text-[#1F1F1F]"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-[#7856FF] font-bold text-xs uppercase tracking-wider mb-4">
                      {solutionsMenuData.industries.title}
                    </div>
                    <div className="grid gap-3">
                      {solutionsMenuData.industries.items.map((item) => (
                        <Link
                          key={item.title}
                          to={item.href}
                          className="font-bold text-[15px] text-[#1F1F1F]"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-[#7856FF] font-bold text-xs uppercase tracking-wider mb-4">
                      {solutionsMenuData.businessSize.title}
                    </div>
                    <div className="grid gap-3">
                      {solutionsMenuData.businessSize.items.map((item) => (
                        <Link
                          key={item.title}
                          to={item.href}
                          className="font-bold text-[15px] text-[#1F1F1F]"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Resources Mobile */}
            <div className="border-b border-gray-100">
              <button
                onClick={() => toggleExpanded("resources")}
                className="flex items-center justify-between w-full py-4 text-lg font-bold text-[#1F1F1F]"
              >
                Resources
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    expandedSection === "resources" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expandedSection === "resources"
                    ? "max-h-[800px] mb-4"
                    : "max-h-0"
                }`}
              >
                <div className="space-y-6 pt-2 pl-2">
                  <div>
                    <div className="flex items-center gap-2 text-[#7856FF] font-bold text-xs uppercase tracking-wider mb-4">
                      {resourcesMenuData.usingMixpanel.title}
                    </div>
                    <div className="grid gap-4">
                      {resourcesMenuData.usingMixpanel.items.map((item) => (
                        <Link
                          key={item.title}
                          to={item.href}
                          className="group block"
                        >
                          <div className="font-bold text-[15px] text-[#1F1F1F]">
                            {item.title}
                          </div>
                          <div className="text-xs text-gray-500 mt-0.5">
                            {item.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-[#7856FF] font-bold text-xs uppercase tracking-wider mb-4">
                      {resourcesMenuData.community.title}
                    </div>
                    <div className="grid gap-4">
                      {resourcesMenuData.community.items.map((item) => (
                        <Link
                          key={item.title}
                          to={item.href}
                          className="group block"
                        >
                          <div className="font-bold text-[15px] text-[#1F1F1F]">
                            {item.title}
                          </div>
                          <div className="text-xs text-gray-500 mt-0.5">
                            {item.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link
              to="/pricing"
              className="flex items-center justify-between w-full py-4 text-lg font-bold text-[#1F1F1F] border-b border-gray-100"
            >
              Pricing
            </Link>
          </div>

          <div className="mt-10 space-y-4">
            <Link
              to="/login"
              className="flex items-center justify-center w-full py-3.5 text-base font-bold text-[#1F1F1F] bg-gray-50 rounded-xl"
            >
              Log In
            </Link>
            <Link
              to="/signup"
              className="flex items-center justify-center w-full py-3.5 text-base font-bold text-white bg-[#1F1F1F] rounded-xl"
            >
              Schedule a Call
            </Link>
            <Link
              to="/contact"
              className="flex items-center justify-center w-full py-3.5 text-base font-bold text-[#1F1F1F] border border-gray-200 rounded-xl"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
