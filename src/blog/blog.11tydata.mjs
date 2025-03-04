import Fetch from "@11ty/eleventy-fetch";
import escapeHtml from "escape-html";
import sanitizeHtml from "sanitize-html";
import { getLastUpdatedTimestamp } from "../../helpers/gitDate.mjs";
import { htmlToText, truncateText } from "../helpers/types.mjs";
import truncateHTML from "truncate-html";

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
    try {
      let response = await Fetch(`${endpoint}&page=${page}`, {
        duration: "1d", // save for 1 day
        verbose: true,
      });
      response = JSON.parse(response.toString());
      const { children } = response;
      allMentions.push(
        ...children.filter(
          (mention) =>
            // Don't show self-mentions
            !mention.url.startsWith("https://damien.zone/") &&
            !mention.url.includes("https://social.erambert.me") &&
            !mention.url.includes("https://bsky.app/profile/eramdam.me") &&
            !mention.url.includes(
              "https://bsky.app/profile/did:plc:ywh4n7ihypdnwb4n2kzlzrht",
            ) &&
            // Don't show transparent reposts, but do show ones that add content.
            (mention["wm-property"] !== "repost-of" || "content" in mention),
        ),
      );
      if (children.length < perPage) break;
    } catch (e) {
      console.error(e, `fetching ${endpoint}`);
      break;
    }
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

    // It seems Mastodon mentions have their emoji replaced by "????" because of Bridgy
    // Therefore, we fetch the Mastodon JSON object to get the right HTML text
    if (
      mention["wm-source"] &&
      String(mention["wm-source"]).startsWith(
        "https://brid.gy/comment/mastodon/",
      ) &&
      String(mention.content.html).includes(`????`)
    ) {
      try {
        const mastodonResponse = await fetch(mention.url, {
          headers: {
            "Content-Type": "application/ld+json",
            Accept: "application/ld+json",
          },
        });

        const mastodonJson = await mastodonResponse.json();
        mention.content.html = mastodonJson.content;
      } catch (e) {}
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

  // if (allMentions.length) {
  //   console.log("Mentions for ", url);
  // }

  return allMentions;
}
