import { htmlToText, truncateText } from "../helpers/types.mjs";

export const layout = "post.liquid";

export const tags = ["blog"];
export const date = "git created";

export function description() {
  return truncateText(htmlToText(this.content));
}

export function permalink(data) {
  return `/${data.slug ?? data.page.fileSlug}/index.html`;
}
