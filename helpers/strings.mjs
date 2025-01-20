import * as crypto from "node:crypto";
import truncate from "truncate-html";
import * as cheerio from "cheerio";

const linkPlaceholder = crypto.randomBytes(20).toString("hex");

/**
 * Truncates an HTML string without breaking tags. If a link URL is passed, add
 * it as a "read more" after the truncation.
 *
 * @see https://github.com/oe/truncate-html
 */
export function truncateHTML(html, words, ...named) {
  const options = Object.fromEntries(named);
  const $ = cheerio.load(html);
  const firstHr = $("hr:not([class])").first();

  if (firstHr.length !== 0) {
    firstHr.nextAll().remove();
    $(`<a href="${options.link}" class="read-more">Read more</a>`).insertAfter(
      "hr:first-of-type",
    );
    firstHr.remove();
  }

  const manuallyTruncated = $.html();

  const automaticallyTruncated = truncate(html, words, {
    byWords: true,
    ellipsis: options.link ? `${linkPlaceholder}` : "…",
    keepWhitespaces: true,
    reserveLastWord: true,
    customNodeStrategy,
  }).replace(
    linkPlaceholder,
    `…<a href="${options.link}" class="read-more">Read more</a>`,
  );

  if (manuallyTruncated.length < automaticallyTruncated.length) {
    return manuallyTruncated;
  }

  return automaticallyTruncated;
}

// argument node is a cheerio instance
const customNodeStrategy = (node) => {
  // keep details and treat it as nothing inside
  if (node.is("details") || node.is("blockquote") || node.is("section")) {
    return "keep";
  }
};
