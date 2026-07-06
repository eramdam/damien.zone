import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { blogCollectionBase, blogSchema } from "./contentCommon";
import fs from "fs";
import path from "path";

const blog = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: blogCollectionBase,
  }),
  schema: blogSchema,
});

const previewPost = defineCollection({
  loader: glob({
    pattern: "./src/tmp-preview.md",
    generateId(options) {
      const id = fs
        .statSync(path.resolve(options.base.pathname, options.entry))
        .mtimeMs.toString(32);
      return id;
    },
  }),
  schema: blogSchema.partial(),
});

export const collections = { blog, previewPost };
