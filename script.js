// สร้างแผนที่
var map = L.map('map').setView([13.736717, 100.523186], 12);

// โหลดแผนที่
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);


// ไอคอนหมุดสี
var redIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25,41],
    iconAnchor: [12,41]
});

var blueIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25,41],
    iconAnchor: [12,41]
});

var greenIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25,41],
    iconAnchor: [12,41]
});

var orangeIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25,41],
    iconAnchor: [12,41]
});

var violetIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-violet.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25,41],
    iconAnchor: [12,41]
});


// 1 Grand Palace
L.marker([13.7500,100.4913],{icon:redIcon}).addTo(map)
.bindPopup("<b>Grand Palace</b><br>Bangkok<br><img src='https://upload.wikimedia.org/wikipedia/commons/1/10/Grand_Palace_Bangkok.jpg' width='150'>");

// 2 Wat Phra Kaew
L.marker([13.7516,100.4925],{icon:blueIcon}).addTo(map)
.bindPopup("<b>Wat Phra Kaew</b><br>Bangkok<br><img src='https://upload.wikimedia.org/wikipedia/commons/c/c1/Wat_Phra_Kaew_by_Ninara_TSP_edit_crop.jpg' width='150'>");

// 3 Lumphini Park
L.marker([13.7304,100.5418],{icon:greenIcon}).addTo(map)
.bindPopup("<b>Lumphini Park</b><br>Bangkok<br><img src='https://upload.wikimedia.org/wikipedia/commons/3/3b/Lumphini_Park_Bangkok.jpg' width='150'>");

// 4 Wat Arun
L.marker([13.7437,100.4889],{icon:orangeIcon}).addTo(map)
.bindPopup("<b>Wat Arun</b><br>Bangkok<br><img src='https://upload.wikimedia.org/wikipedia/commons/2/26/Wat_Arun_Ratchawararam.jpg' width='150'>");

// 5 Chatuchak Market
L.marker([13.7996,100.5531],{icon:violetIcon}).addTo(map)
.bindPopup("<b>Chatuchak Market</b><br>Bangkok<br><img src='https://upload.wikimedia.org/wikipedia/commons/6/6d/Chatuchak_Market.jpg' width='150'>");