(function(){



	var stage = new createjs.Stage("demoCanvas");

	var circle = new createjs.Shape();
	circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
	circle.x = 100;
	circle.y = 100;

	var layer01 = new createjs.Bitmap("assets/images/layer01.png");
	var layer02 = new createjs.Bitmap("assets/images/layer02.png");
	var layer03 = new createjs.Bitmap("assets/images/layer03.png");


	stage.addChild(layer01);
	stage.addChild(layer02);
	stage.addChild(layer03);

	stage.update();

	

	createjs.Tween.get(layer03, { loop: true })
	.to({ y: -10 }, 3000)
	.to({ y: 0 }, 3000);

	createjs.Ticker.setFPS(60);
	createjs.Ticker.addEventListener("tick", stage);



})();