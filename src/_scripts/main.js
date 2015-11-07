// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

var $ = require('jquery');
var Link = require('../_modules/link/link');


function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}



$(function() {
  new Link(); // Activate Link modules logic



	var page = getParameterByName('page');
	var index = 'pages/' + getParameterByName('index');

	$('#ipad-wrapper .container').find('iframe').attr('src',index);




	$('#event-zone').mousemove(function(e){
		$('.xy').text(e.offsetX + ' ' + e.offsetY);

		var x = e.offsetX;
		var y = e.offsetY;
	
		if (y >= 200 && menuToggle) {
			setTimeout(function(){
				$('#top-nav').css({'top':-200});
				$('#info-box .event').text('Event: Menu gone');
				menuToggle = false;
			},1000);
		}
	});

	var menuToggle = false;
	$('#event-zone').on('click',function(e){

		var x = e.offsetX;
		var y = e.offsetY;

		$('.clicktouch').text('Clicked: ' + x + ' ' + y);

		if ((x>=0 && x<=1024) && (y>=0 && y<=200) && !menuToggle) {
			$('#info-box .event').text('Event: Menu triggered');
			$('#top-nav').css({'top':0});
			menuToggle = true;
		}



		if (x >=0 && x < 300 && y >= 200) {
			$('#info-box .event').text('Event: Prev');
		}

		if (x >= 300 && y >= 200) {
			$('#info-box .event').text('Event: Next');
		}		

	});



});
