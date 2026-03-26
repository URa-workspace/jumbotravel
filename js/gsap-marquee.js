// ---------- GSAP МАРКИЗА ДЛЯ ПАРТНЁРОВ ----------
(function () {
  "use strict";

  const track = document.getElementById("partnerTrack");
  if (!track) return;

  let animation;
  let isPaused = false;

  // Функция получения ширины трека (половина для бесконечности)
  function getHalfWidth() {
    return track.scrollWidth / 2;
  }

  // Запуск анимации
  function startMarquee() {
    if (animation) animation.kill(); // Убиваем старую анимацию
    const halfWidth = getHalfWidth();
    if (halfWidth === 0) return; // не запускаем, если нет ширины

    // Устанавливаем начальное положение
    gsap.set(track, { x: 0 });

    animation = gsap.to(track, {
      x: -halfWidth,
      duration: 30, // скорость (сек)
      ease: "none",
      repeat: -1,
      modifiers: {
        x: (x) => {
          const mod = ((parseFloat(x) % halfWidth) + halfWidth) % halfWidth;
          return -mod;
        },
      },
      onUpdate: () => {
        if (isPaused) animation.pause();
      },
    });
  }

  // Остановка
  function pauseMarquee() {
    if (animation) {
      isPaused = true;
      animation.pause();
    }
  }

  // Возобновление
  function resumeMarquee() {
    if (animation) {
      isPaused = false;
      animation.resume();
    } else {
      startMarquee();
    }
  }

  // Перезапуск при изменении размера окна (например, поворот экрана)
  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      if (animation) {
        const wasPaused = isPaused;
        startMarquee();
        if (wasPaused) pauseMarquee();
      } else {
        startMarquee();
      }
    }, 200);
  });

  // Запуск после полной загрузки всех изображений
  function init() {
    const images = track.querySelectorAll("img");
    let loadedCount = 0;
    const totalImages = images.length;

    if (totalImages === 0) {
      startMarquee();
      return;
    }

    function imageLoaded() {
      loadedCount++;
      if (loadedCount === totalImages) {
        startMarquee();
      }
    }

    images.forEach((img) => {
      if (img.complete) {
        imageLoaded();
      } else {
        img.addEventListener("load", imageLoaded);
        img.addEventListener("error", imageLoaded); // всё равно продолжаем
      }
    });
  }

  init();

  // Остановка/возобновление при наведении на весь блок .partners
  const partnersSection = document.querySelector(".partners");
  if (partnersSection) {
    partnersSection.addEventListener("mouseenter", pauseMarquee);
    partnersSection.addEventListener("mouseleave", resumeMarquee);
  }
})();
