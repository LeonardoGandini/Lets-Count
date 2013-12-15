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
      
      
      $(".menu").css({'z-index':'200'});
      
   function resetRane(){
		$(".ranas1").css({'z-index':'0'});
		$(".ranas2").css({'z-index':'0'});
		$(".ranas3").css({'z-index':'0'});
		$(".ranas4").css({'z-index':'0'});
		$(".ranas5").css({'z-index':'0'});
		$(".ranas6").css({'z-index':'0'});
		$(".ranas7").css({'z-index':'0'});

		sym.getSymbol("rana1").stop(0);
		sym.getSymbol("rana2").stop(0);
		sym.getSymbol("rana3").stop(0);
		sym.getSymbol("rana4").stop(0);
		sym.getSymbol("rana5").stop(0);
		sym.getSymbol("rana6").stop(0);
		sym.getSymbol("rana7").stop(0);

   }   


	sym.$("TriggerRana1").css({'z-index':'150'});
	sym.$("TriggerRana2").css({'z-index':'150'});
	sym.$("TriggerRana3").css({'z-index':'150'});
	sym.$("TriggerRana4").css({'z-index':'150'});
	sym.$("TriggerRana5").css({'z-index':'150'});
	sym.$("TriggerRana6").css({'z-index':'150'});
	sym.$("TriggerRana7").css({'z-index':'150'});


function init(){

		resetRane();

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
						}	
			};


         $(".numeris").hide();
         $(".reload").hide();

         	/*	 $(".fiore").bind(toccomagico, function(){
         		  		sym.getSymbol(this).play("in");
         		 });

			       var AudioFoglie = null;
			       function playAudioFoglie (src) {
			       if((navigator.userAgent.match(/android/gi))){src = '/android_asset/www/' + src;}
			            AudioFoglie = new Media(src);
			            AudioFoglie.play();
			        }       
					$(".foglie-spare").bind(toccomagico, function(){
					   	sym.getSymbol(this).play("in");		
						playAudioFoglie("audio/grass1.mp3");
					});   */      

/**********LA CONTA START**********/         		 

			       var AudioRana = null;
			       function playAudioRana (src) {
			       if((navigator.userAgent.match(/android/gi))){src = '/android_asset/www/' + src;}
			            AudioRana = new Media(src);
			            AudioRana.play();
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

					playAudioRana("audio/boing_01.mp3");
         			$(".numeris").hide();
         			sym.getSymbol("numerazio").$('Num-'+value).show();
         			sym.getSymbol("numerazio").play("in");

         			sym.getSymbol("Scoiattolo").play("ani");

						if ( value >= 7 ){

         				 $(".reload").fadeIn();
         				// sym.getSymbol("Scoiattolo").play("ultima6");

         				};





         		 });
/**********LA CONTA STOP**********/         		 


         		  $(".reload").bind(toccomagico, function(){
							sym.getSymbol(".reload").play("in");

							resetRane();

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




			       var AudioWaterSplash = null;
			       function playAudioWaterSplash (src) {
			       if((navigator.userAgent.match(/android/gi))){src = '/android_asset/www/' + src;}
			            AudioAudioWaterSplash = new Media(src);
			            AudioAudioWaterSplash.play();
			        }



        		  sym.$("triggerwater1").bind(toccomagico, function(){
         		  		sym.getSymbol("ninfeabig1-water").play("in");
         		  		playAudioWaterSplash("audio/watersplash.mp3");		         		  		
	         	  });
	         	  sym.$("triggerwater2").bind(toccomagico, function(){
	         		  		sym.getSymbol("ninfeabig2-water").play("in");
	         		  		playAudioWaterSplash("audio/watersplash.mp3");		         		  		
	         	  });        		 





          		 sym.$("TriggerRana1").bind(toccomagico, function(){
         		  		sym.getSymbol("rana1").play("in");
         		  		sym.getSymbol("ninfeabig1-water").play("in");		         		  		
         		  		fumelo();
         		 });
         		 sym.$("TriggerRana2").bind(toccomagico, function(){
         		  		sym.getSymbol("rana2").play("in");
         		  		sym.getSymbol("ninfeabig1-water").play("in");			         		  		
         		  		fumelo();
         		 });
         		 sym.$("TriggerRana3").bind(toccomagico, function(){
         		  		sym.getSymbol("rana3").play("in");
         		  		sym.getSymbol("ninfeabig2-water").play("in");		         		  		
         		  		fumelo();
         		 });
         		 sym.$("TriggerRana4").bind(toccomagico, function(){
         		  		sym.getSymbol("rana4").play("in");
         		  		sym.getSymbol("ninfeabig2-water").play("in");		         		  		
         		  		fumelo();
         		 });
         		 sym.$("TriggerRana5").bind(toccomagico, function(){
         		  		sym.getSymbol("rana5").play("in");
         		  		sym.getSymbol("ninfeabig2-water").play("in");		         		  		
         		  		fumelo();
         		 });
         		 sym.$("TriggerRana6").bind(toccomagico, function(){
         		  		sym.getSymbol("rana6").play("in");
         		  		sym.getSymbol("ninfeabig1-water").play("in");			         		  		
         		  		fumelo();
         		 });
         		 sym.$("TriggerRana7").bind(toccomagico, function(){
         		  		sym.getSymbol("rana7").play("in");
         		  		sym.getSymbol("ninfeabig1-water").play("in");			         		  		
         		  		fumelo();
         		 });   			 


/**********PECORA START**********/         		 

			       var AudioPecora = null;
			       function playAudioPecora (src) {
			       if((navigator.userAgent.match(/android/gi))){src = '/android_asset/www/' + src;}
			            AudioPecora = new Media(src);
			            AudioPecora.play();
			        }       
					sym.$("Trigger-Pecora").bind(toccomagico, function(){
						sym.getSymbol("Pecora").play("in");	
						playAudioPecora("audio/pecora.mp3");
					});  



/**********PECORA STOP**********/

/**********SCOIATTOLO START**********/
         		 sym.$("trigger-coda").bind(toccomagico, function(){
         		  		sym.getSymbol("Scoiattolo").play("coda");
         		 });	 

 					var i=0;
					setInterval(function() {
						 sym.getSymbol("Scoiattolo").play("coda");
					}, 10000);


					setInterval(function() {
						 switch(i++%3) {
							  case 0: sym.getSymbol("ninfeabig1-water").play("in");
							  break;
							  case 1: sym.getSymbol("ninfeabig2-water").play("in");
							  break;
						 }
					}, 7000);

/*
         		  var clicked = 0;
         		  sym.$("Scoiattolo").bind(toccomagico, function (e) {
         			  clicked++;
         			  if (clicked >= 6) {
         					clicked = 0;
         					sym.getSymbol("Scoiattolo").play("speciale");
         			  } else {
         					return false;
         			  }
         		 });	*/

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
		    	playAudioVoce('audio/quadri/Q7.mp3');
      	    });
