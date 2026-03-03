import { RefObject } from "react";

export const scrollToSection = (sectionRef: RefObject<HTMLElement | null>) => {
  if (sectionRef?.current) {
    const top =
      sectionRef.current.getBoundingClientRect().top + window.scrollY - 100;

    window.scrollTo({ top, behavior: "smooth" });
  }
};
