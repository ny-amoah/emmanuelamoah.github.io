function initMap() {

    var mapOptions = {
        center: { lat: 5.133195, lng: -1.277741 },
        zoom: 19,
        mapTypeId: "roadmap"
    }

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    var marker = new google.maps.Marker({
        position: { lat: 5.133339, lng: -1.277637 },
        map: map
    });
}