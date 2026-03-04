import Icon from "@/components/ui/Icon";
import { IconSVGElement } from "@/types/elements.types";
import { RiAB } from "@remixicon/react";
import { StaticImageData } from "next/image";
import { CSSProperties } from "react";

type IntroCardProps = {
  title: string;
  description: string;
  icon: IconSVGElement;
  bgImage: StaticImageData | string;
};

export default function IntroCard({
  title,
  description,
  icon,
  bgImage,
}: IntroCardProps) {
  const imageUrl = typeof bgImage === "string" ? bgImage : bgImage.src;

  const bgClasses =
    "relative group lg:h-120 h-full w-full flex flex-col justify-center items-center p-10 border-[1.5px] border-line bg-main/20 lg:hover:bg-main/40 transition-colors duration-300 ease-in-out overflow-hidden";
  const bgBefore = `before:absolute before:inset-0 before:w-full before:h-full before:bg-[image:var(--bg-img)] before:bg-center before:bg-cover before:bg-no-repeat before:opacity-20 before:-z-10`;

  return (
    <article
      className={`${bgClasses} ${bgBefore}`}
      style={{ "--bg-img": `url(${imageUrl})` } as CSSProperties}>
      <h3 className="absolute top-1/2 left-1/2 -translate-1/2 font-heading md:font-bold font-medium leading-heading md:text-heading-h3 text-2xl text-white lg:opacity-100 opacity-0 z-10 transition-opacity duration-300 ease-in-out lg:group-hover:opacity-0">
        {title}
      </h3>

      <div className="absolute top-1/2 left-1/2 -translate-1/2 flex flex-col justify-center items-center md:gap-5 gap-2 lg:opacity-0 opacity-100 z-10 transition-opacity duration-300 ease-in-out lg:group-hover:opacity-100">
        <h3 className="font-heading md:font-bold font-medium leading-heading md:text-heading-h3 text-2xl text-white">
          {title}
        </h3>
        <p className="font-body font-normal leading-body md:text-lg text-sm text-white text-center">
          {description}
        </p>
        <Icon
          icon={icon}
          label={title}
          className="md:size-16 size-10 text-white"
        />
      </div>
    </article>
  );
}
