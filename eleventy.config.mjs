import eleventyAutoCacheBuster from "eleventy-auto-cache-buster";
import { EleventyHtmlBasePlugin } from "@11ty/eleventy";
import siteData from "./_data/site.mjs";
import buttons from "./_data/buttons.json" with { type: "json" };

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyAutoCacheBuster);
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("public");
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

  eleventyConfig.addShortcode("htmlButtons", function () {
    return Array.from(buttons)
      .map((button) => {
        return `<img class="pixel" decoding="async" loading="lazy" src="${button.src.replace("./", "/")}" title="${button.name}" alt="${button.name}" />`;
      })
      .join("");
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
