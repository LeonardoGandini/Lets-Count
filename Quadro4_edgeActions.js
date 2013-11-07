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
		
/*
		if((navigator.userAgent.match(/MSIE/i))){
		  yepnope({load: ["libs/cordovaIE.js"],complete: init});
		}
		
		if((navigator.userAgent.match(/android/gi))){
			yepnope({load: ["libs/cordova.js"],complete: init});
		}
		
		if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i))){
			yepnope({load: ["libs/cordovaIOS.js"],complete: init});
		}
*/
 yepnope({load: ["cordova.js"],complete: init});  
 
 toccomagico = 'touchstart MSPointerDown pointerdown'
    
      function init(){

       document.addEventListener("deviceready", onDeviceReady, false);

       var my_media = null;
       var AudioQ4 = null;
       var AudioFoglie = null;
       var AudioUno = null;
       var AudioDue = null;
       var AudioTre = null;
       var AudioQuattro = null;
       var AudioRicci = null;

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

/* Testo Q4 Start*/	        
        function playAudioQ4(src) {
        if((navigator.userAgent.match(/android/gi))){src = '/android_asset/www/' + src;} 
        	AudioQ4 = new Media(src);
        	AudioQ4.play();
        }
/* Testo Q4 Stop*/	        

        function onDeviceReady() {
        	setTimeout(function(){
        			playAudioQ4("Suoni/quadri/Q4.mp3");
        		},2000);      
			        	(function(){
			    playAudio("Suoni/LaMadeline.mp3");
			    setTimeout(arguments.callee, 301200);
			})();			

        }




       function playAudioQ4 (src) {
        if((navigator.userAgent.match(/android/gi))){src = '/android_asset/www/' + src;} 
            AudioQ4 = new Media(src);
            AudioQ4.play();   
        }
       function playAudioFoglie (src) {
        if((navigator.userAgent.match(/android/gi))){src = '/android_asset/www/' + src;} 
            AudioFoglie = new Media(src);
            AudioFoglie.play();   
        }
       function playAudioUno (src) {
        if((navigator.userAgent.match(/android/gi))){src = '/android_asset/www/' + src;} 
            AudioUno = new Media(src);
            AudioUno.play();   
        }
       function playAudioDue (src) {
        if((navigator.userAgent.match(/android/gi))){src = '/android_asset/www/' + src;} 
            AudioDue = new Media(src);
            AudioDue.play();   
        }
       function playAudioTre (src) {
        if((navigator.userAgent.match(/android/gi))){src = '/android_asset/www/' + src;} 
            AudioTre = new Media(src);
            AudioTre.play();   
        }
       function playAudioQuattro (src) {
        if((navigator.userAgent.match(/android/gi))){src = '/android_asset/www/' + src;} 
            AudioQuattro = new Media(src);
            AudioQuattro.play();   
        }
       function playAudioRicci (src) {
        if((navigator.userAgent.match(/android/gi))){src = '/android_asset/www/' + src;} 
            AudioRicci = new Media(src);
            AudioRicci.play();   
        }



         $(".playvoce").bind(toccomagico, function(){
      		sym.getSymbol(this).play("in");
		 	playAudioQ4('Suoni/quadri/Q4.mp3');
      	 });
	      $(".FragStat").bind(toccomagico, function(){
		      	sym.getSymbol(this).play("in");
			 	playAudioFoglie('Suoni/foglia.mp3');
	      });
	  
	      $(".riccio").bind(toccomagico, function(){
			playAudioRicci('Suoni/Lumaca01.mp3');
	      	$(this).animate({top:'-=20px'},"200");
	      	$(this).animate({top:'+=20px'},"1");
	      });


      $(".fragola1").bind(toccomagico, function(){
      	sym.getSymbol(this).play("in");
      	$(".fragola2trigger").show();
        	setTimeout(function(){
        			playAudioUno('Suoni/numbers/one.mp3');
					sym.$(".uno").css({'-webkit-filter': 'saturate(100%)', 'opacity':'1'});
			},1000);          	      	
      });
      
      $(".fragola2trigger").bind(toccomagico, function(){
      	sym.getSymbol(".fragola2").play("in");
      	$(".fragola3trigger").show();
        	setTimeout(function(){
        			playAudioDue('Suoni/numbers/two.mp3');
					sym.$(".due").css({'-webkit-filter': 'saturate(100%)', 'opacity':'1'});
			},1000);          	      	
      });
      $(".fragola3trigger").bind(toccomagico, function(){
      	sym.getSymbol(".fragola3").play("in");
      	$(".fragola4trigger").show();
        	setTimeout(function(){
        			playAudioTre('Suoni/numbers/three.mp3');
					sym.$(".tre").css({'-webkit-filter': 'saturate(100%)', 'opacity':'1'});
			},1000);            	
      });
      $(".fragola4trigger").bind(toccomagico, function(){
      	sym.getSymbol(".fragola4").play("in");
        	setTimeout(function(){
        			playAudioQuattro('Suoni/numbers/four.mp3');
					sym.$(".quattro").css({'-webkit-filter': 'saturate(100%)', 'opacity':'1'});
			},1000);            	
      });




      $('.musica').toggle(function () {
          $(".musica").css({
          	'-webkit-filter': 'saturate(0%)',
          	'opacity':'0.6'
          	});
          	pauseAudio();
      }, function () {
          $(".musica").css({
          	'-webkit-filter': 'saturate(100%)',
          	'opacity':'1'
          	});
          	        	(function(){
			    playAudio("Suoni/LaMadeline.mp3");
			    setTimeout(arguments.callee, 301200);
			})();			

      });		        
};/*INIT STOP*/  
      
      
      
      
      
      
      
      
      
      
      
      
      
         $("#prelo").css({'display':'none'});

         /*Ombra Nuvola*/sym.$(".Nuvola").css({'-webkit-filter': 'drop-shadow(0 5px 15px rgba(0,0,0,.4))'});
      
	      $(".fioreani, .FioreFragole").bind(toccomagico, function(){
	      	sym.getSymbol(this).play("in");
	      });
      

      
      
      $(".libellulaTrigger").bind(toccomagico, function(){
      	sym.getSymbol(".libellulalat").play("in");
      });
      
      $(".fragola2trigger, .fragola3trigger, .fragola4trigger").hide();
      
      
      
      sym.getSymbol(".codaani").play("in");
      $(".codatrigger").bind(toccomagico, function(){
      	sym.getSymbol(".codaani").play("animaziocoda");
      });
      
      sym.getSymbol("FUMELLO").play("in");
      
      
      
      /*MENU START*/
      	avanti = "Quadro5.html";
      	indietro = "Quadro3.html";
      	$(".next, .prev, .home, .musica").bind(toccomagico, function(){
      		sym.getSymbol(this).play("in");
      	});

      	$(".testina").bind(toccomagico, function(){
      			sym.getSymbol(".menu").play();
      	});
      	sym.$(".uno, .due, .tre, .quattro, .cinque").css({'-webkit-filter': 'saturate(0%)', 'opacity':'0.4'});
      	sym.$(".next, .prev").css({'-webkit-filter': 'drop-shadow(0 5px 10px rgba(0,0,0,.5))'});
      /*MENU STOP*/

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
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 37500, function(sym, e) {
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
   
   //Edge symbol: 'Cespuglio-Giuncoso'
   (function(symbolName) {   
   
   })("Cespuglio-Giuncoso");
   //Edge symbol end:'Cespuglio-Giuncoso'

   //=========================================================
   
   //Edge symbol: 'Scoiattolo'
   (function(symbolName) {   
   
   })("Scoiattolo");
   //Edge symbol end:'Scoiattolo'

   //=========================================================
   
   //Edge symbol: 'Fiore-Fragole'
   (function(symbolName) {   
   
   })("Fiore-Fragole");
   //Edge symbol end:'Fiore-Fragole'

   //=========================================================
   
   //Edge symbol: 'FragoleStatiche'
   (function(symbolName) {   
   
   })("FragoleStatiche");
   //Edge symbol end:'FragoleStatiche'

   //=========================================================
   
   //Edge symbol: 'Fragola-1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 433, function(sym, e) {
         sym.getSymbol(".scoiattolo").play("in");
         //Se il fumello è giù, tiralo su!
         var position = sym.$(".fumello").position();
          if (position.top >= 100){
         	sym.getComposition().getStage().getSymbol("FUMELLO").play(1000);
         }

      });
      //Edge binding end

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2336, function(sym, e) {
         sym.getSymbol(".menu").play("in");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3448, function(sym, e) {
         sym.stop();
         sym.getSymbol(".menu").play(197);

      });
      //Edge binding end

   })("Fragola-1");
   //Edge symbol end:'Fragola-1'

   //=========================================================
   
   //Edge symbol: 'FragStat'
   (function(symbolName) {   
   
   })("FragStat");
   //Edge symbol end:'FragStat'

   //=========================================================
   
   //Edge symbol: 'Ricci'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 25500, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("Ricci");
   //Edge symbol end:'Ricci'

   //=========================================================
   
   //Edge symbol: 'LibellulaAuto'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("LibellulaAuto");
   //Edge symbol end:'LibellulaAuto'

   //=========================================================
   
   //Edge symbol: 'Fragola-1_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 428, function(sym, e) {
         sym.getSymbol(".scoiattolo").play("in");
         //Se il fumello è giù, tiralo su!
         var position = sym.$(".fumello").position();
          if (position.top >= 100){
         	sym.getComposition().getStage().getSymbol("FUMELLO").play(1000);
         }

      });
         //Edge binding end

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3451, function(sym, e) {
         sym.stop();
         sym.getSymbol(".menu").play(197);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2426, function(sym, e) {
         sym.getSymbol(".menu").play("in");

      });
      //Edge binding end

      })("Fragola-2");
   //Edge symbol end:'Fragola-2'

   //=========================================================
   
   //Edge symbol: 'Fragola-2_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 428, function(sym, e) {
         sym.getSymbol(".scoiattolo").play("in");
         //Se il fumello è giù, tiralo su!
         var position = sym.$(".fumello").position();
          if (position.top >= 100){
         	sym.getComposition().getStage().getSymbol("FUMELLO").play(1000);
         }

      });
         //Edge binding end

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2437, function(sym, e) {
         sym.getSymbol(".menu").play("in");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3651, function(sym, e) {
         sym.stop();
         sym.getSymbol(".menu").play(197);

      });
      //Edge binding end

      })("Fragola-3");
   //Edge symbol end:'Fragola-3'

   //=========================================================
   
   //Edge symbol: 'Fragola-3_1'
   (function(symbolName) {   
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 428, function(sym, e) {
         sym.getSymbol(".scoiattolo").play("in");
         //Se il fumello è giù, tiralo su!
         var position = sym.$(".fumello").position();
          if (position.top >= 100){
         	sym.getComposition().getStage().getSymbol("FUMELLO").play(1000);
         }
      
      });
         //Edge binding end
      
      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3449, function(sym, e) {
         sym.stop();
         sym.getSymbol(".menu").play(197);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2385, function(sym, e) {
         sym.getSymbol(".menu").play("in");

      });
      //Edge binding end

      })("Fragola-4");
   //Edge symbol end:'Fragola-4'

   //=========================================================
   
   //Edge symbol: 'libellulalat'
   (function(symbolName) {   
   
   })("libellulalat");
   //Edge symbol end:'libellulalat'

   //=========================================================
   
   //Edge symbol: 'Down-level'
   (function(symbolName) {   
   
   })("Down-level");
   //Edge symbol end:'Down-level'

   //=========================================================
   
   //Edge symbol: 'PREV'
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
   
   //Edge symbol: 'Menu'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         //sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14, function(sym, e) {
         sym.getSymbol(".testina").play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 196, function(sym, e) {
         sym.stop();
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 223, function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 236, function(sym, e) {
         sym.getSymbol(".testina").play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 384, function(sym, e) {
         sym.stop(0);

      });
      //Edge binding end

   })("Menu");
   //Edge symbol end:'Menu'

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
   
   //Edge symbol: 'MENUz'
   (function(symbolName) {   
   
   })("MENUz");
   //Edge symbol end:'MENUz'

   //=========================================================
   
   //Edge symbol: 'play'
   (function(symbolName) {   
   
   })("play");
   //Edge symbol end:'play'

})(jQuery, AdobeEdge, "Quadro04");