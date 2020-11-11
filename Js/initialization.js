document.addEventListener('DOMContentLoaded', function() {
    M.AutoInit()
});

function iniciarMap(){
    var coord = {lat:19.4566233,lng:-99.1863977};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 16,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}