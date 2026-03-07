import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import { ICONS, IMAGES } from "@/constants/assets";
import { useSectionRefs } from "@/context/sectionRefsContext";
import { scrollToSection } from "@/utils/scrollToSection";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Hero() {
  const { aboutMe } = useSectionRefs();
  const t = useTranslations("Hero");

  return (
    <section className="relative lg:flex-1 flex items-center lg:justify-around justify-center lg:flex-row flex-col m-auto lg:pt-0 pt-22 lg:gap-10 w-[90vw] h-dvh">
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
          loading="eager"
          className="relative aspect-square w-full shadow-image rounded-lg z-10"
        />

        <div className="absolute -top-10 lg:-right-36 -right-36 bg-main aspect-square lg:w-[45%] w-[38%] rounded-xl"></div>
        <div className="absolute -bottom-22 -right-28 bg-main aspect-square lg:w-[36%] w-[40%] rounded-xl"></div>
        <div className="absolute -bottom-10 -left-8 bg-main aspect-square lg:w-28 w-[22%] rounded-xl"></div>
      </div>

      <article className="md:absolute lg:bottom-6 md:-bottom-36 md:left-1/2 md:-translate-x-1/2 flex flex-col items-center gap-2">
        <p
          id="scroll-down"
          className="font-body font-normal leading-body text-text text-lg">
          {t("scrollDown")}
        </p>
        <button
          onClick={() => scrollToSection(aboutMe)}
          className="cursor-pointer bg-bg p-1 border border-main shadow-normal rounded-sm transition-colors duration-300 ease-in-out hover:bg-main"
          aria-labelledby="scroll-down">
          <Icon icon={ICONS.arrows.normal_down} className="size-10 text-text" />
        </button>
      </article>
    </section>
  );
}
