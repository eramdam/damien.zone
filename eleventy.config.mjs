/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets/*.css");
  eleventyConfig.addLayoutAlias("base", "base.html");
  eleventyConfig.setLiquidOptions({
    // https://liquidjs.com/tutorials/options.html#jsTruthy
    jsTruthy: true,
    // https://liquidjs.com/tutorials/options.html#Strict
    strictVariables: true,
    strictFilters: true,
  });
}
