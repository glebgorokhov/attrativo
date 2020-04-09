/* eslint-disable */
const $ = window.$;

export function scrollTop() {
  const button = $(document).find('.scroll-top');

  $(window).scroll(function () {
    const
      wH = $(this).height(),
      sT = $(this).scrollTop(),
      footerPos = $(document).find('.Footer').position().top;

    if (sT >= wH && sT <= footerPos - wH) {
      if (button.hasClass('is-active')) return;

      button.show(0, function () {
        $(this).css({display: 'flex'}).addClass('is-active');
      });
    } else {
      if (!button.hasClass('is-active')) return;
      button.removeClass('is-active');

      setTimeout(() => {
        button.hide();
      }, globalOptions.animationDuration);
    }
  });

  button.click(function () {
    $('body, html').stop().animate({
      scrollTop: 0,
    }, 1000, 'swing');
  });
}

/* eslint-enable */
