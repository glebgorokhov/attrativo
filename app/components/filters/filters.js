/* eslint-disable */
const $ = window.$;

import {freeze, unfreeze} from "../../blocks/js-functions/freeze";

export function filters () {
  // Accordions
  $(document).on('click', '.filters__section-header', function () {
    const
      section = $(this).closest('.filters__section'),
      content = section.find('.filters__section-content');

    if (section.hasClass('is-active')) {
      section.removeClass('is-active');
      content.slideUp(globalOptions.animationDuration, function () {
        section.removeClass('is-active-passive');
      });
    } else {
      section.addClass('is-active');
      content.slideDown(globalOptions.animationDuration);
    }
  });

  // Categories
  $(document).on('click', '[data-open-items]', function (e) {
    e.preventDefault();

    const
      button = $(this),
      target = button.data('open-items'),
      current = button.closest('.filters__category-content'),
      content = $(document).find(`.filters__category-content[data-items-id="${target}"]`);

    current.removeClass('is-active');
    current.slideUp(globalOptions.animationDuration, function () {
      current.removeClass('is-active-passive');
    });

    content.slideDown(globalOptions.animationDuration).addClass('is-active');
  });

  // Mobile filters
  function toggleFilters (hide) {
    const
      filters = $(document).find('.filters');

    if (filters.hasClass('is-active') != hide) return;

    if (hide) {
      filters.removeClass('is-active');

      setTimeout(() => {
        filters.hide();
      }, globalOptions.animationDuration);

      unfreeze();
    } else {
      filters.show(0, function () {
        filters.addClass('is-active');
      });

      freeze();
    }
  }

  $(document).on('click', '.js-filters-open', function () {
    toggleFilters(false);
  });

  $(document).on('click', '.js-filters-close', function () {
    toggleFilters(true);
  });

  $(document).on('click', '.js-filters-clear', function () {
    $(document).find('input[type="checkbox"]').prop('checked', false);
  });
}
/* eslint-enable */
