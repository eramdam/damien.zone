import mdx from "@astrojs/mdx";
import astroBrokenLinksChecker from "astro-broken-link-checker";
import expressiveCode from "astro-expressive-code";
import { defineConfig, passthroughImageService } from "astro/config";
import type { Element, Root, RootContent } from "hast";
import rehypeRewrite from "rehype-rewrite";
import { augmentFrontmatterFields } from "./src/core/augmentFrontmatter";
import { rewriteWithFigures } from "./src/core/customRemarkFigure";

const isDev = import.meta.env.DEV;

export default defineConfig({
  image: {
    service: passthroughImageService(),
  },

  redirects: {
    "/blog/page/1": "/blog",
    "/tag/page": "/",
    "/tag/testing": "/",
  },

  devToolbar: {
    enabled: false,
  },

  site: isDev ? "http://localhost:4321" : "https://damien.zone",
  compressHTML: false,
  markdown: {
    smartypants: false,
    rehypePlugins: [
      [
        rehypeRewrite,
        {
          rewrite: (
            node: Root | RootContent,
            index?: number,
            parent?: Root | Element,
          ) => {
            rewriteWithFigures(node, index, parent);
          },
        },
      ],
      augmentFrontmatterFields,
    ],
  },
  integrations: [
    expressiveCode({
      themes: ["github-dark", "github-light"],
      styleOverrides: {
        frames: {
          frameBoxShadowCssValue: "none",
        },
        codeFontFamily: "var(--font-monospace)",
      },
    }),
    mdx(),
    astroBrokenLinksChecker({
      logFilePath: "broken-links.log", // Optional: specify the log file path
      checkExternalLinks: false, // Optional: check external links (currently, caching to disk is not supported, and it is slow )
    }),
  ],
});
