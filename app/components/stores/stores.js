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
  cityFilter= "";

// Load shops data
if (url) {
  $.getJSON(url, function (json) {
    data = json;
  });
}

function loadTooltipContent(id) {
  const
    info = data[id],
    title = info.title,
    text = info.text,
    country = info.country,
    phone = info.phone,
    googleMaps = info.googleMaps,
    days = info.days;

  let html = `
    <p class="store-tooltip__title">${title}</p>
    <p class="store-tooltip__text">${text}</p>
    <p class="store-tooltip__country">${country}</p>
    <p class="store-tooltip__phone"><span>Τηλεφωνο:</span><b>${phone}</b></p>
    <ul class="store-tooltip__schedule">`;

  $.each(days, function (index, value) {
    html += `<li><span>${index}</span><span>${value}</span></li>`;
  });

  html += `
    </ul>
    <a class="button store-tooltip__button" href="${googleMaps}" target="_blank">ανοιγμα στο <b>Google maps</b></a>
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
      type = store.type.toString(),
      phone = store.phone,
      link = store.googleMaps;

    // Checking filters
    if (!filters.includes(type) && filters.length > 0) return;
    if (cityFilter.length > 0 && cityFilter !== title) return;

    let html = `
      <li class="shop-list__shop" data-shop-id="${id}">
          <div class="shop-list__content">
              <p class="shop-list__title">${title}</p>
              <p class="shop-list__text">${text}</p>
              <p class="shop-list__tel show-lg"><b>TEL:</b> <a href="tel:${phone}">${phone}</a></p>
              <p class="shop-list__link show-lg"><a href="${link}">Ανοιγμα στο Google Maps & ωράριο λετουργιας</a></p>
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
    });

    choices.passedElement.element.addEventListener('change', function(event) {
      cityFilter = event.detail.value;

      shopFilters();
      filterPins();
      loadShops();
    }, false);
  }
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
    shopFilters();
    filterPins();
    loadShops();
  });

  // Close tooltip
  $(document).on('click', '.store-tooltip__close', function () {
    tooltipToggle(true);
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
    loadTooltipContent(shopID);
    tooltipToggle(false);

    // Moving a map
    flyToPin(shopID);
  });
}

/* eslint-enable */
