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
      slides = block.data('slides');

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
      slidesPerView: slides[1],
      spaceBetween: 9,
      breakpoints: {
        1360: {
          slidesPerView: slides[0],
          spaceBetween: 8,
        },
      },
    });
  });
}
/* eslint-enable */
