/* eslint-disable */
const $ = window.$;

export function menu () {
  $('[data-target-menu]').on('mouseenter click', function () {
    const
      link = $(this),
      activeLink = $(document).find('.Header__menu-link.is-active'),
      menuID = link.data('target-menu'),
      menu = $(document).find(`.menu__wrapper[data-menu="${menuID}"]`),
      others = menu.siblings();

    if (link.hasClass('is-active')) return;

    activeLink.removeClass('is-active');
    link.addClass('is-active');

    menu.show(0, function () {
      const
        el = $(this);

      el.addClass('is-active');
    });

    others.removeClass('is-active');

    setTimeout(() => {
      others.hide();
    }, globalOptions.animationDuration);
  });

  $('.Header').on('mouseleave', function () {
    const
      header = $(this),
      activeLink = header.find('.Header__menu-link.is-active'),
      activeMenu = header.find('.menu__wrapper.is-active');

    activeLink.removeClass('is-active');
    activeMenu.removeClass('is-active');

    setTimeout(() => {
      activeMenu.hide();
    }, globalOptions.animationDuration);
  });
}
/* eslint-enable */
