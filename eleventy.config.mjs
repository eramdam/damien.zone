import eleventyAutoCacheBuster from "eleventy-auto-cache-buster";
import { EleventyHtmlBasePlugin } from "@11ty/eleventy";

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyAutoCacheBuster, {
    enableLogging: true,
  });
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  eleventyConfig.addPassthroughCopy("assets/*.css");
  eleventyConfig.addPassthroughCopy("assets/*.js");
  eleventyConfig.addLayoutAlias("base", "base.html");
  eleventyConfig.setLiquidOptions({
    // https://liquidjs.com/tutorials/options.html#jsTruthy
    jsTruthy: true,
    // https://liquidjs.com/tutorials/options.html#Strict
    strictVariables: true,
    strictFilters: true,
  });
}
