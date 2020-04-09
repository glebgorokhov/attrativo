/* eslint-disable */
import Swiper from 'swiper';

const $ = window.$;

export function hotNow () {
  // Tabs text
  $(document).on('click', '.hot-now__tab', function () {
    const
      tab = $(this);

    tab.find('.hot-now__text').slideDown(globalOptions.animationDuration, function () {
      $(this).removeClass('is-active-passive');
    });

    tab.siblings().find('.hot-now__text').slideUp(globalOptions.animationDuration, function () {
      $(this).removeClass('is-active-passive');
    });
  });

  // Slider
  $('.js-slider-hot-now').each(function () {
    const
      block = $(this),
      slider = block.find('.swiper-container');

    const mySlider = new Swiper(slider, {
      loop: false,
      speed: 500,
      autoplay: false,
      slidesPerView: 1,
      spaceBetween: 5,
      centeredSlides: false,
      roundLengths: true,
      freeMode: false,
    });
  });
}
/* eslint-enable */
