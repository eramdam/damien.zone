import type { APIContext } from "astro";
import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { render } from "astro:content";
import he from "he";
import { dateToRfc3339 } from "../helpers/componentHelpers";
import { getBlogPosts } from "../helpers/postsHelpers";
import { sanitizeHtmlForRSS } from "../helpers/rssHelpers";
import { SITE } from "../helpers/siteConstants";
import { sortPosts } from "../helpers/siteHelpers";

export async function GET(context: APIContext) {
  const items = await getBlogPosts();
  const sortedPosts = sortPosts(items);
  const newestPostDate = dateToRfc3339(sortedPosts[0].data.date);

  const container = await AstroContainer.create();

  const postEntries = await Promise.all(
    sortedPosts.map(async (post) => {
      const postUrl = post.data.linkedUrl
        ? new URL(post.data.linkedUrl)
        : new URL(post.data.slug, context.url);

      const { Content, remarkPluginFrontmatter } = await render(post);
      const rawHtml = await container.renderToString(Content);

      const updated = remarkPluginFrontmatter.updated ?? post.data.updated;

      return `
        <entry>
          <title>${he.encode(post.data.title)}</title>
          <link href="${postUrl}" rel="alternate"/>
          <id>${postUrl}</id>
          <published>${dateToRfc3339(post.data.date)}</published>
          <updated>${updated ? dateToRfc3339(new Date(updated)) : ""}</updated>
          <author>
            <name>${SITE.author}</name>
          </author>
          <content type="html">
            ${he.encode(sanitizeHtmlForRSS(rawHtml, context))}
            ${he.encode(`<a href="${postUrl}">Permalink / Comments</a>`)}
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
