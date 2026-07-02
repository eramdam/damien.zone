import { execSync, spawnSync } from "child_process";
import fs from "fs";
import matter from "gray-matter";
import { spawn } from "node:child_process";
import { argv } from "node:process";

function checkPort(port: number) {
  const output = spawnSync(
    `lsof -i tcp:${port} | awk '{print $2}' |grep --invert PID`,
    { shell: true },
  );
  if (output.error) {
    console.error(output.error);
    return;
  }
  const pid = Buffer.from(output.stdout.buffer).toString().split("\n")[0];
  return pid;
}

const filePath = argv[2] === "--" ? argv[3] : argv[2];

if (!fs.existsSync(filePath)) {
  console.log({ filePath });
  throw new Error("File not found");
}

const content = fs.readFileSync(filePath, "utf-8");
const fields = matter(content);
const slug = fields.data.slug;
if (!slug) {
  throw new Error(`No slug for ${filePath}`);
}

const isPreviewRunning = Boolean(checkPort(4321));

if (!isPreviewRunning) {
  spawn("pnpm run dev", {
    shell: true,
  });
  setTimeout(() => {
    execSync(`open "http://localhost:4321/${slug}"`);
  }, 2_000);
}
