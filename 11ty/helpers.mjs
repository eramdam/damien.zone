/** Returns a copy of {@link array} with {@link items} removed. */
function omit(array, ...items) {
  return (array ?? []).filter((item) => !items.includes(item));
}

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export function helpersPlugin(eleventyConfig) {
  eleventyConfig.addLiquidFilter("omit", omit);
}
