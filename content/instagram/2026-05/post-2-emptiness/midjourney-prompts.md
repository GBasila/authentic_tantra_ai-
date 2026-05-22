---
title: Midjourney Prompts — Post 2 Carousel
status: ready-to-run
owner: Victoria (runs prompts) + Claude (composites text on returned images)
last_reviewed: 2026-05-20
post: Post 2 · Act 2 — Emptiness
purpose: Generate 6 cinematic editorial backgrounds for carousel slides via Midjourney
companion_doc: /strategy/luxury_creative_direction.md PART 4
---

# Midjourney Prompts · Post 2

> Run these prompts in Midjourney to generate photographic backgrounds for the 6 carousel slides. Send images back to Claude, who will composite Cormorant Garamond text on top in brand style.

---

## How to run (quick start)

### Option 1 · Midjourney web app (easiest, recommended)

1. Открой **https://www.midjourney.com/imagine**
2. Войди (Discord OAuth — нужна Midjourney подписка, $10/мес базовый plan)
3. В поле «imagine» вставь промпт целиком (один за раз)
4. Жди 30-60 сек — Midjourney выдаст **4 варианта**
5. Выбери лучший → **U1/U2/U3/U4** (upscale выбранного)
6. Скачай PNG (правый клик → Save image)

### Option 2 · Discord (классический способ)

Если ты в Discord Midjourney сервере:
1. В любом канале `#newbies-*` введи `/imagine`
2. Вставь промпт
3. Дождись 4 вариантов → U1-U4 → скачай

### Option 3 · Альтернативы если нет Midjourney подписки

| Tool | Цена | Ссылка | Quality |
|---|---|---|---|
| **ChatGPT Plus / GPT-4o Image** | $20/мес (если уже есть Plus) | chat.openai.com | Хорошее, проще промпты |
| **Flux на fal.ai** | Бесплатно (test) → $0.04/image | fal.ai/models/fal-ai/flux-pro | Близко к Midjourney |
| **Ideogram** | Бесплатно (limited) | ideogram.ai | Decent, лучше для типографики |
| **Recraft** | Бесплатно (test) | recraft.ai | Близко к editorial |

Если используешь не Midjourney — используй универсальный промпт-template из `/strategy/luxury_creative_direction.md` PART 4.4 (Flux template) или 4.5 (GPT Image template), подставляя описание subject из этого файла.

---

## Параметры для всех 6 (одинаковые)

- **Aspect ratio:** `--ar 1:1` (квадрат для Instagram carousel)
- **Style:** `--style raw` (натуральный, не stylized)
- **Version:** `--v 7` (последняя версия Midjourney на май 2026)
- **Quality:** default (`--q 1`)

**Negative prompts** (то, чего ИЗБЕГАТЬ — добавлены в каждый промпт):
- no text, no logos, no chakras, no mandalas, no lotus, no Sanskrit
- no crystals, no neon, no HDR, no oversaturation
- no smiling, no posed expressions, no spiritual influencer poses

---

## Как присылать готовые изображения мне

После того как сгенерируешь и скачаешь все 6:

**Вариант А:** Сохрани файлы в:
```
~/alignment-app/authentic_tantra_ai/content/instagram/2026-05/post-2-emptiness/midjourney-bg/
```
Назови как `bg-1.png`, `bg-2.png`, ..., `bg-6.png`. Скажи мне «фоны готовы». Я скомпоную с текстом и пересохраню slides.

**Вариант Б:** Просто прикрепи 6 PNG в чат — я скачаю и положу куда надо.

---

# Промпты

---

## Слайд 1 · «Это история одного утра»

**Концепт:** Утренний ритуал. Чашка чая на подоконнике в момент рассвета. Тёплый свет, тишина, начало дня.

**Текст потом ляжет:** в нижней трети слайда (editorial poster style)

```
a single white ceramic cup of tea with steam rising slowly on a wooden windowsill at dawn, soft warm horizontal morning light streaming from the right, blurred branches outside the window, cream linen curtain edge visible, intimate observational composition, lots of negative space in the lower portion of the frame for text, slow living mood, A24 cinematography, shot on Mamiya 7 medium format with Kodak Portra 400 film, Sarah Moon and Sofia Coppola photography influence, warm cream and taupe palette, deep charcoal shadows, single soft natural light source, no text, no logos, no symbols, no chakras, no mandalas, no smiling --ar 1:1 --style raw --v 7
```

---

## Слайд 2 · «Я проснулась в кровати, в которой стоило бы хотеть проснуться»

**Концепт:** Спальня утром. Смятая постель, мягкий свет через окно. Никого в кадре. Атмосфера «всё есть, но что-то не так».

**Текст потом ляжет:** в центре кадра, на нейтральной области

```
an unmade bed with crumpled cream linen sheets in soft morning light, single window on the left edge of the frame letting in warm horizontal light, blurred branches outside, dark wooden floor with subtle texture, intimate domestic environment, no people, slow living mood, lots of negative space in the center for text overlay, A24 cinematography, shot on Mamiya 7 with Kodak Portra 400 film, Sofia Coppola lighting, warm cream and taupe palette, deep charcoal shadows in the corners, single soft natural light source, no text, no logos, no symbols --ar 1:1 --style raw --v 7
```

---

## Слайд 3 · «И вдруг — впервые честно — почувствовала, что у меня нет ни одного желания»

**Концепт:** Очень интимная сцена. Одна горящая свеча в почти-тёмной комнате. Внутренний фокус, vignette-feel.

**Текст потом ляжет:** в центре, в тёплом пятне света от свечи

