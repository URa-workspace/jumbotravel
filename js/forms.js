// ---------- FORMS.JS - ОБРАБОТКА ФОРМ В ПОПАПЕ ----------
(function () {
  "use strict";

  // Форма "Задать вопрос"
  const questionForm = document.getElementById("questionFormPopup");
  if (questionForm) {
    questionForm.addEventListener("submit", function (e) {
      e.preventDefault();
      // Здесь можно добавить отправку на сервер через fetch

      questionForm.reset();
      alert("Спасибо! Мы свяжемся с вами в ближайшее время.");
      
      closePopupAfterSubmit(); // закрываем попап
    });
  }

  // Форма "Сотрудничество"
  const coopForm = document.getElementById("coopFormPopup");
  if (coopForm) {
    coopForm.addEventListener("submit", function (e) {
      e.preventDefault();

       coopForm.reset();
      alert("Заявка на сотрудничество отправлена! Мы ответим в течение дня.");
     
      closePopupAfterSubmit();
    });
  }

  // Функция закрытия попапа после отправки
  function closePopupAfterSubmit() {
    const popup = document.getElementById("universalPopup");
    if (popup) {
      popup.classList.remove("active");
      document.body.style.overflow = "";
    }
  }
})();
