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
