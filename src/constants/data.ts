import { useTranslations } from "next-intl";
import { IMAGES } from "./assets";
import { ExperienceDataType } from "@/types/data.types";

const tExp = useTranslations("Experiences");

export const experiencesData: ExperienceDataType[] = [
  {
    id: 1,
    title: tExp("cards.swissSenai.title"),
    description: tExp("cards.swissSenai.description"),
    startDate: "jul. 2023",
    endDate: `${tExp("dateMonths.december")} 2024`,
    illustration: IMAGES.experiences.tolle,
    usedSkills: [
      "HTML",
      "CSS",
      "Javascript",
      "React.js",
      "MySQL",
      "Java",
      tExp("cards.swissSenai.optionalTechs.network"),
      tExp("cards.swissSenai.optionalTechs.agileMethods"),
      "Hardware",
    ],
  },
  {
    id: 2,
    title: tExp("cards.mercedes.title"),
    description: tExp("cards.swissSenai.description"),
    startDate: "jul. 2023",
    endDate: "jul. 2025",
    illustration: IMAGES.experiences.mercedes,
    usedSkills: [
      tExp("cards.mercedes.optionalTechs.teamwork"),
      tExp("cards.mercedes.optionalTechs.details"),
      tExp("cards.mercedes.optionalTechs.proactivity"),
    ],
  },
  {
    id: 3,
    title: tExp("cards.mShimizu.title"),
    description: tExp("cards.mShimizu.description"),
    startDate: `${tExp("dateMonths.february")}`,
    endDate: null,
    illustration: IMAGES.experiences.mshimizu,
    usedSkills: [
      "HTML",
      "CSS",
      "Javascript",
      "Typescript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
    ],
  },
];
