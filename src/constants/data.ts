import {
  ExperienceDataType,
  ProjectsDataType,
  SkillsDataType,
} from "@/types/data.types";
import { ICONS, IMAGES } from "./assets";
import { LINKS, PROJECTS_LINKS } from "./links";
import { TECH_NAMES } from "./names";

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

export const skillsData: SkillsDataType[] = [
  {
    id: 1,
    title: "Front-end",
    illustration: IMAGES.skills.frontend,
    techs: [
      {
        id: 1,
        title: "HTML",
        level: "techLevels.advanced",
        hasStar: true,
        icon: ICONS.skills.html,
      },
      {
        id: 2,
        title: "CSS",
        level: "techLevels.advanced",
        hasStar: true,
        icon: ICONS.skills.css,
      },
      {
        id: 3,
        title: "Javascript",
        level: "techLevels.intermediate",
        hasStar: true,
        icon: ICONS.skills.javascript,
      },
      {
        id: 4,
        title: "React.js",
        level: "techLevels.intermediate",
        hasStar: true,
        icon: ICONS.skills.reactjs,
      },
      {
        id: 5,
        title: "Typescript",
        level: "techLevels.basic",
        hasStar: false,
        icon: ICONS.skills.typescript,
      },
    ],
  },
  {
    id: 2,
    title: "Back-end",
    illustration: IMAGES.skills.backend,
    techs: [
      {
        id: 6,
        title: "Node.js",
        level: "techLevels.intermediate",
        hasStar: false,
        icon: ICONS.skills.nodejs,
      },
      {
        id: 7,
        title: "Java",
        level: "techLevels.basic",
        hasStar: false,
        icon: ICONS.skills.java,
      },
      {
        id: 8,
        title: "MySQL",
        level: "techLevels.basic",
        hasStar: false,
        icon: ICONS.skills.mysql,
      },
      {
        id: 9,
        title: "MongoDB",
        level: "techLevels.basic",
        hasStar: false,
        icon: ICONS.skills.mongo_db,
      },
    ],
  },
  {
    id: 3,
    title: "t:techTitle.tools",
    illustration: IMAGES.skills.tools,
    techs: [
      {
        id: 10,
        title: "Figma",
        level: "techLevels.advanced",
        hasStar: true,
        icon: ICONS.skills.figma,
      },
      {
        id: 11,
        title: "Git",
        level: "techLevels.intermediate",
        hasStar: false,
        icon: ICONS.skills.git,
      },
      {
        id: 12,
        title: "Vercel",
        level: "techLevels.basic",
        hasStar: false,
        icon: ICONS.skills.vercel,
      },
    ],
  },
];

export const projectsData: ProjectsDataType[] = [
  {
    id: 1,
    title: "data.mathCalc.title",
    description: "data.mathCalc.description",
    thumbnail: IMAGES.projects.thumbnails.thumbCalc,
    image: IMAGES.projects.normal.calc,
    demoLink: PROJECTS_LINKS.mathCalc.demo,
    repoLink: PROJECTS_LINKS.mathCalc.repo,
    techs: [
      {
        id: 1,
        techName: TECH_NAMES.html,
      },
      {
        id: 2,
        techName: TECH_NAMES.css,
      },
      {
        id: 3,
        techName: TECH_NAMES.javascript,
      },
      {
        id: 4,
        techName: TECH_NAMES.reactjs,
      },
      {
        id: 5,
        techName: TECH_NAMES.vercel,
      },
    ],
  },
  {
    id: 2,
    title: "data.animeManga.title",
    description: "data.animeManga.description",
    thumbnail: IMAGES.projects.thumbnails.thumbKitsu,
    image: IMAGES.projects.normal.kitsu,
    demoLink: PROJECTS_LINKS.animeManga.demo,
    repoLink: PROJECTS_LINKS.animeManga.repo,
    techs: [
      {
        id: 1,
        techName: TECH_NAMES.reactjs,
      },
      {
        id: 2,
        techName: TECH_NAMES.javascript,
      },
      {
        id: 3,
        techName: TECH_NAMES.css,
      },
      {
        id: 4,
        techName: TECH_NAMES.vercel,
      },
    ],
  },
];
