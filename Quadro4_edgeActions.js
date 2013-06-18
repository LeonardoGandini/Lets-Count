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
           			"libs/playBG-min.js"
           			],
           complete: function() {}
      });
      
         /*AUDIO*/
         AudioFoglie = new Audio('Suoni/foglia.mp3');
         AudioApi = new Audio('Suoni/Bees.mp3');
         AudioTada1 = new Audio('Suoni/Tada1.mp3');
         AudioTada2 = new Audio('Suoni/Tada2.mp3');  
         AudioRicci = new Audio('Suoni/Lumaca01.mp3');
         /*Ombra Nuvola*/sym.$(".Nuvola").css({'-webkit-filter': 'drop-shadow(0 5px 15px rgba(0,0,0,.4))'});
      
      $(".fioreani, .FioreFragole").bind('touchstart MSPointerDown', function(){
      	sym.getSymbol(this).play("in");
      });
      
      $(".FragStat").bind('touchstart MSPointerDown', function(){
      	sym.getSymbol(this).play("in");
      	AudioFoglie.load();
      	AudioFoglie.play();	
      });
      
      
      
      $(".libellulaTrigger").bind('touchstart MSPointerDown', function(){
      	sym.getSymbol(".libellulalat").play("in");
      });
      
      $(".fragola2trigger, .fragola3trigger, .fragola4trigger").hide();
      
      $(".fragola1").bind('touchstart MSPointerDown', function(){
      	sym.getSymbol(this).play("in");
      	$(".fragola2trigger").show();
      });
      
      $(".fragola2trigger").bind('touchstart MSPointerDown', function(){
      	sym.getSymbol(".fragola2").play("in");
      	$(".fragola3trigger").show();
      });
      $(".fragola3trigger").bind('touchstart MSPointerDown', function(){
      	sym.getSymbol(".fragola3").play("in");
      	$(".fragola4trigger").show();
      });
      $(".fragola4trigger").bind('touchstart MSPointerDown', function(){
      	sym.getSymbol(".fragola4").play("in");
      });
      
      
      
      $(".codatrigger").bind('touchstart MSPointerDown', function(){
      	sym.getSymbol(".codaani").play("in");
      });
      
      sym.getSymbol("FUMELLO").play("in");
      
      
      $(".riccio").bind('touchstart MSPointerDown', function(){
      	AudioRicci.load();
      	AudioRicci.play();
      	$(this).animate({top:'-=20px'},"200");
      	$(this).animate({top:'+=20px'},"1");
      });
      
      /*MENU START*/
      	avanti = "Quadro5.html";
      	indietro = "Quadro3.html";
      	$(".musica, .next, .prev, .home").bind('touchstart', function(){
      		sym.getSymbol(this).play("in");
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

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle}", "touchstart", function(sym, e) {
         sym.play(1000);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Fumello}", "touchstart", function(sym, e) {
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

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 857, function(sym, e) {
            AudioTada1.load();
            AudioTada1.play();
            sym.$(".uno").css({'-webkit-filter': 'saturate(100%)', 'opacity':'1'});

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
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 60000, function(sym, e) {
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

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         sym.$(".due").css({'-webkit-filter': 'saturate(100%)', 'opacity':'1'});	

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 902, function(sym, e) {
            AudioTada1.load();
            AudioTada1.play();

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

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         sym.$(".tre").css({'-webkit-filter': 'saturate(100%)', 'opacity':'1'});	

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 878, function(sym, e) {
            AudioTada1.load();
            AudioTada1.play();

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
      
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 848, function(sym, e) {
            AudioTada2.load();
            AudioTada2.play();
            sym.$(".quattro").css({'-webkit-filter': 'saturate(100%)', 'opacity':'1'});	

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

})(jQuery, AdobeEdge, "Quadro04");