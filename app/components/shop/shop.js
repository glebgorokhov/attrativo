/* eslint-disable */
import Swiper from 'swiper';

const $ = window.$;

export function shop () {
  $('.js-slider-shop').each(function () {
    const
      block = $(this).find('.swiper-container'),
      arrow = $(this).find('.shop__arrow-next');

    const mySlider = new Swiper(block, {
      speed: 500,
      autoplay: false,
      slidesPerView: 2,
      centeredSlides: false,
      roundLengths: true,
      freeMode: false,
      navigation: {
        nextEl: arrow,
      },
      direction: 'vertical',
      spaceBetween: 5,
      loop: false,
      breakpoints: {
        1360: {
          direction: 'horizontal',
          spaceBetween: 20,
          loop: true,
        },
      },
    });
  });
}
/* eslint-enable */
