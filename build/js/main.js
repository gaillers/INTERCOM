"use strict";

var _breakpoints;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*Swiper options*/
var leftSwiper = new Swiper('.swiper-container', {
  direction: 'vertical',
  autoplay: {
    delay: 7000
  },
  virtualTranslate: true,
  slideToClickedSlide: true
});
var asideSwiper = new Swiper('.swiper-container-s0', {
  direction: 'vertical',
  autoplay: {
    delay: 7000
  },
  virtualTranslate: true,
  slideToClickedSlide: true
});
var mainSwiper = new Swiper('.swiper-container-s1', {
  speed: 1000,
  autoplay: {
    delay: 7000,
    stopOnLastSlide: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
mainSwiper.on('slideChange', function () {
  asideSwiper.slideTo(mainSwiper.realIndex, 1000);
});
asideSwiper.on('slideChange', function () {
  mainSwiper.slideTo(asideSwiper.realIndex, 1000);
}); // Gallary

var gallarySwiper = new Swiper('.swiper-container-s2', {
  slidesPerColumn: 2,
  slidesPerView: 5,
  spaceBetween: 15,
  breakpoints: {
    300: {
      slidesPerView: 1,
      slidesPerColumn: 1,
      width: 230,
      height: 230
    },
    768: {
      slidesPerColumn: 2,
      slidesPerView: 5,
      spaceBetween: 15
    },
    1100: {
      slidesPerColumn: 2,
      slidesPerView: 5,
      spaceBetween: 15
    },
    1440: {
      slidesPerColumn: 2,
      slidesPerView: 5,
      spaceBetween: 15
    }
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next-s2',
    prevEl: '.swiper-button-prev-s2'
  }
}); // Services

var servicesMain = new Swiper('.swiper-container-s3', {
  navigation: {
    nextEl: '.swiper-button-next-s3',
    prevEl: '.swiper-button-prev-s3'
  }
});
var servicesAside = new Swiper('.swiper-container-sa3', {
  direction: 'horizontal',
  virtualTranslate: true,
  slideToClickedSlide: true,
  breakpoints: (_breakpoints = {
    640: {
      spaceBetween: 10
    }
  }, _defineProperty(_breakpoints, "640", {
    width: 138,
    spaceBetween: 10
  }), _defineProperty(_breakpoints, 990, {
    width: 187,
    spaceBetween: 10
  }), _defineProperty(_breakpoints, 1024, {
    width: 187,
    spaceBetween: 10
  }), _defineProperty(_breakpoints, 1200, {
    width: 221,
    spaceBetween: 10
  }), _defineProperty(_breakpoints, 1300, {
    width: 222,
    spaceBetween: 10
  }), _defineProperty(_breakpoints, 1440, {
    width: 222,
    spaceBetween: 10
  }), _defineProperty(_breakpoints, 1600, {
    width: 222,
    spaceBetween: 10
  }), _defineProperty(_breakpoints, 1920, {
    width: 222,
    spaceBetween: 10
  }), _breakpoints) // navigation: {
  //   nextEl: '.swiper-button-next-s3',
  //   prevEl: '.swiper-button-prev-s3',
  // },

});
servicesMain.on('slideChange', function () {
  servicesAside.slideTo(servicesMain.realIndex, 1000);
});
servicesAside.on('slideChange', function () {
  servicesMain.slideTo(servicesAside.realIndex, 1000);
}); // Command

var commandSwiper = new Swiper('.swiper-container-s4', {
  slidesPerColumn: 2,
  slidesPerView: 5,
  spaceBetween: 30,
  speed: 1000,
  breakpoints: {
    300: {
      slidesPerView: 1,
      slidesPerColumn: 1,
      spaceBetween: 30
    },
    767: {
      slidesPerView: 1,
      slidesPerColumn: 1,
      spaceBetween: 30
    },
    768: {
      slidesPerView: 4,
      slidesPerColumn: 2,
      spaceBetween: 30
    },
    825: {
      slidesPerView: 4,
      slidesPerColumn: 2,
      spaceBetween: 30
    },
    880: {
      slidesPerView: 4,
      slidesPerColumn: 2,
      spaceBetween: 30
    },
    992: {
      slidesPerView: 5,
      slidesPerColumn: 2,
      spaceBetween: 30
    },
    1400: {
      slidesPerColumn: 2,
      slidesPerView: 5,
      spaceBetween: 30
    }
  },
  navigation: {
    nextEl: '.swiper-button-next-s4',
    prevEl: '.swiper-button-prev-s4'
  }
}); //Gallary Works Command

var gallaryWorksSwiper = new Swiper('.swiper-container-sa4', {
  slidesPerView: 3,
  slidesPerColumn: 2,
  spaceBetween: 15,
  autoplay: {
    speed: 7000
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
      slidesPerColumn: 1,
      width: 270
    },
    768: {
      slidesPerView: 4,
      slidesPerColumn: 2,
      spaceBetween: 15
    },
    1100: {
      slidesPerView: 3,
      slidesPerColumn: 2,
      spaceBetween: 15
    },
    1440: {
      slidesPerView: 3,
      slidesPerColumn: 2,
      spaceBetween: 15
    }
  },
  pagination: {
    el: '.swiper-pagination-s4',
    type: 'bullets',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next-s4',
    prevEl: '.swiper-button-prev-s4'
  }
}); // certificate

var certificateSwiper = new Swiper('.swiper-container-s5', {
  loop: true,
  loopedSlides: 50,
  slidesPerView: 1,
  spaceBetween: 15,
  width: 213,
  autoplay: {
    speed: 1000
  },
  breakpoints: {
    300: {
      // loopedSlides: 50,
      slidesPerView: 1,
      spaceBetween: 15,
      width: 200
    },
    768: {
      loopedSlides: 50,
      slidesPerView: 1,
      spaceBetween: 15,
      width: 127
    },
    1100: {
      loopedSlides: 50,
      slidesPerView: 1,
      spaceBetween: 15,
      width: 213
    },
    1440: {
      loopedSlides: 50,
      slidesPerView: 1,
      spaceBetween: 15,
      width: 213
    }
  },
  pagination: {
    el: '.swiper-pagination-s5',
    type: 'bullets',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next-s5',
    prevEl: '.swiper-button-prev-s5'
  }
});
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
  touchactive: false
}); // Header > headhesive--stick

