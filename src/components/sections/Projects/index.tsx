import SectionTitle from "@/components/ui/SectionTitle";
import { ICONS, IMAGES } from "@/constants/assets";
import { useSectionRefs } from "@/context/sectionRefsContext";
import { useTranslations } from "next-intl";
import ProjectCard from "./ProjectCard";
import ProjectDetails from "./ProjectDetails";
import { projectsData } from "@/constants/data";

export default function Projects() {
  const { projects } = useSectionRefs();
  const t = useTranslations("Projects");

  const analyzeRemainder = (number: number) => number % 2 === 0;

  return (
    <section ref={projects} className="flex flex-col items-center gap-10">
      <SectionTitle
        title={t("title")}
        icon={ICONS.sections.projects}
        chapterNumber={4}
      />

      <div className="w-full grid lg:grid-cols-2 grid-cols-1 place-items-center lg:gap-2 gap-5">
        {projectsData.map((proj, idx) => (
          <ProjectCard
            key={`proj-${proj.id ?? idx + 1}`}
            title={t(proj.title)}
            description={t(proj.description)}
            demoLink={proj.demoLink}
            repoLink={proj.repoLink}
            thumbnail={proj.thumbnail}
            image={proj.image}
            slice={analyzeRemainder(proj.id ?? idx + 1) ? "left" : "right"}
            techs={proj.techs}
          />
        ))}
      </div>
    </section>
  );
}
