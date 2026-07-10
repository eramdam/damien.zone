import { z } from "astro/zod";
import { ActionError, defineAction } from "astro:actions";
import matter from "gray-matter";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import slug from "slug";

import { BLOG_POSTS_ROOT } from "@damien.zone/blog";
import {
  adminBlogPostScheme,
  type AdminBlogEntry,
} from "@damien.zone/shared/commonTypes";
import { isEqual, omit, omitBy } from "es-toolkit";
import { getAllPostsFromDisk } from "../contentHelpers";
import { formatDate } from "@damien.zone/shared/helpers";

export const server = {
  updatePost: defineAction({
    accept: "json",
    input: z.object({
      filePath: z.string(),
      attrs: adminBlogPostScheme
        .extend({
          date: z.union([z.literal("now"), z.coerce.date()]),
        })
        .partial()
        .optional(),
      body: z.string(),
    }),
    async handler(input, context) {
      try {
        const filePath = path.resolve(
          path.dirname(fileURLToPath(import.meta.url)),
          "../../",
          input.filePath,
        );
        const file = await fs.promises.readFile(filePath, "utf8");
        const fileAttrs = matter(file);
        const currentBody = String(fileAttrs.content);
        const currentAttrsData = adminBlogPostScheme.parse(fileAttrs.data);

        fileAttrs.content = input.body;
        const fileAttrsData = adminBlogPostScheme.parse({
          ...currentAttrsData,
          ...input.attrs,
          date: input.attrs?.date === "now" ? new Date() : input.attrs?.date,
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

        const { didChange, onlyDraftChanged } = hasPostChanged(
          { body: currentBody, data: currentAttrsData },
          { body: input.body, data: fileAttrsData },
        );

        if (!didChange) {
          return undefined;
        }

        if (!onlyDraftChanged) {
          fileAttrsData.updated = new Date();
        }

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
      attrs: adminBlogPostScheme.partial().optional(),
      body: z.string().optional(),
    }),
    async handler(input, context) {
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
          BLOG_POSTS_ROOT,
          year,
          `${prefix}-${postSlug}.md`,
        );

        await fs.promises.writeFile(filePath, fileContent, "utf8");
        context.logger.info(`Created ${filePath}`);

        return { slug: postSlug };
      } catch (e) {
        console.error(e);
        throw new ActionError({
          message: String(e),
          code: "INTERNAL_SERVER_ERROR",
        });
      }
    },
  }),
  deletePost: defineAction({
    accept: "json",
    input: z.object({ filePath: z.string() }),
    async handler(input, context) {
      try {
        const filePath = path.resolve(
          path.dirname(fileURLToPath(import.meta.url)),
          "../../",
          input.filePath,
        );
        if (fs.existsSync(filePath)) {
          fs.rmSync(filePath);
        }

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
};

async function makeUniqueSlug(title: string) {
  let titleSlug = slug(title);

  return uniqueSlug(titleSlug);
}

async function uniqueSlug(titleSlug: string) {
  const allSlugs = new Set(
    (await getAllPostsFromDisk()).map((p) => p.data.slug),
  );

  while (allSlugs.has(titleSlug)) {
    titleSlug += "-new";
  }

  return titleSlug;
}

type BlogEntryWithRequiredFields = Partial<AdminBlogEntry> & { slug: string };
function makePostFileString(body: string, data: BlogEntryWithRequiredFields) {
  return matter.stringify(
    body,
    omitBy(data, (v) => v === undefined),
  );
}

type ComparedPost = { body?: string; data: BlogEntryWithRequiredFields };
function hasPostChanged(currentPost: ComparedPost, newPost: ComparedPost) {
  const bodyChanged = currentPost.body?.trim() !== newPost.body?.trim();
  const dataChanged = !isEqual(currentPost.data, newPost.data);
  const nonDraftChanged = !isEqual(
    omit(currentPost.data, ["isDraft"]),
    omit(newPost.data, ["isDraft"]),
  );

  return {
    didChange: bodyChanged || dataChanged,
    onlyDraftChanged: !nonDraftChanged,
  };
}
