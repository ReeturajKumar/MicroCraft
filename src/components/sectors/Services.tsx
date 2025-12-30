import React from "react";
import {
  UserPlus,
  FolderKanban,
  Receipt,
  CheckCircle2,
  Clock,
  ArrowRight,
} from "lucide-react";

const Services: React.FC = () => {
  const features = [
    {
      icon: UserPlus,
      title: "Client Management",
      description:
        "Streamlined client onboarding with automated document collection",
      gradient: "from-purple-500 to-purple-600",
      stat: "40%",
      statLabel: "Faster",
      progress: 40,
    },
    {
      icon: FolderKanban,
      title: "Project Tracking",
      description: "Real-time project status updates with milestone tracking",
      gradient: "from-pink-500 to-pink-600",
      stat: "3x",
      statLabel: "Productivity",
      progress: 75,
    },
    {
      icon: Receipt,
      title: "Automated Billing",
      description:
        "Generate invoices automatically based on project milestones",
      gradient: "from-indigo-500 to-indigo-600",
      stat: "85%",
      statLabel: "Efficiency",
      progress: 85,
    },
  ];

  // Horizontal workflow steps
  const workflowSteps = [
    {
      icon: UserPlus,
      title: "Onboard",
      color: "from-purple-500 to-purple-600",
      delay: "0s",
    },
    {
      icon: FolderKanban,
      title: "Track",
      color: "from-pink-500 to-pink-600",
      delay: "0.2s",
    },
    {
      icon: Clock,
      title: "Deliver",
      color: "from-indigo-500 to-indigo-600",
      delay: "0.4s",
    },
    {
      icon: Receipt,
      title: "Bill",
      color: "from-purple-600 to-pink-600",
      delay: "0.6s",
    },
  ];

  return (
    <section
      id="services"
      className="relative py-4 md:py-6 lg:py-8 bg-gradient-to-br from-slate-50 via-white to-purple-50/30 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-200/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pink-200/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Header Section */}
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
            Deliver{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600">
              Exceptional Services
            </span>{" "}
            with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600">
              Intelligent Automation
            </span>
          </h2>
          <p className="text-xs md:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Transform your service delivery from client onboarding to final
            billing. Automated workflows that scale your business without
            scaling your team.
          </p>
        </div>

        {/* Problem & Solution - Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
          {/* Problem Card */}
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-3">
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 rounded-lg bg-red-500 flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                <span className="text-[10px] font-bold">!</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xs font-bold text-red-900 mb-1">
                  The Problem
                </h3>
                <p className="text-[10px] text-slate-700 leading-relaxed">
                  Manual client onboarding processes. Project tracking
                  challenges. Delayed invoicing. Time-consuming administrative
                  tasks reduce productivity.
                </p>
              </div>
            </div>
          </div>

          {/* Solution Card */}
          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-3">
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 rounded-lg bg-green-500 flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                <CheckCircle2 size={11} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xs font-bold text-green-900 mb-1">
                  The Solution
                </h3>
                <p className="text-[10px] text-slate-700 leading-relaxed">
                  Automated client management with seamless onboarding.
                  Real-time project tracking and automated billing for faster
                  revenue recognition.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Workflow Timeline */}
        <div className="bg-white rounded-xl border-2 border-slate-200 p-4 lg:p-5 shadow-lg mb-6">
          <h3 className="text-sm md:text-base font-bold text-slate-900 mb-4 text-center">
            Service Delivery Process
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative">
            {/* Connecting Line (Horizontal) */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 transform -translate-y-1/2 z-0"></div>

            {workflowSteps.map((step, idx) => {
              const Icon = step.icon;
              const isLast = idx === workflowSteps.length - 1;
              return (
                <div
                  key={idx}
                  className="relative z-10 flex flex-col items-center gap-2 flex-1"
                >
                  {/* Step Card */}
                  <div
                    className={`bg-gradient-to-br ${step.color} rounded-lg p-3 text-white shadow-md group hover:scale-110 transition-transform duration-300 w-full max-w-[140px]`}
                    style={{
                      animation: `fadeInUp 0.6s ease-out ${step.delay} forwards`,
                      opacity: 0,
                    }}
                  >
                    <div className="flex flex-col items-center text-center gap-1.5">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                        <Icon size={18} className="text-white" />
                      </div>
                      <div className="text-xs font-bold">{step.title}</div>
                    </div>
                  </div>

                  {/* Arrow (Desktop only) */}
                  {!isLast && (
                    <div className="hidden md:block absolute top-1/2 left-full transform -translate-x-1/2 -translate-y-1/2 z-20">
                      <ArrowRight
                        size={16}
                        className="text-purple-400 animate-pulse"
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Feature Cards Grid with Integrated Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="bg-white border-2 border-slate-200 rounded-xl p-4 hover:border-purple-300 hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
              >
                {/* Background Gradient on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon and Stat Row */}
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`w-10 h-10 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}
                    >
                      <Icon size={18} />
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-purple-600">
                        {feature.stat}
                      </div>
                      <div className="text-[9px] text-slate-500 font-medium">
                        {feature.statLabel}
                      </div>
                    </div>
                  </div>

                  {/* Title and Description */}
                  <h4 className="text-sm font-bold text-slate-900 mb-2 group-hover:text-purple-700 transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-[10px] text-slate-600 leading-relaxed mb-3">
                    {feature.description}
                  </p>

                  {/* Progress Bar */}
                  <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${feature.gradient} rounded-full transition-all duration-1000`}
                      style={{
                        width: `${feature.progress}%`,
                        transform: "scaleX(0)",
                        transformOrigin: "left",
                        animation: `progressFill 1.5s ease-out ${
                          idx * 0.2
                        }s forwards`,
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
