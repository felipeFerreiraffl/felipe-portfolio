"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import { ICONS, IMAGES } from "@/constants/assets";
import { useSectionRefs } from "@/context/sectionRefsContext";
import { useTranslations } from "next-intl";
import SkillCard from "./SkillCard";
import ExperienceCarousel from "../Experiences/ExperienceCarousel";
import SkillsCarousel from "./SkillsCarousel";

export default function Skills() {
  const { skills } = useSectionRefs();
  const t = useTranslations("Skills");

  return (
    <section ref={skills} className="w-full flex flex-col items-center gap-10">
      <SectionTitle
        title={t("title")}
        icon={ICONS.sections.skills}
        chapterNumber={3}
      />

      <SkillsCarousel />
    </section>
  );
}
