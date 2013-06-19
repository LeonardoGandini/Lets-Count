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
         /*AUDIO*/
        /* AudioTappetino = new Audio('Suoni/LaMadeline.mp3');
         AudioTappetino.load();
         AudioTappetino.play();	
         AudioTappetino.volume = 0.1;
         */
        
      yepnope({
           load: ["libs/jplayer.min.js",
           			"libs/playBG-min.js"
           			],
           complete: function() {}
      });
      
         AudioFoglie = new Audio('Suoni/foglia.mp3');
         AudioBird = new Audio('Suoni/cip01.mp3');
         AudioUno = new Audio('Suoni/numbers/one.mp3');
         AudioDue = new Audio('Suoni/numbers/two.mp3');  
         AudioTre = new Audio('Suoni/numbers/three.mp3');  
         AudioQuattro = new Audio('Suoni/numbers/four.mp3');  
         AudioCinque = new Audio('Suoni/numbers/five.mp3');  
         AudioVerme = new Audio('Suoni/Lumaca01.mp3');
      
      	/*AudioQ5.load();
      	AudioQ5.play();*/
      	
         $(".playvoce").bind('touchstart MSPointerDown', function(){
      		sym.getSymbol(this).play("in");
      		/*AudioQ5.load();
      		AudioQ5.play();*/
      	});
         sym.getSymbol("FUMELLO").play("in");
      
         /*Ombra Nuvola*/sym.$(".Nuvola").css({'-webkit-filter': 'drop-shadow(0 5px 15px rgba(0,0,0,.4))'});
      
      $(".fioreani").bind('touchstart MSPointerDown', function(){
      	sym.getSymbol(this).play("in");
      });
      
      $(".MelaStat").bind('touchstart MSPointerDown', function(){
      	sym.getSymbol(this).play("in");
      	AudioFoglie.load();
      	AudioFoglie.play();	
      });
      
      
      $(".Mela2Trigger, .Mela3Trigger, .Mela4Trigger, .Mela5Trigger").hide();
      
      $(".MelaBella1").bind('touchstart MSPointerDown', function(){
      	sym.getSymbol(this).play("in");
      	$(".Mela2Trigger").show();
      });
      $(".Mela2Trigger").bind('touchstart MSPointerDown', function(){
      	sym.getSymbol(".MelaBella2").play("in");
      	$(".Mela3Trigger").show();
      });
      $(".Mela3Trigger").bind('touchstart MSPointerDown', function(){
      	sym.getSymbol(".MelaBella3").play("in");
      	$(".Mela4Trigger").show();
      });
      $(".Mela4Trigger").bind('touchstart MSPointerDown', function(){
      	sym.getSymbol(".MelaBella4").play("in");
      	$(".Mela5Trigger").show();
      });
      $(".Mela5Trigger").bind('touchstart MSPointerDown', function(){
      	sym.getSymbol(".MelaBella5").play("in");
      });
      
      
      $(".BirdPala, .BirdTerra").bind('touchstart MSPointerDown', function(){
      	sym.getSymbol(this).play("in");
      	AudioBird.load();
      	AudioBird.play();
      });
      
      $(".triggerverme").bind('touchstart MSPointerDown', function(){
      	AudioVerme.load();
      	AudioVerme.play();	
      	sym.getSymbol(".verme").play("in");
      });
      $(".Trigger-Mela-Easter").bind('touchstart MSPointerDown', function(){
      	sym.getSymbol(".melaeaster").play("in");
      });
      $(".codatrigger").bind('touchstart MSPointerDown', function(){
      	sym.getSymbol(".codaani").play("in");
      });
      
      /*MENU START*/
      	avanti = "QuadroFinale.html";
      	indietro = "Quadro4.html";
      	$(".next, .prev, .home").bind('touchstart MSPointerDown', function(){
      		sym.getSymbol(this).play("in");
      	});
      	$('.musica').toggle(function () {
      		 $(".musica").css({
      			'-webkit-filter': 'saturate(0%)',
      			'opacity':'0.6'
      			});
      	}, function () {
      		 $(".musica").css({
      			'-webkit-filter': 'saturate(100%)',
      			'opacity':'1'
      			});
      	});
      	$(".testina").bind('touchstart MSPointerDown', function(){
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
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 571, function(sym, e) {
         sym.getSymbol(".scoiattolo").play("in");
         //Se il fumello è giù, tiralo su!
         var position = sym.$(".fumello").position();
          if (position.top >= 100){
         	sym.getComposition().getStage().getSymbol("FUMELLO").play(1000);
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 933, function(sym, e) {
         AudioUno.load();
         AudioUno.play();
         sym.$(".uno").css({'-webkit-filter': 'saturate(100%)', 'opacity':'1'});

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2104, function(sym, e) {
         sym.getSymbol(".menu").play("in");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();
         sym.getSymbol(".menu").play(197);

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
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.getSymbol(".scoiattolo").play("in");
         //Se il fumello è giù, tiralo su!
         var position = sym.$(".fumello").position();
          if (position.top >= 100){
         	sym.getComposition().getStage().getSymbol("FUMELLO").play(1000);
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 862, function(sym, e) {
         AudioDue.load();
         AudioDue.play();
         sym.$(".due").css({'-webkit-filter': 'saturate(100%)', 'opacity':'1'});

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2099, function(sym, e) {
         sym.getSymbol(".menu").play("in");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();
         sym.getSymbol(".menu").play(197);

      });
      //Edge binding end

   })("Mela-Bella-2");
   //Edge symbol end:'Mela-Bella-2'

   //=========================================================
   
   //Edge symbol: 'Mela-Bella-3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.getSymbol(".scoiattolo").play("in");
         //Se il fumello è giù, tiralo su!
         var position = sym.$(".fumello").position();
          if (position.top >= 100){
         	sym.getComposition().getStage().getSymbol("FUMELLO").play(1000);
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 862, function(sym, e) {
         AudioTre.load();
         AudioTre.play();
         sym.$(".tre").css({'-webkit-filter': 'saturate(100%)', 'opacity':'1'});

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2098, function(sym, e) {
         sym.getSymbol(".menu").play("in");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();
         sym.getSymbol(".menu").play(197);

      });
      //Edge binding end

   })("Mela-Bella-3");
   //Edge symbol end:'Mela-Bella-3'

   //=========================================================
   
   //Edge symbol: 'Mela-Bella-4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.getSymbol(".scoiattolo").play("in");
         //Se il fumello è giù, tiralo su!
         var position = sym.$(".fumello").position();
          if (position.top >= 100){
         	sym.getComposition().getStage().getSymbol("FUMELLO").play(1000);
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 862, function(sym, e) {
         AudioQuattro.load();
         AudioQuattro.play();
         sym.$(".quattro").css({'-webkit-filter': 'saturate(100%)', 'opacity':'1'});

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2111, function(sym, e) {
         sym.getSymbol(".menu").play("in");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();
         sym.getSymbol(".menu").play(197);

      });
      //Edge binding end

   })("Mela-Bella-4");
   //Edge symbol end:'Mela-Bella-4'

   //=========================================================
   
   //Edge symbol: 'Mela-Bella-5'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 497, function(sym, e) {
         sym.getSymbol(".scoiattolo").play("in");
         //Se il fumello è giù, tiralo su!
         var position = sym.$(".fumello").position();
          if (position.top >= 100){
         	sym.getComposition().getStage().getSymbol("FUMELLO").play(1000);
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 859, function(sym, e) {
         AudioCinque.load();
         AudioCinque.play();
         sym.$(".cinque").css({'-webkit-filter': 'saturate(100%)', 'opacity':'1'});

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2104, function(sym, e) {
         sym.getSymbol(".menu").play("in");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();
         sym.getSymbol(".menu").play(197);

      });
      //Edge binding end

   })("Mela-Bella-5");
   //Edge symbol end:'Mela-Bella-5'

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
   
   //Edge symbol: 'MENUz'
   (function(symbolName) {   
   
   })("MENUz");
   //Edge symbol end:'MENUz'

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

})(jQuery, AdobeEdge, "Quadro05");