// ---------- POPUP.JS - УНИВЕРСАЛЬНЫЙ ПОПАП ----------
(function () {
  "use strict";

  const popup = document.getElementById("universalPopup");
  const closeBtn = document.querySelector(".close-popup");

  // Формы внутри попапа
  const questionFormContainer = document.getElementById("popupQuestionForm");
  const coopFormContainer = document.getElementById("popupCoopForm");

  // Кнопки, вызывающие попап
  const questionBtns = document.querySelectorAll(".question-btn"); // кнопки "Задать вопрос"
  const coopBtns = document.querySelectorAll(".coop-popup-btn"); // кнопка "Стать партнёром"

  function openPopup(type) {
    if (!popup) return;

    // Показываем нужную форму, скрываем другую
    if (type === "question") {
      questionFormContainer.style.display = "block";
      coopFormContainer.style.display = "none";
    } else if (type === "coop") {
      questionFormContainer.style.display = "none";
      coopFormContainer.style.display = "block";
    }

    popup.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closePopup() {
    if (popup) {
      popup.classList.remove("active");
      document.body.style.overflow = "";
    }
  }

  // Обработчики для кнопок "Задать вопрос" (у них класс btn-outline или data-form-type)
  questionBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openPopup("question");
    });
  });

  // Кнопка "Стать партнёром"
  coopBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openPopup("coop");
    });
  });

  // Закрытие
  if (closeBtn) closeBtn.addEventListener("click", closePopup);
  if (popup)
    popup.addEventListener("click", (e) => {
      if (e.target === popup) closePopup();
    });

  // Закрытие по Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && popup && popup.classList.contains("active"))
      closePopup();
  });
})();
