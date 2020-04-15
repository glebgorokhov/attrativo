/* eslint-disable */
// https://github.com/jshjohnson/Choices
import Choices from 'choices.js';

import noUiSlider from 'nouislider';

const $ = window.$;

export function sliders() {
  // Параметры берутся из дата-атрибутов
  $('.js-range').each(function () {
    const
      block = $(this),
      el = block.find('.js-range-slider'),
      from = block.find('.js-range-from'),
      to = block.find('.js-range-to');

    const slider = noUiSlider.create(el.get(0), {
      start: block.data('start'),
      connect: [false, true, false],
      range: {
        min: block.data('min'),
        max: block.data('max'),
      },
      step: 1,
    });

    let isChanged = false;

    slider.on('update', function (values) {
      const
        newFrom = parseInt(values[0]),
        newTo = parseInt(values[1]);

      from.text(newFrom);
      to.text(newTo);

      isChanged = !(newFrom === +block.data('start')[0] && newTo === +block.data('start')[1]);

      const
        section = block.closest('.filters__section'),
        activeItemsBlock = section.find('.filters__section-active-items');

      if (isChanged) {
        section.addClass('is-values-checked');
      } else {
        section.removeClass('is-values-checked');
      }

      activeItemsBlock.text(`${newFrom}€ - ${newTo}€`);
    });

    $(document).on('click', '.js-filters-clear', function () {
      slider.set(block.data('start'));
    });
  });
}

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
