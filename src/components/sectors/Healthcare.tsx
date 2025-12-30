import React from "react";
import {
  Heart,
  Users,
  Calendar,
  Package,
  CheckCircle2,
  TrendingUp,
  ArrowDown,
} from "lucide-react";

const Healthcare: React.FC = () => {
  const features = [
    {
      icon: Users,
      title: "Patient Management",
      description: "Comprehensive patient records with medical history and treatment plans",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      icon: Calendar,
      title: "Appointment Scheduling",
      description: "Automated appointment booking with reminders and rescheduling options",
      gradient: "from-pink-500 to-pink-600",
    },
    {
      icon: Package,
      title: "Inventory Tracking",
      description: "Real-time medication and equipment inventory with expiry alerts",
      gradient: "from-indigo-500 to-indigo-600",
    },
  ];

  const stats = [
    { value: "50%", label: "Time Saved", icon: TrendingUp },
    { value: "100%", label: "Compliance", icon: CheckCircle2 },
  ];

  // Workflow steps for visualization
  const workflowSteps = [
    {
      icon: Users,
      title: "Patient Registration",
      color: "from-purple-500 to-purple-600",
      delay: "0s",
    },
    {
      icon: Calendar,
      title: "Appointment Booking",
      color: "from-pink-500 to-pink-600",
      delay: "0.3s",
    },
    {
      icon: Heart,
      title: "Treatment",
      color: "from-indigo-500 to-indigo-600",
      delay: "0.6s",
    },
    {
      icon: Package,
      title: "Follow-up",
      color: "from-purple-600 to-pink-600",
      delay: "0.9s",
    },
  ];

  return (
    <section
      id="healthcare"
      className="relative py-4 md:py-6 lg:py-8 bg-gradient-to-br from-slate-50 via-white to-purple-50/30 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-200/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pink-200/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-start">
          {/* === LEFT COLUMN: Content === */}
          <div className="space-y-3">
            {/* Header */}
            <div className="mb-3">
              <div className="flex items-start gap-2.5 mb-2">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white shadow-lg flex-shrink-0">
                  <Heart size={18} />
                </div>
                <div className="flex-1">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-purple-600 mb-0.5">
                    Medical & Pharma
                  </div>
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-900">
                    Healthcare
                  </h2>
                </div>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                Manage patient records, appointments, and inventory with compliance-focused
                solutions. Streamline healthcare operations with automated workflows.
              </p>
            </div>

            {/* Problem & Solution Cards */}
            <div className="grid grid-cols-1 gap-2">
              {/* Problem Card */}
              <div className="bg-red-50 border-2 border-red-200 rounded-lg p-2.5">
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-lg bg-red-500 flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                    <span className="text-[10px] font-bold">!</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xs font-bold text-red-900 mb-0.5">
                      The Problem
                    </h3>
                    <p className="text-[10px] text-slate-700 leading-relaxed">
                      Manual patient record management. Missed appointments. Inventory tracking
                      challenges. Compliance requirements add complexity to daily operations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Solution Card */}
              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-2.5">
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-lg bg-green-500 flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                    <CheckCircle2 size={11} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xs font-bold text-green-900 mb-0.5">
                      The Solution
                    </h3>
                    <p className="text-[10px] text-slate-700 leading-relaxed">
                      Automated patient management system with appointment scheduling and inventory
                      tracking. Compliance-ready solutions for healthcare providers.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-sm md:text-base font-bold text-slate-900 mb-2">
                Key Features
              </h3>
              <div className="space-y-1.5">
                {features.map((feature, idx) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-white border-2 border-slate-200 rounded-lg p-2 hover:border-purple-300 hover:shadow-md transition-all duration-300 group"
                    >
                      <div className="flex items-start gap-2">
                        <div
                          className={`w-6 h-6 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform flex-shrink-0 mt-0.5`}
                        >
                          <Icon size={12} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-xs font-bold text-slate-900 mb-0.5">
                            {feature.title}
                          </h4>
                          <p className="text-[10px] text-slate-600 leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-2">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={idx}
                    className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-100 rounded-lg p-2"
                  >
                    <div className="flex items-start gap-2">
                      <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-md flex-shrink-0 mt-0.5">
                        <Icon size={12} />
                      </div>
                      <div className="flex-1">
                        <div className="text-base font-bold text-purple-600 mb-0.5">
                          {stat.value}
                        </div>
                        <div className="text-[10px] text-slate-600 font-medium">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* === RIGHT COLUMN: Visual Workflow === */}
          <div className="relative">
            <div className="bg-white rounded-xl border-2 border-slate-200 p-4 lg:p-5 shadow-lg sticky top-4">
              <h3 className="text-sm md:text-base font-bold text-slate-900 mb-4 text-center">
                Healthcare Workflow
              </h3>

              {/* Workflow Visualization */}
              <div className="space-y-2.5">
                {workflowSteps.map((step, idx) => {
                  const Icon = step.icon;
                  const isLast = idx === workflowSteps.length - 1;
                  return (
                    <div key={idx}>
                      {/* Step Card */}
                      <div
                        className={`bg-gradient-to-br ${step.color} rounded-lg p-3 text-white shadow-md group hover:scale-105 transition-transform duration-300`}
                        style={{
                          animation: `fadeInUp 0.6s ease-out ${step.delay} forwards`,
                          opacity: 0,
                        }}
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                            <Icon size={16} className="text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="text-[10px] font-semibold opacity-90 mb-0.5">
                              Step {idx + 1}
                            </div>
                            <div className="text-xs font-bold">{step.title}</div>
                          </div>
                          {!isLast && (
                            <ArrowDown
                              size={14}
                              className="text-white/70 animate-bounce"
                            />
                          )}
                        </div>
                      </div>

                      {/* Connecting Arrow (except last) */}
                      {!isLast && (
                        <div className="flex justify-center py-1">
                          <div className="w-0.5 h-3 bg-gradient-to-b from-purple-300 to-pink-300"></div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Progress Indicator */}
              <div className="mt-5 pt-4 border-t border-slate-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-semibold text-slate-700">
                    Patient Care Efficiency
                  </span>
                  <span className="text-[10px] font-bold text-green-600">95%</span>
                </div>
                <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 rounded-full transition-all duration-1000"
                    style={{
                      width: "95%",
                      transform: "scaleX(0)",
                      transformOrigin: "left",
                      animation: "progressFill 1.5s ease-out 1.2s forwards",
                    }}
                  />
                </div>
              </div>

              {/* Floating Stats */}
              <div className="mt-4 grid grid-cols-2 gap-2">
                <div className="bg-slate-50 rounded-lg p-2 border border-slate-200">
                  <div className="text-base font-bold text-slate-900">50%</div>
                  <div className="text-[9px] text-slate-600">Time Saved</div>
                </div>
                <div className="bg-slate-50 rounded-lg p-2 border border-slate-200">
                  <div className="text-base font-bold text-slate-900">100%</div>
                  <div className="text-[9px] text-slate-600">Compliance</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Healthcare;
