import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import { ICONS } from "@/constants/assets";
import { ProjectsTechs } from "@/types/data.types";
import { imageUrl } from "@/utils/imageUrl";
import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";
import { Dispatch, SetStateAction } from "react";

type ProjectDetailsProps = {
  title: string;
  description: string;
  image: StaticImageData | string;
  demoLink: string;
  repoLink: string;
  techs?: ProjectsTechs[];
  setOpen?: Dispatch<SetStateAction<boolean>>;
};

export default function ProjectDetails({
  title,
  description,
  image,
  demoLink,
  repoLink,
  techs,
  setOpen,
}: ProjectDetailsProps) {
  const tPro = useTranslations("Projects");
  const tCom = useTranslations("Common");

  return (
    <div className="relative md:w-[80dvw] w-[90dvw] max-h-[90dvh] flex lg:flex-row flex-col md:items-start items-center gap-10 bg-bg border-[1.5px] border-line rounded-lg lg:px-10 lg:py-20 md:p-10 p-5">
      <button
        onClick={() => setOpen?.(false)}
        className="cursor-pointer absolute -top-3 -right-3 p-2 aspect-square bg-bg border border-main rounded-sm shadow-normal transition-colors duration-300 ease-in-out hover:bg-main">
        <Icon
          icon={ICONS.common.close}
          label={tCom("close")}
          className="size-full text-white"
        />
      </button>

      <div className="w-full flex flex-col md:items-start items-center gap-10">
        <h4 className="font-heading font-bold leading-heading lg:text-heading-h2 md:text-heading-h3 text-2xl text-white">
          {title}
        </h4>

        <div className="flex flex-col md:items-start items-center gap-2">
          <h5 className="font-heading font-medium leading-heading lg:text-2xl text-xl text-white">
            {tPro("description")}
          </h5>
          <p className="font-body font-normal leading-body lg:text-base md:text-sm text-xs text-white">
            {description}
          </p>
        </div>

        <div className="flex flex-col md:items-start items-center gap-2">
          <h5 className="font-heading font-medium leading-heading lg:text-2xl text-xl text-white">
            {tPro("techs")}
          </h5>
          <div className="flex md:items-start items-center flex-wrap gap-5">
            {techs?.map((t) => (
              <p
                key={`projTech-${t.id}`}
                className="font-body font-normal leading-body lg:text-base md:text-sm text-xs text-white bg-bg px-3 py-2 border border-main rounded-sm shadow-normal">
                {t.techName}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-10 w-full">
        <div className="relative lg:w-full w-[70%] aspect-video rounded-lg overflow-hidden md:block hidden">
          <Image
            src={imageUrl(image)}
            alt={title}
            loading="lazy"
            fill
            className="size-full"
          />
        </div>
        <div className="flex md:flex-row flex-col items-center gap-5">
          <Button label={tPro("linkToRepo")} href={repoLink} />
          <Button label={tPro("linkToDemo")} href={demoLink} />
        </div>
      </div>
    </div>
  );
}
