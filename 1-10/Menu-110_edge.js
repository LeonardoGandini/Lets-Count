/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'Text',
            type:'text',
            rect:['210px','102px','139px','103px','auto','auto'],
            text:"Q6",
            align:"center",
            font:['Arial, Helvetica, sans-serif',94,"rgba(0,0,0,1)","normal","none",""]
         },
         {
            id:'TextCopy',
            type:'text',
            rect:['433px','102px','139px','103px','auto','auto'],
            text:"Q7",
            align:"center",
            font:['Arial, Helvetica, sans-serif',94,"rgba(0,0,0,1)","normal","none",""]
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
            ["style", "top", '102px'],
            ["style", "text-align", 'center'],
            ["style", "width", '139px'],
            ["style", "left", '210px'],
            ["style", "font-size", '94px']
         ],
         "${_TextCopy}": [
            ["style", "top", '102px'],
            ["style", "text-align", 'center'],
            ["style", "font-size", '94px'],
            ["style", "left", '433px'],
            ["style", "width", '139px']
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
})(jQuery, AdobeEdge, "LC-110-Menu");
