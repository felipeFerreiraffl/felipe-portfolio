import { StaticImageData } from "next/image";

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
