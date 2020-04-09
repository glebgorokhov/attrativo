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

      choices.passedElement.element.addEventListener('change', function(event) {
        $(document).find(valueClass).text(event.detail.value);
      }, false);
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
  $(document).on('click', '.product__favourite', function () {
    const
      state = $(this).find('input').prop('checked');

    $(document).find('.product__favourite input').prop('checked', state);
  });
}

export function product () {
  productSizes();
  productColors();
  productFavouriteAdaptive();
}
/* eslint-enable */
