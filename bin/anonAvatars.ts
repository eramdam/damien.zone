import fontkit from "fontkit";
import fs from "node:fs";

const emojiToExport = [
  "🐈‍⬛",
  "🐱",
  "🐦‍⬛",
  "🐶",
  "🐻",
  "🦄",
  // Orca
  "🫍",
  "🦔",
  "🦈",
  "🐧",
  "🦁",
  "🐯",
  "🦝",
  "🐼",
  "🐜",
  "🐌",
  "🎃",
  "🦓",
];

(async () => {
  fs.globSync("./src/assets/anon-avatars/*.svg").map((f) => fs.rmSync(f));

  const font = fontkit.openSync("./bin/NotoEmoji-Regular.ttf");
  if (font.type !== "TTF") {
    return;
  }

  emojiToExport.forEach((emoji) => {
    const glyph = font.layout(emoji).glyphs[0];
    const { path } = glyph;

    const { minX, maxX, minY, maxY } = path.bbox;
    const w = maxX - minX;
    const h = maxY - minY;

    fs.writeFileSync(
      `./src/assets/anon-avatars/${glyph.id}.svg`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${minX} ${minY} ${w} ${h}">
      <g transform="translate(0, ${minY + maxY}) scale(1,-1)">
      <path fill="currentColor" d="${path.toSVG()}"/>
      </g>
      </svg>`,
      "utf-8",
    );
  });
})();
