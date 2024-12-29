import { EleventyHtmlBasePlugin } from "@11ty/eleventy";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import { helpersPlugin } from "./11ty/helpers.mjs";
import markdownItFootnote from "markdown-it-footnote";

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPlugin(helpersPlugin);
  eleventyConfig.setQuietMode(true);

  eleventyConfig.amendLibrary("md", (mdLib) => mdLib.use(markdownItFootnote));

  // Styles, scripts and media used by the general layout
  eleventyConfig.addPassthroughCopy("src/assets");
  // Buttons, stuff people might want to grab/reference
  eleventyConfig.addPassthroughCopy("src/public");
  // Images used inside articles/pages
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.setLiquidOptions({
    // https://liquidjs.com/tutorials/options.html#jsTruthy
    jsTruthy: true,
    // https://liquidjs.com/tutorials/options.html#Strict
    strictVariables: true,
    strictFilters: true,
  });

  eleventyConfig.setInputDirectory("src");
  eleventyConfig.setOutputDirectory("_site");
  eleventyConfig.setServerOptions({
    port: 3000,
  });
}
