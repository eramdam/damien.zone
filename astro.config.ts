import remarkDirectiveRehype from "remark-directive-rehype";
import { defineConfig, passthroughImageService } from "astro/config";
import expressiveCode from "astro-expressive-code";
import mdx from "@astrojs/mdx";
import { rewriteWithFigures } from "./src/core/customRemarkFigure";
import rehypeRewrite from "rehype-rewrite";
import remarkDirective from "remark-directive";
import { customVideoDirective } from "./src/core/customVideoDirective";

const isDev = import.meta.env.DEV;

export default defineConfig({
  image: {
    service: passthroughImageService(),
  },

  devToolbar: {
    enabled: false,
  },

  site: isDev ? "http://localhost:4321" : "https://damien.zone",
  compressHTML: false,
  markdown: {
    remarkPlugins: [remarkDirective, customVideoDirective as any],
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
