/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets/*.css");
  eleventyConfig.addLayoutAlias("base", "base.html");
}
