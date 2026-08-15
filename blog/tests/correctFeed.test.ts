import { XMLParser } from "fast-xml-parser";
import assert from "node:assert";
import fs from "node:fs";
import { describe, it } from "node:test";
import * as cheerio from "cheerio";
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

  it("has right assetsPrefix", () => {
    assert(fs.existsSync("./dist/index.html"), "index.html exists");

    const htmlRaw = fs.readFileSync("./dist/index.html");
    const $ = cheerio.load(htmlRaw);
    const prefix = $("meta[name=assetsPrefix]").attr("content");
    assert(
      prefix === "https://cdn.damien.zone",
      "prefix is https://cdn.damien.zone",
    );
  });
});
