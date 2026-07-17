#!/bin/bash
# Authentic Tantra · Q3 2026 backup
# Run this in Terminal on your Mac from ~/alignment-app/authentic_tantra_ai
# It creates 5 logical commits + pushes everything to GitHub

set -e  # stop on any error

REPO=/Users/vicky/alignment-app/authentic_tantra_ai
cd "$REPO"

# ─────────────── Preflight ───────────────
echo "→ Removing any stale git locks…"
rm -f .git/index.lock .git/HEAD.lock 2>/dev/null || true

echo "→ Ignoring Word temp files (~\$*.docx)…"
if ! grep -q "^~\$" .gitignore 2>/dev/null; then
  echo '~$*.docx' >> .gitignore
  echo '.DS_Store' >> .gitignore
fi

# Remove any Word lock files from tracking
find . -maxdepth 3 -name '~$*.docx' -exec rm -f {} \; 2>/dev/null || true

AUTHOR='Victoria <victoria@authentictantra.local>'
COAUTHOR='Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>'

echo ""
echo "═══════════════════════════════════════════════════════"
echo "COMMIT 1/5 · Bali letting-go post"
echo "═══════════════════════════════════════════════════════"
git add content/instagram/2026-06/bali-letting-go/
git add .gitignore
git commit --author="$AUTHOR" -m "content: Bali letting-go post — 6 brand-voice slides

Bilingual (EN→RU) narrative about 7 days of fever and Melukat ritual at Tirta Empul.
Six brand-style carousel slides (1080×1350, cream #F2EADF background, Cormorant
Garamond Italic in charcoal, brass dividers). Slide 1 hook with БАЛИ · 2026 eyebrow,
slide 6 closing with @AUTHENTICTANTRA · RU eyebrow.

$COAUTHOR"

echo ""
echo "═══════════════════════════════════════════════════════"
echo "COMMIT 2/5 · Pema Gitama Source of Truth (brand foundation)"
echo "═══════════════════════════════════════════════════════"
git add strategy/_pema_notes_01.md \
        strategy/_pema_notes_02.md \
        strategy/_pema_notes_03.md \
        strategy/_pema_notes_04.md \
        strategy/_pema_notes_05.md \
        strategy/_pema_notes_06.md \
        strategy/_pema_notes_07.md \
        strategy/_pema_notes_08.md \
        strategy/pema_gitama_source_of_truth.md \
        Pema_Gitama_Source_of_Truth.docx
git commit --author="$AUTHOR" -m "strategy: Pema Gitama Source of Truth — brand philosophical foundation

Distilled 116 pages of Pema Gitama's 'The Path of Awakening' into an 8-stage
brand foundation document (~14k words). Reconstructs the author's worldview
across principles, worldview map, hidden premises, language, DNA of teaching,
brand application, archetype, and standalone Source of Truth reference.

Includes: 8 chapter-by-chapter notes files with verbatim quotes (EN + RU),
main synthesized markdown, and Word version for external circulation.

Key insights extracted:
- Two-level Weaving aligns brand offer ladder (Tier 0→5) with the teaching
- Pema's near-silence about sexuality becomes the strongest positioning move
- Trickster (not ego) reframes the whole ego-work conversation

$COAUTHOR"

echo ""
echo "═══════════════════════════════════════════════════════"
echo "COMMIT 3/5 · Q3 2026 Content Plan (both editions)"
echo "═══════════════════════════════════════════════════════"
git add strategy/content_plan_q3_2026_pema_edition.md \
        Plan_Content_Q3_2026_Authentic_Tantra.docx
# The Pema Edition Word doc may exist too:
[ -f Plan_Content_Q3_2026_Pema_Edition.docx ] && git add Plan_Content_Q3_2026_Pema_Edition.docx
git commit --author="$AUTHOR" -m "strategy: Q3 2026 content plan — original + Pema Edition

Two versions of the 8-week content plan (23 June – 17 August):

1. Plan_Content_Q3_2026_Authentic_Tantra.docx — original 35-page structure
   with 21 posts across 4 phases (Founder Story, Тишина launch, Margo series,
   Pre-launch + Launch of Аутентичная Глубина).

2. content_plan_q3_2026_pema_edition.md — deep philosophical rewrite of every
   post through the Pema Source-of-Truth lens. Same 21 posts, same dates,
   same strategic warm-up logic. Only depth of meaning changed:
   - Cliches removed ('люби себя' etc.)
   - Paradoxes added
   - Body dimension anchored throughout
   - Each post now carries at least one thought that stops the reader

Both files preserved so the marketer voice and the practitioner voice are
side-by-side.

$COAUTHOR"

echo ""
echo "═══════════════════════════════════════════════════════"
echo "COMMIT 4/5 · Visual Bible + Pinterest Brief"
echo "═══════════════════════════════════════════════════════"
git add strategy/visual_bible.md \
        strategy/pinterest_brief.md \
        Visual_Bible_Authentic_Tantra.docx \
        Pinterest_Brief_Authentic_Tantra.docx
git commit --author="$AUTHOR" -m "brand: Visual Bible + Pinterest reference brief

Two documents that make the brand SEEN, not just READ:

1. Visual_Bible_Authentic_Tantra.docx (~13k words, 46 pages) — creative-
   director-level visual brand bible. 9 parts: philosophy, 3 archetypes,
   6 anti-references, 10-category photo system, 8 Reels categories,
   personal-brand guide, 30-post feed storyboard, audit of existing photo
   library (19 photos analysed), 100 specific shot briefs.

   Signature metaphor: 'a quiet room with a single east-facing window after
   a long night.' Cross-references Aesop, Heckfield, A24, Sofia Coppola,
   Sarah Moon, Paolo Roversi, Hiroshi Sugimoto, Wim Wenders, Cereal Magazine.

2. Pinterest_Brief_Authentic_Tantra.docx (~7.5k words, 45 pages) —
   operational reference-collection brief. 13 sections mapped 1:1 to the
   Visual Bible. ~50 Pinterest search queries with target pin counts,
   visual markers, traps to avoid, and Bible-principle bridges. Includes
   the 3-second rule for pin selection and a 15-item 'never pin' list.

$COAUTHOR"

echo ""
echo "═══════════════════════════════════════════════════════"
echo "COMMIT 5/5 · Brand Guidelines for external collaborators"
echo "═══════════════════════════════════════════════════════"
git add BRAND_GUIDELINES.md Authentic_Tantra_Brand_Guidelines.docx
git commit --author="$AUTHOR" -m "brand: guidelines for external collaborators (MD + DOCX)

External-facing brand book — what a photographer, designer, or partner needs
to know before touching the brand. Contains: brand DNA, voice rules, forbidden
words, forbidden visuals, palette, typography, category positioning against
neo-tantra clichés, and hand-off protocol.

Markdown lives in repo for versioning; Word version for actual sharing.

$COAUTHOR"

echo ""
echo "═══════════════════════════════════════════════════════"
echo "PUSH → origin/main"
echo "═══════════════════════════════════════════════════════"
git push origin main

echo ""
echo "═══════════════════════════════════════════════════════"
echo "✓ BACKUP COMPLETE"
echo "═══════════════════════════════════════════════════════"
git log --oneline -8
