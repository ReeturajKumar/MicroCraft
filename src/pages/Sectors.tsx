import React, { useState } from "react";
import SectorsList from "../components/sectors/SectorsList";
import Manufacturing from "../components/sectors/Manufacturing";
import FoodHospitality from "../components/sectors/FoodHospitality";
import Healthcare from "../components/sectors/Healthcare";
import Services from "../components/sectors/Services";
import Logistics from "../components/sectors/Logistics";
import Agriculture from "../components/sectors/Agriculture";
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Users,
  Building2,
} from "lucide-react";
import { Link } from "react-router-dom";

const Sectors = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-screen bg-slate-50 overflow-hidden"
    >
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative w-full bg-gradient-to-br from-slate-50 via-white to-purple-50/20 overflow-hidden py-10 md:py-16 lg:py-8">
          {/* Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Grid Pattern */}
            <div
              className="absolute inset-0 opacity-[0.02]"
              style={{
                backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
                backgroundSize: "40px 40px",
              }}
            />
            {/* Gradient Orbs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-200/15 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pink-200/15 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* === LEFT COLUMN: Text Content === */}
              <div className="flex flex-col gap-6 text-left">
                {/* Heading with Rotating Text */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  Enterprise Solutions for{" "}
                  <div className="scrolling-text-container relative inline-block">
                    <div className="scrolling-text-inner flex flex-col text-left">
                      <span className="block h-[1.1em] bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-transparent bg-clip-text">
                        Every Industry
                      </span>
                      <span className="block h-[1.1em] bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-transparent bg-clip-text">
                        Your Sector
                      </span>
                      <span className="block h-[1.1em] bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-transparent bg-clip-text">
                        All Industries
                      </span>
                      <span className="block h-[1.1em] bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-transparent bg-clip-text">
                        Every Industry
                      </span>
                    </div>
                    {/* Underline Decoration */}
                    <svg
                      className="absolute w-full h-2.5 -bottom-1 left-0 text-purple-200 -z-10"
                      viewBox="0 0 100 10"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0 5 Q 50 10 100 5"
                        stroke="currentColor"
                        strokeWidth="6"
                        fill="none"
                      />
                    </svg>
                  </div>
                </h1>

                {/* Description */}
                <p className="text-base md:text-lg text-slate-600 max-w-xl leading-relaxed">
                  Tailored workflows and intelligent automation solutions
                  designed specifically for your sector. Transform complex
                  operations into streamlined, connected processes that drive
                  growth.
                </p>

                {/* Key Metrics */}
                <div className="flex flex-wrap items-center gap-4 pt-1">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                      <TrendingUp size={18} className="text-green-600" />
                    </div>
                    <div>
                      <div className="text-xl font-semibold text-slate-900">
                        6+
                      </div>
                      <div className="text-xs text-slate-500 font-normal">
                        Industry Sectors
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                      <Building2 size={18} className="text-purple-600" />
                    </div>
                    <div>
                      <div className="text-xl font-semibold text-slate-900">
                        500+
                      </div>
                      <div className="text-xs text-slate-500 font-normal">
                        Enterprises Served
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center">
                      <Users size={18} className="text-indigo-600" />
                    </div>
                    <div>
                      <div className="text-xl font-semibold text-slate-900">
                        98%
                      </div>
                      <div className="text-xs text-slate-500 font-normal">
                        Client Satisfaction
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-start gap-3 pt-1">
                  <Link
                    to="/case-studies"
                    className="group relative bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-pink-700 hover:via-purple-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl hover:shadow-purple-500/20 flex items-center gap-2 text-sm md:text-base hover:-translate-y-0.5"
                  >
                    <span>View Case Studies</span>
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                    <div className="absolute inset-0 rounded-lg bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </Link>
                  <a
                    href="#sectors"
                    className="px-6 py-3 rounded-lg font-medium text-slate-700 hover:text-slate-900 border border-slate-200 hover:border-slate-300 transition-all flex items-center gap-2 text-sm md:text-base"
                  >
                    Explore Sectors
                  </a>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap items-center gap-4 pt-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="text-green-600" size={16} />
                    <span className="text-sm text-slate-600 font-medium">
                      Enterprise-Grade Security
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="text-green-600" size={16} />
                    <span className="text-sm text-slate-600 font-medium">
                      24/7 Support
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="text-green-600" size={16} />
                    <span className="text-sm text-slate-600 font-medium">
                      Custom Implementation
                    </span>
                  </div>
                </div>
              </div>

              {/* === RIGHT COLUMN: Visual Dashboard === */}
              <div className="relative h-[400px] md:h-[480px] lg:h-[520px] w-full flex items-center justify-center lg:justify-end">
                {/* Main Visual Container */}
                <div className="relative z-10 w-full max-w-lg">
                  {/* Background Blob */}
                  <div className="absolute top-8 left-0 w-full h-full bg-gradient-to-br from-purple-200/40 via-pink-200/40 to-indigo-200/40 rounded-full blur-3xl -z-10"></div>

                  {/* Dashboard Card */}
                  <div className="relative bg-white rounded-2xl shadow-2xl border-2 border-slate-100 overflow-hidden">
                    {/* Dashboard Header */}
                    <div className="bg-gradient-to-r from-slate-900 to-slate-800 px-6 py-4 border-b border-slate-700">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                          <span className="ml-4 text-sm font-semibold text-white">
                            Industry Dashboard
                          </span>
                        </div>
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                      </div>
                    </div>

                    {/* Dashboard Content */}
                    <div className="p-4 bg-slate-50">
                      {/* Sector Performance Charts - Grid Layout */}
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        {[
                          {
                            name: "Manufacturing",
                            value: 92,
                            color: "from-purple-500 to-purple-600",
                            bgColor: "bg-purple-50",
                            shortName: "Mfg",
                          },
                          {
                            name: "Food & Hospitality",
                            value: 88,
                            color: "from-orange-500 to-orange-600",
                            bgColor: "bg-orange-50",
                            shortName: "Food",
                          },
                          {
                            name: "Healthcare",
                            value: 95,
                            color: "from-red-500 to-red-600",
                            bgColor: "bg-red-50",
                            shortName: "Health",
                          },
                          {
                            name: "Services",
                            value: 85,
                            color: "from-blue-500 to-blue-600",
                            bgColor: "bg-blue-50",
                            shortName: "Services",
                          },
                          {
                            name: "Logistics",
                            value: 90,
                            color: "from-green-500 to-green-600",
                            bgColor: "bg-green-50",
                            shortName: "Logistics",
                          },
                          {
                            name: "Agriculture",
                            value: 87,
                            color: "from-emerald-500 to-emerald-600",
                            bgColor: "bg-emerald-50",
                            shortName: "Agri",
                          },
                        ].map((sector, idx) => (
                          <div
                            key={idx}
                            className={`${sector.bgColor} rounded-lg p-2.5 border border-slate-200/50 hover:shadow-md transition-all duration-300`}
                          >
                            <div className="flex items-center justify-between mb-1.5">
                              <span className="text-[10px] font-semibold text-slate-700 leading-tight">
                                {sector.shortName}
                              </span>
                              <span className="text-xs font-bold text-slate-900">
                                {sector.value}%
                              </span>
                            </div>
                            <div className="relative h-1.5 bg-white/60 rounded-full overflow-hidden">
                              <div
                                className={`h-full bg-gradient-to-r ${sector.color} rounded-full`}
                                style={{
                                  width: `${sector.value}%`,
                                  transform: "scaleX(0)",
                                  transformOrigin: "left",
                                  animation: `progressFill 1.2s ease-out ${
                                    idx * 0.15
                                  }s forwards`,
                                }}
                              />
                              {/* Animated shimmer effect */}
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer pointer-events-none"></div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Overall Stats */}
                      <div className="bg-white rounded-lg p-3 border border-slate-200">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-semibold text-slate-700">
                            Overall Performance
                          </span>
                          <span className="text-xs font-bold text-green-600 flex items-center gap-1">
                            <TrendingUp size={11} />
                            +42%
                          </span>
                        </div>
                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden relative">
                          <div
                            className="h-full bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 rounded-full"
                            style={{
                              width: "89%",
                              transform: "scaleX(0)",
                              transformOrigin: "left",
                              animation:
                                "progressFill 1.5s ease-out 0.8s forwards",
                            }}
                          />
                          {/* Animated shimmer effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer pointer-events-none"></div>
                        </div>
                        <div className="flex justify-between mt-2 text-[9px] text-slate-500">
                          <span className="flex items-center gap-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                            6 Sectors Active
                          </span>
                          <span>500+ Clients</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Card 1: Growth Metric */}
                  <div className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-md p-3 rounded-xl shadow-lg border border-slate-200 flex items-center gap-3 z-20 animate-float">
                    <div className="bg-gradient-to-br from-green-400 to-emerald-500 p-2 rounded-lg text-white shadow-md">
                      <TrendingUp size={16} />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-500 font-normal">
                        Growth Rate
                      </div>
                      <div className="text-lg font-semibold text-slate-900">
                        +140%
                      </div>
                    </div>
                  </div>

                  {/* Floating Card 2: Active Sectors */}
                  <div
                    className="absolute top-1/2 -left-4 bg-white/95 backdrop-blur-md p-3 rounded-xl shadow-lg border border-slate-200 z-20 w-36 animate-float"
                    style={{ animationDelay: "1s" }}
                  >
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-1.5 rounded-lg text-white shadow-md">
                        <Building2 size={14} />
                      </div>
                      <div>
                        <div className="text-[10px] text-slate-500 font-normal">
                          Active Sectors
                        </div>
                        <div className="text-xl font-semibold text-slate-900">
                          6
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] text-emerald-600 font-medium">
                      <TrendingUp size={10} />
                      <span>All operational</span>
                    </div>
                  </div>

                  {/* Floating Card 3: Automation Status */}
                  <div
                    className="absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-md p-3 rounded-xl shadow-lg border border-slate-200 z-20 w-44 animate-float"
                    style={{ animationDelay: "0.5s" }}
                  >
                    <div className="flex justify-between items-start mb-1.5">
                      <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-2 rounded-lg text-white shadow-md">
                        <CheckCircle2 size={14} />
                      </div>
                      <CheckCircle2 size={14} className="text-emerald-500" />
                    </div>
                    <h4 className="font-semibold text-slate-900 text-xs mb-0.5">
                      Automation Active
                    </h4>
                    <p className="text-[10px] text-slate-600 leading-relaxed">
                      98% processes automated
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sectors List Section */}
        <SectorsList />

        {/* Individual Sector Components */}
        <Manufacturing />
        <FoodHospitality />
        <Healthcare />
        <Services />
        <Logistics />
        <Agriculture />

        {/* Sector Workflows Section */}
        {/* <SectorWorkflows /> */}

        {/* CTA Section */}
        <section className="relative py-10 md:py-12 bg-gradient-to-br from-purple-600 via-pink-600 to-indigo-600 overflow-hidden">
          {/* Background Decorative Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2.5 leading-tight">
              Ready to Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-white">Business</span>?
            </h2>
            <p className="text-sm md:text-base text-white/90 mb-6 max-w-2xl mx-auto leading-relaxed">
              Get started with industry-specific solutions tailored to your needs. Join 500+ enterprises already transforming their operations.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <Link
                to="/products/crm"
                className="group relative px-6 py-2.5 bg-white text-purple-600 rounded-lg font-semibold hover:shadow-xl hover:shadow-white/20 transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2 overflow-hidden text-sm md:text-base"
              >
                <span className="relative z-10">Explore Products</span>
                <ArrowRight
                  size={16}
                  className="relative z-10 group-hover:translate-x-1 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>
              <Link
                to="/case-studies"
                className="group relative px-6 py-2.5 bg-transparent border-2 border-white/80 text-white rounded-lg font-semibold hover:bg-white/10 hover:border-white transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2 backdrop-blur-sm text-sm md:text-base"
              >
                <span>View Case Studies</span>
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center items-center gap-4 pt-5 border-t border-white/20">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="text-white" size={14} />
                <span className="text-xs md:text-sm text-white/90 font-medium">No Credit Card Required</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="text-white" size={14} />
                <span className="text-xs md:text-sm text-white/90 font-medium">Expert Consultation</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="text-white" size={14} />
                <span className="text-xs md:text-sm text-white/90 font-medium">24/7 Support</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-200/20 rounded-full blur-[120px] mix-blend-multiply" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-pink-200/20 rounded-full blur-[120px] mix-blend-multiply" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(124, 58, 237, 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(124, 58, 237, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
            maskImage: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
            WebkitMaskImage: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
          }}
        />
        <div
          className="absolute h-[300px] w-[300px] rounded-full bg-purple-400/20 blur-[80px] transition-transform duration-75 ease-out"
          style={{
            left: mousePos.x,
            top: mousePos.y,
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>
    </div>
  );
};

export default Sectors;
