import matter from "gray-matter";
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import { generateSlug } from "random-word-slugs";
import { format } from "date-fns";

const defaultSlug = generateSlug(4);
const date = new Date();
const year = date.getFullYear();
const prefix = format(date, "MM-dd");
const filename = `${prefix}-${defaultSlug}.md`;

const fileContent = matter.stringify("", {
  title: defaultSlug,
  slug: defaultSlug,
  date: date,
  tags: [],
  description: "",
  image: "",
  isDraft: true,
});

const finalPath = `src/blog/${year}/${filename}`;

console.log({ finalPath });

fs.writeFileSync(finalPath, fileContent, "utf8");

spawnSync("code", [finalPath]);
