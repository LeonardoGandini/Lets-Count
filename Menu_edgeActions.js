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
        
           
if((navigator.userAgent.match(/android/gi))){
	yepnope({load: ["libs/cordova.js"],complete: init});
}

if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i))){
	yepnope({load: ["libs/cordovaIOS.js"],complete: init});
}


            
function init(){
           	//$(".testona").draggable();

	        document.addEventListener("deviceready", onDeviceReady, false);


	        var my_media = null;

	        function playAudio(src) {
            if (device.platform == 'Android') {src = '/android_asset/www/' + src;}
	        	my_media = new Media(src);
	        	my_media.play();
	        }

	        function stopAudio() {
	        	if (my_media) {
	        		my_media.stop();
	        	}
	        }
	        	function pauseAudio() {
	        		if (my_media) {
	        			my_media.pause();
	        		}
	        	}
	        	
	        function onDeviceReady() {
	        	playAudio("Suoni/Ghost.mp3");
	        }
	        
	        
      $('.musica').toggle(function () {
          $(".musica").css({
          	'-webkit-filter': 'saturate(0%)',
          	'opacity':'0.6'
          	});
          	pauseAudio();
      }, function () {
          $(".musica").css({
          	'-webkit-filter': 'saturate(100%)',
          	'opacity':'1'
          	});
          	playAudio("Suoni/Ghost.mp3");
      });	        
	        
	        
	       var AudioLetsCount = null;
	       
	       function playAudioLetsCount (src) {
            if (device.platform == 'Android') {src = '/android_asset/www/' + src;}
	            AudioLetsCount = new Media(src);
	            AudioLetsCount.play();   
	        }
      $(".letscount").bind('touchstart MSPointerDown', function(){
      	sym.getSymbol(this).play("in");	
		playAudioLetsCount('Suoni/LetsCount.mp3');
		
      });	        
	        
	        
};/*INIT STOP*/
      






        $("#prelo").css({'display':'none'});
        
		$(".musica").bind('touchstart MSPointerDown', function() {
	    	sym.getSymbol(this).play("in");
		});      
      
      $(".popuppo").hide();
      
      $(".InfoButt").bind('touchstart MSPointerDown', function(){
      		sym.getSymbol(this).play("in");
      });  
      $(".chiudix").bind('touchstart MSPointerDown', function(){
      		$(".popuppo").hide();
      }); 			
      
      $(".fioreani, .play, .uno, .due, .tre, .quattro, .cinquo, .roberta").bind('touchstart MSPointerDown', function(){
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

})(jQuery, AdobeEdge, "Menu");