import { feedPlugin, dateToRfc3339 } from "@11ty/eleventy-plugin-rss";
import fs from "node:fs";
import siteData from "../src/_data/site.mjs";

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export function feedsPlugin(eleventyConfig) {
  eleventyConfig.addFilter("dateToRfc3339", dateToRfc3339);

  const rssOptions = {
    collection: {
      name: "blog",
      limit: 10,
    },
    metadata: {
      language: "en",
      title: siteData.name,
      subtitle:
        "french software engineer living and working in the Bay Area on web stuff",
      base: siteData.url,
      author: {
        name: "Damien Erambert",
        email: "damien@erambert.me", // Optional
      },
    },
  };
  eleventyConfig.addPlugin(feedPlugin, {
    type: "atom",
    outputPath: "/feed.xml",
    ...rssOptions,
  });
  eleventyConfig.on("eleventy.after", async ({ dir, results }) => {
    const atomItem = results.find((f) => f.outputPath.includes("/feed.xml"));
    if (atomItem) {
      await fs.promises.writeFile(
        atomItem.outputPath.replace(".xml", ""),
        atomItem.content,
      );
    }
  });
}
