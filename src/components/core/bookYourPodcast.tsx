import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BookYourPodcast = () => {
  return (
    <Link
      target="_blank"
      href="https://wa.me/919509925137?text=Hello%2C%20I%E2%80%99m%20interested%20in%20participating%20in%20your%20podcast.%20Could%20you%20please%20share%20more%20details%20on%20how%20I%20can%20get%20involved%3F%20Thank%20you%21"
      className="px-5 py-3 w-full bg-pink-700 fixed bottom-0 left-0 flex-center gap-3"
    >
      <Image
        src={"/icons/microphone.svg"}
        alt=""
        width={1920}
        height={1080}
        className="w-auto h-8 invert"
      />
      <h1 className="text-xl font-Montserrat font-semibold">
        Book Your <span className="font-bold text-yellow-400">Podcast</span>{" "}
        meeting Now
      </h1>
      <ArrowRight />
    </Link>
  );
};

export default BookYourPodcast;
