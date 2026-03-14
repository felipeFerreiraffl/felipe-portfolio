"use client";

import { useSectionRefs } from "@/context/sectionRefsContext";
import { motionVariants } from "@/utils/motionVariants";
import { scrollToSection } from "@/utils/scrollToSection";
import type { Variants } from "motion/react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";
import { Dispatch, RefObject, SetStateAction } from "react";

type MenuProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

type SectionRef = RefObject<HTMLElement | null>;

export default function Menu({ isOpen, setIsOpen }: MenuProps) {
  const refs = useSectionRefs();
  const t = useTranslations("Header");

  const navLinks = [
    { label: t("navLabels.aboutMe"), link: refs.aboutMe },
    { label: t("navLabels.experiences"), link: refs.experiences },
    { label: t("navLabels.skills"), link: refs.skills },
    { label: t("navLabels.projects"), link: refs.projects },
    { label: t("navLabels.contact"), link: refs.contact },
  ];

  const handleSectionClick = (ref: SectionRef) => {
    if (!isOpen) return;

    scrollToSection(ref);
    setIsOpen(false);
  };

  const navVariants = motionVariants({
    initial: { scale: 0, opacity: 0 },
    animation: {
      scale: 1,
      opacity: 1,
      transition: { ease: "easeInOut", duration: 0.3 },
    },
    exit: {
      scale: 0,
      opacity: 0,
    },
  });

  return (
    <m.nav
      variants={navVariants}
      initial="start"
      animate="middle"
      exit="end"
      className="absolute top-0 md:left-10 left-5 md:py-25 md:px-20 py-15 px-10 bg-bg border-[1.5px] border-main rounded-lg shadow-normal origin-top-left z-110">
      <ul className="flex flex-col items-start gap-5">
        {navLinks.map((anchor, idx) => (
          <li key={idx}>
            <button
              onClick={() => handleSectionClick(anchor.link)}
              className="text-base font-bold font-body uppercase leading-body text-text px-3 py-2 rounded-sm">
              {anchor.label}
            </button>
          </li>
        ))}
      </ul>
    </m.nav>
  );
}
