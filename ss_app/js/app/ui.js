// UI js

	
	function gameBtns()
	{
			// create some textures from an image path ====================
			var btnFlapTexture = PIXI.Texture.fromFrame("btn_flap1.png");
			var btnFlapTextureOver = PIXI.Texture.fromFrame("btn_flap2.png");
			btnFlap = new PIXI.Sprite(btnFlapTexture);
			
			btnFlap.anchor.x = 0.5;
			btnFlap.anchor.y = 0.5;
			btnFlap.position.x = renderer.width - 160
			btnFlap.position.y = renderer.height - 60
			btnFlap.setInteractive(true);
			
			btnFlap.mousedown = btnFlap.touchstart = function(data){
					
					flapping = true
					gameState = true;
					this.isdown = true;
					this.setTexture(btnFlapTextureOver);
					
			}
			// set the mouseup and touchend callback..
			btnFlap.mouseup = btnFlap.touchend = function(data){
					flapping = false
					this.isdown = false;
					this.setTexture(btnFlapTexture);
			}
			
			stage.addChild(btnFlap);

	}
	



	// HEALTH BAR =============================================

	function createHealth()
	{
		var textureBar1 = PIXI.Texture.fromFrame("bar1.png");
		var textureBar2 = PIXI.Texture.fromFrame("bar2.png");
		
		barMC = new PIXI.Sprite(textureBar1);
		var barMC2 = new PIXI.Sprite(textureBar2);

		barMC.alpha = barMC2.alpha = 1

		healthContainer.addChild(barMC2);	
		healthContainer.addChild(barMC);	
}

	// KUNGFU BAR =============================================

	function createKungfu()
	{
		var textureBar1 = PIXI.Texture.fromFrame("bar3.png");
		//var textureBar2 = PIXI.Texture.fromFrame("bar2.png");
		
		barKF = new PIXI.Sprite(textureBar1);
		//var barMC2 = new PIXI.Sprite(textureBar2);

		barKF.alpha = 1;
		barKF.position.y = 35;

		//healthContainer.addChild(barMC2);	
		healthContainer.addChild(barKF);	
}


// SCAN LINES =============================================

	function createScan()
	{
		var textureBar1 = PIXI.Texture.fromImage("images/scanlines.png");
		
		scanlines = new PIXI.Sprite(textureBar1);

		scanlines.alpha = .5
		scanlines.width = window.innerWidth
		scanlines.height = window.innerHeight
		stage.addChild(scanlines);		
}
