/* eslint-disable */
import Swiper from 'swiper';

const $ = window.$;

export function girls () {
  $('.js-slider-girls').each(function () {
    const
      block = $(this);

    const mySlider = new Swiper(block, {
      loop: false,
      speed: 500,
      autoplay: false,
      slidesPerView: 1,
      spaceBetween: 10,
      centeredSlides: false,
      simulateTouch: false,
      roundLengths: true,
      freeMode: false,
      breakpoints: {
        1360: {
          slidesPerView: 5,
        },
      },
    });
  });
}
/* eslint-enable */
