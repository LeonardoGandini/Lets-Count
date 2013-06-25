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
      
      
      Symbol.bindElementAction(compId, symbolName, "${_Text}", "touchstart", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("index.html", "_self");
      
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         yepnope({
              load: ["libs/jplayer.min.js",
              			"libs/playBGMenu.js"/*,
              			"libs/jquery-ui-1.10.3.custom.min.js",
              			"libs/jquery.ui.touch-punch.min.js"*/
              			],complete: init});
         
         function init(){
              	//$(".uno").draggable();
         };
         
         //sym.$(".welldone").html("<p>Well done,</p><p>you can count to 5 !</p>");
         
         
         $("#prelo").css({'display':'none'});
         
            $(".home, .musica, .uno, .due, .tre, .quattro, .cinque").bind('touchstart MSPointerDown', function(){
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

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nextCopy}", "touchstart", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("https://itunes.apple.com/us/app/dragon-maps-for-elder-scrolls/id479661422?ls=1&mt=8", "_self");
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Preloader'
   (function(symbolName) {   
   
   })("Preloader");
   //Edge symbol end:'Preloader'

   //=========================================================
   
   //Edge symbol: 'musica'
   (function(symbolName) {   
   
   })("musica");
   //Edge symbol end:'musica'

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
   
   //Edge symbol: 'uno'
   (function(symbolName) {   
   
   })("uno");
   //Edge symbol end:'uno'

   //=========================================================
   
   //Edge symbol: 'due'
   (function(symbolName) {   
   
   })("due");
   //Edge symbol end:'due'

   //=========================================================
   
   //Edge symbol: 'tre'
   (function(symbolName) {   
   
   })("tre");
   //Edge symbol end:'tre'

   //=========================================================
   
   //Edge symbol: 'quattro'
   (function(symbolName) {   
   
   })("quattro");
   //Edge symbol end:'quattro'

   //=========================================================
   
   //Edge symbol: 'cinque'
   (function(symbolName) {   
   
   })("cinque");
   //Edge symbol end:'cinque'

   //=========================================================
   
   //Edge symbol: 'Scoia'
   (function(symbolName) {   
   

   })("Scoia");
   //Edge symbol end:'Scoia'

})(jQuery, AdobeEdge, "QuadroFinale");