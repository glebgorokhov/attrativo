/* eslint-disable */
import Choices from 'choices.js';

const $ = window.$;

function catalogueSelect () {
  const selectClass = '.js-catalogue-select';

  if ($(selectClass).length) {
    const choices = new Choices(selectClass, {
      searchEnabled: false,
      itemSelectText: '',
      classNames: {
        containerOuter: 'choices choices_catalogue',
      },
    });
  }
}

function catalogueColumns () {
  $(document).on('click', '[data-catalogue-columns]', function () {
    const
      button = $(this),
      amount = button.data('catalogue-columns'),
      columns = $(document).find('.catalogue__content .grid');

    button.addClass('is-active').siblings().removeClass('is-active');

    if (amount > 2) {
      columns.removeClass('grid_catalogue_cols_xl_3 grid_catalogue_cols_xl_4').addClass(`grid_catalogue_cols_xl_${amount}`);
    } else {
      columns.removeClass('grid_catalogue_cols_lg_1 grid_catalogue_cols_lg_2').addClass(`grid_catalogue_cols_lg_${amount}`);
    }
  });
}

export function catalogue () {
  catalogueSelect();
  catalogueColumns();
}
/* eslint-enable */
