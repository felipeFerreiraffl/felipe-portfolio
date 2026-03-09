import { imageUrl } from "@/utils/imageUrl";
import { StaticImageData } from "next/image";
import { CSSProperties } from "react";

type ProjectCard = {
  title: string;
  thumbnail: StaticImageData | string;
  slice: "right" | "left";
};

export default function ProjectCard({ title, thumbnail, slice }: ProjectCard) {
  const clipPathSlice =
    slice === "right" ? "clip-path-proj-right" : "clip-path-proj-left";

  const textAlignSlice =
    slice === "right" ? "justify-start text-left" : "justify-end text-right";

  return (
    <div
      className={`cursor-pointer relative flex items-start w-full aspect-thumbnail border-2 border-line ${clipPathSlice} before:absolute before:top-0 before:left-0 before:size-full before:bg-(image:--bg-img) before:bg-bottom before:bg-cover before:bg-no-repeat before:opacity-20 before:-z-1 before:transition-opacity before:duration-300 before:ease-in-out hover:before:opacity-60`}
      style={{ "--bg-img": `url(${imageUrl(thumbnail)})` } as CSSProperties}>
      <h3
        className={`flex items-end w-full md:h-16 h-10 bg-bg font-heading font-bold leading-heading md:text-heading-h3 text-xl text-white ${textAlignSlice} px-5 pb-1 border-b-[1.5px] border-line`}>
        {title}
      </h3>
    </div>
  );
}
