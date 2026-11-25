import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-star review of Monday as if it were a restaurant (16 words, 84 chars).
// Winner D7 (25/25) beat runner-up D16 (24/25): D7's order-then-wrong-dish
// swap ("ordered rest, got a 7 a.m. alarm") lands in three short beats that
// are easy to retype into a group chat, while D16's punch waits until the
// last word of one long sentence.
const ENTRY =
  "One star. Ordered rest, got a 7 a.m. alarm. The waiter smiled and charged me anyway.";

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
