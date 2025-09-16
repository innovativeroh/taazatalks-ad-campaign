import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const BookYourPodcast = () => {
  return (
    <div className="px-5 py-3 w-full bg-pink-700 fixed bottom-0 left-0 flex-center gap-3">
      <Image
        src={"/icons/microphone.svg"}
        alt=""
        width={1920}
        height={1080}
        className="w-auto h-8 invert"
      />
      <h1 className="text-xl font-Montserrat font-semibold">
        Book Your <span className="font-bold text-yellow-400">Podcast</span> meeting 
        Now 
      </h1>
      <ArrowRight />
    </div>
  );
};

export default BookYourPodcast;
