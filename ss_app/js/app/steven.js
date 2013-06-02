// Steven JS

function createSteve()
	{
			
		for (var i=0; i < 9; i++) 
		{
		 	var texture = PIXI.Texture.fromFrame("SEAGULL000" + (i+1) + ".png");
		 	stevenTextures.push(texture);
		};
		
		for (var i=10; i < 15; i++) 
		{
		 	var texture = PIXI.Texture.fromFrame("SEAGULL00" + (i+1) + ".png");
		 	stevenTextures.push(texture);
		};
		
		// create an explosion MovieClip
		steven = new PIXI.MovieClip(stevenTextures);
		// make the sprite interactive..		
		steven.setInteractive(true);
		
		steven.position.x = steveX;
		steven.position.y = 300;
		steven.anchor.x = 0.5;
		steven.anchor.y = 0.5;
			
		steven.scale.x = steven.scale.y = .8
		steven.gotoAndPlay(1);
		steven.animationSpeed = 1;
/*
		// set the mousedown and touchstart callback..
		steven.mousedown = steven.touchstart = function(data){
			this.position.x = this.position.x + 100;
			
		}*/
}

function createSteveFall()
	{
			
		for (var i=0; i < 8; i++) 
		{
		 	var texture = PIXI.Texture.fromFrame("SEAGULLFALL000" + (i+1) + ".png");
			stevenTexturesFall.push(texture);
		};
		
		// for (var i=10; i < 15; i++) 
		// {
		//  	var texture = PIXI.Texture.fromFrame("SEAGULLFALL00" + (i+1) + ".png");
		// 	stevenTexturesFall.push(texture);
		// };
				
		//CREATE STEVEN //==================
		stevenFall = new PIXI.MovieClip(stevenTexturesFall);
		// make the sprite interactive..		
		stevenFall.setInteractive(true);
		
		stevenFall.position.x = steveX - 40;
		stevenFall.anchor.x = 0.5;
		stevenFall.anchor.y = 0.5;
			
		stevenFall.scale.x = stevenFall.scale.y = steven.scale.x
		stevenFall.play();
		stevenFall.animationSpeed = .6;
		stevenFall.visible = false;
}

function killSteve(){

	var stevenTexturesDie = [];
	


		gamePlaying = false;

		for (var i=0; i < 9; i++) 
		{
		 	var texture = PIXI.Texture.fromFrame("splat000" + (i+1) + ".png");
			stevenTexturesDie.push(texture);
		};
		
		for (var i=10; i < 15; i++) 
		{
		 	var texture = PIXI.Texture.fromFrame("splat00" + (i+1) + ".png");
			stevenTexturesDie.push(texture);
		};

		stevenDie = new PIXI.MovieClip(stevenTexturesDie);
		stevenDie.play();

		stevenDie.position.x = steven.position.x;
		stevenDie.position.y = steven.position.y;
		stevenDie.animationSpeed = .4;
		stageCamera.addChild(stevenDie)
		

		//Tween sprites //
		TweenLite.to(stageCamera.scale, 1, {x : 2, y: 2 });
		TweenLite.to(stageCamera.position, 1, {x : - window.innerWidth/2 + 400, y: - (window.innerHeight/2 + 400) });
		TweenLite.to(stevenDie.scale, .3, {x : 2, y: 2 });
		TweenLite.to(stevenDie.position, .3, {x : (window.innerWidth/2 - 600), y: (window.innerHeight/2 - 500)});
		TweenLite.to(stevenDie.position, 2, {y: 300, delay:1 });

		TweenLite.to(stageCamera.position, .8, { y: 0 });
		TweenLite.to(healthContainer, .3, {alpha:0 });
		TweenLite.to(btnFlap, .3, {alpha:0 });
		
}

