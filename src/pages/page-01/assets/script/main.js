(function(){



		var bgmusic = "thewood";
		createjs.Sound.registerSound("assets/sounds/thewood.mp3", bgmusic);
	setTimeout(function(){
		var bg = createjs.Sound.play(bgmusic);
		bg.volume = 0.2;
	},1500);

	var stage = new createjs.Stage("demoCanvas");

	var circle = new createjs.Shape();
	circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
	circle.x = 100;
	circle.y = 100;

	var layer01 = new createjs.Bitmap("assets/images/layer01.jpg");
	var layer02 = new createjs.Bitmap("assets/images/layer02.jpg");

	stage.addChild(layer01);
	stage.addChild(layer02);
//	stage.addChild(circle);

	stage.update();

	function getRandomInt(min, max) {
	  return (Math.floor(Math.random() * (max - min)) + min) * 100;
	}

	createjs.Tween.get(layer02, { loop: true })
	.to({ alpha: 0 }, 100)
	.to({ alpha: 1 }, 300)
	.to({ alpha: 0 }, 200)
	.to({ alpha: 1 }, 200)
	.to({ alpha: 0 }, 400)
	.to({ alpha: 1 }, 100);

	createjs.Ticker.setFPS(60);
	createjs.Ticker.addEventListener("tick", stage);



})();