import path from "node:path";
import { fileURLToPath } from "node:url";

import { z } from "astro/zod";

const baseProps = {
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
};

export const blogSchema = z.object({
  title: z.string(),
  ...baseProps,
});

export const adminBlogPostScheme = z.object({
  title: z.string().optional(),
  ...baseProps,
});

export const blogCollectionBase =
  fileURLToPath(path.dirname(import.meta.url)) + "/blog";

export type BlogEntry = z.infer<typeof blogSchema>;
export type AdminBlogEntry = z.infer<typeof adminBlogPostScheme>;
