"use client";

import ArrowButton from "@/components/ui/ArrowButton";
import { ICONS } from "@/constants/assets";
import useEmblaCarousel from "embla-carousel-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import SkillItem from "../SkillItem";
import { skillsData } from "@/constants/data";
import SkillCard from "../SkillCard";

export default function SkillsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "center" });
  const tSki = useTranslations("Skills");
  const tCom = useTranslations("Common");

  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

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
    <div className="w-full flex lg:flex-row flex-col items-center lg:gap-10 gap-5">
      <div className="lg:hidden flex items-center gap-5">
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

      <ArrowButton
        icon={ICONS.arrows.caret_left}
        onClick={scrollToPrev}
        label={tCom("carouselButton.prev")}
        disabled={!canPrev}
        optionalClassname="lg:block hidden"
      />

      <div className="overflow-hidden w-full" ref={emblaRef}>
        <div className="flex">
          {skillsData.map((skill) => (
            <div
              key={`skill-${skill.id}`}
              className="min-w-0 flex-none basis-full flex justify-center p-3">
              <SkillCard
                title={skill.title}
                illustration={skill.illustration}
                techs={skill.techs}
              />
            </div>
          ))}
        </div>
      </div>

      <ArrowButton
        icon={ICONS.arrows.caret_right}
        onClick={scrollToNext}
        label={tCom("carouselButton.next")}
        disabled={!canNext}
        optionalClassname="lg:block hidden"
      />
    </div>
  );
}
