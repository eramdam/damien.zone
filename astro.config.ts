import mdx from "@astrojs/mdx";
import expressiveCode from "astro-expressive-code";
import { defineConfig, passthroughImageService } from "astro/config";
import rehypeRewrite from "rehype-rewrite";
import { rewriteWithFigures } from "./src/core/customRemarkFigure";
import astroBrokenLinksChecker from "astro-broken-link-checker";
import type { Element, Root, RootContent } from "hast";

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
