import React, { useState } from "react";
import { Phone, Mail, ArrowRight, Check, Loader2, MessageSquare } from "lucide-react";
import { submitContactForm, type ContactFormData } from "../lib/api";

const ContactSales = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const contactData: ContactFormData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        message: formData.message || "Interested in learning more about your sales solutions.",
        reason: "Sales Inquiry",
      };

      const response = await submitContactForm(contactData);

      if (response.success) {
        setSubmitStatus({
          type: "success",
          message: "Thank you! Our sales team will contact you within 24 hours.",
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
      }
    } catch (error: any) {
      setSubmitStatus({
        type: "error",
        message: error.message || "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/20 overflow-hidden py-8 sm:py-12 md:py-16 lg:py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] bg-purple-200/15 rounded-full blur-2xl sm:blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] bg-blue-200/15 rounded-full blur-2xl sm:blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8 max-w-7xl relative z-10">
        {/* Main Container */}
        <div className="w-full bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-slate-200/60 overflow-hidden grid lg:grid-cols-2">
          {/* Left Section: Context & Trust */}
          <div className="p-8 lg:p-16 bg-gradient-to-br from-slate-50/80 to-blue-50/30 border-r border-slate-200/60 flex flex-col justify-center">
            <div className="max-w-md">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-5">
                Let's Talk{" "}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-transparent bg-clip-text">
                  Sales
                </span>
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed mb-10">
                Get in touch with our sales team to learn how Microkraft can help your business grow. We'll provide a customized solution tailored to your needs.
              </p>

              {/* Benefits List */}
              <div className="space-y-4 mb-10">
                {[
                  {
                    title: "Customized pricing for your business",
                    desc: "Flexible plans that scale with you",
                  },
                  {
                    title: "Dedicated sales support",
                    desc: "Expert guidance throughout your journey",
                  },
                  {
                    title: "Quick response",
                    desc: "We'll respond within 24 hours",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <Check className="w-4 h-4 text-blue-600 stroke-[2.5]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-800 mb-0.5">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact Footer */}
              <div className="pt-8 border-t border-slate-200/60">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a
                    href="mailto:sales@microkraft.ai"
                    className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors group"
                  >
                    <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>sales@microkraft.ai</span>
                  </a>
                  <a
                    href="tel:+919876543210"
                    className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors group"
                  >
                    <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>+91 98765 43210</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section: Form */}
          <div className="p-8 lg:p-16 bg-white flex flex-col justify-center">
            <div className="w-full">
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                  Contact Our Sales Team
                </h2>
                <p className="text-sm sm:text-base text-slate-600">
                  Fill out the form below and we'll get back to you with pricing and solutions tailored to your business.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all text-sm outline-none"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">
                      Company *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Acme Corp"
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all text-sm outline-none"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all text-sm outline-none"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91..."
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all text-sm outline-none"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">
                    Message
                  </label>
                  <textarea
                    placeholder="Tell us about your business needs and requirements..."
                    rows={4}
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all text-sm outline-none resize-none"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                {submitStatus.type && (
                  <div
                    className={`p-4 rounded-lg ${
                      submitStatus.type === "success"
                        ? "bg-green-50 border border-green-200 text-green-800"
                        : "bg-red-50 border border-red-200 text-red-800"
                    }`}
                  >
                    <p className="text-sm font-medium">{submitStatus.message}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 hover:from-blue-700 hover:via-purple-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white py-3.5 rounded-lg font-semibold text-sm sm:text-base transition-all flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Contact Sales Team
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                {/* Quick Connect Footer */}
                <div className="flex items-center justify-center gap-4 pt-6 border-t border-slate-100">
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 text-sm font-semibold text-slate-600 hover:text-green-600 hover:border-green-200 hover:bg-green-50 transition-all"
                  >
                    <MessageSquare size={16} />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href="mailto:sales@microkraft.ai"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 text-sm font-semibold text-slate-600 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-all"
                  >
                    <Mail size={16} />
                    <span>Email</span>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSales;

