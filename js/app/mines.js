// MINE JS

var mine = [];
var mineWave1 = [];
var mineTextures = [];
var explo = [];
var exploTextures = [];
		
function createExplo()
	{
		

		for (var i=0; i < 19; i++) 
		{
		 	var texture = PIXI.Texture.fromFrame("Explosion_Sequence_A " + (i+1) + ".png");
		 	exploTextures.push(texture);
		};
		
		// create an explosion MovieClip
		explo = new PIXI.MovieClip(exploTextures);
		
		explo.position.x = steven.position.x;
		explo.position.y = steven.position.y;
		explo.anchor.x = 0.5;
		explo.anchor.y = 0.5;
			
		explo.scale.x = explo.scale.y =  Math.random() * 3.9 + .6
		explo.stop();
		explo.animationSpeed = .4;
		explo.visible = false;
		stageCamera.addChild(explo);
}



function mineWave()
{
	var texturMine = PIXI.Texture.fromFrame("mine.png");
	mineTextures.push(texturMine)
	
	for (var i=0; i < mineNum; i++) 
		{
		 	
		mineWave1[i] = new PIXI.MovieClip(mineTextures);
		
		//crabWave1[i].position.x = 600;
		var previous = i -1;
		
		
		if (i > 0){
			//crabWave1[i].position.x = renderer.width + (crabWave1[previous].position.x + crabWave1[i].width) + (Math.random() * 650 );
			mineWave1[i].position.x = (mineWave1[previous].position.x + mineWave1[i].width) + (Math.random() * 550 );
		}
		else{
			mineWave1[i].position.x = renderer.width + (Math.random() * 350 );
		}
		
		mineWave1[i].position.y = Math.random() * renderer.height - 100;
		
		mineWave1[i].anchor.x = 0.5;
		mineWave1[i].anchor.y = 0.5;
		mineWave1[i].rotation = Math.random() * 360;
			
		mineWave1[i].scale.x = mineWave1[i].scale.y = Math.random() * .9 + .2;
		//mineWave1[i].gotoAndPlay(Math.random() * 14);
		//mineWave1[i].animationSpeed = .45;
		gameAssetsContainer.addChild(mineWave1[i]);
		console.log("mine created")
	
	};
	
}

