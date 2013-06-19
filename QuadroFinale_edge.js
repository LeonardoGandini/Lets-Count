/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['luckiest-guy, sans-serif']='<script src=\"http://use.edgefonts.net/luckiest-guy:n4:all.js\"></script>';


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'Text',
            type:'text',
            rect:['351px','348px','321px','72px','auto','auto'],
            text:"Quadro Finale!",
            align:"center",
            font:['luckiest-guy, sans-serif',40,"rgba(210,14,14,1.00)","normal","none",""]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '768px'],
            ["style", "width", '1024px']
         ],
         "${_Text}": [
            ["style", "top", '348px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(210,14,14,1.00)'],
            ["style", "font-family", 'luckiest-guy, sans-serif'],
            ["style", "left", '351px'],
            ["style", "font-size", '40px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "QuadroFinale");
