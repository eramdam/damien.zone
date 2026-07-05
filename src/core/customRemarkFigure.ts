import type { Element } from "hast";
import { h } from "hastscript";
import type { RehypeRewriteOptions } from "rehype-rewrite";

const isDev = import.meta.env?.DEV ?? process.env.NODE_ENV !== "production";

type RewriteParams = Parameters<RehypeRewriteOptions["rewrite"]>;
export const rewriteWithFigures = function (
  node: RewriteParams[0],
  assetsPrefix?: string,
): ReturnType<RehypeRewriteOptions["rewrite"]> {
  if (node.type !== "element") {
    return;
  }
  if (node.tagName !== "p") {
    return;
  }

  const onlyHasImage = node.children.every((child) => {
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
    .map((i) => makeFigureFromImage(i, assetsPrefix));

  node.children = images;
};

function makeFigureFromImage(img: Element, assetsPrefix?: string): Element {
  const props = img.properties;
  const title = props.title;
  const alt = props.alt || title;
  const src = String(props.src).startsWith("/")
    ? `${assetsPrefix}${props.src}`
    : props.src;

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
    ...(alt ? [h("figcaption", String(alt))] : []),
  ]);
}
