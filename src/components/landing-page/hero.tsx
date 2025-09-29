import { Mic } from "lucide-react";
import Image from "next/image";
import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const HeroSection = () => {
  return (
    <section>
      <main className="max-w-[1490px] mx-auto">
        <div className="px-5 py-5 w-full flex-center flex-col gap-16">
          <div className="w-full flex-center font-Montserrat mt-28">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-center font-bold">
              <span className="text-blue-500 ">Taaza Talks</span>
              <br className="hidden md:block" /> India's Top Podcast For{" "}
              <span className="text-pink-500">Founders</span>
            </h1>
          </div>
          <div className="w-full flex flex-col lg:flex-row gap-12 justify-start">
            <div className="flex-[1] w-full flex flex-col items-start justify-start">
            <Image
              src={"/images/team.jpg"}
              alt=""
              width={1920}
              height={1080}
              className="w-full rounded-lg pb-10"
            />
              <button className="bg-blue-700 flex flex-row items-center justify-center gap-5 text-lg md:text-2xl font-Montserrat font-bold w-[90%] mx-auto px-5 py-3 rounded-lg">
                <Mic /> BOOK YOUR PODCAST <HiArrowNarrowRight />
              </button>
            </div>
            <div className="flex-[1] h-full w-full flex flex-col items-start justify-start gap-5 md:gap-10 font-Montserrat">
              <h1 className="text-lg md:text-xl lg:text-2xl font-bold">
                <span className="text-pink-500">Real Startup Stories:</span>{" "}
                Listen to founders share how they started their businesses, the
                challenges they faced, and the smart moves that helped them
                grow.
              </h1>
              <h1 className="text-lg md:text-xl lg:text-2xl font-bold">
                <span className="text-blue-500">Business Tips That Work:</span>{" "}
                Every episode gives simple, practical advice and ideas you can
                use to build and improve your own startup.
              </h1>
              <h1 className="text-lg md:text-xl lg:text-2xl font-bold">
                <span className="text-purple-500">
                  Motivation for Every Entrepreneur:
                </span>{" "}
                Whether you&apos;re launching your first idea or running a
                growing company, this podcast will keep you inspired and focused
                on success.
              </h1>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default HeroSection;
