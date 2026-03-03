"use client";

import { IMAGES } from "@/constants/assets";
import { usePathname, useRouter } from "@i18n/navigation";
import clsx from "clsx";
import { useLocale } from "next-intl";
import Image from "next/image";
import { useTransition } from "react";

export default function LangSelector() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const switchLanguage = (newLocale: string) => {
    if (newLocale !== locale) {
      startTransition(() => {
        router.replace(pathname, { locale: newLocale });
      });
    }
  };

  const langButton =
    "relative group md:size-10 size-8 cursor-pointer rounded-full opacity-40 transition-opacity ease-in-out duration-300 hover:opacity-100";
  const activeBase =
    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 bg-main md:size-11 size-9 rounded-full transition-transform ease-in-out duration-300 group-hover:scale-100";

  return (
    <div className="flex items-center gap-5">
      <button
        className={clsx(langButton, locale === "pt-br" && "opacity-100")}
        defaultValue={locale}
        disabled={isPending}
        onClick={() => switchLanguage("pt-br")}>
        <div
          className={clsx(activeBase, locale === "pt-br" && "scale-100")}></div>
        <Image
          src={IMAGES.language.brazilFlag}
          alt="PT-BR"
          className="relative size-full object-cover z-10"
          title="PT-BR"
        />
      </button>
      <button
        className={clsx(langButton, locale === "en" && "opacity-100")}
        defaultValue={locale}
        disabled={isPending}
        onClick={() => switchLanguage("en")}>
        <div className={clsx(activeBase, locale === "en" && "scale-100")}></div>
        <Image
          src={IMAGES.language.englishFlag}
          alt="EN"
          className="relative size-full object-cover z-10"
          title="EN"
        />
      </button>
    </div>
  );
}
