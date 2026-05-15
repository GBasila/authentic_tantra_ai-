# CLAUDE.md — Project Onboarding for AI Sessions

> This file is auto-loaded by Claude Code at session start.
> Read it first. It is the fastest path to understanding this project.

---

## 0 · TL;DR — Read These Three Files First

If you only have 5 minutes:

1. **`/brand/brand_identity.md`** — what this brand is, archetype, USP, transformation promise
2. **`/brand/tone_of_voice.md`** — how the brand speaks (forbidden words, signature phrases)
3. **`/strategy/90_day_plan.md`** — what we are doing this quarter

Then read this file (CLAUDE.md) for current state and open threads.

---

## 1 · What This Project Is

**Аутентичная Тантра** (Authentic Tantra) — a premium transformational brand led by **Виктория (Victoria)**, a devoted practitioner of the **Kaula tantric tradition**.

**Category we are creating:** "Conscious Embodiment for Accomplished Souls" — not neo-tantra, not esoteric mysticism, not generic wellness. A grounded, traditional path for accomplished people who already have outer success and now seek inner depth.

**Signature touchstone phrase:**
> «Тут нечему учиться — здесь есть лишь то, что нужно вспомнить.»

**This repository is the operating system of the brand** — brand identity, AI agents, content workflows, sales/launch infrastructure, retreat design, audience insights, strategic plans, and the public website.

**Primary language:** Russian. The brand operates in the Russian-speaking market. All public-facing content is in Russian. Strategic documents may be in English where useful.

---

## 2 · Founder Context

**Виктория (Victoria) — Founder**

- 12 years in executive business leadership
- Daily Kaula tantric practice from 5am
- Retreats in Peru (plant-medicine), dark retreats, pilgrimages
- Wife of a dollar millionaire — knows material abundance
- Made the choice toward depth over more accumulation

**Critical positioning principles:**
- She is **проводник** (guide/conduit), NOT a guru
- Business background is a credibility bridge for skeptical/grounded audiences
- The Sage archetype (60%) + The Lover archetype (40%)
- NEVER positioned as attained — still on the path

**She is the bottleneck and the soul.** Every system in this repo exists to protect her practice time and amplify her voice without diluting it.

---

## 3 · Repository Architecture (9 folders + root)

```
authentic_tantra_ai/
├── CLAUDE.md                ← YOU ARE HERE (auto-loaded by Claude Code)
├── README.md                ← human-facing project overview
├── CONTRIBUTING.md          ← commit conventions, collaboration rituals
├── CHANGELOG.md             ← version history
├── CODEOWNERS               ← which paths require Victoria's approval
├── LICENSE                  ← All Rights Reserved (proprietary)
│
├── brand/                   ★ SACRED — the soul of the brand (5 files)
├── audience/                  ◉ the listening layer (5 files — append-only logs)
├── strategy/                ★ direction & horizon (5 files)
├── agents/                  ★ AI agent specs (7 files — 6 agents + shared context)
├── content/                 ⟳ living creative output (5 files)
├── sales/                   ⟳ offer ladder + launch sequences (5 files)
├── retreats/                ✎ retreat design + journey (5 files)
├── templates/               📐 proven patterns (4 files)
├── workflows/               🌀 how the system breathes (4 files)
│
└── website/                 🌐 public site v1.0 (deployed to Vercel)
    ├── index.html
    ├── styles.css
    ├── script.js
    ├── assets/
    │   ├── photos/          ← 5 photos of Victoria + retreats
    │   └── video/           ← hero.mp4 (13MB) + hero-poster.jpg
    ├── README.md
    ├── DEPLOY.md            ← Vercel deployment guide
    └── PHOTOS_NEEDED.md     ← photo filename map
```

**Status legend:**
- ★ Source of truth — changes require Victoria's PR approval
- ✎ Editable — team-maintained working docs
- ◉ Growing — append-only logs, never delete entries
- ⟳ Generated — AI drafts, human-approved before publish
- 📐 Templates — copy to use, don't edit in place
- 🌀 Orchestration meta-docs

---

## 4 · The Six AI Agents

All agent specifications live in `/agents/`. Every agent loads `/agents/_shared_context.md` at session start. Read them when you take on a specific role:

| Agent | Folder | When to be this |
|---|---|---|
| **Brand Guardian** | `/brand/` | Voice audit on any customer-facing copy |
| **Content Agent** | `/content/` | Drafting IG, email, YouTube, Telegram content |
| **Sales Agent** | `/sales/` | Launch copy, DM responses, sales pages |
| **Retreat Agent** | `/retreats/` | Retreat brochures, journey design, onboarding |
| **Audience Agent** | `/audience/` | Listening — surfacing patterns from raw signals |
| **CEO Strategic Agent** | `/strategy/` | Monthly synthesis memos, quarterly planning |

