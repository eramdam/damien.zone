import posthtml from "posthtml";
import * as cheerio from "cheerio";
import fs from "fs";

import path, { basename } from "path";
/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export function lightDarkImages(eleventyConfig) {
  eleventyConfig.addTransform("lightdark-images", async function (content) {
    if (!(this.page.outputPath || "").endsWith(".html")) {
      return content;
    }

    const $ = cheerio.load(content);
    const images = $(`body.post img[src^="/"]`);

    if (images) {
      images.each(function (_i, el) {
        const baseImage = $(el).prop("src");
        const maybeDarkLightImages = parseImagePath(baseImage);
        if (!maybeDarkLightImages) {
          return;
        }
        if (
          maybeDarkLightImages.darkImages.length < 1 &&
          maybeDarkLightImages.lightImages.length < 1
        ) {
          return;
        }
        console.log(maybeDarkLightImages);

        $(el).replaceWith(`
          <picture>
          ${maybeDarkLightImages.darkImages.map((i) => `<source srcset="${i}" media="(prefers-color-scheme: dark)" />`).join("")}
          <img src="${baseImage}" />
          </picture>
        `);
      });
    }

    return $.html();
  });
}

const scaleKeywords = ["1x", "2x", "3x"];
const schemeKeywords = ["dark", "light"];
const possibleSuffixes = scaleKeywords
  .flatMap((scale) =>
    schemeKeywords.map((scheme) => {
      return `${scale}-${scheme}`;
    }),
  )
  .concat(scaleKeywords)
  .concat(schemeKeywords)
  .concat([""]);

function parseImagePath(imagePath) {
  const imageName = path.parse(imagePath);
  const currentImage = parseImageName(imageName.name);

  if (!currentImage) {
    return undefined;
  }

  const imagesAvailability = possibleSuffixes
    .map((suffix) => {
      if (!suffix) {
        return currentImage.baseName + imageName.ext;
      }
      return currentImage.baseName + "@" + suffix + imageName.ext;
    })
    .reduce((acc, filename) => {
      return {
        ...acc,
        [filename]: fs.existsSync(`./src/${imageName.dir}/${filename}`),
      };
    }, {});
  const availableImages = Object.entries(imagesAvailability)
    .filter(([, bool]) => bool)
    .map(([suffix]) => suffix);
  const darkImages = availableImages.filter((n) =>
    n.split("@")[1]?.includes("dark"),
  );
  const lightImages = availableImages.filter(
    (n) => !n.split("@")[1]?.includes("dark"),
  );

  return {
    darkImages: darkImages
      .map((i) => imageName.dir + "/" + i)
      .filter((f) => f !== imagePath),
    lightImages: lightImages
      .map((i) => imageName.dir + "/" + i)
      .filter((f) => f !== imagePath),
  };
}

function parseImageName(name) {
  const [baseName, rawKeyword] = name.split("@");

  if (!rawKeyword) {
    return {
      baseName,
      scale: 1,
      scheme: "light",
    };
  }

  const [scaleOrSchemeKeyword, schemeKeyword] = rawKeyword.split("-");

  const noMatch = [scaleOrSchemeKeyword, schemeKeyword]
    .filter(Boolean)
    .every((k) => !scaleKeywords.includes(k) && !schemeKeywords.includes(k));

  if (noMatch) {
    return undefined;
  }

  return {
    baseName,
    scheme: schemeKeywords.includes(scaleOrSchemeKeyword)
      ? scaleOrSchemeKeyword
      : schemeKeywords.includes(schemeKeyword)
        ? schemeKeyword
        : "light",
    scale: scaleKeywords.includes(scaleOrSchemeKeyword)
      ? parseInt(scaleOrSchemeKeyword, 10)
      : 1,
  };
}