var scrolled;

window.onscroll = function () {
  scrolled = window.pageYOffset || document.documentElement.scrollTop;

  if (scrolled > 400) {
    $('.header').addClass('headhesive--stick').css({
      background: 'rgba(255, 255, 255, 255)',
      boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 15px'
    });
  } else if (scrolled > 300) {
    $('.header').addClass('headhesive--stick').css({
      background: 'rgba(255, 255, 255, 255)',
      boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 15px'
    });
  } else if (scrolled > 250) {
    $('.header').addClass('headhesive--stick').css({
      background: 'rgba(255, 255, 255, 255)',
      boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 15px'
    });
  } else if (scrolled > 230) {
    $('.header').addClass('headhesive--stick').css({
      background: 'rgba(255, 255, 255, 0.8)',
      boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 15px'
    });
  } else if (scrolled > 200) {
    $('.header').removeClass('headhesive--stick').css({
      background: 'rgba(255, 255, 255, 0.6)',
      boxShadow: 'rgba(0, 0, 0, 0.0) 0px 0px 15px'
    });
  }

  if (200 > scrolled) {
    $('.header').removeClass('headhesive--stick').css({
      background: 'rgba(255, 255, 255, 0.0)',
      boxShadow: 'rgba(0, 0, 0, 0.0) 0px 0px 0px'
    });
  }
}; // scroll Nav & Siderbar


