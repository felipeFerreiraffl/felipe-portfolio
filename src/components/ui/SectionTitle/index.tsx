import { IconSVGElement } from "@/types/elements.types";
import { useTranslations } from "next-intl";
import Icon from "../Icon";

type SectionTitleProps = {
  title: string;
  icon: IconSVGElement;
  chapterNumber: number;
};

export default function SectionTitle({
  title,
  icon,
  chapterNumber,
}: SectionTitleProps) {
  const t = useTranslations("Common");

  return (
    <div className="flex flex-1 mx-auto md:items-start items-center md:flex-row flex-col md:gap-0 gap-3 w-full">
      <Icon
        icon={icon}
        label={title}
        className="bg-bg lg:size-21 md:size-19 size-15 text-white border-[1.5px] border-main rounded-sm shadow-normal p-3"
      />

      <div className="w-full flex flex-col md:items-start items-center gap-1">
        <span className="font-body font-normal leading-body md:text-sm text-white md:pl-5">
          {t("sectionChapter", { number: chapterNumber })}
        </span>
        <hr className="border-none h-[1.5px] bg-main w-full" />
        <h2 className="font-heading font-bold leading-heading lg:text-5xl md:text-heading-h2 text-heading-h3 text-white uppercase md:pl-5">
          {title}
        </h2>
      </div>
    </div>
  );
}
