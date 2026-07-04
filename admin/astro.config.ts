import { defineConfig, passthroughImageService } from "astro/config";

import node from "@astrojs/node";
import path from "node:path";
import { fileURLToPath } from "node:url";
import fs from "node:fs";

const adminDir = path.dirname(fileURLToPath(import.meta.url));

const copyThemes = () => {
  const files = fs
    .globSync("../node_modules/monaco-themes/themes/*.json", {
      cwd: adminDir,
    })
    .map((f) => path.resolve(adminDir, f));

  for (const file of files) {
    fs.cpSync(file, path.resolve(adminDir, `./themes/${path.basename(file)}`));
  }
};

copyThemes();

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
});
