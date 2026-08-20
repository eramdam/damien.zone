import { createRestAPIClient } from "masto";

const masto = createRestAPIClient({
  url: "https://social.erambert.me",
  accessToken: "",
});

// console.log(await masto.v1.accounts.$select('112934488871037987').statuses.list());

// let i = 0;
const records: any[] = [];
for await (const statuses of masto.v1.accounts
  .$select("112934488871037987")
  .statuses.list({
    limit: 100,
  })) {
  statuses.forEach((s) => {
    if (s.card?.url && s.card.url.startsWith("https://damien.zone")) {
      records.push({ url: s.url || s.uri, blogpost: s.card.url });
      console.log({ url: s.url || s.uri, blogpost: s.card.url });
    }
  });
}

console.log(records);
