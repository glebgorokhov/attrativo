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
      pagination: {
        el: block.find('.offer__dots'),
        clickable: true,
        bulletClass: 'offer__dot',
        bulletActiveClass: 'is-active',
        renderBullet: function (index, className) {
          const text = $(this.slides[index]).find('img').attr('alt');

          return `<div class="${className}">
            <span>${text}</span>
          </div>`;
        },
      },
    });
  });
}
/* eslint-enable */
