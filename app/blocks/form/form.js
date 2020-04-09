/* eslint-disable */
// https://github.com/jshjohnson/Choices
import Choices from 'choices.js';

const $ = window.$;

export function selects() {
  const
    selectClass = '.js-select';

  if ($(selectClass).length) {
    $(selectClass).each(function () {
      const choices = new Choices($(this)[0], {
        searchEnabled: false,
        itemSelectText: '',
        classNames: {
          containerOuter: 'choices choices_default',
        },
      });
    });
  }
}

export function numberinput() {
  $(document).on('click', '.js-numberbox-minus, .js-numberbox-plus', function (e) {
    e.preventDefault();

    const input = $(this).parent().find('.js-numberbox-input');
    let val = +input.val();
    const minus = $(this).attr('class').includes('minus') || false;

    if (!val.length) {
      input.val(1);
    }

    if (minus) {
      input.val(val > 1 ? (val -= 1) : 1);
    } else {
      input.val(val += 1);
    }
  });

  $(document).on('keyup change', '.js-numberbox-input', function () {
    this.value = this.value.replace(/[^\d]/, '');
    if ($(this).val() < 1) $(this).val(1);
  });
}
/* eslint-enable */
