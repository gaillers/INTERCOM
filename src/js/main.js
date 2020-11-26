/*Swiper options*/

let leftSwiper = new Swiper('.swiper-container', {
  direction: 'vertical',

  autoplay: {
    delay: 7000,
  },

  virtualTranslate: true,
  slideToClickedSlide: true,
});

let asideSwiper = new Swiper('.swiper-container-s0', {
  direction: 'vertical',

  autoplay: {
    delay: 7000,
  },

  virtualTranslate: true,
  slideToClickedSlide: true,
});

let mainSwiper = new Swiper('.swiper-container-s1', {
  speed: 1000,

  autoplay: {
    delay: 7000,
    stopOnLastSlide: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

mainSwiper.on('slideChange', () => {
  asideSwiper.slideTo(mainSwiper.realIndex, 1000);
});

asideSwiper.on('slideChange', () => {
  mainSwiper.slideTo(asideSwiper.realIndex, 1000);
});

// Gallary

let gallarySwiper = new Swiper('.swiper-container-s2', {
  slidesPerColumn: 2,
  slidesPerView: 5,
  spaceBetween: 15,

  breakpoints: {
    300: {
      slidesPerView: 1,
      slidesPerColumn: 1,
      width: 230,
      height: 230,
    },
    768: {
      slidesPerColumn: 2,
      slidesPerView: 5,
      spaceBetween: 15,
    },
    1100: {
      slidesPerColumn: 2,
      slidesPerView: 5,
      spaceBetween: 15,
    },
    1440: {
      slidesPerColumn: 2,
      slidesPerView: 5,
      spaceBetween: 15,
    },
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next-s2',
    prevEl: '.swiper-button-prev-s2',
  },
});

// Services

let servicesMain = new Swiper('.swiper-container-s3', {
  navigation: {
    nextEl: '.swiper-button-next-s3',
    prevEl: '.swiper-button-prev-s3',
  },
});
let servicesAside = new Swiper('.swiper-container-sa3', {
  direction: 'horizontal',

  virtualTranslate: true,
  slideToClickedSlide: true,

  breakpoints: {
    640: {
      spaceBetween: 10,
    },
    640: {
      width: 138,
      spaceBetween: 10,
    },
    990: {
      width: 187,
      spaceBetween: 10,
    },
    1024: {
      width: 187,
      spaceBetween: 10,
    },
    1200: {
      width: 221,
      spaceBetween: 10,
    },
    1300: {
      width: 222,
      spaceBetween: 10,
    },
    1440: {
      width: 222,
      spaceBetween: 10,
    },
    1600: {
      width: 222,
      spaceBetween: 10,
    },
    1920: {
      width: 222,
      spaceBetween: 10,
    },
  },

  // navigation: {
  //   nextEl: '.swiper-button-next-s3',
  //   prevEl: '.swiper-button-prev-s3',
  // },
});

servicesMain.on('slideChange', () => {
  servicesAside.slideTo(servicesMain.realIndex, 1000);
});

servicesAside.on('slideChange', () => {
  servicesMain.slideTo(servicesAside.realIndex, 1000);
});

// Command

let commandSwiper = new Swiper('.swiper-container-s4', {
  slidesPerColumn: 2,
  slidesPerView: 5,
  spaceBetween: 30,
  speed: 1000,

  breakpoints: {
    300: {
      slidesPerView: 1,
      slidesPerColumn: 1,
      spaceBetween: 30,
    },
    767: {
      slidesPerView: 1,
      slidesPerColumn: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 4,
      slidesPerColumn: 2,
      spaceBetween: 30,
    },
    825: {
      slidesPerView: 4,
      slidesPerColumn: 2,
      spaceBetween: 30,
    },
    880: {
      slidesPerView: 4,
      slidesPerColumn: 2,
      spaceBetween: 30,
    },

    992: {
      slidesPerView: 5,
      slidesPerColumn: 2,
      spaceBetween: 30,
    },

    1400: {
      slidesPerColumn: 2,
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },

  navigation: {
    nextEl: '.swiper-button-next-s4',
    prevEl: '.swiper-button-prev-s4',
  },
});

//Gallary Works Command

let gallaryWorksSwiper = new Swiper('.swiper-container-sa4', {
  slidesPerView: 3,
  slidesPerColumn: 2,
  spaceBetween: 15,

  autoplay: {
    speed: 7000,
  },

  breakpoints: {
    300: {
      slidesPerView: 1,
      slidesPerColumn: 1,
      width: 270,
    },
    768: {
      slidesPerView: 4,
      slidesPerColumn: 2,
      spaceBetween: 15,
    },
    1100: {
      slidesPerView: 3,
      slidesPerColumn: 2,
      spaceBetween: 15,
    },
    1440: {
      slidesPerView: 3,
      slidesPerColumn: 2,
      spaceBetween: 15,
    },
  },

  pagination: {
    el: '.swiper-pagination-s4',
    type: 'bullets',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next-s4',
    prevEl: '.swiper-button-prev-s4',
  },
});

// certificate

let certificateSwiper = new Swiper('.swiper-container-s5', {
  loop: true,

  loopedSlides: 50,
  slidesPerView: 1,
  spaceBetween: 15,
  width: 213,
  
  autoplay:{
    speed:1000,
  },

  breakpoints: {
    300: {
      // loopedSlides: 50,
      slidesPerView: 1,
      spaceBetween: 15,
      width: 200,
    },
    768: {
      loopedSlides: 50,
      slidesPerView: 1,
      spaceBetween: 15,
      width: 127,
    },
    1100: {
      loopedSlides: 50,
      slidesPerView: 1,
      spaceBetween: 15,
      width: 213,
    },
    1440: {
      loopedSlides: 50,
      slidesPerView: 1,
      spaceBetween: 15,
      width: 213,
    },
  },

  pagination: {
    el: '.swiper-pagination-s5',
    type: 'bullets',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next-s5',
    prevEl: '.swiper-button-prev-s5',
  },
});
