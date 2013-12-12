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
             
      function fumelo(){
         var position = sym.$(".fumello").position();
          if (position.top >= 100){
         	sym.getComposition().getStage().getSymbol("FUMELLO").play("USCITA");
         }	      
      }   
      
      
function init(){


			var Audio1 = null;
			var Audio2 = null;
			var Audio3 = null;
			var Audio4 = null;
			var Audio5 = null;

			var suonatore = {

			    suono1: function playAudio1 (src) {
								if((navigator.userAgent.match(/android/gi))){src = '/android_asset/www/' + src;} 
							    Audio1 = new Media(src);
							    Audio1.play();   
						},
			    suono2: function playAudio2 (src) {
								if((navigator.userAgent.match(/android/gi))){src = '/android_asset/www/' + src;} 
							    Audio2 = new Media(src);
							    Audio2.play();   
						},
			    suono3: function playAudio3 (src) {
								if((navigator.userAgent.match(/android/gi))){src = '/android_asset/www/' + src;} 
							    Audio3 = new Media(src);
							    Audio3.play();   
						},
			    suono4: function playAudio4 (src) {
								if((navigator.userAgent.match(/android/gi))){src = '/android_asset/www/' + src;} 
							    Audio4 = new Media(src);
							    Audio4.play();   
						},
			    suono5: function playAudio5 (src) {
								if((navigator.userAgent.match(/android/gi))){src = '/android_asset/www/' + src;} 
							    Audio5 = new Media(src);
							    Audio5.play();   
						}
			};

         $(".numeris").hide();
         $(".reload").css({'display':'none'});

       document.addEventListener("deviceready", onDeviceReady, false);

       var my_media = null;
       var AudioQ5 = null;
       var AudioFoglie = null;
       var AudioBird = null;
       var AudioVerme = null;

/* Tappetino Start*/	        
        function playAudio(src) {
        if((navigator.userAgent.match(/android/gi))){src = '/android_asset/www/' + src;} 
        	my_media = new Media(src);
        	my_media.play();
        }      
    	function pauseAudio() {
    		if (my_media) {
    			my_media.pause();
    		}
    	}
/* Tappetino Stop*/	        

/* Testo Q5 Start*/	        
        function playAudioQ5(src) {
        if((navigator.userAgent.match(/android/gi))){src = '/android_asset/www/' + src;} 
        	AudioQ5 = new Media(src);
        	AudioQ5.play();
        }
/* Testo Q5 Stop*/	        
        function onDeviceReady() {
        	setTimeout(function(){
        			playAudioQ5("Suoni/quadri/Q5.mp3");
        		},2000);      
			        	(function(){
			    playAudio("Suoni/LaMadeline.mp3");
			    setTimeout(arguments.callee, 301200);
			})();			

        }




       function playAudioQ5 (src) {
        if((navigator.userAgent.match(/android/gi))){src = '/android_asset/www/' + src;} 
            AudioQ5 = new Media(src);
            AudioQ5.play();   
        }
       function playAudioFoglie (src) {
        if((navigator.userAgent.match(/android/gi))){src = '/android_asset/www/' + src;} 
            AudioFoglie = new Media(src);
            AudioFoglie.play();   
        }
       function playAudioBird (src) {
        if((navigator.userAgent.match(/android/gi))){src = '/android_asset/www/' + src;} 
            AudioBird = new Media(src);
            AudioBird.play();   
        }
       function playAudioVerme (src) {
        if((navigator.userAgent.match(/android/gi))){src = '/android_asset/www/' + src;} 
            AudioVerme = new Media(src);
            AudioVerme.play();   
        }



         $(".playvoce").bind(toccomagico, function(){
      		sym.getSymbol(this).play("in");
		 	playAudioQ5('Suoni/quadri/Q5.mp3');
      	 });
	      $(".MelaStat").bind(toccomagico, function(){
		      	sym.getSymbol(this).play("in");
			 	playAudioFoglie('Suoni/foglia.mp3');
	      });

	      $(".BirdPala, .BirdTerra").bind(toccomagico, function(){
	      	sym.getSymbol(this).play("in");
	      	playAudioBird('Suoni/cip01.mp3');
	      });
      $(".triggerverme").bind(toccomagico, function(){
		  playAudioVerme('Suoni/Lumaca01.mp3');
		  sym.getSymbol(".verme").play("in");
      });
      
      
      
      
      
/**********LA CONTA START**********/         		 


 	       var AudioCip = null;
	       function playAudioCip (src) {
	      		if((navigator.userAgent.match(/android/gi))){src = '/android_asset/www/' + src;}
	            AudioCip = new Media(src);
	            AudioCip.play();
	        }          		

         		 $(".triggers").bind(toccomagico, function(){

         		  	$(this).addClass("clicked");
         			var value = $(".clicked").length;

						sym.getSymbol(".menu").play();

						suonatore['suono'+ value]('Suoni/numbers/S00'+ value +'.mp3');
						sym.$('.fumnum'+ value).css({'background-image': 'url(images/svgNum'+value+'.svg)'});

						setTimeout(function(){
								sym.getSymbol(".menu").play("chiusura");
						},2500); 					

         			$(".numeris").hide();
         			sym.getSymbol("numerazio").$('Num-'+value).show();
         			sym.getSymbol("numerazio").play("in");

         			sym.getSymbol("Scoiattolo").play("ani");

						if ( value >= 5 ){

         				 $(".reload").fadeIn();

         			};


         		 });

         		 sym.$("MelaTrigger1").bind(toccomagico, function(){
         		  		sym.getSymbol("Mela-Bella-1").play("in");         		  		
         		  		fumelo();
         		 });
         		 sym.$("MelaTrigger2").bind(toccomagico, function(){
         		  		sym.getSymbol("Mela-Bella-2").play("in");         		  		
         		  		fumelo();
         		 });
         		 sym.$("MelaTrigger3").bind(toccomagico, function(){
         		  		sym.getSymbol("Mela-Bella-3").play("in");         		  		
         		  		fumelo();
         		 });             		         		 
         		 sym.$("MelaTrigger4").bind(toccomagico, function(){
         		  		sym.getSymbol("Mela-Bella-4").play("in");         		  		
         		  		fumelo();
         		 });             		         		 
         		 sym.$("MelaTrigger5").bind(toccomagico, function(){
         		  		sym.getSymbol("Mela-Bella-5").play("in");         		  		
         		  		fumelo();
         		 });             		         		 
/**********LA CONTA STOP**********/         		 


         		  $(".reload").bind(toccomagico, function(){
						sym.getSymbol(this).play("in");

         		  	        sym.getSymbol("Mela-Bella-1").stop(0);
         		  	        sym.getSymbol("Mela-Bella-2").stop(0);
         		  	        sym.getSymbol("Mela-Bella-3").stop(0);
         		  	        sym.getSymbol("Mela-Bella-4").stop(0);
         		  	        sym.getSymbol("Mela-Bella-5").stop(0);

         					$(".triggers").removeClass("clicked");
         					$(".numeris").hide();
         					$(".reload").fadeOut();

         					sym.$('.fumnum1').css({'background-image': 'url(images/svgBWNum1.svg)'});
         					sym.$('.fumnum2').css({'background-image': 'url(images/svgBWNum2.svg)'});
         					sym.$('.fumnum3').css({'background-image': 'url(images/svgBWNum3.svg)'});
         					sym.$('.fumnum4').css({'background-image': 'url(images/svgBWNum4.svg)'});
         					sym.$('.fumnum5').css({'background-image': 'url(images/svgBWNum5.svg)'});

         			 });
         			 
         			 
         			 
/*

      $(".MelaBella1").bind(toccomagico, function(){
      	sym.getSymbol(this).play("in");
      	$(".Mela2Trigger").show();
        	setTimeout(function(){
        			playAudioUno('Suoni/numbers/one.mp3');
					sym.$(".uno").css({'-webkit-filter': 'saturate(100%)', 'opacity':'1'});
			},860);          	      	

      });
      $(".Mela2Trigger").bind(toccomagico, function(){
      	sym.getSymbol(".MelaBella2").play("in");
      	$(".Mela3Trigger").show();
        	setTimeout(function(){
        			playAudioDue('Suoni/numbers/two.mp3');
					sym.$(".due").css({'-webkit-filter': 'saturate(100%)', 'opacity':'1'});
			},860);          	      	      	
      });
      $(".Mela3Trigger").bind(toccomagico, function(){
      	sym.getSymbol(".MelaBella3").play("in");
      	$(".Mela4Trigger").show();
        	setTimeout(function(){
        			playAudioTre('Suoni/numbers/three.mp3');
					sym.$(".tre").css({'-webkit-filter': 'saturate(100%)', 'opacity':'1'});
			},860);            	      	
      });
      $(".Mela4Trigger").bind(toccomagico, function(){
      	sym.getSymbol(".MelaBella4").play("in");
      	$(".Mela5Trigger").show();
        	setTimeout(function(){
        			playAudioQuattro('Suoni/numbers/four.mp3');
					sym.$(".quattro").css({'-webkit-filter': 'saturate(100%)', 'opacity':'1'});
			},860);            	      	
      });
      $(".Mela5Trigger").bind(toccomagico, function(){
      	sym.getSymbol(".MelaBella5").play("in");
        	setTimeout(function(){
        			playAudioCinque('Suoni/numbers/five.mp3');
					sym.$(".cinque").css({'-webkit-filter': 'saturate(100%)', 'opacity':'1'});
			},860);            	      	
      });

*/



     $('.musica').toggle(function () {
          $(".musicasvg").css({'background-image': 'url(images/svg-musicBW.svg)'});
          	pauseAudio();
      }, function () {
          $(".musicasvg").css({'background-image': 'url(images/svg-music.svg)'});
         (function(){
			    playAudio("Suoni/Ghost.mp3");
			    setTimeout(arguments.callee, 301200);
			})();			

      });	
      
      
      
      

         $("#prelo").css({'display':'none'});

         sym.getSymbol("FUMELLO").play("in");

         /*Ombra Nuvola*/sym.$(".Nuvola").css({'-webkit-filter': 'drop-shadow(0 5px 15px rgba(0,0,0,.4))'});

      $(".fioreani").bind(toccomagico, function(){
      	sym.getSymbol(this).play("in");
      });



      $(".Mela2Trigger, .Mela3Trigger, .Mela4Trigger, .Mela5Trigger").hide();

      $(".Trigger-Mela-Easter").bind(toccomagico, function(){
      	sym.getSymbol(".melaeaster").play("in");
      });

      sym.getSymbol(".codaani").play("in");
      $(".codatrigger").bind(toccomagico, function(){
      	sym.getSymbol(".codaani").play("animaziocoda");
      });

      /*MENU START*/
      	avanti = "QuadroFinale.html";
      	indietro = "Quadro4.html";
      	$(".next, .prev, .home, .musica").bind(toccomagico, function(){
      		sym.getSymbol(this).play("in");
      	});

      	$(".testina").bind(toccomagico, function(){
      			sym.getSymbol(".menu").play();
      	});
      	sym.$(".uno, .due, .tre, .quattro, .cinque").css({'-webkit-filter': 'saturate(0%)', 'opacity':'0.4'});
      	sym.$(".next, .prev").css({'-webkit-filter': 'drop-shadow(0 5px 10px rgba(0,0,0,.5))'});
      /*MENU STOP*/      
      
      
      
      
      	        
};/*INIT STOP*/  















      });//Edge binding end
      

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'FUMELLO'
   (function(symbolName) {   
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 614, function(sym, e) {
         sym.stop();
      
      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop(0);
      
      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.play();
      
      });
      //Edge binding end
      
      
      
      
      
      
      
      
      
      Symbol.bindElementAction(compId, symbolName, "${_Rectangle}", "touchstart MSPointerDown", function(sym, e) {
         sym.play(1000);
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_Fumello}", "touchstart MSPointerDown", function(sym, e) {
         sym.play();
      
      });
      //Edge binding end

   })("FUMELLO");
   //Edge symbol end:'FUMELLO'

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
   
   //Edge symbol: 'Preloader'
   (function(symbolName) {   
   
   })("Preloader");
   //Edge symbol end:'Preloader'

   //=========================================================
   
   //Edge symbol: 'Coda'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 37481, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("Coda");
   //Edge symbol end:'Coda'

   //=========================================================
   
   //Edge symbol: 'CodaAni'
   (function(symbolName) {   
   
   })("CodaAni");
   //Edge symbol end:'CodaAni'

   //=========================================================
   
   //Edge symbol: 'Verme'
   (function(symbolName) {   
   
   })("Verme");
   //Edge symbol end:'Verme'

   //=========================================================
   
   //Edge symbol: 'Mela-Statica'
   (function(symbolName) {   
   
   })("Mela-Statica");
   //Edge symbol end:'Mela-Statica'

   //=========================================================
   
   //Edge symbol: 'Mela-Bella-1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 298, function(sym, e) {
         sym.getSymbol(".scoiattolo").play("in");

      });
      //Edge binding end

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("Mela-Bella-1");
   //Edge symbol end:'Mela-Bella-1'

   //=========================================================
   
   //Edge symbol: 'FioreGialllo'
   (function(symbolName) {   
   
   })("FioreGialllo");
   //Edge symbol end:'FioreGialllo'

   //=========================================================
   
   //Edge symbol: 'FioreRosa'
   (function(symbolName) {   
   
   })("FioreRosa");
   //Edge symbol end:'FioreRosa'

   //=========================================================
   
   //Edge symbol: 'FioreBlu'
   (function(symbolName) {   
   
   })("FioreBlu");
   //Edge symbol end:'FioreBlu'

   //=========================================================
   
   //Edge symbol: 'Bird-Pala'
   (function(symbolName) {   
   
   })("Bird-Pala");
   //Edge symbol end:'Bird-Pala'

   //=========================================================
   
   //Edge symbol: 'Bird-Tereno'
   (function(symbolName) {   
   
   })("Bird-Tereno");
   //Edge symbol end:'Bird-Tereno'

   //=========================================================
   
   //Edge symbol: 'Scoiattolo'
   (function(symbolName) {   
   
   })("Scoiattolo");
   //Edge symbol end:'Scoiattolo'

   //=========================================================
   
   //Edge symbol: 'Mela-Easter-Egg'
   (function(symbolName) {   
   
   })("Mela-Easter-Egg");
   //Edge symbol end:'Mela-Easter-Egg'

   //=========================================================
   
   //Edge symbol: 'Down-level'
   (function(symbolName) {   
   
   })("Down-level");
   //Edge symbol end:'Down-level'

   //=========================================================
   
   //Edge symbol: 'Mela-Bella-2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 220, function(sym, e) {
         sym.getSymbol(".scoiattolo").play("in");

      });
      //Edge binding end

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1698, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("Mela-Bella-2");
   //Edge symbol end:'Mela-Bella-2'

   //=========================================================
   
   //Edge symbol: 'Mela-Bella-3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 341, function(sym, e) {
         sym.getSymbol(".scoiattolo").play("in");

      });
      //Edge binding end

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("Mela-Bella-3");
   //Edge symbol end:'Mela-Bella-3'

   //=========================================================
   
   //Edge symbol: 'Mela-Bella-4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 369, function(sym, e) {
         sym.getSymbol(".scoiattolo").play("in");

      });
      //Edge binding end

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1810, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("Mela-Bella-4");
   //Edge symbol end:'Mela-Bella-4'

   //=========================================================
   
   //Edge symbol: 'Mela-Bella-5'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 370, function(sym, e) {
         sym.getSymbol(".scoiattolo").play("in");

      });
      //Edge binding end

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("Mela-Bella-5");
   //Edge symbol end:'Mela-Bella-5'

   //=========================================================
   
   //Edge symbol: 'Farfalle'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 72000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("Farfalle");
   //Edge symbol end:'Farfalle'

   //=========================================================
   
   //Edge symbol: 'play'
   (function(symbolName) {   
   
   })("play");
   //Edge symbol end:'play'

   //=========================================================

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'testina'
   (function(symbolName) {   
   
   })("testina");
   //Edge symbol end:'testina'

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
   
   //Edge symbol: 'reload'
   (function(symbolName) {   
   
   })("reload");
   //Edge symbol end:'reload'

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
   
   //Edge symbol: 'NEXT'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 140, function(sym, e) {
         window.open(avanti, "_self");

      });
      //Edge binding end

   })("NEXT");
   //Edge symbol end:'NEXT'

   //=========================================================
   
   //Edge symbol: 'musica'
   (function(symbolName) {   
   
   })("musica_1");
   //Edge symbol end:'musica_1'

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

   //=========================================================
   
   //Edge symbol: 'numerazio'
   (function(symbolName) {   
   
   })("numerazio");
   //Edge symbol end:'numerazio'

})(jQuery, AdobeEdge, "Quadro05");