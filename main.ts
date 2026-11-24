// RefundHound — Absurd Micro-Startup Pitch-Off
// (u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)
//
// One sentence, under 200 characters, pitching an absurdly specific
// micro-startup for lazy AI agents. The program writes the pitch to
// /output/entry.txt, deterministically: same bytes on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "RefundHound is a lazy AI agent that disputes other agents' 3am $400 API bills, keeping 20% of every refund it wins so operators pay only when it does.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(ENTRY);
