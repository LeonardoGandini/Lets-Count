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
       
       
       
      function fumelo(){
         var position = sym.$(".fumello").position();
          if (position.top >= 100){
         	sym.getComposition().getStage().getSymbol("FUMELLO").play("USCITA");
         }	      
      }   
      
      
   function seAndroid(){
	   if((navigator.userAgent.match(/android/gi))){src = '/android_asset/www/' + src;}
   }   

         function init(){

	      document.addEventListener("deviceready", onDeviceReady, false);

	        function onDeviceReady() {
	        	(function(){
				    playAudio("audio/LaMadeline.mp3");
				    setTimeout(arguments.callee, 301200);
				})();
				setTimeout(function(){
        			playAudioVoce('audio/quadri/Q6.mp3');
        		},2000);      
	        }        

	        var my_media = null;
	        function playAudio(src) {
				seAndroid();        
	            my_media = new Media(src);
	            my_media.play();
	        }    

	       var AudioVoce = null;
	       function playAudioVoce (src) {
	      		seAndroid();
	            AudioVoce = new Media(src);
	            AudioVoce.play();
	        }  


			var Audio1 = null;
			var Audio2 = null;
			var Audio3 = null;
			var Audio4 = null;
			var Audio5 = null;
			var Audio6 = null;

			var suonatore = {
			    
			    suono1: function playAudio1 (src) {
								seAndroid(); 
							    Audio1 = new Media(src);
							    Audio1.play();   
						},
			    suono2: function playAudio2 (src) {
								seAndroid(); 
							    Audio2 = new Media(src);
							    Audio2.play();   
						},
			    suono3: function playAudio3 (src) {
								seAndroid(); 
							    Audio3 = new Media(src);
							    Audio3.play();   
						},
			    suono4: function playAudio4 (src) {
								seAndroid(); 
							    Audio4 = new Media(src);
							    Audio4.play();   
						},
			    suono5: function playAudio5 (src) {
								seAndroid(); 
							    Audio5 = new Media(src);
							    Audio5.play();   
						},
			    suono6: function playAudio6 (src) {
								seAndroid(); 
							    Audio6 = new Media(src);
							    Audio6.play();   
						}
						
						
			};


         $(".numeris").hide();
         sym.$("resetto").css({'display':'none'});

         		 $(".fiore").bind(toccomagico, function(){
         		  		sym.getSymbol(this).play("in");
         		 });

			       var AudioFoglie = null;
			       function playAudioFoglie (src) {
			       seAndroid();
			            AudioFoglie = new Media(src);
			            AudioFoglie.play();
			        }       
					$(".foglie-spare").bind(toccomagico, function(){
					   	sym.getSymbol(this).play("in");		
						playAudioFoglie("audio/grass1.mp3");
					});         


         		 $(".fogliebird").bind(toccomagico, function(){

         		  		$(this).addClass("clicked");
         			 	var value = $(".clicked").length;
         			 	//alert(value);
         			 	//sym.$('temp'+ value).css({'color':'red'});
		 			   //eval("playAudio" + value + "('audio/numbers/S00'+ value +'.mp3')");
		 			 	
		 			 	suonatore['suono'+ value]('audio/numbers/S00'+ value +'.mp3');

         			$(".numeris").hide();
         			sym.getSymbol("numerazio").$('Num-'+ value).show();
         			sym.getSymbol("numerazio").play("in");

         			sym.getSymbol("Scoiattolo").play("ani");


         			 if ( value >= 6 ){

         				 sym.$("resetto").css({'display':'block'});
         				 sym.getSymbol("Scoiattolo").play("ultima6");

         				};


         		 });


         		 sym.$("resetto").bind(toccomagico, function(){

         		  	        sym.getSymbol("Bird-1").play("resetto");
         					sym.getSymbol("Bird-2").play("resetto");
         					sym.getSymbol("Bird-3").play("resetto");
         					sym.getSymbol("Bird-4").play("resetto");
         					sym.getSymbol("Bird-5").play("resetto");
         					sym.getSymbol("Bird-6").play("resetto");

         					$(".fogliebird").removeClass("clicked");
         					sym.$('[id^=Stage_temp]').css({'color':'black'});	
         					$(".numeris").hide();
         					sym.$("resetto").css({'display':'none'});
         			 });



         		 sym.$("foglie-bird-1").bind(toccomagico, function(){
         		  		sym.getSymbol("Bird-1").play("in");         		  		
         		  		fumelo();
         		 });
         		 sym.$("foglie-bird-2").bind(toccomagico, function(){
         		  		sym.getSymbol("Bird-2").play("in");
         		  		fumelo();
         		 });
         		sym.$("foglie-bird-3").bind(toccomagico, function(){
         		  		sym.getSymbol("Bird-3").play("in");
         		  		fumelo();
         		 });
         		 sym.$("foglie-bird-4").bind(toccomagico, function(){
         		  		sym.getSymbol("Bird-4").play("in");
         		  		fumelo();

         		 });
         		 sym.$("foglie-bird-5").bind(toccomagico, function(){
         		  		sym.getSymbol("Bird-5").play("in");
         		  		fumelo();
         		 });
         		 sym.$("foglie-bird-6").bind(toccomagico, function(){
         		  		sym.getSymbol("Bird-6").play("in");
         		  		fumelo();
         		 });



/**********MUCCA START**********/         		 
			       var AudioCowBell = null;
			       function playAudioCowBell (src) {
			       seAndroid();
			            AudioCowBell = new Media(src);
			            AudioCowBell.play();
			        }       
					sym.$("trigger-mucca-testa").bind(toccomagico, function(){
					   	sym.getSymbol("Mucca").play("testa");		
						
					setTimeout(function(){
	        			playAudioCowBell("audio/cow-bell.mp3");
	        		},850);  	
					});            		 

			       var AudioCow = null;
			       function playAudioCow (src) {
			       seAndroid();
			            AudioCow = new Media(src);
			            AudioCow.play();
			        }       
					sym.$("trigger-mucca-coda").bind(toccomagico, function(){
					   	sym.getSymbol("Mucca").play("coda");		
						playAudioCow("audio/Mucca2.mp3");
					});     

   
					   
         		  var clickedo = 0;
         		  sym.$("trigger-mucca-corpo").bind(toccomagico, function (e) {
         			  clickedo++;
         			  if (clickedo >= 15) {
         					clickedo = 0;
							
					var AudioCowLong = null;
					 function playAudioCowLong (src) {
							seAndroid();
							AudioCowLong = new Media(src);
							AudioCowLong.play();
					  } 
					  playAudioCowLong("audio/cowlong.mp3");
					  sym.getSymbol("Mucca").play("speciale");
								
         			  } else {
         					return false;
         			  }
         		 });	
/**********MUCCA STOP**********/

/**********SCOIATTOLO START**********/
         		 sym.$("trigger-coda").bind(toccomagico, function(){
         		  		sym.getSymbol("Scoiattolo").play("coda");
         		 });	 

         		  var clicked = 0;
         		  sym.$("Scoiattolo").bind(toccomagico, function (e) {
         			  clicked++;
         			  if (clicked >= 6) {
         					clicked = 0;
         					sym.getSymbol("Scoiattolo").play("speciale");
         			  } else {
         					return false;
         			  }
         		 });	

/**********SCOIATTOLO STOP**********/

/**********FUMELLO START**********/ 
			sym.getSymbol("FUMELLO").play("ENTRATA");

			$(".fumello").bind(toccomagico, function(){
				sym.getSymbol("FUMELLO").play("ENTRATA");
			});	 
			$(".fume").bind(toccomagico, function(){
				sym.getSymbol("FUMELLO").play("USCITA");
			});	         
            $(".playvoce").bind(toccomagico, function(){
      	     	sym.getSymbol(this).play("in");
		    	playAudioVoce('audio/quadri/Q6.mp3');
      	    });
/**********FUMELLO STOP**********/ 








}/**********FINE INIT**********/






