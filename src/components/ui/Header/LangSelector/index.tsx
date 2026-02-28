"use client";

import { IMAGES } from "@/constants/assets";
import Image from "next/image";

export default function LangSelector() {
  return (
    <div className="flex items-center gap-5">
      <button className="relative md:size-10 cursor-pointer rounded-full">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-main size-11 rounded-full"></div>
        <Image
          src={IMAGES.language.brazilFlag}
          alt="PT-BR"
          className="relative size-full object-cover z-10"
        />
      </button>
      <button className="relative md:size-10 cursor-pointer">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-main size-11 rounded-full"></div>
        <Image
          src={IMAGES.language.englishFlag}
          alt="EN"
          className="relative size-full object-cover z-10"
        />
      </button>
    </div>
  );
}
