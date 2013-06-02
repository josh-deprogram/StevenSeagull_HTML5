// WAVES js


function waveBack()
	{
		wavetexture = PIXI.Texture.fromFrame("waves_back.gif");
		// create a new Sprite using the texture
		wavebg = new PIXI.Sprite(wavetexture);
		wavebg.position.y = renderer.height - 600
		wavebg2 = new PIXI.Sprite(wavetexture);
		wavebg2.position.y = wavebg.position.y
		wavebg2.position.x = wavebg.position.x + window.innerWidth;
		wavebg.width = wavebg2.width = window.innerWidth;
		wavebg.height = wavebg2.height = window.innerHeight;
	}
	
function waveMid()
	{
		wavetextureMid = PIXI.Texture.fromFrame("waves_mid.png");
		// create a new Sprite using the texture
		waveMid = new PIXI.Sprite(wavetextureMid);
		waveMid.position.y =  renderer.height - 230
		waveMid2 = new PIXI.Sprite(wavetextureMid);
		waveMid2.position.y = waveMid.position.y
		waveMid2.position.x = waveMid2.position.x + window.innerWidth;

		waveMid.width = waveMid2.width = window.innerWidth;
	}
	
function waveFront()
	{
		wavetexturefrnt = PIXI.Texture.fromFrame("wavefront1.png");
		// create a new Sprite using the texture
		waveFront = new PIXI.Sprite(wavetexturefrnt);
		waveFront.position.y =  renderer.height - 130
		waveFront2 = new PIXI.Sprite(wavetexturefrnt);
		waveFront2.position.y = waveFront.position.y
		waveFront2.position.x = waveFront.position.x + window.innerWidth;
		
		waveFront.alpha = 1
		waveFront2.alpha = waveFront.alpha
		console.log("wave")

		waveFront.width = waveFront2.width = window.innerWidth;
		//wavebg.height = wavebg2.height = window.innerHeight;
	}
	
	
function waveFronter1()
	{
		
	/*	for (var i=0; i < 9; i++) 
		{
		 	var texture = PIXI.Texture.fromFrame("wave000" + (i+1) + ".png");
		 	waveTextures.push(texture);
		};
		
		for (var i=10; i < 28; i++) 
		{
		 	var texture = PIXI.Texture.fromFrame("wave00" + (i+1) + ".png");
		 	waveTextures.push(texture);
		};
		
		// create an explosion MovieClip
		waveAni1 = new PIXI.MovieClip(waveTextures);
		
		waveAni1.position.y = renderer.height - 160;
		waveAni1.gotoAndPlay(1);
		waveAni1.animationSpeed = .8;
		
		waveAni2 = new PIXI.MovieClip(waveTextures);
		waveAni2.x = waveAni1.x + waveAni1.width;
		waveAni2.position.y = waveAni1.position.y
		waveAni2.gotoAndPlay(1);
		waveAni2.animationSpeed = waveAni1.animationSpeed;*/
	}
	