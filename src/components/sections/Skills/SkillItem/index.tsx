import Icon from "@/components/ui/Icon";
import { ICONS } from "@/constants/assets";
import { IconSVGElement } from "@/types/elements.types";
import { useTranslations } from "next-intl";

type SkillItemProps = {
  title: string;
  icon: IconSVGElement;
  level: "techLevels.basic" | "techLevels.intermediate" | "techLevels.advanced";
  hasStar?: boolean;
};

export default function SkillItem({
  title,
  icon,
  level,
  hasStar,
}: SkillItemProps) {
  const t = useTranslations("Skills");

  return (
    <div className="md:w-50 w-25 flex md:flex-row flex-col md:items-start items-center gap-2">
      <Icon
        icon={icon}
        className="md:size-14 size-10 bg-bg border border-main text-white rounded-sm shadow-normal p-2"
      />

      <div className="flex flex-col md:items-start items-center gap-1">
        <div className="flex items-center md:gap-3 gap-2">
          <h4 className="font-body font-bold leading-body md:text-lg text-sm text-white">
            {title}
          </h4>
          {hasStar && (
            <Icon
              icon={ICONS.common.star}
              className="md:size-5 size-3 text-gold"
              label={t("hasStar")}
            />
          )}
        </div>
        <span className="font-body font-normal leading-body md:text-sm text-xs text-line">
          {t(level)}
        </span>
      </div>
    </div>
  );
}
