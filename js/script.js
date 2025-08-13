let tl = gsap.timeline()
let gs = gsap.timeline()

tl.from(".home__decor-3", {duration: .7, xPercent: 100 }, 1);
tl.from(".home__decor-2", {duration: .7, y: -300, opacity: 0 }, 1.3);
tl.from(".home__decor-1", {duration: .7, xPercent: -100 }, 2);
tl.from(".line", {duration: .7, width: 0 }, 2);
tl.from(".home__subtitle", {duration: .9, x: -50, opacity: 0 }, 2.2);
tl.from(".home__title", {duration: .9, y: -30, opacity: 0 }, 2.2);
tl.from(".home__descr", {duration: .7, y: 50, opacity: 0 }, 2.8);
tl.from(".home__btn", {duration: .7, y: 50, opacity: 0 }, 3.4);

const swiper = new Swiper('.home__swiper', {
    // Optional parameters
    direction: 'horizontal',
    allowTouchMove: false, // Запрещает свайпы
    loop: true,
    autoplay: {
        delay: 6000,
      }, 
    effect: "fade", // Делаем плавное появление без перелистывания
    fadeEffect: { crossFade: true },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    }
  });

let navMenu = document.querySelector('.header__nav');
let menuBtn = document.querySelector('.header__menu-btn');
let closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener('click', () => {
  navMenu.classList.add('header__nav--active');
})

closeBtn.addEventListener('click', () => {
  navMenu.classList.remove('header__nav--active');
})

const swiper2 = new Swiper('.seller__swiper', {
  // Optional parameters
  slidesPerView: 4,
  spaceBetween: 30,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiper3 = new Swiper('.blog__swiper', {
  // Optional parameters
  slidesPerView: 3,
  spaceBetween: 30,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
  direction: 'horizontal',
  loop: true,
});

const swiper4 = new Swiper('.brands__swiper', {
  // Optional parameters
  slidesPerView: 7,
  spaceBetween: 30,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 5,
    },
    1200: {
      slidesPerView: 6,
    },
  },
  direction: 'horizontal',
  loop: true,
});