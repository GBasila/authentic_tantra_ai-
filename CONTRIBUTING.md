# Contribution Rituals

This repository is tended, not managed. Contribution is a practice.

## Branching
- Work on branches prefixed by domain: `content/`, `sales/`, `retreat/`, `strategy/`, `agents/`
- One working branch per focus. Do not mix domains.
- No direct commits to `main` or `development`.

## Commits
We use a gentle variant of Conventional Commits. The prefix names the *nature* of the change:

| Prefix | Meaning |
|---|---|
| `seed:` | First creation of a file or concept |
| `feat:` | New capability or substantive addition |
| `update:` | Refinement to existing content |
| `fix:` | Correction to an error (typo, logic, link) |
| `content:` | Content-domain work (captions, posts, emails) |
| `strategy:` | Strategic revision (plan, roadmap, offer) |
| `agent:` | Agent spec change |
| `listen:` | Audience insight ingested |
| `reflect:` | Retrospective / learning captured |
| `release:` | Version milestone |

### Examples
- `seed: initial brand_identity with archetype lock`
- `content: draft IG pillar week for 2026-05-W2`
- `strategy: revise Q3 revenue target after retreat fill`
- `listen: add 5 objections from Q2 discovery calls`
- `reflect: retrospective for 2026-Q2-flagship launch`

## Pull Requests
- Every PR has a *what*, a *why*, and a *what-it-replaces-in-our-work* section.
- PRs to `/brand/` require a voice memo from Victoria attached as a linked file.
- Reviewers begin from what works before what needs change.
- No merges on Saturdays. The rhythm holds the container.

## Voice Audit
Any PR touching customer-facing copy triggers an automatic voice audit via the Brand Guardian Agent.
Verdicts: PUBLISH / REVISE / REWRITE. Only PUBLISH verdicts may merge to `main`.

## Reverence clauses
- Never force-push to `main` or `development`.
- Never delete files from `/audience/` — append-only.
- Never edit retreat participant data without consent documentation.
