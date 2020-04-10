/* eslint-disable */
import Swiper from 'swiper';

const $ = window.$;

export function sloganSlider () {
  $('.js-slogan-slider').each(function () {
    const
      block = $(this);

    const mySlider = new Swiper(block.find('.swiper-container'), {
      loop: true,
      speed: 700,
      autoplay: false,
      slidesPerView: 1,
      spaceBetween: 0,
      centeredSlides: false,
      roundLengths: true,
      freeMode: false,
      direction: 'vertical',
      autoHeight: true,
      navigation: {
        nextEl: block.find('.js-slider-prev'),
        prevEl: block.find('.js-slider-next'),
      },
    });
  });
}
/* eslint-enable */
