import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import path from "node:path";
import { fileURLToPath } from "node:url";

const adminDir = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: adminDir,
  adapter: node({
    mode: "standalone",
  }),
  cacheDir: path.join(adminDir, ".astro"),
  srcDir: path.join(adminDir, "src"),
  publicDir: path.join(adminDir, "public"),
});
