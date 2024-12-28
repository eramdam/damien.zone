import lightningCSS from "@11tyrocks/eleventy-plugin-lightningcss";
import { EleventyHtmlBasePlugin } from "@11ty/eleventy";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import eleventyAutoCacheBuster from "eleventy-auto-cache-buster";
import buttons from "./src/_data/buttons.json" with { type: "json" };
import siteData from "./src/_data/site.mjs";
import { DateTime } from "luxon";
import he from "he";

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default function (eleventyConfig) {
  eleventyConfig.addPlugin(lightningCSS, {
    nesting: true,
    customMedia: false,
    minify: true,
    sourceMap: process.env.ELEVENTY_RUN_MODE !== "build",
  });
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(eleventyAutoCacheBuster, {
    enableLogging: false,
    globstring: "assets/**/*",
    extensions: [
      "css",
      "js",
      "png",
      "jpg",
      "jpeg",
      "gif",
      "mp4",
      "ico",
      "webp",
      "avif",
    ],
  });
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  // Styles, scripts and media used by the general layout
  eleventyConfig.addPassthroughCopy("src/assets");
  // Buttons, stuff people might want to grab/reference
  eleventyConfig.addPassthroughCopy("src/public");
  // Images used inside articles/pages
  eleventyConfig.addPassthroughCopy("src/img");
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

    return he.encode([title, baseTitle].filter((x) => x).join(" | "));
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
    const isPost = Array.from(context.tags || []).includes("blog");

    const final = [
      isHome && "home",
      isPost && "post",
      !isHome && !isPost && "page",
      context.class_name,
    ]
      .filter(Boolean)
      .join(" ");

    return final;
  });

  eleventyConfig.addFilter("postDate", function (date) {
    return DateTime.fromJSDate(date).toUTC().toFormat("d MMM, yyyy");
  });

  eleventyConfig.setInputDirectory("src");
  eleventyConfig.setOutputDirectory("_site");
  eleventyConfig.setServerOptions({
    port: 3000,
  });
}
