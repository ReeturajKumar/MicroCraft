import React from "react";

const AdvantagesSection: React.FC = () => {
  return (
    <section className="relative w-full text-black py-12 md:py-16 lg:py-10 overflow-hidden font-sans">
      {/* Styles moved to index.css - see: scrolling-text-container-h2-alt, scrolling-text-inner */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Heading */}
        <div className="mb-4 lg:mb-3 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Explore <span className="text-purple-500">the advantages</span> of{" "}
            <br className="hidden lg:block" />
            partnering with
            {/* === ANIMATED TEXT CONTAINER === */}
            <div className="scrolling-text-container-h2-alt">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column: Image and Floating Cards */}
          <div className="relative z-10">
            <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-purple-500/15 rounded-full blur-3xl -z-10"></div>
            <div className="absolute top-8 left-0 w-full h-full bg-gradient-to-br from-purple-400/8 to-transparent rounded-2xl -z-10"></div>

            {/* Main Person Image */}
            <img
              src="https://ik.imagekit.io/yf8fxnkvu/Whatsapp%20page%20/WhatsApp%20Chatbot..png?updatedAt=1727955590835" // Placeholder for the woman in orange shirt
              alt="Happy Partner"
              className="w-full h-full object-cover rounded-2xl z-10 relative"
            />

            {/* Floating "Business Growth" Card */}
            <div className="absolute top-6 right-6 bg-white p-3 rounded-xl shadow-md z-20 flex flex-col gap-1.5 w-40">
              <div className="bg-purple-100 p-1.5 rounded-lg w-fit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-purple-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0zm1.5 1.5H9v6.75a.75.75 0 01-.75.75 8.25 8.25 0 01-6.75-6.75z"
                    clipRule="evenodd"
                  />
                  <path d="M11.25 5.25v5.25H16.5v-.75a8.25 8.25 0 00-5.25-5.25zm-3 1.5v2.25H5.25a8.25 8.25 0 013-3zm3 10.5v-2.25H18a8.25 8.25 0 01-3 3zm3-4.5h2.25a8.25 8.25 0 01-2.25 3v-3zm-3-1.5V9H9v2.25h2.25z" />
                </svg>
              </div>
              <div className="text-xs text-gray-500 font-medium">
                Business Growth
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-base font-semibold text-gray-900">
                  $14,720
                </span>
                <span className="text-[10px] font-semibold text-purple-500 bg-purple-50 px-1.5 py-0.5 rounded-full">
                  25% ↑
                </span>
              </div>
            </div>

            {/* Floating "Happy Client!" Button */}
            <div className="absolute bottom-8 left-6 bg-purple-500 text-white px-5 py-2.5 rounded-full shadow-md z-20 flex items-center gap-2 font-medium cursor-pointer hover:bg-purple-600 transition-colors text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4"
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
            <div className="absolute bottom-3 right-6 bg-purple-500 text-white p-2.5 rounded-full shadow-md z-20 cursor-pointer hover:bg-purple-600 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4"
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
          <div className="flex flex-col gap-6">
            {/* Item 1 */}
            <div className="flex items-start gap-4 border-b border-gray-200 pb-5">
              <div className="bg-blue-800 text-white w-10 h-10 rounded-lg flex items-center justify-center font-semibold text-lg shrink-0">
                1
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1.5">
                  Efficiency Boost:
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  Our CRM is designed to optimize your daily operations and
                  workflows, reducing redundancy and inefficiencies.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start gap-4 border-b border-gray-200 pb-5">
              <div className="bg-blue-800 text-white w-10 h-10 rounded-lg flex items-center justify-center font-semibold text-lg shrink-0">
                2
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1.5">
                  Scalable Solutions:
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  Regardless of the size of your business, MicroCraft's CRM
                  solutions can adapt to your needs.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-start gap-4 border-b border-gray-200 pb-5">
              <div className="bg-blue-800 text-white w-10 h-10 rounded-lg flex items-center justify-center font-semibold text-lg shrink-0">
                3
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1.5">
                  Dedicated Support:
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
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
