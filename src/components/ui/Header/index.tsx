"use client";

import { useSectionRefs } from "@/context/sectionRefsContext";
import { scrollToSection } from "@/utils/scrollToSection";
import { useTranslations } from "next-intl";
import LangSelector from "./LangSelector";
import { useState } from "react";
import clsx from "clsx";
import Menu from "./Menu";

export default function Header() {
  const refs = useSectionRefs();
  const t = useTranslations("Header");

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleMenuToggle = () => setMenuIsOpen((prev) => !prev);

  const NAV_LINKS = [
    { label: t("navLabels.aboutMe"), link: refs.aboutMe },
    { label: t("navLabels.experiences"), link: refs.experiences },
    { label: t("navLabels.skills"), link: refs.skills },
    { label: t("navLabels.projects"), link: refs.projects },
    { label: t("navLabels.contact"), link: refs.contact },
  ];

  return (
    <header className="fixed w-4/5 flex items-center justify-self-center justify-between md:px-15 px-10 py-4 my-6 bg-bg border border-main rounded-sm shadow-normal z-100">
      <button
        className="lg:hidden flex flex-col items-start gap-1 z-120"
        onClick={handleMenuToggle}>
        <div
          className={clsx(
            "md:w-12 w-9 h-2 rounded-xs bg-line transition-all ease-in-out duration-300 origin-center",
            menuIsOpen && "rotate-45 translate-y-3",
          )}></div>
        <div
          className={clsx(
            "md:w-11 w-8 h-2 rounded-xs bg-line transition-all ease-in-out duration-300 origin-center",
            menuIsOpen && "opacity-0",
          )}></div>
        <div
          className={clsx(
            "md:w-12 w-9 h-2 rounded-xs bg-line transition-all ease-in-out duration-300 origin-center",
            menuIsOpen && "-rotate-45 -translate-y-3",
          )}></div>
      </button>

      <nav>
        <ul className="lg:flex hidden lg:items-center lg:gap-5">
          {NAV_LINKS.map((anchor, idx) => (
            <li key={idx}>
              <a
                href="#"
                onClick={() => scrollToSection(anchor.link)}
                className="text-base font-bold font-body uppercase leading-body text-text px-3 py-2 rounded-sm transition-shadow ease-in-out duration-300 hover:shadow-anchor">
                {anchor.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <LangSelector />

      {menuIsOpen && <Menu isOpen={menuIsOpen} setIsOpen={setMenuIsOpen} />}
    </header>
  );
}
