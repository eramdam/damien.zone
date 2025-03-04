import { EleventyHtmlBasePlugin } from "@11ty/eleventy";
// import dirOutputPlugin from "@11ty/eleventy-plugin-directory-output";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import eleventyAutoCacheBuster from "eleventy-auto-cache-buster";
import markdownItAttrs from "markdown-it-attrs";
import markdownItFootnote from "markdown-it-footnote";
import implicitFigures from "markdown-it-image-figures";
import markdownItNamedHeadings from "markdown-it-named-headers";
import { feedsPlugin } from "./11ty/feeds.mjs";
import { helpersPlugin } from "./11ty/helpers.mjs";
import embedMastodon from "eleventy-plugin-embed-mastodon";

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPlugin(helpersPlugin);
  eleventyConfig.addPlugin(feedsPlugin);
  eleventyConfig.addPlugin(embedMastodon, {
    server: "social.erambert.me",
  });

  eleventyConfig.setQuietMode(false);
  // eleventyConfig.addPlugin(dirOutputPlugin);
  eleventyConfig.addPlugin(eleventyAutoCacheBuster, {
    globstring: "/{assets,img/blog,img/projects}/**/*",
    hashAlgorithm: "sha256",
    extensions: ["js", "png", "jpg", "jpeg", "gif", "mp4", "ico", "webp"],
  });
  eleventyConfig.setLayoutsDirectory("_layouts");
  eleventyConfig.addPreprocessor("drafts", "*", (data, content) => {
    if (data.hidden) {
      return false;
    }
  });

  eleventyConfig.amendLibrary("md", (mdLib) =>
    mdLib
      .use(markdownItAttrs)
      .use(markdownItFootnote)
      .use(markdownItNamedHeadings)
      .use(implicitFigures, {
        figcaption: "title",
        link: true,
        dataType: true,
        lazy: true,
        async: true,
      }),
  );

  // Styles, scripts and media used by the general layout
  eleventyConfig.addPassthroughCopy("src/assets");
  // Buttons, stuff people might want to grab/reference
  eleventyConfig.addPassthroughCopy("src/public");
  // Images used inside articles/pages
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/_test/*.{png,jpg,jpeg,webp,svg}");

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

  eleventyConfig.setServerPassthroughCopyBehavior("passthrough");
  eleventyConfig.setInputDirectory("src");
  eleventyConfig.setOutputDirectory("_site");
}
