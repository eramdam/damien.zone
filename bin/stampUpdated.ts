import matter from "gray-matter";
import { spawnSync } from "node:child_process";
import fs from "node:fs";

// pre-commit hook: stamp an `updated` frontmatter date onto edited posts.
//
// Replaces the old build-time git lookup (src/core/gitDate.ts). Baking the date
// into the committed file at commit time means the build never needs git, works
// with a shallow clone, and can't crash when a git binary is missing.
//
// Only files staged as *modified* (diff-filter=M) are touched — brand-new posts
// (added) already carry a `date`, so they don't get a redundant `updated`.

const day = (d: Date) => d.toISOString().slice(0, 10);

const staged = spawnSync("git", [
  "diff",
  "--cached",
  "--name-only",
  "--diff-filter=M",
  "--",
  "src/blog",
])
  .stdout.toString("utf-8")
  .split("\n")
  .map((f) => f.trim())
  .filter((f) => f.endsWith(".md"));

if (staged.length === 0) {
  process.exit(0);
}

const now = new Date();

for (const file of staged) {
  const { data, content } = matter(fs.readFileSync(file, "utf-8"));

  // Don't stamp an edit made the same day the post was published — keeps
  // `updated` meaningful (only appears when a post changes after its date).
  if (data.date && day(new Date(data.date)) === day(now)) {
    continue;
  }

  data.updated = now.toISOString();
  fs.writeFileSync(file, matter.stringify(content.trim(), data), "utf-8");
  spawnSync("git", ["add", file]);
  console.log(`stamped updated=${data.updated} on ${file}`);
}
