var map = L.map('map', {
  center: [41.753680, -76.430739],
  zoom: 11,
  // layers: [Satellite, Terrain]
});
//
// var Terrain = L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',{
//     maxZoom: 20,
//     subdomains:['mt0','mt1','mt2','mt3']
// });

var Satellite  = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
}).addTo(map);

// var baseMaps = {
//     "Satellite": Satellite,
//     "Terrain": Terrain
// };

// L.control.layers(baseMaps).addTo(map);
