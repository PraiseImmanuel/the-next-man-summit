"use client";

import React, { useState } from "react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "What is The Next Man Summit?",
    answer:
      "The Next Man Summit is a transformative conference designed to empower men with the tools, knowledge, and inspiration needed to become the best version of themselves. We bring together leading speakers, coaches, and mentors to address personal development, leadership, faith, and life success.",
  },
  {
    id: 2,
    question: "Who should attend this summit?",
    answer:
      "This summit is perfect for men of all ages and backgrounds who are committed to personal growth, leadership development, and making a positive impact in their communities. Whether you're a young professional, entrepreneur, father, or community leader, this event is designed for you.",
  },
  {
    id: 3,
    question: "What topics will be covered at the summit?",
    answer:
      "Our speakers will cover a wide range of topics including leadership development, entrepreneurship, mental health and wellness, faith and purpose, relationship building, goal achievement, emotional intelligence, career advancement, and community impact.",
  },
  {
    id: 4,
    question: "How long is the summit?",
    answer:
      "The Next Man Summit is a full-day event featuring multiple speaker sessions, interactive workshops, networking opportunities, and panel discussions. The event typically runs from 9 AM to 6 PM with breaks for meals and networking.",
  },
  {
    id: 5,
    question: "What's included in my registration?",
    answer:
      "Your registration includes access to all speaker sessions, workshop materials, lunch and refreshments, networking opportunities, and a comprehensive resource package with tools and materials to continue your growth journey after the summit.",
  },
  {
    id: 6,
    question: "Is there networking time built into the schedule?",
    answer:
      "Absolutely! We've designed the summit with dedicated networking breaks, a networking lunch, and informal connection opportunities throughout the day. Building meaningful relationships with like-minded men is a core part of the summit experience.",
  },
  {
    id: 7,
    question: "Can I get a refund if I can't attend?",
    answer:
      "We understand that circumstances can change. Refunds are available up to 14 days before the event with a small processing fee. After that, we offer the option to transfer your ticket to a future summit or receive digital access to session recordings.",
  },
  {
    id: 8,
    question: "Will the sessions be recorded?",
    answer:
      "Yes, all main sessions will be professionally recorded. Registered attendees will receive access to these recordings within 48 hours after the summit, allowing you to revisit the content and share insights with others who couldn't attend.",
  },
];

const FAQSection: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number): void => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const isOpen = (id: number): boolean => openItems.includes(id);

  return (
    <section className="pt-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-left md:text-center font-bold mb-4 tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 md:text-lg max-w-2xl mx-auto text-left md:text-center">
            {`Got questions about The Next Man Summit? We've got answers. If you don't see your question here, feel free to contact us.`}
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((item) => (
            <div
              key={item.id}
              className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-5 text-left md:text-center flex justify-between items-center hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#DDAA31] focus:ring-inset"
                aria-expanded={isOpen(item.id)}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {item.question}
                </h3>
                <div className="flex-shrink-0">
                  <svg
                    className={`w-5 h-5 text-[#DDAA31] transform transition-transform duration-200 ${
                      isOpen(item.id) ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>

              {isOpen(item.id) && (
                <div className="px-6 pb-5">
                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-gray-700 leading-relaxed mt-3">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Call to Action */}
      <div className="text-center mt-8 sm:mt-16 md:mt-24 lg:mt-36">
        <div className="bg-gray-50 rounded-lg p-4 sm:p-6 md:p-8 py-16 lg:py-20">
          <h2 className="text-[28px] md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight leading-tight">
            Why are you still waiting?
          </h2>

          <div className="mt-4 sm:mt-6">
            <button className="bg-[#DDAA31] text-white px-6 sm:px-8 md:px-10 py-3 md:py-4 text-base md:text-lg rounded-full font-bold hover:bg-[#C68C2C] transition-colors cursor-pointer">
              Secure your Spot Now!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
