/**
 * hotel location displayed via Google Maps
 */
var GoogleMaps = {
	init:		function(){
		$.ajax({
			url:		'js/apikey.js',
			dataType: 	'text',
			success:	function(data){
				jQuery.getScript('http://maps.google.com/maps?file=api&v=2&async=2&callback=GoogleMaps.initMap&key=' + $.parseJSON(data).googleMaps);
			}
		});
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
				<a href="http://maps.google.com/maps?f=d&source=s_d&saddr=Belfast&daddr=587+Upper+Newtownards+Road,+Belfast,+County+Antrim,+BT4+3LP,+United+Kingdom+(Stormont+Hotel)&geocode=FZUWQQMdg4Ol_yk7itDX_f9gSDExxcfvLBZXLg%3BFSQLQQMdzdym_ylv8EuFzgthSDGL9Tm3Trfrgg&hl=en&mra=ls&sll=54.596732,-5.888329&sspn=0.051315,0.110378&ie=UTF8&ll=54.598224,-5.885925&spn=0.051313,0.110378&z=13">Directions from city centre</a>\
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
