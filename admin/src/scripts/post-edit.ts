import { actions } from "astro:actions";
import { navigate } from "astro:transitions/client";
import { dump } from "js-yaml";
import * as monaco from "monaco-editor";

import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";
import type { FileUploadResponse } from "../pages/api/file-upload";

self.MonacoEnvironment = {
  getWorker() {
    return new editorWorker();
  },
};

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
    postEditMeta.post?.body || "",
    "markdown",
  );
  const bodyEditor = monaco.editor.create(
    document.querySelector("#post-edit-area")!,
    {
      model: bodyModel,
      placeholder: "...",
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

  const attrsRaw = dump(postEditMeta.post?.data || { title: "" }).trim();
  const attrsModel = monaco.editor.createModel(attrsRaw, "yaml");

  const attrsEditor = monaco.editor.create(
    document.querySelector("#attrs-edit-area")!,
    {
      model: attrsModel,
      fontFamily: "Verdana, sans-serif",
      // Language
      language: "yaml",
      ...commonEditorOptions,
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

  type UpdatePostInputAttrs = Parameters<typeof actions.updatePost>[0];
  type CreatePostInputAttrs = Parameters<typeof actions.createPost>[0];

  onButtonClick(".back-button", (e) => {
    e.preventDefault();
    navigate("/posts");
  });

  // Publish: save+isDraft:false
  onButtonClick(".publish-button", async (e) => {
    e.preventDefault();
    if (postEditMeta.post) {
      const fd: UpdatePostInputAttrs = {
        body: bodyEditor.getValue(),
        attrs: undefined,
        filePath: postEditMeta.post.filePath,
      };
      fd.attrs = {
        isDraft: false,
      };
      await actions.updatePost(fd);
    }
  });

  onButtonClick(".view-button", (e) => {
    if (postEditMeta.post) {
      e.preventDefault();
      window.open(`/${postEditMeta.post.data.slug}`, "_blank");
    }
  });

  // Unpublish/save-draft: save+isDraft:true
  onButtonClick(".unpublish-button,.save-draft-button", async (e) => {
    e.preventDefault();
    if (postEditMeta.post) {
      const fd: UpdatePostInputAttrs = {
        body: bodyEditor.getValue(),
        attrs: undefined,
        filePath: postEditMeta.post.filePath,
      };
      fd.attrs = {
        isDraft: true,
      };
      await actions.updatePost(fd);
    } else {
      const fd: CreatePostInputAttrs = {
        body: bodyEditor.getValue(),
        attrs: undefined,
      };
      fd.attrs = {
        isDraft: true,
      };
      const res = await actions.createPost(fd);
      console.log(res.data);
      if (!res.error) {
        return navigate("/posts/" + res.data.slug);
      }
    }
  });

  onButtonClick(".delete-button", async (e) => {
    e.preventDefault();
    if (confirm("Are you sure?") && postEditMeta.post) {
      await actions.deletePost({ filePath: postEditMeta.post.filePath });
      navigate("/posts/");
    }
  });

  onButtonClick(".insert-media-btn", async (e) => {
    e.preventDefault();
    const fileInput = document.querySelector<HTMLInputElement>("#file-input");
    if (fileInput) {
      fileInput.addEventListener("change", async (e) => {
        if (e.target instanceof HTMLInputElement) {
          const fileList = e.target.files;
          const files: File[] = [];
          if (fileList) {
            for (const file of fileList) {
              files.push(file);
            }
          }

          const filesJson = await uploadFiles(files);

          filesJson.forEach((f) => {
            const pos = bodyEditor.getPosition();
            const lines = bodyModel.getLineCount();
            const range =
              pos && bodyEditor.hasTextFocus()
                ? new monaco.Range(pos.lineNumber, 1, pos.lineNumber, 1)
                : new monaco.Range(
                    lines,
                    bodyModel.getLineMaxColumn(lines),
                    lines,
                    bodyModel.getLineMaxColumn(lines),
                  );

            bodyEditor.executeEdits("media-upload", [
              {
                range: range,
                text: makeMarkupForFile(f),
              },
            ]);
          });
        }
      });
      fileInput.click();
    }
  });
}

function onButtonClick(sel: string, listener: (e: PointerEvent) => void) {
  document
    .querySelector<HTMLButtonElement | HTMLAnchorElement>(sel)
    // @ts-expect-error
    ?.addEventListener("click", listener);
}

async function uploadFiles(files: File[]) {
  const queue = [...files];
  const results: FileUploadResponse[] = [];

  async function worker() {
    let file: File | undefined;
    while ((file = queue.shift())) {
      try {
        const res = await fetch("/api/file-upload", {
          method: "POST",
          body: file,
          headers: { "x-filename": file.name, "x-type": file.type },
        });
        const json = (await res.json()) as FileUploadResponse;
        results.push(json);
      } catch (e) {}
    }
  }

  await Promise.all(Array.from({ length: 2 }, worker));
  return results;
}

function makeMarkupForFile(file: FileUploadResponse) {
  if (file.type.startsWith("image/")) {
    return `![](${file.path})`;
  } else if (file.type.startsWith("video/")) {
    return `<video src="${file.path}" playsinline controls preload="none"></video>`;
  } else if (file.type.startsWith("audio/")) {
    return `<audio src="${file.path}" controls preload="none"></audio>`;
  }

  return "";
}
