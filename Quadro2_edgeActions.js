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
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 196, function(sym, e) {
         sym.stop();
      });
      //Edge binding end
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 339, function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop(0);
      });
      //Edge binding end
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();
      });
      //Edge binding end
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         /*AUDIO*/
         AudioFoglie = new Audio('Suoni/foglia.mp3');
         AudioApi = new Audio('Suoni/Bees.mp3');
         AudioTada1 = new Audio('Suoni/Tada1.mp3');
         AudioTada2 = new Audio('Suoni/Tada2.mp3');  
         AudioAnt = new Audio('Suoni/squek.mp3');
         /*Ombra Nuvola*/sym.$(".Nuvola").css({'-webkit-filter': 'drop-shadow(0 5px 15px rgba(0,0,0,.4))'});
      	sym.$(".fumo").css({'-webkit-filter': 'blur(1px)'});
         sym.$(".uno, .due, .tre, .quattro, .cinque").css({'-webkit-filter': 'saturate(0%)', 'opacity':'0.4'});
      
         sym.$(".prev, .next").css({'-webkit-filter': 'drop-shadow(0 5px 10px rgba(0,0,0,.5))'});
      
      $(".fioreani, .innaffia").bind('touchstart', function(){
      	sym.getSymbol(this).play("in");
      });
      
      $(".cavolini").bind('touchstart', function(){
      	sym.getSymbol(this).play("in");
      	AudioFoglie.load();
      	AudioFoglie.play();	
      });
      
      $(".cavolo2trigger").hide();
      $(".CAVOLO_BIG_1").bind('touchstart', function(){
      	sym.getSymbol(this).play("in");
      	$(".cavolo2trigger").show();
      });
      $(".cavolo2trigger").bind('touchstart', function(){
      	sym.getSymbol(".CAVOLO_BIG_2").play("in");
      });
      $(".codatrigger").bind('touchstart', function(){
      	sym.getSymbol(".coda").play("in");
      });
      $(".Sole_Button").bind('touchstart', function(){
      	sym.getSymbol(".SOLE").play("in");
      });
      $(".apibutton").bind('touchstart', function(){
      	sym.getSymbol(".api").play("in");
      	AudioApi.load();
      	AudioApi.play();
      });
      sym.getSymbol("FUMELLO").play("in");
      
      /*$(".formica").bind('touchstart click', function(){
      sym.getSymbol(this).play("in");
             var div=$(".formica");
             div.animate({top:'-=25px'},"500");
             div.animate({top:'+=25px'},"1");
         });*/
      $(".formica").bind('touchstart', function(){
      	AudioAnt.load();
      	AudioAnt.play();	
      	$(this).animate({top:'-=20px'},"140");
      	$(this).animate({top:'+=20px'},"1");
      });

      });//Edge binding end
      

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   
   //Edge symbol: 'CAROTA'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1205, function(sym, e) {
         sym.getSymbol(".testa").play("in");
         sym.getSymbol(".braccio").play("in");
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
         sym.$(".uno").css({'-webkit-filter': 'saturate(100%)', 'opacity':'1'});

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3910, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1583, function(sym, e) {
         AudioTada1.load();
         AudioTada1.play();

      });
      //Edge binding end

   })("Cavolo");
   //Edge symbol end:'Cavolo'

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
   
   //Edge symbol: 'HOME_butt'
   (function(symbolName) {   
   
   })("HOME_butt");
   //Edge symbol end:'HOME_butt'

   //=========================================================
   
   //Edge symbol: 'MENUz'
   (function(symbolName) {   
      
      
      
      
      
      Symbol.bindElementAction(compId, symbolName, "${_HOME_butt}", "touchstart", function(sym, e) {
         sym.getComposition().getStage().getSymbol("MENUz").getSymbol("HOME_butt").play("in");
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("index.html", "_self");

      });
      //Edge binding end
      
      
      
      
      
      

      Symbol.bindElementAction(compId, symbolName, "${_NEXT}", "touchstart", function(sym, e) {
         sym.getComposition().getStage().getSymbol("MENUz").getSymbol("NEXT").play("in");
         window.open("Quadro3.html", "_self");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_PREV}", "touchstart", function(sym, e) {
         sym.getComposition().getStage().getSymbol("MENUz").getSymbol("PREV").play("in");
         window.open("./Quadro1.html", "_self");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Testina}", "touchstart", function(sym, e) {
         sym.play();
         sym.getComposition().getStage().play();

      });
      //Edge binding end

   })("MENUz");
   //Edge symbol end:'MENUz'

   //=========================================================
   
   //Edge symbol: 'PREV'
   (function(symbolName) {   
   
   })("PREV");
   //Edge symbol end:'PREV'

   //=========================================================
   
   //Edge symbol: 'NEXT'
   (function(symbolName) {   
   
   })("NEXT");
   //Edge symbol end:'NEXT'

   //=========================================================
   
   //Edge symbol: 'Coda'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 633, function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop(0);

      });
      //Edge binding end

   })("Coda");
   //Edge symbol end:'Coda'

   //=========================================================
   
   //Edge symbol: 'SCOIATTOLO'
   (function(symbolName) {   
   
   })("SCOIATTOLO");
   //Edge symbol end:'SCOIATTOLO'

   //=========================================================
   
   //Edge symbol: 'SOLE'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2288, function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop(0);

      });
      //Edge binding end

   })("SOLE");
   //Edge symbol end:'SOLE'

   //=========================================================
   
   //Edge symbol: 'Trattore'
   (function(symbolName) {   
   
   })("Trattore");
   //Edge symbol end:'Trattore'

   //=========================================================
   
   //Edge symbol: 'Fumo'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("Fumo");
   //Edge symbol end:'Fumo'

   //=========================================================
   
   //Edge symbol: 'Giallo'
   (function(symbolName) {   
   
   })("Giallo");
   //Edge symbol end:'Giallo'

   //=========================================================
   
   //Edge symbol: 'Viola'
   (function(symbolName) {   
   
   })("Viola");
   //Edge symbol end:'Viola'

   //=========================================================
   
   //Edge symbol: 'contenitoretesta'
   (function(symbolName) {   
   
   })("contenitoretesta");
   //Edge symbol end:'contenitoretesta'

   //=========================================================
   
   //Edge symbol: 'Cavolo_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1205, function(sym, e) {
         sym.getSymbol(".testa").play("in");
         sym.getSymbol(".braccio").play("in");
         //Se il fumello è giù, tiralo su!
         var position = sym.$(".fumello").position();
          if (position.top >= 100){
         	sym.getComposition().getStage().getSymbol("FUMELLO").play(1000);
         }

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1324, function(sym, e) {
         AudioTada2.load();
         AudioTada2.play();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2052, function(sym, e) {
         sym.$(".due").css({'-webkit-filter': 'saturate(100%)', 'opacity':'1'});

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3910, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      })("Cavolo_2");
   //Edge symbol end:'Cavolo_2'

   //=========================================================
   
   //Edge symbol: 'Cavolino'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("Cavolino");
   //Edge symbol end:'Cavolino'

   //=========================================================
   
   //Edge symbol: 'Api'
   (function(symbolName) {   
   
   })("Api");
   //Edge symbol end:'Api'

   //=========================================================
   
   //Edge symbol: 'Braccio'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("Braccio");
   //Edge symbol end:'Braccio'

   //=========================================================
   
   //Edge symbol: 'Innaffiatoio'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("Innaffiatoio");
   //Edge symbol end:'Innaffiatoio'

   //=========================================================
   
   //Edge symbol: 'APONA'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("APONA");
   //Edge symbol end:'APONA'

   //=========================================================
   
   //Edge symbol: 'ContenitoreCoda'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("ContenitoreCoda");
   //Edge symbol end:'ContenitoreCoda'

   //=========================================================
   
   //Edge symbol: 'Formiche'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 72000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("Formiche");
   //Edge symbol end:'Formiche'

})(jQuery, AdobeEdge, "Quadro02");