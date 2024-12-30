import rssPlugin from "@11ty/eleventy-plugin-rss";
import he from "he";

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export function feedsPlugin(eleventyConfig) {
  eleventyConfig.addFilter("dateToRfc3339", rssPlugin.dateToRfc3339);
  eleventyConfig.addFilter("absoluteUrl", rssPlugin.absoluteUrl);
  eleventyConfig.addFilter(
    "getNewestCollectionItemDate",
    rssPlugin.getNewestCollectionItemDate,
  );
  eleventyConfig.addFilter("dateToRfc3339", rssPlugin.dateToRfc3339);
  eleventyConfig.addFilter(
    "htmlToAbsoluteUrls",
    rssPlugin.convertHtmlToAbsoluteUrls,
  );
  eleventyConfig.addShortcode("feedPostFooter", (postUrl) => {
    return he.encode(`<a href="${postUrl}">Comments →</a>`);
  });
}
