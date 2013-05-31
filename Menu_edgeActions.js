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
        /* AudioTappetino = new Audio('Suoni/LaMadeline.mp3');
         AudioTappetino.load();
         AudioTappetino.play();	
         AudioTappetino.volume = 0.1;
         */
        
      yepnope({
           load: ["libs/jplayer.min.js",
           			"libs/playBGMenu.js"
           			//"http://cdn.edgecommons.org/an/1.0.0/js/min/EdgeCommons.js"
           			],
           complete: function() {}
      });
      
      $(".popuppo").hide();
      			$(".InfoButt").bind('touchstart', function(){
      					$(".popuppo").toggle();
      					sym.getSymbol(this).play("in");
      			});  
      			$(".chiudix").bind('touchstart', function(){
      					$(".popuppo").hide();
      			}); 			
      
      $(".fioreani, .play, .uno, .due, .tre, .quattro, .cinquo").bind('touchstart', function(){
      	sym.getSymbol(this).play("in");
      });
      
      $(".musica").bind('touchstart, click', function(){
      		sym.getSymbol(this).play("in");
      		 $(".ilminkia").css({'filter': "url('#grayscale')"});
      });
      $('.musica').toggle(function () {
          $(".musicanrm").css({'display': 'none'});
          $(".musicagray").css({'display': 'block'});    	
      }, function () {
          $(".musicanrm").css({'display': 'block'});
          $(".musicagray").css({'display': 'none'});   
      });
      
      
      /*
      $(".musica").bind('touchstart', function(){
      		sym.getSymbol(this).play("in");
      });
      $('.musica').toggle(function () {
          $(".musica").css({
          	'-webkit-filter': 'saturate(0%)',
          	});
      }, function () {
          $(".musica").css({
          	'-webkit-filter': 'saturate(100%)',
          	});
      });
      */

      });//Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Preloader'
   (function(symbolName) {   
   
   })("Preloader");
   //Edge symbol end:'Preloader'

   //=========================================================
   
   //Edge symbol: 'Down-level'
   (function(symbolName) {   
   
   })("Down-level");
   //Edge symbol end:'Down-level'

   //=========================================================
   
   //Edge symbol: 'fiore1'
   (function(symbolName) {   
   
   })("fiore1");
   //Edge symbol end:'fiore1'

   //=========================================================
   
   //Edge symbol: 'fiore2'
   (function(symbolName) {   
   
   })("fiore2");
   //Edge symbol end:'fiore2'

   //=========================================================
   
   //Edge symbol: 'fiore3'
   (function(symbolName) {   
   
   })("fiore3");
   //Edge symbol end:'fiore3'

   //=========================================================
   
   //Edge symbol: 'Play'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 408, function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("Quadro1.html", "_self");

      });
      //Edge binding end

   })("Play");
   //Edge symbol end:'Play'

   //=========================================================
   
   //Edge symbol: 'InfoButt'
   (function(symbolName) {   
   
   })("InfoButt");
   //Edge symbol end:'InfoButt'

   //=========================================================
   
   //Edge symbol: 'popuppo'
   (function(symbolName) {   
   
   })("popuppo");
   //Edge symbol end:'popuppo'

   //=========================================================
   
   //Edge symbol: 'chiudix'
   (function(symbolName) {   
   
   })("chiudix");
   //Edge symbol end:'chiudix'

   //=========================================================
   
   //Edge symbol: 'cinquo'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 586, function(sym, e) {
         window.open("Quadro5.html", "_self");

      });
      //Edge binding end

   })("cinquo");
   //Edge symbol end:'cinquo'

   //=========================================================
   
   //Edge symbol: 'quattro'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 586, function(sym, e) {
         window.open("Quadro4.html", "_self");

      });
      //Edge binding end

   })("quattro");
   //Edge symbol end:'quattro'

   //=========================================================
   
   //Edge symbol: 'tre'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 586, function(sym, e) {
         window.open("Quadro3.html", "_self");

      });
      //Edge binding end

   })("tre");
   //Edge symbol end:'tre'

   //=========================================================
   
   //Edge symbol: 'due'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 586, function(sym, e) {
         window.open("Quadro2.html", "_self");

      });
      //Edge binding end

   })("due");
   //Edge symbol end:'due'

   //=========================================================
   
   //Edge symbol: 'uno'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 586, function(sym, e) {
         window.open("Quadro1.html", "_self");

      });
      //Edge binding end

   })("uno");
   //Edge symbol end:'uno'

   //=========================================================
   
   //Edge symbol: 'musica'
   (function(symbolName) {   
   
   })("musica");
   //Edge symbol end:'musica'

   //=========================================================
   
   //Edge symbol: 'AudioMenuTappeto'
   (function(symbolName) {   
   
   })("AudioMenuTappeto");
   //Edge symbol end:'AudioMenuTappeto'

   //=========================================================
   
   //Edge symbol: 'Scoiattolo'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("Scoiattolo");
   //Edge symbol end:'Scoiattolo'

})(jQuery, AdobeEdge, "Menu");