// MAIN STEVEN GAME GLASS
	$(window).resize(resize)
	window.onorientationchange = resize;

	// GLOBAL VARIABLES //========================================
			var wavebg, wavebg2, waveFront, waveFront2, waveMid, waveMid2;
			var wavetexturefrnt;
			var wavetexture;
			var wavetextureMid;

			var cloud = [];
			var steven = [];
			var stevenFall = [];
			var stevenDie = [];
			var stevenTextures = [];
			var stevenTexturesFall = [];

			var waveTextures = [];
			var waveAni1 = [];
			var waveAni2 = [];
			var crab = [];
			var crabWave1 = [];
			var crabsTextures = [];
			
			var bamMC = [];
			var bamTextures = [];
			var barMC, barKF;
			var waveNum = 7;
			var mineNum = 5;
			var count = 0;
			var waveSpeed = 5; // MAIN ENERMY SPEED
			var maxSpeed = 25;
			var steveX = 200;
			var flySpeed = 15;
			var flapping = false;	
			var shakeStage = false;
			var stevex1, stevex2, stevey1, stevey2;
			var scanlines;
			var btnFlap;
			var gamePlaying = false
			var gameState = false
			var introState = false
			var shakeTween ;
			var preloadMC;

	
	
	// Create some container groups // ===========================

	var gameAssetsContainer = new PIXI.DisplayObjectContainer();
	var gameAssetsContainerFront = new PIXI.DisplayObjectContainer();
	var healthContainer = new PIXI.DisplayObjectContainer(); 
	var stageCamera = new PIXI.DisplayObjectContainer(); // MAIN CAMERA

	// create an new instance of a pixi stage ====================
	
	var interactive = true;
	var stage = new PIXI.Stage(0x008ecb, interactive);
	// create a renderer instance.
	//renderer = PIXI.autoDetectRenderer(960, 640, null, true);
	var renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight, null);

	amount = (renderer instanceof PIXI.WebGLRenderer) ? 10 : 5;
	
	if(amount == 5)
	{
		renderer.context.mozImageSmoothingEnabled = false
		renderer.context.webkitImageSmoothingEnabled = false;
		
	}
	// add the renderer view element to the DOM
	document.body.appendChild(renderer.view);
	renderer.view.style.position = "absolute";
	renderer.view.style.left = "0px" ;
	renderer.view.style.top = renderer.view.style.left 
		
	
	//Stats //==========================================
	var stats = new Stats();
	stats.setMode( 2 );
	document.body.appendChild( stats.domElement );

	
	function preload(){
		
		var preloadTexture = PIXI.Texture.fromImage("images/preload.png");
			preloadMC = new PIXI.Sprite(preloadTexture);
			preloadMC.position.x = $(window).width() / 2 - 200;
			preloadMC.position.y = $(window).height() / 2 - 200;
			stage.addChild(preloadMC)

			console.log("preload app")

			// CALL ANIMATION FUNCTION
			requestAnimFrame( update );

			var assetsToLoaderEnemy = [ "js/sprites/CRABS.json"];
			var assetsToLoaderSteven = [ "js/sprites/STEVEN.json"];
			
			// // create a new loader
			loaderEnemy = new PIXI.AssetLoader(assetsToLoaderEnemy);
			
			// // use callback
			loaderEnemy.onComplete = loadSteven
			
			// //begin load
			loaderEnemy.load();
	}

	function loadSteven(){
			var assetsToLoaderSteven = [ "js/sprites/STEVEN.json"];
			
			// // create a new loader
			loaderSteven = new PIXI.AssetLoader(assetsToLoaderSteven);
			
			// // use callback
			loaderSteven.onComplete = onAssetsLoaded
			
			// //begin load
			loaderSteven.load();

	}

	function onAssetsLoaded()
	{		 	

			healthContainer.position.x = healthContainer.position.y =  20
			waveBack()
			waveMid()
			waveFront()
			waveFronter1()
			
			
			createHealth();
			createKungfu();
			createSteve()
			createSteveFall()

			// CALL ANIMATION FUNCTION
			//requestAnimFrame( update );
			
			// ADD TO CONTAINER
			
			
			// ADD TO STAGE
			gameAssetsContainer.addChild(wavebg)
			gameAssetsContainer.addChild(wavebg2)
			gameAssetsContainer.addChild(waveMid)
			gameAssetsContainer.addChild(waveMid2)
			
			gameAssetsContainerFront.addChild(waveFront);
			gameAssetsContainerFront.addChild(waveFront2);
			
			//gameAssetsContainerFront.addChild(waveAni1);
			//gameAssetsContainerFront.addChild(waveAni2);
			
			cloudCreate();
			stageCamera.addChild(gameAssetsContainer);
			
			createCrab();
			
			stageCamera.addChild(steven)
			stageCamera.addChild(stevenFall);
			crabWave();
			mineWave()
			stageCamera.addChild(gameAssetsContainerFront);
			createBam();
			createExplo();
			
			
			stage.addChild(stageCamera);
			stage.addChild(healthContainer);
			gameBtns()

			createScan();

			// start the game var //
			gamePlaying = true
			gameState = true

			// CHECK FOR KEY PRESS //////////
			
			
			my_scope = this;
			my_combos = [
			    {
			        "keys"          : "space",
			        "is_exclusive"  : true,
			        "on_keydown"    : function() {
			            console.log("FLYYYY");
			            flapping = true;
			            gameState = true;

			        },
			        "on_keyup"      : function(e) {
			            console.log("and fall");
			            flapping = false
			        },
			        "this"          : my_scope
			    }
			];
			keypress.register_many(my_combos);

			resize()
	
		//stage.position.y = -300
		//steven.setTexture(stevenTextures);
}	
	
	
	// ANIMATION ON ENTER FRAME // ==============================
	function update() {
		stats.begin();
	    requestAnimFrame( update );
	    renderer.render(stage);
		
		if(gameState != false){
			gamePlay() // CALL THE MAIN GAME FUNCTION
			preloadMC.alpha = .2
		}
	}

	
	function shakeReset(){
		shakeStage = false;
		steven.rotation  = stevenFall.rotation  = 0;
		stageCamera.position.x = 0;
		stageCamera.position.y = 0;
		waveSpeed = 5;
		var zoom = TweenLite.to(stageCamera.scale, .5, {x : 1, y: 1});
	}

	function killGame(){
		
			steven.visible = stevenFall.visible = false;
			if (gamePlaying == true){
				killSteve()
			}
	}

	function resize()
	{
		var w = $(window).width();
		var h = $(window).height();
		
		renderer.resize(w, h);

		preloadMC.position.x = w / 2 - 200;
		preloadMC.position.y = h / 2 - 200;
		if(gameState != false){
			//reposition elements //======================
			scanlines.width = w;
				if(h > 600){
					scanlines.height = h;
				}
			
			btnFlap.position.x = w - 160;
			btnFlap.position.y = h - 60;

			wavebg.position.x = 0;
			wavebg2.position.x = w;
			wavebg.position.y = wavebg2.position.y = -20;
			if(w > 900){
				wavebg.width = wavebg2.width = w;
			}
			if(h > 600){
				wavebg.height = wavebg2.height = h;
			}

			waveMid.position.x = 0;
			waveMid2.position.x = w;
			if(w > 900){
				waveMid.width = waveMid.width = w;
			}
			waveMid.position.y =  h - 230

			waveFront.position.x = 0;
			waveFront2.position.x = w;
			if(w > 900){
				waveFront.width = waveFront2.width = w;
			}
			waveFront.position.y =  h - 130;

			steven.position.y = h/2 - 100
		}

		console.log("resize")
	}



// START THE APP
preload()
	