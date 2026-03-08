"use client";

import { ExperienceDataType } from "@/types/data.types";
import { imageUrl } from "@/utils/imageUrl";
import { useTranslations } from "next-intl";
import { StaticImageData } from "next/image";
import { CSSProperties, useEffect, useState } from "react";

type ExperienceCardProps = {
  type: "work" | "school";
  index: number;
  title: string;
  startDate: string;
  endDate?: string | null;
  description: string;
  illustration: StaticImageData | string;
  usedSkills: string[];
};

export default function ExperienceCard({
  type,
  index,
  title,
  description,
  startDate,
  endDate,
  illustration,
  usedSkills,
}: ExperienceCardProps) {
  const t = useTranslations("Experiences");
  const paddingNum = index.toString().padStart(2, "0");

  const resolveUsedSkill = (skill: string): string => {
    if (skill.startsWith("t:")) return t(skill.slice(2));
    return skill;
  };

  return (
    <div className="relative max-w-[80dvw] w-full md:min-h-155 min-h-145 h-full flex items-start justify-between border-[1.5px] border-line rounded-sm bg-bg">
      <span className="absolute -top-2 -left-2 md:size-16 size-12 flex items-center justify-center bg-bg border-[1.5px] border-line rounded-sm font-heading font-bold leading-heading text-white md:text-heading-h3 text-2xl text-center">
        {paddingNum}
      </span>

      <div className="md:max-w-[80%] max-w-full flex flex-col md:items-start items-center justify-between gap-10 md:px-10 md:py-20 px-5 py-10">
        <div className="flex flex-col md:items-start items-center gap-3">
          <h3 className="font-heading font-bold leading-heading md:text-heading-h2 text-heading-h3 md:text-left text-center text-white">
            {title}
          </h3>
          <span className="font-body font-normal leading-body text-sm text-white">
            {startDate} — {endDate ? endDate : t("currentWork")}
          </span>
        </div>

        <div className="flex flex-col md:items-start items-center gap-8">
          <div className="flex flex-col md:items-start items-center gap-2">
            <h4 className="font-heading font-medium leading-heading md:text-2xl text-xl text-white">
              {t("cardTitles.description")}
            </h4>
            <p className="font-body font-normal leading-body md:text-base text-sm text-white md:text-left text-center">
              {description}
            </p>
          </div>

          <div className="flex flex-col md:items-start items-center gap-2">
            <h4 className="font-heading font-medium leading-heading md:text-2xl text-xl text-white">
              {type === "school"
                ? t("cardTitles.skillsEarned")
                : t("cardTitles.skillsUsed")}
            </h4>
            <div className="flex flex-wrap md:items-start items-center md:justify-start justify-center gap-5">
              {usedSkills.map((skill, idx) => (
                <p
                  key={`experience-${idx}`}
                  className="bg-bg font-body font-normal md:text-base text-sm text-white border border-main rounded-sm shadow-normal px-3 py-2">
                  {resolveUsedSkill(skill)}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative aspect-portrait h-full opacity-40 clip-path-illustration lg:block hidden">
        <div className="absolute top-0 right-0 size-full bg-main/40"></div>
        <div
          className="size-full bg-(image:--bg-img) bg-center bg-cover bg-no-repeat opacity-60"
          style={
            { "--bg-img": `url(${imageUrl(illustration)})` } as CSSProperties
          }></div>
      </div>
    </div>
  );
}
