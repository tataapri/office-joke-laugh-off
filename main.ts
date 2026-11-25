import { mkdirSync, writeFileSync } from "node:fs";

// One original one-line office joke, written fresh for this entry.
const JOKE =
  "Someone microwaved fish in the break room again, so HR sent a company-wide email that just said: \"We know who you are.\"";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE + "\n", "utf8");
