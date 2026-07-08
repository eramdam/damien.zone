import rehypeRewrite from "rehype-rewrite";
import type { Element, Root, RootContent } from "hast";
import type { UnifiedProcessorOptions } from "@astrojs/markdown-remark";
import { rewriteWithFigures } from "../src/core/customRemarkFigure";
import type { VFile } from "vfile";

export const makeUnifiedMarkdownConfig = (
  assetsPrefix: string | undefined,
): UnifiedProcessorOptions => {
  return {
    smartypants: false,
    rehypePlugins: [
      [
        rehypeRewrite,
        {
          rewrite: (
            node: Root | RootContent,
            _index?: number,
            _parent?: Root | Element,
          ) => {
            rewriteWithFigures(node, assetsPrefix);
          },
        },
      ],
      augmentFrontmatterFields,
    ],
  };
};

function augmentFrontmatterFields() {
  // All remark and rehype plugins return a separate function
  return function (_tree: Root, file: VFile) {
    if (!file.data.astro?.frontmatter) {
      return;
    }
    if (!file.data.astro.frontmatter.image) {
      file.data.astro.frontmatter.image = "/open_graph.webp";
    }
  };
}
