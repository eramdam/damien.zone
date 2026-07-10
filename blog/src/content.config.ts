import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { blogCollectionBase } from "./contentCommon";
import { blogSchema } from "@damien.zone/shared/commonTypes";

const blog = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: blogCollectionBase,
  }),
  schema: blogSchema,
});

export const collections = { blog };
