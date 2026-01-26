import { useState } from "react";
import { ChevronDown } from "lucide-react";

// --- Data: Achievements ---
const achievements = [
  { year: "2019", title: "Excellence in Innovation Award" },
  { year: "2020", title: "Pinnacle of Performance Recognition" },
  { year: "2021", title: "Visionary Leadership Accolade" },
  { year: "2022", title: "Outstanding Customer Experience Distinction" },
  { year: "2023", title: "Masters of Team Collaboration Honor" },
];

// --- Data: FAQs ---
const faqs = [
  {
    question: "What Services Does Microkraft Offer?",
    answer:
      "Microkraft offers a comprehensive suite of digital solutions, including custom web development, UI/UX design, cloud infrastructure management, and strategic digital marketing tailored to scale your business.",
  },
  {
    question: "How Can I Contact Customer Support?",
    answer: (
      <>
        Our customer support team is available{" "}
        <span className="font-semibold text-gray-900">9AM-5PM GMT+7</span>. You
        can reach us by{" "}
        <a
          href="mailto:Microkraft@helpsupport.com"
          className="text-purple-600 font-medium underline"
        >
          Microkraft@helpsupport.com
        </a>
      </>
    ),
  },
  {
    question: "What Sets Microkraft Apart From Competitors?",
    answer:
      "We prioritize a client-centric approach, combining cutting-edge technology with deep industry insights. Our dedicated support team and agile development process ensure faster delivery without compromising quality.",
  },
  {
    question:
      "Are There Any Ongoing Support Options After Service Implementation?",
    answer:
      "Yes, we offer ongoing support to ensure the continued success of our services. Our team is dedicated to providing post-implementation support, addressing any questions or concerns you may have.",
  },
];

// --- Helper Component: Laurel Wreath SVG ---
const LaurelWreath = ({ year }: { year: string }) => (
  <div className="relative w-32 h-32 flex items-center justify-center group hover:scale-105 transition-transform duration-300">
    {/* SVG Path for Wreath */}
    <svg
      viewBox="0 0 100 100"
      className="w-full h-full text-gray-300 fill-current group-hover:text-purple-200 transition-colors duration-300"
    >
      <path
        d="M18.5,75 C10,60 15,35 35,20 C35,20 32,25 32,30 C32,30 20,40 22,65 L18.5,75 Z M22,65 C20,55 25,45 30,42 L28,48 C25,52 24,60 22,65 Z M30,42 C30,35 38,30 42,28 L40,32 C38,34 32,38 30,42 Z M81.5,75 C90,60 85,35 65,20 C65,20 68,25 68,30 C68,30 80,40 78,65 L81.5,75 Z M78,65 C80,55 75,45 70,42 L72,48 C75,52 76,60 78,65 Z M70,42 C70,35 62,30 58,28 L60,32 C62,34 68,38 70,42 Z"
        opacity="0.4"
      />
      <path
        d="M10,60 C5,40 20,10 50,5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className="text-gray-200"
      />
      <path
        d="M90,60 C95,40 80,10 50,5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className="text-gray-200"
      />
      {/* Detailed Leaves Left */}
      <path
        d="M20,60 Q10,40 30,25"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M25,55 Q18,45 32,35"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M30,50 Q25,40 38,30"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.6"
      />
      {/* Detailed Leaves Right */}
      <path
        d="M80,60 Q90,40 70,25"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M75,55 Q82,45 68,35"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M70,50 Q75,40 62,30"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>

    {/* Year Text Centered */}
    <span className="absolute text-xl font-bold text-gray-400 group-hover:text-purple-600 transition-colors duration-300 mt-2">
      {year}
    </span>
  </div>
);

// --- Main Component ---
const AchievementsSection = () => {
  // State for FAQ Accordion
  const [openIndex, setOpenIndex] = useState<number | null>(1); // Defaulting 2nd item open like image

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-20 px-4 md:px-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-24">
        {/* --- SECTION 1: ACHIEVEMENTS --- */}
        <div className="text-center">
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Achievements That Define Our Success!
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
              Step into a world of accolades and achievements that underscore
              our commitment to excellence at{" "}
              <span className="text-red-500 font-semibold">Microkraft</span>.
            </p>
          </div>

          {/* Awards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-start justify-items-center">
            {achievements.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center max-w-[150px]"
              >
                <LaurelWreath year={item.year} />
                <p className="text-xs md:text-xs font-medium text-gray-500 mt-2 leading-relaxed uppercase tracking-wide">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* --- SECTION 2: FAQ --- */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Frequently <br className="md:hidden" /> Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border-b border-gray-200 pb-4 last:border-0"
              >
                {/* Question Header */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between py-4 text-left group focus:outline-none"
                >
                  <span
                    className={`text-lg font-bold transition-colors duration-300 ${
                      openIndex === idx
                        ? "text-gray-900"
                        : "text-gray-600 group-hover:text-purple-600"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`transform transition-transform duration-300 ${
                      openIndex === idx ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <ChevronDown className="text-gray-400 group-hover:text-purple-600" />
                  </div>
                </button>

                {/* Animated Answer Body */}
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    openIndex === idx
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pb-4 text-gray-500 leading-relaxed text-sm md:text-base">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
