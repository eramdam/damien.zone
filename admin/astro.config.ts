import { defineConfig, passthroughImageService } from "astro/config";

import node from "@astrojs/node";
import { ADMIN_DEV_PORT } from "@damien.zone/shared/constants";
import path from "node:path";
import { fileURLToPath } from "node:url";

const adminDir = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  image: {
    service: passthroughImageService(),
  },
  devToolbar: {
    enabled: false,
  },
  security: {
    actionBodySizeLimit: 30 * 1024 * 1024,
  },
  server: {
    port: ADMIN_DEV_PORT,
  },

  root: adminDir,
  adapter: node({
    mode: "standalone",
  }),
  output: "server",
  cacheDir: path.join(adminDir, ".astro"),
  srcDir: path.join(adminDir, "src"),
  publicDir: path.join(adminDir, "public"),
});
