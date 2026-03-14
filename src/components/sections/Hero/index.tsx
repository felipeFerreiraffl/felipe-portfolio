"use client";

import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import { ICONS, IMAGES } from "@/constants/assets";
import { useSectionRefs } from "@/context/sectionRefsContext";
import { motionVariants } from "@/utils/motionVariants";
import { scrollToSection } from "@/utils/scrollToSection";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Hero() {
  const { aboutMe } = useSectionRefs();
  const t = useTranslations("Hero");

  const lineXVariants = motionVariants({
    initial: { scaleX: 0 },
    animation: { scaleX: 1, transition: { ease: "easeInOut", duration: 0.5 } },
  });

  const squareContainerVariants = motionVariants({
    animation: {
      transition: {
        delayChildren: 0.2,
      },
    },
  });

  const square1Variants = motionVariants({
    initial: { opacity: 0, x: 112 },
    animation: {
      opacity: 1,
      x: 0,
      transition: { ease: "easeInOut", duration: 1 },
    },
  });

  const square2Variants = motionVariants({
    initial: { opacity: 0, x: 88, y: 88 },
    animation: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { ease: "easeInOut", duration: 1 },
    },
  });

  const square3Variants = motionVariants({
    initial: { opacity: 0, x: -32, y: 40 },
    animation: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { ease: "easeInOut", duration: 1 },
    },
  });

  const otherVariants = motionVariants({
    initial: { opacity: 0 },
    animation: { opacity: 1, transition: { ease: "easeInOut", duration: 0.5 } },
  });

  const imageVariants = motionVariants({
    initial: { opacity: 0, x: 16, y: 24, zIndex: 20 },
    animation: {
      x: 0,
      y: 0,
      opacity: 1,
      zIndex: 20,
      transition: { ease: "easeInOut", duration: 0.5 },
    },
  });

  return (
    <section
      className="relative lg:flex-1 flex items-center lg:justify-around justify-center lg:flex-row flex-col m-auto lg:pt-0 pt-22 lg:gap-10 w-[90vw] h-dvh"
      tabIndex={0}>
      <div className="flex flex-col gap-20 lg:items-start items-center lg:justify-normal justify-center lg:w-1/2 w-full lg:h-131 h-106 lg:my-0 my-6 lg:pt-10 lg:pb-20 lg:border-l-2 lg:border-l-line">
        <div className="w-full flex flex-col gap-2">
          <m.span
            variants={otherVariants}
            initial="start"
            animate="middle"
            className="font-heading font-medium md:text-xl lg:text-left text-center lg:pl-10 text-white leading-heading">
            {t("volumeTitle")}
          </m.span>
          <m.hr
            variants={lineXVariants}
            initial="start"
            animate="middle"
            className="w-full h-0.5 border-none bg-line origin-left"
          />
        </div>

        <m.div
          variants={otherVariants}
          initial="start"
          animate="middle"
          className="flex flex-col lg:pl-10 lg:items-start items-center w-full">
          <h1 className="font-display font-normal md:text-heading-display text-5xl text-text leading-none lg:text-left text-center">
            Felipe Ferreira Lima
          </h1>
          <p className="font-heading font-medium md:text-2xl text-xl leading-heading mt-5 text-white lg:text-left text-center">
            {t("role")}
          </p>
          <Button
            href="/archives/programmer_cv.pdf"
            label={t("curriculumButton")}
            optionalClassname="mt-10"
          />
        </m.div>
      </div>

      <m.div
        variants={squareContainerVariants}
        initial="start"
        animate="middle"
        className="relative lg:w-[30vw] md:w-[53vw] md:block hidden">
        <m.div
          variants={imageVariants}
          initial="start"
          animate="middle"
          style={{ zIndex: 20 }}>
          <Image
            src={IMAGES.profile}
            alt={t("profileAlt", { name: "Felipe Ferreira Lima" })}
            loading="eager"
            className="relative aspect-square w-full shadow-image rounded-lg z-20"
          />
        </m.div>

        <m.div
          variants={square1Variants}
          className="absolute -top-10 lg:-right-36 -right-36 bg-main aspect-square lg:w-[45%] w-[38%] rounded-xl"></m.div>
        <m.div
          variants={square2Variants}
          className="absolute -bottom-22 -right-28 bg-main aspect-square lg:w-[36%] w-[40%] rounded-xl"></m.div>
        <m.div
          variants={square3Variants}
          className="absolute -bottom-10 -left-8 bg-main aspect-square lg:w-28 w-[22%] rounded-xl"></m.div>
      </m.div>

      <article className="md:absolute lg:bottom-6 md:-bottom-36 md:left-1/2 md:-translate-x-1/2 flex flex-col items-center gap-2">
        <p
          id="scroll-down"
          className="font-body font-normal leading-body text-text text-lg">
          {t("scrollDown")}
        </p>
        <button
          onClick={() => scrollToSection(aboutMe)}
          className="cursor-pointer bg-bg p-1 border border-main shadow-normal rounded-sm transition-colors duration-300 ease-in-out hover:bg-main"
          aria-labelledby="scroll-down">
          <Icon icon={ICONS.arrows.normal_down} className="size-10 text-text" />
        </button>
      </article>
    </section>
  );
}