$(function () {
  scroll;
  $('a[href^="#home"]').click(function () {
    var target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 1000);
    return false;
  });
  $('a[href^="#work"]').click(function () {
    var target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top - 140
    }, 1000);
    return false;
  });
  $('a[href^="#services"]').click(function () {
    var target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top - 110
    }, 1000);
    return false;
  });
  $('a[href^="#profit"]').click(function () {
    var target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top - 140
    }, 1000);
    return false;
  });
  $('a[href^="#command"]').click(function () {
    var target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top - 100
    }, 1000);
    return false;
  });
}); // MagnificPopup

$('.swiper-container-s2').magnificPopup({
  delegate: 'a',
  type: 'image',
  tLoading: 'Загрузка изображения #%curr%...',
  gallery: {
    enabled: true,
    navigateByImgClick: true,
    preload: [0, 1]
  }
});
$('.command-item').magnificPopup({
  type: 'image',
  zoom: {
    enabled: false,
    duration: 300
  }
});
$('.swiper-container-sa4').magnificPopup({
  delegate: 'a',
  type: 'image',
  tLoading: 'Загрузка изображения #%curr%...',
  gallery: {
    enabled: true,
    navigateByImgClick: true,
    preload: [0, 1]
  }
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
    duration: 300
  }
});
$('.popup-youtube').magnificPopup({
  type: 'iframe'
});
/*! uForm v2.3 */

var showLog = !1; // method of notification after sending ('message' or 'modal')

var handlerType = 'message';
var uFormFilePath = ''; // message about the result of sending

var failMessage = 'Что-то пошло не так... Повтороите немного позже';
var successMessage = 'Спасибо, ваше сообщение отправлено!'; // forms, form fields and their validation

var uForms = {
  handlerType: handlerType,
  failMessage: failMessage,
  successMessage: successMessage,
  prefix: '',
  uForm_1: {
    uForm__tel_1: {
      validTel: validTel
    }
  },
  uForm_2: {
    uForm__tel_2: {
      validTel: validTel
    }
  },
  uForm_3: {
    uForm__tel_3: {
      validTel: validTel
    }
  },
  uForm_4: {
    uForm__tel_4: {
      validTel: validTel
    }
  },
  uForm_5: {
    uForm__tel_5: {
      validTel: validTel
    }
  },
  uForm_6: {
    uForm__tel_6: {
      validTel: validTel
    }
  },
  uForm_61: {
    uForm__tel_6: {
      validTel: validTel
    }
  },
  uForm_7: {
    uForm__tel_7: {
      validTel: validTel
    }
  },
  uForm_8: {
    uForm__tel_8: {
      validTel: validTel
    }
  },
  uForm_9: {
    uForm__tel_9: {
      validTel: validTel
    }
  },
  uForm_10: {
    uForm__tel_10: {
      validTel: validTel
    }
  }
}; //--------------------------------------------------------
// validation functions ----------------------------------
//--------------------------------------------------------

function validTel(item) {
  var empty = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  if (empty && item.value.length == 0) return true;
  var errMsg = 'неправильный формат телефонного номера';
  var telRegExp = /^\+?\d{7,25}/g;
  var itemVal = item.value.replace(/[()-]|\s/g, '');
  if (!itemVal.match(telRegExp)) return errMsg;
  return true;
}

function validationForm(instance) {
  var valid = true;

  for (var inp in uForms[instance.id].validation) {
    var testInput = document.getElementById(inp);
    jQuery(testInput).blur();

    if (testInput.uFormValid !== undefined && testInput.uFormValid == false) {
      valid = false;
    }
  }

  return valid;
} //--------------------------------------------------------
// and - validation functions ----------------------------
//--------------------------------------------------------
//--------------- output info ----------------------------


function addErrorWarning(instance, msg) {
  var oroginBorder = jQuery(instance).css('border');
  instance.uFormValid = false;
  jQuery(instance).css('border', '2px #ff6a64 solid');
  jQuery(instance).on('focus', function (e) {
    jQuery(instance).css('border', oroginBorder);
    jQuery(instance).off(e);
    instance.uFormValid = true;
  });
  printError(instance.form.uFormPrefix, msg);
}

