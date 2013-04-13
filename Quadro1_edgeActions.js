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
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         /*AUDIO*/
         AudioBird = new Audio('Suoni/cip01.mp3');
         AudioFoglie = new Audio('Suoni/foglia.mp3');
         AudioLumaca = new Audio('Suoni/Lumaca01.mp3');
         AudioNumero = new Audio('Suoni/TadaTest.mp3');
         /*Nasconde il numero 1*/sym.$(".Numero_1_col").css({'display': 'none'});
         /*Ombra Nuvola*/sym.$(".Nuvola").css({'-webkit-filter': 'drop-shadow(0 5px 15px rgba(0,0,0,.4))'});
      
         sym.$(".uno, .due, .tre, .quattro, .cinque").css({'-webkit-filter': 'saturate(0%)', 'opacity':'0.4'});
      
         sym.$(".prev, .next").css({'-webkit-filter': 'drop-shadow(0 5px 10px rgba(0,0,0,.5))'});
        /* $(".fioreani").click(function(){
         	sym.getSymbol(this).play("in");
         });*/
      $(".fioreani").bind('touchstart', function(){
      	sym.getSymbol(this).play("in");
      });
      
         $(".foglina").bind('touchstart', function(){
         	sym.getSymbol(this).play("in");
         	AudioFoglie.load();
         	AudioFoglie.play();
         });
      
         $(".codadummy").bind('touchstart', function(){
         	sym.getSymbol(".coda").play("in");
         });
      
         sym.$(".uccellino, .carota").css({'-webkit-filter': 'drop-shadow(0 2px 3px rgba(0,0,0,.35))'});
         sym.getSymbol(".lumacacontainer").play("in");
         $(".lumacacontainer").bind('touchstart', function(){
         	AudioLumaca.load();
         	AudioLumaca.play();
             var div=$(".lumacacontainer");
             div.animate({top:'-=25px'},"500");
             div.animate({top:'+=25px'},"1");
         });
         /*Tira giù il fumello*/sym.getSymbol("FUMELLO").play();
      
      
      
      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_BIRD}", "touchstart", function(sym, e) {
         sym.getSymbol("BIRD").play("in");
         AudioBird.load();
         AudioBird.play();
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_CAROTA}", "touchstart", function(sym, e) {
         sym.getSymbol("CAROTA").play("in");
      
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

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3910, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1583, function(sym, e) {
         AudioNumero.play();

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
         window.open("index.html", "_self");

      });
      //Edge binding end
      
      
      
      
      
      

      Symbol.bindElementAction(compId, symbolName, "${_NEXT}", "touchstart", function(sym, e) {
         sym.getComposition().getStage().getSymbol("MENUz").getSymbol("NEXT").play("in");
         window.open("Quadro2.html", "_self");

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
   
   //Edge symbol: 'NEXT'
   (function(symbolName) {   
   
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
   
   })("FarfallaContainer");
   //Edge symbol end:'FarfallaContainer'

   //=========================================================
   
   //Edge symbol: 'FioreAni'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop(0);

      });
      //Edge binding end

   })("FioreAni");
   //Edge symbol end:'FioreAni'

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

})(jQuery, AdobeEdge, "Quadro01");