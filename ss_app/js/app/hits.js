// BAMS and STUFF JS


function createBam()
	{
		for (var i=0; i < 9; i++) 
		{
		 	var textureBam = PIXI.Texture.fromFrame("BAM _MC000" + (i+1) + ".png");
		 	bamTextures.push(textureBam);
		};
		
		for (var i=10; i < 13; i++) 
		{
		 	var textureBam = PIXI.Texture.fromFrame("BAM _MC00" + (i+1) + ".png");
		 	bamTextures.push(textureBam);
		};
	
		bamMC = new PIXI.MovieClip(bamTextures);
		
		bamMC.anchor.x = 0.5;
		bamMC.anchor.y = 0.5;
			
		bamMC.scale.x = bamMC.scale.y = Math.random() * 3.9 + .5
		bamMC.gotoAndPlay(Math.random() * 14);
		bamMC.animationSpeed = .45;
		bamMC.visible = false;
		bamMC.stop()
		stageCamera.addChild(bamMC);	
}

