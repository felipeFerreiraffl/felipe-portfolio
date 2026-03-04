import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import { bebasNeue, plsuJakartaSans, rubik } from "@/constants/fonts";
import { LINKS } from "@/constants/links";
import { SectionRefsProvider } from "@/context/sectionRefsContext";
import "@/lib/i18n/request";
import { routing } from "@/lib/i18n/routing";
import "@/styles/globals.css";
import { domAnimation, LazyMotion } from "motion/react";
import { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import React from "react";

type LocaleRoutingProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export const metadata: Metadata = {
  title: "Portfólio | Felipe Ferreira",
  description:
    "Portfólio profissional feito para demonstrar minhas habilidades, experiências e projetos",
  authors: { name: "Felipe Ferreira Lima", url: LINKS.github },
  openGraph: {
    title: "Perfil do LinkedIn",
    type: "profile",
    username: "Felipe Ferreira",
    url: LINKS.linkedin,
  },
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
