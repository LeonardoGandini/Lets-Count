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
           			"libs/playBG-min.js"/*,
           			"libs/jquery-ui-1.10.3.custom.min.js",
           			"libs/jquery.ui.touch-punch.min.js"*/
           			],complete: init});
      
      function init(){
           	//$(".SOLE").draggable();
           // sym.$('RRect').draggable();
      };
         $("#prelo").hide();
      /*AUDIO*/
         AudioFoglie = new Audio('Suoni/foglia.mp3');
         AudioApi = new Audio('Suoni/Bees.mp3');
         AudioUno = new Audio('Suoni/numbers/one.mp3');
         AudioDue = new Audio('Suoni/numbers/two.mp3');  
         AudioAnt = new Audio('Suoni/Lumaca01.mp3');
      	AudioQ2 = new Audio('Suoni/quadri/Q2.mp3');
      
      	AudioQ2.load();
      	AudioQ2.play();
      
         $(".playvoce").bind('touchstart MSPointerDown', function(){
      		sym.getSymbol(this).play("in");
      		AudioQ2.load();
      		AudioQ2.play();
      	});
      
         /*Ombra Nuvola*/sym.$(".Nuvola").css({'-webkit-filter': 'drop-shadow(0 5px 15px rgba(0,0,0,.4))'});
      	//sym.$(".fumo").css({'-webkit-filter': 'blur(2px)'});
      
      $(".fioreani, .innaffia").bind('touchstart MSPointerDown', function(){
      	sym.getSymbol(this).play("in");
      });
      
      $(".cavolini").bind('touchstart MSPointerDown', function(){
      	sym.getSymbol(this).play("in");
      	AudioFoglie.load();
      	AudioFoglie.play();	
      });
      
      $(".cavolo2trigger").hide();
      $(".CAVOLO_BIG_1").bind('touchstart MSPointerDown', function(){
      	sym.getSymbol(this).play("in");
      	$(".cavolo2trigger").show();
      });
      $(".cavolo2trigger").bind('touchstart MSPointerDown', function(){
      	sym.getSymbol(".CAVOLO_BIG_2").play("in");
      });
      
      sym.getSymbol(".coda").play("in");
      $(".codatrigger").bind('touchstart MSPointerDown', function(){
      	sym.getSymbol(".coda").play("animaziocoda");
      });
      $(".Sole_Button").bind('touchstart MSPointerDown', function(){
      	sym.getSymbol(".SOLE").play("in");
      });
      $(".apibutton").bind('touchstart MSPointerDown', function(){
      	sym.getSymbol(".api").play("in");
      	AudioApi.load();
      	AudioApi.play();
      });
      sym.getSymbol("FUMELLO").play("in");
      
      $(".formica").bind('touchstart MSPointerDown', function(){
      	AudioAnt.load();
      	AudioAnt.play();	
      	$(this).animate({top:'-=20px'},"140");
      	$(this).animate({top:'+=20px'},"1");
      });
      
      
      
      
      /*MENU START*/
      	avanti = "Quadro3.html";
      	indietro = "Quadro1.html";
      	$(".next, .prev, .musica, .home").bind('touchstart MSPointerDown', function(){
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

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4675, function(sym, e) {
         sym.stop();
         sym.getSymbol(".menu").play(197);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1583, function(sym, e) {
         AudioUno.load();
         AudioUno.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3125, function(sym, e) {
         sym.getSymbol(".menu").play("in");

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
         AudioDue.load();
         AudioDue.play();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2052, function(sym, e) {
         sym.$(".due").css({'-webkit-filter': 'saturate(100%)', 'opacity':'1'});

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4919, function(sym, e) {
         sym.stop();
         sym.getSymbol(".menu").play(197);

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3289, function(sym, e) {
         sym.getSymbol(".menu").play("in");

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
   
      

   })("Innaffiatoio");
   //Edge symbol end:'Innaffiatoio'

   //=========================================================
   
   //Edge symbol: 'APONA'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 55000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("APONA");
   //Edge symbol end:'APONA'

   //=========================================================
   
   //Edge symbol: 'ContenitoreCoda'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 30000, function(sym, e) {
         sym.play(0);

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
   
   //Edge symbol: 'play'
   (function(symbolName) {   
   
   })("play");
   //Edge symbol end:'play'

})(jQuery, AdobeEdge, "Quadro02");