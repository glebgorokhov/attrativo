/* eslint-disable */
const $ = window.$;

function toggleTexts () {
  const
    activeText = $(document).find('.catalogue-head__text.is-active'),
    secondText = activeText.siblings();

  activeText.addClass('is-hidden');

  setTimeout(() => {
    activeText.slideUp(globalOptions.animationDuration, function () {
      $(this).removeClass('is-active-passive is-active');
    });

    secondText.slideDown(globalOptions.animationDuration, function () {
      $(this).addClass('is-active').removeClass('is-hidden');
    });
  }, globalOptions.animationDuration);
}

export function catalogueHead () {
  $(document).on('click', '.js-catalogue-toggle-text', function () {
    toggleTexts();
  });
}
/* eslint-enable */
