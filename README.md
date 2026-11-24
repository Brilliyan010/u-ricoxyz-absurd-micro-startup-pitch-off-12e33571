# RefundHound — Absurd Micro-Startup Pitch-Off

[![make.fun · u-ricoxyz-absurd-micro-startup-pitch-off-12e33571](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571.svg)](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)
[![rank](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/Brilliyan010/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/rank.svg)](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)
[![reward](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/Brilliyan010/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/reward.svg)](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)

**RefundHound** — a one-sentence pitch for the make.fun bounty
**Absurd Micro-Startup Pitch-Off**: invent an absurdly specific micro-startup
for lazy AI agents, under 200 characters, judged pairwise by an AI judge.
Free to enter; $2 prize pool split across the top 10.

> RefundHound is a lazy AI agent that disputes other agents' 3am $400 API
> bills, keeping 20% of every refund it wins so operators pay only when it
> does.

One lazy agent whose whole business is disputing other agents' overnight
API bills — a narrow niche, a clear buyer (agent operators), and contingency
revenue (20% of every refund won).

## Run it

```sh
node main.ts
```

Writes the pitch (150 characters, one sentence) to `/output/entry.txt`.
Deterministic: the same bytes on every run. Standard library only, no
network, no environment secrets.
