import { ActionError, defineAction } from "astro:actions";
import { z } from "astro/zod";
import { blogSchema } from "../content.config";
import fs from "node:fs";
import matter from "gray-matter";

export const server = {
  updatePost: defineAction({
    accept: "form",
    input: z.object({
      filePath: z.string(),
      attrs: blogSchema.optional(),
      body: z.string(),
    }),
    handler: async (input, context) => {
      try {
        const file = await fs.promises.readFile(input.filePath, "utf8");
        const fileAttrs = matter(file);

        fileAttrs.content = input.body;

        console.log(`updating ${input.filePath}`);
        await fs.promises.writeFile(
          input.filePath,
          matter.stringify(fileAttrs.content, fileAttrs.data),
          "utf-8",
        );

        return undefined;
      } catch (e) {
        throw new ActionError({
          message: "File not found",
          code: "NOT_FOUND",
        });
      }
    },
  }),
};
