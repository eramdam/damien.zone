import { defineConfig, passthroughImageService } from "astro/config";
import expressiveCode from "astro-expressive-code";
import mdx from "@astrojs/mdx";
import { rehypeFigures } from "./src/core/customRemarkFigure";

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
    rehypePlugins: [rehypeFigures],
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
