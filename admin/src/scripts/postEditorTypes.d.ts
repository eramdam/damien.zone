import type { MonacoTheme } from "monaco-themes";
import type { AdminBlogEntry } from "../../../src/contentCommon";

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
