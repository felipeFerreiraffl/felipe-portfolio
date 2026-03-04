"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import { ICONS, IMAGES } from "@/constants/assets";
import { useSectionRefs } from "@/context/sectionRefsContext";
import { useTranslations } from "next-intl";
import IntroCard from "./IntroCard";
import { Ri4kLine } from "@remixicon/react";

export default function AboutMe() {
  const { aboutMe } = useSectionRefs();
  const t = useTranslations("AboutMe");

  return (
    <section
      className="lg:w-[94dvw] w-[90vw] mx-auto flex flex-col items-center gap-10"
      ref={aboutMe}>
      <SectionTitle
        title={t("title")}
        icon={ICONS.sections.about}
        chapterNumber={1}
      />

      <div className="w-full lg:h-auto h-[90dvh] flex lg:flex-row flex-col items-center md:gap-5 gap-3">
        <IntroCard
          title={t("introCards.presentation.title")}
          description={t("introCards.presentation.description")}
          icon={ICONS.common.presentation}
          bgImage={IMAGES.about.presentation}
        />
        <IntroCard
          title={t("introCards.goals.title")}
          description={t("introCards.goals.description")}
          icon={ICONS.common.goals}
          bgImage={IMAGES.about.goals}
        />
        <IntroCard
          title={t("introCards.hobbies.title")}
          description={t("introCards.hobbies.description")}
          icon={ICONS.common.hobbies}
          bgImage={IMAGES.about.hobbies}
        />
      </div>
    </section>
  );
}
