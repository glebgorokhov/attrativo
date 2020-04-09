/* eslint-disable */
const $ = window.$;

export function footer () {
  $(document).on('click', '.Footer-Link', function () {
    const
      link = $(this),
      isActive = link.hasClass('is-active'),
      menu = link.closest('.Footer__menu'),
      submenu = link.siblings('.Footer__submenu'),
      footer = link.closest('.Footer');

    if (isActive) {
      submenu.slideUp(globalOptions.animationDuration);
      link.removeClass('is-active');
      footer.removeClass('has-submenu-open');
    } else {
      const
        activeLink = menu.find('.Footer-Link.is-active');

      activeLink
        .removeClass('is-active')
        .siblings('.Footer__submenu')
        .slideUp(globalOptions.animationDuration);

      footer.addClass('has-submenu-open');

      setTimeout(() => {
        link.addClass('is-active');
        submenu.slideDown(globalOptions.animationDuration);
      }, activeLink.length > 0 ? globalOptions.animationDuration : 0);
    }
  });
}
/* eslint-enable */
