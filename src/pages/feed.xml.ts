import type { APIContext } from "astro";
import he from "he";
import { dateToRfc3339 } from "../helpers/componentHelpers";
import { sanitizeHtmlForRSS } from "../helpers/rssHelpers";
import { SITE } from "../helpers/siteConstants";
import { sortPosts } from "../helpers/siteHelpers";

export async function GET(context: APIContext) {
  const items = Object.values(
    import.meta.glob("../blog/**/*.md", { eager: true }),
  );
  const sortedPosts = sortPosts(items);
  const newestPostDate = dateToRfc3339(
    new Date(sortedPosts[0].frontmatter.date),
  );

  const formattedItems = await Promise.all(
    sortedPosts.map(async (i: any) => {
      return {
        author: SITE.author,
        categories: i.frontmatter.tags ?? [],
        commentsUrl: new URL(i.frontmatter.slug, context.site).toString(),
        pubDate: new Date(i.frontmatter.date),
        title: i.frontmatter.title,
        link: new URL(i.frontmatter.slug, context.site).toString(),
        content: sanitizeHtmlForRSS(await i.compiledContent(), context),
      };
    }),
  );

  const postEntries = await Promise.all(
    sortedPosts.map(async (post) => {
      return `
        <entry>
          <title>${he.encode(post.frontmatter.title)}</title>
          <link href="${new URL(post.frontmatter.slug, context.url)}" rel="alternate"/>
          <id>${new URL(post.frontmatter.slug, context.url)}</id>
          <published>${dateToRfc3339(new Date(post.frontmatter.date))}</published>
          <updated>${post.frontmatter.updated ? dateToRfc3339(new Date(post.frontmatter.updated)) : ""}</updated>
          <author>
            <name>${SITE.author}</name>
          </author>
          <content type="html">
            ${he.encode(sanitizeHtmlForRSS(await post.compiledContent(), context))}
            {%- feedPostFooter absolutePostUrl -%}
          </content>
        </entry>
        `;
    }),
  );

  return new Response(
    `
  <?xml version="1.0" encoding="utf-8"?>
  <feed xmlns="http://www.w3.org/2005/Atom">
    <title>${he.encode(SITE.name)}</title>
    <id>${new URL(context.url).toString()}</id>
    <link href="${new URL(context.url).toString()}" rel="self"/>
    <link href="${new URL(context.url).toString()}" rel="alternate" type="text/html" />
    <icon>${new URL("/favicon-bg.png", context.url)}</icon>
    <updated>${newestPostDate}</updated>
    ${postEntries.join("")}
  </feed>
  `.trim(),
    {
      headers: {
        "Content-Type": "application/xml",
      },
    },
  );
}
