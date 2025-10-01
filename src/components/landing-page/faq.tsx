"use client";

import { useState } from "react";
import type { FC } from "react";

// Define the type for a single FAQ item
interface FaqItemProps {
  question: string;
  answer: string;
}

// Array containing the FAQ data from the image
const faqData: FaqItemProps[] = [
  {
    question: "What is Taaza Talks about?",
    answer:
      "Taaza Talks is a podcast that brings real conversations with entrepreneurs, coaches, healers, and creators. Each episode explores their unique journeys, challenges, and insights to inspire listeners.",
  },
  {
    question: "Who is the host of the podcast?",
    answer:
      "The show is hosted by Aanchhal Puri, a passionate storyteller who connects with diverse guests to share their knowledge, experiences, and wisdom.",
  },
  {
    question: "What kind of topics are covered?",
    answer:
      "The podcast covers a wide range of topics including entrepreneurship, leadership, personal growth, spirituality, wellness practices like numerology and vaastu, and inspirational life stories.",
  },
  {
    question: "Who can be featured on Taaza Talks?",
    answer:
      "We welcome entrepreneurs, wellness coaches, healers, consultants, and creators who have inspiring stories or valuable insights to share with our audience.",
  },
  {
    question: "Is Taaza Talks only for business founders?",
    answer:
      "Not at all. While many episodes feature entrepreneurs, we also spotlight experts in wellness, spirituality, and personal development—making it a podcast for everyone seeking growth and inspiration.",
  },
  {
    question: "How often are new episodes released?",
    answer:
      "New episodes of Taaza Talks are released weekly, featuring fresh conversations with diverse guests.",
  },
  {
    question: "Where can I listen to the podcast?",
    answer:
      "You can listen to Taaza Talks on all major platforms including Spotify, Apple Podcasts, and YouTube.",
  },
  {
    question: "Can I collaborate or suggest a guest?",
    answer:
      "Yes! We love collaborating. You can reach out through our official website or social media to suggest a guest or explore partnerships.",
  },
  {
    question: "What makes Taaza Talks different?",
    answer:
      "Unlike traditional interviews, Taaza Talks dives deep into authentic and heartfelt conversations, blending business insights with wellness, spirituality, and personal growth stories.",
  },
];

// The main FAQ component
const FaqSection: FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 mt-20 mb-10">
      <h2 className="text-4xl md:text-5xl font-Montserrat font-bold text-center text-white mb-12">
        Frequently Asked <span className="text-[#FFCF00]">Questions</span>
      </h2>
      <div className="space-y-3">
        {faqData.map((faq, index) => (
          <div key={index} className="border border-white font-Montserrat">
            <button
              onClick={() => handleToggle(index)}
              className={`w-full flex justify-between items-center text-left p-5 focus:outline-none group transition-colors duration-200 ${
                openIndex === index ? "bg-white" : "hover:bg-white"
              }`}
            >
              <span
                className={`text-base md:text-lg font-Montserrat font-bold transition-colors duration-200 ${
                  openIndex === index
                    ? "text-black"
                    : "text-white group-hover:text-black"
                }`}
              >
                {`${index + 1}. ${faq.question}`}
              </span>
              <span className="ml-4 flex-shrink-0">
                <svg
                  className={`w-6 h-6 transition-transform duration-300 ${
                    openIndex === index
                      ? "transform rotate-180 text-gray-900"
                      : "text-gray-500 group-hover:text-gray-900"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </button>
            {openIndex === index && (
              <div className="px-5 pb-5 text-gray-600 bg-white rounded-b-lg">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
