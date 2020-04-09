/* eslint-disable */
import Choices from 'choices.js';

const $ = window.$;

function recentlySelect() {
  const
    selectClass = '.js-select-recently';

  if ($(selectClass).length) {
    $(selectClass).each(function () {
      const choices = new Choices($(this)[0], {
        searchEnabled: false,
        itemSelectText: '',
        classNames: {
          containerOuter: 'choices choices_default',
        },
      });

      choices.passedElement.element.addEventListener('change', function(event) {
        $(document).find(`[data-tab-target="${event.detail.value}"]`)[0].click();
      }, false);

      $(document).find('.recently [data-tab-target]').click(function () {
        choices.setChoiceByValue($(this).data('tab-target'));
      });
    });
  }
}

export function recently () {
  recentlySelect();
}
/* eslint-enable */
