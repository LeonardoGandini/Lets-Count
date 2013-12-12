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
       var AudioSei = null;
       var AudioSette = null;
       var AudioOtto = null;
       var AudioNove = null;
       var AudioDieci = null;


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
			    playAudio("audio/LaMadeline.mp3");
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
       function playAudioSei (src) {
        	if((navigator.userAgent.match(/android/gi))){src = '/android_asset/www/' + src;} 
            AudioSei = new Media(src);
            AudioSei.play();   
        }
       function playAudioSette (src) {
        	if((navigator.userAgent.match(/android/gi))){src = '/android_asset/www/' + src;} 
            AudioSette = new Media(src);
            AudioSette.play();   
        }
       function playAudioOtto (src) {
        	if((navigator.userAgent.match(/android/gi))){src = '/android_asset/www/' + src;} 
            AudioOtto = new Media(src);
            AudioOtto.play();   
        }
       function playAudioNove (src) {
        	if((navigator.userAgent.match(/android/gi))){src = '/android_asset/www/' + src;} 
            AudioNove = new Media(src);
            AudioNove.play();   
        }
       function playAudioDieci (src) {
        	if((navigator.userAgent.match(/android/gi))){src = '/android_asset/www/' + src;} 
            AudioDieci = new Media(src);
            AudioDieci.play();   
        }



            $(".uno").bind(toccomagico, function(){
         		sym.getSymbol(this).play("in");
         		playAudioUno('audio/numbers/Singoli-1.mp3');
         	});        
            $(".due").bind(toccomagico, function(){
         		sym.getSymbol(this).play("in");
         		playAudioDue('audio/numbers/Singoli-2.mp3');
         	});        
            $(".tre").bind(toccomagico, function(){
         		sym.getSymbol(this).play("in");
         		playAudioTre('audio/numbers/Singoli-3.mp3');
         	});        
            $(".quattro").bind(toccomagico, function(){
         		sym.getSymbol(this).play("in");
         		playAudioQuattro('audio/numbers/Singoli-4.mp3');
         	});        
            $(".cinque").bind(toccomagico, function(){
         		sym.getSymbol(this).play("in");
         		playAudioCinque('audio/numbers/Singoli-5.mp3');
         	});        
            $(".sei").bind(toccomagico, function(){
         		sym.getSymbol(this).play("in");
         		playAudioSei('audio/numbers/Singoli-6.mp3');
         	});        
            $(".sette").bind(toccomagico, function(){
         		sym.getSymbol(this).play("in");
         		playAudioSette('audio/numbers/Singoli-7.mp3');
         	});        
            $(".otto").bind(toccomagico, function(){
         		sym.getSymbol(this).play("in");
         		playAudioOtto('audio/numbers/Singoli-8.mp3');
         	});        
            $(".nove").bind(toccomagico, function(){
         		sym.getSymbol(this).play("in");
         		playAudioNove('audio/numbers/Singoli-9.mp3');
         	});        
            $(".dieci").bind(toccomagico, function(){
         		sym.getSymbol(this).play("in");
         		playAudioDieci('audio/numbers/Singoli-10.mp3');
         	});        





      $('.musica').toggle(function () {
          $(".musicasvg").css({'background-image': 'url(images/svg-musicBW.svg)'});
          	pauseAudio();
      }, function () {
          $(".musicasvg").css({'background-image': 'url(images/svg-music.svg)'});
         (function(){
			    playAudio("audio/LaMadeline.mp3");
			    setTimeout(arguments.callee, 301200);
			})();			

      });



};/*INIT STOP*/  




         $("#prelo").css({'display':'none'});

            $(".home, .musica, .roberta").bind(toccomagico, function(){
         		sym.getSymbol(this).play("in");
         	});



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

   //=========================================================
   
   //Edge symbol: 'cinque_1'
   (function(symbolName) {   
   
      })("sei");
   //Edge symbol end:'sei'

   //=========================================================
   
   //Edge symbol: 'sei_1'
   (function(symbolName) {   
   
      })("sette");
   //Edge symbol end:'sette'

   //=========================================================
   
   //Edge symbol: 'sette_1'
   (function(symbolName) {   
   
      })("otto");
   //Edge symbol end:'otto'

   //=========================================================
   
   //Edge symbol: 'otto_1'
   (function(symbolName) {   
   
      })("nove");
   //Edge symbol end:'nove'

   //=========================================================
   
   //Edge symbol: 'nove_1'
   (function(symbolName) {   
   
      })("dieci");
   //Edge symbol end:'dieci'

   //=========================================================
   
   //Edge symbol: 'RobertaName'
   (function(symbolName) {   
   
   })("RobertaName");
   //Edge symbol end:'RobertaName'

})(jQuery, AdobeEdge, "QuadroFinale");