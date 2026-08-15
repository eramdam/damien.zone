import { BLOG_PUBLIC_ROOT } from "@damien.zone/blog";
import { formatDate } from "@damien.zone/shared/helpers";
import type { APIContext, APIRoute } from "astro";
import fs from "node:fs";
import path from "node:path";
import { pipeline } from "node:stream/promises";
import { fileURLToPath } from "node:url";

export const POST = (async ({ request }: APIContext) => {
  const name = request.headers.get("x-filename");
  const type = request.headers.get("x-type");
  if (!name || !type || !request.body) {
    return new Response("Bad request", { status: 400 });
  }

  const dest = path.resolve(
    fileURLToPath(import.meta.url),
    `${BLOG_PUBLIC_ROOT}/media/blog/`,
    `${formatDate(new Date(), "yy/MM")}`,
    path.basename(name),
  );
  const dirPath = path.dirname(dest);
  fs.mkdirSync(dirPath, { recursive: true });
  await pipeline(request.body, fs.createWriteStream(dest));

  return new Response(
    JSON.stringify({
      path: dest.split("public")[1],
      type: type,
    } satisfies FileUploadResponse),
    { status: 201 },
  );
}) satisfies APIRoute;

export type FileUploadResponse = { path: string; type: string };
