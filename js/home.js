function initMap() 
{
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 3,
		center: {
			lat: 47.608013,
			lng: -122.335167
		},
		styles:
		[
			{
				"elementType": "geometry",
				"stylers": [
				{
					"color": "#f5f5f5"
				}
				]
			},
			{
				"elementType": "labels",
				"stylers": [
				{
					"visibility": "off"
				}
				]
			},
			{
				"elementType": "labels.icon",
				"stylers": [
				{
					"visibility": "off"
				}
				]
			},
			{
				"elementType": "labels.text.fill",
				"stylers": [
				{
					"color": "#616161"
				}
				]
			},
			{
				"elementType": "labels.text.stroke",
				"stylers": [
				{
					"color": "#f5f5f5"
				}
				]
			},
			{
				"featureType": "administrative",
				"elementType": "geometry",
				"stylers": [
				{
					"visibility": "off"
				}
				]
			},
			{
				"featureType": "administrative.land_parcel",
				"stylers": [
				{
					"visibility": "off"
				}
				]
			},
			{
				"featureType": "administrative.land_parcel",
				"elementType": "labels.text.fill",
				"stylers": [
				{
					"color": "#bdbdbd"
				}
				]
			},
			{
				"featureType": "administrative.neighborhood",
				"stylers": [
				{
					"visibility": "off"
				}
				]
			},
			{
				"featureType": "poi",
				"stylers": [
				{
					"visibility": "off"
				}
				]
			},
			{
				"featureType": "poi",
				"elementType": "geometry",
				"stylers": [
				{
					"color": "#eeeeee"
				}
				]
			},
			{
				"featureType": "poi",
				"elementType": "labels.text.fill",
				"stylers": [
				{
					"color": "#757575"
				}
				]
			},
			{
				"featureType": "poi.park",
				"elementType": "geometry",
				"stylers": [
				{
					"color": "#e5e5e5"
				}
				]
			},
			{
				"featureType": "poi.park",
				"elementType": "labels.text.fill",
				"stylers": [
				{
					"color": "#9e9e9e"
				}
				]
			},
			{
				"featureType": "road",
				"stylers": [
				{
					"visibility": "off"
				}
				]
			},
			{
				"featureType": "road",
				"elementType": "geometry",
				"stylers": [
				{
					"color": "#ffffff"
				}
				]
			},
			{
				"featureType": "road",
				"elementType": "labels.icon",
				"stylers": [
				{
					"visibility": "off"
				}
				]
			},
			{
				"featureType": "road.arterial",
				"elementType": "labels.text.fill",
				"stylers": [
				{
					"color": "#757575"
				}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "geometry",
				"stylers": [
				{
					"color": "#dadada"
				}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "labels.text.fill",
				"stylers": [
				{
					"color": "#616161"
				}
				]
			},
			{
				"featureType": "road.local",
				"elementType": "labels.text.fill",
				"stylers": [
				{
					"color": "#9e9e9e"
				}
				]
			},
			{
				"featureType": "transit",
				"stylers": [
				{
					"visibility": "off"
				}
				]
			},
			{
				"featureType": "transit.line",
				"elementType": "geometry",
				"stylers": [
				{
					"color": "#e5e5e5"
				}
				]
			},
			{
				"featureType": "transit.station",
				"elementType": "geometry",
				"stylers": [
				{
					"color": "#eeeeee"
				}
				]
			},
			{
				"featureType": "water",
				"elementType": "geometry",
				"stylers": [
				{
					"color": "#c9c9c9"
				}
				]
			},
			{
				"featureType": "water",
				"elementType": "labels.text.fill",
				"stylers": [
				{
					"color": "#9e9e9e"
				}
				]
			}
		]

	});

    // Add some markers to the map.
    // Note: The code uses the JavaScript Array.prototype.map() method to
    // create an array of markers based on a given "locations" array.
    // The map() method here has nothing to do with the Google Maps API.
    var markers = locations.map(function(location, i) {
    	return new google.maps.Marker({
    		position: location,
    		url: location.url
    	});
    });

    // Add a marker clusterer to manage the markers.
    var markerCluster = new MarkerClusterer(map, markers, {
    	imagePath: ''
    });

    for (i = 0; i < markers.length; i++)
    {
    	google.maps.event.addListener(markers[i], 'click', function() {
    		window.location.href = this.url;
		});
    }
}

var locations = [{
		//guinness storehouse dublin
		lat: 53.3419,
		lng: -6.2867,
		url: "/posts/guinness"
	},
	{
		//trinity college
		lat: 53.343889,
		lng: -6.256806,
		url: "/posts/guinness"
	},
	{
		//cliffs of moher
		lat: 52.9719,
		lng: -9.4265,
		url: "/posts/guinness"
	},
	{
		//seattle public library
		lat: 47.6067,
		lng: -122.3325,
		url: "/posts/guinness"
	},
	{
		//pike place market
		lat: 47.6101,
		lng: -122.3421,
		url: "/posts/guinness"
	},
	{
		//tate modern
		lat: 51.5074,
		lng: 0.1001,
		url: "/posts/guinness"
	}
]

window.fbAsyncInit = function() 
{
	FB.init({
		appId      : '1685896151707691',
		xfbml      : true,
		version    : 'v2.8'
	});
	FB.AppEvents.logPageView();

	document.getElementById('fb-share-button').onclick = function() 
	{
		FB.ui({
			method: 'share',
			display: 'popup',
			href: 'https://icz.io',
		}, function(response){});
	}
};

(function(d, s, id)
{
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) {return;}
	js = d.createElement(s); js.id = id;
	js.src = "//connect.facebook.net/en_US/sdk.js";
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));