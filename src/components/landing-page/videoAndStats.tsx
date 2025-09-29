"use client";
import Image from "next/image";
import React, { useRef, useEffect } from "react";

const VideoAndStatsSection = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log("Autoplay with sound failed. Waiting for user interaction.", err);
      });
    }
  }, []);

  const handleVideoClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const socialReach = [
    {
      icons: "/icons/spotify.svg",
      title: "10k",
      description: "Spotify Listeners",
    },
    {
      icons: "/icons/youtube-logo.svg",
      title: "13.5K+",
      description: "Subscribers (K+)",
    },
    {
      icons: "/icons/flame.svg",
      title: "10M+",
      description: "Views (M+)",
    },
    {
      icons: "/icons/calendar-dots.svg",
      title: "3+",
      description: "Marketing Collaboration (Months)",
    },
  ];

  return (
    <section className="mt-20">
      <main className="max-w-[1490px] mx-auto">
        <div className="px-5 py-5 w-full flex flex-col items-center gap-10">
          {/* Video Section */}
          <div className="w-full flex justify-center">
            <video
              ref={videoRef}
              src="/videos/promo.mp4"
              className="rounded-xl max-w-full cursor-pointer"
              loop
              controls
              autoPlay
              muted
              playsInline
              onClick={handleVideoClick}
            ></video>
          </div>

          {/* Stats Section */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-5 mt-7">
            {socialReach.map((link, idx) => (
              <div
                className="w-full flex flex-col items-center gap-5"
                key={idx}
              >
                <Image
                  src={link.icons}
                  alt={link.description}
                  width={80}
                  height={80}
                  className="w-auto h-20 invert"
                />
                <h1 className="text-5xl font-bold font-Montserrat">
                  {link.title}
                </h1>
                <p className="text-base font-bold text-[#F69604] font-Montserrat">
                  {link.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </section>
  );
};

export default VideoAndStatsSection;
