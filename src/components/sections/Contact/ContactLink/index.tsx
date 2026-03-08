import Icon from "@/components/ui/Icon";
import { IconSVGElement } from "@/types/elements.types";

type ContactLinkProps = {
  label: string;
  icon: IconSVGElement;
  href: string | undefined;
  title?: string;
};

export default function ContactLink({
  label,
  icon,
  href,
  title,
}: ContactLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferer"
      className="cursor-pointer group flex flex-col items-center"
      title={title}>
      <Icon
        icon={icon}
        className="md:size-42 size-37 bg-bg border border-line text-white rounded-sm p-8 transition-colors duration-300 ease-in-out group-hover:bg-main/60"
      />
      <span className="-mt-5 font-body font-normal leading-body md:text-base text-sm text-white bg-bg border border-main rounded-sm shadow-normal py-2 px-3 transition-transform duration-300 ease-in-out group-hover:scale-105">
        {label}
      </span>
    </a>
  );
}
