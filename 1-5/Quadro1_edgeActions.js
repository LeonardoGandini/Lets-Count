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
       var AudioQ1 = null;
       var AudioBird = null;
       var AudioFoglie = null;
       var AudioLumaca = null;
       var AudioUno = null;


///***BK***///
////if (device.platform == 'Android') {src = '/android_asset/www/' + src;}

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

/* Testo Q1 Start*/	        
        function playAudioQ1(src) {
        if((navigator.userAgent.match(/android/gi))){src = '/android_asset/www/' + src;} 
        	AudioQ1 = new Media(src);
        	AudioQ1.play();
        }
/* Testo Q1 Stop*/	        

        function onDeviceReady() {

        	setTimeout(function(){
        			playAudioQ1("Suoni/quadri/Q1.mp3");
        		},2000);      

        	(function(){
			    playAudio("Suoni/LaMadeline.mp3");
			    setTimeout(arguments.callee, 301200);
			})();			

        }

$(".reload").css({'display':'none'});

       function playAudioBird (src) {
        if((navigator.userAgent.match(/android/gi))){src = '/android_asset/www/' + src;} 
            AudioBird = new Media(src);
            AudioBird.play();   
        }
       function playAudioFoglie (src) {
        if((navigator.userAgent.match(/android/gi))){src = '/android_asset/www/' + src;} 
            AudioFoglie = new Media(src);
            AudioFoglie.play();   
        }
       function playAudioLumaca (src) {
        if((navigator.userAgent.match(/android/gi))){src = '/android_asset/www/' + src;} 
            AudioLumaca = new Media(src);
            AudioLumaca.play();   
        }
       function playAudioUno (src) {
        if((navigator.userAgent.match(/android/gi))){src = '/android_asset/www/' + src;} 
            AudioUno = new Media(src);
            AudioUno.play();   
        }
       function playAudioQ1 (src) {
        if((navigator.userAgent.match(/android/gi))){src = '/android_asset/www/' + src;} 
            AudioQ1 = new Media(src);
            AudioQ1.play();   
        }

         $(".playvoce").bind(toccomagico, function(){
      		sym.getSymbol(this).play("in");
		 	playAudioQ1('Suoni/quadri/Q1.mp3');
      	});

         $(".foglina").bind(toccomagico, function(){
         	sym.getSymbol(this).play("in");
		 	playAudioFoglie('Suoni/foglia.mp3');
         });

      	$(".uccellino").bind(toccomagico, function(){
      		sym.getSymbol(this).play("in");
		 	playAudioBird('Suoni/cip01.mp3');
      	});      
         $(".lumacacontainer").bind(toccomagico, function(){
		 	playAudioLumaca('Suoni/Lumaca01.mp3');
             var div=$(".lumacacontainer");
             div.animate({top:'-=25px'},"500");
             div.animate({top:'+=25px'},"1");
         });      


         $(".carota").bind(toccomagico, function(){
			sym.getSymbol(this).play("in");
        	setTimeout(function(){
        			playAudioUno('Suoni/numbers/one.mp3');
					sym.$(".uno").css({'-webkit-filter': 'saturate(100%)', 'opacity':'1'});
					$(".reload").fadeIn();
			},1801);      
	     });


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

  $(".reload").bind(toccomagico, function(){
		sym.getSymbol(this).play("in");

			sym.getSymbol("CAROTA").stop(0);
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


      	$("#prelo").css({'display':'none'});     

         /*Ombra Nuvola*/sym.$(".Nuvola").css({'-webkit-filter': 'drop-shadow(0 5px 15px rgba(0,0,0,.4))'});



		$(".fioreani, .home").bind(toccomagico, function(){
			sym.getSymbol(this).play("in");
		});

		sym.getSymbol(".coda").play("animaziocoda");
		$(".triggercoda").bind(toccomagico, function(){
			sym.getSymbol(".coda").play("animaziocoda");
		});

		sym.getSymbol(".lumacacontainer").play("in");


		/*Tira giù il fumello*/sym.getSymbol("FUMELLO").play();

		$(".next, .prev, .home, .musica").bind(toccomagico, function(){
			sym.getSymbol(this).play("in");
		});

/**********MENU START**********/
		avanti = "Quadro2.html";
		//indietro = "Quadro6.html";
		$(".next, .prev, .musica, .home").bind(toccomagico, function(){
			sym.getSymbol(this).play("in");
		});
		$(".testina").bind(toccomagico, function(){
				sym.getSymbol(".menu").play();
		});
		sym.$(".next, .prev").css({'-webkit-filter': 'drop-shadow(0 5px 10px rgba(0,0,0,.5))'});
/**********MENU STOP**********/

 
	 
	 
	 
};/*INIT STOP*/      





      });
      //Edge binding end
      
      
      
      
      
      

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Fogliolina'
   (function(symbolName) {   
   
   })("Fogliolina");
   //Edge symbol end:'Fogliolina'

   //=========================================================
   
   //Edge symbol: 'BIRD'
   (function(symbolName) {   
   
   })("BIRD");
   //Edge symbol end:'BIRD'

   //=========================================================
   
   //Edge symbol: 'CAROTA'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1205, function(sym, e) {
         sym.getComposition().getStage().getSymbol("TESTA").play("in");
         
         //Se il fumello è giù, tiralo su!
         var position = sym.$(".fumello").position();
          if (position.top >= 100){
         	sym.getComposition().getStage().getSymbol("FUMELLO").play(1000);
         }
         

      });
      //Edge binding end

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4575, function(sym, e) {
         sym.stop();
         sym.getSymbol(".menu").play(197);

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3166, function(sym, e) {
         sym.getSymbol(".menu").play("in");

      });
      //Edge binding end

   })("CAROTA");
   //Edge symbol end:'CAROTA'

   //=========================================================
   
   //Edge symbol: 'TESTA'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3959, function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop(0);

      });
      //Edge binding end

   })("TESTA");
   //Edge symbol end:'TESTA'

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
   
   //Edge symbol: 'Lumachina'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 70000, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("Lumachina");
   //Edge symbol end:'Lumachina'

   //=========================================================
   
   //Edge symbol: 'FarfallaContainer'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 32446, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("FarfallaContainer");
   //Edge symbol end:'FarfallaContainer'

   //=========================================================
   
   //Edge symbol: 'FioreAni'
   (function(symbolName) {   
   
      

   })("FioreAni");
   //Edge symbol end:'FioreAni'

   //=========================================================
   
   //Edge symbol: 'Coda'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 22000, function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("Coda");
   //Edge symbol end:'Coda'

   //=========================================================
   
   //Edge symbol: 'Down-level'
   (function(symbolName) {   
   
   })("Down-level");
   //Edge symbol end:'Down-level'

   //=========================================================
   
   //Edge symbol: 'musica_1'
   (function(symbolName) {   
   
      })("play");
   //Edge symbol end:'play'

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
   
   //Edge symbol: 'musica'
   (function(symbolName) {   
   
   })("musica");
   //Edge symbol end:'musica'

   //=========================================================
   
   //Edge symbol: 'reload'
   (function(symbolName) {   
   
   })("reload");
   //Edge symbol end:'reload'

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
   
   //Edge symbol: 'HOME_butt'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 406, function(sym, e) {
         window.open("index.html", "_self");

      });
      //Edge binding end

   })("HOME_butt");
   //Edge symbol end:'HOME_butt'

})(jQuery, AdobeEdge, "Quadro01");