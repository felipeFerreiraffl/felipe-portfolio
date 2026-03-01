import Button from "@/components/ui/Button";
import { IMAGES } from "@/constants/assets";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="lg:flex-1 flex items-center lg:justify-around justify-center lg:flex-row flex-col m-auto lg:pt-0 pt-22 lg:gap-10 w-[90vw] h-dvh">
      <div className="flex flex-col gap-20 lg:items-start items-center lg:justify-normal justify-center lg:w-1/2 w-full lg:h-131 h-106 lg:my-0 my-6 lg:pt-10 lg:pb-20 lg:border-l-2 lg:border-l-line">
        <div className="w-full flex flex-col gap-2">
          <span className="font-heading font-medium md:text-xl lg:text-left text-center lg:pl-10 text-white leading-heading">
            {t("volumeTitle")}
          </span>
          <hr className="w-full h-0.5 border-none bg-line" />
        </div>

        <div className="flex flex-col lg:pl-10 lg:items-start items-center w-full">
          <h1 className="font-display font-normal md:text-heading-display text-5xl text-text leading-none lg:text-left text-center">
            Felipe Ferreira Lima
          </h1>
          <p className="font-heading font-medium md:text-2xl text-xl leading-heading mt-5 text-white lg:text-left text-center">
            {t("role")}
          </p>
          <Button
            href="/archives/programmer_cv.pdf"
            label={t("curriculumButton")}
            optionalClassname="mt-10"
          />
        </div>
      </div>

      <div className="relative lg:w-[30vw] md:w-[53vw] md:block hidden">
        <Image
          src={IMAGES.profile}
          alt={t("profileAlt", { name: "Felipe Ferreira Lima" })}
          className="relative aspect-square w-full shadow-image rounded-lg z-10"
        />

        <div className="absolute -top-10 -right-36 bg-main aspect-square lg:w-[45%] rounded-xl"></div>
        <div className="absolute -bottom-22 -right-28 bg-main aspect-square lg:w-[36%] rounded-xl"></div>
        <div className="absolute -bottom-10 -left-8 bg-main aspect-square lg:w-28 rounded-xl"></div>
      </div>
    </section>
  );
}
