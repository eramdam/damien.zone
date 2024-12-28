import { htmlToText, truncateText } from "../helpers/types.mjs";

export const layout = "post.liquid";

export const tags = ["blog"];

export function description() {
  return truncateText(htmlToText(this.content));
}

export function permalink(data) {
  return `/${data.page.fileSlug}/index.html`;
}
