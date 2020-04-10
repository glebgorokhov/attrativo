/* eslint-disable */
import Swiper from 'swiper';

const $ = window.$;

export function girls () {
  $('.js-slider-girls').each(function () {
    const
      block = $(this);

    const mySlider = new Swiper(block, {
      loop: true,
      speed: 500,
      autoplay: false,
      slidesPerView: 'auto',
      spaceBetween: 0,
      centeredSlides: false,
      simulateTouch: true,
      roundLengths: true,
      freeMode: false,
    });
  });
}
/* eslint-enable */
