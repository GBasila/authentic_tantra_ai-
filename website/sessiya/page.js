/* ─────────────────────────────────────────────────────────────
   /sessiya/ — Page-specific JS
   Application form handling (Formspree + mailto fallback)
   Reveal animation is inherited from ../script.js
   ───────────────────────────────────────────────────────────── */

(() => {
  "use strict";

  const form = document.querySelector(".ses-form");
  if (!form) return;

  const action = form.getAttribute("action") || "";
  const isPlaceholder = action.includes("REPLACE_WITH_YOUR_FORM_ID");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const name      = (data.get("name") || "").toString().trim();
    const email     = (data.get("email") || "").toString().trim();
    const format    = (data.get("format") || "").toString().trim();
    const bringing  = (data.get("bringing") || "").toString().trim();
    const hoping    = (data.get("hoping") || "").toString().trim();
    const scholar   = (data.get("scholarship") || "no").toString().trim();

    if (!name || !email || !bringing) {
      alert("Заполните, пожалуйста, имя, email и первый вопрос.");
      return;
    }

    /* Mailto fallback when Formspree isn't connected yet */
    if (isPlaceholder) {
      const subject = encodeURIComponent("Заявка на индивидуальную сессию");
      const body = encodeURIComponent(
        `Имя: ${name}\n` +
        `Email: ${email}\n` +
        `Формат: ${format}\n` +
        `Стипендия: ${scholar}\n\n` +
        `Что приводит сюда:\n${bringing}\n\n` +
        `Что надеется встретить:\n${hoping}`
      );
      window.location.href = `mailto:hello@authentictantra.com?subject=${subject}&body=${body}`;
      return;
    }

    /* Real submission via Formspree */
    const btn = form.querySelector("button[type=submit]");
    const orig = btn ? btn.textContent : "";
    if (btn) { btn.textContent = "отправляю…"; btn.disabled = true; }

    try {
      const res = await fetch(action, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (res.ok) {
        form.innerHTML = `
          <div class="ses-form__success">
            Спасибо. Я прочитала вашу заявку.<br />
            Отвечу лично в течение двух-трёх дней.
          </div>
        `;
        // Scroll to top of form so success message is visible
        form.scrollIntoView({ behavior: "smooth", block: "center" });
      } else {
        throw new Error("submit failed");
      }
    } catch (err) {
      if (btn) { btn.textContent = orig; btn.disabled = false; }
      alert("Что-то не получилось. Напишите мне на hello@authentictantra.com");
    }
  });

})();
