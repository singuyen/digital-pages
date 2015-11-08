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






	var soundID = "Bell";

	function loadSound () {
		createjs.Sound.registerSound("sounds/bell.mp3", soundID);
	}
	loadSound();


	var menuToggle = false;
	$('#event-zone').on('click',function(e){

		var x = e.offsetX;
		var y = e.offsetY;

		$('.clicktouch').text('Clicked: ' + x + ' ' + y);

		if ((x>=0 && x<=1024) && (y>=0 && y<=200) && !menuToggle) {
			$('#info-box .event').text('Event: Menu triggered');
			$('#top-nav').css({'top':0});
			var mySound = createjs.Sound.play(soundID);
			mySound.volume = 0.2;
			menuToggle = true;
		}



		if (x >=0 && x < 300 && y >= 200) {
			$('#info-box .event').text('Event: Prev');
			var mySound = createjs.Sound.play(soundID);
			mySound.volume = 0.2;
			var aLeft = mainStage.getChildByName('arrowLeft');

			createjs.Tween.get(aLeft, { loop: false })
			.to({ alpha: 1 }, 500)
			.to({ alpha: 0 }, 500);
			}

		if (x >= 300 && y >= 200) {
			$('#info-box .event').text('Event: Next');

			var mySound = createjs.Sound.play(soundID);
			mySound.volume = 0.2;

			var aRight = mainStage.getChildByName('arrowRight');
			createjs.Tween.get(aRight, { loop: false })
			.to({ alpha: 1 }, 500)
			.to({ alpha: 0 }, 500);
			}


	});



});


window.mainStage = (function(){

	var stage = new createjs.Stage("event-zone");



	var arrowLeft = new createjs.Bitmap("images/arrow-left.png");
	arrowLeft.x = 50;
	arrowLeft.y = 600;
	arrowLeft.alpha = 0;
	arrowLeft.name = "arrowLeft";


	var arrowRight = new createjs.Bitmap("images/arrow-right.png");
	arrowRight.x = 850;
	arrowRight.y = 600;
	arrowRight.alpha = 0;
	arrowRight.name = "arrowRight";

	stage.addChild(arrowLeft);
	stage.addChild(arrowRight);


	stage.update();

	
/*
	createjs.Tween.get(arrowLeft, { loop: true })
	.to({ y: -10 }, 3000)
	.to({ y: 0 }, 3000);
	*/

	createjs.Ticker.setFPS(60);
	createjs.Ticker.addEventListener("tick", stage);

	return stage;


})();


