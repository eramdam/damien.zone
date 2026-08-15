import { BLOG_POSTS_ROOT, BLOG_PUBLIC_ROOT, GIT_ROOT } from "@damien.zone/blog";
import {
  type AdminBlogEntry,
  adminBlogPostScheme,
} from "@damien.zone/shared/commonTypes";
import { getLastUpdatedTimestamp } from "@damien.zone/shared/git";
import { uniqBy } from "es-toolkit";
import fs from "fs";
import matter from "gray-matter";

export async function getAllPostsFromDisk() {
  const postsRaw = fs.globSync(`${BLOG_POSTS_ROOT}/**/*.md`);
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

export async function getAllMediaFromDisk() {
  const mediaRaw = fs.globSync(
    `${BLOG_PUBLIC_ROOT}/{media,img}/**/*.{png,mp4,gif,webp,avif,jpeg,jpg}`,
    {},
  );

  const augmented = mediaRaw.map((f) => {
    const stat = fs.statSync(f);
    const fsDate = new Date(stat.birthtimeMs);
    const gitDate = getLastUpdatedTimestamp(f.replace(GIT_ROOT + "/", ""));
    return {
      path: f.replace(BLOG_PUBLIC_ROOT, ""),
      date: fsDate,
      gitDate: gitDate,
    };
  });

  return augmented;
}
