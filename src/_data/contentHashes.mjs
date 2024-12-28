import * as crypto from "node:crypto";
import * as fs from "node:fs";
import { globSync } from "glob";

function createContentHash(...globs) {
  const files = globSync(globs);
  const hash = crypto.createHash("md5");

  files.forEach((filename) => {
    hash.update(fs.readFileSync(filename));
  });

  return hash.digest("hex");
}

export default {
  stylesheet: createContentHash(
    "src/assets/styles/damien.zone.css",
    "src/assets/styles/**/*.css",
  ),
  openGraph: createContentHash("src/assets/open_graph.webp"),
  script: createContentHash("src/assets/script.js"),
};
