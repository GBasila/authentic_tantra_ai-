---
title: Automation Map
status: source-of-truth
owner: Ops Manager + CEO Agent
last_reviewed: 2026-04-23
---

# Automation Architecture

The repository is the brain. External tools are the limbs. This map shows
which tool listens for which event and what it does.

## Primary Tools
- **Claude / Claude Projects** — cognition (all agents run here)
- **GitHub** — source of truth (this repo)
- **Notion** — operational view for non-technical team
- **ConvertKit** (or Kit) — email sending
- **Stripe** — payments
- **Buffer / Later** — social scheduling
- **Calendly + Zoom** — discovery calls + 1:1s
- **Framer / Webflow** — website CMS
- **Zapier / Make** — orchestration

## Event → Action Map

| Trigger | Action | Tool chain |
|---|---|---|
| PR merged to `main` in `/content/` | Push to Buffer queue | GitHub Actions → Zapier → Buffer |
| New row in Notion content calendar | Create draft branch in GitHub | Notion → Zapier → GitHub API |
| New ConvertKit subscriber | Log in private audience file | ConvertKit webhook → Make → GitHub |
| Stripe purchase event | Trigger onboarding sequence in ConvertKit | Stripe → Zapier → ConvertKit |
| Form submission (retreat app) | Notify Retreat Director + auto-reply | Tally → Zapier → Slack + ConvertKit |
| Monday 06:00 | Run Audience Agent | Scheduled Claude job |
| Sunday 20:00 | Run CEO Agent (monthly memo) | Scheduled Claude job |
| PR to `/brand/` or `/strategy/` | Notify Victoria on Slack | GitHub → Slack webhook |

## Data flow — end-to-end example

**A website visitor becomes a retreat participant:**
```
Visitor → IG post (click)
      → Landing page (Framer)
      → Email opt-in (ConvertKit)
      → Welcome sequence triggered
      → [over weeks] nurture emails
      → Tier 1 purchase (Stripe)
      → Onboarding sequence triggered
      → Flagship course enrollment
      → Community (Telegram)
      → Retreat application (Tally form)
      → Retreat Director reviews
      → Discovery call (Calendly)
      → Acceptance
      → Retreat pre-arrival sequence (ConvertKit)
      → Retreat experience
      → Integration sequence (ConvertKit)
      → Long-term relationship
```

## Repository as source-of-truth
- **Content calendar** — repo primary → Notion synced view
- **Offer pricing** — repo primary → Stripe products synced
- **Email sequences** — repo primary → ConvertKit synced on merge
- **Retreat brochures** — repo primary → website rendered on merge

## Failure modes
- If an external tool goes down — the repo still holds truth
- If the repo is unavailable — external tools keep running with last-synced state
- Never one-way sync that loses history. All syncs log to `/workflows/sync_log/YYYY-MM.md`

## Rules
- Never automate a customer-facing action that carries grief, trauma, or crisis
- Every automated email has a human-override path
- Victoria's personal voice messages never trigger automation
- Crisis language in any inbound channel → human alert within 15 min
