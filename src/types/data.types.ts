import { StaticImageData } from "next/image";
import { IconSVGElement } from "./elements.types";

export type TranslatableDate = { monthKey: string; year: number };

export type ExperienceDataType = {
  id: number | null;
  type: "school" | "work";
  title: string;
  description: string;
  startDate: string | TranslatableDate;
  endDate?: string | TranslatableDate | null;
  illustration: StaticImageData | string;
  usedSkills: string[];
};

export type SkillsTechs = {
  id: number | null;
  title: string;
  level: "techLevels.basic" | "techLevels.intermediate" | "techLevels.advanced";
  hasStar: boolean;
  icon: IconSVGElement;
};

export type SkillsDataType = {
  id: number | null;
  title: string;
  illustration: StaticImageData | string;
  techs: SkillsTechs[];
};
