import SectionTitle from "@/components/ui/SectionTitle";
import { ICONS } from "@/constants/assets";
import { LINKS } from "@/constants/links";
import { useSectionRefs } from "@/context/sectionRefsContext";
import { useTranslations } from "next-intl";
import ContactLink from "./ContactLink";

export default function Contact() {
  const { contact } = useSectionRefs();
  const t = useTranslations("Contact");

  const contactLinks = [
    {
      label: "felipeFerreiraffl",
      href: LINKS.github,
      icon: ICONS.brands.github,
      title: t("linksTitle.github"),
    },
    {
      label: "Felipe Ferreira",
      href: LINKS.linkedin,
      icon: ICONS.brands.linkedin,
      title: t("linksTitle.linkedin"),
    },
    {
      label: "felipe.ferr.lima04",
      href: `mailto:${LINKS.mail}`,
      icon: ICONS.common.mail,
      title: t("linksTitle.github"),
    },
  ];

  return (
    <section ref={contact} className="flex flex-col items-center gap-10">
      <SectionTitle
        title={t("title")}
        icon={ICONS.sections.contacts}
        chapterNumber={5}
      />

      <div className="flex md:flex-row flex-col items-center gap-15">
        {contactLinks.map((con, idx) => (
          <ContactLink
            key={`contact-${idx}`}
            href={con.href}
            icon={con.icon}
            label={con.label}
            title={con.title}
          />
        ))}
      </div>
    </section>
  );
}
