// ---------- MAIN.JS - АНИМАЦИИ ПРИ СКРОЛЛЕ ----------
(function () {
  "use strict";

  // Анимация появления элементов при скролле
  const faders = document.querySelectorAll(".fade-up");

  const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -30px 0px",
  };

  const appearOnScroll = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        // Можно оставить наблюдение или отключить после появления
        // appearOnScroll.unobserve(entry.target);
      }
    });
  }, appearOptions);

  faders.forEach((fader) => {
    appearOnScroll.observe(fader);
  });

  // Дополнительно: обработка загрузки страницы
  window.addEventListener("load", () => {
    // Проверяем, какие элементы уже видны при загрузке
    faders.forEach((fader) => {
      const rect = fader.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      if (rect.top < windowHeight - 100) {
        fader.classList.add("visible");
      }
    });
  });
})();
