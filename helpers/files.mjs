import * as crypto from "node:crypto";
import * as fs from "node:fs";
import { globSync } from "glob";

export function createContentHash(...globs) {
  const files = globSync(globs);
  const hash = crypto.createHash("md5");

  if (!files.length) {
    throw new Error(`No files found for ${globs.join(",")}`);
  }

  files.forEach((filename) => {
    hash.update(fs.readFileSync(filename));
  });

  return hash.digest("hex");
}
