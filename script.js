// สร้างแผนที่
var map = L.map('map').setView([13.7563,100.5018],12);

// basemap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
 attribution:'&copy; OpenStreetMap'
}).addTo(map);

// icon
var myIcon = L.icon({
 iconUrl:'icon.png',
 iconSize:[35,35],
 iconAnchor:[17,35],
 popupAnchor:[0,-30]
});


// Grand Palace
var marker1 = L.marker([13.7515,100.4926],{icon:myIcon}).addTo(map);
marker1.bindPopup("<b>Grand Palace</b><br>Bangkok<br><img src='https://upload.wikimedia.org/wikipedia/commons/1/10/Grand_Palace_Bangkok.jpg' width='150'>");

// Wat Phra Kaew
var marker2 = L.marker([13.7528,100.4940],{icon:myIcon}).addTo(map);
marker2.bindPopup("<b>Wat Phra Kaew</b><br>Bangkok<br><img src='https://upload.wikimedia.org/wikipedia/commons/c/c1/Wat_Phra_Kaew.jpg' width='150'>");

// Lumphini Park
var marker3 = L.marker([13.7308,100.5418],{icon:myIcon}).addTo(map);
marker3.bindPopup("<b>Lumphini Park</b><br>Bangkok<br><img src='https://upload.wikimedia.org/wikipedia/commons/3/3b/Lumphini_Park_Bangkok.jpg' width='150'>");

// Siam Paragon
var marker4 = L.marker([13.7465,100.5347],{icon:myIcon}).addTo(map);
marker4.bindPopup("<b>Siam Paragon</b><br>Bangkok<br><img src='https://upload.wikimedia.org/wikipedia/commons/7/7c/Siam_Paragon.jpg' width='150'>");

// Wat Arun
var marker5 = L.marker([13.7437,100.4889],{icon:myIcon}).addTo(map);
marker5.bindPopup("<b>Wat Arun</b><br>Bangkok<br><img src='https://upload.wikimedia.org/wikipedia/commons/3/3e/Wat_Arun_Ratchawararam.jpg' width='150'>");