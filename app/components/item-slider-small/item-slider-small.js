/* eslint-disable */
const $ = window.$;

import Swiper from 'swiper';

export function itemSliderSmall () {
  $('.js-item-slider-small').each(function () {
    const
      block = $(this),
      slider = block.find('.swiper-container'),
      arrowPrev = block.find('.js-arrow-prev'),
      arrowNext = block.find('.js-arrow-next');

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
      pagination: {
        el: block.find('.slider-dots'),
        clickable: true,
        bulletClass: 'slider-dots__dot',
        bulletActiveClass: 'is-active',
      },
      slidesPerView: 2,
      spaceBetween: 8,
      breakpoints: {
        1360: {
          spaceBetween: 4,
        },
      },
    });
  });
}
/* eslint-enable */
