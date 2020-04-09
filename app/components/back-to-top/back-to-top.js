/* eslint-disable */
const $ = window.$;

export function backToTop () {
  $(document).on('click', '.back-to-top__button', function () {
    $('body, html').stop().animate({
      scrollTop: 0,
    }, 1000, 'swing');
  });
}
/* eslint-enable */
