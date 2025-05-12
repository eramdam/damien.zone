import { TZDate } from "@date-fns/tz";
const timezone = "America/Los_Angeles";
import assert from "node:assert";
import { format } from "date-fns";

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
