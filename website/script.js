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

  /* ─── 4. Topbar — hamburger + scroll state ───────────────────
     - Toggles full-screen menu on mobile
     - Adds .is-scrolled to topbar past 80px scroll (deeper background)
     - Closes overlay on link click / Escape
     - Sets aria-expanded for accessibility
     - Highlights active page link based on current URL
  */
  const topbar = () => {
    const bar = document.querySelector(".topbar");
    if (!bar) return;

    const toggle = bar.querySelector(".topbar__toggle");
    const links  = bar.querySelectorAll(".topbar__list a");

    const closeMenu = () => {
      bar.classList.remove("is-menu-open");
      if (toggle) {
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Открыть меню");
      }
      document.body.style.overflow = "";
    };

    if (toggle) {
      toggle.addEventListener("click", () => {
        const willOpen = !bar.classList.contains("is-menu-open");
        bar.classList.toggle("is-menu-open", willOpen);
        toggle.setAttribute("aria-expanded", willOpen ? "true" : "false");
        toggle.setAttribute("aria-label", willOpen ? "Закрыть меню" : "Открыть меню");
        document.body.style.overflow = willOpen ? "hidden" : "";
      });
    }

    links.forEach((link) => link.addEventListener("click", closeMenu));

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && bar.classList.contains("is-menu-open")) {
        closeMenu();
      }
    });

    /* Scroll: solidify background past hero */
    let lastScrolled = false;
    window.addEventListener("scroll", () => {
      const shouldSolid = window.scrollY > 80;
      if (shouldSolid !== lastScrolled) {
        lastScrolled = shouldSolid;
        bar.classList.toggle("is-scrolled", shouldSolid);
      }
    }, { passive: true });

    /* Active state: highlight links matching current pathname */
    const path = window.location.pathname.replace(/\/$/, "") || "/";
    links.forEach((link) => {
      const href = link.getAttribute("href") || "";
      // skip hash-only links (#put etc.) — they're sections of home
      if (href.startsWith("#")) return;
      // normalise: "sessiya/" vs "/sessiya/" vs "sessiya"
      const targetPath = href.replace(/\/$/, "").replace(/^\.\//, "");
      if (path.endsWith("/" + targetPath) || path === "/" + targetPath) {
        link.classList.add("is-active");
      }
    });
  };

  /* ─── 5. Init when DOM ready ────────────────────────────────*/
  const init = () => {
    reveal();
    heroVideo();
    magnetForm();
    topbar();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
