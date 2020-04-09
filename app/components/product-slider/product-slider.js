/* eslint-disable */
const $ = window.$;

import Swiper from 'swiper';

export function productSlider () {
  $('.js-product-slider').each(function () {
    const
      block = $(this),
      slider = block.find('.swiper-container'),
      arrowPrev = block.find('.product-slider__arrow_prev'),
      arrowNext = block.find('.product-slider__arrow_next'),
      size = block.data('size');

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
      slidesPerView: 2,
      spaceBetween: 6,
      breakpoints: {
        1360: {
          slidesPerView: 'auto',
          spaceBetween: 10,
        },
      },
    });
  });
}
/* eslint-enable */
