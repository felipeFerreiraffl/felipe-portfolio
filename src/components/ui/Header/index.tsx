import { useTranslations } from "next-intl";
import LangSelector from "./LangSelector";

export default function Header() {
  const t = useTranslations("Header");

  const NAV_LINKS = [
    { label: t("navLabels.aboutMe"), link: "#" },
    { label: t("navLabels.experiences"), link: "#" },
    { label: t("navLabels.skills"), link: "#" },
    { label: t("navLabels.projects"), link: "#" },
    { label: t("navLabels.contact"), link: "#" },
  ];

  return (
    <header className="fixed w-4/5 flex items-center justify-self-center justify-between px-20 py-4 my-6 bg-bg border border-main rounded-sm shadow-normal z-50">
      <nav className="flex items-center gap-5">
        {NAV_LINKS.map((anchor, idx) => (
          <a
            key={idx}
            href={anchor.link}
            className="text-base font-bold font-body uppercase leading-body text-text px-3 py-2 rounded-sm transition-shadow ease-in-out duration-300 hover:shadow-anchor">
            {anchor.label}
          </a>
        ))}
      </nav>

      <LangSelector />
    </header>
  );
}
