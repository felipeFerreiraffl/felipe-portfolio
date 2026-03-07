import clsx from "clsx";

type ButtonProps = {
  label: string;
  href: string;
  optionalClassname?: string;
};

export default function Button({
  label,
  optionalClassname,
  href,
}: ButtonProps) {
  const baseClasses = `min-w-30 cursor-pointer font-body font-bold text-base leading-body uppercase py-3 px-5 bg-bg text-text border border-main rounded-sm shadow-normal transition-all duration-300 ease-in-out`;
  const hoverClasses = `hover:bg-main`;
  const activeClasses = `active:bg-main/60 active:shadow-none`;
  const disabledClasses = `disabled:bg-line disabled:opacity-50 disabled:shadow-none disabled:border-none`;

  return (
    <a
      href={href}
      className={clsx(
        `${baseClasses} ${hoverClasses} ${activeClasses} ${disabledClasses}`,
        optionalClassname,
      )}
      rel="noopenener noreferer"
      target="_blank">
      {label}
    </a>
  );
}
