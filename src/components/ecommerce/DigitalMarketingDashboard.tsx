import {
  ArrowRight,
  Heart,
  CheckCircle2,
  Globe,
  BarChart3,
  Megaphone,
} from "lucide-react";

export default function DigitalMarketingDashboard() {
  return (
    <>
      {/* --- CSS ANIMATIONS --- */}
      <style>{`
        @keyframes slideUp {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes growHeight {
          from { height: 0; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        /* Utility classes for animations */
        .animate-slide-up {
          animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0; /* Start hidden */
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-grow {
          animation: growHeight 1s ease-out forwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        /* Stagger delays */
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-500 { animation-delay: 500ms; }
        .delay-700 { animation-delay: 700ms; }
      `}</style>

      <div className="min-h-screen bg-slate-50 p-4 md:p-8 flex items-center justify-center font-sans text-slate-800">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* --- LEFT COLUMN --- */}
          <div className="lg:col-span-3 flex flex-col h-full">
            <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100 h-full flex flex-col justify-between hover:shadow-xl transition-shadow duration-300">
              <div>
                {/* Heading with Reveal Effect */}
                <h2 className="text-2xl font-bold leading-tight mb-2">
                  <div className="overflow-hidden">
                    <div className="animate-slide-up delay-100">
                      Mastering the Art of
                    </div>
                  </div>
                  <div className="overflow-hidden">
                    <div className="animate-slide-up delay-200 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                      Digital Marketing
                    </div>
                  </div>
                </h2>

                {/* 3D Icon Representation */}
                <div className="py-12 flex justify-center relative animate-fade-in delay-300">
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-100/50 to-pink-100/50 rounded-full blur-3xl opacity-60" />
                  <div className="relative animate-float">
                    <div className="bg-gradient-to-br from-pink-400 to-purple-600 p-6 rounded-3xl shadow-2xl shadow-purple-500/30 text-white transform rotate-12 transition-transform hover:rotate-0 duration-500">
                      <Megaphone size={64} strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="overflow-hidden mb-6">
                  <p className="text-slate-500 text-sm leading-relaxed animate-slide-up delay-400">
                    Program that goes beyond the basics, offering you a deep
                    dive into the art and science of digital marketing.
                  </p>
                </div>

                <div className="animate-fade-in delay-500">
                  <button className="group flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-purple-600 transition-colors">
                    Learn More
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* --- CENTER COLUMN (Image & Floating UI) --- */}
          <div className="lg:col-span-5 h-[500px] lg:h-auto">
            <div className="bg-slate-100 rounded-[2rem] h-full relative p-0 flex items-end justify-center overflow-hidden border border-slate-200">
              {/* Background Blobs */}
              <div className="absolute top-10 left-10 w-32 h-32 bg-purple-300 rounded-full blur-[80px] opacity-40 mix-blend-multiply" />
              <div className="absolute top-10 right-10 w-32 h-32 bg-pink-300 rounded-full blur-[80px] opacity-40 mix-blend-multiply" />

              {/* Main Image */}
              <img
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=687&auto=format&fit=crop"
                alt="Student"
                className="relative z-10 w-3/4 object-cover object-top h-[90%] rounded-t-3xl animate-fade-in delay-300"
              />

              {/* Floating UI: Google Ads (Left) */}
              <div className="absolute top-1/3 left-4 z-20 bg-white p-3 rounded-2xl shadow-xl shadow-purple-900/5 w-40 animate-fade-in delay-500">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center">
                    <span className="font-bold text-xs text-blue-500">G</span>
                  </div>
                  <span className="text-[10px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded-full font-medium flex items-center gap-1">
                    <CheckCircle2 size={8} /> Verified
                  </span>
                </div>
                <p className="font-semibold text-sm text-slate-800">
                  Google Ads
                </p>
                <div className="flex text-[10px] text-slate-400 gap-1">
                  <span className="text-slate-900 font-medium">4.8/5</span>{" "}
                  Stars Reviews
                </div>
              </div>

              {/* Floating UI: Growth Chart (Right) */}
              <div className="absolute top-10 right-4 z-20 bg-white p-3 rounded-2xl shadow-xl shadow-purple-900/5 w-40 animate-fade-in delay-700">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1 bg-pink-50 rounded-md">
                    <BarChart3 size={14} className="text-pink-500" />
                  </div>
                  <span className="text-xs font-semibold text-slate-700">
                    Segmentation
                  </span>
                </div>
                <div className="flex items-end justify-between h-8 gap-1">
                  {[40, 60, 45, 70, 90].map((h, i) => (
                    <div
                      key={i}
                      className="w-full bg-pink-100 rounded-t-sm relative h-full flex items-end"
                    >
                      <div
                        style={{
                          height: `${h}%`,
                          animationDelay: `${800 + i * 100}ms`,
                        }}
                        className="w-full bg-gradient-to-t from-pink-400 to-purple-400 rounded-t-sm animate-grow"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating UI: Let's Growth (Top Left) */}
              <div className="absolute top-6 left-6 z-20 bg-white/80 backdrop-blur-md py-2 px-4 rounded-full shadow-sm border border-white flex items-center gap-2 animate-fade-in delay-200">
                <Globe size={16} className="text-slate-800" />
                <span className="text-xs font-semibold text-slate-800">
                  Let's Growth!
                </span>
              </div>

              {/* Floating UI: Views (Bottom Right) */}
              <div className="absolute bottom-12 right-6 z-20 bg-white py-2 px-3 rounded-xl shadow-lg shadow-purple-900/10 flex items-center gap-3 animate-fade-in delay-500">
                <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full p-1.5">
                  <ArrowRight size={14} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800">
                    2,924 Views
                  </p>
                  <div className="h-1 w-12 bg-slate-100 rounded-full mt-1 overflow-hidden">
                    <div className="h-full w-2/3 bg-slate-300 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN --- */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Top Right Card: Satisfied Customers */}
            <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100 flex-1 hover:shadow-lg transition-shadow duration-300">
              <div className="overflow-hidden mb-6">
                <h3 className="text-base font-semibold text-slate-800 animate-slide-up delay-100">
                  Satisfied Customers
                </h3>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-red-500 animate-fade-in delay-200">
                  <Heart className="fill-current" size={24} />
                </div>

                <div className="overflow-hidden">
                  <span className="block text-4xl font-bold text-slate-900 animate-slide-up delay-300">
                    15.823
                  </span>
                </div>

                {/* Avatars */}
                <div className="flex -space-x-2 ml-auto">
                  {[1, 2, 3].map((i) => (
                    <img
                      key={i}
                      src={`https://i.pravatar.cc/100?img=${i + 25}`}
                      className="w-8 h-8 rounded-full border-2 border-white animate-fade-in"
                      style={{ animationDelay: `${400 + i * 100}ms` }}
                      alt="user"
                    />
                  ))}
                </div>
              </div>

              <div className="overflow-hidden">
                <p className="text-slate-500 text-xs leading-relaxed animate-slide-up delay-500">
                  Our tailored solutions have left a lasting impact on brands
                  seeking to thrive in the digital age.
                </p>
              </div>
            </div>

            {/* Bottom Right Card: B2B Startup */}
            <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100 flex-1 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
              <div>
                <div className="overflow-hidden mb-2">
                  <h3 className="text-base font-semibold text-slate-800 animate-slide-up delay-100">
                    Potential in the B2B Startup Realm
                  </h3>
                </div>
                <div className="overflow-hidden mb-6">
                  <p className="text-slate-500 text-xs leading-relaxed animate-slide-up delay-200">
                    Commitment to excellence, agility, and forward-thinking
                    positions us as the catalyst for your business growth.
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-3 flex items-center justify-between border border-slate-100 animate-fade-in delay-300">
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-8 bg-pink-500 rounded-full"></div>
                    <div>
                      <span className="block text-xs font-bold text-slate-800">
                        Contract with Startup
                      </span>
                      <span className="text-[10px] text-slate-400">
                        28 Startup Member
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex -space-x-1">
                    <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center text-[8px] font-bold text-white border border-white">
                      N
                    </div>
                    <div className="w-6 h-6 rounded-full bg-orange-400 flex items-center justify-center text-[8px] font-bold text-white border border-white">
                      A
                    </div>
                    <div className="w-6 h-6 rounded-full bg-purple-400 flex items-center justify-center text-[8px] font-bold text-white border border-white">
                      R
                    </div>
                  </div>
                  <ArrowRight size={14} className="text-slate-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
