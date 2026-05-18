# Facebook Event Cover

Адаптация постера / аватарки V4 в landscape-формате для обложки события на Facebook.

---

## Файл

**`v1-fb-event-cover.png`** — 1920×1080 px

### Что внутри

- **AUTHENTIC TANTRA** wordmark по центру наверху — **44px** (в 2× больше, чем на аватарке) для лучшей читаемости
- **Body. Breath. Heart.** italic Cormorant Garamond 184px, в три строки, по левой стороне
- **Фото Виктории** справа, лицо на ~78% по горизонтали (правая половина композиции)
- **«Weekly gathering · Every Monday · 18:30 · Details in Telegram»** — слева внизу под тонкой латунной чертой
- Cinematic тёмная вуаль с градиентом — тяжелее слева (читаемость текста), легче справа (лицо в свете)

---

## Технические заметки про формат

**Facebook event cover спецификация:** 1920×1005 px (соотношение 1.91:1)
**Наш файл:** 1920×1080 px (true 16:9)

**Разница:** 7% по высоте. Что произойдёт:
- На десктопе Facebook покажет всю обложку целиком (с лёгким letterbox сверху/снизу 37px) — это **норма**
- На мобильном Facebook может слегка обрезать сверху и снизу
- Все важные элементы помещены в центральную safe-zone — НИЧЕГО не обрежется

Если хочешь точно под FB-спек (1920×1005) — скажи, перерендерю.

---

## Куда ещё подходит этот формат 1920×1080

Тот же файл можно использовать для:
- **YouTube canal art** (с центральной safe-zone)
- **LinkedIn personal cover** (если решишь добавить LinkedIn)
- **Eventbrite** event cover
- **Любой landscape header** на ваших площадках
- **Печать** — A2 landscape (594×420 mm при 80 dpi)

---

## Как поставить на Facebook event

1. Создай событие на Facebook
2. На странице «Edit event» → **Add Cover Photo**
3. Загрузи `v1-fb-event-cover.png`
4. Facebook покажет preview — проверь, что текст читается на мобильном (нажми «See mobile preview»)
5. Save

---

## Если нужны правки

- **Русская версия** («Тело. Дыхание. Сердце.» + «Каждый понедельник» + «Подробности в Telegram») — скажи, сделаю
- **Без указания дня** — заменю на «Weekly gathering» только
- **Другая crop-позиция фото** — `background-position: 78% 30%` → измени, перерендерю
- **Точный FB формат 1920×1005** — перерендерю с обрезкой safe-zone
- **Версия без bottom-meta** — только wordmark + title, без даты и времени

---

## Регенерация

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless=new --disable-gpu --hide-scrollbars \
  --window-size=1920,1080 \
  --screenshot=v1-fb-event-cover.png \
  --virtual-time-budget=5000 \
  file:///path/to/v1-fb-event-cover.html
```
