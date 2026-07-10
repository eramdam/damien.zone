import path from "node:path";
import { fileURLToPath } from "node:url";

// Prefer an explicit path (set in production, e.g. the admin Docker image)
// because import.meta.url is unreliable once this module is bundled into
// admin's SSR output. Falls back to the source-relative path for dev.
export const blogCollectionBase =
  process.env.BLOG_POSTS_ROOT ??
  fileURLToPath(path.dirname(import.meta.url)) + "/blog";
