import { createContentHash } from "../../helpers/files.mjs";

export default {
  stylesheet: createContentHash("src/assets/styles/**/*.{scss,css}"),
};
