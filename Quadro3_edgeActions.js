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
         
         sym.$(".uno, .due, .tre, .quattro, .cinque").css({'-webkit-filter': 'saturate(0%)', 'opacity':'0.4'});
         
         sym.$(".prev, .next").css({'-webkit-filter': 'drop-shadow(0 5px 10px rgba(0,0,0,.5))'});
         
      $(".fioreani, .innaffia, .pomostatico, .Talpona, .talpine").bind('touchstart', function(){
      	sym.getSymbol(this).play("in");
      });
      
      $(".pomostatico").bind('touchstart', function(){
      	sym.getSymbol(this).play("in");
      	AudioFoglie.load();
      	AudioFoglie.play();	
      });
      
      $(".pomo2trigger, .pomo3trigger").hide();
      $(".PomodoroG-1").bind('touchstart click', function(){
      	sym.getSymbol(this).play("in");
      	$(".pomo2trigger").show();
      });
      $(".pomo2trigger").bind('touchstart click', function(){
      	sym.getSymbol(".PomodoroG-2").play("in");
      	$(".pomo3trigger").show();
      });
      $(".pomo3trigger").bind('touchstart click', function(){
      	sym.getSymbol(".PomodoroG-3").play("in");
      });
      
      
      
      
      $(".codatrigger").bind('touchstart', function(){
      	sym.getSymbol(".codaani").play("in");
      	sym.getSymbol(".lbcoda").play("in");
      });
      
      sym.getSymbol("FUMELLO").play("in");
      
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
         window.open("Quadro4.html", "_self");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_PREV}", "touchstart", function(sym, e) {
         sym.getComposition().getStage().getSymbol("MENUz").getSymbol("PREV").play("in");
         window.open("./Quadro2.html", "_self");

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
            AudioTada1.load();
            AudioTada1.play();

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
            AudioTada1.load();
            AudioTada1.play();

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
            AudioTada2.load();
            AudioTada2.play();

      });
      //Edge binding end

   })("PomodoroG-3");
   //Edge symbol end:'PomodoroG-3'

   //=========================================================
   
   //Edge symbol: 'Scoiattolo'
   (function(symbolName) {   
   
   })("Scoiattolo");
   //Edge symbol end:'Scoiattolo'

})(jQuery, AdobeEdge, "Quadro03");