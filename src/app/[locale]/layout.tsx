import { bebasNeue, plsuJakartaSans, rubik } from "@/constants/fonts";
import { LINKS } from "@/constants/links";
import "@styles/globals.css";
import "@/lib/i18n/request";
import React from "react";
import Header from "@/components/ui/Header";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/lib/i18n/routing";
import { notFound } from "next/navigation";

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
          <Header />

          <main>{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
