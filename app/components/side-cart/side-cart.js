/* eslint-disable */
import {freeze, unfreeze} from "../../blocks/js-functions/freeze";

const $ = window.$;

function sideCartToggle(hide) {
  const
    cart = $(document).find('.CartOverlay'),
    isActive = cart.hasClass('is-active');

  if (isActive !== hide) return;

  if (hide) {
    cart.removeClass('is-active');

    unfreeze();

    setTimeout(() => {
      cart.hide();
    }, globalOptions.animationDuration);
  } else {
    freeze();

    cart.show(0, function () {
      $(this).addClass('is-active');
    });
  }
}

export function sideCart () {
  $(document).on('click', '.CartOverlay__wrapper', function (e) {
    e.stopPropagation();
  });

  $(document).on('click', '.js-side-cart-open', function (e) {
    if ($(window).width() >= globalOptions.sizes.lg) e.preventDefault();

    $(window).scrollTop(0);

    sideCartToggle(false);
  });

  $(document).on('click', '.js-side-cart-close', function (e) {
    sideCartToggle(true);
  });

  $(window).resize(function () {
    if ($(window).width() < globalOptions.sizes.lg) sideCartToggle(true);
  });
}
/* eslint-enable */
