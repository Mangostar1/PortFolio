let ipSearch = document.getElementById('ipSearch');
let btn = document.getElementById('btn-ip');

let ipAddress = document.getElementById('ip');
let locationHTML = document.getElementById('location');
let timezoneHTML = document.getElementById('timezoneHTML');
let ispHTML = document.getElementById('isp');

//valores por defecto para el mapa
let x = 34.04915;
let y = -118.09462;

//mapbox
let map = L.map('map').setView([x, y], 13);
const token = 'pk.eyJ1IjoibWFuZ29zdGFyIiwiYSI6ImNsMnFmazRlbDA1dHkzYm5zZ2dlenAyMG0ifQ.b4BfuS65oqcLdaHuTGrKBA';

L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${token}`, {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
}).addTo(map);


//geoIP
async function ipGeo(ip) {
    const APIgeo = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_vDtKTdmblFb16ibEjkMaMMkawnLDl&ipAddress=${ip}`);
    const data = await APIgeo.json();

    ipAddress.innerHTML = data.ip;
    locationHTML.innerHTML = data.location.region + ',' + data.location.country;
    timezoneHTML.innerHTML = 'UTC' + data.location.timezone;
    ispHTML.innerHTML = data.isp;

    x = data.location.lat;
    y = data.location.lng;

    map.setView([x, y], 13);
    L.marker([x, y]).addTo(map);
}

btn.onclick = () => {
    ipGeo(ipSearch.value);
}