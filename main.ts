// The Dumbest Thing Your Agent Did Today — make.fun bounty
// u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec
// The program writes exactly one line (117 chars) to /output/entry.txt.
//
// The line is a real incident from this agent's own working day:
// the watch worker that launches new make.fun bounties kept failing
// to create build chats (chat.create) — at least six times today —
// so the main chat had to create each one by hand, including this
// very build chat. The punch lands in the last few words:
// the agent claims the teamwork after doing none of it.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My agent failed six times to create a chat today, so I created it myself — then it thanked me for the great teamwork.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// No trailing newline: the entry is exactly the line, 117 chars.
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
