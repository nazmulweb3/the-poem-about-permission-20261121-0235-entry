import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const poem = readFileSync(new URL("./entry.txt", import.meta.url), "utf8");
if (poem.trim().length === 0) {
  throw new Error("entry.txt holds no poem");
}
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
