# Website · Аутентичная Тантра v1.0

> «Тут нечему учиться — здесь есть лишь то, что нужно вспомнить.»

Одностраничный сайт бренда. Чистый HTML/CSS/JS, без фреймворков, без сборки.

---

## Структура

```
website/
├── index.html              # единственная страница
├── styles.css              # все стили
├── script.js               # минимум JS (reveal, video, form)
│
├── assets/
│   ├── photos/             # 5 фото (см. PHOTOS_NEEDED.md)
│   └── video/
│       ├── hero.mp4        # hero-видео H.264 (все браузеры)
│       ├── hero.webm       # hero-видео VP9 (лучшее сжатие для Chrome/Firefox)
│       └── hero-poster.jpg # постер до загрузки видео
│
├── PHOTOS_NEEDED.md        # инструкция Виктории: какие фото с какими именами
├── DEPLOY.md               # инструкция по деплою на Vercel
└── README.md               # этот файл
```

---

## Локальный запуск

Двойной клик по `index.html` — сайт откроется в браузере. Видео и фото будут работать сразу.

Для теста с локальным сервером (для form testing):
```bash
cd website
python3 -m http.server 8000
# открой http://localhost:8000
```

---

## Перед деплоем — чек-лист

- [ ] Все 5 фото сохранены в `assets/photos/` (см. `PHOTOS_NEEDED.md`)
- [ ] В `index.html` заменён `REPLACE_WITH_YOUR_FORM_ID` на ID Formspree
- [ ] Telegram/Instagram ссылки в футере проверены
- [ ] Email `hello@authentictantra.com` подключён или заменён
- [ ] Открыли сайт локально, проверили в Chrome + Safari + на телефоне

---

## Деплой

См. `DEPLOY.md`. Кратко: подключить репозиторий к Vercel, указать root directory = `website`, всё остальное по умолчанию. Бесплатно. SSL автоматический.

---

## Принципы дизайна

Каждое решение в этом коде сделано в соответствии с `/brand/visual_direction.md` и `/brand/tone_of_voice.md`. Если что-то меняется здесь — это должно быть консистентно с бренд-буком.

- **Палитра:** `--c-cream` / `--c-charcoal` / `--c-terra` / `--c-brass` / `--c-stone`
- **Шрифты:** Cormorant Garamond (display) + Inter (body)
- **Никаких:** восклицательных знаков, эмодзи, поп-апов, счётчиков, чакр, лотосов
- **Reveal:** мягкий fade-in при скролле (1.4s), `prefers-reduced-motion` уважается

---

## Будущие версии

**v1.1** (после деплоя):
- Подключить Formspree → реальная email-форма
- Favicon
- Аналитика (Plausible / Umami)

**v2.0** (через ~6 недель — когда будет flagship):
- Отдельная страница `/о-курсе/` для «Дыхание возвращения»
- Application form для retreat
- Подкаст-страница
- Multi-page архитектура

**v3.0** (год 2):
- Английская версия (`/en/`)
- Магазин (Stripe Checkout)
- Members area
