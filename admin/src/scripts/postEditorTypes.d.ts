import type { MonacoTheme } from "monaco-themes";
import type { getBlogPosts } from "../../../src/helpers/postsHelpers";

declare global {
  interface Window {
    postEditMeta: {
      post: Awaited<ReturnType<typeof getBlogPosts>>[number] & {
        filePath: string;
      };
      darkTheme: MonacoTheme;
      lightTheme: MonacoTheme;
    };
  }
}

export {};
