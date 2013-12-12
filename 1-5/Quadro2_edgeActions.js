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


function init(){

         $(".numeris").hide();
         $(".reload").css({'display':'none'});

       document.addEventListener("deviceready", onDeviceReady, false);

       var my_media = null;
       var AudioQ2 = null;
       var AudioApi = null;
       var AudioAnt = null;
       var AudioFoglie = null;

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
        
       function playAudioQ2 (src) {
        if((navigator.userAgent.match(/android/gi))){src = '/android_asset/www/' + src;} 
            AudioQ2 = new Media(src);
            AudioQ2.play();   
        }

       function playAudioFoglie (src) {
        if((navigator.userAgent.match(/android/gi))){src = '/android_asset/www/' + src;} 
            AudioFoglie = new Media(src);
            AudioFoglie.play();   
        }

       function playAudioApi (src) {
        if((navigator.userAgent.match(/android/gi))){src = '/android_asset/www/' + src;} 
            AudioApi = new Media(src);
            AudioApi.play();   
        }

       function playAudioAnt (src) {
        if((navigator.userAgent.match(/android/gi))){src = '/android_asset/www/' + src;} 
            AudioAnt = new Media(src);
            AudioAnt.play();   
        }

        
        function onDeviceReady() {

        	setTimeout(function(){
        			playAudioQ2("Suoni/quadri/Q2.mp3");
        		},2000);      

			        	(function(){
			    playAudio("Suoni/LaMadeline.mp3");
			    setTimeout(arguments.callee, 301200);
			})();			

        }


			var Audio1 = null;
			var Audio2 = null;

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
						}
			};

/**********LA CONTA START**********/         		 


 	       var AudioCip = null;
	       function playAudioCip (src) {
	      		if((navigator.userAgent.match(/android/gi))){src = '/android_asset/www/' + src;}
	            AudioCip = new Media(src);
	            AudioCip.play();
	        }          		

         		 $(".triggers").bind(toccomagico, function(){

         		  	$(this).addClass("clicked");
         			var value = $(".clicked").length;

						sym.getSymbol(".menu").play();

						suonatore['suono'+ value]('Suoni/numbers/S00'+ value +'.mp3');
						sym.$('.fumnum'+ value).css({'background-image': 'url(images/svgNum'+value+'.svg)'});

						setTimeout(function(){
								sym.getSymbol(".menu").play("chiusura");
						},2500); 					

         			$(".numeris").hide();
         			sym.getSymbol("numerazio").$('Num-'+value).show();
         			sym.getSymbol("numerazio").play("in");

         			sym.getSymbol("Scoiattolo").play("ani");

						if ( value >= 2 ){

         				 $(".reload").fadeIn();

         			};


         		 });

         		 sym.$("Cavolo_Trigger1").bind(toccomagico, function(){
         		  		sym.getSymbol("CAVOLO_BIG_1").play("in");         		  		
         		  		fumelo();
         		 });
         		 sym.$("Cavolo_Trigger2").bind(toccomagico, function(){
         		  		sym.getSymbol("CAVOLO_BIG_2").play("in");
         		  		fumelo();
         		 });         		 
