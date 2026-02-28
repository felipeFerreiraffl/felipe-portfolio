import { bebasNeue, plsuJakartaSans, rubik } from "@/constants/fonts";
import { LINKS } from "@/constants/links";
import "@styles/globals.css";
import "@/lib/i18n/request";
import React from "react";
import Header from "@/components/ui/Header";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const fontsClass = `${bebasNeue.className} ${rubik.className} ${plsuJakartaSans.className}`;
  const messages = await getMessages();
  const plainMessages = JSON.parse(JSON.stringify(messages));

  return (
    <html lang="pt-BR" className={fontsClass}>
      <head>
        <meta name="author" content={LINKS.github} />
        <link rel="icon" href="/assets/svgs/favicon.svg" sizes="any" />
        <title>Portfólio | Felipe Ferreira</title>
      </head>

      <body>
        <NextIntlClientProvider
          locale="pt-br"
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
