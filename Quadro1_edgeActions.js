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
      yepnope({
           load: ["libs/jplayer.min.js",
           			"libs/playBG-min.js",
           			"libs/jquery-ui-1.10.3.custom.min.js",
           			"libs/jquery.ui.touch-punch.min.js"
           			],complete: init});
      
      function init(){
           	//$(".uccellino").draggable();
           // sym.$('RRect').draggable();
      };
      
      
      /*AUDIO*/
      	AudioQ1 = new Audio('Suoni/quadri/Q1.mp3');
         AudioBird = new Audio('Suoni/cip01.mp3');
         AudioFoglie = new Audio('Suoni/foglia.mp3');
         AudioLumaca = new Audio('Suoni/Lumaca01.mp3');
         AudioTada1 = new Audio('Suoni/numbers/one.mp3');
      
      
      	AudioQ1.load();
      	AudioQ1.play();
      
      
         /*Ombra Nuvola*/sym.$(".Nuvola").css({'-webkit-filter': 'drop-shadow(0 5px 15px rgba(0,0,0,.4))'});
      
         $(".fioreani, .home").bind('touchstart MSPointerDown', function(){
      		sym.getSymbol(this).play("in");
      	});
      
         $(".foglina").bind('touchstart MSPointerDown', function(){
         	sym.getSymbol(this).play("in");
         	AudioFoglie.load();
         	AudioFoglie.play();
         });
      
      	$(".uccellino").bind('touchstart MSPointerDown', function(){
      		sym.getSymbol(this).play("in");
      		AudioBird.load();
      		AudioBird.play();
      	});
      
      	sym.getSymbol(".coda").play("animaziocoda");
         $(".triggercoda").bind('touchstart MSPointerDown', function(){
         	sym.getSymbol(".coda").play("animaziocoda");
         });
      
        //sym.$(".uccellino, .carota").css({'-webkit-filter': 'drop-shadow(0 2px 3px rgba(0,0,0,.35))'});
         sym.getSymbol(".lumacacontainer").play("in");
      
         $(".lumacacontainer").bind('touchstart MSPointerDown', function(){
         	AudioLumaca.load();
         	AudioLumaca.play();
             var div=$(".lumacacontainer");
             div.animate({top:'-=25px'},"500");
             div.animate({top:'+=25px'},"1");
         });
         /*Tira giù il fumello*/sym.getSymbol("FUMELLO").play();
      
      	$(".musica, .next, .prev, .carota").bind('touchstart MSPointerDown', function(){
      		sym.getSymbol(this).play("in");
      	});
      
      /*MENU START*/
      	avanti = "Quadro2.html";
      	$(".testina").bind('touchstart MSPointerDown', function(){
      			sym.getSymbol(".menu").play();
      	});
         sym.$(".prev").css({'display': 'none'});
      	sym.$(".uno, .due, .tre, .quattro, .cinque").css({'-webkit-filter': 'saturate(0%)', 'opacity':'0.4'});
      	sym.$(".next, .prev").css({'-webkit-filter': 'drop-shadow(0 5px 10px rgba(0,0,0,.5))'});
      /*MENU STOP*/

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

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2052, function(sym, e) {
         /*sym.getComposition().getStage().getSymbol("MENUz").$("Numero_1").hide();
         sym.getComposition().getStage().getSymbol("MENUz").$("Numero_1_col").css({
         	'display': 'block'
         });*/
         sym.$(".uno").css({'-webkit-filter': 'saturate(100%)', 'opacity':'1'});
         AudioTada1.load();
         AudioTada1.play();

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
   
   //Edge symbol: 'NEXT'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 140, function(sym, e) {
         window.open(avanti, "_self");

      });
      //Edge binding end

   })("NEXT");
   //Edge symbol end:'NEXT'

   //=========================================================
   
   //Edge symbol: 'Lumachina'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 62500, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("Lumachina");
   //Edge symbol end:'Lumachina'

   //=========================================================
   
   //Edge symbol: 'FarfallaContainer'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 60000, function(sym, e) {
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
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15000, function(sym, e) {
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
   
   //Edge symbol: 'musica'
   (function(symbolName) {   
   
   })("musica");
   //Edge symbol end:'musica'

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
   
   //Edge symbol: 'testina'
   (function(symbolName) {   
   
   })("testina");
   //Edge symbol end:'testina'

   //=========================================================
   
   //Edge symbol: 'NEXT_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 140, function(sym, e) {
         window.open(indietro, "_self");

      });
         //Edge binding end

      })("PREV");
   //Edge symbol end:'PREV'

})(jQuery, AdobeEdge, "Quadro01");