import { z } from "astro/zod";
import {
  ActionError,
  defineAction,
  type ActionAPIContext,
} from "astro:actions";
import matter from "gray-matter";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import slug from "slug";
import {
  blogCollectionBase,
  blogSchema,
  type BlogEntry,
} from "../../../src/content.config";

import { getCollection } from "astro:content";
import { formatDate } from "../../../src/helpers/componentHelpers";
import { isEqual, isEqualWith } from "es-toolkit";

export const server = {
  updatePost: defineAction({
    accept: "json",
    input: z.object({
      filePath: z.string(),
      attrs: blogSchema.partial().optional(),
      body: z.string(),
    }),
    handler: async (input, context) => {
      try {
        const filePath = path.resolve(
          path.dirname(fileURLToPath(import.meta.url)),
          "../../",
          input.filePath,
        );
        const file = await fs.promises.readFile(filePath, "utf8");
        const fileAttrs = matter(file);
        const currentBody = String(fileAttrs.content);
        const currentAttrsData = blogSchema.parse(fileAttrs.data);

        fileAttrs.content = input.body;
        const fileAttrsData = blogSchema.parse({
          ...currentAttrsData,
          ...input.attrs,
          tags: input.attrs?.tags?.length
            ? input.attrs.tags
            : fileAttrs.data.tags,
        });

        if (currentAttrsData.isDraft === undefined) {
          currentAttrsData.isDraft = false;
        }

        if (fileAttrsData.isDraft === undefined) {
          fileAttrsData.isDraft = false;
        }

        const didChange = hasPostChanged(
          { body: currentBody, data: currentAttrsData },
          { body: input.body, data: fileAttrsData },
        );

        if (!didChange) {
          return undefined;
        }

        fileAttrsData.updated = new Date();
        context.logger.info(`updating ${input.filePath}`);
        await fs.promises.writeFile(
          filePath,
          makePostFileString(fileAttrs.content, fileAttrsData),
          "utf-8",
        );

        return undefined;
      } catch (e) {
        context.logger.error(String(e));
        throw new ActionError({
          message: "File not found",
          code: "NOT_FOUND",
        });
      }
    },
  }),
  createPost: defineAction({
    accept: "json",
    input: z.object({
      attrs: blogSchema.partial().optional(),
      body: z.string().optional(),
    }),
    handler: async (input, context) => {
      try {
        const { attrs } = input;
        const dateToUse = attrs?.date ?? new Date();
        const prefix = formatDate(dateToUse, "MM-dd");
        const year = formatDate(dateToUse, "yyyy");
        const title = attrs?.title ?? "New post";
        const postSlug = attrs?.slug
          ? await uniqueSlug(attrs.slug)
          : await makeUniqueSlug(title);

        const fileContent = makePostFileString(input.body || "", {
          slug: postSlug,
          title,
          date: dateToUse,
          isDraft: true,
          class_name: attrs?.class_name,
          description: attrs?.description,
          image: attrs?.image,
          tags: attrs?.tags,
          layout: attrs?.layout,
          linkedUrl: attrs?.linkedUrl,
          updated: undefined,
        });

        const filePath = path.resolve(
          blogCollectionBase,
          year,
          `${prefix}-${postSlug}.md`,
        );

        await fs.promises.writeFile(filePath, fileContent, "utf8");
        context.logger.info(`Created ${filePath}`);

        return undefined;
      } catch (e) {
        context.logger.error(String(e));
        throw new ActionError({
          message: String(e),
          code: "INTERNAL_SERVER_ERROR",
        });
      }
    },
  }),
};

async function makeUniqueSlug(title: string) {
  let titleSlug = slug(title);

  return uniqueSlug(titleSlug);
}

async function uniqueSlug(titleSlug: string) {
  const allSlugs = new Set(
    ...(await getCollection("blog")).map((p) => p.data.slug),
  );

  while (allSlugs.has(titleSlug)) {
    titleSlug += "-new";
  }

  return titleSlug;
}

type BlogEntryWithRequiredFields = Partial<BlogEntry> & { slug: string };
function makePostFileString(body: string, data: BlogEntryWithRequiredFields) {
  return matter.stringify(body, data);
}

type ComparedPost = { body?: string; data: BlogEntryWithRequiredFields };
function hasPostChanged(currentPost: ComparedPost, newPost: ComparedPost) {
  const bodyChanged = currentPost.body?.trim() !== newPost.body?.trim();
  const dataChanged = !isEqual(currentPost.data, newPost.data);
  console.log({ bodyChanged, dataChanged });
  return bodyChanged || dataChanged;
}
