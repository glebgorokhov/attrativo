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

}
/* eslint-enable */
