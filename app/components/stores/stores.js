/* eslint-disable */
import Choices from 'choices.js';

const $ = window.$;

const
  url = $(document).find('.stores').data('shops-url'),
  tooltip = $(document).find('.stores__tooltip'),
  tooltipContainer = tooltip.find('.store-tooltip__content');

let
  data,
  filters,
  cityFilter= "",
  firstLoaded = false;

// Load shops data
if (url) {
  $.getJSON(url, function (json) {
    data = json;
  });
}

function loadTooltipContent(id) {
  const
    info = data[id],
    googleMaps = info.googleMaps,
    days = info.days;

  let html = `
    <p class="store-tooltip__title">ΩΡΑΡΙΟ ΛΕΙΤΟΥΡΓΙΑΣ</p>
    <ul class="store-tooltip__schedule">`;

  $.each(days, function (index, value) {
    html += `<li><span>${index}</span><span>${value}</span></li>`;
  });

  html += `
    </ul>
    <a class="store-tooltip__link hide-lg" href="${googleMaps}" target="_blank">
      <span>ΟΔΗΓΙΕΣ</span>
      <svg><use xlink:href="assets/images/icon.svg#icon_arrow_button"></use></svg>
    </a>
  `;

  tooltipContainer.html(html);
}

function tooltipToggle(hide) {
  if (hide !== tooltip.hasClass('is-active')) return;

  const
    activeListShop = $(document).find('.shop-list__shop.is-active');

  if (hide) {
    tooltip.removeClass('is-active');
    activeListShop.removeClass('is-active');

    setTimeout(() => {
      tooltip.hide();
    }, globalOptions.animationDuration);
  } else {
    tooltip.show(0, function () {
      tooltip.addClass('is-active');
    });
  }
}

function shopFilters() {
  let filtersArray = [];

  const
    container = $(document).find('.stores__checkboxes'),
    checkboxes = container.find('input');

  checkboxes.each(function () {
    const
      el = $(this),
      checked = $(this).prop('checked');

    if (checked) filtersArray.push(el.val());
  });

  filters = filtersArray;
  console.log(`Current filters: ${filters}`);
}

function mapToggle(hide, callback) {
  const
    map = $(document).find('#map-wrapper');

  if (hide) {
    map.slideUp(globalOptions.animationDuration);
    map.removeClass('is-active');
  } else {
    map.slideDown(globalOptions.animationDuration, function () {
      var resizeEvent = window.document.createEvent('UIEvents');
      resizeEvent.initUIEvent('resize', true, false, window, 0);
      window.dispatchEvent(resizeEvent);

      if (!firstLoaded) {
        firstLoaded = true;
        window.map.zoomIn(1);
      }
    });
    map.addClass('is-active');
  }

  setTimeout(callback, globalOptions.animationDuration);
}

function mapPosition(el) {
  const
    element = el,
    siblings = element.closest('.shop-list__list').find('.shop-list__shop'),
    posTop = element.position().top;

  let targetSibling = element;

  siblings.each(function (i) {
    if ($(this).position().top > posTop) {
      targetSibling = siblings[i-1];
      return false;
    } else if (i === siblings.length-1) {
      targetSibling = siblings[i];
    }
  });

  mapToggle(true, function () {
    $(document).find('#map-wrapper').insertAfter(targetSibling);
    mapToggle(false);
  });
}

function loadShops() {
  const
    shopsContainer = $(document).find('.stores__list ol');

  shopsContainer.html('');

  $.each(data, function (i) {
    const
      store = this,
      id = store.id,
      title = store.title,
      text = store.text,
      textTwo = store.textTwo,
      type = store.type.toString(),
      phone = store.phone,
      country = store.country,
      photo = store.photo,
      link = store.googleMaps;

    // Checking filters
    if (!filters.includes(type) && filters.length > 0) return;
    if (cityFilter.length > 0 && cityFilter !== title) return;

    let html = `
      <li class="shop-list__shop" data-shop-id="${id}">
        <div class="shop-list__wrapper">
           <p class="shop-list__title">${title}</p>
           <div class="shop-list__text">
             ${text ? `<p class="is-upper">${text}</p>` : ``}
             ${textTwo ? `<p class="is-upper">${textTwo}</p>` : ``}
             ${country ? `<p>${country}</p>` : ``}
             <p>Τηλέφωνο : ${phone}</p>
           </div>
           <div class="shop-list__photo">
             <img src="${photo}">  
           </div>
           <button class="Button Button_style_light shop-list__button" type="button">ΧΑΡΤΗΣ & ΩΡΑΡΙΟ ΛΕΙΤΟΥΡΓΙΑΣ</button>
        </div>
      </li>
    `;

    shopsContainer.append(html);
  });

  tooltipToggle(true);
}

function filterPins() {
  $(document).find('.leaflet-marker-icon').each(function () {
    const
      marker = $(this),
      id = $(this).attr('alt'),
      type = data[id].type.toString(),
      city = $(this).attr('title');

    if (!filters.includes(type) && filters.length > 0) {
      marker.hide();
    } else {

      if (cityFilter.length > 0) {
        if (cityFilter === city) {
          marker.show();
        } else {
          marker.hide();
        }
      } else {
        marker.show();
      }
    }
  });
}

function flyToPin(id) {
  window.map.flyTo(data[id].coords.split(','), 14, 1000);
}

export function selectShop(id) {
  $(document).find(`.shop-list__shop[data-shop-id="${id}"]`)[0].click();
}

// City filter
let choices;

function cityFilterInit() {
  if ($('.js-store-select').length) {
    choices = new Choices('.js-store-select', {
      searchEnabled: false,
      itemSelectText: '',
      classNames: {
        containerOuter: 'choices choices_stores',
      },
    });

    choices.passedElement.element.addEventListener('change', function(event) {
      cityFilter = event.detail.value;

      saveMap();
      shopFilters();
      filterPins();
      loadShops();
    }, false);
  }
}

function saveMap() {
  $(document).find('#map-wrapper').hide().insertAfter('.stores__left');
}

export function stores() {
  if (!url) return;

  let activeShop = 0;

  // Load default filters, update on check
  shopFilters();

  // Filter pins
  filterPins();

  // Load and update city filter
  cityFilterInit();

  // Load shops
  loadShops();

  // Update page on changing filters
  $(document).on('click', '.list-checkbox', function () {
    saveMap();
    shopFilters();
    filterPins();
    loadShops();
  });

  // Close tooltip
  $(document).on('click', '.js-store-tooltip-close', function () {
    tooltipToggle(true);
    mapToggle(true);
  });

  // Selecting shop from the list
  $(document).on('click', '.shop-list__shop', function () {
    const
      shopBlock = $(this),
      shopID = shopBlock.data('shop-id');

    // Active state in list
    shopBlock.addClass('is-active').siblings().removeClass('is-active');

    // Changing active shop
    activeShop = shopID;

    // Load and show tooltip
    mapPosition(shopBlock);

    // Moving a map
    setTimeout(() => {
      loadTooltipContent(shopID);
      tooltipToggle(false);
      flyToPin(shopID);
    }, globalOptions.animationDuration);
  });
}

/* eslint-enable */
