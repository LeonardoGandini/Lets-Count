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


yepnope({load: ["cordova.js"],complete: init});
  toccomagico = 'touchstart MSPointerDown pointerdown'
function init(){

       	//$(".testona").draggable();
       document.addEventListener("deviceready", onDeviceReady, false);

       var my_media = null;
       var AudioLetsCount = null;

        function playAudio(src) {
        if((navigator.userAgent.match(/android/gi))){src = '/android_asset/www/' + src;} 
        	my_media = new Media(src);
        	my_media.play();

        }
    	function pauseAudio() {
    		if (my_media) {
    			my_media.pause();
    		}
    	}

        function onDeviceReady() {

        	(function(){
			    playAudio("audio/Ghost.mp3");
			    setTimeout(arguments.callee, 38000);
			})();

        }


      $('.musica').toggle(function () {
          $(".musicasvg").css({'background-image': 'url(images/svg-musicBW.svg)'});
          	pauseAudio();
      }, function () {
          $(".musicasvg").css({'background-image': 'url(images/svg-music.svg)'});
         (function(){
			    playAudio("audio/Ghost.mp3");
			    setTimeout(arguments.callee, 301200);
			})();			

      });


       function playAudioLetsCount (src) {
        if((navigator.userAgent.match(/android/gi))){src = '/android_asset/www/' + src;} 
            AudioLetsCount = new Media(src);
            AudioLetsCount.play();
        }

      $(".letscount").bind(toccomagico, function(){
      	sym.getSymbol(this).play("in");	
		playAudioLetsCount('audio/LetsCount.mp3');

      });	        



};/*INIT STOP*/







      $("#prelo").css({'display':'none'});


      $(".popuppo").hide();

      $(".InfoButt").bind(toccomagico, function(){
      		sym.getSymbol(this).play("in");
      });  
      $(".chiudix").bind(toccomagico, function(){
      		$(".popuppo").hide();
      }); 			

      $(".fioreani, .play, .sei, .sette, .otto, .nove, .dieci, .roberta, .ucelo, .musica").bind(toccomagico, function(){
      	sym.getSymbol(this).play("in");
      });



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
   
   //Edge symbol: 'Play'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 408, function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("Quadro6.html", "_self");

      });
      //Edge binding end

   })("Play");
   //Edge symbol end:'Play'

   //=========================================================
   
   //Edge symbol: 'InfoButt'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 393, function(sym, e) {
         $(".popuppo").toggle();

      });
      //Edge binding end

   })("InfoButt");
   //Edge symbol end:'InfoButt'

   //=========================================================
   
   //Edge symbol: 'popuppo'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_Rectangle3}", "touchstart", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://m.leonardogandini.com", "_blank");
         

      });
      //Edge binding end

   })("popuppo");
   //Edge symbol end:'popuppo'

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

   //=========================================================
   
   //Edge symbol: 'RobertaName'
   (function(symbolName) {   
   
   })("RobertaName");
   //Edge symbol end:'RobertaName'

   //=========================================================
   
   //Edge symbol: 'letscountsymbolo'
   (function(symbolName) {   
   
   })("letscountsymbolo");
   //Edge symbol end:'letscountsymbolo'

   //=========================================================
   
   //Edge symbol: 'sei'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 586, function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("Quadro6.html", "_self");

      });
      //Edge binding end

   })("seiold");
   //Edge symbol end:'seiold'

   //=========================================================
   
   //Edge symbol: 'fiore2'
   (function(symbolName) {   
   
   })("fiore2");
   //Edge symbol end:'fiore2'

   //=========================================================
   
   //Edge symbol: 'Bird'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 973, function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop(0);
         

      });
      //Edge binding end

   })("Bird");
   //Edge symbol end:'Bird'

   //=========================================================
   
   //Edge symbol: 'sei'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 586, function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("Quadro6.html", "_self");

      });
      //Edge binding end

   })("sei");
   //Edge symbol end:'sei'

   //=========================================================
   
   //Edge symbol: 'sette'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 586, function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("Quadro7.html", "_self");

      });
      //Edge binding end

   })("sette");
   //Edge symbol end:'sette'

   //=========================================================
   
   //Edge symbol: 'otto'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 586, function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("Quadro8.html", "_self");

      });
      //Edge binding end

   })("otto");
   //Edge symbol end:'otto'

   //=========================================================
   
   //Edge symbol: 'nove'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 586, function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("Quadro9.html", "_self");

      });
      //Edge binding end

   })("nove");
   //Edge symbol end:'nove'

   //=========================================================
   
   //Edge symbol: 'dieci'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 586, function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("Quadro10.html", "_self");

      });
      //Edge binding end

   })("dieci");
   //Edge symbol end:'dieci'

})(jQuery, AdobeEdge, "Menu");