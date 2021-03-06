function initialize() {
  var mapOptions = {
    zoom: 15,
    center: new google.maps.LatLng(49.979811, 36.309158)
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'),
                                mapOptions);
  var myLatLng = new google.maps.LatLng(49.979811, 36.309158);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
  });
}
google.maps.event.addDomListener(window, 'load', initialize);