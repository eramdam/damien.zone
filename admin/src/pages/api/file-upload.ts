import type { APIContext, APIRoute } from "astro";
import fs from "node:fs";
import path from "node:path";
import { pipeline } from "node:stream/promises";
import { fileURLToPath } from "node:url";
import { formatDate } from "../../../../src/helpers/componentHelpers";

export const POST = (async ({ request }: APIContext) => {
  const name = request.headers.get("x-filename");
  if (!name || !request.body) {
    return new Response("Bad request", { status: 400 });
  }

  const dest = path.resolve(
    fileURLToPath(import.meta.url),
    "../../../../../public/media/blog/",
    `${formatDate(new Date(), "yy/MM")}`,
    path.basename(name),
  );
  console.log({ dest });
  const dirPath = path.dirname(dest);
  fs.mkdirSync(dirPath, { recursive: true });
  await pipeline(request.body, fs.createWriteStream(dest));

  return new Response(
    JSON.stringify({
      path: dest.split("public")[1],
    }),
    { status: 201 },
  );
}) satisfies APIRoute;
