/* eslint-disable */
import Choices from 'choices.js';

const $ = window.$;

function productSizes() {
  const
    selectClass = '.js-product-select',
    valueClass = '.js-product-select-size';

  if ($(selectClass).length) {
    $(selectClass).each(function () {
      const choices = new Choices($(this)[0], {
        searchEnabled: false,
        itemSelectText: '',
        classNames: {
          containerOuter: 'choices choices_product',
        },
      });
    });
  }
}

function productColors() {
  $(document).on('change', '.js-product-color', function () {
    const
      color = $(this).data('color-name'),
      colorContainer = $(document).find('.js-product-active-color');

    colorContainer.text(color);
  });
}

function productFavouriteAdaptive() {
  $(document).on('click', '.js-product-favourite', function () {
    const
      state = $(this).find('input').prop('checked');

    $(document).find('.js-product-favourite input').prop('checked', state);
  });
}

export function product () {
  productSizes();
  productColors();
  productFavouriteAdaptive();
}
/* eslint-enable */
