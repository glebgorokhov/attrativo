/* eslint-disable */
const $ = window.$;

export function cartInfo () {
  $(document).on('click', '.cart-info__button', function () {
    const
      button = $(this),
      isActive = button.hasClass('is-active'),
      block = button.closest('.cart-info'),
      content = block.find('.cart-info__content, .cart-info__delivery');

    if (isActive) {
      button.removeClass('is-active');
      content.slideDown(globalOptions.animationDuration, function () {
        content.removeClass('is-hidden');
      });
    } else {
      button.addClass('is-active');
      content.addClass('is-hidden').slideUp(globalOptions.animationDuration);
    }
  });
}
/* eslint-enable */
