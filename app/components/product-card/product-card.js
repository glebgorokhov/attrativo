/* eslint-disable */
const $ = window.$;

import Swiper from 'swiper';

export function productCardSlider () {
  // Z-Index Fix
  let zIndexCounter = 1;

  $(document).on('mouseenter', '.ProductCard', function () {
    zIndexCounter > 30 ? zIndexCounter = 1 : zIndexCounter++;

    $(this).css({
      zIndex: zIndexCounter,
    });
  });

  $(document).on('mouseleave', '.ProductCard', function () {
    setTimeout(() => {
      $(this).css({
        zIndex: '',
      });
    }, globalOptions.animationDuration);
  });

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
    });

    block.closest('.ProductCard').on('mouseleave', function () {
      mySlider.slideToLoop(0);
    });
  });
}
/* eslint-enable */