function printError(uFormPrefix, msg) {
  var uFormErr = jQuery('#uForm__error-msg' + uFormPrefix);

  if (showLog) {
    console.log('uFormPrefix, msg, uFormErr');
    console.log(uFormPrefix);
    console.log(msg);
    console.log(uFormErr);
  }

  uFormErr.show();
  uFormErr.append('<p></p>');
  jQuery('#uForm__error-msg' + uFormPrefix + ' > p:last-child').html('*' + msg);
  setTimeout(function () {
    jQuery('#uForm__error-msg' + uFormPrefix).hide();
    jQuery('#uForm__error-msg' + uFormPrefix + ' > p').html('');
  }, 7000);
} // change the message text


function changeMessageText(instance, status) {
  var statusMsg = '';

  if (status === true) {
    statusMsg = instance.uFormSuccessMsg;
  } else if (status === false) {
    statusMsg = instance.uFormFailMsg;
  } else {
    statusMsg = status;
  }

  jQuery('#uForm__modal' + instance.uFormPrefix + ' .uForm__modal-text').html(statusMsg + '');
} // message output


function printMessageText(instance, status) {
  var uForm = jQuery(instance);
  var statusMsg = '';
  console.log(instance);
  uForm.html(''); //uForm.append('<p id="uForm__message-text'+ instance.uFormPrefix +'" class="message-text"></p>');

  uForm.append('<p  class="message-text">' + successMessage + '</p>');

  if (status === true) {
    statusMsg = instance.uFormSuccessMsg;
  } else if (status === false) {
    statusMsg = instance.uFormFailMsg;
  } else {
    statusMsg = status;
  }

  jQuery('#uForm__message-text' + instance.uFormPrefix).html(statusMsg + '');
}

var isOpened = false;

function toggleModal(uFormPrefix) {
  if (!isOpened) {
    jQuery('#uForm__modal' + uFormPrefix + ', #uForm__overlay' + uFormPrefix).css('display', 'block');
    isOpened = true;
  } else {
    jQuery('#uForm__modal' + uFormPrefix + ', #uForm__overlay' + uFormPrefix).css('display', 'none');
    isOpened = false;
  }
} //--------------- and- output info -------------------------
//----------------------------------------------------------


var jQ = false;
var mt = window.MooTools !== undefined ? window.$ : false;
initJQ(mt);

