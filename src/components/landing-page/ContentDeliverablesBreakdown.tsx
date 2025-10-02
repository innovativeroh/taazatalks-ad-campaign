"use client";

import Image from "next/image";
import React from "react";

const ContentDeliverablesBreakdown = () => {
  const gridData = [
    {
      title: "INSTAGRAM REELS (1–2 REELS)",
      icon: "/icons/high-definition.svg",
    },
    {
      title: "ARTICLE (1 LONG FORMATS)",
      icon: "/icons/article-icon-free-vector.png",
    },
    {
      title: "EXCLUSIVE INSTAGRAM STORY",
      icon: "/icons/instagram-logo.svg",
    },
    {
      title: "FACEBOOK POSTS (1 LONG-FORMAT)",
      icon: "/icons/facebook-logo.svg",
    },
  ];

  const uspData = [
    {
      title: "High-Quality Production",
      description:
        "We ensure every episode and content piece is produced with professional quality, giving your brand the attention it deserves.",
    },
    {
      title: "Wide Audience Reach",
      description:
        "Our podcast and social channels reach entrepreneurs, creators, and business enthusiasts globally across major platforms.",
    },
    {
      title: "Authentic Storytelling",
      description:
        "We focus on real and meaningful conversations that connect deeply with listeners and build lasting impact.",
    },
    {
      title: "Guest Promotion Kit",
      description:
        "Every guest receives a full set of promotional materials, including audiograms, video snippets, and graphics to boost their visibility.",
    },
  ];

  return (
    <section>
      <main className="max-w-[1000px] mx-auto">
        {/* Content Deliverables Section */}
        <div className="px-5 py-5 w-full flex-center flex-col gap-10">
          <div className="w-full flex-center gap-5">
            <span className="w-full h-[2px] bg-[#FFCF00]"></span>
            <h1 className="text-[#FFCF00] text-3xl w-fit md:min-w-fit font-Montserrat font-bold rounded-lg text-center">
              Content Deliverables Breakdown
            </h1>
            <span className="w-full h-[2px] bg-[#FFCF00] rounded-lg"></span>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10">
            {gridData.map((link, IDX) => (
              <div
                className="w-full flex gap-3 items-start justify-start"
                key={IDX}
              >
                <div className="bg-[#FFCF00] max-w-fit p-4 rounded-lg">
                  <Image
                    src={link.icon}
                    alt={link.title}
                    width={1920}
                    height={1080}
                    className="w-auto h-12"
                  />
                </div>
                <h1 className="text-lg font-Montserrat font-bold max-w-[250px] mt-2">
                  {link.title}
                </h1>
              </div>
            ))}
          </div>
        </div>

        {/* USP Section */}
        <div className="px-5 py-5 w-full flex-center flex-col gap-10 mt-10">
          <div className="w-full flex-center gap-5">
            <span className="w-full h-[2px] bg-[#FFCF00]"></span>
            <h1 className="text-[#FFCF00] text-3xl min-w-fit font-Montserrat font-bold rounded-lg">
              Why Choose Us
            </h1>
            <span className="w-full h-[2px] bg-[#FFCF00] rounded-lg"></span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {uspData.map((usp, index) => (
              <div
                key={index}
                className="bg-black border-2 border-amber-400 rounded-xl p-8 text-white w-full flex flex-col"
              >
                <h3 className="text-xl font-Montserrat font-semibold mb-3 text-[#FFCF00]">
                  {usp.title}
                </h3>
                <p className="text-gray-300 font-Montserrat">{usp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </section>
  );
};

export default ContentDeliverablesBreakdown;
