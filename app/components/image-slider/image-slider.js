/* eslint-disable */
import Swiper from 'swiper';

const $ = window.$;

export function imageSlider() {
  $('.image-slider').each(function () {
    const
      block = $(this),
      slider = block.find('.swiper-container');

    const mySlider = new Swiper(slider, {
      loop: false,
      speed: 700,
      direction: 'horizontal',
      autoplay: false,
      slidesPerView: 1,
      spaceBetween: 0,
      centeredSlides: true,
      roundLengths: true,
      freeMode: false,
      navigation: {
        nextEl: block.find('.js-arrow-next'),
        prevEl: block.find('.js-arrow-prev'),
      },
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
      scrollbar: {
        el: block.find('.image-slider__scrollbar'),
        draggable: true,
      },
      breakpoints: {
        1360: {
          slidesPerView: 'auto',
          spaceBetween: 5,
          loop: true,
        }
      }
    });
  });
}

/* eslint-enable */
