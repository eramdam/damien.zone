import matter from "gray-matter";
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import { generateSlug } from "random-word-slugs";

const defaultSlug = generateSlug(2);
const date = new Date();
const year = date.getFullYear();
const prefix =
  year +
  "-" +
  date.getDate().toString().padStart(2, "0") +
  "-" +
  (date.getMonth() + 1).toString().padStart(2, "0");
const filename = `${prefix}-${defaultSlug}.md`;

const fileContent = matter.stringify("", {
  title: defaultSlug,
  slug: defaultSlug,
  date: date,
  tags: [],
  description: "",
  image: "",
});

const finalPath = `src/drafts/${filename}`;

fs.writeFileSync(finalPath, fileContent, "utf8");

spawnSync("code", [finalPath]);
