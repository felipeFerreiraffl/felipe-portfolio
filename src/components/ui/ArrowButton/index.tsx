import { IconSVGElement } from "@/types/elements.types";
import clsx from "clsx";
import { HTMLAttributes, MouseEventHandler } from "react";

type ArrowButtonProps = {
  icon: IconSVGElement;
  onClick: MouseEventHandler<HTMLButtonElement>;
  label?: string;
  disabled?: boolean | undefined;
  optionalClassname?: string;
};

export default function ArrowButton({
  icon: Component,
  onClick,
  label,
  disabled,
  optionalClassname,
}: ArrowButtonProps) {
  return (
    <button
      type="button"
      className={`cursor-pointer size-12 bg-bg shadow-normal p-1 border border-main rounded-sm transition-all duration-300 ease-in-out hover:bg-main active:bg-main/60 active:shadow-none disabled:bg-line disabled:border-none disabled:shadow-none disabled:opacity-50 disabled:pointer-events-none ${optionalClassname}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={label}>
      <Component className="size-full text-white" />
    </button>
  );
}
