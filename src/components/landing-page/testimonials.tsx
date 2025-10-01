"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { PopupButton } from "react-calendly";

const TestimonialsSection = () => {
  const [root, setRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setRoot(document.body);
  }, []);

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
              src={"/images/22.png"}
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
        <div className="px-5 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-7">
          <video
            src="/images/1.mp4"
            controls
            width={1920}
            height={1080}
            className="w-full object-cover rounded-lg"
          />
          <video
            src="/images/2.mp4"
            controls
            width={1920}
            height={1080}
            className="w-full object-cover rounded-lg"
          />
          <video
            src="/images/3.mp4"
            controls
            width={1920}
            height={1080}
            className="w-full object-cover rounded-lg"
          />
          <video
            src="/images/4.mp4"
            controls
            width={1920}
            height={1080}
            className="w-full object-cover rounded-lg"
          />
        </div>
        <div className="px-5 py-5 w-full text-white flex-center flex-col gap-10 my-16">
          {root && (
            <PopupButton
              url="https://calendly.com/thetechsolaceco"
              text="LET'S TALK - BOOK YOUR PODCAST SESSION."
              className="bg-pink-600 text-lg md:text-2xl font-bold w-full md:w-fit mx-auto px-5 py-3 rounded-lg font-Montserrat"
              rootElement={root}
            />
          )}
        </div>
      </main>
    </section>
  );
};

export default TestimonialsSection;
