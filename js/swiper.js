// ---------- SWIPER.JS - ИНИЦИАЛИЗАЦИЯ СЛАЙДЕРА ОТЗЫВОВ ----------
(function () {
  "use strict";

  const swiperContainer = document.querySelector(".review-swiper");
  if (!swiperContainer || typeof Swiper === "undefined") return;

  // Подсчитываем количество слайдов
  const slides = swiperContainer.querySelectorAll(".swiper-slide");
  const slidesCount = slides.length;

  // Для loop нужно минимум 3 слайда (при slidesPerView=1), но можно безопасно включить, если >=3
  const enableLoop = slidesCount >= 3;

  new Swiper(".review-swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: enableLoop,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 25,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    speed: 600,
  });
})();
