/* ─────────────────────────────────────────────────────────────
   Аутентичная Тантра · script.js
   Минимум JavaScript — только то, что нельзя сделать CSS.
   ───────────────────────────────────────────────────────────── */

(() => {
  "use strict";

  /* ─── 1. Reveal on scroll ───────────────────────────────────
     Каждая секция с [data-reveal] плавно проявляется, когда
     попадает в viewport.
  */
  const reveal = () => {
    const items = document.querySelectorAll("[data-reveal]");
    if (!items.length) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      items.forEach((el) => el.classList.add("is-revealed"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    items.forEach((el) => io.observe(el));
  };

  /* ─── 2. Hero video — graceful fallback ─────────────────────
     На некоторых mobile-устройствах autoplay может быть запрещён
     даже с muted+playsinline. В этом случае оставляем постер.
  */
  const heroVideo = () => {
    const video = document.querySelector(".hero__video");
    if (!video) return;

    const tryPlay = () => {
      const p = video.play();
      if (p && typeof p.catch === "function") {
        p.catch(() => {
          // тихо. постер остаётся видимым.
        });
      }
    };

    if (video.readyState >= 2) tryPlay();
    else video.addEventListener("loadeddata", tryPlay, { once: true });

    // Пауза, когда вкладка не видна — сохраняет батарею
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) video.pause();
      else tryPlay();
    });
  };

  /* ─── 3. Magnet form — мягкая обработка отправки ─────────────
     Если Formspree ещё не подключён (плейсхолдер в action), то
     fallback на mailto. Если подключён — нормальная отправка
     с человеческим сообщением вместо страницы-редиректа.
  */
  const magnetForm = () => {
    const form = document.querySelector(".magnet__form");
    if (!form) return;

    const action = form.getAttribute("action") || "";
    const isPlaceholder = action.includes("REPLACE_WITH_YOUR_FORM_ID");

    form.addEventListener("submit", async (e) => {
      const input = form.querySelector("input[type=email]");
      const email = (input && input.value || "").trim();
      if (!email) return;

      // Плейсхолдер: уходим в mailto
      if (isPlaceholder) {
        e.preventDefault();
        const subj = encodeURIComponent("Пять дней возвращения в тело");
        const body = encodeURIComponent(`Я хочу начать. Мой email: ${email}`);
        window.location.href = `mailto:9261501111v@gmail.com?subject=${subj}&body=${body}`;
        return;
      }

      // Боевой режим: Formspree через fetch — без редиректа
      e.preventDefault();
      const btn = form.querySelector("button");
      const originalBtn = btn ? btn.textContent : "";
      if (btn) { btn.textContent = "отправляю…"; btn.disabled = true; }

      try {
        const res = await fetch(action, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: new FormData(form),
        });

        if (res.ok) {
          form.innerHTML = `
            <p class="magnet__success">
              Спасибо. Первое письмо придёт завтра утром.
            </p>
          `;
        } else {
          throw new Error("submit failed");
        }
      } catch (err) {
        if (btn) { btn.textContent = originalBtn; btn.disabled = false; }
        alert("Что-то не получилось. Напишите мне на 9261501111v@gmail.com");
      }
    });
  };

  /* ─── 4. Init when DOM ready ────────────────────────────────*/
  const init = () => {
    reveal();
    heroVideo();
    magnetForm();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
