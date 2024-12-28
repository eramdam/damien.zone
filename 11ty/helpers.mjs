import rssPlugin from "@11ty/eleventy-plugin-rss";
import { TZDate } from "@date-fns/tz";
import { format as formatBase } from "date-fns";
import he from "he";
import assert from "node:assert";
import path from "node:path";
import { createContentHash } from "../helpers/files.mjs";
import buttons from "../src/_data/buttons.json" with { type: "json" };
import contentHashes from "../src/_data/contentHashes.mjs";
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

/** @param {import("@11ty/eleventy").UserConfig} config */
export function helpersPlugin(config) {
  config.addLiquidFilter("omit", omit);
  config.addLiquidFilter("format", format);
  config.addFilter("take", function (array, count) {
    return array.slice(0, count);
  });
  config.addFilter("dateToRfc3339", rssPlugin.dateToRfc3339);

  config.addShortcode("htmlTitle", function () {
    const context = this.ctx?.environments ?? this.ctx ?? {};
    const title = context.title;
    const baseTitle = siteData.name;

    if (!title && context.page.url !== "/") {
      throw new Error(`Missing title for ${context.page.inputPath}`);
    }

    return he.encode([title, baseTitle].filter((x) => x).join(" | "));
  });

  config.addAsyncShortcode("openGraphImages", function () {
    const context = this.ctx?.environments ?? this.ctx ?? {};
    const hasCustomImage = !!context.image;
    const currentImage = context.image ?? "/assets/open_graph.webp";
    const hash = context.image
      ? context.image.startsWith("http")
        ? Date.now().toString(16)
        : createContentHash(path.join("src/", context.image))
      : contentHashes.openGraph;

    let markup = `
      <meta
        property="og:image"
        content="${currentImage}?v=${hash}"
      />
    `;

    if (hasCustomImage) {
      return markup.trim();
    }

    return `${markup}
      <meta property="og:image:width" content="64">
      <meta property="og:image:height" content="64">
    `.trim();
  });

  config.addShortcode("bodyClass", function () {
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

  config.addShortcode("htmlButtons", function () {
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
}
