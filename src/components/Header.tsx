import React, { useEffect, useState } from "react";
import { Menu, X, ChevronDown, Check } from "lucide-react";
// 1. IMPORT LINK FROM ROUTER
import { Link, useLocation } from "react-router-dom";

type DropdownItem = {
  name: string;
  href: string;
  comingSoon?: boolean;
};

type NavLink = {
  name: string;
  href: string;
  dropdown?: DropdownItem[];
  comingSoon?: boolean;
};

const navLinks: NavLink[] = [
  {
    name: "Products",
    href: "/products",
    dropdown: [
      { name: "CRM & Engagement", href: "/products/crm" },
      { name: "Digital Commerce", href: "/products/commerce" },
      { name: "Analytics & AI", href: "/products/analytics" },
    ],
  },
  {
    name: "Sectors",
    href: "#",
    comingSoon: true,
    dropdown: [
      { name: "Manufacturing", href: "#", comingSoon: true },
      { name: "Food & Hospitality", href: "#", comingSoon: true },
      { name: "Healthcare", href: "#", comingSoon: true },
      { name: "Services", href: "#", comingSoon: true },
      { name: "Logistics", href: "#", comingSoon: true },
      { name: "Agriculture", href: "#", comingSoon: true },
    ],
  },
  { name: "Case Studies", href: "/case-studies" },
  {
    name: "Resources",
    href: "#",
    comingSoon: true,
    dropdown: [
      { name: "ONDC Guide", href: "#", comingSoon: true },
      { name: "WhatsApp Templates", href: "#", comingSoon: true },
      { name: "Migration Guide", href: "#", comingSoon: true },
    ],
  },
  { name: "Integrations", href: "/integrations" },
];

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeNav, setActiveNav] = useState<string | null>(null);
  const [activeSubNav, setActiveSubNav] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState<boolean>(false);

  // 2. USE LOCATION HOOK FOR ACTIVE STATES
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      handleScroll();
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  // Sync active state with URL
  useEffect(() => {
    setActiveNav(null);
    setActiveSubNav(null);

    navLinks.forEach((link) => {
      if (link.href !== "/" && currentPath.startsWith(link.href)) {
        setActiveNav(link.name);
      }
      if (link.dropdown) {
        link.dropdown.forEach((item) => {
          if (currentPath === item.href) {
            setActiveNav(link.name);
            setActiveSubNav(item.name);
          }
        });
      }
    });
  }, [currentPath]);

  const handleNavClick = (
    parentName: string,
    subItemName?: string,
    isComingSoon?: boolean
  ) => {
    if (isComingSoon) return;
    setActiveNav(parentName);
    if (subItemName) setActiveSubNav(subItemName);
    else setActiveSubNav(null);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header
      className={`w-full sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-2xl border-b border-white/20 shadow-sm"
          : "bg-white/40 backdrop-blur-xl border-b border-transparent"
      }`}
    >
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-20">
          <div className="shrink-0 relative group">
            {/* 3. REPLACED <a> with <Link> */}
            <Link
              to="/"
              className="flex items-center cursor-pointer"
              onClick={() => handleNavClick("")}
            >
              <div className="ml-3">
                <span className="text-2xl font-black tracking-tight bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 bg-clip-text text-transparent">
                  Microkraft
                </span>
                <div className="flex items-center gap-1.5 -mt-0.5">
                  <div className="h-[2px] w-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full" />
                  <span className="text-[9px] font-bold text-slate-500 tracking-[0.2em] uppercase">
                    Growth OS
                  </span>
                </div>
              </div>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center bg-white/80 rounded-full p-1.5 border border-white/60 shadow-lg ml-12 mr-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() =>
                  link.dropdown && setActiveDropdown(link.name)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {/* 4. REPLACED <a> with <Link> */}
                <Link
                  to={link.comingSoon ? "#" : link.href}
                  onClick={(e) => {
                    if (link.comingSoon) e.preventDefault();
                    handleNavClick(link.name, undefined, link.comingSoon);
                  }}
                  className={`cursor-pointer group relative flex items-center gap-1 px-5 py-2 text-sm font-semibold rounded-full transition-all duration-300 mx-0.5 ${
                    activeNav === link.name
                      ? "text-white shadow-md"
                      : link.comingSoon
                      ? "text-slate-400 cursor-default"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {activeNav === link.name && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full" />
                  )}

                  {activeNav !== link.name && !link.comingSoon && (
                    <div className="absolute inset-0 bg-slate-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}

                  <span className="relative z-10 flex items-center gap-1">
                    {link.name}
                    {link.dropdown && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-300 ${
                          activeDropdown === link.name ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </span>
                </Link>

                {link.dropdown && activeDropdown === link.name && (
                  <div className="absolute left-0 top-full mt-2 w-72 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden transform transition-all duration-300 animate-in fade-in slide-in-from-top-2">
                    <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />

                    <div className="p-2 space-y-1">
                      {link.dropdown.map((item) => {
                        const isActiveSub = activeSubNav === item.name;

                        return (
                          <div
                            key={item.name}
                            className={`group relative flex items-center justify-between px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${
                              item.comingSoon
                                ? "cursor-default opacity-70"
                                : isActiveSub
                                ? "bg-purple-50 text-purple-700 cursor-pointer"
                                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 cursor-pointer"
                            }`}
                          >
                            {item.comingSoon ? (
                              <div className="flex-1 flex items-center justify-between w-full">
                                <span className="flex items-center gap-3">
                                  <div className="w-2 h-2 rounded-full bg-slate-200" />
                                  {item.name}
                                </span>
                                <span className="text-[9px] font-bold uppercase tracking-wide text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">
                                  Soon
                                </span>
                              </div>
                            ) : (
                              /* 5. REPLACED internal dropdown divs with <Link> */
                              <Link
                                to={item.href}
                                className="flex-1 flex items-center justify-between w-full"
                                onClick={(e) => {
                                  e.stopPropagation(); // Stop bubble so we don't trigger parent click twice
                                  handleNavClick(
                                    link.name,
                                    item.name,
                                    item.comingSoon
                                  );
                                }}
                              >
                                <span className="flex items-center gap-3">
                                  <div
                                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                                      isActiveSub
                                        ? "bg-purple-600 scale-110"
                                        : "bg-slate-300 group-hover:bg-purple-400"
                                    }`}
                                  />
                                  {item.name}
                                </span>
                                {isActiveSub && (
                                  <Check className="w-4 h-4 text-purple-600" />
                                )}
                              </Link>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer group relative px-5 py-2.5 text-sm font-semibold text-slate-700 rounded-full overflow-hidden transition-all duration-300 hover:text-purple-700 bg-white border border-slate-200 hover:border-purple-200 hover:shadow-sm"
            >
              <span className="relative">WhatsApp</span>
            </a>

            <button className="cursor-pointer group relative px-6 py-2.5 text-sm font-semibold text-white rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 active:scale-95">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 transition-all duration-300 group-hover:scale-110" />
              <span className="relative flex items-center gap-2">
                Book Demo
              </span>
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="cursor-pointer lg:hidden relative p-2.5 rounded-xl text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-all duration-200"
            aria-label="Toggle menu"
            type="button"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden py-4 mt-2 mb-4 bg-white rounded-2xl border border-slate-100 shadow-xl">
            <nav className="space-y-1 px-3">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {/* 6. REPLACED Mobile <a> with <Link> */}
                  <Link
                    to={link.comingSoon ? "#" : link.href}
                    onClick={(e) => {
                      if (link.comingSoon) e.preventDefault();
                      handleNavClick(link.name, undefined, link.comingSoon);
                    }}
                    className={`cursor-pointer group relative flex items-center justify-between px-4 py-3 text-base font-semibold rounded-xl transition-all duration-300 ${
                      link.comingSoon
                        ? "text-slate-400 cursor-default"
                        : activeNav === link.name
                        ? "bg-purple-50 text-purple-700"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {link.name}
                    {link.dropdown && (
                      <ChevronDown
                        className={`w-4 h-4 ${
                          activeNav === link.name
                            ? "text-purple-600"
                            : "text-slate-400"
                        }`}
                      />
                    )}
                  </Link>

                  {link.dropdown && (
                    <div className="pl-4 mt-1 space-y-1 border-l-2 border-slate-100 ml-4 mb-2">
                      {link.dropdown.map((item) => {
                        const isActiveSub = activeSubNav === item.name;
                        return (
                          <div
                            key={item.name}
                            className={`flex items-center justify-between px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                              item.comingSoon
                                ? "text-slate-400 cursor-default"
                                : isActiveSub
                                ? "text-purple-700 bg-purple-50 cursor-pointer"
                                : "text-slate-500 hover:text-slate-900 hover:bg-slate-50 cursor-pointer"
                            }`}
                          >
                            {item.comingSoon ? (
                              <>
                                <span>{item.name}</span>
                                <span className="text-[9px] font-bold uppercase tracking-wide text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">
                                  Soon
                                </span>
                              </>
                            ) : (
                              /* 7. REPLACED Mobile Dropdown <div> with <Link> */
                              <Link
                                to={item.href}
                                className="flex-1"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleNavClick(
                                    link.name,
                                    item.name,
                                    item.comingSoon
                                  );
                                }}
                              >
                                {item.name}
                              </Link>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="mt-4 pt-4 border-t border-slate-100 px-4 space-y-3">
              <a
                href="https://wa.me/919876543210"
                className="cursor-pointer block w-full px-5 py-3 text-center text-sm font-semibold text-slate-700 rounded-xl bg-slate-50 border border-slate-200 hover:bg-slate-100 transition-all"
              >
                WhatsApp
              </a>
              <button className="cursor-pointer block w-full px-5 py-3 text-center text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:shadow-lg transition-all">
                Book Demo
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
