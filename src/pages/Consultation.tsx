import React, { useState } from "react";
import {
  Phone,
  Mail,
  MessageCircle,
  ArrowRight,
  Sparkles,
  Zap,
  ShieldCheck,
  Clock,
  Check,
} from "lucide-react";

const Consultation = () => {
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/20 overflow-hidden py-8 sm:py-12 md:py-16 lg:py-20">
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
        <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] bg-purple-200/15 rounded-full blur-2xl sm:blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] bg-pink-200/15 rounded-full blur-2xl sm:blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8 max-w-7xl relative z-10">
        {/* Main Container */}
        <div className="w-full bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-slate-200/60 overflow-hidden grid lg:grid-cols-2">
          {/* Left Section: Context & Trust */}
          <div className="p-8 lg:p-16 bg-gradient-to-br from-slate-50/80 to-purple-50/30 border-r border-slate-200/60 flex flex-col justify-center">
            <div className="max-w-md">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-5">
                Talk to a Business{" "}
                <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-transparent bg-clip-text">
                  Consultant
                </span>
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed mb-10">
                We'll first understand your business. No pressure, no sales pitch.
                Just a conversation about how we can help you run smoother.
              </p>

              {/* Benefits List */}
              <div className="space-y-4 mb-10">
                {[
                  {
                    title: "We'll listen to your business challenges first",
                    desc: "No aggressive sales tactics",
                  },
                  {
                    title: "Free process review with actionable insights",
                    desc: "Custom recommendations for your industry",
                  },
                  {
                    title: "Quick response",
                    desc: "We'll respond within 24 hours",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <Check className="w-4 h-4 text-purple-600 stroke-[2.5]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-800 mb-0.5">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-500">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact Footer */}
              <div className="pt-8 border-t border-slate-200/60">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a
                    href="mailto:hello@microkraft.in"
                    className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-purple-600 transition-colors group"
                  >
                    <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>hello@microkraft.in</span>
                  </a>
                  <a
                    href="tel:+919876543210"
                    className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-purple-600 transition-colors group"
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
                  Get in Touch
                </h2>
                <p className="text-sm sm:text-base text-slate-600">
                  Provide your details to schedule a call. We'll respond within 24 hours.
                </p>
              </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Alex Rivera"
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-100 transition-all text-sm outline-none"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">
                    Company
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Acme Corp"
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-100 transition-all text-sm outline-none"
                    value={formData.business}
                    onChange={(e) =>
                      setFormData({ ...formData, business: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@work.com"
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-100 transition-all text-sm outline-none"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91..."
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-100 transition-all text-sm outline-none"
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
                  required
                  placeholder="Tell us about your technical challenges..."
                  rows={4}
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-100 transition-all text-sm outline-none resize-none"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 hover:from-purple-700 hover:via-pink-700 hover:to-purple-700 text-white py-3.5 rounded-lg font-semibold text-sm sm:text-base transition-all flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl"
              >
                Request Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Quick Connect Footer */}
              <div className="flex items-center justify-center gap-4 pt-6 border-t border-slate-100">
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 text-sm font-semibold text-slate-600 hover:text-green-600 hover:border-green-200 hover:bg-green-50 transition-all"
                >
                  <MessageCircle size={16} />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="mailto:hello@microkraft.in"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 text-sm font-semibold text-slate-600 hover:text-purple-600 hover:border-purple-200 hover:bg-purple-50 transition-all"
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

export default Consultation;