/**********FUMELLO STOP**********/ 


/**********MENU START**********/
      	avanti = "Quadro8.html";
      	indietro = "Quadro6.html";
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


      sym.$('giuncamento').toggle(function () {
          sym.getSymbol('giuncamento').play("soffiogiunchiuno");
      }, function () {
           sym.getSymbol('giuncamento').play("soffiogiunchidue");
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
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2339, function(sym, e) {
         sym.stop(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 529, function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop(0);

      });
      //Edge binding end

   })("Scoiattolo");
   //Edge symbol end:'Scoiattolo'

   //=========================================================
   
   //Edge symbol: 'Pecora'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop(0);

      });
      //Edge binding end

   })("Pecora");
   //Edge symbol end:'Pecora'

   //=========================================================
   
   //Edge symbol: 'ranaanim'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 851, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 198, function(sym, e) {
         $(".ranas1").css({'z-index':'99'});

      });
      //Edge binding end

   })("rana1");
   //Edge symbol end:'rana1'

   //=========================================================
   
   //Edge symbol: 'rana1_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 198, function(sym, e) {
         $(".ranas2").css({'z-index':'99'});

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 851, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("rana2");
   //Edge symbol end:'rana2'

   //=========================================================
   
   //Edge symbol: 'rana1_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 198, function(sym, e) {
         $(".ranas3").css({'z-index':'99'});

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 851, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("rana3");
   //Edge symbol end:'rana3'

   //=========================================================
   
   //Edge symbol: 'rana1_3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 198, function(sym, e) {
         $(".ranas4").css({'z-index':'99'});

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 851, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("rana4");
   //Edge symbol end:'rana4'

   //=========================================================
   
   //Edge symbol: 'rana1_4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 198, function(sym, e) {
         $(".ranas5").css({'z-index':'99'});

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 851, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("rana5");
   //Edge symbol end:'rana5'

   //=========================================================
   
   //Edge symbol: 'rana1_5'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 198, function(sym, e) {
         $(".ranas6").css({'z-index':'99'});

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 851, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("rana6");
   //Edge symbol end:'rana6'

   //=========================================================
   
   //Edge symbol: 'rana1_6'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 198, function(sym, e) {
         $(".ranas7").css({'z-index':'99'});

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 851, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("rana7");
   //Edge symbol end:'rana7'

   //=========================================================
   
   //Edge symbol: 'giunco'
   (function(symbolName) {   
   
   })("giunco");
   //Edge symbol end:'giunco'

   //=========================================================
   
   //Edge symbol: 'giuncamento'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         sym.stop(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14250, function(sym, e) {
         sym.stop(0);

      });
      //Edge binding end

   })("giuncamento");
   //Edge symbol end:'giuncamento'

   //=========================================================
   
   //Edge symbol: 'giuncame-water'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3078, function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop(0);

      });
      //Edge binding end

   })("giuncame-water");
   //Edge symbol end:'giuncame-water'

   //=========================================================
   
   //Edge symbol: 'ninfeabig-water'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3750, function(sym, e) {
         sym.stop(0);

      });
      //Edge binding end

   })("ninfeabig-water");
   //Edge symbol end:'ninfeabig-water'

   //=========================================================
   
   //Edge symbol: 'ninfeabig2-water'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         sym.stop(0);

      });
      //Edge binding end

   })("ninfeabig2-water");
   //Edge symbol end:'ninfeabig2-water'

})(jQuery, AdobeEdge, "Quadro-07");