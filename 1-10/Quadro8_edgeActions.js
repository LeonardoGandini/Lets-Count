/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
      yepnope({load: ["cordova.js"],complete: init});
      
      toccomagico = 'touchstart MSPointerDown pointerdown'
       //toccomagico = 'click'
      
      function fumelo(){
         var position = sym.$(".fumello").position();
          if (position.top >= 100){
         	sym.getComposition().getStage().getSymbol("FUMELLO").play("USCITA");
         }	      
      }   
      
      
   function seAndroid(){
	   if((navigator.userAgent.match(/android/gi))){src = '/android_asset/www/' + src;}
   }   



	function init(){

	      document.addEventListener("deviceready", onDeviceReady, false);

	        function onDeviceReady() {
	        	(function(){
				    playAudio("audio/LaMadeline.mp3");
				    setTimeout(arguments.callee, 301200);
				})();
				setTimeout(function(){
        			playAudioVoce('audio/quadri/Q8.mp3');
        		},2000);      
	        }        

	        var my_media = null;
	        function playAudio(src) {
				seAndroid();        
	            my_media = new Media(src);
	            my_media.play();
	        }    
	    	function pauseAudio() {
	    		if (my_media) {
	    			my_media.pause();
	    		}
	    	}


	       var AudioVoce = null;
	       function playAudioVoce (src) {
	      		seAndroid();
	            AudioVoce = new Media(src);
	            AudioVoce.play();
	        }  


			var Audio1 = null;
			var Audio2 = null;
			var Audio3 = null;
			var Audio4 = null;
			var Audio5 = null;
			var Audio6 = null;
			var Audio7 = null;
			var Audio8 = null;

			var suonatore = {

			    suono1: function playAudio1 (src) {
								seAndroid(); 
							    Audio1 = new Media(src);
							    Audio1.play();   
						},
			    suono2: function playAudio2 (src) {
								seAndroid(); 
							    Audio2 = new Media(src);
							    Audio2.play();   
						},
			    suono3: function playAudio3 (src) {
								seAndroid(); 
							    Audio3 = new Media(src);
							    Audio3.play();   
						},
			    suono4: function playAudio4 (src) {
								seAndroid(); 
							    Audio4 = new Media(src);
							    Audio4.play();   
						},
			    suono5: function playAudio5 (src) {
								seAndroid(); 
							    Audio5 = new Media(src);
							    Audio5.play();   
						},
			    suono6: function playAudio6 (src) {
								seAndroid(); 
							    Audio6 = new Media(src);
							    Audio6.play();   
						},
			    suono7: function playAudio7 (src) {
								seAndroid(); 
							    Audio7 = new Media(src);
							    Audio7.play();   
						},
			    suono8: function playAudio8 (src) {
								seAndroid(); 
							    Audio8 = new Media(src);
							    Audio8.play();   
						}		
			};


         $(".numeris").hide();
         $(".reload").hide();




/**********LA CONTA START**********/         		 


					$('.paperatutto2').hide();
					$('.paperatutto3').hide();
					$('.paperatutto4').hide();
					$('.paperatutto5').hide();
					$('.paperatutto6').hide();
					$('.paperatutto7').hide();
					$('.paperatutto8').hide();

					$(".trigduck2").hide();
					$(".trigduck3").hide();
					$(".trigduck4").hide();
					$(".trigduck5").hide();
					$(".trigduck6").hide();
					$(".trigduck7").hide();
					$(".trigduck8").hide();


			       var AudioDuck = null;
			       function playAudioDuck (src) {
			       seAndroid();
			            AudioDuck = new Media(src);
			            AudioDuck.play();
			        }

     		$(".trigduck1").bind(toccomagico, function() {
     			var value = 1;
     			playAudioDuck("audio/duck.mp3");
     			setTimeout(function() {
     				sym.getSymbol(".menu").play();
     				fumelo();
     				suonatore['suono' + value]('audio/numbers/S00' + value + '.mp3');
     				sym.$('.fumnum' + value).css({
     					'background-image': 'url(images/svgNum' + value + '.svg)'
     				});
     				$(".numeris").hide();
     				sym.getSymbol("numerazio").$('Num-' + value).show();
     				sym.getSymbol("numerazio").play("in");
     				sym.getSymbol("Scoiattolo").play("ani");
     			}, 3000);
     			setTimeout(function() {
     				sym.getSymbol(".menu").play("chiusura");
     			}, 6000);
     			$(this).fadeOut();
     			sym.getSymbol("paperatutto" + value).play("in");
     		});
     		$(".trigduck2").bind(toccomagico, function() {
     			var value = 2;
     			playAudioDuck("audio/duck.mp3");
     			setTimeout(function() {
     				sym.getSymbol(".menu").play();
     				fumelo();
     				suonatore['suono' + value]('audio/numbers/S00' + value + '.mp3');
     				sym.$('.fumnum' + value).css({
     					'background-image': 'url(images/svgNum' + value + '.svg)'
     				});
     				$(".numeris").hide();
     				sym.getSymbol("numerazio").$('Num-' + value).show();
     				sym.getSymbol("numerazio").play("in");
     				sym.getSymbol("Scoiattolo").play("ani");
     			}, 3000);
     			setTimeout(function() {
     				sym.getSymbol(".menu").play("chiusura");
     			}, 6000);
     			$(this).fadeOut();
     			sym.getSymbol("paperatutto" + value).play("in");
     		});
     		$(".trigduck3").bind(toccomagico, function() {
     			var value = 3;
     			playAudioDuck("audio/duck.mp3");
     			setTimeout(function() {
     				sym.getSymbol(".menu").play();
     				fumelo();
     				suonatore['suono' + value]('audio/numbers/S00' + value + '.mp3');
     				sym.$('.fumnum' + value).css({
     					'background-image': 'url(images/svgNum' + value + '.svg)'
     				});
     				$(".numeris").hide();
     				sym.getSymbol("numerazio").$('Num-' + value).show();
     				sym.getSymbol("numerazio").play("in");
     				sym.getSymbol("Scoiattolo").play("ani");
     			}, 3000);
     			setTimeout(function() {
     				sym.getSymbol(".menu").play("chiusura");
     			}, 6000);
     			$(this).fadeOut();
     			sym.getSymbol("paperatutto" + value).play("in");
     		});
     		$(".trigduck4").bind(toccomagico, function() {
     			var value = 4;
     			playAudioDuck("audio/duck.mp3");
     			setTimeout(function() {
     				sym.getSymbol(".menu").play();
     				fumelo();
     				suonatore['suono' + value]('audio/numbers/S00' + value + '.mp3');
     				sym.$('.fumnum' + value).css({
     					'background-image': 'url(images/svgNum' + value + '.svg)'
     				});
     				$(".numeris").hide();
     				sym.getSymbol("numerazio").$('Num-' + value).show();
     				sym.getSymbol("numerazio").play("in");
     				sym.getSymbol("Scoiattolo").play("ani");
     			}, 3000);
     			setTimeout(function() {
     				sym.getSymbol(".menu").play("chiusura");
     			}, 6000);
     			$(this).fadeOut();
     			sym.getSymbol("paperatutto" + value).play("in");
     		});
     		$(".trigduck5").bind(toccomagico, function() {
     			var value = 5;
     			playAudioDuck("audio/duck.mp3");
     			setTimeout(function() {
     				sym.getSymbol(".menu").play();
     				fumelo();
     				suonatore['suono' + value]('audio/numbers/S00' + value + '.mp3');
     				sym.$('.fumnum' + value).css({
     					'background-image': 'url(images/svgNum' + value + '.svg)'
     				});
     				$(".numeris").hide();
     				sym.getSymbol("numerazio").$('Num-' + value).show();
     				sym.getSymbol("numerazio").play("in");
     				sym.getSymbol("Scoiattolo").play("ani");
     			}, 3000);
     			setTimeout(function() {
     				sym.getSymbol(".menu").play("chiusura");
     			}, 6000);
     			$(this).fadeOut();
     			sym.getSymbol("paperatutto" + value).play("in");
     		});
     		$(".trigduck6").bind(toccomagico, function() {
     			var value = 6;
     			playAudioDuck("audio/duck.mp3");
     			setTimeout(function() {
     				sym.getSymbol(".menu").play();
     				fumelo();
     				suonatore['suono' + value]('audio/numbers/S00' + value + '.mp3');
     				sym.$('.fumnum' + value).css({
     					'background-image': 'url(images/svgNum' + value + '.svg)'
     				});
     				$(".numeris").hide();
     				sym.getSymbol("numerazio").$('Num-' + value).show();
     				sym.getSymbol("numerazio").play("in");
     				sym.getSymbol("Scoiattolo").play("ani");
     			}, 3000);
     			setTimeout(function() {
     				sym.getSymbol(".menu").play("chiusura");
     			}, 6000);
     			$(this).fadeOut();
     			sym.getSymbol("paperatutto" + value).play("in");
     		});
     		$(".trigduck7").bind(toccomagico, function() {
     			var value = 7;
     			playAudioDuck("audio/duck.mp3");
     			setTimeout(function() {
     				sym.getSymbol(".menu").play();
     				fumelo();
     				suonatore['suono' + value]('audio/numbers/S00' + value + '.mp3');
     				sym.$('.fumnum' + value).css({
     					'background-image': 'url(images/svgNum' + value + '.svg)'
     				});
     				$(".numeris").hide();
     				sym.getSymbol("numerazio").$('Num-' + value).show();
     				sym.getSymbol("numerazio").play("in");
     				sym.getSymbol("Scoiattolo").play("ani");
     			}, 3000);
     			setTimeout(function() {
     				sym.getSymbol(".menu").play("chiusura");
     			}, 6000);
     			$(this).fadeOut();
     			sym.getSymbol("paperatutto" + value).play("in");
     		});
     		$(".trigduck8").bind(toccomagico, function() {
     			var value = 8;
     			playAudioDuck("audio/duck.mp3");
     			setTimeout(function() {
     				sym.getSymbol(".menu").play();
     				fumelo();
     				suonatore['suono' + value]('audio/numbers/S00' + value + '.mp3');
     				sym.$('.fumnum' + value).css({
     					'background-image': 'url(images/svgNum' + value + '.svg)'
     				});
     				$(".numeris").hide();
     				sym.getSymbol("numerazio").$('Num-' + value).show();
     				sym.getSymbol("numerazio").play("in");
     				sym.getSymbol("Scoiattolo").play("ani");
     			}, 3000);
     			setTimeout(function() {
     				sym.getSymbol(".menu").play("chiusura");
     			}, 6000);
     			$(".reload").fadeIn();
     			$(this).fadeOut();
     			sym.getSymbol("paperatutto" + value).play("in");
     		});




			$('.paperatutto1').bind(toccomagico, function() {
				 sym.getComposition().getStage().getSymbol('paperatutto1').getSymbol('papera1').play("testa");
				 playAudioDuck("audio/duck.mp3");
			});
			$('.paperatutto2').bind(toccomagico, function() {
				 sym.getComposition().getStage().getSymbol('paperatutto2').getSymbol('papera2').play("testa");
				 playAudioDuck("audio/duck.mp3");
			});
			$('.paperatutto3').bind(toccomagico, function() {
				 sym.getComposition().getStage().getSymbol('paperatutto3').getSymbol('papera3').play("testa");
				 playAudioDuck("audio/duck.mp3");
			});
			$('.paperatutto4').bind(toccomagico, function() {
				 sym.getComposition().getStage().getSymbol('paperatutto4').getSymbol('papera4').play("testa");
				 playAudioDuck("audio/duck.mp3");
			});
			$('.paperatutto5').bind(toccomagico, function() {
				 sym.getComposition().getStage().getSymbol('paperatutto5').getSymbol('papera5').play("testa");
				 playAudioDuck("audio/duck.mp3");
			});
			$('.paperatutto6').bind(toccomagico, function() {
				 sym.getComposition().getStage().getSymbol('paperatutto6').getSymbol('papera6').play("testa");
				 playAudioDuck("audio/duck.mp3");
			});
			$('.paperatutto7').bind(toccomagico, function() {
				 sym.getComposition().getStage().getSymbol('paperatutto7').getSymbol('papera7').play("testa");
				 playAudioDuck("audio/duck.mp3");
			});
			$('.paperatutto8').bind(toccomagico, function() {
				 sym.getComposition().getStage().getSymbol('paperatutto8').getSymbol('papera8').play("testa");
				 playAudioDuck("audio/duck.mp3");
			});


/**********LA CONTA STOP**********/         		 


         		  $(".reload").bind(toccomagico, function(){
							sym.getSymbol(this).play("in");

							sym.getComposition().getStage().getSymbol('paperatutto1').stop(0);
							sym.getComposition().getStage().getSymbol('paperatutto2').stop(0);
							sym.getComposition().getStage().getSymbol('paperatutto3').stop(0);
							sym.getComposition().getStage().getSymbol('paperatutto4').stop(0);
							sym.getComposition().getStage().getSymbol('paperatutto5').stop(0);
							sym.getComposition().getStage().getSymbol('paperatutto6').stop(0);
							sym.getComposition().getStage().getSymbol('paperatutto7').stop(0);
							sym.getComposition().getStage().getSymbol('paperatutto8').stop(0);

							$(".trigduck1").show();
							$(".trigduck2").show();
							$(".trigduck3").show();
							$(".trigduck4").show();
							$(".trigduck5").show();
							$(".trigduck6").show();
							$(".trigduck7").show();
							$(".trigduck8").show();		

         					//$(".triggers").removeClass("clicked");		
         					$(".numeris").hide();
         					$(".reload").fadeOut();


         					sym.$('.fumnum1').css({'background-image': 'url(images/svgBWNum1.svg)'});
         					sym.$('.fumnum2').css({'background-image': 'url(images/svgBWNum2.svg)'});
         					sym.$('.fumnum3').css({'background-image': 'url(images/svgBWNum3.svg)'});
         					sym.$('.fumnum4').css({'background-image': 'url(images/svgBWNum4.svg)'});
         					sym.$('.fumnum5').css({'background-image': 'url(images/svgBWNum5.svg)'});
         					sym.$('.fumnum6').css({'background-image': 'url(images/svgBWNum6.svg)'});
         					sym.$('.fumnum7').css({'background-image': 'url(images/svgBWNum7.svg)'});
         					sym.$('.fumnum8').css({'background-image': 'url(images/svgBWNum8.svg)'});
         					sym.$('.fumnum9').css({'background-image': 'url(images/svgBWNum9.svg)'});
         					sym.$('.fumnum10').css({'background-image': 'url(images/svgBWNum10.svg)'});

         			 });



/*
			       var AudioWaterSplash = null;
			       function playAudioWaterSplash (src) {
			       seAndroid();
			            AudioAudioWaterSplash = new Media(src);
			            AudioAudioWaterSplash.play();
			        }



        		  sym.$("triggerwater1").bind(toccomagico, function(){
         		  		sym.getSymbol("ninfeabig1-water").play("in");
         		  		playAudioWaterSplash("audio/watersplash.mp3");		         		  		
	         	  });
	         	  sym.$("triggerwater2").bind(toccomagico, function(){
	         		  		sym.getSymbol("ninfeabig2-water").play("in");
	         		  		playAudioWaterSplash("audio/watersplash.mp3");		         		  		
	         	  });        		 

*/

/**********SCOIATTOLO START**********/
         		 sym.$("trigger-coda").bind(toccomagico, function(){
         		  		sym.getSymbol("Scoiattolo").play("coda");
         		 });	 

 					var i=0;
					setInterval(function() {
						 sym.getSymbol("Scoiattolo").play("coda");
					}, 4500);


/**********SCOIATTOLO STOP**********/

/**********FUMELLO START**********/ 
			sym.getSymbol("FUMELLO").play("ENTRATA");

			$(".fumello").bind(toccomagico, function(){
				sym.getSymbol("FUMELLO").play("ENTRATA");
			});	 
			$(".fume").bind(toccomagico, function(){
				sym.getSymbol("FUMELLO").play("USCITA");
			});	         
            $(".playvoce").bind(toccomagico, function(){
      	     	sym.getSymbol(this).play("in");
		    		playAudioVoce('audio/quadri/Q8.mp3');
      	    });
/**********FUMELLO STOP**********/ 


/**********MENU START**********/
      	avanti = "Quadro9.html";
      	indietro = "Quadro7.html";
      	$(".next, .prev, .musica, .home").bind(toccomagico, function(){
      		sym.getSymbol(this).play("in");
      	});
      	$(".testina").bind(toccomagico, function(){
      			sym.getSymbol(".menu").play();
     				fumelo();
      	});

      	sym.$(".next, .prev").css({'-webkit-filter': 'drop-shadow(0 5px 10px rgba(0,0,0,.5))'});
/**********MENU STOP**********/


      $('.musica').toggle(function () {
          $(".musicasvg").css({'background-image': 'url(images/svg-musicBW.svg)'});
          	pauseAudio();
      }, function () {
          $(".musicasvg").css({'background-image': 'url(images/svg-music.svg)'});
         (function(){
			    playAudio("audio/LaMadeline.mp3");
			    setTimeout(arguments.callee, 301200);
			})();			

      });


		setInterval(function() {
			 switch(i++%4) {
				  case 0: sym.getComposition().getStage().getSymbol('giunco').play("breve");
				  break;
				  case 1: sym.getComposition().getStage().getSymbol('giunco2').play("breve");
				  break;
				  case 2: sym.getComposition().getStage().getSymbol('giunco3').play("breve");
				  break;
				  case 3: sym.getComposition().getStage().getSymbol('giunco4').play("breve");
				  break;				  
			 }
		}, 6000);		
		
		

}/**********FINE INIT**********/






