import escapeHtml from "escape-html";
import sanitizeHtml from "sanitize-html";
import { getLastUpdatedTimestamp } from "../../helpers/gitDate.mjs";
import { htmlToText, truncateText } from "../helpers/types.mjs";

export const layout = "post.liquid";

export const tags = ["blog"];
export function updated() {
  return getLastUpdatedTimestamp(this.page);
}

export function description() {
  return truncateText(htmlToText(this.content));
}

export function permalink(data) {
  return `/${data.slug ?? removeDateFromSlug(data.page.fileSlug)}/index.html`;
}

function removeDateFromSlug(slug) {
  return String(slug).replace(/^(\d{2}-\d{2})-/, "");
}

// Based off https://github.com/nex3/nex3.github.io/blob/b9e6eefeaf6bddf17c092019bdc852aa588d9eea/source/blog/blog.11tydata.js
export async function webMentions() {
  const { url } = this.page;
  if (!url) {
    return [];
  }

  const perPage = 50;
  const endpoint =
    `https://webmention.io/api/mentions.jf2` +
    `?wm-property[]=in-reply-to` +
    `&wm-property[]=repost-of` +
    `&wm-property[]=mention-of` +
    `&per-page=${perPage}` +
    `&sort-dir=up` +
    `&target=https://damien.zone${escape(url)}`;
  const allMentions = [];

  for (let page = 0; ; page++) {
    const response = await fetch(`${endpoint}&page=${page}`);
    if (!response.ok) {
      console.error(
        `${response.status} ${response.statusText} fetching ${endpoint}`,
      );
      break;
    }
    const { children } = await response.json();
    allMentions.push(
      ...children.filter(
        (mention) =>
          // Don't show self-mentions
          !mention.url.startsWith("https://damien.zone/") &&
          !mention.url.includes("https://social.erambert.me") &&
          !mention.url.includes("https://bsky.app/profile/eramdam.me") &&
          // Don't show transparent reposts, but do show ones that add content.
          (mention["wm-property"] !== "repost-of" || "content" in mention),
      ),
    );
    if (children.length < perPage) break;
  }

  for (const mention of allMentions) {
    if (typeof mention.author === "string") {
      mention.author = { type: "card", name: mention.author };
    }

    if (mention.author.name === "") delete mention.author;
    if (mention.author) {
      if (mention.author.url === "") delete mention.author.url;
      mention.author.photo ??= mention.author.logo;
      if (typeof mention.author.photo === "string") {
        if (mention.author.photo === "") {
          delete mention.author.photo;
        } else {
          mention.author.photo = { value: mention.author.photo };
        }
      }
    }

    if (mention.content?.html) {
      mention.content.html = sanitizeHtml(mention.content.html, {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
        allowedClasses: {
          "*": [/^(p|u|dt|h|e)-/],
        },
        // Remove internal links
        transformTags: {
          a: (tagName, attribs) =>
            attribs.href?.startsWith("#")
              ? { tagName, attribs: {} }
              : { tagName, attribs },
        },
        // Filter out footnote returns. transformTags runs before
        // exclusiveFilter so these won't have hrefs.
        exclusiveFilter: (frame) =>
          frame.tag === "a" && !frame.attribs.href && frame.text === "↩︎",
      });
    } else if (mention.content?.text) {
      mention.content.html = escapeHtml(mention.content.text);
    }

    if (
      mention.content?.html &&
      (mention["wm-property"] === "repost-of" ||
        mention["wm-property"] === "mention-of")
    ) {
      mention.content.html = truncateHTML(mention.content.html, 72);
    }

    for (const prop of ["wm-received", "published", "updated"]) {
      if (mention[prop]) {
        mention[prop] = new Date(Date.parse(mention[prop]));
      }
    }
  }

  allMentions.sort((mention1, mention2) => {
    const date1 = mention1.published ?? mention1["wm-received"];
    const date2 = mention2.published ?? mention2["wm-received"];
    if (date1 && date2) {
      return date1 - date2;
    }
    if (date1) return -1;
    if (date2) return 1;
    return 0;
  });

  return allMentions;
}
