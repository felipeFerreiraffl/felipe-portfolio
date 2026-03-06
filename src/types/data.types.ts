import { StaticImageData } from "next/image";

export type ExperienceDataType = {
  id: number | null;
  title: string;
  description: string;
  startDate: string;
  endDate?: string | null;
  illustration: StaticImageData | string;
  usedSkills: string[];
};
