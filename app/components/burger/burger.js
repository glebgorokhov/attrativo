/* eslint-disable */
const $ = window.$;

import {freeze, unfreeze} from "../../blocks/js-functions/freeze";

function burgerToggle(hide) {
  const
    burger = $('.burger');

  if (!hide) {
    freeze();

    burger.show(0, function () {
      $(this).addClass('is-active');
    });

    const
      menuContainer = burger.find('.burger-menu'),
      activeMenu = menuContainer.find('.burger-menu__screen.is-active');

    menuContainer.height(activeMenu.height());
  } else {
    burger.removeClass('is-active');

    setTimeout(() => {
      burger.hide();
    }, globalOptions.animationDuration);

    unfreeze();
  }
}

export function burger () {
  $(document).on('click', '.js-burger-close', function () {
    burgerToggle(true);
  });

  $(document).on('click', '.js-burger-open', function () {
    burgerToggle()
  });

  $(window).resize(function () {
    if ($(window).width() >= globalOptions.sizes.lg && $('.burger').hasClass('is-active')) {
      burgerToggle(true);
    }
  });

  // Scrollbar
  OverlayScrollbars(document.querySelectorAll('.js-burger-scrollbar'), {
    className: 'os-theme-dark',
    scrollbars: {
      clickScrolling: true,
    },
  });

  // Navigation
  $(document).on('click', '[data-burger-target-screen]', function () {
    const
      target = $(this).data('burger-target-screen'),
      thisScreen = $(this).closest('.burger-menu__screen'),
      nextScreen = $(document).find(`[data-burger-screen="${target}"]`),
      menu = $(this).closest('.burger-menu');

    thisScreen.removeClass('is-active').addClass('is-past');
    nextScreen.removeClass('is-past') .addClass('is-active');

    menu.height(nextScreen.height());
  });
}
/* eslint-enable */
