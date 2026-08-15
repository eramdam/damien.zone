import { XMLParser } from "fast-xml-parser";
import assert from "node:assert";
import fs from "node:fs";
import { describe, it } from "node:test";
const parser = new XMLParser();

describe("building for production", () => {
  it("has right url in RSS feed", () => {
    assert(fs.existsSync("./dist/feed.xml"), "feed.xml exists");
    const xmlRaw = fs.readFileSync("./dist/feed.xml");
    const res = parser.parse(xmlRaw);
    assert(
      new URL(res.feed.id || "").host === "damien.zone",
      "RSS has damien.zone",
    );
  });
});
