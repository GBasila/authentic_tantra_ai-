/* ─────────────────────────────────────────────────────────────
   /krug/ — Page-specific JS
   The Return Circle application form (Formspree + mailto fallback)
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
    const name       = (data.get("name") || "").toString().trim();
    const email      = (data.get("email") || "").toString().trim();
    const telegram   = (data.get("telegram") || "").toString().trim();
    const timezone   = (data.get("timezone") || "").toString().trim();
    const bringing   = (data.get("bringing") || "").toString().trim();
    const hoping     = (data.get("hoping") || "").toString().trim();
    const commitment = (data.get("commitment") || "").toString().trim();
    const currency   = (data.get("currency") || "USD").toString().trim();

    if (!name || !email || !bringing || !commitment) {
      alert("Заполните, пожалуйста, имя, email, первый вопрос и ваш ответ про готовность к ежедневной практике.");
      return;
    }

    /* Mailto fallback when Formspree isn't connected yet */
    if (isPlaceholder) {
      const subject = encodeURIComponent("Заявка в Круг Возвращения");
      const body = encodeURIComponent(
        `Имя: ${name}\n` +
        `Email: ${email}\n` +
        `Telegram / WhatsApp: ${telegram}\n` +
        `Часовой пояс: ${timezone}\n` +
        `Готовность к ежедневной практике: ${commitment}\n` +
        `Валюта оплаты: ${currency}\n\n` +
        `Что приводит в Круг:\n${bringing}\n\n` +
        `Что хочется почувствовать к 28-му дню:\n${hoping}`
      );
      window.location.href = `mailto:9261501111v@gmail.com?subject=${subject}&body=${body}`;
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
            Отвечу лично в течение двух-трёх дней<br />
            с реквизитами для оплаты и приглашением в группу.
          </div>
        `;
        form.scrollIntoView({ behavior: "smooth", block: "center" });
      } else {
        throw new Error("submit failed");
      }
    } catch (err) {
      if (btn) { btn.textContent = orig; btn.disabled = false; }
      alert("Что-то не получилось. Напишите мне на 9261501111v@gmail.com");
    }
  });

})();
