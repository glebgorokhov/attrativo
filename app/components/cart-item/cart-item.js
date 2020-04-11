/* eslint-disable */
const $ = window.$;

function cartRemove() {
  $(document).on('click', '.js-cart-remove', function () {
    const
      button = $(this),
      card = button.closest('.CartItem');

    const
      colH = card.outerHeight();

    card.addClass('is-removed');

    setTimeout(() => {
      card.css({
        marginTop: -colH,
      });

      setTimeout(() => {
        card.remove();
      }, globalOptions.animationDuration);
    }, globalOptions.animationDuration);
  });
}

export function cartItem() {
  cartRemove();
}
/* eslint-enable */
