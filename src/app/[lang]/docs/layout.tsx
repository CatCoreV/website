import type { ReactNode } from "react";
import { source } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { baseOptions } from "@/lib/layout.shared";
import { GithubInfo } from "fumadocs-ui/components/github-info";

export default async function Layout({ params, children }: {
  params: Promise<{ lang: string }>;
  children: ReactNode;
}) {
  const { lang } = await params;

  return (
    <DocsLayout tree={source.getPageTree(lang)} {...baseOptions()} links={[
      {
        "type": "custom",
        "children": <GithubInfo owner="CatCoreV" repo="catcore" className="lg:-mx-2" />,
      },
      {
        "type": "custom",
        "children": <GithubInfo owner="CatCoreV" repo="os-compiler" className="lg:-mx-2" />,
      }
    ]}>
      {children}
    </DocsLayout>
  );
}
