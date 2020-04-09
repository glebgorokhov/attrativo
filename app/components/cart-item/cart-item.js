/* eslint-disable */
import Choices from 'choices.js';

const $ = window.$;

function sizeSelect() {
  const selectClass = '.js-size-select';

  if ($(selectClass).length) {
    $(selectClass).each(function () {
      const choices = new Choices($(this)[0], {
        searchEnabled: false,
        itemSelectText: '',
        classNames: {
          containerOuter: 'choices choices_sizes',
        },
      });
    });
  }
}

function cartRemove() {
  $(document).on('click', '.js-cart-remove', function () {
    const
      button = $(this),
      card = button.closest('.CartItem');

    let
      col = card.closest('.grid__col');

    const
      hasCol = col.length;

    if (!hasCol) col = card;

    const
      colW = col.outerWidth(),
      colH = col.outerHeight(),
      isMobile = $(window).width() < globalOptions.sizes.lg,
      isSmall = card.hasClass('CartItem_small');

    card.addClass('is-removed');

    setTimeout(() => {
      col.css({
        marginLeft: isSmall ? 0 : (isMobile ? 0 : -colW),
        marginTop: isSmall ? -colH : (isMobile ? -colH : 0),
      });

      setTimeout(() => {
        col.remove();
      }, globalOptions.animationDuration);
    }, globalOptions.animationDuration);
  });
}

export function cartItem() {
  sizeSelect();
  cartRemove();
}
/* eslint-enable */
