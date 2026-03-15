import { SkillsTechs } from "@/types/data.types";
import { imageUrl } from "@/utils/imageUrl";
import { StaticImageData } from "next/image";
import { CSSProperties } from "react";
import SkillItem from "../SkillItem";
import { useTranslations } from "next-intl";

type SkillCardProps = {
  title: string;
  illustration: StaticImageData | string;
  techs: SkillsTechs[];
};

export default function SkillCard({
  title,
  illustration,
  techs,
}: SkillCardProps) {
  const t = useTranslations("Skills");

  const resolveTitle = (title: string) => {
    if (title.startsWith("t:")) return t(title.slice(2));
    return title;
  };

  return (
    <div className="lg:max-w-[60dvw] md:max-w-[70dvw] max-w-[78dvw] w-full flex flex-col items-center">
      <h3 className="font-heading font-medium leading-heading md:text-2xl text-xl text-white bg-bg border-[1.5px] border-main rounded-sm p-3 shadow-normal -mb-6 z-10">
        {resolveTitle(title)}
      </h3>

      <div className="relative w-full md:min-h-105 min-h-85 h-full flex items-center lg:justify-between justify-center gap-6 border-[1.5px] border-line rounded-sm">
        <div className="grid grid-cols-2 md:gap-5 gap-3 z-10 py-5 px-15">
          {techs.map((tech) => (
            <SkillItem
              key={`tech-${tech.id}`}
              title={tech.title}
              icon={tech.icon}
              level={tech.level}
              hasStar={tech.hasStar}
            />
          ))}
        </div>

        <div className="relative aspect-portrait max-w-80 size-full opacity-40 clip-path-illustration lg:block hidden">
          <div className="absolute top-0 left-0 size-full bg-main/40"></div>
          <div
            className="size-full bg-(image:--bg-img) bg-center bg-cover bg-no-repeat opacity-60"
            style={
              { "--bg-img": `url(${imageUrl(illustration)})` } as CSSProperties
            }></div>
        </div>
      </div>
    </div>
  );
}