/**********LA CONTA STOP**********/         		 


         		  $(".reload").bind(toccomagico, function(){
						sym.getSymbol(this).play("in");

         		  	        sym.getSymbol("CAVOLO_BIG_1").stop(0);
         					sym.getSymbol("CAVOLO_BIG_2").stop(0);


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


         $(".playvoce").bind(toccomagico, function(){
      		sym.getSymbol(this).play("in");
		 	playAudioQ2('Suoni/quadri/Q2.mp3');
      	 });

	      $(".cavolini").bind(toccomagico, function(){
	      	sym.getSymbol(this).play("in");
		 	playAudioFoglie('Suoni/foglia.mp3');
	      });

	      $(".apibutton").bind(toccomagico, function(){
	      	sym.getSymbol(".api").play("in");
			 	playAudioApi ('Suoni/Bees.mp3');
	      });

	      $(".formica").bind(toccomagico, function(){
			playAudioAnt ('Suoni/Lumaca01.mp3');
	      	$(this).animate({top:'-=20px'},"140");
	      	$(this).animate({top:'+=20px'},"1");
	      });



     $('.musica').toggle(function () {
          $(".musicasvg").css({'background-image': 'url(images/svg-musicBW.svg)'});
          	pauseAudio();
      }, function () {
          $(".musicasvg").css({'background-image': 'url(images/svg-music.svg)'});
         (function(){
			    playAudio("Suoni/Ghost.mp3");
			    setTimeout(arguments.callee, 301200);
			})();			

      });
      
      
   $("#prelo").css({'display':'none'});



      sym.$(".Nuvola").css({'-webkit-filter': 'drop-shadow(0 5px 15px rgba(0,0,0,.4))'});


      $(".fioreani, .innaffia").bind(toccomagico, function(){
      	sym.getSymbol(this).play("in");
      });


      sym.getSymbol(".coda").play("in");
      $(".codatrigger").bind(toccomagico, function(){
      	sym.getSymbol(".coda").play("animaziocoda");
      });
      $(".Sole_Button").bind(toccomagico, function(){
      	sym.getSymbol(".SOLE").play("in");
      });


      sym.getSymbol("FUMELLO").play("in");


      /*MENU START*/
      	avanti = "Quadro3.html";
      	indietro = "Quadro1.html";
      	$(".next, .prev, .musica, .home").bind(toccomagico, function(){
      		sym.getSymbol(this).play("in");
      	});

      	$(".testina").bind(toccomagico, function(){
      			sym.getSymbol(".menu").play();
      	});
  
      	sym.$(".next, .prev").css({'-webkit-filter': 'drop-shadow(0 5px 10px rgba(0,0,0,.5))'});
      /*MENU STOP*/

      		        
};/*INIT STOP*/      



   

      });//Edge binding end
      

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   
   //Edge symbol: 'CAROTA'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 375, function(sym, e) {
         sym.getSymbol(".testa").play("in");
         sym.getSymbol(".braccio").play("in");

      });
      //Edge binding end

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      

   })("Cavolo");
   //Edge symbol end:'Cavolo'

   //=========================================================
   
   //Edge symbol: 'FUMELLO'
   (function(symbolName) {   
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 614, function(sym, e) {
         sym.stop();
      
      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop(0);
      
      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.play();
      
      });
      //Edge binding end
      
      
      
      
      
      
      
      
      
      Symbol.bindElementAction(compId, symbolName, "${_Rectangle}", "touchstart MSPointerDown", function(sym, e) {
         sym.play(1000);
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_Fumello}", "touchstart MSPointerDown", function(sym, e) {
         sym.play();
      
      });
      //Edge binding end

   })("FUMELLO");
   //Edge symbol end:'FUMELLO'

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
   
   //Edge symbol: 'Preloader'
   (function(symbolName) {   
   
   })("Preloader");
   //Edge symbol end:'Preloader'

   //=========================================================
   
   //Edge symbol: 'Coda'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 633, function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop(0);

      });
      //Edge binding end

   })("Coda");
   //Edge symbol end:'Coda'

   //=========================================================
   
   //Edge symbol: 'SCOIATTOLO'
   (function(symbolName) {   
   
   })("SCOIATTOLO");
   //Edge symbol end:'SCOIATTOLO'

   //=========================================================
   
   //Edge symbol: 'SOLE'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2288, function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop(0);

      });
      //Edge binding end

   })("SOLE");
   //Edge symbol end:'SOLE'

   //=========================================================
   
   //Edge symbol: 'Trattore'
   (function(symbolName) {   
   
   })("Trattore");
   //Edge symbol end:'Trattore'

   //=========================================================
   
   //Edge symbol: 'Fumo'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("Fumo");
   //Edge symbol end:'Fumo'

   //=========================================================
   
   //Edge symbol: 'Giallo'
   (function(symbolName) {   
   
   })("Giallo");
   //Edge symbol end:'Giallo'

   //=========================================================
   
   //Edge symbol: 'Viola'
   (function(symbolName) {   
   
   })("Viola");
   //Edge symbol end:'Viola'

   //=========================================================
   
   //Edge symbol: 'contenitoretesta'
   (function(symbolName) {   
   
   })("contenitoretesta");
   //Edge symbol end:'contenitoretesta'

   //=========================================================
   
   //Edge symbol: 'Cavolo_1'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 385, function(sym, e) {
         sym.getSymbol(".testa").play("in");
         sym.getSymbol(".braccio").play("in");

      });
         //Edge binding end

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2593, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      

      })("Cavolo_2");
   //Edge symbol end:'Cavolo_2'

   //=========================================================
   
   //Edge symbol: 'Cavolino'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("Cavolino");
   //Edge symbol end:'Cavolino'

   //=========================================================
   
   //Edge symbol: 'Api'
   (function(symbolName) {   
   
   })("Api");
   //Edge symbol end:'Api'

   //=========================================================
   
   //Edge symbol: 'Braccio'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("Braccio");
   //Edge symbol end:'Braccio'

   //=========================================================
   
   //Edge symbol: 'Innaffiatoio'
   (function(symbolName) {   
   
      

   })("Innaffiatoio");
   //Edge symbol end:'Innaffiatoio'

   //=========================================================
   
   //Edge symbol: 'APONA'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 55000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("APONA");
   //Edge symbol end:'APONA'

   //=========================================================
   
   //Edge symbol: 'ContenitoreCoda'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 30000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("ContenitoreCoda");
   //Edge symbol end:'ContenitoreCoda'

   //=========================================================
   
   //Edge symbol: 'Formiche'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 72000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("Formiche");
   //Edge symbol end:'Formiche'

   //=========================================================
   
   //Edge symbol: 'play'
   (function(symbolName) {   
   
   })("play");
   //Edge symbol end:'play'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'testina'
   (function(symbolName) {   
   
   })("testina");
   //Edge symbol end:'testina'

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
   
   //Edge symbol: 'NEXT_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 140, function(sym, e) {
         window.open(indietro, "_self");

      });
         //Edge binding end

      })("PREV");
   //Edge symbol end:'PREV'

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
   
   //Edge symbol: 'reload'
   (function(symbolName) {   
   
   })("reload");
   //Edge symbol end:'reload'

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

   //=========================================================
   
   //Edge symbol: 'numerazio'
   (function(symbolName) {   
   
   })("numerazio");
   //Edge symbol end:'numerazio'

})(jQuery, AdobeEdge, "Quadro02");