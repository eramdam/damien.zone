import { actions } from "astro:actions";
import { navigate } from "astro:transitions/client";
import * as monaco from "monaco-editor";
import type { MonacoTheme } from "monaco-themes";
import type { getBlogPosts } from "../../../helpers/postsHelpers";

const form = document.querySelector("form");

declare global {
  interface Window {
    initData: Awaited<ReturnType<typeof getBlogPosts>>[number];
    darkTheme: MonacoTheme;
    lightTheme: MonacoTheme;
  }
}

if (form) {
  const initialPostData = window.initData;

  const tm = monaco.editor.createModel(initialPostData.body || "", "markdown");

  monaco.editor.defineTheme("md-dark", {
    ...window.darkTheme,
    colors: {
      "editor.background": "#ffffff04",
    },
  });
  monaco.editor.defineTheme("md-light", window.lightTheme);

  const mdDark = window.matchMedia("(prefers-color-scheme:dark)");

  const bodyEditor = monaco.editor.create(
    document.querySelector("#post-edit-area")!,
    {
      model: tm,
      // Language
      language: "markdown",
      theme: mdDark.matches ? "md-dark" : "md-light",
      fontFamily:
        "Maple Mono, Hack, 'Consolas', Monaco, 'Courier New', monospace",
      // Fonts
      fontSize: 16,
      wordWrap: "on",
      lineNumbers: "off",
      glyphMargin: false,
      minimap: { enabled: false },
      matchBrackets: "never",
      // Hide overview rules (right lanes)
      hideCursorInOverviewRuler: true,
      overviewRulerLanes: 0,
      scrollBeyondLastLine: false,
      automaticLayout: true,
      scrollbar: {
        vertical: "auto",
        verticalScrollbarSize: 8,
        useShadows: false,
      },
    },
  );

  mdDark.addEventListener("change", (e) => {
    bodyEditor.updateOptions({
      theme: e.matches ? "md-dark" : "md-light",
      automaticLayout: true,
    });
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
    fd.set("body", bodyEditor.getValue());
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
