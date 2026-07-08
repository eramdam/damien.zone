import { z } from "astro/zod";

export const ADMIN_DEV_PORT = 7777;
export const ADMIN_DEV_URL = `http://localhost:${ADMIN_DEV_PORT}`;

export const DEV_PORT = 5555;
export const DEV_URL = `http://localhost:${DEV_PORT}`;
export const PREVIEW_LOCAL_STORAGE = "__damien.zone__preview";

const previewPostSchema = z.object({
  body: z.string(),
  attrs: z.object({
    title: z.string().optional(),
  }),
});
export type PreviewPostSchema = z.infer<typeof previewPostSchema>;
export class PostEditorCourier {
  targetWindow: Window | undefined;
  targetOrigin: string | undefined;
  constructor() {}

  attachWindow(win: Window, origin: string) {
    this.targetWindow = win;
    this.targetOrigin = origin;
  }

  sendPreviewPost(payload: PreviewPostSchema) {
    if (!this.targetWindow || !this.targetOrigin) {
      throw new Error("No target yet");
    }
    this.targetWindow.postMessage(payload, this.targetOrigin);
  }
}

export class PostPreviewReceiver {
  win: Window;
  parentOrigin: string;
  constructor(win: Window, parentOrigin: string) {
    this.win = win;
    this.parentOrigin = parentOrigin;
  }

  onPreviewUpdate(cb: (p: PreviewPostSchema) => void) {
    this.win.addEventListener("message", (e) => {
      if (e.origin !== this.parentOrigin) {
        return;
      }
      cb(e.data);
    });
  }
}
