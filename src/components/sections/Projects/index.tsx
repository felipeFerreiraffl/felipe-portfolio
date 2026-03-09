import SectionTitle from "@/components/ui/SectionTitle";
import { ICONS } from "@/constants/assets";
import { useSectionRefs } from "@/context/sectionRefsContext";
import { useTranslations } from "next-intl";

export default function Projects() {
  const { projects } = useSectionRefs();
  const t = useTranslations("Projects");

  return (
    <section ref={projects}>
      <SectionTitle
        title={t("title")}
        icon={ICONS.sections.projects}
        chapterNumber={4}
      />
    </section>
  );
}
