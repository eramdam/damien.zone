import Image from "@11ty/eleventy-img";
import path from "node:path";

const fullWidths = {
  desktop: 850,
  tablet: 720,
  phone: 290,
};
const halfWidths = {
  desktop: Math.ceil(fullWidths.desktop / 2),
  tablet: Math.ceil(fullWidths.tablet / 2),
  phone: Math.ceil(fullWidths.phone),
};
const thirdWidths = {
  desktop: Math.ceil(fullWidths.desktop / 3),
  tablet: Math.ceil(fullWidths.tablet / 3),
  phone: Math.ceil(fullWidths.phone),
};

let widthsMap = {
  full: [fullWidths.phone * 2, fullWidths.phone * 3, fullWidths.desktop * 2],
  half: [halfWidths.phone * 2, halfWidths.phone * 3, halfWidths.desktop * 2],
  third: [
    thirdWidths.phone * 2,
    thirdWidths.phone * 3,
    thirdWidths.desktop * 2,
  ],
};
widthsMap = {
  ...widthsMap,
  1: widthsMap.full,
  2: widthsMap.half,
  3: widthsMap.third,
};

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export function bigPostImagePlugin(eleventyConfig) {
  function relativeToInputPath(inputPath, relativeFilePath) {
    const splits = inputPath.split("/");
    splits.pop();
    return path.resolve(splits.join(path.sep), relativeFilePath);
  }

  // Big Post Image
  eleventyConfig.addShortcode(
    "bigPostImage",
    async function (src, alt = "", size = 1) {
      let input = String(src);

      if (!input.startsWith("http")) {
        input = path.join(this.eleventy().directories.input, src);
        if (!src.startsWith("/")) {
          input = relativeToInputPath(this.page().inputPath, src);
        }
      }

      const widths = widthsMap[size]
        .sort((a, b) => a - b)
        .filter((a, i, arr) => arr.lastIndexOf(a) === i);

      const metadata = await Image(input, {
        widths,
        formats: ["avif", "webp"],
        outputDir: `${this.eleventy().directories.output}/img/`,
      });

      const imageAttributes = {
        alt,
        sizes: `${Math.round(100 / size)}vw`,
        loading: "lazy",
        decoding: "async",
        class: "img-bip",
      };

      const imageHtml = Image.generateHTML(metadata, imageAttributes);

      // You bet we throw an error on a missing alt (alt="" works okay)
      return `<a href="${src}">${imageHtml}</a>`;
    },
  );
}
