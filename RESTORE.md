# RESTORE — Полное восстановление проекта в новом окружении

> Этот файл — **резервная копия знаний** о проекте. Из него можно полностью восстановить работу:
> - на новом компьютере
> - в новом Claude-аккаунте
> - другим собеседником/коллаборатором
>
> Прочитайте этот файл целиком — потом следуйте инструкциям.
> Дата создания: 2026-05-30 · Последняя редакция: 2026-05-30

---

# 1. ЧТО ЭТО ЗА ПРОЕКТ

**Аутентичная Тантра / Authentic Tantra** — премиум-бренд телесной практики в традиции Каула, ведущая — **Виктория**.

Категория: «Conscious Embodiment for Accomplished Souls».

Полное описание бренда, аватаров, голоса — в `/CLAUDE.md` (главный файл, который читается Claude Code при старте сессии).

---

# 2. ВСЁ ХРАНИТСЯ НА GITHUB

**Репозиторий:** [github.com/GBasila/authentic_tantra_ai-](https://github.com/GBasila/authentic_tantra_ai-)
**Видимость:** Public (но изменить на Private не помешает)
**Владелец:** GBasila
**Ветка:** `main`

**Клонировать на новом компьютере:**

```bash
git clone https://github.com/GBasila/authentic_tantra_ai-.git
cd authentic_tantra_ai-
```

Это полная копия проекта. Всё что мы делали — есть в коммитах.

---

# 3. КАК ПОДНЯТЬ В НОВОМ CLAUDE-АККАУНТЕ

### Шаг 1 · Установить Claude Code

```bash
npm install -g @anthropic-ai/claude-code
```

(Если нет npm — установить Node.js с [nodejs.org](https://nodejs.org))

### Шаг 2 · Авторизоваться

```bash
claude
```

Откроется браузер с `/login`. Авторизуйся в любом Claude-аккаунте.

### Шаг 3 · Клонировать репо

```bash
git clone https://github.com/GBasila/authentic_tantra_ai-.git
cd authentic_tantra_ai-
```

### Шаг 4 · Запустить Claude Code в проекте

```bash
claude
```

Claude Code **автоматически прочитает** `/CLAUDE.md` и получит полный контекст: бренд-идентичность, голос, аватары, что построено, что в работе, какие ограничения. Можно начинать разговор как обычно.

**Первое сообщение Claude:**
> «Прочитай CLAUDE.md и RESTORE.md и скажи мне где мы сейчас. Что готово, что в работе.»

---

# 4. ВНЕШНИЕ СЕРВИСЫ — СОСТОЯНИЕ И ДОСТУПЫ

| Сервис | Статус | Аккаунт / ID | Что хранит |
|---|---|---|---|
| **GitHub** | ✅ Active | `GBasila/authentic_tantra_ai-` | Весь код, контент, стратегия |
| **Vercel** | ✅ Deployed | подключён к GitHub | Сайт `authentic-tantra-ai.vercel.app` (автодеплой по push в main) |
| **Домен** | ❌ Не куплен | — | Будет: `authentictantra.com` (через Namecheap, ~€12/год) |
| **Email бренда** | ❌ Не настроен | — | Будет: `hello@authentictantra.com` (Google Workspace) |
| **Kit (ConvertKit)** | ✅ Active | `9261501111v@gmail.com` | Lead Magnet sequence «5 дней возвращения в тело», 6 писем |
| **Kit Form ID** | ✅ | `9482067` | Подписка через сайт `/website/index.html` |
| **Kit Tag** | ✅ | `5-day-challenge` | Применяется автоматизацией |
| **Formspree** | ✅ Active | `9261501111v@gmail.com` | Заявки на 1:1 и Круг |
| **Formspree Form ID** | ✅ | `xqejywdz` | Один эндпоинт на оба `/sessiya/` и `/krug/` |
| **Instagram** | 🟡 Существует | `@viktorynox` | Личный профиль Виктории |
| **Telegram канал** | 🟡 Existing | `@authentictantra_ru` | Основной канал бренда (RU) |
| **Telegram личный** | 🟡 | `@AuthenticTantra` | для рассылки QR |
| **Stripe** | ❌ Не настроен | — | Для оплаты курса €450 (нужно сделать) |
| **Zoom Pro** | ❌ Не настроен | — | Для мастер-класса + 8 еженедельных созвонов |
| **Anchor / Buzzsprout** | ❌ Не настроен | — | Для подкаста «Тантра без мистики» |

### Доступы (запиши в свой password manager — НЕ в этот файл)

Этот файл — публичный (репо `Public` или может стать). **НЕ записывайте сюда пароли**.

Записать в 1Password / Apple Keychain / Bitwarden:
- Логин/пароль Kit
- Логин/пароль Formspree
- Логин/пароль Vercel
- GitHub Personal Access Token (если используется)
- Apple ID для iCloud (фото)

---

# 5. ГДЕ ХРАНЯТСЯ ИСХОДНЫЕ ФОТО

**Веб-оптимизированные** (в репо, под Git):
```
/website/assets/photos/
  victoria-portrait-sofa.jpg          ← IMG_3550 (главное портрет, тёплый свет)
  victoria-portrait-eyes-closed.jpg   ← портрет с закрытыми глазами
  retreat-circle.jpg                  ← круг участников
  retreat-group.jpg
  retreat-space-candles.jpg
  victoria-back-altar.jpg
  krug-altar-circle.jpg               ← IMG_6877 (круг у алтаря)
```

**Полные оригиналы** — НЕ в репо (тяжёлые), хранятся:
```
/Users/vicky/alignment-app/authentic_tantra_ai/content/instagram/highlights/source-photos/
  Портреты Виктории/IMG_3550.JPG
  _review/altar/IMG_6877.jpg
  и др.
```

**Архив всех оригиналов** должен быть в:
- iCloud Photos (личный)
- ИЛИ внешний диск с резервной копией
- ИЛИ Dropbox / Google Drive с приватной папкой

Если съёмки потеряются — фотобанк создаётся заново.

---

# 6. ПРОДУКТЫ И ЦЕНЫ (актуально на 2026-05-30)

| Продукт | Длительность | Цена | Статус |
|---|---|---|---|
| **Пять дней возвращения в тело** (Lead Magnet) | 5 дней | бесплатно | ✅ Запущен (Kit Sequence) |
| **Индивидуальная сессия 1:1** | 75 мин | €200 | ✅ Принимает заявки (`/sessiya/`) |
| **Сопровождение · 3 месяца** | 6 сессий + Telegram | €1500 | ✅ Принимает заявки |
| **Сопровождение · 6 месяцев** | 12 сессий + Telegram | €2800 | ✅ Принимает заявки |
| **Аутентичная Глубина** (флагман) | 8 недель | €450 | 🟡 Готов к запуску, ждёт даты старта |

**Лимит:** не более 4 человек одновременно в сопровождении. 12-15 женщин в когорте Аутентичной Глубины.

---

# 7. КЛЮЧЕВЫЕ ФАЙЛЫ — ЧТО ЧИТАТЬ ПЕРВЫМ ДЕЛОМ

### Если ты — новый Claude в новой сессии

1. **`/CLAUDE.md`** — главный onboarding-файл (28KB). Содержит: что за проект, кто Виктория, какие аватары, что готово, что в работе, бренд-голос, запрещённые фразы.
2. **`/RESTORE.md`** — этот файл.
3. **`/brand/brand_identity.md`** — DNA бренда.
4. **`/brand/tone_of_voice.md`** — голос.

### Если ты — Виктория или новый коллаборатор

1. **`/CLAUDE.md`** — обзор всего проекта.
2. **`/launches/2026_q3_authentic_awakening/`** — текущий запуск:
   - `README.md` — стратегия
   - `sales_page.md` — продающий текст
   - `personal_invitations.md` — шаблоны личных приглашений
   - `masterclass_structure.md` — поминутный сценарий эфира
   - `content_posts_14_days.md` — 14 готовых постов
   - `day_1_telegram_script.md` — первый пост детально
   - `Tracker_Autentichnaya_Glubina.xlsx` — трекер контактов
   - `closing_email.md` — финальное письмо
   - `faq.md` — ответы на возражения
   - `checklist_4_weeks.md` — операционный чек-лист

---

# 8. ЧТО УЖЕ ПОСТРОЕНО (по состоянию на 2026-05-30)

### 🌐 Сайт
- 5 страниц на `authentic-tantra-ai.vercel.app` (RU + EN):
  - `/` — главная (founder story, lead magnet)
  - `/sessiya/` — 1:1 сессия + сопровождение (€200 / €1500 / €2800)
  - `/krug/` — Аутентичная Глубина (8 недель, €450)
  - `/en/...` — английские версии
- Единая навигация на всех страницах
- Формы подключены к Formspree (заявки) и Kit (lead magnet)

### 📦 Бренд-материалы
- `/website/assets/brand/poster-drafts/` — 2 еженедельных постера (RU+EN, 1080×1350)
- `/website/assets/brand/fb-cover/` — обложка для Facebook events
- `/website/assets/brand/tg-avatar-photo/` — аватар Telegram-канала
- `/website/assets/brand/logo/` — логотип v1 (placeholder, будет после финализации)

### 🚀 Lead Magnet «Пять дней возвращения в тело»
- 6 писем (welcome + 5 days) в Kit Sequence
- Отправка в 7:00 МСК
- Подключена форма на сайте
- Аудио-практики **не записаны** (placeholder URLs в письмах)

### 📜 Контент готов
- `/content/lead-magnet/` — полный текст 6 писем
- `/content/instagram/2026-05/` — 20 готовых постов IG (4 недели)
- `/content/instagram/2026-05/reels-shooting/` — 13 сценариев Reels
- `/content/telegram/` — стратегия канала + 10 launch-постов
- `/content/instagram/2026-05/post-2-emptiness/slides/` — 6 готовых слайдов «карусели Пустоты»

### 🎯 Запуск Аутентичной Глубины (Q3 2026)
Всё подготовлено, ждёт даты старта. Описано в `/launches/2026_q3_authentic_awakening/`.

---

# 9. ЧТО ОТКРЫТО / БЛОКЕРЫ

🔴 **Имя бренда** — «Authentic Tantra» уже зарегистрировано как товарный знак. Нужно либо:
- Выбрать новое имя (мы обсуждали Spanda, Bhava, Rasa, Hearth, Nega — финал не выбран)
- ИЛИ оспорить trademark
- ИЛИ работать в другой юрисдикции

🔴 **Дата старта первой когорты Аутентичной Глубины** — не назначена. Нужно: выбрать день, объявить в первом посте.

🔴 **Согласие на 2 отзыва** — нужно лично написать 2 ученицам офлайн-групп. Шаблон в `personal_invitations.md`.

🟡 **Stripe для оплаты €450** — не подключён. Альтернативы: ЮKassa, CloudPayments, PayPal Business.

🟡 **Zoom Pro** — не оплачен ($15/мес). Нужен для мастер-класса и 8 созвонов.

🟡 **Аудио-практики Lead Magnet** — не записаны. 5 скриптов в `/content/lead-magnet/audio-scripts.md`. Заменить `AUDIO_URL_DAY_N` placeholder в Kit на реальные ссылки после записи.

🟡 **Домен `authentictantra.com`** — не куплен. €12/год через Namecheap.

🟡 **Email бренда** `hello@authentictantra.com` — не настроен. Google Workspace.

🟡 **Логотип** — есть v1 из OpenAI (растровый). Нужны векторные файлы (SVG). Бюджет: $80-150 у дизайнера на Fiverr/Upwork.

---

# 10. КАК ДЕЛАЕМ КОММИТЫ

Конвенция (из `/CONTRIBUTING.md`):

| Префикс | Когда |
|---|---|
| `seed:` | Первая создача файла |
| `feat:` | Новая возможность |
| `update:` | Доработка существующего |
| `fix:` | Исправление |
| `content:` | Контентная работа |
| `strategy:` | Стратегическая правка |
| `agent:` | Изменение AI-агента |
| `listen:` | Аудитория-инсайт |
| `reflect:` | Ретроспектива |
| `release:` | Версионная веха |

**Команда коммита (Виктория):**

```bash
cd /Users/vicky/alignment-app/authentic_tantra_ai && \
git add <files> && \
git -c user.name="Victoria" -c user.email="victoria@authentictantra.local" \
  commit -m "feat: short message

Detailed body if needed.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>" && \
git push origin main
```

**Sabbath rhythm:** никаких пушей по субботам (правило бренда).

---

# 11. RECENT COMMITS (последние 20)

```
20e442e feat(launch): toolkit for Аутентичная Глубина · Поток 1
5b92a4e design(posters): IMG_3550 + bigger text + drop Monday variants
bcc888b feat(sessiya): full restructure — outcomes + mentorship + founder line
7bc4a38 feat(copy): position lines on /sessiya/ + /krug/ + EN tweak
8764a6a fix(copy): label rhythm 'Тантра · Традиция Каулы' + simplify Kaula → tradition
136f2d0 fix(tagline): consistent label rhythm — Тантра · Традиция Каулы
e89b43d fix(portrait-caption): three-part label · ПРОВОДНИК · ТРАДИЦИЯ КАУЛЫ
dae9d01 content(inspiration): swipe-file system for saved references
6c3cb09 rename(brand): Аутентичное Пробуждение → Аутентичная Глубина + 4wk→8wk
ee68fad rename(brand): Круг Возвращения → Аутентичная Глубина + swap portraits
4fff1d3 content(ig): Post 2 emptiness — 6 final slides with Cormorant text
feec7bd feat(launch): brand audit pass v3 — 4 polish refinements
d754c82 fix(launch): brand audit pass v1 — 5 critical fixes
dbfb0e8 feat(en): full English Return Circle page + fix EN nav drop into RU
fe8b8f7 feat(krug): add altar circle photo as standalone section
49e1bf7 feat(krug): cinematic altar-photo hero — temple atmosphere
a26d7b9 feat(sessiya): add Victoria's portrait — quiet meeting before the practice
99d6d54 feat(nav): brand-aligned site navigation across all 5 pages
1fefb77 feat(forms): wire 1:1 + Krug application forms to Formspree
c73947a feat(lm): wire website lead-magnet form to Kit
```

История полного git log: `git log --oneline`

---

# 12. КАК ЛОКАЛЬНО ЗАПУСТИТЬ САЙТ

```bash
cd /Users/vicky/alignment-app/authentic_tantra_ai/website
python3 -m http.server 8000
# открыть http://localhost:8000
```

Любые изменения — refresh браузера.

---

# 13. ЕСЛИ ВСЁ ИДЁТ ПЛОХО — АВАРИЙНОЕ ВОССТАНОВЛЕНИЕ

Если случайно сломалось/потерялось:

```bash
# Откатить локальные изменения (всё что не закоммичено)
cd /Users/vicky/alignment-app/authentic_tantra_ai
git restore .

# Откатить к последнему пушу
git fetch origin main
git reset --hard origin/main

# Если совсем плохо — переклонировать заново
cd ~/alignment-app
mv authentic_tantra_ai authentic_tantra_ai-broken
git clone https://github.com/GBasila/authentic_tantra_ai-.git authentic_tantra_ai
```

Сайт на Vercel в это время продолжает работать с последнего пуша.

---

# 14. CONTACT POINT

Если совсем застряли с восстановлением:

- GitHub repo issue: [github.com/GBasila/authentic_tantra_ai-/issues](https://github.com/GBasila/authentic_tantra_ai-/issues)
- Personal email Виктории: `9261501111v@gmail.com`
- Telegram: `@AuthenticTantra`

---

# 15. ВАЖНЫЕ ФАЙЛЫ-СПРАВОЧНИКИ

Для каждой задачи смотри:

| Задача | Файл |
|---|---|
| Что за бренд | `/CLAUDE.md` + `/brand/brand_identity.md` |
| Голос бренда | `/brand/tone_of_voice.md` |
| Запрещённые слова | `/brand/tone_of_voice.md` + `/CLAUDE.md` секция 7 |
| Кто наша аудитория | `/audience/client_avatar.md` |
| Что сейчас в работе | `/strategy/90_day_plan.md` |
| Запуск Q3 2026 | `/launches/2026_q3_authentic_awakening/README.md` |
| 14 готовых постов | `/launches/2026_q3_authentic_awakening/content_posts_14_days.md` |
| Сценарий мастер-класса | `/launches/2026_q3_authentic_awakening/masterclass_structure.md` |
| Трекер контактов | `/launches/2026_q3_authentic_awakening/Tracker_Autentichnaya_Glubina.xlsx` |
| Контент-план IG | `/content/instagram/2026-05/README.md` |
| Lead Magnet письма | `/content/lead-magnet/emails.md` |
| Inspiration library | `/content/inspiration/saved-posts.md` |

---

# ИТОГ

Если ты прочитал этот файл — у тебя есть полная карта проекта.

- **Где код:** GitHub.
- **Где контекст для Claude:** `/CLAUDE.md` (автозагрузка).
- **Где состояние внешних сервисов:** секция 4 этого файла.
- **Где блокеры:** секция 9 этого файла.
- **Что делать прямо сейчас:** секция 8 (готово) + 9 (что осталось).

Удачи. Бренд в твоих руках.

> «Тут нечему учиться — здесь есть лишь то, что нужно вспомнить.»
