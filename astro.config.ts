import remarkAttributes from "remark-attributes";
import { defineConfig, passthroughImageService } from "astro/config";
import expressiveCode from "astro-expressive-code";
import mdx from "@astrojs/mdx";
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
    // @ts-expect-error
    remarkPlugins: [remarkAttributes],
  },
  integrations: [expressiveCode({
    themes: ["github-dark", "github-light"],
    styleOverrides: {
      frames: {
        frameBoxShadowCssValue: "none",
      },
      codeFontFamily: "var(--font-monospace)",
    },
  }), mdx()],
});