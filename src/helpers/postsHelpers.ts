import { getCollection } from "astro:content";
import { uniqBy } from "es-toolkit";

export async function getBlogPosts() {
  return (await getCollection("blog")).filter((b) => !b.data.isDraft);
}

export async function getDrafts() {
  return (await getCollection("blog")).filter((b) => b.data.isDraft);
}

export async function getAllTags() {
  return uniqBy(
    (await getBlogPosts()).flatMap((p) => p.data.tags),
    (t) => t.toLowerCase(),
  ).toSorted();
}
