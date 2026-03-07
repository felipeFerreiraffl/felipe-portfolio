import { ExperienceDataType } from "@/types/data.types";
import { IMAGES } from "./assets";

export const experiencesData: ExperienceDataType[] = [
  {
    id: 1,
    type: "school",
    title: "cards.swissSenai.title",
    description: "cards.swissSenai.description",
    startDate: "jul. 2023",
    endDate: { monthKey: "dateMonths.december", year: 2024 },
    illustration: IMAGES.experiences.tolle,
    usedSkills: [
      "HTML",
      "CSS",
      "Javascript",
      "React.js",
      "MySQL",
      "Java",
      "t:cards.swissSenai.optionalTechs.network",
      "t:cards.swissSenai.optionalTechs.agileMethods",
      "Hardware",
    ],
  },
  {
    id: 2,
    type: "school",
    title: "cards.mercedes.title",
    description: "cards.mercedes.description",
    startDate: "jul. 2023",
    endDate: "jul. 2025",
    illustration: IMAGES.experiences.mercedes,
    usedSkills: [
      "t:cards.mercedes.optionalTechs.teamwork",
      "t:cards.mercedes.optionalTechs.details",
      "t:cards.mercedes.optionalTechs.proactivity",
    ],
  },
  {
    id: 3,
    type: "work",
    title: "cards.mShimizu.title",
    description: "cards.mShimizu.description",
    startDate: { monthKey: "dateMonths.february", year: 2026 },
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