function initJQ(mt) {
  if (window.jQuery === undefined) {
    if (!jQ) {
      jQ = true;
      document.write('<scr' + 'ipt type="text/javascript" src="' + uFormFilePath + 'js/jquery-3.3.1.min.js"></scr' + 'ipt>');
    }

    setTimeout('initJQ(mt)', 50);
  } else {
    if (mt) window.$ = mt;

    (function ($) {
      $(function () {
        var _loop = function _loop(uFormId) {
          var formInstance = $('#' + uFormId);

          if (formInstance[0] === undefined) {
            delete uForms[uFormId];
            return "continue";
          }

          if (showLog) {
            console.log('uFormId, formInstance[0]');
            console.log(uFormId);
            console.log(formInstance[0]);
          }

          formInstance[0].uFormHandlerType = uForms[uFormId].handlerType ? uForms[uFormId].handlerType : handlerType;
          formInstance[0].uFormFailMsg = uForms[uFormId].failMessage ? uForms[uFormId].failMessage : failMessage;
          formInstance[0].uFormSuccessMsg = uForms[uFormId].successMessage ? uForms[uFormId].successMessage : successMessage;
          formInstance[0].uFormPrefix = uForms[uFormId].prefix ? uForms[uFormId].prefix : ''; // modal functional

          $('#uForm__modal' + formInstance[0].uFormPrefix + ' button, #uForm__overlay' + formInstance[0].uFormPrefix).click(function () {
            toggleModal(formInstance[0].uFormPrefix);
          });
          formInstance.submit(function (event) {
            event.preventDefault();
            var valid = validationForm(this);

            if (!valid) {
              showResult(this, 'Некоторые поля заполненные не корректно');
              return;
            }

            var formData = new FormData(this);
            formData.append('uFormUrl', window.location.href);
            formData.append('uFormId', this.id);
            var smform = this;

            if (window.smetrics) {
              if (smform.smIsJs) {
                if (!document.smetrics_sended) {
                  document.smetrics_sended = true;
                  setTimeout(function () {
                    delete document.smetrics_sended;
                  }, 8000);
                  window.smetrics.dataCollection(smform);
                }
              }
            } else {} //              console.log('~700');
            //console.log(smform);
            //$('.uForm__preload' + smform.uFormPrefix).fadeIn();


            $('.uForm__preload').fadeIn();
            $.ajax({
              type: 'POST',
              url: uFormFilePath + '',
              contentType: false,
              processData: false,
              data: formData,
              timeout: 6000,
              statusCode: {
                403: function _() {
                  showResult(smform, false);
                },
                200: function _(data) {
                  if (true) {
                    console.log(data);
                  }

                  var answer = JSON.parse(data);

                  if (answer.success) {
                    showResult(smform, true); // todo: FB track - событие

                    fbq('track', 'Lead_pool');
                    location.href = ''; //$('#uForm__reset' + smform.uFormPrefix).click();
                  } else {
                    showResult(smform, false);
                    console.log(answer.info);
                  }
                }
              },
              error: function error(answer) {
                showResult(smform, false);
                console.log(answer.statusText);
              }
            });
          });
        };

        for (var uFormId in uForms) {
          var _ret = _loop(uFormId);

          if (_ret === "continue") continue;
        } // the result of sending


        function showResult(instance, status) {
          if (showLog) {
            console.log('showResult: instance, status, instance.uFormHandlerType');
            console.log(instance);
            console.log(status);
            console.log(instance.uFormHandlerType);
          } // $('#uForm__preload' + instance.uFormPrefix).fadeOut();


          $('.uForm__preload').fadeOut();

          if (instance.uFormHandlerType === 'modal') {
            changeMessageText(instance, status);
            toggleModal(instance.uFormPrefix);
          } else if (instance.uFormHandlerType === 'message') {
            printMessageText(instance, status);
          }
        } // adding validators


        for (var _uFormId in uForms) {
          if (showLog) console.log('uFormId: ' + _uFormId);
          var testForm = uForms[_uFormId].validation;

          var _loop2 = function _loop2(uInput) {
            if (showLog) console.log('uInput: ' + uInput);
            var curInput = testForm[uInput];
            var testInput = $('#' + _uFormId + ' #' + uInput);

            if (testInput[0] === undefined) {
              console.log('missing imput: ' + uInput);
              delete uForms[_uFormId].validation.uInput;
              return "continue";
            }

            var _loop3 = function _loop3(validFuncName) {
              var validFunc = curInput[validFuncName];

              if (showLog) {
                console.log('validFuncName: ' + validFuncName);
                console.log(validFunc);
              }

              if (Array.isArray(validFunc)) {
                if (showLog) console.log('func arr: ');
                var onEvent = 'blur';

                if (validFunc[0].event) {
                  onEvent = validFunc[0].event;
                  validFunc.shift();
                }

                $(testInput[0]).on(onEvent, function (e) {
                  var result = eval(validFuncName + '(testInput[0], validFunc[0], validFunc[1], validFunc[2], validFunc[3], validFunc[4]);');

                  if (result !== true) {
                    addErrorWarning(this, result);
                  }
                });
              } else {
                if (showLog) console.log('this is function: ');
                $(testInput[0]).on('blur', function (e) {
                  var result = validFunc(testInput[0]);

                  if (result !== true) {
                    addErrorWarning(this, result);
                  }
                });
              }
            };

            for (var validFuncName in curInput) {
              _loop3(validFuncName);
            }
          };

          for (var uInput in testForm) {
            var _ret2 = _loop2(uInput);

            if (_ret2 === "continue") continue;
          }
        } // and - adding validators

      });
    })(jQuery);
  }
}