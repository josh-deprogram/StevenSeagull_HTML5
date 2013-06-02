// Crabs JS

function createCrab()
	{
		for (var i=0; i < 9; i++) 
		{
		 	var textureCrab = PIXI.Texture.fromFrame("crabs000" + (i+1) + ".png");
		 	crabsTextures.push(textureCrab);
		};
		
		for (var i=10; i < 14; i++) 
		{
		 	var textureCrab = PIXI.Texture.fromFrame("crabs00" + (i+1) + ".png");
		 	crabsTextures.push(textureCrab);
		};
}



function crabWave()
{
	for (var i=0; i < waveNum; i++) 
		{
		 	
		crabWave1[i] = new PIXI.MovieClip(crabsTextures);
		
		//crabWave1[i].position.x = 600;
		var previous = i -1;
		
		
		if (i > 0){
			//crabWave1[i].position.x = renderer.width + (crabWave1[previous].position.x + crabWave1[i].width) + (Math.random() * 650 );
			crabWave1[i].position.x = (crabWave1[previous].position.x + crabWave1[i].width) + (Math.random() * 250 );
		}
		else{
			crabWave1[i].position.x = renderer.width + (Math.random() * 50 );
		}
		
		crabWave1[i].position.y = Math.random() * renderer.height - 100
		crabWave1[i].anchor.x = 0.5;
		crabWave1[i].anchor.y = 0.5;
			
		crabWave1[i].scale.x = crabWave1[i].scale.y = .8;
		crabWave1[i].gotoAndPlay(Math.random() * 14);
		crabWave1[i].animationSpeed = .45;
		gameAssetsContainerFront.addChild(crabWave1[i]);
		console.log("crab created")
	
	};
	
}

