/* eslint-disable */
const $ = window.$;

function clickOnButton() {
  $(document).on('click', '.js-button-add-to-cart', function () {
    $(document).find('.js-button-add-to-cart').addClass('is-active');

    const block = $(document).find('.product-result');

    block.addClass('is-active');

    if ($(window).width() > 1360) {
      block.slideDown(globalOptions.animationDuration);
    } else {
      block.css({
        display: 'block',
      });
    }

    setTimeout(() => {
      block.addClass('is-visible');
    }, globalOptions.animationDuration);
  });

  //
  $(document).on('click', '.js-product-result-close', function () {
    $(this).closest('.product-result').addClass('is-hidden');
  });
}

export function productResult () {
  clickOnButton();
}
/* eslint-enable */
