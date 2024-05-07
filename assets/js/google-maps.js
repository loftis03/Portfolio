function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: -117.46911572883553, lng: 34.14507838647194};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'South Jakarta, INA' // Title Location
    });
}