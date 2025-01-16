import rssPlugin from "@11ty/eleventy-plugin-rss";
import { TZDate } from "@date-fns/tz";
import { format as formatBase } from "date-fns";
import he from "he";
import assert from "node:assert";
import buttons from "../src/_data/buttons.json" with { type: "json" };
import siteData from "../src/_data/site.mjs";

const timezone = "America/Los_Angeles";

/**
 * Returns the formatted date string in the given format.
 *
 * @see https://date-fns.org/docs/format
 */
function format(date, pattern) {
  assert(pattern, "needs a date pattern");
  return formatBase(new TZDate(date, timezone), pattern);
}

/** Returns a copy of {@link array} with {@link items} removed. */
function omit(array, ...items) {
  return (array ?? []).filter((item) => !items.includes(item));
}

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export function helpersPlugin(eleventyConfig) {
  eleventyConfig.addFilter("omit", omit);
  eleventyConfig.addFilter("format", format);
  eleventyConfig.addFilter("take", function (array, count) {
    return array.slice(0, count);
  });
  eleventyConfig.addFilter("dateToRfc3339", rssPlugin.dateToRfc3339);

  eleventyConfig.addShortcode("htmlTitle", function () {
    const context = this.ctx?.environments ?? this.ctx ?? {};
    const title = context.title;
    const baseTitle = siteData.name;

    if (!title && context.page.url !== "/") {
      throw new Error(`Missing title for ${context.page.inputPath}`);
    }

    return he.encode([title, baseTitle].filter((x) => x).join(" | "));
  });

  eleventyConfig.addShortcode("openGraphImages", function () {
    const context = this.ctx?.environments ?? this.ctx ?? {};
    const currentImage = context.image || "/assets/open_graph.webp";

    let markup = `
      <meta
        property="og:image"
        content="${currentImage}"
      />
    `;

    return markup.trim();
  });

  eleventyConfig.addShortcode("bodyClass", function () {
    const context = this.ctx?.environments ?? this.ctx ?? {};
    const isHome = this.page.url === "/";
    const isPost = Array.from(context.tags || []).some(
      (t) => t === "blog" || t === "drafts",
    );

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

  // https://github.com/11ty/eleventy/issues/927#issuecomment-627703544
  eleventyConfig.addCollection("tagList", (collections) => {
    const tags = collections
      .getAll()
      .reduce((tags, item) => tags.concat(item.data.tags), [])
      .filter((tag) => !!tag)
      .filter(
        (tag) =>
          tag !== "blog" &&
          tag !== "all" &&
          tag !== "drafts" &&
          tag !== "tagList",
      )
      .sort();

    return Array.from(new Set(tags));
  });
}
