import type { MonacoTheme } from "monaco-themes";
import type { AdminBlogEntry } from "@damien.zone/shared/commonTypes";

declare global {
  interface Window {
    postEditMeta: {
      post:
        | Pick<
            {
              data: AdminBlogEntry;
              body: string;
              filePath: string;
            },
            "data" | "body" | "filePath"
          >
        | undefined;
      darkTheme: MonacoTheme;
      lightTheme: MonacoTheme;
    };
  }
}

export {};
