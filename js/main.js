var bufferStyle = {
    "color": "orange",
    "weight": 5,
    "opacity": 6
};

var majorStyle = {
    "color": "Blue",
    "weight": 5,
    "opacity": 6
};


//Highlighting Feature
function highlightFeature(e) {
    var layer = e.target;
    layer.setStyle({
        weight: 5,
        color: 'MidnightBlue',
        dashArray: '',
        fillOpacity: 0.3
    });
  }
function resetHighlight(e) {
      geojson.resetStyle(e.target);
  }
function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
    });
}

var geojson = L.geoJson(hf, {
 // style: myStyle,
 // onEachFeature: onEachFeature
}).bindPopup(function (layer) {
   return "Operator: " + layer.feature.properties.operator + "<dd>"
   + "OGO: " + layer.feature.properties.OGO + "<dd>" +
   "API: " + layer.feature.properties.API + "<dd>" + "Farm: " + layer.feature.properties.farm + "<dd>" +
   "Spud Date: " + layer.feature.properties.spud_date  + "<dd>" + "Well Type: " + layer.feature.properties.well_type + "<dd>" +
   "Unconventional: " + layer.feature.properties.unconventional + "<dd>" + "Configuration: " + layer.feature.properties.configuration  + "<dd>" +
   "coordinates: " + layer.feature.properties.lat + " " + layer.feature.properties.lon + "<dd>" +
   "County: " + layer.feature.properties.COUNTY + "<dd>" + layer.feature.properties.MUNICIPALITY + "<dd>" +
   "Address: " + layer.feature.properties.ADDRESS + "<dd>" + "City: " + layer.feature.properties.CITY + "<dd>" +
   "Well Pad: " + layer.feature.properties.WELL_PAD + "<dd>" + "Well Pad ID: "  + layer.feature.properties.WELL_PAD_ID + "<dd>" +
   "Site ID: " + layer.feature.properties.SITE_ID + "<dd>" + "Primary Facility ID: "  + layer.feature.properties.PRIMARY_FACILITY_ID + "<dd>" +
   "Clinet ID: " + layer.feature.properties.CLIENT_ID
}).addTo(map);

L.geoJson(ms, {
  style: majorStyle,
}).bindPopup(function (layer) {
  return "River: " + layer.feature.properties.Name
}).addTo(map);

 var geojson = L.geoJson(clipstream, {
 onEachFeature: onEachFeature,
 // style: streamStyle
}).bindPopup(function (layer) {
   return "Stream Name: " + layer.feature.properties.Name
}).addTo(map);

L.geoJson(buffer, {
 style: bufferStyle
 // onEachFeature: onEachFeature
}).addTo(map).bringToBack();


//
// L.geoJson(lancaster,{
// onEachFeature: onEachFeature
// }).addTo(map);

// var cleanUp = function(feature, layer) {
//    onEachFeature(if(typefeature.properties.Lead_B == undefined || feature.properties.Lead_B == null || feature.properties.Lead_B == 0 ) return ;)
//
// }

// console.log(cleanUp);

// var sampleSite = {
//     radius: 5,
//     fillColor: "#ff7800",
//     color: "#000",
//     weight: 1,
//     opacity: 1,
//     fillOpacity: 0.7
// };
//
//
//
// L.geoJson(leadSample, {
//   pointToLayer: function(feature, latlng) {
//               return L.circleMarker(latlng, sampleSite);
//            }
//
// }).bindPopup(function (layer) {
//
//   var result = ( "Sample Date:" + " " + layer.feature.properties.Date );
//   result = result + ("<dd>" + "<em>" + "Parts Per Million" + "</em>" + "</dd>");
//   result = result + ("<dd>" + "Sample A:" + " " + layer.feature.properties.Lead_A + "</dd>");
//
// if(layer.feature.properties.Lead_B != undefined && layer.feature.properties.Lead_B != null && layer.feature.properties.Lead_B != 0)
//  result = result + ("<dd>" + "Sample B:" + " " + layer.feature.properties.Lead_B + "</dd>");
//
//  if(layer.feature.properties.Lead_C != undefined && layer.feature.properties.Lead_C != null && layer.feature.properties.Lead_C != 0)
//   result = result + ("<dd>" + "Sample C:" + " " + layer.feature.properties.Lead_C + "</dd>");
//
//   if(layer.feature.properties.Lead_D != undefined && layer.feature.properties.Lead_D != null && layer.feature.properties.Lead_D != 0)
//    result = result + ("<dd>" + "Sample D:" + " " + layer.feature.properties.Lead_D + "</dd>");
//
//    if(layer.feature.properties.Lead_E != undefined && layer.feature.properties.Lead_E != null && layer.feature.properties.Lead_E != 0)
//     result = result + ("<dd>" + "Sample E:" + " " + layer.feature.properties.Lead_E + "</dd>");
//
// return result;
//  }).addTo(map);
//
//
//  console.log(leadSample);
//
//
//
//  // Discalimer clarifiying that there is a level
//
//   //testing out console.log
//
//   console.log("What is the next clue?:");
//
//   if (window.console && window.console.log) {
//   // console is available
// }
//
//
// //buttons_
// $(document).ready(function() {
//  //Button Zoom
//   $("#lanc").click(function(){
//      map.setView([40.044437, -76.306229]);
//      map.setZoom(10);
//   });
//
//   $("#philly").click(function(){
//      map.setView([39.987614, -75.163913]);
//      map.setZoom(10);
//   });
//
//   $('#fennsTreasure').click(function(){
//     window.open(url, "http://fennclues.com/hints-and-clues-fenn-treasure.html");
//   });
//
//
// });
//
//
// var popTest = "<a href ='images/Health_Quilt_forBlog.jpg'> Next Clue </a>"
//
//   // Creating circles
//   var circle = L.circle([36.715736, -107.161087], {
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.5,
//     radius: 500,
//
// }).bindPopup("<h4 style= 'color:orange'> You found an Easter Egg! </h4>" + "<br>" +"<dd>"+
// popTest + " " + "<br>" + "<h3><b>poems</b></h3>" ).addTo(map);
//
//
// var fenn = [];
// for ( var i=1.20, l=2.5; i<l; i+=0.01 ){
//
//     fenn.push(i.toFixed(2));
//
// }
//
// heights = fenn.join('\n');
//
// var poems =  "Begin it where warm waters halt" + " "
// + "And take it in the canyon down," + " "
// + "Not far, but too far to walk." + " "
// + "Put in below the home of Brown."
//



// });

// .bindPopup(function (layer) {
//     return (layer.feature.properties.title);
//   })
