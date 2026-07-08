import path from "node:path";
import { fileURLToPath } from "node:url";

export const blogCollectionBase =
  fileURLToPath(path.dirname(import.meta.url)) + "/blog";
