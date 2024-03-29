/* eslint-disable */
// http://fancyapps.com/fancybox/3/
import '@fancyapps/fancybox';

import { freeze, unfreeze } from '../js-functions/freeze';

const $ = window.$;

export default function popups() {
  $('.js-fancybox').fancybox({
    afterLoad: freeze,
    afterClose: unfreeze,
    touch: false,
  });

  // Switching between forms
  $(document).on('click', '[data-login-target]', function () {
    const
      link = $(this),
      targetID = link.data('login-target'),
      popup = $(this).closest('.popup'),
      formWrapper = popup.find('.popup__forms'),
      activeForm = popup.find('.popup__form.is-active'),
      form = popup.find(`.popup__form[data-login-form="${targetID}"]`);

    if (link.hasClass('is-active')) return;

    // Changing Link Style
    link.addClass('is-active').siblings().removeClass('is-active');

    // Changing Form
    activeForm.removeClass('is-active');

    setTimeout(() => {
      activeForm.slideUp(globalOptions.animationDuration, function () {
        activeForm.removeClass('is-active-passive');
      });

      form.slideDown(globalOptions.animationDuration, function () {
        form.addClass('is-active');
      });
    }, globalOptions.animationDuration);
  });

  $(document).on('click', '[data-form-target]', function (e) {
    e.preventDefault();

    const target = $(this).data('form-target');

    $(document).find(`[data-login-target="${target}"]`)[0].click();
  });
}
/* eslint-enable */
