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
         },
         {
            id:'TextCopy2',
            type:'text',
            rect:['632px','93px','139px','103px','auto','auto'],
            text:"Q8",
            align:"center",
            font:['Arial, Helvetica, sans-serif',94,"rgba(0,0,0,1)","normal","none",""]
         },
         {
            id:'TextCopy3',
            type:'text',
            rect:['265px','275px','139px','103px','auto','auto'],
            text:"Q9",
            align:"center",
            font:['Arial, Helvetica, sans-serif',94,"rgba(0,0,0,1)","normal","none",""]
         },
         {
            id:'TextCopy4',
            type:'text',
            rect:['512px','275px','139px','103px','auto','auto'],
            text:"Q10",
            align:"center",
            font:['Arial, Helvetica, sans-serif',94,"rgba(0,0,0,1)","normal","none",""]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_TextCopy4}": [
            ["style", "top", '275px'],
            ["style", "text-align", 'center'],
            ["style", "font-size", '94px'],
            ["style", "left", '512px'],
            ["style", "width", '139px']
         ],
         "${_TextCopy3}": [
            ["style", "top", '275px'],
            ["style", "text-align", 'center'],
            ["style", "width", '139px'],
            ["style", "left", '265px'],
            ["style", "font-size", '94px']
         ],
         "${_Text}": [
            ["style", "top", '102px'],
            ["style", "text-align", 'center'],
            ["style", "font-size", '94px'],
            ["style", "left", '210px'],
            ["style", "width", '139px']
         ],
         "${_TextCopy2}": [
            ["style", "top", '93px'],
            ["style", "text-align", 'center'],
            ["style", "font-size", '94px'],
            ["style", "left", '632px'],
            ["style", "width", '139px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '1024px'],
            ["style", "height", '768px'],
            ["style", "overflow", 'hidden']
         ],
         "${_TextCopy}": [
            ["style", "top", '102px'],
            ["style", "text-align", 'center'],
            ["style", "width", '139px'],
            ["style", "left", '433px'],
            ["style", "font-size", '94px']
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
