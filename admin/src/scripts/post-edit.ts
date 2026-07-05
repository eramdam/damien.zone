import { actions } from "astro:actions";
import { navigate } from "astro:transitions/client";
import matter from "gray-matter";
import * as monaco from "monaco-editor";

const form = document.querySelector("form");

if (form) {
  const { postEditMeta } = window;

  monaco.editor.defineTheme("md-dark", {
    ...postEditMeta.darkTheme,
    colors: {
      "editor.background": "#ffffff04",
    },
  });
  monaco.editor.defineTheme("md-light", postEditMeta.lightTheme);

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
    automaticLayout: true,
    scrollbar: {
      vertical: "auto",
      verticalScrollbarSize: 8,
      useShadows: false,
    },
    renderLineHighlight: "none",
    unicodeHighlight: {
      allowedLocales: {
        fr: true,
        en: true,
      },
    },
  } satisfies monaco.editor.IStandaloneEditorConstructionOptions;

  const bodyModel = monaco.editor.createModel(
    postEditMeta.post.body || "",
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
        bottom: 20,
      },
    },
  );

  const attrsRaw = matter
    .stringify("", postEditMeta.post.data)
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
    await actions.updatePost(makeUpdateFormData());
  });

  type UpdatePostInputAttrs = Parameters<typeof actions.updatePost>[0];
  function makeUpdateFormData(): UpdatePostInputAttrs {
    return {
      body: bodyEditor.getValue(),
      attrs: undefined,
      filePath: postEditMeta.post.filePath,
    };
  }

  document
    .querySelector<HTMLButtonElement>(".publish-button")
    ?.addEventListener("click", async (e) => {
      e.preventDefault();
      const fd = makeUpdateFormData();
      fd.attrs = {
        isDraft: false,
      };
      await actions.updatePost(fd);
    });
  document
    .querySelector<HTMLButtonElement>(".unpublish-button")
    ?.addEventListener("click", async (e) => {
      e.preventDefault();
      const fd = makeUpdateFormData();
      fd.attrs = {
        isDraft: true,
      };
      await actions.updatePost(fd);
    });
  document
    .querySelector<HTMLButtonElement>(".back-button")
    ?.addEventListener("click", (e) => {
      e.preventDefault();
      navigate("/posts");
    });
  document
    .querySelector<HTMLButtonElement>(".view-button")
    ?.addEventListener("click", (e) => {
      e.preventDefault();
      window.open(`/${postEditMeta.post.data.slug}`, "_blank");
    });
}
