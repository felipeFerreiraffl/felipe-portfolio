import SectionTitle from "@/components/ui/SectionTitle";
import { ICONS, IMAGES } from "@/constants/assets";
import { useSectionRefs } from "@/context/sectionRefsContext";
import { useTranslations } from "next-intl";
import ProjectCard from "./ProjectCard";

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

      <div className="w-full grid lg:grid-cols-2 grid-cols-1 place-items-center lg:gap-2 gap-5">
        <ProjectCard
          slice="right"
          title="Teste"
          thumbnail={IMAGES.projects.thumbnails.thumbCalc}
        />
        <ProjectCard
          slice="left"
          title="Teste"
          thumbnail={IMAGES.projects.thumbnails.thumbCalc}
        />
      </div>
    </section>
  );
}
