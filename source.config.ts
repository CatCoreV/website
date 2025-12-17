import { defineConfig, defineDocs, frontmatterSchema, metaSchema } from "fumadocs-mdx/config";
import { remarkMdxFiles } from "fumadocs-core/mdx-plugins";

export const docs = defineDocs({
  "dir": "content/docs",
  "docs": {
    "schema": frontmatterSchema,
    "postprocess": {
      "includeProcessedMarkdown": true,
      "extractLinkReferences": true
    }
  },
  "meta": {
    "schema": metaSchema
  }
});

export default defineConfig({
  "mdxOptions": {
    "remarkPlugins": [remarkMdxFiles]
  }
});