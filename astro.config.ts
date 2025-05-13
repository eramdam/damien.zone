import mdx from "@astrojs/mdx";
import expressiveCode from "astro-expressive-code";
import { defineConfig, passthroughImageService } from "astro/config";
import rehypeRewrite from "rehype-rewrite";
import { rewriteWithFigures } from "./src/core/customRemarkFigure";

const isDev = import.meta.env.DEV;

export default defineConfig({
  image: {
    service: passthroughImageService(),
  },

  redirects: {
    "/blog/page/1": "/blog",
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
          rewrite: (node, index, parent) => {
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
  ],
});
