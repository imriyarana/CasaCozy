mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style:"mapbox://styles/mapbox/streets-v12",
    center: Listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
    zoom: 15 // starting zoom
});

const marker = new mapboxgl.Maker({color: "red"})
.setLngLat(listing.geometry.coordinates)
.setPopup(new mapboxgl.Popup({offset:25})
.setHTML(`<h4>${listing.location}<p>Exact location provided after booking ^-^</p>`))
.addTo(map);
