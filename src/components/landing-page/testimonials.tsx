import Image from "next/image";
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
              src={"/images/1.png"}
              alt=""
              width={1920}
              height={1080}
              className="w-full rounded-lg"
            />
            <Image
              src={"/images/2.png"}
              alt=""
              width={1920}
              height={1080}
              className="w-full rounded-lg"
            />
            <Image
              src={"/images/2.png"}
              alt=""
              width={1920}
              height={1080}
              className="w-full rounded-lg"
            />
            <Image
              src={"/images/3.png"}
              alt=""
              width={1920}
              height={1080}
              className="w-full rounded-lg"
            />
          </div>
          <div className="w-full flex-start">
            <video
              src="/videos/3.mp4"
              controls
              width={1920}
              height={1080}
              className="w-full object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="px-5 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-7">
          <video
            src="/videos/1.mp4"
            controls
            width={1920}
            height={1080}
            className="w-full object-cover rounded-lg"
          />
          <video
            src="/videos/8.mp4"
            controls
            width={1920}
            height={1080}
            className="w-full object-cover rounded-lg"
          />
          <video
            src="/videos/9.mp4"
            controls
            width={1920}
            height={1080}
            className="w-full object-cover rounded-lg"
          />
          <video
            src="/videos/5.mp4"
            controls
            width={1920}
            height={1080}
            className="w-full object-cover rounded-lg"
          />
        </div>
        <div className="px-5 py-5 w-full text-white flex-center flex-col gap-10 my-16">
          <button className="bg-pink-600 text-lg md:text-2xl font-bold w-full md:w-fit mx-auto px-5 py-3 rounded-lg font-Montserrat">
            LET'S TALK - BOOK YOUR PODCAST SESSION.
          </button>
        </div>
      </main>
    </section>
  );
};

export default TestimonialsSection;
