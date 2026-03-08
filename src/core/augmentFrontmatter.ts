import matter from "gray-matter";
import type { Root } from "hast";
import fs from "node:fs";
import type { VFile } from "vfile";

import { getLastUpdatedTimestamp } from "./gitDate";

export function augmentFrontmatterFields() {
  // All remark and rehype plugins return a separate function
  return function (_tree: Root, file: VFile) {
    if (!file.data.astro.frontmatter.image) {
      file.data.astro.frontmatter.image = "/open_graph.png";
    }

    // Convert `now` in the date to current date, like bearblog did.
    if (file.data.astro.frontmatter.date === "now") {
      const newDate = new Date();
      file.data.astro.frontmatter.date = newDate.toISOString();
      const fileString = matter.stringify(
        file.value.toString().trim(),
        file.data.astro.frontmatter,
      );
      fs.writeFileSync(file.history[0], fileString);
    }
    const filePath = file.history[0];
    const cutoff = new Date(`2025-05-14T17:04:02.168Z`);

    // Add a `updated` field that uses the Git modified date
    if (!file.data.astro.frontmatter.updated && filePath.includes("src/blog")) {
      const updated = getLastUpdatedTimestamp(filePath);
      if (updated > cutoff) {
        file.data.astro.frontmatter.updated = updated;
      }
    }
  };
}
