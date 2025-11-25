"use strict";

function success(pos) {
  const crd = pos.coords;
  const map = L.map("map", { center: [crd.latitude, crd.longitude], zoom: 17 });

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  let marker = null;
  function onMapClick(e) {
    if (marker !== null) {
      marker.remove();
      marker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
      marker.bindPopup(
        "Latitude: " +
          e.latlng.lat.toFixed(6) +
          "<br/>Longitude: " +
          e.latlng.lng.toFixed(6)
      );
    } else {
      marker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
      marker.bindPopup(
        "Latitude: " +
          e.latlng.lat.toFixed(6) +
          "<br/>Longitude: " +
          e.latlng.lng.toFixed(6)
      );
    }
  }
  map.on("click", onMapClick);
}

navigator.geolocation.getCurrentPosition(success);
