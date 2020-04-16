/* eslint-disable */
const $ = window.$;

import Swiper from 'swiper/js/swiper.js';

export function productSlider () {
  $('.js-product-slider').each(function () {
    const
      block = $(this),
      slider = block.find('.swiper-container'),
      arrowPrev = block.find('.product-slider__arrow_prev'),
      arrowNext = block.find('.product-slider__arrow_next'),
      slides = block.data('slides'),
      dots = block.find('.slider-dots');

    function getPagination () {
      if (dots.length > 0) {
        return {
          el: dots,
          clickable: true,
          bulletClass: 'slider-dots__dot',
          bulletActiveClass: 'is-active',
        };
      } else {
        return false;
      }
    }

    const mySlider = new Swiper(slider, {
      loop: false,
      speed: 400,
      autoplay: false,
      centeredSlides: false,
      roundLengths: true,
      freeMode: false,
      simulateTouch: false,
      navigation: {
        nextEl: arrowNext,
        prevEl: arrowPrev,
      },
      pagination: getPagination(),
      slidesPerView: slides[1],
      spaceBetween: 9,
      breakpoints: {
        1360: {
          slidesPerView: slides[0],
          spaceBetween: block.data('space-desktop') || 8,
        },
      },
      on: {
        init: function () {
          block.closest('.product-slider-tabs').find('.tabs__tab.is-active').click();
        },
      },
    });
  });
}
/* eslint-enable */
