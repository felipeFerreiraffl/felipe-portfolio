import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="relative flex-1 items-center justify-center pt-23 pb-20 mt-40 bg-bg">
      <div className="absolute top-0 rotate-2 w-full h-[1.5px] bg-line"></div>
      <p className="font-heading font-bold leading-heading md:text-heading-h2 text-2xl px-5 text-white text-center">
        {t("message")}
      </p>
    </footer>
  );
}
