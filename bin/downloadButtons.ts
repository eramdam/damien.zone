import assert from "assert";
import path from "node:path";
import { Readable } from "node:stream";
import { finished } from "node:stream/promises";
import { URL } from "url";
import fs from "node:fs";
import buttons from "../src/_data/buttons.json" with { type: "json" };

type ButtonDef = (typeof buttons)[number];

(async () => {
  for (let buttonDef of buttons) {
    let imageSrc = buttonDef.src;
    if (URL.parse(buttonDef.src) && buttonDef.link) {
      const parsedUrl = URL.parse(buttonDef.src) as URL;
      imageSrc = await downloadFile(
        buttonDef.src,
        buttonDef.filename ?? getFilenameFromURL(parsedUrl),
      );
      buttonDef.src = `./public${imageSrc}`;
    } else {
      assert(
        fs.existsSync(path.resolve("src/", buttonDef.src)),
        `There is no file for ${buttonDef.src}`,
      );
    }

    updateButtonConfig(
      buttons.toSorted((a, b) => {
        return a.name.localeCompare(b.name);
      }),
    );
  }
})();

async function downloadFile(url: string, filename: string) {
  const res = await fetch(url);
  const destination = path.resolve("src/", "public/buttons/", filename);
  const fileStream = fs.createWriteStream(destination);
  await finished(Readable.fromWeb(res.body!).pipe(fileStream));

  const rootDirname = __dirname.replace("bin", "");

  return destination.replace(rootDirname, "").replace("src/public/", "/");
}

function getFilenameFromURL(url: URL) {
  return path.basename(url.pathname);
}

function updateButtonConfig(buttons: ButtonDef[]) {
  return fs.writeFileSync(
    "./src/_data/buttons.json",
    JSON.stringify(buttons, null, 2),
    "utf-8",
  );
}
