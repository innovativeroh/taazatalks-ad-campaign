import Image from "next/image";
import React from "react";

const VideoAndStatsSection = () => {
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
        <div className="px-5 py-5 w-full flex-center flex-col gap-10">
          <div className="w-full flex-center">
            <video
              src="https://thefoundersdream.in/themes/front/video/AD-2-V3.mp4"
              className="rounded-xl"
              controls
            ></video>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-5 mt-7">
            {socialReach.map((link, IDX) => (
              <div className="w-full flex-center flex-col gap-5" key={IDX}>
                <Image
                  src={link.icons}
                  alt=""
                  width={1920}
                  height={1080}
                  className="w-auto h-20 invert"
                />
                <h1 className="text-5xl font-bold font-Montserrat">
                  {link.title}
                </h1>
                <p className="text-base font-bold text-[#F69604] font-Montserrat">{link.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </section>
  );
};

export default VideoAndStatsSection;
