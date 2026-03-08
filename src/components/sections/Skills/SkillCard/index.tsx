import Icon from "@/components/ui/Icon";
import { ICONS } from "@/constants/assets";
import { imageUrl } from "@/utils/imageUrl";
import Image, { StaticImageData } from "next/image";
import { CSSProperties } from "react";

type SkillCardProps = {
  title: string;
  illustration: StaticImageData | string;
};

export default function SkillCard({ title, illustration }: SkillCardProps) {
  return (
    <div className="lg:max-w-221 md:max-w-[70dvw] max-w-[78dvw] w-full flex flex-col items-center">
      <h3 className="font-heading font-medium leading-heading md:text-2xl text-xl text-white bg-bg border-[1.5px] border-main rounded-sm p-3 shadow-normal -mb-6 z-10">
        {title}
      </h3>

      <div className="relative w-full md:min-h-105 min-h-85 h-full flex items-center lg:justify-between justify-center gap-6 border-[1.5px] border-line rounded-sm">
        <div className="grid grid-cols-2 md:gap-5 gap-3 z-10 py-5 px-15">
          <Icon icon={ICONS.brands.github} />
          <Icon icon={ICONS.brands.github} />
          <Icon icon={ICONS.brands.github} />
          <Icon icon={ICONS.brands.github} />
        </div>

        <div className="relative aspect-portrait max-w-80 w-full h-full opacity-40 clip-path-illustration lg:block hidden">
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
