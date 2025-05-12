import type { Root, Element } from "hast";
import { h } from "hastscript";
import { visit } from "unist-util-visit";

const isDev = import.meta.env?.DEV ?? process.env.NODE_ENV !== "production";

export function rehypeFigures() {
  return function (tree: Root) {
    visit(tree, "element", (node, index) => {
      if (node.tagName !== "p") {
        return;
      }

      // console.log(node.children);
      const onlyHasImage = node.children.every((child, index) => {
        if (child.type === "element") {
          return child.tagName === "img";
        }

        return child.type === "text" && child.value.trim().length === 0;
      });

      if (!onlyHasImage) {
        return;
      }

      const images = node.children
        .filter((e): e is Element => {
          return e.type === "element" && e.tagName === "img";
        })
        .map(makeFigureFromImage);

      node.children = images;
    });
  };
}

function makeFigureFromImage(img: Element): Element {
  const props = img.properties;
  console.log(props);
  const title = props.title;
  const alt = props.alt ?? title;
  const src = props.src;

  return h("figure", { "data-type": "image" }, [
    h("a", { href: src }, [
      h("img", {
        src,
        alt,
        loading: isDev ? "eager" : "lazy",
        decoding: "async",
        width: "auto",
        height: "auto",
      }),
    ]),
    // Only add figcaption if there's alt text
    ...(alt ? [h("figcaption", { alt })] : []),
  ]);
}
