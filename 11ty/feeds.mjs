import rssPlugin from "@11ty/eleventy-plugin-rss";
import he from "he";

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export function feedsPlugin(eleventyConfig) {
  eleventyConfig.addLiquidFilter("dateToRfc3339", rssPlugin.dateToRfc3339);
  eleventyConfig.addLiquidFilter("absoluteUrl", rssPlugin.absoluteUrl);
  eleventyConfig.addLiquidFilter(
    "getNewestCollectionItemDate",
    rssPlugin.getNewestCollectionItemDate,
  );
  eleventyConfig.addLiquidFilter("dateToRfc3339", rssPlugin.dateToRfc3339);
  eleventyConfig.addLiquidFilter(
    "htmlToAbsoluteUrls",
    rssPlugin.convertHtmlToAbsoluteUrls,
  );
  eleventyConfig.addShortcode("feedPostFooter", (postUrl) => {
    return he.encode(`<a href="${postUrl}">Comments →</a>`);
  });
}
