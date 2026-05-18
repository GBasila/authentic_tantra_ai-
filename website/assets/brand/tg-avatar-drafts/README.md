# Telegram Channel Avatar — 4 Drafts

Four variants of the Telegram channel avatar, all 512×512 px, brand-aligned.

---

## How to use

1. Look at all four PNGs below
2. Pick one (or tell Claude to make adjustments)
3. Download the PNG from GitHub
4. In Telegram: Channel Settings → tap on the avatar circle → "Set a Channel Photo" → upload

---

## The four variants

### v1 — «Remember.»
**File:** `v1-remember.png`
**Phrase:** Single word, italic, large
**Background:** Cream Alba (light)
**Vibe:** The essence of the brand in one word. Minimalist, confident, quiet authority.
**Best for:** First impression — works at 40px (chat list).
**Strategic note:** This is the most "ownable" variant. "Remember" becomes synonymous with the channel.

### v2 — «Come home.»
**File:** `v2-come-home.png`
**Phrase:** Two words, italic
**Background:** Cream Alba (light)
**Vibe:** Intimate invitation. Warmer than v1, more emotional.
**Best for:** If the audience is primarily female / А1 segment. Most "soft" of the four.

### v3 — «There is nothing to learn here.»
**File:** `v3-nothing-to-learn.png`
**Phrase:** Two-line phrase, italic, smaller
**Background:** Cream Alba (light)
**Vibe:** The signature phrase of the brand, in full. Bolder positioning.
**Best for:** Audiences already familiar with the brand. Less legible at 40px (chat list) — phrase compresses.
**Risk:** Smaller text at small sizes may not be readable in compact view.

### v4 — «A return.»
**File:** `v4-a-return.png`
**Phrase:** Two words, italic
**Background:** Charcoal Silence (dark) ★ ONLY DARK VARIANT
**Vibe:** Premium, considered. Stands out among other channel avatars (most channels have light backgrounds).
**Best for:** Differentiation — your avatar will be visually distinct in any chat list.
**Strategic note:** The brand's USP is "the return". This variant names it directly.

---

## My recommendation

**For first launch — v1 ("Remember.")**

Reasons:
1. **Single word** survives at any size (even 32px)
2. **Universal** — speaks to all three avatars (А1, А2, А3)
3. **Ownable** — no one else in RU spiritual space owns this word
4. **Future-proof** — works as a brand anchor for years; doesn't lock you into one campaign

**Backup choice — v4 ("A return.")** for differentiation. Dark backgrounds are rare in channel avatars; you'd stand out in chat lists.

---

## Design specs (for anyone making future variants)

- **Size:** 512×512 px
- **Format:** PNG
- **Background colors:**
  - Light: Cream Alba `#F2EADF`
  - Dark: Charcoal Silence `#2B2A28`
- **Typography:**
  - Wordmark "AUTHENTIC TANTRA" — Inter, 16-18px, letter-spacing 0.45em, color Aged Brass `#A68A5B`
  - Phrase — Cormorant Garamond, italic, 64-130px depending on phrase length
  - Color on light bg: Charcoal `#2B2A28`
  - Color on dark bg: Cream Alba `#F2EADF`
- **Composition:** all text centered, generous whitespace
- **Safe area for circle crop:** keep all elements within inner circle of ~440px diameter

---

## Sources

Each PNG has a corresponding HTML source file (e.g., `v1-remember.html`). To regenerate:

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless=new --disable-gpu --hide-scrollbars \
  --window-size=512,512 \
  --screenshot=v1-remember.png \
  "file:///path/to/v1-remember.html"
```

---

## Want a different variant?

Tell Claude:
- Different phrase
- Different color combination
- Add ornament/divider
- Different typography (e.g., wordmark only, no phrase)

Variants are cheap. We can produce 4-8 more in minutes.
