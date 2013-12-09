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
         window.open("Quadro6.html", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_TextCopy}", "touchstart", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("Quadro7.html", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_TextCopy2}", "touchstart", function(sym, e) {
         window.open("Quadro8.html", "_self");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_TextCopy3}", "touchstart", function(sym, e) {
         window.open("Quadro9.html", "_self");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_TextCopy4}", "touchstart", function(sym, e) {
         window.open("Quadro10.html", "_self");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "LC-110-Menu");