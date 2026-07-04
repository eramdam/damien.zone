import { actions } from "astro:actions";
import { navigate } from "astro:transitions/client";
import * as monaco from "monaco-editor";
import type { getBlogPosts } from "../../../helpers/postsHelpers";

const form = document.querySelector("form");

declare global {
  interface Window {
    initData: Awaited<ReturnType<typeof getBlogPosts>>[number];
  }
}

if (form) {
  const initialPostData = window.initData;

  const tm = monaco.editor.createModel(initialPostData.body || "", "markdown");
  monaco.editor.create(document.querySelector("#post-edit-area")!, {
    model: tm,
    // Language
    language: "markdown",
    theme: "vs-dark",
    fontFamily:
      "Maple Mono, Hack, 'Consolas', Monaco, 'Courier New', monospace",
    // Fonts
    fontSize: 16,
    wordWrap: "on",
    lineNumbers: "off",
    minimap: { enabled: false },
    matchBrackets: "never",
    // Scrolling
    scrollBeyondLastLine: false,
    smoothScrolling: true,
    // Performance
    automaticLayout: true,
  });

  tm.updateOptions({
    bracketColorizationOptions: {
      enabled: false,
      independentColorPoolPerBracketType: false,
    },
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    console.log(await actions.updatePost(fd));
  });

  document.querySelector(".back-button")?.addEventListener("click", (e) => {
    e.preventDefault();
    navigate("/admin/posts");
  });
  document.querySelector(".view-button")?.addEventListener("click", (e) => {
    e.preventDefault();
    // @ts-expect-error
    window.open(`/${form.elements["slug"].value}`, "_blank");
  });
}
