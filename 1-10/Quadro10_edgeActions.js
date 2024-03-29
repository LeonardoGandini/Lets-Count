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
       //toccomagico = 'click'
      
      function fumelo(){
         var position = sym.$(".fumello").position();
          if (position.top >= 100){
         	sym.getComposition().getStage().getSymbol("FUMELLO").play("USCITA");
         }	      
      }   
      
      
     





function init(){

	      document.addEventListener("deviceready", onDeviceReady, false);

	        function onDeviceReady() {
	        	(function(){
				    playAudio("audio/LaMadeline.mp3");
				    setTimeout(arguments.callee, 301200);
				})();
				setTimeout(function(){
        			playAudioVoce('audio/quadri/Q10.mp3');
        		},2000);      
	        }        

	        var my_media = null;
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


	       var AudioVoce = null;
	       function playAudioVoce (src) {
	      		if((navigator.userAgent.match(/android/gi))){src = '/android_asset/www/' + src;}
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
			var Audio8 = null;
			var Audio9 = null;
			var Audio10 = null;

			var suonatore = {

			    suono1: function playAudio1 (src) {
								if((navigator.userAgent.match(/android/gi))){src = '/android_asset/www/' + src;} 
							    Audio1 = new Media(src);
							    Audio1.play();   
						},
			    suono2: function playAudio2 (src) {
								if((navigator.userAgent.match(/android/gi))){src = '/android_asset/www/' + src;} 
							    Audio2 = new Media(src);
							    Audio2.play();   
						},
			    suono3: function playAudio3 (src) {
								if((navigator.userAgent.match(/android/gi))){src = '/android_asset/www/' + src;} 
							    Audio3 = new Media(src);
							    Audio3.play();   
						},
			    suono4: function playAudio4 (src) {
								if((navigator.userAgent.match(/android/gi))){src = '/android_asset/www/' + src;} 
							    Audio4 = new Media(src);
							    Audio4.play();   
						},
			    suono5: function playAudio5 (src) {
								if((navigator.userAgent.match(/android/gi))){src = '/android_asset/www/' + src;} 
							    Audio5 = new Media(src);
							    Audio5.play();   
						},
			    suono6: function playAudio6 (src) {
								if((navigator.userAgent.match(/android/gi))){src = '/android_asset/www/' + src;} 
							    Audio6 = new Media(src);
							    Audio6.play();   
						},
			    suono7: function playAudio7 (src) {
								if((navigator.userAgent.match(/android/gi))){src = '/android_asset/www/' + src;} 
							    Audio7 = new Media(src);
							    Audio7.play();   
						},
			    suono8: function playAudio8 (src) {
								if((navigator.userAgent.match(/android/gi))){src = '/android_asset/www/' + src;} 
							    Audio8 = new Media(src);
							    Audio8.play();   
						},
			    suono9: function playAudio9 (src) {
								if((navigator.userAgent.match(/android/gi))){src = '/android_asset/www/' + src;} 
							    Audio9 = new Media(src);
							    Audio9.play();   
						},	
			    suono10: function playAudio10 (src) {
								if((navigator.userAgent.match(/android/gi))){src = '/android_asset/www/' + src;} 
							    Audio10 = new Media(src);
							    Audio10.play();   
						}	

			};


         $(".numeris").hide();
         $(".reload").hide();

/**********LA CONTA START**********/         		 

			       var Audiolb = null;
			       function playAudiolb (src) {
			       if((navigator.userAgent.match(/android/gi))){src = '/android_asset/www/' + src;}
			            Audiolb = new Media(src);
			            Audiolb.play();
			        }

         		 $(".triggers").bind(toccomagico, function(){

         		  	$(this).addClass("clicked");
         			var value = $(".clicked").length;

					   sym.getSymbol(".menu").play();
						suonatore['suono'+ value]('audio/numbers/S00'+ value +'.mp3');
						sym.$('.fumnum'+ value).css({'background-image': 'url(images/svgNum'+value+'.svg)'});

						setTimeout(function(){
								sym.getSymbol(".menu").play("chiusura");
						},3000); 					

						playAudiolb("audio/bee1.mp3");

         			$(".numeris").hide();
         			sym.getSymbol("numerazio").$('Num-'+value).show();
         			sym.getSymbol("numerazio").play("in");

         			sym.getSymbol("scoiattolo-braccio-front").play("ani");
         			sym.getSymbol("Scoiattolo").play("ani");
         			
         			

						if ( value >= 10 ){

         				 $(".reload").fadeIn();
         				 sym.getSymbol("scoiattolo-braccio-front").play("finale");
         				 sym.getSymbol("Scoiattolo").play("finale");

         				};





         		 });
/**********LA CONTA STOP**********/         		 


         		  $(".reload").bind(toccomagico, function(){

							sym.getSymbol(".reload").play("in");

						    sym.getComposition().getStage().getSymbol("lb1").stop(0);
						    sym.getComposition().getStage().getSymbol("lb2").stop(0);
						    sym.getComposition().getStage().getSymbol("lb3").stop(0);
						    sym.getComposition().getStage().getSymbol("lb4").stop(0);
						    sym.getComposition().getStage().getSymbol("lb5").stop(0);
						    sym.getComposition().getStage().getSymbol("lb6").stop(0);
						    sym.getComposition().getStage().getSymbol("lb7").stop(0);
						    sym.getComposition().getStage().getSymbol("lb8").stop(0);
						    sym.getComposition().getStage().getSymbol("lb9").stop(0);
						    sym.getComposition().getStage().getSymbol("lb10").stop(0);

         					$(".triggers").removeClass("clicked");		
         					$(".numeris").hide();
         					$(".reload").fadeOut();


         					sym.$('.fumnum1').css({'background-image': 'url(images/svgBWNum1.svg)'});
         					sym.$('.fumnum2').css({'background-image': 'url(images/svgBWNum2.svg)'});
         					sym.$('.fumnum3').css({'background-image': 'url(images/svgBWNum3.svg)'});
         					sym.$('.fumnum4').css({'background-image': 'url(images/svgBWNum4.svg)'});
         					sym.$('.fumnum5').css({'background-image': 'url(images/svgBWNum5.svg)'});
         					sym.$('.fumnum6').css({'background-image': 'url(images/svgBWNum6.svg)'});
         					sym.$('.fumnum7').css({'background-image': 'url(images/svgBWNum7.svg)'});
         					sym.$('.fumnum8').css({'background-image': 'url(images/svgBWNum8.svg)'});
         					sym.$('.fumnum9').css({'background-image': 'url(images/svgBWNum9.svg)'});
         					sym.$('.fumnum10').css({'background-image': 'url(images/svgBWNum10.svg)'});

         			 });




/*
			       var AudioGufo = null;
			       function playAudioGufo (src) {
			       if((navigator.userAgent.match(/android/gi))){src = '/android_asset/www/' + src;}
			            AudioGufo = new Media(src);
			            AudioGufo.play();
			        }



	         	  sym.$("Trigger-Gufo").bind(toccomagico, function(){
	         		  		sym.getSymbol("alberogufo").play("in");
	         		  		playAudioGufo("audio/gufo1.mp3");		         		  		
	         	  });        		 
*/





          		 sym.$("trigger-lb1").bind(toccomagico, function(){
         		  		sym.getSymbol(".lb1").play("uscita");
	  						fumelo();
         		 });
          		 sym.$("trigger-lb2").bind(toccomagico, function(){
         		  		sym.getSymbol(".lb2").play("uscita");
	  						fumelo();
         		 });
          		 sym.$("trigger-lb3").bind(toccomagico, function(){
         		  		sym.getSymbol(".lb3").play("uscita");
	  						fumelo();
         		 });
          		 sym.$("trigger-lb4").bind(toccomagico, function(){
         		  		sym.getSymbol(".lb4").play("uscita");
	  						fumelo();
         		 });
          		 sym.$("trigger-lb5").bind(toccomagico, function(){
         		  		sym.getSymbol(".lb5").play("uscita");
	  						fumelo();
         		 });
          		 sym.$("trigger-lb6").bind(toccomagico, function(){
         		  		sym.getSymbol(".lb6").play("uscita");
	  						fumelo();
         		 });
          		 sym.$("trigger-lb7").bind(toccomagico, function(){
         		  		sym.getSymbol(".lb7").play("uscita");
	  						fumelo();
         		 });
          		 sym.$("trigger-lb8").bind(toccomagico, function(){
         		  		sym.getSymbol(".lb8").play("uscita");
	  						fumelo();
         		 });
          		 sym.$("trigger-lb9").bind(toccomagico, function(){
         		  		sym.getSymbol(".lb9").play("uscita");
	  						fumelo();
         		 });
          		 sym.$("trigger-lb10").bind(toccomagico, function(){
         		  		sym.getSymbol(".lb10").play("uscita");
	  						fumelo();
         		 });


/**********SCOIATTOLO START**********/
         		 sym.$("trigger-coda").bind(toccomagico, function(){
         		  		sym.getSymbol("Scoiattolo").play("coda");
         		 });	 

 					var i=0;
					setInterval(function() {
						 sym.getSymbol("Scoiattolo").play("coda");
					}, 10000);



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
		    	playAudioVoce('audio/quadri/Q10.mp3');
      	    });
