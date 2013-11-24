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
      
/*
		if((navigator.userAgent.match(/MSIE/i))){
		  yepnope({load: ["libs/cordovaIE.js"],complete: init});
		}

		if((navigator.userAgent.match(/android/gi))){
			yepnope({load: ["libs/cordova.js"],complete: init});
		}

		if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i))){
			yepnope({load: ["libs/cordovaIOS.js"],complete: init});
		}
*/
yepnope({load: ["cordova.js"],complete: init});

toccomagico = 'touchstart MSPointerDown pointerdown'

      function init(){

       document.addEventListener("deviceready", onDeviceReady, false);

       var my_media = null;
       var AudioUno = null;
       var AudioDue = null;
       var AudioTre = null;
       var AudioQuattro = null;
       var AudioCinque = null;


/* Tappetino Start*/	        
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
/* Tappetino Stop*/	        


        function onDeviceReady() {    
			        	(function(){
			    playAudio("Suoni/LaMadeline.mp3");
			    setTimeout(arguments.callee, 301200);
			})();			

        }
       function playAudioUno (src) {
        if((navigator.userAgent.match(/android/gi))){src = '/android_asset/www/' + src;} 
            AudioUno = new Media(src);
            AudioUno.play();   
        }
       function playAudioDue (src) {
        if((navigator.userAgent.match(/android/gi))){src = '/android_asset/www/' + src;} 
            AudioDue = new Media(src);
            AudioDue.play();   
        }
       function playAudioTre (src) {
        if((navigator.userAgent.match(/android/gi))){src = '/android_asset/www/' + src;} 
            AudioTre = new Media(src);
            AudioTre.play();   
        }
       function playAudioQuattro (src) {
        if((navigator.userAgent.match(/android/gi))){src = '/android_asset/www/' + src;} 
            AudioQuattro = new Media(src);
            AudioQuattro.play();   
        }
       function playAudioCinque (src) {
        if((navigator.userAgent.match(/android/gi))){src = '/android_asset/www/' + src;} 
            AudioCinque = new Media(src);
            AudioCinque.play();   
        }

            $(".uno").bind(toccomagico, function(){
         		sym.getSymbol(this).play("in");
         		playAudioUno('Suoni/numbers/Singoli-one.mp3');
         	});        
            $(".due").bind(toccomagico, function(){
         		sym.getSymbol(this).play("in");
         		playAudioDue('Suoni/numbers/Singoli-two.mp3');
         	});        
            $(".tre").bind(toccomagico, function(){
         		sym.getSymbol(this).play("in");
         		playAudioTre('Suoni/numbers/Singoli-three.mp3');
         	});        
            $(".quattro").bind(toccomagico, function(){
         		sym.getSymbol(this).play("in");
         		playAudioQuattro('Suoni/numbers/Singoli-four.mp3');
         	});        
            $(".cinque").bind(toccomagico, function(){
         		sym.getSymbol(this).play("in");
         		playAudioCinque('Suoni/numbers/Singoli-five.mp3');
         	});        


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
          	        	(function(){
			    playAudio("Suoni/LaMadeline.mp3");
			    setTimeout(arguments.callee, 301200);
			})();			

      });		        
};/*INIT STOP*/  




         $("#prelo").css({'display':'none'});

            $(".home, .musica").bind(toccomagico, function(){
         		sym.getSymbol(this).play("in");
         	});
/*
            $(".nextchapter").bind(toccomagico, function(){
         		sym.getSymbol(this).play("in");
         		window.open("https://itunes.apple.com/us/app/dragon-maps-for-elder-scrolls/id479661422?ls=1&mt=8", "_self");
         	});
*/				


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