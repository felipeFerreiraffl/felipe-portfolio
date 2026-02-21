"use client";

import i18next from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18next
  .use(LanguageDetector)
  .use(
    resourcesToBackend(
      (lng: string, ns: string) =>
        import(`../../../public/locales/${lng}/${ns}.json`),
    ),
  )
  .use(initReactI18next)
  .init({});

export default i18next;
