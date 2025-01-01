import { EleventyHtmlBasePlugin } from "@11ty/eleventy";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import eleventyAutoCacheBuster from "eleventy-auto-cache-buster";
import markdownItFootnote from "markdown-it-footnote";
import markdownItNamedHeadings from "markdown-it-named-headers";
import markdownItAttrs from "markdown-it-attrs";
import { dateNowMarkdown } from "./11ty/dateNowMarkdown.mjs";
import { feedsPlugin } from "./11ty/feeds.mjs";
import { helpersPlugin } from "./11ty/helpers.mjs";

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPlugin(helpersPlugin);
  eleventyConfig.addPlugin(feedsPlugin);
  eleventyConfig.addPlugin(dateNowMarkdown);
  eleventyConfig.setQuietMode(true);
  if (process.env.ELEVENTY_RUN_MODE === "build") {
    eleventyConfig.addPlugin(eleventyAutoCacheBuster, {
      globstring: "/{assets,img/blog,img/projects}/**/*",
      extensions: ["js", "png", "jpg", "jpeg", "gif", "mp4", "ico", "webp"],
    });
  }

  eleventyConfig.amendLibrary("md", (mdLib) =>
    mdLib
      .use(markdownItAttrs)
      .use(markdownItFootnote)
      .use(markdownItNamedHeadings),
  );

  // Styles, scripts and media used by the general layout
  eleventyConfig.addPassthroughCopy("src/assets");
  // Buttons, stuff people might want to grab/reference
  eleventyConfig.addPassthroughCopy("src/public");
  // Images used inside articles/pages
  eleventyConfig.addPassthroughCopy("src/img");

  // For stuff like favicon files.
  eleventyConfig.addPassthroughCopy({ "src/static": "/" });
  eleventyConfig.setLiquidOptions({
    // https://liquidjs.com/tutorials/options.html#jsTruthy
    jsTruthy: true,
    // https://liquidjs.com/tutorials/options.html#Strict
    strictVariables: false,
    lenientIf: true,
    strictFilters: true,
  });

  eleventyConfig.setInputDirectory("src");
  eleventyConfig.setOutputDirectory("_site");
}
