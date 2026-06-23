import mdx from "@astrojs/mdx";
import astroBrokenLinksChecker from "astro-broken-link-checker";
import expressiveCode from "astro-expressive-code";
import {
  defineConfig,
  passthroughImageService,
  fontProviders,
} from "astro/config";
import type { Element, Root, RootContent } from "hast";
import rehypeRewrite from "rehype-rewrite";
import { augmentFrontmatterFields } from "./src/core/augmentFrontmatter";
import { rewriteWithFigures } from "./src/core/customRemarkFigure";
import sitemap from "@astrojs/sitemap";
import { unified } from "@astrojs/markdown-remark";

const isDev = import.meta.env.DEV;

export default defineConfig({
  image: {
    service: passthroughImageService(),
  },

  redirects: {
    "/blog/page/1": "/blog",
    "/tag/page": "/",
    "/tag/testing": "/",
    "/feed": "/feed.xml",
  },

  devToolbar: {
    enabled: false,
  },

  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Atkinson Hyperlegible Next",
      cssVariable: "--font-atkinson-hyperlegible-next",
    },
    {
      provider: fontProviders.fontsource(),
      name: "Atkinson Hyperlegible Mono",
      cssVariable: "--font-atkinson-hyperlegible-mono",
    },
    {
      provider: fontProviders.local(),
      name: "PP Right Serif",
      cssVariable: "--font-pp-right",
      optimizedFallbacks: false,
      fallbacks: [],
      options: {
        variants: [
          {
            weight: 300,
            style: "normal",
            src: ["./src/assets/fonts/pp-right/PP Right Serif - Light.woff2"],
          },
          {
            weight: 500,
            style: "normal",
            src: ["./src/assets/fonts/pp-right/PP Right Serif - Medium.woff2"],
          },
          {
            weight: 600,
            style: "normal",
            src: ["./src/assets/fonts/pp-right/PP Right Serif - Bold.woff2"],
          },
        ],
      },
    },
  ],

  server: {
    allowedHosts: [".ngrok.app", ".ngrok-free.app"],
  },

  site: isDev ? "http://localhost:4321" : "https://damien.zone",
  build: {
    assetsPrefix: "https://cdn.damien.zone",
  },
  compressHTML: false,
  markdown: {
    processor: unified({
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
    }),
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
    mdx({
      gfm: false,
    }),
    astroBrokenLinksChecker({
      logFilePath: "broken-links.log", // Optional: specify the log file path
      checkExternalLinks: false, // Optional: check external links (currently, caching to disk is not supported, and it is slow )
    }),
    sitemap(),
  ],
});
