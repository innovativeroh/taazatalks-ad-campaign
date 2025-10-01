"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const YourHost = () => {
  return (
    <section className="mt-20">
      <main className="max-w-[1490px] mx-auto">
        <div className="px-5 py-5 w-full flex-center flex-col gap-16">
          <div className="w-full flex-center">
            <h1 className="text-5xl font-Montserrat font-bold">
              Meet Your <span className="text-blue-500">Host</span>
            </h1>
          </div>
          <div className="w-full flex flex-col lg:flex-row items-start justify-start max-w-[1280px] mx-auto">
            <div className="flex-[1] w-full flex-center flex-col gap-5">
              <Image
                src={"/images/Aanchal-Puri.png"}
                alt=""
                width={1920}
                height={1080}
                className="w-[400px] h-auto rounded-lg"
              />
              <h1 className="text-2xl font-Montserrat font-bold max-w-[400px]">
                Aanchal Puri -{" "}
                <span className="text-blue-400">
                  Podcast Speaker, Event Organizer, and Mentor
                </span>
              </h1>
              <Link
                target="_blank"
                href="https://wa.me/919509925137?text=Hello%2C%20I%E2%80%99m%20interested%20in%20participating%20in%20your%20podcast.%20Could%20you%20please%20share%20more%20details%20on%20how%20I%20can%20get%20involved%3F%20Thank%20you%21"
                className="bg-pink-600 text-lg md:text-2xl flex flex-row gap-2 items-center font-bold  mx-auto px-10 py-3 rounded-lg"
              >
                BOOK YOUR PODCAST <HiArrowNarrowRight />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default YourHost;
