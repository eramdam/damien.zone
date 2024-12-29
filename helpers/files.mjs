import * as crypto from "node:crypto";
import * as fs from "node:fs";
import { globSync } from "glob";

export function createContentHash(...globs) {
  const files = globSync(globs);

  if (!files.length) {
    throw new Error(`No files found for ${globs.join(",")}`);
  }

  return createStringHash(files.map((f) => fs.readFileSync(f)).join(""));
}

export function createStringHash(string) {
  return crypto.createHash("md5").update(string).digest("hex");
}
