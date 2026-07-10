import { TZDate } from "@date-fns/tz";
import assert from "node:assert";
import { format } from "date-fns";

const timezone = "America/Los_Angeles";
/**
 * Returns the formatted date string in the given format.
 *
 * @see https://date-fns.org/docs/format
 */
export function formatDate(date: Date, pattern: string) {
  assert(pattern, "needs a date pattern");
  return format(new TZDate(date, timezone), pattern);
}

export function dateToRfc3339(dateObj: Date) {
  let s = dateObj.toISOString();

  // remove milliseconds
  let split = s.split(".");
  split.pop();

  return split.join("") + "Z";
}

export function sortPosts<T extends { data: { date: Date } }>(posts: T[]): T[] {
  return posts.toSorted((a, b) => {
    return b.data.date.valueOf() - a.data.date.valueOf();
  });
}
