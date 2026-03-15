import { IconSVGElement } from "@/types/elements.types";

type IconProps = {
  icon: IconSVGElement;
  className?: string;
  label?: string;
};

export default function Icon({ icon: Component, className, label }: IconProps) {
  return (
    <Component
      className={className}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      focusable={label ? undefined : false}
    />
  );
}
