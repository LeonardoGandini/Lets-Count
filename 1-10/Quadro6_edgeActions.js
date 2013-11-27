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
         //yepnope({load: ["cordova.js"],complete: init});
         
         toccomagico = 'click touchstart MSPointerDown pointerdown'
         //$(".num-10").css({'display':'none'});
         
         function init(){
         $(".numeris").hide();
         sym.$("resetto").css({'display':'none'});
         //sym.$("resetto").off(toccomagico);
         
         		 $(".fiore, .foglie-spare").bind(toccomagico, function(){
         		  		sym.getSymbol(this).play("in");
         		 });
         
         		 $(".fogliebird").bind(toccomagico, function(){
         
         		  		$(this).addClass("clicked");
         			 	var value = $(".clicked").length;
         			 	//alert(value);
         			 	sym.$('temp'+ value).css({'color':'red'});
         
         			$(".numeris").hide();
         			sym.getSymbol("numerazio").$('Num-'+ value).show();
         			sym.getSymbol("numerazio").play("in");
         
         			sym.getSymbol("Scoiattolo").play("ani");
         
         
         			 if ( value >= 6 ){
         
         				 sym.$("resetto").css({'display':'block'});
         				 //sym.$("resetto").on(toccomagico);
         				 
         				 sym.getSymbol("Scoiattolo").play("ultima6");
         					/*
         					sym.getSymbol('Bird-1').stop(0);
         					sym.getSymbol("Bird-2").stop(0);
         					sym.getSymbol("Bird-3").stop(0);
         					sym.getSymbol("Bird-4").stop(0);
         					sym.getSymbol("Bird-5").stop(0);
         					sym.getSymbol("Bird-6").stop(0);
         
         
         					//sym.$('[id^=Stage_Bird-]').stop(0);
         					$(".fogliebird").removeClass("clicked");
         
         					sym.$('[id^=Stage_temp]').css({'color':'black'});
         */
         				};
         			 	//sym.$("resetto").hide()
         
         
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
         					//sym.$("resetto").off(toccomagico);
         			 });
         
         
         
         		 sym.$("foglie-bird-1").bind(toccomagico, function(){
         		  		sym.getSymbol("Bird-1").play("in");
         		 });
         		 sym.$("foglie-bird-2").bind(toccomagico, function(){
         		  		sym.getSymbol("Bird-2").play("in");
         		 });
         		sym.$("foglie-bird-3").bind(toccomagico, function(){
         		  		sym.getSymbol("Bird-3").play("in");
         		 });
         		 sym.$("foglie-bird-4").bind(toccomagico, function(){
         		  		sym.getSymbol("Bird-4").play("in");
         		 });
         		 sym.$("foglie-bird-5").bind(toccomagico, function(){
         		  		sym.getSymbol("Bird-5").play("in");
         		 });
         		 sym.$("foglie-bird-6").bind(toccomagico, function(){
         		  		sym.getSymbol("Bird-6").play("in");
         		 });
         
         
         
         
         		 /*			 	 
         		 sym.$("Scoiattolo").bind(toccomagico, function(){
         		  		sym.getSymbol(this).play("in");
         		 });
         		 */			 
         		 sym.$("trigger-mucca-testa").bind(toccomagico, function(){
         		  		sym.getSymbol("Mucca").play("testa");
         		 });	 		 
         		 sym.$("trigger-mucca-coda").bind(toccomagico, function(){
         		  		sym.getSymbol("Mucca").play("coda");
         		 });			 
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
         		 })	
         		 
         		 
         
         }/*FINE INIT*/
         
         init();

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

})(jQuery, AdobeEdge, "Quadro-06");