import rss, { pagesGlobToRssItems } from "@astrojs/rss";
import { SITE } from "../helpers/siteConstants";
import type { APIContext } from "astro";
import { sortPosts } from "../helpers/siteHelpers";
import { sanitizeHtmlForRSS } from "../helpers/rssHelpers";

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
