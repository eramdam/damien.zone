import { EleventyHtmlBasePlugin } from "@11ty/eleventy";
import eleventyAutoCacheBuster from "eleventy-auto-cache-buster";
import buttons from "./src/_data/buttons.json" with { type: "json" };
import siteData from "./src/_data/site.mjs";

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyAutoCacheBuster);
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  // Styles, scripts and media used by the general layout
  eleventyConfig.addPassthroughCopy("src/assets");
  // Buttons, stuff people might want to grab/reference
  eleventyConfig.addPassthroughCopy("src/public");
  // Images used inside articles/pages
  eleventyConfig.addPassthroughCopy("src/img");

  eleventyConfig.addLayoutAlias("base", "base.html");
  eleventyConfig.addGlobalData("layout", "base.html");

  eleventyConfig.addGlobalData("title", "");
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
        const img = `<img class="pixel" decoding="async" loading="lazy" src="${button.src.replace("./", "/")}" title="${button.name}" alt="${button.name}" />`;

        if (button.link) {
          return `<a href="${button.link}" target="_blank" rel="noopener" title="${button.name}">${img}</a>`;
        }

        return img;
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

  eleventyConfig.setInputDirectory("src");
  eleventyConfig.setOutputDirectory("_site");
}
