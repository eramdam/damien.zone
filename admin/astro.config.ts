import { defineConfig, passthroughImageService } from "astro/config";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import node from "@astrojs/node";
import path from "node:path";
import { fileURLToPath } from "node:url";

const adminDir = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  image: {
    service: passthroughImageService(),
  },
  root: adminDir,
  adapter: node({
    mode: "standalone",
  }),
  cacheDir: path.join(adminDir, ".astro"),
  srcDir: path.join(adminDir, "src"),
  publicDir: path.join(adminDir, "public"),
  vite: {
    plugins: [
      nodePolyfills({
        include: ["buffer"],
      }),
    ],
  },
});
