import type { UnifiedProcessorOptions } from "@astrojs/markdown-remark";
import type { Root } from "hast";
import rehypeRewrite, { type RehypeRewriteOptions } from "rehype-rewrite";
import type { VFile } from "vfile";
import { rewriteWithFigures } from "./customRemarkFigure.js";

export const makeUnifiedMarkdownConfig = (
  assetsPrefix: string | undefined,
  isDev: boolean,
): UnifiedProcessorOptions => {
  return {
    smartypants: false,
    rehypePlugins: [
      makeRewritePlugin((node) => rewriteMediaSrc(node, assetsPrefix)),
      makeRewritePlugin((node) => rewriteWithFigures(node, isDev)),
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

type RewriteParams = Parameters<RehypeRewriteOptions["rewrite"]>;
function rewriteMediaSrc(
  node: RewriteParams[0],
  assetsPrefix: string | undefined,
) {
  if (assetsPrefix) {
    if (node.type === "element") {
      if (
        node.tagName === "img" ||
        node.tagName === "video" ||
        node.tagName === "audio" ||
        node.tagName === "source" ||
        node.tagName === "picture"
      ) {
        if ("src" in node.properties) {
          node.properties.src = `${assetsPrefix}${node.properties.src}`;
        }
      }
    }
  }
}

function makeRewritePlugin(rewrite: RehypeRewriteOptions["rewrite"]) {
  return function () {
    // @ts-expect-error
    return rehypeRewrite({ rewrite });
  };
}
