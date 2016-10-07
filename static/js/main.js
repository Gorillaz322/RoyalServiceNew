$(document).ready(function(){
    $('.parallax').parallax();
});

function initMap() {
    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 50.3734399, lng: 30.4545809},
      scrollwheel: false,
      zoom: 15
    });

    var marker = new google.maps.Marker({
        position: {lat: 50.3734399, lng: 30.4545809},
        map: map,
        title: 'Киев, ул. Лятошинського 2б'
    });
}