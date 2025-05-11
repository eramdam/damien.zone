import type { AstroGlobal } from "astro";
import { SITE } from "./siteConstants";

export function getCanonicalUrl(astro: AstroGlobal) {
  return new URL(astro.url.pathname, astro.site);
}

export function getTitleFromProps(astro: AstroGlobal) {
  const baseTitle = SITE.name;
  const titleFromProps =
    astro.props.content?.title ?? astro.props.frontmatter?.title;

  if (!titleFromProps && astro.url.pathname === "/") {
    return baseTitle;
  }

  return [titleFromProps, baseTitle].filter(Boolean).join(" | ");
}