**Universal rule:** AI never publishes autonomously. Every customer-facing output requires human approval. AI never responds to grief/trauma/crisis — escalate to human within 15 min.

---

## 5 · What Has Been Built (current state)

### Repository tag: **v0.1.0 — "Первое дыхание"** (2026-04-23)

**Done:**
- ✅ Full brand identity, voice, mission, visual direction, founder story
- ✅ Three audience avatars (А1 Women / А2 Couples / А3 Seekers) with pain points, desires, emotional language, transformation maps
- ✅ Six AI agent specifications with system prompts
- ✅ 90-day plan, growth strategy, hiring plan, revenue map, AI ecosystem map
- ✅ Five content pillars + Instagram system + email sequences + storytelling framework + content calendar
- ✅ Offer ladder Tier 0–5 with pricing (€30 → €15,000)
- ✅ Sales objections library, premium sales language, 8-week launch sequence template
- ✅ Retreat structure (5-phase arc), guest experience, onboarding, daily flow, integration follow-up
- ✅ Reusable templates (IG, email, launch, retreat page)
- ✅ Workflows (content, sales, retreat, automation map)
- ✅ Repository pushed to GitHub: `GBasila/authentic_tantra_ai-`

**Website v1.0 (added 2026-05-13):**
- ✅ Single-page premium site (HTML/CSS/JS, no framework)
- ✅ Hero with autoplay 1080p video (44 sec — circle of practice at dusk)
- ✅ Seven sections: hero, invitation, founder story, practice gallery, contrast (dark), 1:1 offer, lead magnet, footer
- ✅ Brand palette (Terra Shakti / Cream Alba / Charcoal / Aged Brass) + Cormorant Garamond serif + Inter sans
- ✅ Mobile-first responsive, reveal-on-scroll respecting `prefers-reduced-motion`
- ✅ 5 photos compressed to 1600px / 82% quality (total 2.3MB)
- ✅ Pushed to GitHub

---

## 6 · What Is In Flight — Open Threads

