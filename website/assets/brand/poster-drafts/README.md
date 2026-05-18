# Poster — V3 Photo Overlay · 4 Variants

V3 (cinematic photo overlay) выбран как основной формат постера. Здесь 4 версии — комбинация языка и дня недели.

**Все 4:** 1080×1350 px · фото на весь холст · cream текст на тёмной вуали · QR на `t.me/authentictantra` · handle `@AuthenticTantra`.

---

## Файлы

| Файл | Язык | День | Подзаголовок |
|---|---|---|---|
| `v3-en-monday.png` | EN | Понедельник | «Every Monday» + «18:30 · Details in Telegram» |
| `v3-en-weekly.png` | EN | Без дня | «Weekly gathering» + «18:30 · Details in Telegram» |
| `v3-ru-monday.png` | RU | Понедельник | «Каждый понедельник» + «18:30 · Подробности в Telegram» |
| `v3-ru-weekly.png` | RU | Без дня | «Еженедельная встреча» + «18:30 · Подробности в Telegram» |

Title в EN: **Body. Breath. Heart.**
Title в RU: **Тело. Дыхание. Сердце.**

---

## Когда какую версию использовать

**EN-monday** — для **Instagram feed** на международную аудиторию + анонс конкретной недели
**EN-weekly** — для **главной страницы канала / pinned post** — без привязки к дню
**RU-monday** — для **Telegram канала** на русскоязычную аудиторию + конкретная неделя
**RU-weekly** — для **долгоиграющего поста** в канале (pin, без устаревания)

---

## Альтернативные layouts (на будущее)

В этой же папке остались HTML-исходники других вариантов:
- `v1-photo-dominant.html` — фото сверху, текст внизу (более «редакторский»)
- `v2-side-by-side.html` — текст слева, фото справа (magazine spread)

Их можно использовать как шаблоны для других объявлений. Если захочешь — пересоберу с новым QR за 1 минуту.

---

## Что заменить перед публикацией

### Если хочешь другое фото
Сохрани новое фото как:
```
/Users/vicky/alignment-app/authentic_tantra_ai/website/assets/photos/poster-victoria.jpg
```
Скажи Claude — обновлю путь в 4 HTML и перерендерю.

### QR
Сейчас ведёт на `https://t.me/authentictantra`. Если URL изменится — пересоздам за секунду.

---

## Технические спеки

- **Source HTML:** редактируется в любом editor
- **Render command:**
  ```bash
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
    --headless=new --disable-gpu --window-size=1080,1350 \
    --screenshot=v3-en-monday.png \
    file:///path/to/v3-en-monday.html
  ```
- **QR generation:**
  ```python
  python3 -c "import qrcode; qr = qrcode.QRCode(box_size=10, border=2);
  qr.add_data('https://t.me/authentictantra');
  qr.make_image(fill_color='#2B2A28', back_color='#F2EADF').save('qr-telegram.png')"
  ```
