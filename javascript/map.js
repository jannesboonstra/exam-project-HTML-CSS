var mymap = L.map('mapid').setView([53.11629, 6.11169], 18);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiamFubmVzYm9vbnN0cmEiLCJhIjoiY2tqYmc0ZG85MDd3YjJ5cDJuYThmMzN2NCJ9.0Fm9iuV8YuoTDNrIkfo9vw'
}).addTo(mymap);

var marker = L.marker([53.11629, 6.11169]).addTo(mymap);