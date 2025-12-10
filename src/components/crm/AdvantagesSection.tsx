import React from "react";

const AdvantagesSection: React.FC = () => {
  return (
    <section className="relative w-full text-black py-16 lg:py-24 overflow-hidden font-sans">
      {/* --- ADDED: CSS ANIMATIONS --- */}
      <style>{`
        /* Text Slide Animation */
        @keyframes textSlide {
          0%, 20% { transform: translateY(0%); }
          25%, 45% { transform: translateY(-25%); }
          50%, 70% { transform: translateY(-50%); }
          75%, 95% { transform: translateY(-75%); }
          100% { transform: translateY(-75%); }
        }

        /* Scrolling Text Classes */
        .scrolling-text-container {
          height: 1.2em; /* Matches Line Height */
          overflow: hidden;
          display: inline-block;
          vertical-align: bottom;
          position: relative;
          margin-left: 0.25em; /* Spacing after "with" */
          padding-bottom: 2px;
        }
        .scrolling-text-inner {
          animation: textSlide 6s cubic-bezier(0.16, 1, 0.3, 1) infinite;
        }
      `}</style>

      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Heading */}
        <div className="mb-12 lg:mb-16 text-center lg:text-left">
          <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight">
            Explore <span className="text-purple-500">the advantages</span> of{" "}
            <br className="hidden lg:block" />
            partnering with
            {/* === ANIMATED TEXT CONTAINER === */}
            <div className="scrolling-text-container">
              <div className="scrolling-text-inner flex flex-col text-left">
                {/* Word 1 */}
                <span className="block h-[1.2em] text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                  MicroCraft
                </span>
                {/* Word 2 */}
                <span className="block h-[1.2em] text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                  Growth
                </span>
                {/* Word 3 */}
                <span className="block h-[1.2em] text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                  Success
                </span>
                {/* Word 4 (Loop) */}
                <span className="block h-[1.2em] text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                  MicroCraft
                </span>
              </div>
            </div>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image and Floating Cards */}
          <div className="relative z-10">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute top-10 left-0 w-full h-full bg-gradient-to-br from-purple-400/10 to-transparent rounded-3xl -z-10"></div>

            {/* Main Person Image */}
            <img
              src="https://ik.imagekit.io/yf8fxnkvu/Whatsapp%20page%20/WhatsApp%20Chatbot..png?updatedAt=1727955590835" // Placeholder for the woman in orange shirt
              alt="Happy Partner"
              className="w-full h-full object-cover rounded-3xl z-10 relative"
            />

            {/* Floating "Business Growth" Card */}
            <div className="absolute top-8 right-8 bg-white p-4 rounded-2xl shadow-lg z-20 flex flex-col gap-2 w-48">
              <div className="bg-purple-100 p-2 rounded-lg w-fit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-purple-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0zm1.5 1.5H9v6.75a.75.75 0 01-.75.75 8.25 8.25 0 01-6.75-6.75z"
                    clipRule="evenodd"
                  />
                  <path d="M11.25 5.25v5.25H16.5v-.75a8.25 8.25 0 00-5.25-5.25zm-3 1.5v2.25H5.25a8.25 8.25 0 013-3zm3 10.5v-2.25H18a8.25 8.25 0 01-3 3zm3-4.5h2.25a8.25 8.25 0 01-2.25 3v-3zm-3-1.5V9H9v2.25h2.25z" />
                </svg>
              </div>
              <div className="text-sm text-gray-500 font-medium">
                Business Growth
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-gray-900">$14,720</span>
                <span className="text-xs font-bold text-purple-500 bg-purple-50 px-1.5 py-0.5 rounded-full">
                  25% ↑
                </span>
              </div>
            </div>

            {/* Floating "Happy Client!" Button */}
            <div className="absolute bottom-12 left-8 bg-purple-500 text-white px-6 py-3 rounded-full shadow-lg z-20 flex items-center gap-2 font-semibold cursor-pointer hover:bg-purple-600 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                />
              </svg>
              Happy Client!
            </div>

            {/* Another Small Floating Smiley Button */}
            <div className="absolute bottom-4 right-8 bg-purple-500 text-white p-3 rounded-full shadow-lg z-20 cursor-pointer hover:bg-purple-600 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                />
              </svg>
            </div>
          </div>

          {/* Right Column: List of Advantages */}
          <div className="flex flex-col gap-8">
            {/* Item 1 */}
            <div className="flex items-start gap-6 border-b border-white/10 pb-6">
              <div className="bg-blue-800 text-white w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xl shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Efficiency Boost:</h3>
                <p className="text-gray-800 leading-relaxed">
                  Our CRM is designed to optimize your daily operations and
                  workflows, reducing redundancy and inefficiencies.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start gap-6 border-b border-white/10 pb-6">
              <div className="bg-blue-800 text-white w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xl shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Scalable Solutions:</h3>
                <p className="text-gray-800 leading-relaxed">
                  Regardless of the size of your business, MicroCraft's CRM
                  solutions can adapt to your needs.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-start gap-6 border-b border-white/10 pb-6">
              <div className="bg-blue-800 text-white w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xl shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Dedicated Support:</h3>
                <p className="text-gray-800 leading-relaxed">
                  Rest easy knowing that our dedicated support team is available
                  to assist you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
