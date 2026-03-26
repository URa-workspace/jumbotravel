// ---------- TELEGRAM.JS - ОБРАБОТКА КНОПОК TELEGRAM (дополнение) ----------
(function () {
  "use strict";

  // Ссылка на Telegram-канал (замените на реальную)
  const TELEGRAM_CHANNEL_URL = "https://t.me/jumbotravel_channel";

  // Маппинг услуг на конкретные посты в Telegram
  const serviceLinks = {
    "packet-tours": TELEGRAM_CHANNEL_URL + "/1", // замените на реальную ссылку
    "custom-routes": TELEGRAM_CHANNEL_URL + "/2",
    "group-tours": TELEGRAM_CHANNEL_URL + "/3",
    tickets: TELEGRAM_CHANNEL_URL + "/4",
    events: TELEGRAM_CHANNEL_URL + "/5",
    cruises: TELEGRAM_CHANNEL_URL + "/6",
  };

  // Все кнопки Telegram на странице
  const telegramButtons = document.querySelectorAll(
    "#mainTelegramBtn, #heroTelegramBtn, #telegramContact",
  );

  // Кнопки "Подробнее" в карточках услуг
  const serviceDetailLinks = document.querySelectorAll(".service-detail-link");

  // Функция перехода в Telegram
  function redirectToTelegram(e) {
    e.preventDefault();

    // Проверяем, есть ли data-service атрибут для конкретного поста
    const serviceType = this.getAttribute("data-service");
    let url = TELEGRAM_CHANNEL_URL;

    if (serviceType && serviceLinks[serviceType]) {
      url = serviceLinks[serviceType];
    }

    console.log("Переход в Telegram:", url);
    window.open(url, "_blank");
  }

  // Добавляем обработчики для всех кнопок Telegram
  telegramButtons.forEach((button) => {
    button.addEventListener("click", redirectToTelegram);
  });

  // Добавляем обработчики для кнопок "Подробнее" в услугах
  serviceDetailLinks.forEach((link) => {
    link.addEventListener("click", redirectToTelegram);
  });

  // Дополнительно: если нужно заменить href у ссылок
  const telegramLinks = document.querySelectorAll(
    ".telegram-link, #telegramContact",
  );
  telegramLinks.forEach((link) => {
    if (link.tagName === "A") {
      link.href = TELEGRAM_CHANNEL_URL;
    }
  });
})();