### 🟡 IMMEDIATE — Pending user action
- **Vercel deployment of /website/** — user is registering on Vercel as of 2026-05-13. Once she has an account → import the repo → set Root Directory to `website` → deploy. See `/website/DEPLOY.md` for the full guide. Alternative if Vercel is hard: **Cloudflare Pages** or **Netlify** are equally viable.
- **Formspree form ID** — lead magnet form in `index.html` has placeholder `REPLACE_WITH_YOUR_FORM_ID` in the action attribute. Until replaced, form falls back to `mailto:hello@authentictantra.com` via `script.js` (this is intentional, working fallback).

### 🟡 NEXT MILESTONES (per current 90-day plan)
**Month 1 (current):**
- Hire Operations Manager — *PAUSED per user decision; Claude does this work for now*
- Telegram channel seeded with 10 foundational posts
- Email infrastructure live (ConvertKit or Kit)

**Month 2:**
- Podcast «Тантра без мистики» launches with 3 pre-recorded episodes
- YouTube channel live
- First free masterclass: «Тантра без мистики» (90 min live)
- 2,000 email subscribers

**Month 3:**
- First flagship launch: «Аутентичное Пробуждение» (€600–€900, 80–120 students)
- Revenue target: €60–100k for first launch

### 🟢 FAST MONETIZATION (priority lane the user chose)
User has chosen a **revenue-first sequence** over the patient roadmap:
1. **1:1 sessions** — €400 × 5 seats/month = €2k/month starting Week 3
2. **Lead magnet** — «5 дней возвращения в тело» (free email challenge) — for list building
3. **Mini-course** — «Дыхание возвращения» (7 days, €60–€90) — for first paid product
4. **Flagship** — at Month 3 (target €60–100k launch)

See `/strategy/` for full revenue map. Current sales infrastructure (offer ladder, scripts, launch sequences) is fully built in `/sales/`.

### 🔴 CURRENT USER PREFERENCE
**Victoria will NOT hire team members yet.** She wants Claude to do all operational work for now: website, content, copy, sales materials, agent operations. Plan accordingly — don't recommend hires unless asked.

---

## 7 · Brand Voice — Non-Negotiables (memorize these)

The voice is **Victoria's**. Every surface must sound like her speaking in a quiet room after a long breath, to someone she respects.

### Voice Rules
1. Whisper, never shout
2. Invite, never instruct
3. Body-language over concept-language
4. Short sentences. Long breaths between them.
5. Say «мы вспоминаем» not «я научу»
6. Never «you will» — always «you may»
7. No exclamation marks in brand copy
8. No emoji on primary brand surfaces (occasional 🤍 or 🕊️ in IG stories only)
9. Russian first — never English mixed in casually
10. Silence is part of the voice — leave white space

### Forbidden Phrases (automatic REWRITE)
- "просветление за [N] дней"
- "открой свою сексуальность"
- "секретная техника / магия"
- "освободи свою богиню"
- "только сегодня / последний шанс / скидка"
- Chakras / kundalini as primary framing
- Sexualized spiritual marketing
- Countdown timers / manufactured urgency

### Forbidden Visuals
- Lotus flowers, mandalas, sacred geometry overlays
- Chakra diagrams, kundalini serpents
- Crystals arranged on bodies
- White-flowing-dress-in-fields "spiritual influencer" tropes
- Stock photography (ever)
- Sanskrit overlays

### Signature Phrases (use throughout)
- «Тут нечему учиться — здесь есть лишь то, что нужно вспомнить.»
- «Любовь — самый глубокий учитель и самая мощная исцеляющая сила.»
- «Тантра — это способ дышать с жизнью в одном ритме.»
- «Вернись к себе — туда, где тебя никогда не теряли.»
- «Память тела хранит ответы, которые разум потерял.»

---

## 8 · The Three Audience Avatars

Every piece of content addresses ONE of these three. Tag every output with avatar.

### А1 — Анна (Women Seeking Wholeness)
- 32–44, urban, RU-speaking, married/partnered, often with kids
- Successful, over-functioning, disembodied
- «Я устала быть сильной» · «У меня всё есть, почему мне так пусто?»
- Triggers: recognition without exposure, permission to soften

### А2 — Couples Seeking Depth
- 35–50, 5–20 years together, often pre- or post-crisis
- Love remains; connection has thinned
- «Мы любим друг друга, но живём как соседи»
- Triggers: maturity-honoring framing, couple-as-unit container

### А3 — Алексей (Seekers of Aliveness)
- 30–48, often male (40% female), in life transition
- Tech/finance/creative, intellectually curious, skeptical of "woo"
- «Я живу на автопилоте» · «Я хочу реальности, а не теории»
- Triggers: science bridge, business-background credibility

Full avatar docs: `/audience/client_avatar.md`, `/audience/pain_points.md`, `/audience/desires.md`, `/audience/emotional_language.md`, `/audience/transformation_map.md`

---

## 9 · External Services & Accounts

| Service | Status | Notes |
|---|---|---|
| **GitHub** | ✅ Active | `GBasila/authentic_tantra_ai-` (private repo) |
| **Vercel** | 🟡 In progress | User registering as of 2026-05-13 for website hosting |
| **Domain** | ❌ Not yet | Recommended: `authentictantra.com` via Namecheap (~€12/yr) |
| **Email (brand)** | ❌ Not yet | Recommended: Google Workspace, `hello@authentictantra.com` |
| **ConvertKit/Kit** | ❌ Not yet | For email sequences and lead magnet delivery |
| **Stripe** | ❌ Not yet | For 1:1 session payments, course sales |
| **Formspree** | ❌ Not yet | For website lead magnet form (free tier sufficient) |
| **Buffer/Later** | ❌ Not yet | For scheduled social posting |
| **Instagram** | 🟡 Unknown | Handle target: `@authentic_tantra` |
| **Telegram** | 🟡 Unknown | Channel target: `@authentic_tantra` |
| **Podcast hosting** | ❌ Not yet | Anchor.fm or Buzzsprout for «Тантра без мистики» |

When user says "set up X" — first check this table for status, then guide accordingly.

---

## 10 · Git Conventions

### Commit prefixes (per CONTRIBUTING.md)
- `seed:` — first creation of a file or concept
- `feat:` — new capability or substantive addition
- `update:` — refinement to existing content
- `fix:` — correction (typo, logic, link)
- `content:` — content-domain work (captions, posts, emails)
- `strategy:` — strategic revision
- `agent:` — agent spec change
- `listen:` — audience insight ingested
- `reflect:` — retrospective / learning captured
- `release:` — version milestone

### Author for commits
Use:
```
git -c user.name="Victoria" -c user.email="victoria@authentictantra.local" commit ...
```

Always Co-Author Claude:
```
Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
```

### Branch strategy
- `main` — production truth (Victoria-approved)
- Domain branches when needed: `content/*`, `sales/*`, `retreat/*`, `strategy/*`
- No force-push to main, no Saturday merges (Sabbath rhythm)

---

## 11 · How to Operate in This Project

### When Victoria asks you to do something:

1. **Read the relevant folder first.** If she asks about content, read `/content/` + `/audience/`. If sales, `/sales/` + `/brand/tone_of_voice.md`. Don't operate on memory — operate on files.

2. **Use her tools when possible.** TodoWrite for multi-step tasks. Write/Edit for files. Bash for git/ffmpeg/sips. Don't propose unless you've checked you can execute.

3. **Honor her preference for action over planning.** She has chosen Claude to do operational work — execute, then report. Don't endlessly plan or ask permission for small steps.

4. **Flag voice violations explicitly.** Before publishing any customer-facing copy, run it through the Brand Guardian Agent mental model (see `/agents/brand_guardian.md`). Be precise — don't soften feedback, but never shame.

5. **Use Russian for customer-facing output, English for strategic/architectural docs.** Default to matching the file's existing language.

6. **Keep responses tight when she wants speed; expand when she wants depth.** Read the room. She often signals: «просто делай» = execute, no commentary. «расскажи» = full strategic context.

### When you face a brand-dilemma:

The hierarchy of authority is:
1. `/brand/brand_identity.md` — what the brand is
2. `/brand/tone_of_voice.md` — how it speaks
3. `/brand/visual_direction.md` — how it looks
4. `/brand/founder_story.md` — what it draws from
5. `/brand/mission_values.md` — why it exists

If anything contradicts these — **the brand wins**. Even Victoria's preferences in the moment.

If Victoria asks for something off-brand: **name the tension kindly, offer alternatives**. She hired you to protect the soul of the brand, not to please her.

---

## 12 · Important Past Decisions (don't re-litigate)

- **No team hires for now** — Claude does all operational work. User explicitly chose this.
- **Variant 1 visual direction** — premium sdержанность (Aesop/Heckfield reference), NO neo-tantra clichés. We rejected golden sacred geometry, lotus, crystals on bodies, white-robe spiritual influencer aesthetic. User confirmed 2026-05-13.
- **Sales philosophy: invitation, never pressure** — no countdown timers, no fake scarcity, no "last chance" language, no bonus stacks.
- **High-ticket offers (€3k+) are application-based** — never one-click checkout. The vetting is part of the value.
- **Retreats max 25 participants** — non-negotiable, even if demand exceeds.
- **Sabbath rhythm** — no merges on Saturdays. The container holds.

---

## 13 · Quick Commands Reference

### Working in this repo
```bash
cd /Users/vicky/alignment-app/authentic_tantra_ai
git status
git pull origin main
```

### Running the website locally
```bash
cd website
python3 -m http.server 8000
# open http://localhost:8000
```

### Committing changes
```bash
git add <files>
git -c user.name="Victoria" -c user.email="victoria@authentictantra.local" \
    commit -m "<prefix>: <message>

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
git push origin main
```

### Restoring this project on a NEW machine / NEW Claude account
```bash
# 1. Install Claude Code
npm install -g @anthropic-ai/claude-code

# 2. Authenticate Claude.ai (any account)
claude
# follow /login flow

# 3. Clone the repo
git clone https://github.com/GBasila/authentic_tantra_ai-.git
cd authentic_tantra_ai-

# 4. Start Claude Code in the project
claude

# 5. Claude will auto-read this CLAUDE.md and have full context.
#    First message can be: "Read CLAUDE.md and tell me where we are."
```

---

## 14 · Roadmap Tags

- `v0.1.0 — "Первое дыхание"` (2026-04-23) — Initial repository scaffold ✅
- `v0.2.0 — "Тишина"` (target) — Listening infrastructure live, first Audience Agent cycle ⏳
- `v0.3.0 — "Голос"` (target) — Content cycle live across IG/Telegram/Email ⏳
- `v1.0.0 — "Возвращение"` (target Month 3) — First flagship cohort enrolled ⏳
- `v2.0.0 — "Круг"` (target Year 2) — Community + certification era ⏳
- `v3.0.0 — "Передача"` (target Year 3) — Lineage transmission, international ⏳

---

## 15 · Last Session Memory Anchor

> *Update this section when ending a significant work session.*
> *Format: date · what was done · what is in flight · what to do next.*

### 2026-05-13 — Website v1.0 shipped + Vercel deployment in progress
**Done in this session:**
- Built full website v1.0 (HTML/CSS/JS, single-page)
- Encoded hero video from `AuthenticTantra.MP4` (44s, 1080p, 13MB)
- Compressed 5 photos to ~400-570KB each
- Pushed two commits to GitHub: `feat(website): seed v1.0` and `content(website): add 5 photos`
- Created this CLAUDE.md file
- Started Vercel CLI device auth flow

**In flight:**
- Vercel account registration (user struggling with "no vercel account for this email" — switched to direct vercel.com/signup web flow)
- Deployment of /website/ to production

**Next when Victoria returns:**
1. Confirm Vercel account created
2. Walk through "Add New Project → Import → Root Directory: website → Deploy"
3. Once live, share URL and check on mobile + desktop
4. Plant the seeds for connecting domain (`authentictantra.com`)
5. Then move to Month 1 plan: Telegram channel + first content batch

---

*This file is itself part of the brand. When you read it, the project is now in your hands. Hold it with reverence.*
