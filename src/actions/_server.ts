import { defineAction } from "astro:actions";

export const server = {
  myAction: defineAction({
    handler(input, context) {
      return `Awawa`;
    },
  }),
};
