import type { ReactNode } from "react";
import { source } from "@/lib/source";
import { RootProvider } from "fumadocs-ui/provider/next";
import "../global.css";
import { Inter } from "next/font/google";
import SearchDialog from "@/components/search";
import { defineI18nUI } from "fumadocs-ui/i18n";
import { i18n } from "@/lib/i18n";

const inter = Inter({
  subsets: ["latin"]
});

const { provider } = defineI18nUI(i18n, {
  "translations": {
    "en": {
      "displayName": "English",
    },
    "ru": {
      "displayName": "Russian",
      "search": "Поиск",
      "chooseLanguage": "Выберите язык",
      "searchNoResult": "Результатов не найдено"
    }
  }
});

export async function generateStaticParams() {
  return source.generateParams();
}

export default async function Layout({ params, children }: {
  params: Promise<{ lang: string }>;
  children: ReactNode;
}) {
  const { lang } = (await params);

  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider search={{ SearchDialog }} i18n={provider(lang)}>{children}</RootProvider>
      </body>
    </html>
  );
}
