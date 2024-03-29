/* eslint-disable */
const $ = window.$;

export default function tabs() {
  // data-tab-target - вешается на таб
  // data-tab и tab-group  - на содержимое таба
  // tab-group должен быть одинаковый у всех табов одной группы (в одном контейнере, например)

  $(document).on('click', '[data-tab-target]', function (e) {
    e.preventDefault();

    $(this).addClass('is-active').siblings().removeClass('is-active');

    var targetTab = $(this).data('tab-target'),
        tab = $(document).find('[data-tab="' + targetTab + '"]'),
        tabGroup = tab.data('tab-group');

    $(document).find('[data-tab-group="' + tabGroup + '"]').hide().removeClass('is-active');

    tab.show(0, function () {
      $(this).addClass('is-active');

      setTimeout(() => {
        var resizeEvent = window.document.createEvent('UIEvents');
        resizeEvent.initUIEvent('resize', true, false, window, 0);
        window.dispatchEvent(resizeEvent);
      }, 1);
    });
  });
}
/* eslint-enable */
