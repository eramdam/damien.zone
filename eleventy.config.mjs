import eleventyAutoCacheBuster from "eleventy-auto-cache-buster";
import { EleventyHtmlBasePlugin } from "@11ty/eleventy";
import siteData from "./_data/site.mjs";

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyAutoCacheBuster, {
    enableLogging: process.env.ELEVENTY_RUN_MODE === "build",
  });
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  eleventyConfig.addPassthroughCopy("assets/*.css");
  eleventyConfig.addPassthroughCopy("assets/*.js");
  eleventyConfig.addGlobalData("layout", "base.html");
  eleventyConfig.addGlobalData("title", "");
  eleventyConfig.addLayoutAlias("base", "base.html");
  eleventyConfig.setLiquidOptions({
    // https://liquidjs.com/tutorials/options.html#jsTruthy
    jsTruthy: true,
    // https://liquidjs.com/tutorials/options.html#Strict
    strictVariables: true,
    strictFilters: true,
  });

  eleventyConfig.addShortcode("htmlTitle", function () {
    const context = this.ctx?.environments ?? this.ctx ?? {};
    const title = context.title;
    const baseTitle = siteData.name;

    if (!title && context.page.url !== "/") {
      throw new Error(`Missing title for ${context.page.inputPath}`);
    }

    return [title, baseTitle].filter((x) => x).join(" | ");
  });

  eleventyConfig.addShortcode("bodyClass", function () {
    const context = this.ctx?.environments ?? this.ctx ?? {};
    const isHome = this.page.url === "/";
    const final = [
      // TODO: handle posts when they're there.
      isHome ? "home" : "page",
      context.class_name,
    ]
      .filter(Boolean)
      .join(" ");

    return final;
  });
}
