import type { Doctype, ElementContent, Root } from "hast";
import { visit } from "unist-util-visit";
import type { Directives } from "mdast-util-directive";
import type { VFile } from "vfile";
import fs from "node:fs";
import path from "node:path";

export function customVideoDirective() {
  return function (tree: Root, file: VFile) {
    visit(tree, function (node: Root | Doctype | ElementContent | Directives) {
      if (
        node.type === "containerDirective" ||
        node.type === "leafDirective" ||
        node.type === "textDirective"
      ) {
        if (node.name !== "video") {
          return;
        }

        const { attributes } = node;
        const { src, poster: posterAttribute } = attributes;

        if (node.type === "textDirective") {
          if (node.type === "textDirective") {
            file.fail(
              "Unexpected `:video` text directive, use two colons for a leaf directive",
              node,
            );
          }
        }

        if (!src) {
          file.fail("missing `src` on `video` directive", node);
        }

        const data = node.data || (node.data = {});
        const srcParsed = path.parse(src);
        const poster =
          posterAttribute ??
          path.format({
            ...srcParsed,
            base: `${srcParsed.name}-poster.webp`,
            name: `${srcParsed.name}-poster`,
            ext: ".webp",
          });
        const caption =
          node.children?.[0].type === "text" && node.children[0].value;

        data.hName = "figure";
        data.hProperties = {
          "data-type": "video",
        };
        data.hChildren = [
          {
            type: "element",
            tagName: "video",
            children: [],
            properties: {
              src,
              poster,
              playsinline: true,
              controls: true,
              preload: "none",
            },
          },
          caption && {
            type: "element",
            tagName: "figcaption",
            children: [
              {
                type: "text",
                value: caption,
              },
            ],
            properties: {},
          },
        ];
      }
    });
  };
}
