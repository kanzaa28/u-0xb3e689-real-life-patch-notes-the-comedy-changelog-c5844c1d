// Real-Life Patch Notes: The Comedy Changelog
// Entrypoint: writes exactly one patch-note line (<=160 chars) to /output/entry.txt.
// No network, no secrets, no dependencies — deterministic output.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "v2.4.1: fixed a bug where the mouth auto-replied 'you too' to 'enjoy your meal'.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
