import matter from "gray-matter";
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

  monaco.editor.defineTheme("md-dark", {
    ...window.darkTheme,
    colors: {
      "editor.background": "#ffffff04",
    },
  });
  monaco.editor.defineTheme("md-light", window.lightTheme);

  const mdDark = window.matchMedia("(prefers-color-scheme:dark)");
  const commonEditorOptions = {
    theme: mdDark.matches ? "md-dark" : "md-light",
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
    automaticLayout: false,
    scrollbar: {
      vertical: "auto",
      verticalScrollbarSize: 8,
      useShadows: false,
    },
    renderLineHighlight: "none",
  } satisfies monaco.editor.IStandaloneEditorConstructionOptions;

  const bodyModel = monaco.editor.createModel(
    initialPostData.body || "",
    "markdown",
  );
  const bodyEditor = monaco.editor.create(
    document.querySelector("#post-edit-area")!,
    {
      model: bodyModel,
      fontFamily:
        "Maple Mono, Hack, 'Consolas', Monaco, 'Courier New', monospace",
      // Language
      language: "markdown",
      ...commonEditorOptions,
      padding: {
        top: 20,
      },
    },
  );

  const attrsRaw = matter
    .stringify("", initialPostData.data)
    .replaceAll("---", "")
    .trim();
  const attrsModel = monaco.editor.createModel(attrsRaw, "yaml");

  const attrsEditor = monaco.editor.create(
    document.querySelector("#attrs-edit-area")!,
    {
      model: attrsModel,
      fontFamily: "Verdana, sans-serif",
      // Language
      language: "yaml",
      ...commonEditorOptions,
      automaticLayout: false,
      padding: {
        top: 10,
        bottom: 10,
      },
    },
  );

  const updateAttrsHeight = (e: { contentHeightChanged: boolean }) => {
    if (!e.contentHeightChanged) {
      return;
    }
    attrsEditor.layout({
      height: attrsEditor.getContentHeight(),
      width: form.clientWidth,
    });
    const wrapper = document.querySelector<HTMLDivElement>(
      "#attrs-edit-wrapper",
    );
    if (wrapper) {
      wrapper.style.height = attrsEditor.getContentHeight() + "px";
    }
  };

  attrsEditor.onDidContentSizeChange(updateAttrsHeight);
  updateAttrsHeight({ contentHeightChanged: true });

  mdDark.addEventListener("change", (e) => {
    bodyEditor.updateOptions({
      theme: e.matches ? "md-dark" : "md-light",
      automaticLayout: true,
    });
    attrsEditor.updateOptions({
      theme: e.matches ? "md-dark" : "md-light",
      automaticLayout: true,
    });
  });

  bodyModel.updateOptions({
    bracketColorizationOptions: {
      enabled: false,
      independentColorPoolPerBracketType: false,
    },
  });
  attrsModel.updateOptions({
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
