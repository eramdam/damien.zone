import { glob } from "glob";
import fs from "fs";
import matter from "gray-matter";

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export function dateNowMarkdown(eleventyConfig) {
  const globPattern = "blog/**/*.md";
  const fields = ["date"];

  eleventyConfig.on("eleventy.before", ({ directories }) => {
    const inputDirectory = directories.input;
    const blogPosts = glob.sync(inputDirectory + globPattern);
    matter.clearCache();

    for (const file of blogPosts) {
      let content = fs.readFileSync(file, "utf-8");
      const frontMatter = matter(content);
      const originalRawFrontMatter = frontMatter.matter;
      let newRawFrontMatter = frontMatter.matter;

      const nowString = new Date().toISOString();

      fields.forEach((field) => {
        if (frontMatter.data[field] && frontMatter.data[field] === "now") {
          const re = new RegExp(`${field}:\\s(\\S+)`, "");
          newRawFrontMatter = newRawFrontMatter.replace(
            re,
            `${field}: ${nowString}`,
          );
        }
      });

      if (originalRawFrontMatter !== newRawFrontMatter) {
        const newContent = content.replace(
          originalRawFrontMatter,
          newRawFrontMatter,
        );
        fs.writeFileSync(file, newContent);
      }
    }
  });
}
