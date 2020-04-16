/* eslint-disable */
const $ = window.$;

export function headerSticky () {
  const
    w = $(window),
    header = $(document).find('.Header.is-stickable'),
    headerTop = header.find('.Header__top'),
    headerTopH = headerTop.outerHeight(),
    productSticky = $(document).find('.product-sticky');

  if (header.length === 0 || undefined) return;

  w.on('load scroll', function () {
    const
      sT = w.scrollTop();

    if (sT >= headerTopH) {
      header.addClass('is-sticky');
      $('body').css({ paddingTop: header.outerHeight() });
    } else {
      header.removeClass('is-sticky');
      $('body').css({ paddingTop: '' });
    }

    if (sT> 200) {
      productSticky.show(0, function () {
        productSticky.addClass('is-active');
      });
    } else {
      if (productSticky.hasClass('is-active')) {
        productSticky.removeClass('is-active');

        setTimeout(() => {
          productSticky.hide();
        }, globalOptions.animationDuration);
      }
    }
  });
}
/* eslint-enable */
