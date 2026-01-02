import React from "react";
import { Link } from "react-router-dom";
import {
  BookOpen,
  FileText,
  TrendingUp,
  FileCheck,
  HelpCircle,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

const Resources = () => {
  const businessGuides = [
    {
      title: "How to Never Miss a Lead Again",
      description: "A practical guide to setting up automated lead capture and follow-up systems",
      category: "Sales & Lead Management",
      readTime: "5 min read",
    },
    {
      title: "Customer Support Without Chaos",
      description: "Learn how to automate customer support and reduce response times",
      category: "Customer Support",
      readTime: "7 min read",
    },
    {
      title: "Owner-Level Business Visibility",
      description: "Get clear insights into your business performance without drowning in data",
      category: "Business Insights",
      readTime: "6 min read",
    },
    {
      title: "Operations Automation for Growing Businesses",
      description: "Streamline your operations and reduce manual work with smart automation",
      category: "Operations",
      readTime: "8 min read",
    },
  ];

  const playbooks = [
    {
      title: "Lead Management Checklist",
      description: "Step-by-step checklist to ensure no lead falls through the cracks",
      icon: FileCheck,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Customer Onboarding Playbook",
      description: "Best practices for onboarding new customers smoothly and efficiently",
      icon: FileText,
      color: "from-blue-500 to-indigo-500",
    },
    {
      title: "Sales Pipeline Optimization",
      description: "A practical guide to improving your sales conversion rates",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Support Automation Setup",
      description: "Quick setup guide for automating customer support workflows",
      icon: BookOpen,
      color: "from-orange-500 to-red-500",
    },
  ];

  const industryInsights = [
    {
      title: "Restaurant & Hospitality Trends 2024",
      description: "Key trends and challenges facing restaurants and cafes this year",
      industry: "Food & Hospitality",
    },
    {
      title: "Manufacturing Operations Report",
      description: "How manufacturing businesses are optimizing their operations",
      industry: "Manufacturing",
    },
    {
      title: "Healthcare Automation Insights",
      description: "Latest trends in healthcare facility management and patient care",
      industry: "Healthcare",
    },
    {
      title: "Service Business Growth Strategies",
      description: "Proven strategies for scaling service-based businesses",
      industry: "Services",
    },
  ];

  const faqs = [
    {
      question: "How quickly can I set up automation for my business?",
      answer: "Most businesses can have basic automation running within 48 hours. We handle the setup, so you don't need technical expertise.",
    },
    {
      question: "Will this work with my existing tools?",
      answer: "Yes, we integrate with 50+ popular tools including WhatsApp, Shopify, Razorpay, and more. Your existing systems continue to work—we just connect them better.",
    },
    {
      question: "Do I need to train my team?",
      answer: "Minimal training required. Our systems are designed to be simple. We provide onboarding support and documentation to get your team comfortable quickly.",
    },
    {
      question: "What if my business needs are unique?",
      answer: "Every business is different. We customize our solutions to match how you actually operate, not force you into predefined workflows.",
    },
    {
      question: "How much does it cost?",
      answer: "Pricing depends on your specific needs. We offer flexible plans that scale with your business. Schedule a consultation to get a custom quote.",
    },
    {
      question: "What kind of support do you provide?",
      answer: "We provide 24/7 support, regular check-ins, and dedicated account management. We're here to help your business succeed, not just sell you software.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/30 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] bg-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] bg-pink-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 sm:mb-8 leading-tight">
                <span className="block mb-2">Resources to Help</span>
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                    Your Business Grow
                  </span>
                  <span className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-purple-200 via-pink-200 to-purple-200 opacity-60 rounded-full -z-0 blur-sm"></span>
                  <span className="absolute -bottom-1 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 opacity-80 rounded-full -z-0"></span>
                </span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
                Practical guides, playbooks, and insights to help you run your business smoother, faster, and smarter.
              </p>
            </div>
          </div>
        </section>

        {/* Business Guides Section */}
        <section className="relative py-8 sm:py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="flex items-center gap-3 mb-8 sm:mb-10">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Business Guides</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {businessGuides.map((guide, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 sm:p-8 border-2 border-slate-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">
                      {guide.category}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">{guide.readTime}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">{guide.title}</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">{guide.description}</p>
                  <button className="text-purple-600 font-semibold hover:text-purple-700 flex items-center gap-2 group">
                    Read Guide
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Playbooks and Checklists Section */}
        <section className="relative py-8 sm:py-12 md:py-16 bg-white/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="flex items-center gap-3 mb-8 sm:mb-10">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center">
                <FileCheck className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Playbooks & Checklists</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {playbooks.map((playbook, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border-2 border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${playbook.color} flex items-center justify-center mb-4`}>
                    <playbook.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{playbook.title}</h3>
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed">{playbook.description}</p>
                  <button className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2 text-sm group">
                    Download
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Insights Section */}
        <section className="relative py-8 sm:py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="flex items-center gap-3 mb-8 sm:mb-10">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Industry Insights</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {industryInsights.map((insight, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 sm:p-8 border-2 border-slate-200 hover:border-green-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                      {insight.industry}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">{insight.title}</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">{insight.description}</p>
                  <button className="text-green-600 font-semibold hover:text-green-700 flex items-center gap-2 group">
                    Read Report
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Stories Section */}
        <section className="relative py-8 sm:py-12 md:py-16 bg-white/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="flex items-center gap-3 mb-8 sm:mb-10">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Case Stories</h2>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 sm:p-10 md:p-12 border-2 border-purple-200">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                  Real Stories from Real Businesses
                </h3>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  See how businesses like yours are solving problems and growing with our solutions.
                </p>
                <Link
                  to="/case-studies"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
                >
                  View All Case Studies
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative py-8 sm:py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="flex items-center gap-3 mb-8 sm:mb-10">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                <HelpCircle className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 sm:p-8 border-2 border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all duration-300"
                >
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" />
                    {faq.question}
                  </h3>
                  <p className="text-slate-600 leading-relaxed ml-8">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-12 sm:py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 sm:p-10 md:p-12 text-center text-white">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Need More Help?
              </h2>
              <p className="text-lg sm:text-xl mb-8 opacity-90">
                Talk to a business consultant and get personalized guidance for your business.
              </p>
              <Link
                to="/consultation"
                className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
              >
                Schedule a Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resources;

