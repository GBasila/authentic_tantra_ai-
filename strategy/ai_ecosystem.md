---
title: AI Ecosystem Map
status: source-of-truth
owner: CEO Agent
last_reviewed: 2026-04-23
---

# AI Ecosystem Architecture

## Agent Inventory

| Agent | Home folder | Role |
|---|---|---|
| Brand Guardian | `/brand/` | Voice audit, guardrail enforcement |
| Content Agent | `/content/` | Multi-channel content generation |
| Sales Agent | `/sales/` | Launch copy, DM/consult support |
| Retreat Agent | `/retreats/` | Retreat design, journey, materials |
| Audience Agent | `/audience/` | Weekly listening, pattern surfacing |
| CEO Strategic Agent | `/strategy/` | Synthesis, monthly memo, planning |

## Daily Workflow

```
MORNING (automated)
  Audience Agent → reads last 7 days of signals → updates /audience/*.md
            ↓
  CEO Agent → reads /audience/ + metrics → sends Victoria morning brief

MIDDAY (human + AI)
  Content Agent → drafts week's content from audience + brand
            ↓
  Brand Guardian → audits drafts
            ↓
  Content Manager → reviews, schedules

LAUNCH WINDOWS (8 weeks before flagship)
  Sales Agent → runs daily launch ops
            ↓
  Brand Guardian → audits all sales copy
            ↓
  Victoria approves before publish
```

## Shared Context
Every agent loads `/agents/_shared_context.md` at session start.
This file is the common ground: brand identity, voice rules, forbidden zones,
current quarter plan.

## Escalation Rules
- Any copy mentioning specific student experiences → human only
- Any financial promise → human only
- Any crisis DM/email → human only within 15 min
- Any agent producing content that hits Brand Guardian's "REWRITE" verdict
  three times on one artifact → escalate to Victoria

## Tech Stack
- **Primary:** Claude Opus / Sonnet via Claude Projects
- **Repository-embedded:** Claude Code for file-level ops
- **Bulk tasks:** Claude Haiku
- **Secondary (team access):** ChatGPT custom GPTs built from agent specs

## Growth
When cert launches (Y2), add:
- **Lineage Agent** — supports certification supervisions
- **International Agent** — handles English-language voice holding
