/* eslint-disable */
import Swiper from 'swiper';

const $ = window.$;

export function offer () {
  $('.js-slider-offer').each(function () {
    const
      block = $(this),
      slider = block.find('.swiper-container');

    const mySlider = new Swiper(slider, {
      loop: true,
      speed: 700,
      autoplay: {
        delay: 5000,
      },
      slidesPerView: 1,
      spaceBetween: 0,
      centeredSlides: false,
      roundLengths: true,
      freeMode: false,
      navigation: {
        nextEl: block.find('.js-arrow-next'),
        prevEl: block.find('.js-arrow-prev'),
      },
      breakpoints: {
        0: {
          pagination: {
            el: block.find('.slider-dots'),
            clickable: true,
            bulletClass: 'slider-dots__dot',
            bulletActiveClass: 'is-active',
          },
        },
        1360: {
          pagination: {
            el: block.find('.slider-pages'),
            clickable: true,
            type: 'custom',
            renderCustom: function (swiper, current, total) {
              return `
            <div class="slider-pages__current">0${current}</div>
            <div class="slider-pages__slash">/</div>
            <div class="slider-pages__amount">0${total}</div>  
          `;
            }
          },
        },
      },
    });
  });
}
/* eslint-enable */
