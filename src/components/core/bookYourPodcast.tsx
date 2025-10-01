"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { PopupButton } from "react-calendly";

const BookYourPodcast = () => {
  const [root, setRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setRoot(document.body);
  }, []);
  return (
    <>
      <div className="px-5 py-7 w-full bg-pink-700 fixed bottom-0 left-0 flex-center gap-20">
        {root && (
          <PopupButton
            url="https://calendly.com/thetechsolaceco"
            text="BOOK YOUR PODCAST"
            className="h-full w-full absolute top-0 left-0 text-xl font-Montserrat font-semibold"
            rootElement={root}
          />
        )}
      </div>
    </>
  );
};

export default BookYourPodcast;
