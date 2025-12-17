import type { ReactNode } from "react";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "@/lib/layout.shared";

export async function generateStaticParams() {
  return [{
    "lang": "en"
  }, {
    "lang": "ru"
  }];
}

export default function Layout({ children }: {
  children: ReactNode;
}) {
  return <HomeLayout {...baseOptions()}>{children}</HomeLayout>;
}
