/* eslint-disable */
import Swiper from 'swiper';

const $ = window.$;

export function imageSlider() {
  $('.image-slider').each(function () {
    const
      block = $(this),
      bigSlider = block.find('.image-slider__slider_big .swiper-container'),
      smallSlider = block.find('.image-slider__slider_small .swiper-container');

    const secondSlider = new Swiper(smallSlider, {
      loop: false,
      speed: 700,
      direction: 'vertical',
      autoplay: false,
      slidesPerView: 4,
      spaceBetween: 5,
      centeredSlides: false,
      roundLengths: true,
      freeMode: false,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });

    const mainSlider = new Swiper(bigSlider, {
      loop: false,
      speed: 700,
      direction: 'horizontal',
      autoplay: false,
      slidesPerView: 1,
      spaceBetween: 5,
      centeredSlides: false,
      roundLengths: true,
      freeMode: false,
      pagination: {
        el: block.find('.image-slider__dots'),
        clickable: true,
        bulletClass: 'image-slider__dot',
        bulletActiveClass: 'is-active',
      },
      thumbs: {
        swiper: secondSlider,
        slideThumbActiveClass: 'is-active',
      },
      breakpoints: {
        1360: {
          direction: 'vertical',
        },
      },
    });

    // $(document).on('click', '.image-slider__slide_small', function () {
    //   $(this).addClass('is-active').siblings().removeClass('is-active');
    // });
  });
}

/* eslint-enable */
