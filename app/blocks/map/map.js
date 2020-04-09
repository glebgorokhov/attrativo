/* eslint-disable */
// http://leafletjs.com
// Для кластеров использовать: https://github.com/Leaflet/Leaflet.markercluster
import L from 'leaflet';
import {selectShop} from "../../components/stores/stores";

const $ = window.$;

const url = $(document).find('.stores').data('shops-url');
let data;

export default function maps() {
  if (!$('#map').length) {
    return;
  }

  // Load shops data
  $.getJSON(url, function (json) {
    data = json;

    window.map = L.map('map', {
      scrollWheelZoom: false,
      touchZoom: false,
    }).setView(data[0].coords.split(','), 14);

    L.tileLayer('https://api.mapbox.com/styles/v1/theververy1/ck5jfs3380g3q1ipmr9mkxp9g/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      maxZoom: 500,
      id: 'theververy1/ck5jfs3380g3q1ipmr9mkxp9g',
      accessToken: 'pk.eyJ1IjoidGhldmVydmVyeTEiLCJhIjoiY2lzZXdzaXZ4MDBjaTJudm93dDI4MGVrMCJ9.Z8KKk0M_lpDTPB6_JtJBxg',
    }).addTo(map);

    const icon = L.icon({
      iconUrl: 'assets/images/pin_big.svg',
      shadowUrl: false,
      iconSize: [28, 39], // size of the icon
      iconAnchor: [14, 39], // point of the icon which will correspond to marker's location
    });

    $.each(data, function () {
      const
        el = this,
        id = el.id,
        coords = el.coords,
        city = el.title;

      const marker = L.marker(coords.split(','), {
        icon: icon,
        alt: id,
        title: city
      }).addTo(map).on('click', function () {
        selectShop(id);
      });
    });
  });
}
/* eslint-enable */
