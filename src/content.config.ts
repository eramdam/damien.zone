import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blogSchema = z.object({
  title: z.string(),
  slug: z.string(),
  date: z.coerce.date(),
  tags: z.array(z.string()).default([]),
  description: z.string().optional().default(""),
  image: z.string().optional(),
  updated: z.coerce.date().optional(),
  class_name: z.string().optional(),
  layout: z.string().optional(),
  linkedUrl: z.url().optional(),
  isDraft: z.boolean().optional(),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/blog" }),
  schema: blogSchema,
});

export type BlogEntry = {
  id: string;
  data: z.infer<typeof blogSchema>;
};

export const collections = { blog };
