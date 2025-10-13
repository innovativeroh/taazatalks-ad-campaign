"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TestimonialsSection = () => {
  return (
    <section className="mt-20">
      <main className="max-w-[1490px] mx-auto">
        <div className="px-5 py-5 w-full flex-center flex-col gap-10">
          <h1 className="text-4xl lg:text-5xl font-Montserrat font-bold">
            Our <span className="text-blue-500">Testimonials</span>
          </h1>
        </div>
        <div className="px-5 py-5 w-full flex flex-col lg:flex-row gap-5 items-start justify-start">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10">
            <Image
              src={"/images/2.png"}
              alt=""
              width={1920}
              height={1080}
              className="w-full rounded-lg"
            />
            <Image
              src={"/images/7.png"}
              alt=""
              width={1920}
              height={1080}
              className="w-full rounded-lg"
            />
            <Image
              src={"/images/16.png"}
              alt=""
              width={1920}
              height={1080}
              className="w-full rounded-lg"
            />
            <Image
              src={"/images/18.png"}
              alt=""
              width={1920}
              height={1080}
              className="w-full rounded-lg"
            />
            <Image
              src={"/images/22.jpg"}
              alt=""
              width={1920}
              height={1080}
              className="w-full rounded-lg"
            />
            <Image
              src={"/images/23.jpg"}
              alt=""
              width={1920}
              height={1080}
              className="w-full rounded-lg"
            />
          </div>
          <div className="w-full flex-start">
            <video
              src="/videos/5.mp4"
              controls
              width={1920}
              height={1080}
              className="w-full h-full max-h-[700px] rounded-lg"
            />
          </div>
        </div>
        <div className="px-5 w-full flex-between flex-wrap gap-10 mt-7">
          <video
            src="/videos/2.mp4"
            controls
            width={1920}
            height={1080}
            className="w-[230px] h-[500px] rounded-lg"
          />
          <video
            src="/videos/3.mp4"
            controls
            width={1920}
            height={1080}
            className="w-[230px] h-[500px] rounded-lg"
          />
          <video
            src="/videos/4.mp4"
            controls
            width={1920}
            height={1080}
            className="w-[230px] h-[500px] rounded-lg"
          />
          <video
            src="/videos/6.mp4"
            controls
            width={1920}
            height={1080}
            className="w-[230px] h-[500px] rounded-lg"
          />
          <video
            src="/videos/7.mp4"
            controls
            width={1920}
            height={1080}
            className="w-[230px] h-[500px] rounded-lg"
          />
        </div>
        <div className="px-5 py-5 w-full text-white flex-center flex-col gap-10 my-16">
          <Link
            target="_blank"
            href="https://wa.me/919509925137?text=Hello%2C%20I%E2%80%99m%20interested%20in%20participating%20in%20your%20podcast.%20Could%20you%20please%20share%20more%20details%20on%20how%20I%20can%20get%20involved%3F%20Thank%20you%21"
            className="bg-pink-600 text-lg md:text-2xl font-bold w-full md:w-fit mx-auto px-5 py-3 rounded-lg font-Montserrat"
          >
            LET'S TALK - BOOK YOUR PODCAST SESSION.
          </Link>
        </div>
      </main>
    </section>
  );
};

export default TestimonialsSection;
