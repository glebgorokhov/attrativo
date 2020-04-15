/* eslint-disable */
const $ = window.$;

import Swiper from 'swiper';

export function productCardSlider () {

  // Slider
  $('.ProductCard__slider').each(function () {
    const
      block = $(this),
      arrowPrev = block.find('.ProductCard__arrow_prev'),
      arrowNext = block.find('.ProductCard__arrow_next');

    const mySlider = new Swiper(block, {
      loop: true,
      speed: 400,
      autoplay: false,
      slidesPerView: 1,
      spaceBetween: 0,
      centeredSlides: false,
      roundLengths: true,
      simulateTouch: false,
      freeMode: false,
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
    });

    block.closest('.ProductCard').on('mouseleave', function () {
      mySlider.slideToLoop(0);
    });
  });
}
/* eslint-enable */
