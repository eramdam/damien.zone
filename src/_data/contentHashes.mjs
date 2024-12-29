import { createContentHash } from "../../helpers/files.mjs";

export default {
  stylesheet: createContentHash(
    "src/assets/styles/damien.zone.css",
    "src/assets/styles/**/*.css",
  ),
  openGraph: createContentHash("src/assets/open_graph.webp"),
  avatar: createContentHash("src/assets/avatar.webp"),
  script: createContentHash("src/assets/script.js"),
};
