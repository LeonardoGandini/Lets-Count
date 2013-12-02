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
        			playAudioVoce('audio/quadri/Q7.mp3');
        		},2000);      
	        }        

	        var my_media = null;
	        function playAudio(src) {
				seAndroid();        
	            my_media = new Media(src);
	            my_media.play();
	        }    
	    	function pauseAudio() {
	    		if (my_media) {
	    			my_media.pause();
	    		}
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
			var Audio7 = null;
			
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
						},
			    suono7: function playAudio7 (src) {
								seAndroid(); 
							    Audio7 = new Media(src);
							    Audio7.play();   
						}	
			};


         $(".numeris").hide();
         $(".reload").css({'display':'none'});

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

/**********LA CONTA START**********/         		 

         		 $(".fogliebird").bind(toccomagico, function(){

         		  		$(this).addClass("clicked");
         			 	var value = $(".clicked").length;
         			 	//alert(value);
         			 	//sym.$('temp'+ value).css({'color':'red'});
		 			   //eval("playAudio" + value + "('audio/numbers/S00'+ value +'.mp3')");


						sym.getSymbol(".menu").play();
/* 						setTimeout(function(){ */
								suonatore['suono'+ value]('audio/numbers/S00'+ value +'.mp3');
								sym.$('.fumnum'+value).css({'background-image': 'url(images/svgNum'+value+'.svg)'});
/* 						},1000);  */

						setTimeout(function(){
								sym.getSymbol(".menu").play("chiusura");
						},2500); 					

         			$(".numeris").hide();
         			sym.getSymbol("numerazio").$('Num-'+value).show();
         			sym.getSymbol("numerazio").play("in");

         			sym.getSymbol("Scoiattolo").play("ani");

						if ( value >= 7 ){

         				 $(".reload").fadeIn();
         				 sym.getSymbol("Scoiattolo").play("ultima6");

         				};


         		 });
/**********LA CONTA STOP**********/         		 


         		  $(".reload").bind(toccomagico, function(){
							sym.getSymbol(this).play("in");

         		  	      sym.getSymbol("Bird-1").play("resetto");
         					sym.getSymbol("Bird-2").play("resetto");
         					sym.getSymbol("Bird-3").play("resetto");
         					sym.getSymbol("Bird-4").play("resetto");
         					sym.getSymbol("Bird-5").play("resetto");
         					sym.getSymbol("Bird-6").play("resetto");

         					$(".fogliebird").removeClass("clicked");
         					sym.$('[id^=Stage_temp]').css({'color':'black'});	
         					$(".numeris").hide();
         					$(".reload").fadeOut();


         					sym.$('.fumnum1').css({'background-image': 'url(images/svgBWNum1.svg)'});
         					sym.$('.fumnum2').css({'background-image': 'url(images/svgBWNum2.svg)'});
         					sym.$('.fumnum3').css({'background-image': 'url(images/svgBWNum3.svg)'});
         					sym.$('.fumnum4').css({'background-image': 'url(images/svgBWNum4.svg)'});
         					sym.$('.fumnum5').css({'background-image': 'url(images/svgBWNum5.svg)'});
         					sym.$('.fumnum6').css({'background-image': 'url(images/svgBWNum6.svg)'});

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

 					var i=0;
					setInterval(function() {
						 sym.getSymbol("Scoiattolo").play("coda");
					}, 3000);

					/*
					var i=0;
					setInterval(function() {
						 switch(i++%3) {
							  case 0: sym.getSymbol("Scoiattolo").play("coda");
							  break;
							  case 1: alert("variation 2");
							  break;
							  case 2: alert("variation 3");
							  break;
						 }
					}, 3000);
*/

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


/**********MENU START**********/
      	avanti = "Quadro7.html";
      	indietro = "Quadro6.html";
      	$(".next, .prev, .musica, .home").bind(toccomagico, function(){
      		sym.getSymbol(this).play("in");
      	});
      	$(".testina").bind(toccomagico, function(){
      			sym.getSymbol(".menu").play();
      	});
      	//sym.$(".fumnum1, .fumnum2, .fumnum3, .fumnum4, .fumnum5, .fumnum6, .fumnum7, .fumnum8, .fumnum9, .fumnum10").css({'-webkit-filter': 'saturate(0%)', 'opacity':'0.4'});
      	//sym.$(".fumnum1, .fumnum2, .fumnum3, .fumnum4, .fumnum5, .fumnum6, .fumnum7, .fumnum8, .fumnum9, .fumnum10").css({'background-image': 'url(images/svgNum7.svg)'});

      	sym.$(".next, .prev").css({'-webkit-filter': 'drop-shadow(0 5px 10px rgba(0,0,0,.5))'});
/**********MENU STOP**********/


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

}/**********FINE INIT**********/






/*DA FOTTERE ALLA FINE*///init();







      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

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

   //=========================================================

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'MENUz'
   (function(symbolName) {   
      
      
      
      
      
      
      
      
      
      
      
      

      

      

      

      

   })("MENUz");
   //Edge symbol end:'MENUz'

   //=========================================================
   
   //Edge symbol: 'Menu'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 196, function(sym, e) {
         sym.stop();
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 384, function(sym, e) {
         sym.stop(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         //sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 223, function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14, function(sym, e) {
         sym.getSymbol(".testina").play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 236, function(sym, e) {
         sym.getSymbol(".testina").play();

      });
      //Edge binding end

   })("Menu");
   //Edge symbol end:'Menu'

   //=========================================================
   
   //Edge symbol: 'musica'
   (function(symbolName) {   
   
   })("musica");
   //Edge symbol end:'musica'

   //=========================================================
   
   //Edge symbol: 'testina'
   (function(symbolName) {   
   
   })("testina");
   //Edge symbol end:'testina'

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
   
   //Edge symbol: 'NEXT_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 140, function(sym, e) {
         window.open(indietro, "_self");

      });
         //Edge binding end

      })("PREV");
   //Edge symbol end:'PREV'

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
   
   //Edge symbol: 'reload'
   (function(symbolName) {   
   
   })("reload");
   //Edge symbol end:'reload'

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
   
   //Edge symbol: 'Scoiattolo'
   (function(symbolName) {   
   
   })("Scoiattolo");
   //Edge symbol end:'Scoiattolo'

})(jQuery, AdobeEdge, "Quadro-07");