**Note:** Original prompt with «Bill Henson» reference was filtered by Midjourney (his name triggers content moderation). Replaced with cleaner version below.

```
intimate close-up photograph of a single beeswax candle burning on a dark wooden table, the flame as the only light source, soft amber glow on the wood surface, deep warm shadows surrounding, lots of negative space, slow living atmosphere, A24 cinematography, shot on Mamiya 7 medium format with Kodak Portra 400 film, Sarah Moon photography influence, warm cream and amber highlights, deep charcoal shadows, no text, no logos, no symbols --ar 1:1 --style raw --v 7
```

**Если эта версия не пошла — fallback простой:**

```
a single lit candle on a dark wooden table, soft warm flame light, deep dark surroundings, intimate close-up photograph, A24 cinematography, Kodak Portra 400 film, warm cream highlights, deep charcoal shadows, lots of negative space, no text, no logos --ar 1:1 --style raw --v 7
```

---

## Слайд 4 · «Не „нет желаний из списка". Не „ничего нового не хочется". А — буквально — нет того, ради чего вставать»

**Концепт:** Огромная пустота. Тихое море на рассвете, единственная линия горизонта. Простор как метафора внутренней пустоты.

**Текст потом ляжет:** в нижней половине, над «земной» частью

```
a vast still ocean at dawn with a single distant horizon line, faded sun barely visible in the misty sky, no waves, deeply tranquil and slightly melancholic atmosphere, soft warm gradient in the sky from cream to peach, deeper warm tones in the water below, no human figures, no boats, lots of negative space in the lower water portion for text overlay, slow living minimal mood, A24 cinematography, shot on Mamiya 7 with Kodak Portra 400 film, Andrei Tarkovsky landscape feel, warm cream and taupe palette, single soft natural light source, no text, no logos, no symbols --ar 1:1 --style raw --v 7
```

---

## Слайд 5 · «Снаружи у меня было всё. Внутри — ничего.»

**Концепт:** Литеральный визуальный split. Один кадр, в котором левая половина — солнечный наружный мир, правая — тёмный интерьер. Через дверной проём или окно.

**Текст потом ляжет:** «Снаружи» на левой светлой стороне, «Внутри» на правой тёмной

```
a still photograph divided in half by a vertical doorway frame in the exact center, the left half showing a bright sunlit outdoor terrace with greenery and warm afternoon light, the right half showing a dim interior room with deep warm shadows and barely any light, sharp visual contrast between the two halves, no human figures, intimate observational composition, slow living mood, A24 cinematography, shot on Mamiya 7 with Kodak Portra 400 film, Pawel Pawlikowski Cold War cinematography influence, warm cream highlights on the left, deep charcoal shadows on the right, no text, no logos, no symbols --ar 1:1 --style raw --v 7
```

---

## Слайд 6 · «Так начался путь домой»

**Концепт:** Открытый дверной проём с тёплым светом, льющимся изнутри. Сакральное пространство, начало пути.

**Текст потом ляжет:** в центре, в свете дверного проёма + brass линия снизу

**Note (updated 2026-05-20):** Original longer version with «intimate threshold» / «sacred mood» / photographer name was rejected by Midjourney. Replaced with cleaner version.

```
photograph of an open wooden doorway in a dim interior, warm golden light streaming through from another room, deep charcoal shadows on the walls, soft warm glow framing the doorway, A24 cinematography, shot on Kodak Portra 400 film, warm cream and amber highlights, lots of negative space in the central glow, no text, no logos --ar 1:1 --style raw --v 7
```

**Если эта версия тоже не пошла — fallback простой:**

```
an open wooden doorway with warm golden light streaming through, dim interior, deep dark shadows, A24 cinematography, Kodak Portra 400 film, warm amber glow, lots of negative space, no text, no logos --ar 1:1 --style raw --v 7
```

**Если и проще не работает — альтернативный угол (фокус на свете):**

```
soft warm light spilling from an open doorway into a dim room at dusk, deep charcoal shadows on wooden walls, glowing amber backlight, slow living atmosphere, A24 cinematography, shot on Kodak Portra 400 film, warm cream and amber palette, lots of negative space in the center, no text, no logos --ar 1:1 --style raw --v 7
```

---

# Что делать дальше

1. **Запусти все 6 промптов** (порядок не важен, можно параллельно если на web app)
2. **Из каждого** выбери лучший вариант из 4 → upscale → скачай PNG
3. **Сохрани файлы** в папку `/content/instagram/2026-05/post-2-emptiness/midjourney-bg/` с именами `bg-1.png` ... `bg-6.png` (или прикрепи в чат)
4. **Скажи мне «фоны готовы»**
5. Я скомпоную **Cormorant Garamond текст** на каждом фоне с правильной позицией и контрастом, пересохраню как финальные slides

---

# Tips for using Midjourney

- **Если результат не нравится** — нажми Reroll (🔄) — Midjourney сгенерирует 4 новых варианта
- **Если хочется variation** конкретного варианта — V1/V2/V3/V4 (variation, не upscale)
- **Если хочется регулировать atmosphere** — добавь в конец промпта `--chaos 25` (более dramatic) или `--stylize 250` (более artistic)
- **Если нужно теплее/холоднее** — измени слова: «warm cream and amber» → «cooler ivory and pearl»
- **Для большей дрaмы** — добавь `--style raw --v 7 --weird 100` (но осторожно — может уйти в strange)

Для нашего бренда — лучше всего **default settings + --style raw**. Не экспериментируй слишком сильно — мы хотим cinematic editorial, не surreal art.
