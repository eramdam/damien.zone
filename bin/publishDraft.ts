import matter from "gray-matter";
import { select, Separator } from "@inquirer/prompts";
import fs from "node:fs";
import path from "node:path";
import { glob } from "glob";

(async () => {
  const drafts = await glob("./src/drafts/*.md");
  if (drafts.length < 1) {
    console.log("No drafts! Have you tried writing worse posts?");
    process.exit(0);
  }

  let selectedDraft: string | undefined = undefined;
  if (drafts.length === 1) {
    selectedDraft = drafts[0];
  } else {
    selectedDraft = await select({
      message: "Select a draft file",
      choices: drafts.map((d) => {
        const fields = matter.read(d, {});
        return {
          name: fields.data.title + " - " + d,
          value: d,
        };
      }),
    });
  }

  const fields = matter.read(selectedDraft, {});
  const date = new Date();
  const year = date.getUTCFullYear();
  const prefix =
    date.getDate().toString().padStart(2, "0") +
    "-" +
    (date.getMonth() + 1).toString().padStart(2, "0");
  if (!fs.existsSync("./src/blog/" + year)) {
    fs.mkdirSync("./src/blog/" + year);
  }

  if (fields.data.updated) {
    delete fields.data.updated;
  }
  fields.data.date = date;

  const newFilename = `./src/blog/${year}/${prefix}-${fields.data.slug}.md`;
  const newFileContent = matter.stringify(fields.content, fields.data);

  fs.writeFileSync(newFilename, newFileContent);
  fs.unlinkSync(selectedDraft);

  console.log(`Wrote ${newFilename} and deleted ${selectedDraft}`);
})();
