/* eslint-disable */
const $ = window.$;

import {freeze, unfreeze} from "../../blocks/js-functions/freeze";

export function filtersUpdated() {
  const
    filtersButton = $(document).find('.js-filters-open');

  let filtersAmount = 0;

  $(document).find('.filters input').each(function () {
    if ($(this).prop('checked')) {
      filtersAmount += 1;
      return false;
    }
  });

  if (filtersAmount > 0) {
    filtersButton.addClass('is-active');
  } else {
    filtersButton.removeClass('is-active');
  }
}

export function makeFilterTags() {
  const
    tagsBlock = $(document).find('.filters-tags'),
    tagsContainer = tagsBlock.find('.filters-tags__tags'),
    isActive = tagsBlock.hasClass('is-active');

  tagsContainer.html('');

  $(document).find('.filters input').each(function () {
    if ($(this).prop('checked')) {
      const
        el = $(this),
        text = el.closest('.filters__checkbox').find('.filters__checkbox-text').text();

      const newTag = $(`<div class="filters-tags__tag">
        <span>${text}</span>
        <svg><use xlink:href="assets/images/icon.svg#icon_close_big"></use></svg>
      </div>`);

      newTag.appendTo(tagsContainer);
      newTag.on('click', function () {
        $(this).remove();
        el.prop('checked', false).trigger('change');
        $(this).off('click');
      });
    }
  });

  const tagsAmount = tagsContainer.find('.filters-tags__tag').length;

  if (tagsAmount === 0 || undefined) {
    if (isActive) {
      tagsBlock.removeClass('is-active');

      setTimeout(() => {
        tagsBlock.slideUp(globalOptions.animationDuration);
      }, globalOptions.animationDuration);
    }
  } else {
    if (!isActive) {
      tagsBlock.slideDown(globalOptions.animationDuration, function () {
        tagsBlock.addClass('is-active');
      });
    }
  }
}

export function filters() {
  makeFilterTags();

  // Accordions
  $(document).on('click', '.filters__section-header', function () {
    const
      section = $(this).closest('.filters__section'),
      content = section.find('.filters__section-content');

    if (section.hasClass('is-active')) {
      section.removeClass('is-active');

      // Section has checked items
      section.find('.filters__section-active-items').slideDown(globalOptions.animationDuration);

      content.slideUp(globalOptions.animationDuration, function () {
        section.removeClass('is-active-passive');
      });
    } else {
      section.addClass('is-active');
      content.slideDown(globalOptions.animationDuration);

      // Section has checked items
      section.find('.filters__section-active-items').slideUp(globalOptions.animationDuration);
    }
  });

  // #########################################
  // section.addClass('is-values-checked');

  $(document).on('change', '.filters__checkbox-input', function () {
    const
      checkbox = $(this),
      group = $(document).find(`input[name="${checkbox.attr('name')}"]`),
      section = checkbox.closest('.filters__section'),
      activeItemsBlock = section.find('.filters__section-active-items');

    let values = [];

    group.each(function () {
      const
        el = $(this),
        checked = el.prop('checked');

      if (checked) {
        values.push(el.closest('.filters__checkbox').find('.filters__checkbox-text').text());
      }
    });

    if (values.length > 0) {
      section.addClass('is-values-checked');
      activeItemsBlock.text(values.join(', '));
    } else {
      section.removeClass('is-values-checked');
      activeItemsBlock.text('');
    }

    filtersUpdated();
    makeFilterTags();
  });
  // #########################################

  // Category accordions
  $(document).on('click', '.filters__category-title', function (e) {
    const
      section = $(this).closest('.filters__category'),
      content = section.find('.filters__category-accordion');

    if (content.length === 0 || undefined) return;

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

  // Mobile filters
  function toggleFilters(hide) {
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
    $(document).find('input[type="checkbox"]').prop('checked', false).trigger('change');
  });
}

/* eslint-enable */
