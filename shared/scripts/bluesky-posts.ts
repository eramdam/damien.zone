import fs from "fs-extra";
import { chunk } from "es-toolkit";
// import lexicons
import type {} from "@atcute/atproto";
import type {} from "@atcute/bluesky";
import { fromUint8Array } from "@atcute/repo";
import { Client } from "@atcute/client";
import { PasswordSession } from "@atcute/password-session";

const actor = `did:plc:ywh4n7ihypdnwb4n2kzlzrht`;

const session = await PasswordSession.login({
  service: "https://bsky.social",
  identifier: `damien.zone`,
  password: ``,
});
const rpc = new Client({ handler: session });

const { data, ok } = await rpc.get("com.atproto.sync.getRepo", {
  as: "bytes",
  params: {
    did: actor,
  },
});

console.log({ ok, data });

if (!ok) {
  process.exit(1);
}

const records: any[] = [];

for (const { collection, rkey, record } of fromUint8Array(data)) {
  if (collection === "app.bsky.feed.post") {
    if (
      (record as any).facets?.[0]?.features?.[0].$type ===
      "app.bsky.richtext.facet#link"
    ) {
      if (
        (record as any).facets?.[0]?.features?.[0].uri.startsWith(
          "https://damien.zone/",
        )
      ) {
        const url = (record as any).facets?.[0]?.features?.[0].uri;
        if (!String(url).endsWith("feed.xml")) {
          records.push({
            url,
            rkey: `https://bsky.app/profile/damien.zone/post/${rkey}`,
          });
        }
      }
    }
  }
}

console.log(records);
