import matter from "gray-matter";
import type { Root } from "hast";
import fs from "node:fs";
import type { VFile } from "vfile";

export function augmentFrontmatterFields() {
  // All remark and rehype plugins return a separate function
  return function (_tree: Root, file: VFile) {
    if (!file.data.astro.frontmatter.image) {
      file.data.astro.frontmatter.image = "/open_graph.webp";
    }

    // Convert `now` in the date to current date, like 🐻 blog did.
    if (file.data.astro.frontmatter.date === "now") {
      const newDate = new Date();
      file.data.astro.frontmatter.date = newDate.toISOString();
      const fileString = matter.stringify(
        file.value.toString().trim(),
        file.data.astro.frontmatter,
      );
      fs.writeFileSync(file.history[0], fileString);
    }
  };
}
