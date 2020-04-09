/* eslint-disable */
const $ = window.$;

export function productAccordions () {
  $(document).on('click', '.product-accordions__button', function () {
    const
      button = $(this),
      accordion = button.closest('.product-accordions__accordion'),
      content = accordion.find('.product-accordions__content'),
      isActive = accordion.hasClass('is-active');

    if (isActive) {
      content.slideUp(globalOptions.animationDuration);
      accordion.removeClass('is-active');
    } else {
      content.slideDown(globalOptions.animationDuration);
      accordion.addClass('is-active');
    }
  });
}
/* eslint-enable */
