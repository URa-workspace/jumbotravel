// ---------- GSAP SCROLLTRIGGER АНИМАЦИИ ----------
(function () {
  "use strict";

  gsap.registerPlugin(ScrollTrigger);

  const isMobile = window.innerWidth < 768;

  // ========== 0. УСИЛЕННАЯ АНИМАЦИЯ ЗАГОЛОВКОВ ==========
  const sectionTitles = document.querySelectorAll(".section-title");
  if (sectionTitles.length) {
    sectionTitles.forEach((title) => {
      gsap.fromTo(
        title,
        {
          y: 120,
          opacity: 0,
          scale: 0.8,
          rotationX: -20,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotationX: 0,
          duration: 1.2,
          ease: "back.out(0.8)",
          scrollTrigger: {
            trigger: title,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });
  }

	  const sectionSubTitles = document.querySelectorAll(".section-subtitle");
    if (sectionSubTitles.length) {
      sectionSubTitles.forEach((title) => {
        gsap.fromTo(
          title,
          {
            y: 120,
            opacity: 0,
            scale: 0.8,
            rotationX: -20,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotationX: 0,
            duration: 1.2,
            ease: "back.out(0.8)",
            scrollTrigger: {
              trigger: title,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
	}
	
	const blockTitles = document.querySelectorAll(".block-title");
  if (blockTitles.length) {
    blockTitles.forEach((title) => {
      gsap.fromTo(
        title,
        {
          y: 120,
          opacity: 0,
          scale: 0.8,
          rotationX: -20,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotationX: 0,
          duration: 1.2,
          ease: "back.out(0.8)",
          scrollTrigger: {
            trigger: title,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });
  }
  // ========== 1. АНИМАЦИЯ ОСТАЛЬНЫХ ЭЛЕМЕНТОВ ==========
  const elementsToAnimate = [
    {
      selector: ".about-text",
      from: { x: -80, opacity: 0 },
      to: { x: 0, opacity: 1 },
      stagger: 0.1,
    },
    {
      selector: ".about-image",
      from: { x: 80, opacity: 0 },
      to: { x: 0, opacity: 1 },
      stagger: 0.1,
    },
    {
      selector: ".service-card",
      from: { y: 60, opacity: 0, scale: 0.5 },
      to: { y: 0, opacity: 1, scale: 1 },
      stagger: 0.08,
    },
    {
      selector: ".dir-card",
      from: { y: 100, opacity: 0, rotate: -5 },
      to: { y: 0, opacity: 1, rotate: 0 },
      stagger: 0.08,
    },
    {
      selector: ".review-card-slide",
      from: { scale: 0.5, opacity: 0 },
      to: { scale: 1, opacity: 1 },
      stagger: 0.1,
    },
    {
      selector: ".coop-highlight-text",
      from: { x: -100, opacity: 0 },
      to: { x: 0, opacity: 1 },
    },
    {
      selector: ".coop-highlight-image",
      from: { x: 100, opacity: 0 },
      to: { x: 0, opacity: 1 },
    },
    {
      selector: ".contact-item",
      from: { x: 100, opacity: 0 },
      to: { x: 0, opacity: 1 },
      stagger: 0.25,
    },
    {
      selector: ".map-container",
      from: { scale: 0.5, opacity: 0 },
      to: { scale: 1, opacity: 1 },
    },
  ];

  elementsToAnimate.forEach((item) => {
    const elements = document.querySelectorAll(item.selector);
    if (!elements.length) return;

    gsap.fromTo(
      elements,
      { ...item.from },
      {
        ...item.to,
        duration: 1.2,
        stagger: item.stagger || 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: elements[0].parentElement || elements[0],
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      },
    );
  });

  // ========== 2. ПАРАЛЛАКС ==========
  if (!isMobile) {
    gsap.to(".hero", {
      backgroundPosition: "50% 100%",
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    gsap.to(".directions", {
      backgroundPosition: "50% 30%",
      ease: "none",
      scrollTrigger: {
        trigger: ".directions",
        start: "top bottom",
        end: "bottom top",
        scrub: 0.8,
      },
    });
  }

  // ========== 3. АНИМАЦИЯ ЧИСЕЛ В СТАТИСТИКЕ ==========
const statNumbers = document.querySelectorAll(".stat-item h3");
if (statNumbers.length) {
  statNumbers.forEach((el) => {
    const originalText = el.innerText.trim();
    // Извлекаем число (целое или десятичное) и суффикс
    const match = originalText.match(/^([\d.]+)(.*)$/);
    if (!match) return;
    let target = parseFloat(match[1]); // число
    const suffix = match[2];           // суффикс (например, "/7" или "%")
    if (isNaN(target)) return;

    let start = 0;
    const obj = { val: start };
    gsap.to(obj, {
      val: target,
      duration: 2,
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      onUpdate: function () {
        // Форматируем число: если оно целое, показываем без .0
        let formatted = (obj.val % 1 === 0) ? Math.floor(obj.val) : obj.val.toFixed(1);
        el.innerText = formatted + suffix;
      }
    });
  });
}

  // ========== 4. ПРОБУЖДЕНИЕ ==========
  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
  });
})();

// ========== АНИМАЦИЯ HERO (при загрузке) ==========
(function animateHero() {
    // Убеждаемся, что элементы существуют
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroButtons = document.querySelectorAll('.hero-buttons a');
    const heroLogo = document.querySelector('.hero-logo'); // если есть лого

    if (heroTitle) {
        // Анимация заголовка (маска сверху вниз)
        gsap.to(heroTitle, {
            clipPath: 'inset(0 0 0 0)',
            duration: .5,
            ease: 'power2.out',
            delay: 0.01,
        });
    }

    if (heroSubtitle) {
        gsap.to(heroSubtitle, {
            clipPath: 'inset(0 0 0 0)',
            duration: 1,
            ease: 'power2.out',
            delay: 0.75,
        });
    }

    if (heroLogo) {
        // Логотип может появиться с масштабом
        gsap.from(heroLogo, {
            scale: 0,
            opacity: 0,
            duration: 0.8,
            ease: 'back.out(0.6)',
            delay: 0.5,
        });
    }

    // Кнопки: анимация со смещением (как в about)
    if (heroButtons.length) {
      // Сначала устанавливаем начальные состояния (скрытые)
      gsap.set(heroButtons, {
        opacity: 0,
        x: (index) => (index === 0 ? -50 : 50),
      });
      // Затем анимируем к конечным
      gsap.to(heroButtons, {
        opacity: 1,
        x: 0,
        duration: 0.4,
        stagger: 0.15,
        ease: "power2.out",
        delay:1.2,
      });
    }
})();
