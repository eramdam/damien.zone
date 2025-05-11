import { SITE } from "./siteConstants";

export function getTitleFromProps(props: Record<string, any>) {
  const baseTitle = SITE.name;
  const titleFromProps = props.content?.title ?? props.frontmatter?.title;

  if (!titleFromProps && props.url === "") {
    return baseTitle;
  }

  return [titleFromProps, baseTitle].filter(Boolean).join(" | ");
}