/*DA FOTTERE ALLA FINE*///init();







      });
      //Edge binding end

      

      

      

      

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'numerazio'
   (function(symbolName) {   
   
   })("numerazio");
   //Edge symbol end:'numerazio'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'musica_1'
   (function(symbolName) {   
   
      })("play");
   //Edge symbol end:'play'

   //=========================================================
   
   //Edge symbol: 'FUMELLO'
   (function(symbolName) {   
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop(0);
      
      });
      //Edge binding end
      
      
      
      
      
      
      
      
      
      
      
      
      
      

   })("FUMELLO");
   //Edge symbol end:'FUMELLO'

   //=========================================================

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'MENUz'
   (function(symbolName) {   
      
      
      
      
      
      
      
      
      
      
      
      

      

      

      

      

   })("MENUz");
   //Edge symbol end:'MENUz'

   //=========================================================
   
   //Edge symbol: 'Menu'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 196, function(sym, e) {
         sym.stop();
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 384, function(sym, e) {
         sym.stop(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         //sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 223, function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14, function(sym, e) {
         sym.getSymbol(".testina").play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 236, function(sym, e) {
         sym.getSymbol(".testina").play();

      });
      //Edge binding end

   })("Menu");
   //Edge symbol end:'Menu'

   //=========================================================
   
   //Edge symbol: 'musica'
   (function(symbolName) {   
   
   })("musica");
   //Edge symbol end:'musica'

   //=========================================================
   
   //Edge symbol: 'testina'
   (function(symbolName) {   
   
   })("testina");
   //Edge symbol end:'testina'

   //=========================================================
   
   //Edge symbol: 'NEXT'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 140, function(sym, e) {
         window.open(avanti, "_self");

      });
      //Edge binding end

   })("NEXT");
   //Edge symbol end:'NEXT'

   //=========================================================
   
   //Edge symbol: 'NEXT_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 140, function(sym, e) {
         window.open(indietro, "_self");

      });
         //Edge binding end

      })("PREV");
   //Edge symbol end:'PREV'

   //=========================================================
   
   //Edge symbol: 'HOME_butt'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 406, function(sym, e) {
         window.open("index.html", "_self");

      });
      //Edge binding end

   })("HOME_butt");
   //Edge symbol end:'HOME_butt'

   //=========================================================
   
   //Edge symbol: 'reload'
   (function(symbolName) {   
   
   })("reload");
   //Edge symbol end:'reload'

   //=========================================================
   
   //Edge symbol: 'NUVOLA'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 105000, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);
      
      });
      //Edge binding end

   })("NUVOLA");
   //Edge symbol end:'NUVOLA'

   //=========================================================
   
   //Edge symbol: 'Scoiattolo'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2062, function(sym, e) {
         sym.stop(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 529, function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop(0);

      });
      //Edge binding end

   })("Scoiattolo");
   //Edge symbol end:'Scoiattolo'

   //=========================================================
   
   //Edge symbol: 'papera'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1684, function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5672, function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop(0);

      });
      //Edge binding end

   })("papera");
   //Edge symbol end:'papera'

   //=========================================================
   
   //Edge symbol: 'giunco'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4101, function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7750, function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop(0);

      });
      //Edge binding end

   })("giunco");
   //Edge symbol end:'giunco'

   //=========================================================
   
   //Edge symbol: 'paperatutto1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.getComposition().getStage().getSymbol('giunco').play("normale");
         sym.getComposition().getStage().getSymbol('giunco2').play("normale");
         sym.getComposition().getStage().getSymbol('giunco4').play("normale");
         sym.getComposition().getStage().getSymbol('giunco3').play("normale");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 351, function(sym, e) {
         sym.getComposition().getStage().getSymbol('paperatutto1').getSymbol('papera1').play("becco");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 919, function(sym, e) {
         $('.paperatutto2').fadeIn();
         $(".trigduck2").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4234, function(sym, e) {
         sym.getComposition().getStage().getSymbol('paperatutto1').getSymbol('papera1').play("testa");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("paperatutto1");
   //Edge symbol end:'paperatutto1'

   //=========================================================
   
   //Edge symbol: 'paperatutto2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.getComposition().getStage().getSymbol('giunco').play("normale");
         sym.getComposition().getStage().getSymbol('giunco2').play("normale");
         sym.getComposition().getStage().getSymbol('giunco4').play("normale");
         sym.getComposition().getStage().getSymbol('giunco3').play("normale");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 351, function(sym, e) {
         sym.getComposition().getStage().getSymbol('paperatutto2').getSymbol('papera2').play("becco");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 919, function(sym, e) {
         $('.paperatutto3').fadeIn();
         $(".trigduck3").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4234, function(sym, e) {
         sym.getComposition().getStage().getSymbol('paperatutto2').getSymbol('papera2').play("testa");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("paperatutto2");
   //Edge symbol end:'paperatutto2'

   //=========================================================
   
   //Edge symbol: 'paperatutto4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.getComposition().getStage().getSymbol('giunco').play("normale");
         sym.getComposition().getStage().getSymbol('giunco2').play("normale");
         sym.getComposition().getStage().getSymbol('giunco4').play("normale");
         sym.getComposition().getStage().getSymbol('giunco3').play("normale");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 351, function(sym, e) {
         sym.getComposition().getStage().getSymbol('paperatutto4').getSymbol('papera4').play("becco");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 919, function(sym, e) {
         $('.paperatutto5').fadeIn();
         $(".trigduck5").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4250, function(sym, e) {
         sym.getComposition().getStage().getSymbol('paperatutto4').getSymbol('papera4').play("testa");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("paperatutto4");
   //Edge symbol end:'paperatutto4'

   //=========================================================
   
   //Edge symbol: 'paperatutto8'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.getComposition().getStage().getSymbol('giunco').play("normale");
         sym.getComposition().getStage().getSymbol('giunco2').play("normale");
         sym.getComposition().getStage().getSymbol('giunco4').play("normale");
         sym.getComposition().getStage().getSymbol('giunco3').play("normale");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 351, function(sym, e) {
         sym.getComposition().getStage().getSymbol('paperatutto8').getSymbol('papera8').play("becco");

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4234, function(sym, e) {
         sym.getComposition().getStage().getSymbol('paperatutto8').getSymbol('papera8').play("testa");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("paperatutto8");
   //Edge symbol end:'paperatutto8'

   //=========================================================
   
   //Edge symbol: 'paperatutto6'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.getComposition().getStage().getSymbol('giunco').play("normale");
         sym.getComposition().getStage().getSymbol('giunco2').play("normale");
         sym.getComposition().getStage().getSymbol('giunco4').play("normale");
         sym.getComposition().getStage().getSymbol('giunco3').play("normale");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 351, function(sym, e) {
         sym.getComposition().getStage().getSymbol('paperatutto6').getSymbol('papera6').play("becco");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 919, function(sym, e) {
         $('.paperatutto7').fadeIn();
         $(".trigduck7").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4234, function(sym, e) {
         sym.getComposition().getStage().getSymbol('paperatutto6').getSymbol('papera6').play("testa");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("paperatutto6");
   //Edge symbol end:'paperatutto6'

   //=========================================================
   
   //Edge symbol: 'paperatutto3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.getComposition().getStage().getSymbol('giunco').play("normale");
         sym.getComposition().getStage().getSymbol('giunco2').play("normale");
         sym.getComposition().getStage().getSymbol('giunco4').play("normale");
         sym.getComposition().getStage().getSymbol('giunco3').play("normale");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 351, function(sym, e) {
         sym.getComposition().getStage().getSymbol('paperatutto3').getSymbol('papera3').play("becco");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 919, function(sym, e) {
         $('.paperatutto4').fadeIn();
         $(".trigduck4").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4234, function(sym, e) {
         sym.getComposition().getStage().getSymbol('paperatutto3').getSymbol('papera3').play("testa");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("paperatutto3");
   //Edge symbol end:'paperatutto3'

   //=========================================================
   
   //Edge symbol: 'paperatutto5'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.getComposition().getStage().getSymbol('giunco').play("normale");
         sym.getComposition().getStage().getSymbol('giunco2').play("normale");
         sym.getComposition().getStage().getSymbol('giunco4').play("normale");
         sym.getComposition().getStage().getSymbol('giunco3').play("normale");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 351, function(sym, e) {
         sym.getComposition().getStage().getSymbol('paperatutto5').getSymbol('papera5').play("becco");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 919, function(sym, e) {
         $('.paperatutto6').fadeIn();
         $(".trigduck6").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4234, function(sym, e) {
         sym.getComposition().getStage().getSymbol('paperatutto5').getSymbol('papera5').play("testa");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("paperatutto5");
   //Edge symbol end:'paperatutto5'

   //=========================================================
   
   //Edge symbol: 'paperatutto7'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.getComposition().getStage().getSymbol('giunco').play("normale");
         sym.getComposition().getStage().getSymbol('giunco2').play("normale");
         sym.getComposition().getStage().getSymbol('giunco4').play("normale");
         sym.getComposition().getStage().getSymbol('giunco3').play("normale");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 351, function(sym, e) {
         sym.getComposition().getStage().getSymbol('paperatutto7').getSymbol('papera7').play("becco");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 919, function(sym, e) {
         $('.paperatutto8').fadeIn();
         $(".trigduck8").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4234, function(sym, e) {
         sym.getComposition().getStage().getSymbol('paperatutto7').getSymbol('papera7').play("testa");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("paperatutto7");
   //Edge symbol end:'paperatutto7'

})(jQuery, AdobeEdge, "Quadro-08");