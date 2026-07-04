import { ActionError, defineAction } from "astro:actions";
import { z } from "astro/zod";
import { blogSchema } from "../../../src/content.config";
import fs from "node:fs";
import matter from "gray-matter";
import path from "node:path";
import { fileURLToPath } from "node:url";

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

        fileAttrs.content = input.body;
        fileAttrs.data = {
          ...fileAttrs.data,
          ...input.attrs,
          tags: input.attrs?.tags?.length
            ? input.attrs.tags
            : fileAttrs.data.tags,
        };

        console.log(`updating ${input.filePath}`);
        await fs.promises.writeFile(
          filePath,
          matter.stringify(fileAttrs.content, fileAttrs.data),
          "utf-8",
        );

        return undefined;
      } catch (e) {
        console.log(e);
        throw new ActionError({
          message: "File not found",
          code: "NOT_FOUND",
        });
      }
    },
  }),
};
