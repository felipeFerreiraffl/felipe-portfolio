import { RemixiconComponentType } from "@remixicon/react";
import { FC, SVGProps } from "react";

type IconProps = {
  icon: RemixiconComponentType | FC<SVGProps<SVGElement>>;
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
