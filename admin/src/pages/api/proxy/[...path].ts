import type { APIRoute } from "astro";
import fs from "node:fs";
import path from "node:path";
import { Readable } from "node:stream";
import { fileURLToPath } from "node:url";
import mime from "mime-types";

const ROOT = path.resolve(
  fileURLToPath(import.meta.url),
  "../../../../../../public",
);
export const GET = (async ({ redirect, request, params }) => {
  const targetFile = params.path ?? "";
  const filePath = path.resolve(ROOT, targetFile);

  if (filePath !== ROOT && !filePath.startsWith(ROOT + path.sep)) {
    return new Response("Forbidden", { status: 403 });
  }

  const stream = fs.createReadStream(filePath);

  return new Response(Readable.toWeb(stream) as ReadableStream, {
    headers: new Headers({
      "Content-Type": mime.lookup(filePath) || "application/octet-stream",
    }),
  });
}) satisfies APIRoute;
