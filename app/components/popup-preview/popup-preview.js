/* eslint-disable */
const $ = window.$;

function popupMinicartToggle (hide) {
  const
    popup = $(document).find('.popup-preview'),
    isActive = popup.hasClass('is-active');

  if (isActive && hide) {
    popup.removeClass('is-active');

    setTimeout(() => {
      popup.hide();
    }, globalOptions.animationDuration);
  } else if (!isActive && !hide) {
    popup.show(0, function () {
      $(this).addClass('is-active');
    });
  }
}

function popupSticky () {
  const
    popup = $(document).find('.popup-preview');

  $(window).on('load scroll', function () {
    const
      sT = $(this).scrollTop(),
      point = 91,
      sticky = popup.hasClass('is-sticky');

    if (sT >= point) {
      if (!sticky) popup.addClass('is-sticky');
    } else {
      if (sticky) popup.removeClass('is-sticky');
    }
  });
}

export function popupPreview () {
  $(document).on('click', '.js-popup-minicart-open', function () {
    popupMinicartToggle();
  });

  $(document).on('click', '.js-popup-minicart-close', function () {
    popupMinicartToggle(true);
  });

  popupSticky();

  $(window).resize(function () {
    if ($(window).width() >= globalOptions.sizes.lg && $('.popup-preview').hasClass('is-active')) {
      popupMinicartToggle(true);
    }
  });
}
/* eslint-enable */
