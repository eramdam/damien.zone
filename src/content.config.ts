import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { blogCollectionBase, blogSchema } from "./contentCommon";

const blog = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: blogCollectionBase,
  }),
  schema: blogSchema,
});

export const collections = { blog };
