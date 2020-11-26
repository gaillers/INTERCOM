$('html').niceScroll({
  cursorcolor: '#808080',
  cursorwidth: '15px',
  cursorborder: 'none',
  cursorborderradius: '0',
  background: 'rgb(225, 225, 225, 1)',

  zindex: 998,
  scrollspeed: 80,

  autohidemode: false,
  enablekeyboard: false,
  horizrailenabled: false,
  touchactive: false,
});

// Header > headhesive--stick
let scrolled;
window.onscroll = function () {
  scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if (scrolled > 400) {
    $('.header').addClass('headhesive--stick').css({
      background: 'rgba(255, 255, 255, 255)',
      boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 15px',
    });
  } else if (scrolled > 300) {
    $('.header').addClass('headhesive--stick').css({
      background: 'rgba(255, 255, 255, 255)',
      boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 15px',
    });
  } else if (scrolled > 250) {
    $('.header').addClass('headhesive--stick').css({
      background: 'rgba(255, 255, 255, 255)',
      boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 15px',
    });
  } else if (scrolled > 230) {
    $('.header').addClass('headhesive--stick').css({
      background: 'rgba(255, 255, 255, 0.8)',
      boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 15px',
    });
  } else if (scrolled > 200) {
    $('.header').removeClass('headhesive--stick').css({
      background: 'rgba(255, 255, 255, 0.6)',
      boxShadow: 'rgba(0, 0, 0, 0.0) 0px 0px 15px',
    });
  }
  if (200 > scrolled) {
    $('.header').removeClass('headhesive--stick').css({
      background: 'rgba(255, 255, 255, 0.0)',
      boxShadow: 'rgba(0, 0, 0, 0.0) 0px 0px 0px',
    });
  }
};

// scroll Nav & Siderbar
$(function () {
  scroll;
  $('a[href^="#home"]').click(function () {
    let target = $(this).attr('href');
    $('html, body').animate({ scrollTop: $(target).offset().top }, 1000);
    return false;
  });
  $('a[href^="#work"]').click(function () {
    let target = $(this).attr('href');
    $('html, body').animate({ scrollTop: $(target).offset().top - 140 }, 1000);
    return false;
  });
  $('a[href^="#services"]').click(function () {
    let target = $(this).attr('href');
    $('html, body').animate({ scrollTop: $(target).offset().top - 110 }, 1000);
    return false;
  });
  $('a[href^="#profit"]').click(function () {
    let target = $(this).attr('href');
    $('html, body').animate({ scrollTop: $(target).offset().top - 140 }, 1000);
    return false;
  });
  $('a[href^="#command"]').click(function () {
    let target = $(this).attr('href');
    $('html, body').animate({ scrollTop: $(target).offset().top - 100 }, 1000);
    return false;
  });
});

// MagnificPopup
$('.swiper-container-s2').magnificPopup({
  delegate: 'a',
  type: 'image',
  tLoading: 'Загрузка изображения #%curr%...',
  gallery: {
    enabled: true,
    navigateByImgClick: true,
    preload: [0, 1],
  },
});

$('.command-item').magnificPopup({
  type: 'image',
  zoom: {
    enabled: false,
    duration: 300,
  },
});

$('.swiper-container-sa4').magnificPopup({
  delegate: 'a',
  type: 'image',
  tLoading: 'Загрузка изображения #%curr%...',
  gallery: {
    enabled: true,
    navigateByImgClick: true,
    preload: [0, 1],
  },
});

$('.popup-modal__project').magnificPopup({
  type: 'inline',
  focus: '#name'
});
$('.popup-modal__detailed').magnificPopup({
  type: 'inline',
  focus: '#name'
});

$('.image-popup-vertical-fit').magnificPopup({
  type: 'image',
  zoom: {
    enabled: false,
    duration: 300,
  },
});

$('.popup-youtube').magnificPopup({ 
  type: 'iframe' 
});