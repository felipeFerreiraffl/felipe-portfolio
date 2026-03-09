import { StaticImageData } from "next/image";

type ProjectCard = {
  title: string;
  thumbnail: StaticImageData | string;
};

export default function ProjectCard({}: ProjectCard) {
  return (
    <div className="">
      <h3 className=""></h3>
    </div>
  );
}
