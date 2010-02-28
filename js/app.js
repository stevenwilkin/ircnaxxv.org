/**
 * hotel location displayed via Google Maps
 */
var GoogleMaps = {
	apiKey:		'ABQIAAAA03mbnO2KgTuvFxpzTQs5HhQSGpqBsv5CFPENbZsz4TupkIz-IxTsAIqJ1AtY-LrPV2QJNS8x0eYVBA',
	init:		function(){
		jQuery.getScript('http://maps.google.com/maps?file=api&v=2&async=2&callback=GoogleMaps.initMap&key=' + this.apiKey);
	},
	initMap:	function(){
		if(!GBrowserIsCompatible())
			return;
		var latlng = new GLatLng(54.594979, -5.841722);
		var map = new GMap2(document.getElementById('map'));
		map.setCenter(latlng, 13);
	}
};


$(document).ready(function(){
	GoogleMaps.init();
});
