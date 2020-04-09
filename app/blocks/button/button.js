/* eslint-disable */
const $ = window.$;

export function button() {
  $(document).on('click', '.Button_submit-button:not(.is-sent)', function () {
    $(this).addClass('is-sent');
  });
}
/* eslint-enable */
