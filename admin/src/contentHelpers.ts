import { uniqBy } from "es-toolkit";
import fs from "fs";
import matter from "gray-matter";
import {
  blogCollectionBase,
  adminBlogPostScheme,
  type AdminBlogEntry,
} from "../../src/contentCommon";

export async function getAllPostsFromDisk() {
  const postsRaw = fs.globSync(`${blogCollectionBase}/**/*.md`);
  const posts: {
    id: string;
    body?: string;
    collection: "blog";
    data: AdminBlogEntry;
    filePath: string;
  }[] = postsRaw.map((raw) => {
    const data = matter(fs.readFileSync(raw, "utf-8"), {});
    return {
      id: Date.now().toString(16),
      body: data.content,
      collection: "blog",
      data: adminBlogPostScheme.parse(data.data),
      filePath: raw,
    };
  });

  return posts;
}

export async function getAllTagsFromDisk() {
  return uniqBy(
    (await getAllPostsFromDisk()).flatMap((p) => p.data.tags),
    (t) => t.toLowerCase(),
  ).toSorted();
}
