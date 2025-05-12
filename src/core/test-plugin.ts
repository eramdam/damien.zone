import prettier from "prettier";
import { rehype } from "rehype";
import rehypeRewrite from "rehype-rewrite";
import { read } from "to-vfile";
import { rewriteWithFigures } from "./customRemarkFigure";

(async () => {
  const result = await rehype()
    .use(rehypeRewrite, {
      rewrite: rewriteWithFigures,
    })
    .process(await read("./src/core/example.html"));

  console.log(
    await prettier.format(String(result), {
      parser: "html",
    }),
  );
})();
