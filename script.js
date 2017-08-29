
function initMap() {
    var hh = { lat: 40.718293, lng: -74.002276 }; // Hack Human
    var CD = { lat: 40.769824, lng: -73.982923 }; // Cyber Day
    var NYIT = { lat: 40.769718, lng: -73.982575 }; // Cyber Security Hack
    var PH = { lat: 40.720203, lng: -73.998676 };
    var HNY = { lat: 40.729513, lng: -73.996461 };
    var NMIH = { lat: 40.739675, lng: -73.994042 };
    var DWFA = { lat: 40.718293, lng: -74.002276 };
    var NY = { lat: 40.738860, lng: -73.993950 };
    var NYU = { lat: 40.6942, lng: -73.9866 };

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: NY
    });
    var marker = new google.maps.Marker({
        position: hh,
        map: map
    });
    var marker = new google.maps.Marker({
        position: NYIT,
        map: map
    });
    var marker = new google.maps.Marker({
        position: PH,
        map: map
    });
    var marker = new google.maps.Marker({
        position: HNY,
        map: map
    });
    var marker = new google.maps.Marker({
        position: NMIH,
        map: map
    });
    var marker = new google.maps.Marker({
        position: DWFA,
        map: map
    });
    var marker = new google.maps.Marker({
        position: CD,
        map: map
    });
    var marker = new google.maps.Marker({
        position: NYU,
        map: map
    });
}
