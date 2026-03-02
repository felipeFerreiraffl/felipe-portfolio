"use client";

import { useSectionRefs } from "@/context/sectionRefsContext";
import { scrollToSection } from "@/utils/scrollToSection";
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

  const NAV_LINKS = [
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

  return (
    <nav className="absolute top-0 md:left-10 left-5 md:py-25 md:px-20 py-15 px-10 bg-bg border-[1.5px] border-main rounded-lg shadow-normal z-110">
      <ul className="flex flex-col items-start gap-5">
        {NAV_LINKS.map((anchor, idx) => (
          <li key={idx}>
            <a
              href="#"
              onClick={() => handleSectionClick(anchor.link)}
              className="text-base font-bold font-body uppercase leading-body text-text px-3 py-2 rounded-sm">
              {anchor.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
