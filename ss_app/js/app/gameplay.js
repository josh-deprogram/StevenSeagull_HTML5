
// THE ON ENTER FRAME GAME FUNCTION

function gamePlay(){
// remove the energy bar level //=========================
		if (barMC.width > 0){
			barMC.width = barMC.width - 0.03;
		}

		// SHOW KILL SPLAT // ====================================
		if (barMC.width < 0.1){
			killGame();
		}
		
		if(stevenDie.currentFrame >= 13){
						stevenDie.stop();
		}
		
		stevex1 = steven.position.x + 40;
		stevex2 = steven.position.x - 50;
		stevey1 = steven.position.y - (steven.height/2) + 30;
		stevey2 = stevey1 + steven.height - 30;
		
		stevenFall.position.x = steven.position.x;
		stevenFall.position.y = steven.position.y;
		
		

		//ANIMATE THE SPRITES ////////////// ====================================================
		for (var i=0; i < mineNum; i++) 
		{
			mineWave1[i].position.x = mineWave1[i].position.x - waveSpeed;
			mineWave1[i].rotation = mineWave1[i].rotation + .006;
			
			if (mineWave1[i].position.x < -60){
				mineWave1[i].position.x = renderer.width + (mineWave1[i].width);
				mineWave1[i].position.y = Math.random() * renderer.height / 2
			}
			
			//createExplo()
			// IF GAME IS PLAYING
		if (gamePlaying == true){
			// CHECK FOR COLLISION DETECTION //====================================================
			if( (mineWave1[i].position.y > stevey1) && (mineWave1[i].position.y < stevey2)  ){
				
				if ( (mineWave1[i].position.x < stevex1) && (mineWave1[i].position.x > stevex2) ){
					
					explo.position.x = mineWave1[i].position.x;
					explo.position.y = mineWave1[i].position.y;
					explo.scale.x = explo.scale.y =  Math.random() * .9 + .6
					mineWave1[i].position.x = renderer.width + (mineWave1[i].width);
					mineWave1[i].position.y = Math.random() * 500
					
					console.log("HIT" + stevey2)
					explo.visible = true;
					explo.gotoAndPlay(1)
					
					//Shake it
					//shakeTween.kill()
					shakeStage = true;
					//stageCamera.scale = stageCamera.scale  + .02
					shakeTween = TweenLite.to(explo, 0, { delay:.4, onComplete:shakeReset});
					

					// remove the energy bar level //=========================
					if (barMC.width > 0){
						barMC.width = barMC.width - 10;
					}
				}
				
			}
		}
			
		}
		
		for (var i=0; i < waveNum; i++) 
		{
			crabWave1[i].position.x = crabWave1[i].position.x - waveSpeed;
			if (crabWave1[i].position.x < -60){
				crabWave1[i].position.x = renderer.width + (crabWave1[i].width);
				crabWave1[i].position.y = Math.random() * 500
			}
			
			
			
			// IF GAME IS PLAYING
			if (gamePlaying == true){
			// CHECK FOR COLLISION DETECTION //====================================================
			if( (crabWave1[i].position.y > stevey1) && (crabWave1[i].position.y < stevey2)  ){
				
				if ( (crabWave1[i].position.x < stevex1) && (crabWave1[i].position.x > stevex2) ){
					
					bamMC.position.x = crabWave1[i].position.x;
					bamMC.position.y = crabWave1[i].position.y;
		
					crabWave1[i].position.x = renderer.width + (crabWave1[i].width);
					crabWave1[i].position.y = Math.random() *  renderer.height - 100;
					
					console.log("HIT" + stevey2)
					bamMC.scale.x = bamMC.scale.y = Math.random() * 3.9 + .5
					bamMC.visible = true;
					bamMC.gotoAndPlay(1)

					
					
					// remove the energy bar level //=========================
					if (barMC.width > 0){
						barMC.width = barMC.width - 5;
					}
					
				}
				
			}
			
			}

			// HIDE THE BAM CLIP //===============
			if(bamMC.currentFrame >= 12){
						bamMC.visible = false;
						bamMC.stop();
			 }
			 
			 if(explo.currentFrame >= 17){
						explo.visible = false;
						explo.stop();
			 }
		}
		
		
		
		// FLAP MOTION //===========================================================
		// IF GAME IS PLAYING
		if (gamePlaying == true){
			if (flapping == false){

				steven.visible = false;
				stevenFall.visible = true;

				if (steven.position.y < renderer.height){
					steven.position.y = (steven.position.y + 7.5) 

				}
				else{
					killGame()
				}

				if (waveSpeed > 2.7){
				//	waveSpeed = waveSpeed - .2;
				}
				
				if(stageCamera.position.y > -20){
					//console.log(gameAssetsContainer.position.y)
					stageCamera.position.y = stageCamera.position.y - 1.3;
				}
				
			}
			else{
				if (steven.position.y > 50){
				//	steven.position.x = steven.position.x + .5;
					steven.position.y = steven.position.y - 4.5
				}
				if (waveSpeed < maxSpeed){
				//	waveSpeed = waveSpeed + .1;
				}
				
				steven.visible = true;
				stevenFall.visible = false;
				
				if(stageCamera.position.y < 120){
					stageCamera.position.y = stageCamera.position.y + .9;
				}
				
			}
		
		} // end game playing
		else{
			if (waveSpeed > 0){	
				waveSpeed = waveSpeed - .05
			}
		}

		// CLOUDS //===========================================
		for (var i = 0; i < 3; i++){
			cloud[i].position.x = cloud[i].position.x - waveSpeed;
			
			if(cloud[i].position.x <= 0 - 300){
				cloud[i].position.x = renderer.width + 200 + (Math.random() * 200)
			}
		}
		for (var i = 3; i < 5; i++){
			cloud[i].position.x = cloud[i].position.x - waveSpeed - .5;
			
			if(cloud[i].position.x <= 0 - 300){
				cloud[i].position.x = renderer.width + 200 + (Math.random() * 200)
			}
		}
		
		//WAVES=============================================
		wavebg.position.x = wavebg.position.x - waveSpeed;
		wavebg2.position.x = wavebg2.position.x - waveSpeed;
		wavebg2.position.y = wavebg.position.y;
		//loop back position
		if(wavebg.position.x <= 0 - renderer.width){
			//console.log("loop")
			wavebg.position.x = wavebg2.position.x + wavebg2.width; 
		}
		if(wavebg2.position.x <= 0 - renderer.width){
			//console.log("loop")
			wavebg2.position.x = wavebg.position.x + wavebg.width; 
		}
		
		waveMid.position.x = waveMid.position.x - (waveSpeed + .5);
		waveMid2.position.x = waveMid2.position.x - (waveSpeed + .5);
		waveMid2.position.y = waveMid.position.y;
		
		//loop back position
		if(waveMid.position.x <= 0 - renderer.width){
			waveMid.position.x = waveMid2.position.x + waveMid2.width;
		}
		if(waveMid2.position.x <= 0 - renderer.width){
			waveMid2.position.x = waveMid.position.x + waveMid.width;
		}
		
		// FRONT WAVE
		waveFront.position.x = waveFront.position.x - (waveSpeed + 1);
		waveFront2.position.x = waveFront2.position.x - (waveSpeed + 1);
		waveFront2.position.y = waveFront.position.y;
		//loop back position
		if(waveFront.position.x <= 0 - renderer.width){
			waveFront.position.x = waveFront2.position.x + waveFront2.width;
		}
		if(waveFront2.position.x <= 0 - renderer.width){
			waveFront2.position.x = waveFront.position.x + waveFront.width
		}
		
		// FRONT WAVE
		/*waveAni1.position.x = waveAni1.position.x - (waveSpeed + 1);
		waveAni2.position.x = waveAni2.position.x - (waveSpeed + 1);
		
		//loop back position
		if(waveAni1.position.x <= 0 - renderer.width){
			waveAni1.position.x = waveAni2.position.x + waveAni2.width;
		}
		if(waveAni2.position.x <= 0 - renderer.width){
			waveAni2.position.x = waveAni1.position.x + waveAni1.width
		}*/
		
		stats.end();


		// Check to shake the screen
		if (shakeStage == true){
			waveSpeed = 30;
				steven.rotation  = stevenFall.rotation  = steven.rotation + 5;
				stageCamera.position.x = (Math.random() * 30)
				stageCamera.position.y = (Math.random() * 20)	
				var zoom = TweenLite.to(stageCamera.scale, 1, {x : 2, y: 2 });	
		}
	}