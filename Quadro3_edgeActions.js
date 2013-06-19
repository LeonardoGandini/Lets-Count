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
         AudioUno = new Audio('Suoni/numbers/one.mp3');
         AudioDue = new Audio('Suoni/numbers/two.mp3');  
         AudioTre = new Audio('Suoni/numbers/three.mp3');  
         AudioTalpa = new Audio('Suoni/Lumaca01.mp3');
         AudioTalpe = new Audio('Suoni/Talpe.mp3');
      
      	/*AudioQ3.load();
      	AudioQ3.play();*/
      	
         $(".playvoce").bind('touchstart MSPointerDown', function(){
      		sym.getSymbol(this).play("in");
      		/*AudioQ3.load();
      		AudioQ3.play();*/
      	});
      
         /*Ombra Nuvola*/sym.$(".Nuvola").css({'-webkit-filter': 'drop-shadow(0 5px 15px rgba(0,0,0,.4))'});
      
      $(".fioreani, .innaffia, .pomostatico").bind('touchstart MSPointerDown', function(){
      	sym.getSymbol(this).play("in");
      });
      
      $(".Talpona").bind('touchstart MSPointerDown', function(){
      	sym.getSymbol(this).play("in");
      	AudioTalpa.load();
      	AudioTalpa.play();	
      });
      $(".talpine").bind('touchstart MSPointerDown', function(){
      	sym.getSymbol(this).play("in");
      	AudioTalpe.load();
      	AudioTalpe.play();	
      });
      
      $(".pomostatico").bind('touchstart MSPointerDown', function(){
      	sym.getSymbol(this).play("in");
      	AudioFoglie.load();
      	AudioFoglie.play();	
      });
      
      $(".pomo2trigger, .pomo3trigger").hide();
      $(".PomodoroG-1").bind('touchstart MSPointerDown', function(){
      	sym.getSymbol(this).play("in");
      	$(".pomo2trigger").show();
      });
      $(".pomo2trigger").bind('touchstart MSPointerDown', function(){
      	sym.getSymbol(".PomodoroG-2").play("in");
      	$(".pomo3trigger").show();
      });
      $(".pomo3trigger").bind('touchstart MSPointerDown', function(){
      	sym.getSymbol(".PomodoroG-3").play("in");
      });
      
      
      
      
      $(".codatrigger").bind('touchstart MSPointerDown', function(){
      	sym.getSymbol(".codaani").play("in");
      	sym.getSymbol(".lbcoda").play("in");
      });
      
      sym.getSymbol("FUMELLO").play("in");
      
      $(".formica").bind('touchstart MSPointerDown', function(){
      	AudioAnt.load();
      	AudioAnt.play();	
      	$(this).animate({top:'-=20px'},"140");
      	$(this).animate({top:'+=20px'},"1");
      });
      
      /*MENU START*/
      	avanti = "Quadro4.html";
      	indietro = "Quadro2.html";
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
   
   //Edge symbol: 'ContenitoreCoda'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("ContenitoreCoda");
   //Edge symbol end:'ContenitoreCoda'

   //=========================================================
   
   //Edge symbol: 'Coda'
   (function(symbolName) {   
   
   })("Coda");
   //Edge symbol end:'Coda'

   //=========================================================
   
   //Edge symbol: 'Pomodori-Statici'
   (function(symbolName) {   
   
   })("Pomodori-Statici");
   //Edge symbol end:'Pomodori-Statici'

   //=========================================================
   
   //Edge symbol: 'PomoStatico'
   (function(symbolName) {   
   
   })("PomoStatico");
   //Edge symbol end:'PomoStatico'

   //=========================================================
   
   //Edge symbol: 'Talpona'
   (function(symbolName) {   
   
   })("Talpona");
   //Edge symbol end:'Talpona'

   //=========================================================
   
   //Edge symbol: 'CodaAni'
   (function(symbolName) {   
   
   })("CodaAni");
   //Edge symbol end:'CodaAni'

   //=========================================================
   
   //Edge symbol: 'Talpine'
   (function(symbolName) {   
   
   })("Talpine");
   //Edge symbol end:'Talpine'

   //=========================================================
   
   //Edge symbol: 'Ladybird-Coda'
   (function(symbolName) {   
   
   })("Ladybird-Coda");
   //Edge symbol end:'Ladybird-Coda'

   //=========================================================
   
   //Edge symbol: 'PomodoroG-1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1178, function(sym, e) {
         sym.$(".uno").css({'-webkit-filter': 'saturate(100%)', 'opacity':'1'});	

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 549, function(sym, e) {
         sym.getSymbol(".scoiattolo").play("in");
         //Se il fumello è giù, tiralo su!
         var position = sym.$(".fumello").position();
          if (position.top >= 100){
         	sym.getComposition().getStage().getSymbol("FUMELLO").play(1000);
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
            AudioUno.load();
            AudioUno.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3127, function(sym, e) {
         sym.getSymbol(".menu").play("in");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4685, function(sym, e) {
         sym.stop();
         sym.getSymbol(".menu").play(197);

      });
      //Edge binding end

   })("PomodoroG-1");
   //Edge symbol end:'PomodoroG-1'

   //=========================================================
   
   //Edge symbol: 'PomodoroG-2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 573, function(sym, e) {
         sym.getSymbol(".scoiattolo").play("in");
         //Se il fumello è giù, tiralo su!
         var position = sym.$(".fumello").position();
          if (position.top >= 100){
         	sym.getComposition().getStage().getSymbol("FUMELLO").play(1000);
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1202, function(sym, e) {
         sym.$(".due").css({'-webkit-filter': 'saturate(100%)', 'opacity':'1'});	

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
            AudioDue.load();
            AudioDue.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3143, function(sym, e) {
         sym.getSymbol(".menu").play("in");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4625, function(sym, e) {
         sym.stop();
         sym.getSymbol(".menu").play(197);

      });
      //Edge binding end

   })("PomodoroG-2");
   //Edge symbol end:'PomodoroG-2'

   //=========================================================
   
   //Edge symbol: 'PomodoroG-3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 471, function(sym, e) {
         sym.getSymbol(".scoiattolo").play("in");
         //Se il fumello è giù, tiralo su!
         var position = sym.$(".fumello").position();
          if (position.top >= 100){
         	sym.getComposition().getStage().getSymbol("FUMELLO").play(1000);
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1100, function(sym, e) {
         sym.$(".tre").css({'-webkit-filter': 'saturate(100%)', 'opacity':'1'});	

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 862, function(sym, e) {
            AudioTre.load();
            AudioTre.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4951, function(sym, e) {
         sym.stop();
         sym.getSymbol(".menu").play(197);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3391, function(sym, e) {
         sym.getSymbol(".menu").play("in");

      });
      //Edge binding end

   })("PomodoroG-3");
   //Edge symbol end:'PomodoroG-3'

   //=========================================================
   
   //Edge symbol: 'Scoiattolo'
   (function(symbolName) {   
   
   })("Scoiattolo");
   //Edge symbol end:'Scoiattolo'

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
   
   //Edge symbol: 'testina'
   (function(symbolName) {   
   
   })("testina");
   //Edge symbol end:'testina'

   //=========================================================
   
   //Edge symbol: 'LadybirdVolante'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 60000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("LadybirdVolante");
   //Edge symbol end:'LadybirdVolante'

   //=========================================================
   
   //Edge symbol: 'play'
   (function(symbolName) {   
   
   })("play");
   //Edge symbol end:'play'

})(jQuery, AdobeEdge, "Quadro03");