/**********FUMELLO STOP**********/ 


/**********MENU START**********/
      	avanti = "QuadroFinale.html";
      	indietro = "Quadro9.html";
      	$(".next, .prev, .musica, .home").bind(toccomagico, function(){
      		sym.getSymbol(this).play("in");
      	});
      	$(".testina").bind(toccomagico, function(){
      			sym.getSymbol(".menu").play();
      	});

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

/*
      	sym.$("trigger-pino").bind(toccomagico, function(){
      		sym.getSymbol(".pino").play("in");
      	});
*/
			       var AudioFoglie = null;
			       function playAudioFoglie (src) {
			       if((navigator.userAgent.match(/android/gi))){src = '/android_asset/www/' + src;}
			            AudioFoglie = new Media(src);
			            AudioFoglie.play();
			        }  		
					$(".fiore").bind(toccomagico, function(){
					   sym.getSymbol(this).play("in");		
						playAudioFoglie("audio/grass1.mp3");
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
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         sym.stop(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 529, function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5574, function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop(0);

      });
      //Edge binding end

   })("Scoiattolo");
   //Edge symbol end:'Scoiattolo'

   //=========================================================
   
   //Edge symbol: 'lb'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("lb");
   //Edge symbol end:'lb'

   //=========================================================
   
   //Edge symbol: 'ladybug'
   (function(symbolName) {   
   
   })("ladybug");
   //Edge symbol end:'ladybug'

   //=========================================================
   
   //Edge symbol: 'fiorelb'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1937, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("fiorelb");
   //Edge symbol end:'fiorelb'

   //=========================================================
   
   //Edge symbol: 'fiore'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 928, function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop(0);

      });
      //Edge binding end

   })("fiore");
   //Edge symbol end:'fiore'

   //=========================================================
   
   //Edge symbol: 'scoiattolo-braccio-front'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1750, function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3911, function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop(0);

      });
      //Edge binding end

   })("scoiattolo-braccio-front");
   //Edge symbol end:'scoiattolo-braccio-front'

   //=========================================================
   
   //Edge symbol: 'foglielb'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1436, function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop(0);

      });
      //Edge binding end

   })("foglielb");
   //Edge symbol end:'foglielb'

})(jQuery, AdobeEdge, "Quadro-10");