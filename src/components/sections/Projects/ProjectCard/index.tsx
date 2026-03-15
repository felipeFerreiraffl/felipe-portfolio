"use client";

import { imageUrl } from "@/utils/imageUrl";
import { StaticImageData } from "next/image";
import { CSSProperties, useState } from "react";
import ProjectDetails from "../ProjectDetails";
import { ProjectsTechs } from "@/types/data.types";
import { AnimatePresence } from "motion/react";
import * as m from "motion/react-m";
import type { Variants } from "motion/react";
import { motionVariants } from "@/utils/motionVariants";

type ProjectCard = {
  title: string;
  thumbnail: StaticImageData | string;
  image: StaticImageData | string;
  description: string;
  demoLink: string;
  repoLink: string;
  techs: ProjectsTechs[];
  slice: "right" | "left";
};

export default function ProjectCard({
  title,
  thumbnail,
  image,
  description,
  techs,
  demoLink,
  repoLink,
  slice,
}: ProjectCard) {
  const [open, setOpen] = useState(false);

  const clipPathSlice =
    slice === "right" ? "clip-path-proj-right" : "clip-path-proj-left";

  const textAlignSlice =
    slice === "right" ? "justify-start text-left" : "justify-end text-right";

  const backdropVariants = motionVariants({
    initial: { opacity: 0 },
    animation: { opacity: 1, transition: { ease: "easeInOut", duration: 0.3 } },
    exit: { opacity: 0 },
  });

  return (
    <>
      <div
        className={`relative w-full aspect-thumbnail p-0.5 bg-line/60 ${clipPathSlice}`}
        onClick={() => setOpen(true)}>
        <div
          className={`cursor-pointer relative flex items-start size-full ${clipPathSlice} before:absolute before:inset-0 before:size-full before:bg-(image:--bg-img) before:bg-bottom before:bg-cover before:bg-no-repeat before:opacity-20 before:z-10 before:transition-opacity before:duration-300 before:ease-in-out hover:before:opacity-60`}
          style={
            { "--bg-img": `url(${imageUrl(thumbnail)})` } as CSSProperties
          }>
          <h3
            className={`flex items-end w-full md:h-16 h-10 bg-bg font-heading font-bold leading-heading md:text-heading-h3 text-xl text-white ${textAlignSlice} px-5 pb-1 border-b-[1.5px] border-line z-20`}>
            {title}
          </h3>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <m.div
            variants={backdropVariants}
            initial="start"
            animate="middle"
            exit="end"
            className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-120"
            onClick={() => setOpen(false)}>
            <div onClick={(e) => e.stopPropagation()}>
              <ProjectDetails
                title={title}
                description={description}
                image={imageUrl(image)}
                demoLink={demoLink}
                repoLink={repoLink}
                setOpen={setOpen}
                techs={techs}
                ariaHidden={open ? false : true}
              />
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
