import { bebasNeue, plsuJakartaSans, rubik } from "@/constants/fonts";
import { LINKS } from "@/constants/links";
import "@styles/globals.css";
import "@i18n/config";
import React from "react";
import Header from "@/components/ui/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const fontsClass = `${bebasNeue.className} ${rubik.className} ${plsuJakartaSans.className}`;

  return (
    <html lang="pt-BR" className={fontsClass}>
      <head>
        <meta name="author" content={LINKS.github} />
        <link rel="icon" href="/assets/svgs/favicon.svg" sizes="any" />
        <title>Portfólio | Felipe Ferreira</title>
      </head>

      <body>
        <Header />

        <main>{children}</main>
      </body>
    </html>
  );
}