/*DA FOTTERE ALLA FINE*///init();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Scoiattolo'
   (function(symbolName) {   
   
      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 865, function(sym, e) {
         sym.stop(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2250, function(sym, e) {
         sym.stop(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3614, function(sym, e) {
         sym.stop(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5259, function(sym, e) {
         sym.stop(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8053, function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop(0);

      });
      //Edge binding end

   })("Scoiattolo");
   //Edge symbol end:'Scoiattolo'

   //=========================================================
   
   //Edge symbol: 'Mucca'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2085, function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3380, function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop(0);

      });
      //Edge binding end

   })("Mucca");
   //Edge symbol end:'Mucca'

   //=========================================================
   
   //Edge symbol: 'Bird'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1060, function(sym, e) {
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2366, function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop(0);
         // insert code here

      });
      //Edge binding end

   })("Bird");
   //Edge symbol end:'Bird'

   //=========================================================
   
   //Edge symbol: 'foglie-bird'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 645, function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop(0);

      });
      //Edge binding end

   })("foglie-bird");
   //Edge symbol end:'foglie-bird'

   //=========================================================
   
   //Edge symbol: 'Fiore-Rosa'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1632, function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop(0);

      });
      //Edge binding end

   })("Fiore-Rosa");
   //Edge symbol end:'Fiore-Rosa'

   //=========================================================
   
   //Edge symbol: 'Fiore-Bianco'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1341, function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop(0);

      });
      //Edge binding end

   })("Fiore-Bianco");
   //Edge symbol end:'Fiore-Bianco'

   //=========================================================
   
   //Edge symbol: 'Fiore-Giallo'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2697, function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop(0);

      });
      //Edge binding end

   })("Fiore-Giallo");
   //Edge symbol end:'Fiore-Giallo'

   //=========================================================
   
   //Edge symbol: 'Fiore-Arancione'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop(0);

      });
      //Edge binding end

   })("Fiore-Arancione");
   //Edge symbol end:'Fiore-Arancione'

   //=========================================================
   
   //Edge symbol: 'foglie-spare'
   (function(symbolName) {   
   
   })("foglie-spare");
   //Edge symbol end:'foglie-spare'

   //=========================================================
   
   //Edge symbol: 'numerazio'
   (function(symbolName) {   
   
   })("numerazio");
   //Edge symbol end:'numerazio'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'musica_1'
   (function(symbolName) {   
   
      })("play");
   //Edge symbol end:'play'

   //=========================================================
   
   //Edge symbol: 'FUMELLO'
   (function(symbolName) {   
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop(0);
      
      });
      //Edge binding end
      
      
      
      
      
      
      
      
      
      
      
      
      
      

   })("FUMELLO");
   //Edge symbol end:'FUMELLO'

})(jQuery, AdobeEdge, "Quadro-06");