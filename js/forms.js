// ---------- FORMS.JS - ОБРАБОТКА ФОРМ С ОТПРАВКОЙ НА send.php ----------
(function () {
  "use strict";

  // Функция отправки формы
  function submitForm(form, formType) {
    const formData = new FormData(form);
    formData.append("form_type", formType);

    // Отправка fetch
    fetch("send.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert(data.message);
          form.reset();
          // Закрываем попап, если форма внутри него
          const popup = document.getElementById("universalPopup");
          if (popup && popup.classList.contains("active")) {
            popup.classList.remove("active");
            document.body.style.overflow = "";
          }
        } else {
          alert(data.message);
        }
      })
      .catch((error) => {
        console.error("Ошибка:", error);
        alert("Произошла ошибка. Попробуйте позже или напишите в Telegram.");
      });
  }

  // Форма "Задать вопрос" в попапе
  const questionForm = document.getElementById("questionFormPopup");
  if (questionForm) {
    questionForm.addEventListener("submit", function (e) {
      e.preventDefault();
      submitForm(this, "question");
    });
  }

  // Форма "Стать партнёром" в попапе
  const coopForm = document.getElementById("coopFormPopup");
  if (coopForm) {
    coopForm.addEventListener("submit", function (e) {
      e.preventDefault();
      submitForm(this, "coop");
    });
  }

  // Дополнительно: если будут ещё какие-то формы на странице, можно добавить сюда
})();
