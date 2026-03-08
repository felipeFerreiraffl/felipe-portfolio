import SectionTitle from "@/components/ui/SectionTitle";
import { ICONS } from "@/constants/assets";
import { useSectionRefs } from "@/context/sectionRefsContext";
import { useTranslations } from "next-intl";
import ExperienceCarousel from "./ExperienceCarousel";

export default function Experiences() {
  const { experiences } = useSectionRefs();
  const tExp = useTranslations("Experiences");

  return (
    <section
      ref={experiences}
      className="w-full flex flex-col lg:items-end items-center gap-10">
      <SectionTitle
        title={tExp("title")}
        chapterNumber={2}
        icon={ICONS.sections.experiences}
      />

      <ExperienceCarousel />
    </section>
  );
}
