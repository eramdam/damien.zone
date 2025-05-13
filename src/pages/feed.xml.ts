import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { sanitizeHtmlForRSS } from "../helpers/rssHelpers";
import { SITE } from "../helpers/siteConstants";
import { sortPosts } from "../helpers/siteHelpers";

export async function GET(context: APIContext) {
  const items = Object.values(
    import.meta.glob("../blog/**/*.md", { eager: true }),
  );

  return rss({
    title: SITE.name,
    site: context.site,
    items: await Promise.all(
      sortPosts(items).map(async (i: any) => {
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
    ),
    description: "",
  });
}
