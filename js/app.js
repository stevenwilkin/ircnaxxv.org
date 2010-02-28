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
		var html = '\
			<div id="info">\
				<h3>Stormont Hotel</h3>\
				<ul>\
					<li>587 Upper Newtownards Road</li>\
					<li>Belfast, County Antrim, BT4 3LP</li>\
					<li>United Kingdom</li>\
					<li>028 9065 1066</li>\
				</ul>\
				<div id="right"></div>\
			</div>\
		';
		var map = new GMap2(document.getElementById('map'));
		map.setCenter(new GLatLng(54.609979, -5.841722), 13);
		map.addControl(new GLargeMapControl());
		map.addControl(new GMapTypeControl());
		var marker = new GMarker(new GLatLng(54.594979, -5.841722));
		GEvent.addListener(marker, "click", function(){
			marker.openInfoWindowHtml(html);
		});
		map.addOverlay(marker);
		GEvent.trigger(marker, 'click');
	}
};


/**
 * add rounded corners to text boxes
 */
function rounderCorners(){
	$('#header-bg, #footer-bg').corners('10px'); 
}


/**
 * protect email address by storing it in javascript as html entities
 */
function emailAddress(){
	var html = '&#99;&#111;&#110;&#118;&#101;&#110;&#116;&#105;&#111;&#110;&#64;&#110;&#97;&#110;&#111;&#114;&#116;&#104;&#101;&#114;&#110;&#105;&#114;&#101;&#108;&#97;&#110;&#100;&#46;&#99;&#111;&#109;';
	var email = $('<textarea>').html(html).html();
	$('#contact a:first').html(email).attr('href', 'mailto:' + email);
}


$(document).ready(function(){
	GoogleMaps.init();
	rounderCorners();
	emailAddress();
});
