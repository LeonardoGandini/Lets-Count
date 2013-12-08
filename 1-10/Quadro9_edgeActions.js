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
        			playAudioVoce('audio/quadri/Q9.mp3');
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
			var Audio8 = null;
			var Audio9 = null;

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
						},
			    suono8: function playAudio8 (src) {
								seAndroid(); 
							    Audio8 = new Media(src);
							    Audio8.play();   
						},
			    suono9: function playAudio9 (src) {
								seAndroid(); 
							    Audio9 = new Media(src);
							    Audio9.play();   
						}	

			};


         $(".numeris").hide();
         $(".reload").hide();

/**********LA CONTA START**********/         		 

			       var AudioBunny = null;
			       function playAudioBunny (src) {
			       seAndroid();
			            AudioBunny = new Media(src);
			            AudioBunny.play();
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

						playAudioBunny("audio/boingbunny.mp3");

         			$(".numeris").hide();
         			sym.getSymbol("numerazio").$('Num-'+value).show();
         			sym.getSymbol("numerazio").play("in");

         			sym.getSymbol("Scoiattolo").play("ani");

						if ( value >= 9 ){

         				 $(".reload").fadeIn();
         				// sym.getSymbol("Scoiattolo").play("ultima6");

         				};





         		 });
/**********LA CONTA STOP**********/         		 


         		  $(".reload").bind(toccomagico, function(){

							sym.getSymbol(this).play("in");

						    sym.getComposition().getStage().getSymbol("cespuglissimo").getSymbol("bunny1").stop(0);
						    sym.getComposition().getStage().getSymbol("cespuglissimo").getSymbol("bunny2").stop(0);
						    sym.getComposition().getStage().getSymbol("cespuglissimo").getSymbol("bunny3").stop(0);
						    sym.getComposition().getStage().getSymbol("cespuglissimo").getSymbol("bunny4").stop(0);
						    sym.getComposition().getStage().getSymbol("cespuglissimo").getSymbol("bunny5").stop(0);
						    sym.getComposition().getStage().getSymbol("cespuglissimo").getSymbol("bunny6").stop(0);
						    sym.getComposition().getStage().getSymbol("cespuglissimo").getSymbol("bunny7").stop(0);
						    sym.getComposition().getStage().getSymbol("cespuglissimo").getSymbol("bunny8").stop(0);
						    sym.getComposition().getStage().getSymbol("cespuglissimo").getSymbol("bunny9").stop(0);

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




			       var AudioGufo = null;
			       function playAudioGufo (src) {
			       seAndroid();
			            AudioGufo = new Media(src);
			            AudioGufo.play();
			        }



	         	  sym.$("Trigger-Gufo").bind(toccomagico, function(){
	         		  		sym.getSymbol("alberogufo").play("in");
	         		  		playAudioGufo("audio/gufo1.mp3");		         		  		
	         	  });        		 





          		 sym.$("trigger-bunny1").bind(toccomagico, function(){
         		  		sym.getSymbol(".bunny1").play("uscita");
	  						fumelo();
         		 });
          		 sym.$("trigger-bunny2").bind(toccomagico, function(){
         		  		sym.getSymbol(".bunny2").play("uscita");
	  						fumelo();
         		 });
          		 sym.$("trigger-bunny3").bind(toccomagico, function(){
         		  		sym.getSymbol(".bunny3").play("uscita");
	  						fumelo();
         		 });
          		 sym.$("trigger-bunny4").bind(toccomagico, function(){
         		  		sym.getSymbol(".bunny4").play("uscita");
	  						fumelo();
         		 });
          		 sym.$("trigger-bunny5").bind(toccomagico, function(){
         		  		sym.getSymbol(".bunny5").play("uscita");
	  						fumelo();
         		 });
          		 sym.$("trigger-bunny6").bind(toccomagico, function(){
         		  		sym.getSymbol(".bunny6").play("uscita");
	  						fumelo();
         		 });
          		 sym.$("trigger-bunny7").bind(toccomagico, function(){
         		  		sym.getSymbol(".bunny7").play("uscita");
	  						fumelo();
         		 });
          		 sym.$("trigger-bunny8").bind(toccomagico, function(){
         		  		sym.getSymbol(".bunny8").play("uscita");
	  						fumelo();
         		 });
          		 sym.$("trigger-bunny9").bind(toccomagico, function(){
         		  		sym.getSymbol(".bunny9").play("uscita");
	  						fumelo();
         		 });



/**********SCOIATTOLO START**********/
         		 sym.$("trigger-coda").bind(toccomagico, function(){
         		  		sym.getSymbol("Scoiattolo").play("coda");
         		 });	 

 					var i=0;
					setInterval(function() {
						 sym.getSymbol("Scoiattolo").play("coda");
					}, 5500);


					/*setInterval(function() {
						 switch(i++%3) {
							  case 0: sym.getSymbol("ninfeabig1-water").play("in");
							  break;
							  case 1: sym.getSymbol("ninfeabig2-water").play("in");
							  break;
						 }
					}, 7000);*/

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
		    	playAudioVoce('audio/quadri/Q9.mp3');
      	    });
/**********FUMELLO STOP**********/ 


/**********MENU START**********/
      	avanti = "Quadro10.html";
      	indietro = "Quadro8.html";
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
   
   //Edge symbol: 'cespuglissimo'
   (function(symbolName) {   
   
   })("cespuglissimo");
   //Edge symbol end:'cespuglissimo'

   //=========================================================
   
   //Edge symbol: 'alberogufo'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1975, function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop(0);

      });
      //Edge binding end

   })("alberogufo");
   //Edge symbol end:'alberogufo'

   //=========================================================
   
   //Edge symbol: 'bunny'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("bunny");
   //Edge symbol end:'bunny'

})(jQuery, AdobeEdge, "Quadro-09");