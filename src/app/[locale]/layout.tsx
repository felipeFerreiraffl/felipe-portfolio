import Header from "@/components/ui/Header";
import { bebasNeue, plsuJakartaSans, rubik } from "@/constants/fonts";
import { LINKS } from "@/constants/links";
import { SectionRefsProvider } from "@/context/sectionRefsContext";
import "@/lib/i18n/request";
import { routing } from "@/lib/i18n/routing";
import "@/styles/globals.css";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import React from "react";
import { LazyMotion, domAnimation } from "motion/react";
import Footer from "@/components/ui/Footer";

type LocaleRoutingProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function RootLayout({
  children,
  params,
}: LocaleRoutingProps) {
  const fontsClass = `${bebasNeue.className} ${rubik.className} ${plsuJakartaSans.className}`;
  const messages = await getMessages();
  const plainMessages = JSON.parse(JSON.stringify(messages));

  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang="pt-BR" className={fontsClass}>
      <head>
        <meta name="author" content={LINKS.github} />
        <link rel="icon" href="/assets/svgs/favicon.svg" sizes="any" />
        <title>Portfólio | Felipe Ferreira</title>
      </head>

      <body>
        <NextIntlClientProvider
          locale={locale}
          messages={plainMessages}
          now={new Date()}
          timeZone="America/Sao_Paulo">
          <LazyMotion features={domAnimation}>
            <SectionRefsProvider>
              <Header />

              <main>{children}</main>

              <Footer />
            </SectionRefsProvider>
          </LazyMotion>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
