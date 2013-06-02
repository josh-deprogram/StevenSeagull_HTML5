// Clouds JS

function cloudCreate(){
		
		for (var i = 0; i < 5; i++) 
		{
			
			var cloudtexture = PIXI.Texture.fromFrame("cloud.png");
			cloud[i] = new PIXI.Sprite(cloudtexture);
			cloud[i].position.x = Math.random() * 800;
			cloud[i].position.y = Math.random() * (renderer.height / 2);
			cloud[i].anchor.x = 0.5;
			cloud[i].anchor.y = 0.5;
			
		
			cloud[i].scale.x = cloud[i].scale.y = 0.35 + Math.random() * 0.5
			// create a new Sprite using the texture
			
			gameAssetsContainer.addChild(cloud[i]);
		}
	}
	