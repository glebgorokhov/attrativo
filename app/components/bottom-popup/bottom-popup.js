/* eslint-disable */
const $ = window.$;

import {freeze, unfreeze} from "../../blocks/js-functions/freeze";

$.fn.toggleBottomPopup = function (hide) {
  const
    popup = this,
    isActive = popup.hasClass('is-active');

  if (hide && isActive) {
    popup.removeClass('is-active');

    unfreeze();

    setTimeout(() => {
      popup.hide();
    }, globalOptions.animationDuration);
  } else if (!hide && !isActive) {
    freeze();

    popup.show(0, function () {
      popup.addClass('is-active');
    });
  }
};

export function bottomPopup () {
  $(document).on('click', '.js-bottom-popup-open', function (e) {
    e.preventDefault();

    const
      link = $(this),
      target = $(document).find(link.attr('href'));

    target.toggleBottomPopup();
  });

  $(document).on('click', '.bottom-popup', function (e) {
    $(this).toggleBottomPopup(true);
  });

  $(document).on('click', '.bottom-popup__popup', function (e) {
    e.stopPropagation();
  });

  $(window).resize(function () {
    if ($(window).width() >= globalOptions.sizes.lg) {
      $(document).find('.bottom-popup.is-active').toggleBottomPopup(true);
    }
  });
}
/* eslint-enable */
