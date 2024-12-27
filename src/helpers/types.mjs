import { compile as initHtmlToText } from "html-to-text";

export const htmlToText = initHtmlToText({
  wordwrap: false,
  selectors: [
    { selector: "img", format: "skip" },
    { selector: "picture", format: "skip" },
    { selector: "video", format: "skip" },
    { selector: "a", options: { ignoreHref: true } },
    { selector: "figure", format: "skip" },
    { selector: "details", format: "skip" },
  ],
});

/** Truncates text without breaking words. */
export function truncateText(text, words = 150) {
  const regexp = /[ \n—]+/g;
  let match;
  for (let i = 0; i < words; i++) {
    match = regexp.exec(text);
    if (!match) return text;
  }

  return text.substring(0, match.index) + "…";
}
