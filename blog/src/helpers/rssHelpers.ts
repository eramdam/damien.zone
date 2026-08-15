import type { APIContext } from "astro";
import sanitizeHtml, { type Attributes } from "sanitize-html";

export function sanitizeHtmlForRSS(htmlContent: string, context: APIContext) {
  return sanitizeHtml(htmlContent, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat([
      "img",
      "picture",
      "video",
      "source",
      "figure",
      "figcaption",
    ]),
    allowedAttributes: false,

    transformTags: {
      video: function (tagName, attribs) {
        return {
          tagName,
          attribs: remplaceUrlInSrcAttribute(
            ["src", "poster"],
            attribs,
            context,
          ),
        };
      },
      source: function (tagName, attribs) {
        return {
          tagName,
          attribs: remplaceUrlInSrcAttribute(
            ["src", "srcset"],
            attribs,
            context,
          ),
        };
      },
      img: function (tagName, attribs) {
        return {
          tagName,
          attribs: remplaceUrlInSrcAttribute(
            ["src", "srcset"],
            attribs,
            context,
          ),
        };
      },
    },
  });
}

function remplaceUrlInSrcAttribute(
  attributesToCheck: string[],
  attributes: Attributes,
  context: APIContext,
) {
  for (const srcAttribute of attributesToCheck) {
    if (!attributes[srcAttribute]) {
      continue;
    }

    if (attributes[srcAttribute].startsWith("/")) {
      attributes[srcAttribute] = `${context.site?.toString()}${attributes[
        srcAttribute
      ].replace("/", "")}`;
    }
  }

  return attributes;
}
