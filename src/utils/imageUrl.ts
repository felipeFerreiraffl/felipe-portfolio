import { StaticImageData } from "next/image";

export const imageUrl = (img: StaticImageData | string) => {
  return typeof img === "string" ? img : img.src;
};
