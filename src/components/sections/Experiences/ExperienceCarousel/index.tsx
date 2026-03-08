"use client";

import ArrowButton from "@/components/ui/ArrowButton";
import { ICONS } from "@/constants/assets";
import { experiencesData } from "@/constants/data";
import useEmblaCarousel from "embla-carousel-react";
import { useTranslations } from "next-intl";
import ExperienceCard from "../ExperienceCard";
import { TranslatableDate } from "@/types/data.types";
import { useEffect, useState } from "react";

export default function ExperienceCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const tExp = useTranslations("Experiences");
  const tCom = useTranslations("Common");

  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const resolveDate = (
    date: string | TranslatableDate | null,
  ): string | null => {
    if (!date) return null;
    if (typeof date === "string") return date;
    return tExp(date.monthKey, { year: date.year });
  };

  const scrollToPrev = () => emblaApi?.scrollPrev();
  const scrollToNext = () => emblaApi?.scrollNext();

  useEffect(() => {
    if (!emblaApi) return;

    const updateBtn = () => {
      setCanPrev(emblaApi.canScrollPrev());
      setCanNext(emblaApi.canScrollNext());
    };

    updateBtn();

    emblaApi.on("select", updateBtn);
    emblaApi.on("reInit", updateBtn);

    return () => {
      emblaApi.off("select", updateBtn);
      emblaApi.off("reInit", updateBtn);
    };
  }, [emblaApi]);

  return (
    <div className="w-full flex items-center lg:flex-row flex-col gap-12">
      <div className="flex lg:flex-col flex-row items-center gap-5">
        <ArrowButton
          icon={ICONS.arrows.caret_left}
          onClick={scrollToPrev}
          label={tCom("carouselButton.prev")}
          disabled={!canPrev}
        />
        <ArrowButton
          icon={ICONS.arrows.caret_right}
          onClick={scrollToNext}
          label={tCom("carouselButton.next")}
          disabled={!canNext}
        />
      </div>

      <div className="overflow-hidden w-full" ref={emblaRef}>
        <div className="flex">
          {experiencesData.map((exp, idx) => (
            <div
              key={`experience-${idx}`}
              className="min-w-0 flex-none basis-full p-3">
              <ExperienceCard
                type={exp.type}
                index={exp.id ?? idx + 1}
                title={tExp(exp.title)}
                description={tExp(exp.description)}
                startDate={resolveDate(exp.startDate)!}
                endDate={resolveDate(exp.endDate ?? null) ?? null}
                illustration={exp.illustration}
                usedSkills={exp.usedSkills}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
