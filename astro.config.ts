import { unified } from "@astrojs/markdown-remark";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import astroBrokenLinksChecker from "astro-broken-links-checker";
import expressiveCode from "astro-expressive-code";
import {
  defineConfig,
  fontProviders,
  passthroughImageService,
} from "astro/config";
import type { Element, Root, RootContent } from "hast";
import fs from "node:fs";
import path from "node:path";
import rehypeRewrite from "rehype-rewrite";
import { augmentFrontmatterFields } from "./src/core/augmentFrontmatter";
import { rewriteWithFigures } from "./src/core/customRemarkFigure";

import node from "@astrojs/node";
import type { InjectedRoute } from "astro";

const isDev = import.meta.env.DEV;

// Actions require a server output. We only want them in dev (node adapter).
const actionsIndex = "src/actions/index.ts";
if (isDev) {
  fs.writeFileSync(actionsIndex, `export { server } from "./_server";\n`);
} else {
  fs.rmSync(actionsIndex, { force: true });
}

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
    {
      name: "damien.zone",
      hooks: {
        "astro:config:setup": async (options) => {
          const { injectRoute, command, logger, addWatchFile } = options;
          if (command !== "dev") {
            return;
          }

          const dir = "src/admin";
          addWatchFile(path.resolve(dir));
          const files = fs.promises.glob("**/*.{astro,ts}", { cwd: dir });

          for await (const file of files) {
            const ext = path.extname(file);
            if (![".astro", ".ts"].includes(ext)) {
              continue;
            }

            const name = path.basename(file, ext);
            const dirname = path.dirname(file);
            let pattern = `/admin/${dirname !== "." ? dirname : ""}`;
            if (name !== "index") {
              pattern += `/${name}`;
            }
            pattern = pattern.replaceAll("//", "/");
            const route = {
              pattern,
              entrypoint: `./${dir}/${file}`,
            } satisfies InjectedRoute;
            injectRoute(route);
            logger.info(`injected ${JSON.stringify(route, null, 2)}`);
          }
          logger.info("admin routes (dev only)");
        },
      },
    },
  ],

  adapter: isDev
    ? node({
        mode: "standalone",
      })
    : undefined,

  vite: {
    build: {},
  },
});
