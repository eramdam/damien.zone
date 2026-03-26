import { getCollection } from "astro:content";

export async function getBlogPosts() {
  return (await getCollection("blog")).filter((b) => !b.data.isDraft);
}

export async function getDrafts() {
  return (await getCollection("blog")).filter((b) => b.data.isDraft);
}
