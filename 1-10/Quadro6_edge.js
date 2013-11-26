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
            id:'G-Cielo',
            type:'image',
            rect:['-111px','-15px','1300px','647px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"G-Cielo.png",'0px','0px']
         },
         {
            id:'Q6-fattoria',
            type:'image',
            rect:['-51px','333px','460px','234px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q6-fattoria.png",'0px','0px'],
            transform:[[],[],[],['0.93913','0.93913']]
         },
         {
            id:'Mucca',
            type:'rect',
            rect:['451px','292px','auto','auto','auto','auto']
         },
         {
            id:'Q6-prato',
            type:'image',
            rect:['-16px','332px','1066px','473px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q6-prato.png",'0px','0px']
         },
         {
            id:'Q6-fogline',
            type:'image',
            rect:['592px','657px','112px','80px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q6-fogline.png",'0px','0px'],
            transform:[[],[],[],['0.55777','0.55777']]
         },
         {
            id:'Q6-foglineCopy',
            type:'image',
            rect:['299px','551px','112px','80px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q6-fogline.png",'0px','0px'],
            transform:[[],[],[],['0.54','0.54']]
         },
         {
            id:'Q6-foglineCopy2',
            type:'image',
            rect:['795px','449px','112px','80px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q6-fogline.png",'0px','0px'],
            transform:[[],[],[],['0.45','0.45']]
         },
         {
            id:'Q6-foglia-albero2',
            type:'image',
            rect:['61px','607px','128px','159px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q6-foglia-albero2.png",'0px','0px'],
            transform:[[],[],[],['0.67187','0.52201']]
         },
         {
            id:'Q6-albero',
            type:'image',
            rect:['-41px','6px','558px','729px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q6-albero.png",'0px','0px'],
            transform:[[],[],[],['1.05418','1.05418']]
         },
         {
            id:'Scoiattolo',
            type:'rect',
            rect:['353px','225px','auto','auto','auto','auto'],
            transform:[[],[],[],['0.91927','0.91927']]
         },
         {
            id:'Q6-foglia-albero3',
            type:'image',
            rect:['173px','597px','139px','138px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q6-foglia-albero3.png",'0px','0px'],
            transform:[[],[],[],['0.70376','0.70376']]
         },
         {
            id:'Bird2',
            type:'rect',
            rect:['503px','296px','auto','auto','auto','auto']
         },
         {
            id:'foglie-bird',
            type:'rect',
            rect:['268','164','auto','auto','auto','auto']
         },
         {
            id:'Bird2Copy6',
            type:'rect',
            rect:['503px','296px','auto','auto','auto','auto']
         },
         {
            id:'foglie-birdCopy2',
            type:'rect',
            rect:['268','164','auto','auto','auto','auto']
         },
         {
            id:'foglie-birdCopy',
            type:'rect',
            rect:['268','164','auto','auto','auto','auto']
         },
         {
            id:'Fiore-Bianco',
            type:'rect',
            rect:['1400','212','auto','auto','auto','auto']
         },
         {
            id:'Fiore-Giallo',
            type:'rect',
            rect:['1525','198','auto','auto','auto','auto']
         },
         {
            id:'Fiore-Arancione',
            type:'rect',
            rect:['1697','208','auto','auto','auto','auto']
         },
         {
            id:'Fiore-Rosa',
            type:'rect',
            rect:['1273','223','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'Fiore-Bianco',
            symbolName:'Fiore-Bianco'
         },
         {
            id:'Fiore-Rosa',
            symbolName:'Fiore-Rosa'
         },
         {
            id:'Fiore-Arancione',
            symbolName:'Fiore-Arancione'
         },
         {
            id:'Mucca',
            symbolName:'Mucca'
         },
         {
            id:'Scoiattolo',
            symbolName:'Scoiattolo'
         },
         {
            id:'foglie-bird',
            symbolName:'foglie-bird'
         },
         {
            id:'Bird2Copy6',
            symbolName:'Bird'
         },
         {
            id:'foglie-birdCopy2',
            symbolName:'foglie-bird'
         },
         {
            id:'Bird2',
            symbolName:'Bird'
         },
         {
            id:'foglie-birdCopy',
            symbolName:'foglie-bird'
         },
         {
            id:'Fiore-Giallo',
            symbolName:'Fiore-Giallo'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Scoiattolo}": [
            ["style", "top", '225px'],
            ["transform", "scaleX", '0.91927'],
            ["transform", "scaleY", '0.91927'],
            ["style", "left", '353px']
         ],
         "${_Q6-fattoria}": [
            ["style", "top", '333px'],
            ["transform", "scaleY", '0.93913'],
            ["style", "height", '234px'],
            ["transform", "scaleX", '0.93913'],
            ["style", "left", '-51px'],
            ["style", "width", '460px']
         ],
         "${_Mucca}": [
            ["style", "-webkit-transform-origin", [47.66,95.92], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [47.66,95.92],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [47.66,95.92],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [47.66,95.92],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [47.66,95.92],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.49176'],
            ["transform", "scaleX", '0.49176'],
            ["style", "left", '625px'],
            ["style", "top", '42px']
         ],
         "${_G-Cielo}": [
            ["style", "left", '-111px'],
            ["style", "top", '-15px']
         ],
         "${_Fiore-Giallo}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.73923'],
            ["transform", "scaleX", '0.73923'],
            ["style", "left", '875px'],
            ["style", "top", '371px']
         ],
         "${_foglie-birdCopy}": [
            ["style", "left", '168px'],
            ["style", "top", '249px']
         ],
         "${_Q6-fogline}": [
            ["style", "top", '657px'],
            ["transform", "scaleX", '0.55777'],
            ["transform", "scaleY", '0.55777'],
            ["style", "left", '592px']
         ],
         "${_foglie-birdCopy2}": [
            ["style", "left", '255px'],
            ["style", "top", '269px']
         ],
         "${_Fiore-Rosa}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.90441'],
            ["transform", "scaleX", '0.90441'],
            ["style", "left", '873px'],
            ["style", "top", '578px']
         ],
         "${_Q6-albero}": [
            ["style", "top", '6px'],
            ["transform", "scaleY", '1.05418'],
            ["style", "height", '729px'],
            ["transform", "scaleX", '1.05418'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '-41px'],
            ["style", "width", '558px']
         ],
         "${_Bird2Copy6}": [
            ["transform", "scaleX", '0.34259'],
            ["style", "left", '197px'],
            ["transform", "scaleY", '0.34259'],
            ["style", "top", '169px']
         ],
         "${_Fiore-Arancione}": [
            ["style", "-webkit-transform-origin", [49.14,105.99], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [49.14,105.99],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [49.14,105.99],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [49.14,105.99],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [49.14,105.99],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.86014'],
            ["transform", "scaleX", '0.86014'],
            ["style", "left", '699px'],
            ["style", "top", '531px']
         ],
         "${_Q6-foglia-albero3}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.70376'],
            ["transform", "scaleX", '0.70376'],
            ["style", "left", '173px'],
            ["style", "top", '597px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '768px'],
            ["style", "width", '1024px']
         ],
         "${_Q6-foglineCopy}": [
            ["transform", "scaleX", '0.54'],
            ["style", "left", '299px'],
            ["transform", "scaleY", '0.54'],
            ["style", "top", '551px']
         ],
         "${_foglie-bird}": [
            ["style", "left", '81px'],
            ["style", "top", '269px']
         ],
         "${_Q6-foglia-albero2}": [
            ["style", "top", '607px'],
            ["transform", "scaleX", '0.67187'],
            ["transform", "scaleY", '0.52201'],
            ["style", "left", '61px']
         ],
         "${_Q6-foglineCopy2}": [
            ["transform", "scaleX", '0.45'],
            ["style", "top", '449px'],
            ["style", "left", '795px'],
            ["transform", "scaleY", '0.45']
         ],
         "${_Fiore-Bianco}": [
            ["style", "-webkit-transform-origin", [31.76,104.65], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [31.76,104.65],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [31.76,104.65],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [31.76,104.65],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [31.76,104.65],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.67444'],
            ["transform", "scaleX", '0.67444'],
            ["style", "left", '36px'],
            ["style", "top", '471px']
         ],
         "${_Bird2}": [
            ["style", "top", '169px'],
            ["transform", "scaleX", '0.34259'],
            ["transform", "scaleY", '0.34259'],
            ["style", "left", '23px']
         ],
         "${_Q6-prato}": [
            ["style", "height", '473px'],
            ["style", "top", '332px'],
            ["style", "left", '-16px'],
            ["style", "width", '1066px']
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
            { id: "eid269", tween: [ "style", "${_foglie-bird}", "left", '81px', { fromValue: '81px'}], position: 0, duration: 0 },
            { id: "eid371", tween: [ "style", "${_Fiore-Giallo}", "left", '875px', { fromValue: '875px'}], position: 0, duration: 0, easing: "easeOutElastic" },
            { id: "eid210", tween: [ "style", "${_foglie-birdCopy}", "top", '249px', { fromValue: '249px'}], position: 0, duration: 0, easing: "easeInQuad" },
            { id: "eid377", tween: [ "transform", "${_Fiore-Arancione}", "scaleX", '0.86014', { fromValue: '0.86014'}], position: 0, duration: 0, easing: "easeOutElastic" },
            { id: "eid378", tween: [ "transform", "${_Fiore-Arancione}", "scaleY", '0.86014', { fromValue: '0.86014'}], position: 0, duration: 0, easing: "easeOutElastic" },
            { id: "eid362", tween: [ "style", "${_Fiore-Bianco}", "top", '471px', { fromValue: '471px'}], position: 0, duration: 0, easing: "easeOutElastic" },
            { id: "eid372", tween: [ "style", "${_Fiore-Giallo}", "top", '371px', { fromValue: '371px'}], position: 0, duration: 0, easing: "easeOutElastic" },
            { id: "eid206", tween: [ "style", "${_foglie-bird}", "top", '269px', { fromValue: '269px'}], position: 0, duration: 0, easing: "easeInQuad" },
            { id: "eid375", tween: [ "transform", "${_Fiore-Rosa}", "scaleY", '0.90441', { fromValue: '0.90441'}], position: 0, duration: 0, easing: "easeOutElastic" },
            { id: "eid204", tween: [ "style", "${_Bird2}", "top", '169px', { fromValue: '169px'}], position: 0, duration: 0, easing: "easeInQuad" },
            { id: "eid374", tween: [ "transform", "${_Fiore-Rosa}", "scaleX", '0.90441', { fromValue: '0.90441'}], position: 0, duration: 0, easing: "easeOutElastic" },
            { id: "eid361", tween: [ "style", "${_Fiore-Bianco}", "left", '36px', { fromValue: '36px'}], position: 0, duration: 0, easing: "easeOutElastic" },
            { id: "eid8", tween: [ "style", "${_Mucca}", "-webkit-transform-origin", [47.66,95.92], { valueTemplate: '@@0@@% @@1@@%', fromValue: [47.66,95.92]}], position: 0, duration: 0 },
            { id: "eid383", tween: [ "style", "${_Mucca}", "-moz-transform-origin", [47.66,95.92], { valueTemplate: '@@0@@% @@1@@%', fromValue: [47.66,95.92]}], position: 0, duration: 0 },
            { id: "eid384", tween: [ "style", "${_Mucca}", "-ms-transform-origin", [47.66,95.92], { valueTemplate: '@@0@@% @@1@@%', fromValue: [47.66,95.92]}], position: 0, duration: 0 },
            { id: "eid385", tween: [ "style", "${_Mucca}", "msTransformOrigin", [47.66,95.92], { valueTemplate: '@@0@@% @@1@@%', fromValue: [47.66,95.92]}], position: 0, duration: 0 },
            { id: "eid386", tween: [ "style", "${_Mucca}", "-o-transform-origin", [47.66,95.92], { valueTemplate: '@@0@@% @@1@@%', fromValue: [47.66,95.92]}], position: 0, duration: 0 },
            { id: "eid369", tween: [ "transform", "${_Fiore-Giallo}", "scaleX", '0.73923', { fromValue: '0.73923'}], position: 0, duration: 0, easing: "easeOutElastic" },
            { id: "eid379", tween: [ "style", "${_Fiore-Arancione}", "left", '699px', { fromValue: '699px'}], position: 0, duration: 0, easing: "easeOutElastic" },
            { id: "eid373", tween: [ "style", "${_Fiore-Rosa}", "-webkit-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 0, duration: 0, easing: "easeOutElastic" },
            { id: "eid387", tween: [ "style", "${_Fiore-Rosa}", "-moz-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 0, duration: 0, easing: "easeOutElastic" },
            { id: "eid388", tween: [ "style", "${_Fiore-Rosa}", "-ms-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 0, duration: 0, easing: "easeOutElastic" },
            { id: "eid389", tween: [ "style", "${_Fiore-Rosa}", "msTransformOrigin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 0, duration: 0, easing: "easeOutElastic" },
            { id: "eid390", tween: [ "style", "${_Fiore-Rosa}", "-o-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 0, duration: 0, easing: "easeOutElastic" },
            { id: "eid365", tween: [ "transform", "${_Fiore-Bianco}", "scaleY", '0.67444', { fromValue: '0.67444'}], position: 0, duration: 0, easing: "easeOutElastic" },
            { id: "eid259", tween: [ "transform", "${_Mucca}", "scaleY", '0.49176', { fromValue: '0.49176'}], position: 0, duration: 0 },
            { id: "eid382", tween: [ "style", "${_Fiore-Rosa}", "top", '578px', { fromValue: '578px'}], position: 0, duration: 0, easing: "easeOutElastic" },
            { id: "eid261", tween: [ "style", "${_Mucca}", "top", '42px', { fromValue: '42px'}], position: 0, duration: 0 },
            { id: "eid368", tween: [ "style", "${_Fiore-Giallo}", "-webkit-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 0, duration: 0, easing: "easeOutElastic" },
            { id: "eid391", tween: [ "style", "${_Fiore-Giallo}", "-moz-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 0, duration: 0, easing: "easeOutElastic" },
            { id: "eid392", tween: [ "style", "${_Fiore-Giallo}", "-ms-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 0, duration: 0, easing: "easeOutElastic" },
            { id: "eid393", tween: [ "style", "${_Fiore-Giallo}", "msTransformOrigin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 0, duration: 0, easing: "easeOutElastic" },
            { id: "eid394", tween: [ "style", "${_Fiore-Giallo}", "-o-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 0, duration: 0, easing: "easeOutElastic" },
            { id: "eid364", tween: [ "transform", "${_Fiore-Bianco}", "scaleX", '0.67444', { fromValue: '0.67444'}], position: 0, duration: 0, easing: "easeOutElastic" },
            { id: "eid381", tween: [ "style", "${_Fiore-Rosa}", "left", '873px', { fromValue: '873px'}], position: 0, duration: 0, easing: "easeOutElastic" },
            { id: "eid380", tween: [ "style", "${_Fiore-Arancione}", "top", '531px', { fromValue: '531px'}], position: 0, duration: 0, easing: "easeOutElastic" },
            { id: "eid376", tween: [ "style", "${_Fiore-Arancione}", "-webkit-transform-origin", [49.14,105.99], { valueTemplate: '@@0@@% @@1@@%', fromValue: [49.14,105.99]}], position: 0, duration: 0, easing: "easeOutElastic" },
            { id: "eid395", tween: [ "style", "${_Fiore-Arancione}", "-moz-transform-origin", [49.14,105.99], { valueTemplate: '@@0@@% @@1@@%', fromValue: [49.14,105.99]}], position: 0, duration: 0, easing: "easeOutElastic" },
            { id: "eid396", tween: [ "style", "${_Fiore-Arancione}", "-ms-transform-origin", [49.14,105.99], { valueTemplate: '@@0@@% @@1@@%', fromValue: [49.14,105.99]}], position: 0, duration: 0, easing: "easeOutElastic" },
            { id: "eid397", tween: [ "style", "${_Fiore-Arancione}", "msTransformOrigin", [49.14,105.99], { valueTemplate: '@@0@@% @@1@@%', fromValue: [49.14,105.99]}], position: 0, duration: 0, easing: "easeOutElastic" },
            { id: "eid398", tween: [ "style", "${_Fiore-Arancione}", "-o-transform-origin", [49.14,105.99], { valueTemplate: '@@0@@% @@1@@%', fromValue: [49.14,105.99]}], position: 0, duration: 0, easing: "easeOutElastic" },
            { id: "eid273", tween: [ "style", "${_Bird2}", "left", '23px', { fromValue: '23px'}], position: 0, duration: 0 },
            { id: "eid370", tween: [ "transform", "${_Fiore-Giallo}", "scaleY", '0.73923', { fromValue: '0.73923'}], position: 0, duration: 0, easing: "easeOutElastic" },
            { id: "eid258", tween: [ "transform", "${_Mucca}", "scaleX", '0.49176', { fromValue: '0.49176'}], position: 0, duration: 0 },
            { id: "eid363", tween: [ "style", "${_Fiore-Bianco}", "-webkit-transform-origin", [31.76,104.65], { valueTemplate: '@@0@@% @@1@@%', fromValue: [31.76,104.65]}], position: 0, duration: 0, easing: "easeOutElastic" },
            { id: "eid399", tween: [ "style", "${_Fiore-Bianco}", "-moz-transform-origin", [31.76,104.65], { valueTemplate: '@@0@@% @@1@@%', fromValue: [31.76,104.65]}], position: 0, duration: 0, easing: "easeOutElastic" },
            { id: "eid400", tween: [ "style", "${_Fiore-Bianco}", "-ms-transform-origin", [31.76,104.65], { valueTemplate: '@@0@@% @@1@@%', fromValue: [31.76,104.65]}], position: 0, duration: 0, easing: "easeOutElastic" },
            { id: "eid401", tween: [ "style", "${_Fiore-Bianco}", "msTransformOrigin", [31.76,104.65], { valueTemplate: '@@0@@% @@1@@%', fromValue: [31.76,104.65]}], position: 0, duration: 0, easing: "easeOutElastic" },
            { id: "eid402", tween: [ "style", "${_Fiore-Bianco}", "-o-transform-origin", [31.76,104.65], { valueTemplate: '@@0@@% @@1@@%', fromValue: [31.76,104.65]}], position: 0, duration: 0, easing: "easeOutElastic" },
            { id: "eid275", tween: [ "style", "${_Mucca}", "left", '625px', { fromValue: '625px'}], position: 0, duration: 0 },
            { id: "eid272", tween: [ "style", "${_foglie-birdCopy}", "left", '168px', { fromValue: '168px'}], position: 0, duration: 0 }         ]
      }
   }
},
"Scoiattolo": {
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
      transform: [[0,0],['31']],
      id: 'Coda',
      type: 'image',
      rect: ['183px','107px','144px','253px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Coda.png','0px','0px']
   },
   {
      transform: [],
      id: 'Q6-braccio-DX',
      type: 'image',
      rect: ['0px','153px','124px','99px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q6-braccio-DX.png','0px','0px']
   },
   {
      id: 'Q6-braccio-SX',
      type: 'image',
      rect: ['214px','203px','131px','81px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q6-braccio-SX.png','0px','0px']
   },
   {
      id: 'Q6-corpo',
      type: 'image',
      rect: ['47px','211px','189px','293px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q6-corpo.png','0px','0px']
   },
   {
      transform: [[0,0],['-5']],
      id: 'Q6-Testa',
      type: 'image',
      rect: ['83px','8px','262px','301px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q6-Testa.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Coda}": [
            ["style", "top", '107px'],
            ["style", "-webkit-transform-origin", [14.13,94.08], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [14.13,94.08],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [14.13,94.08],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [14.13,94.08],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [14.13,94.08],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '183px'],
            ["transform", "rotateZ", '31deg']
         ],
         "${_Q6-braccio-SX}": [
            ["style", "-webkit-transform-origin", [-5.56,93.49], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [-5.56,93.49],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [-5.56,93.49],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [-5.56,93.49],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [-5.56,93.49],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '203px'],
            ["style", "left", '214px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '504px'],
            ["style", "width", '432px']
         ],
         "${_Q6-corpo}": [
            ["style", "left", '47px'],
            ["style", "top", '211px']
         ],
         "${_Q6-Testa}": [
            ["style", "top", '8px'],
            ["transform", "rotateZ", '-5deg'],
            ["style", "height", '301px'],
            ["style", "-webkit-transform-origin", [26.89,77.49], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [26.89,77.49],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [26.89,77.49],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [26.89,77.49],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [26.89,77.49],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '83px'],
            ["style", "width", '262px']
         ],
         "${_Q6-braccio-DX}": [
            ["style", "-webkit-transform-origin", [95.76,81.02], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [95.76,81.02],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [95.76,81.02],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [95.76,81.02],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [95.76,81.02],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '159px'],
            ["style", "left", '7px'],
            ["transform", "rotateZ", '0deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3555,
         autoPlay: false,
         labels: {
            "coda": 370,
            "ani": 1190,
            "sparep": 2750
         },
         timeline: [
            { id: "eid293", tween: [ "transform", "${_Q6-braccio-DX}", "rotateZ", '23deg', { fromValue: '0deg'}], position: 1295, duration: 255 },
            { id: "eid298", tween: [ "transform", "${_Q6-braccio-DX}", "rotateZ", '7deg', { fromValue: '23deg'}], position: 1550, duration: 100 },
            { id: "eid297", tween: [ "transform", "${_Q6-braccio-DX}", "rotateZ", '28deg', { fromValue: '7deg'}], position: 1650, duration: 148 },
            { id: "eid294", tween: [ "transform", "${_Q6-braccio-DX}", "rotateZ", '4deg', { fromValue: '28deg'}], position: 1798, duration: 107 },
            { id: "eid295", tween: [ "transform", "${_Q6-braccio-DX}", "rotateZ", '26deg', { fromValue: '4deg'}], position: 1904, duration: 96 },
            { id: "eid296", tween: [ "transform", "${_Q6-braccio-DX}", "rotateZ", '0deg', { fromValue: '26deg'}], position: 2000, duration: 200 },
            { id: "eid285", tween: [ "transform", "${_Q6-Testa}", "rotateZ", '-12deg', { fromValue: '-5deg'}], position: 1190, duration: 155 },
            { id: "eid300", tween: [ "transform", "${_Q6-Testa}", "rotateZ", '10deg', { fromValue: '-12deg'}], position: 1345, duration: 305 },
            { id: "eid307", tween: [ "transform", "${_Q6-Testa}", "rotateZ", '-5deg', { fromValue: '10deg'}], position: 1650, duration: 480 },
            { id: "eid320", tween: [ "transform", "${_Q6-Testa}", "rotateZ", '0deg', { fromValue: '-5deg'}], position: 2750, duration: 498 },
            { id: "eid321", tween: [ "transform", "${_Q6-Testa}", "rotateZ", '-5deg', { fromValue: '0deg'}], position: 3248, duration: 307 },
            { id: "eid281", tween: [ "transform", "${_Coda}", "rotateZ", '55deg', { fromValue: '31deg'}], position: 370, duration: 255 },
            { id: "eid282", tween: [ "transform", "${_Coda}", "rotateZ", '25deg', { fromValue: '55deg'}], position: 625, duration: 125 },
            { id: "eid283", tween: [ "transform", "${_Coda}", "rotateZ", '31deg', { fromValue: '25deg'}], position: 750, duration: 115 },
            { id: "eid302", tween: [ "transform", "${_Coda}", "rotateZ", '42deg', { fromValue: '31deg'}], position: 1798, duration: 106 },
            { id: "eid303", tween: [ "transform", "${_Coda}", "rotateZ", '30deg', { fromValue: '42deg'}], position: 1904, duration: 96 },
            { id: "eid304", tween: [ "transform", "${_Coda}", "rotateZ", '31deg', { fromValue: '30deg'}], position: 2000, duration: 90 },
            { id: "eid290", tween: [ "transform", "${_Q6-braccio-SX}", "rotateZ", '-13deg', { fromValue: '0deg'}], position: 1345, duration: 45 },
            { id: "eid299", tween: [ "transform", "${_Q6-braccio-SX}", "rotateZ", '-14deg', { fromValue: '-13deg'}], position: 1390, duration: 110 },
            { id: "eid291", tween: [ "transform", "${_Q6-braccio-SX}", "rotateZ", '0deg', { fromValue: '-14deg'}], position: 1500, duration: 150 }         ]
      }
   }
},
"Mucca": {
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
      transform: [[0,0],['2']],
      id: 'Q6-mucca-coda',
      type: 'image',
      rect: ['372px','92px','169px','140px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q6-mucca-coda.png','0px','0px']
   },
   {
      id: 'Q6-mucca-corpo',
      type: 'image',
      rect: ['108px','63px','297px','301px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q6-mucca-corpo.png','0px','0px']
   },
   {
      transform: [],
      id: 'Q6-mucca-campana',
      type: 'image',
      rect: ['72px','200px','71px','84px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q6-mucca-campana.png','0px','0px']
   },
   {
      transform: [],
      id: 'Q6-mucca-testa',
      type: 'image',
      rect: ['0px','0px','228px','229px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q6-mucca-testa.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Q6-mucca-corpo}": [
            ["style", "left", '108px'],
            ["style", "top", '63px']
         ],
         "${symbolSelector}": [
            ["style", "height", '364px'],
            ["style", "width", '543px']
         ],
         "${_Q6-mucca-coda}": [
            ["style", "top", '89px'],
            ["style", "-webkit-transform-origin", [-1.49,34.95], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [-1.49,34.95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [-1.49,34.95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [-1.49,34.95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [-1.49,34.95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '382px'],
            ["transform", "rotateZ", '2deg']
         ],
         "${_Q6-mucca-campana}": [
            ["style", "-webkit-transform-origin", [73.21,8.47], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [73.21,8.47],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [73.21,8.47],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [73.21,8.47],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [73.21,8.47],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '200px'],
            ["style", "left", '72px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Q6-mucca-testa}": [
            ["style", "top", '0px'],
            ["style", "-webkit-transform-origin", [64.56,57.01], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [64.56,57.01],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [64.56,57.01],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [64.56,57.01],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [64.56,57.01],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3380,
         autoPlay: false,
         labels: {
            "testa": 400,
            "coda": 2750
         },
         timeline: [
            { id: "eid218", tween: [ "transform", "${_Q6-mucca-testa}", "rotateZ", '11deg', { fromValue: '0deg'}], position: 400, duration: 350, easing: "easeInOutQuad" },
            { id: "eid219", tween: [ "transform", "${_Q6-mucca-testa}", "rotateZ", '-17deg', { fromValue: '11deg'}], position: 750, duration: 422, easing: "easeInOutQuad" },
            { id: "eid220", tween: [ "transform", "${_Q6-mucca-testa}", "rotateZ", '3deg', { fromValue: '-17deg'}], position: 1172, duration: 253, easing: "easeInOutQuad" },
            { id: "eid221", tween: [ "transform", "${_Q6-mucca-testa}", "rotateZ", '0deg', { fromValue: '3deg'}], position: 1425, duration: 325, easing: "easeInOutQuad" },
            { id: "eid223", tween: [ "transform", "${_Q6-mucca-campana}", "rotateZ", '-12deg', { fromValue: '0deg'}], position: 1172, duration: 172 },
            { id: "eid224", tween: [ "transform", "${_Q6-mucca-campana}", "rotateZ", '15deg', { fromValue: '-12deg'}], position: 1344, duration: 156 },
            { id: "eid225", tween: [ "transform", "${_Q6-mucca-campana}", "rotateZ", '-18deg', { fromValue: '15deg'}], position: 1500, duration: 150 },
            { id: "eid227", tween: [ "transform", "${_Q6-mucca-campana}", "rotateZ", '-10deg', { fromValue: '-18deg'}], position: 1650, duration: 157 },
            { id: "eid226", tween: [ "transform", "${_Q6-mucca-campana}", "rotateZ", '0deg', { fromValue: '-10deg'}], position: 1807, duration: 115 },
            { id: "eid229", tween: [ "transform", "${_Q6-mucca-coda}", "rotateZ", '-38deg', { fromValue: '2deg'}], position: 2750, duration: 250 },
            { id: "eid230", tween: [ "transform", "${_Q6-mucca-coda}", "rotateZ", '16deg', { fromValue: '-38deg'}], position: 3000, duration: 100 },
            { id: "eid231", tween: [ "transform", "${_Q6-mucca-coda}", "rotateZ", '2deg', { fromValue: '16deg'}], position: 3100, duration: 220 }         ]
      }
   }
},
"Bird": {
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
      id: 'Group',
      type: 'group',
      rect: ['0','0','270','283','auto','auto'],
      c: [
      {
         transform: [],
         id: 'Q6-bird-coda',
         type: 'image',
         rect: ['0px','201px','100px','61px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/Q6-bird-coda.png','0px','0px']
      },
      {
         transform: [[0,0],['-19']],
         id: 'Q6-bird-ala-DX',
         type: 'image',
         rect: ['23px','98px','86px','89px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/Q6-bird-ala-DX.png','0px','0px']
      },
      {
         transform: [[0,0],['19']],
         id: 'Q6-bird-ala-SX',
         type: 'image',
         rect: ['169px','104px','85px','83px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/Q6-bird-ala-SX.png','0px','0px']
      },
      {
         transform: [[0,0],[],[],['0.896','0.896']],
         id: 'Q6-bird-corpo',
         type: 'image',
         rect: ['77px','132px','125px','167px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/Q6-bird-corpo.png','0px','0px']
      },
      {
         transform: [],
         id: 'Q6-bird-testa',
         type: 'image',
         rect: ['76px','0px','136px','151px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/Q6-bird-testa.png','0px','0px']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Q6-bird-ala-SX}": [
            ["style", "-webkit-transform-origin", [10.12,74.59], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [10.12,74.59],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [10.12,74.59],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [10.12,74.59],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [10.12,74.59],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '104px'],
            ["style", "left", '169px'],
            ["transform", "rotateZ", '-3deg']
         ],
         "${_Q6-bird-ala-DX}": [
            ["style", "-webkit-transform-origin", [91.89,74.99], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [91.89,74.99],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [91.89,74.99],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [91.89,74.99],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [91.89,74.99],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '98px'],
            ["style", "left", '23px'],
            ["transform", "rotateZ", '-5deg']
         ],
         "${_Q6-bird-corpo}": [
            ["style", "-webkit-transform-origin", [50.72,5.68], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50.72,5.68],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50.72,5.68],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50.72,5.68],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50.72,5.68],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.896'],
            ["transform", "scaleX", '0.896'],
            ["style", "left", '77px'],
            ["style", "top", '132px']
         ],
         "${_Q6-bird-coda}": [
            ["style", "-webkit-transform-origin", [95.05,20.63], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [95.05,20.63],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [95.05,20.63],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [95.05,20.63],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [95.05,20.63],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '201px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Q6-bird-testa}": [
            ["style", "top", '0px'],
            ["style", "-webkit-transform-origin", [50.05,93.35], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50.05,93.35],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50.05,93.35],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50.05,93.35],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50.05,93.35],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '76px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '283px'],
            ["style", "width", '254px']
         ],
         "${_Group}": [
            ["motion", "location", '134.99166870117px 141.30833435059px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 840,
         autoPlay: false,
         timeline: [
            { id: "eid56", tween: [ "transform", "${_Q6-bird-ala-SX}", "rotateZ", '38deg', { fromValue: '-3deg'}], position: 5, duration: 250, easing: "easeInQuad" },
            { id: "eid57", tween: [ "transform", "${_Q6-bird-ala-SX}", "rotateZ", '11deg', { fromValue: '38deg'}], position: 255, duration: 250, easing: "easeInQuad" },
            { id: "eid60", tween: [ "transform", "${_Q6-bird-ala-SX}", "rotateZ", '19deg', { fromValue: '11deg'}], position: 505, duration: 250, easing: "easeInQuad" },
            { id: "eid195", tween: [ "transform", "${_Q6-bird-ala-SX}", "rotateZ", '-3deg', { fromValue: '19deg'}], position: 755, duration: 85, easing: "easeInQuad" },
            { id: "eid62", tween: [ "transform", "${_Q6-bird-testa}", "rotateZ", '10deg', { fromValue: '0deg'}], position: 175, duration: 167, easing: "easeInQuad" },
            { id: "eid63", tween: [ "transform", "${_Q6-bird-testa}", "rotateZ", '-10deg', { fromValue: '10deg'}], position: 342, duration: 167, easing: "easeInQuad" },
            { id: "eid64", tween: [ "transform", "${_Q6-bird-testa}", "rotateZ", '0deg', { fromValue: '-10deg'}], position: 508, duration: 167, easing: "easeInQuad" },
            { id: "eid193", tween: [ "motion", "${_Group}", [[135,141.32,0,0],[134.99,28.52,0,0]]], position: 0, duration: 395, easing: "easeInQuad" },
            { id: "eid194", tween: [ "motion", "${_Group}", [[135,28.53,0,0],[126.99,75.05,0,0]]], position: 395, duration: 305, easing: "easeInQuad" },
            { id: "eid55", tween: [ "transform", "${_Q6-bird-ala-DX}", "rotateZ", '-37deg', { fromValue: '-5deg'}], position: 5, duration: 250, easing: "easeInQuad" },
            { id: "eid58", tween: [ "transform", "${_Q6-bird-ala-DX}", "rotateZ", '-8deg', { fromValue: '-37deg'}], position: 255, duration: 250, easing: "easeInQuad" },
            { id: "eid59", tween: [ "transform", "${_Q6-bird-ala-DX}", "rotateZ", '-19deg', { fromValue: '-8deg'}], position: 505, duration: 250, easing: "easeInQuad" },
            { id: "eid196", tween: [ "transform", "${_Q6-bird-ala-DX}", "rotateZ", '-5deg', { fromValue: '-19deg'}], position: 755, duration: 85, easing: "easeInQuad" },
            { id: "eid65", tween: [ "transform", "${_Q6-bird-coda}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 5, duration: 0, easing: "easeInQuad" },
            { id: "eid67", tween: [ "transform", "${_Q6-bird-coda}", "rotateZ", '33deg', { fromValue: '0deg'}], position: 300, duration: 205, easing: "easeInQuad" },
            { id: "eid68", tween: [ "transform", "${_Q6-bird-coda}", "rotateZ", '-14deg', { fromValue: '33deg'}], position: 505, duration: 170, easing: "easeInQuad" },
            { id: "eid69", tween: [ "transform", "${_Q6-bird-coda}", "rotateZ", '0deg', { fromValue: '-14deg'}], position: 675, duration: 80, easing: "easeInQuad" }         ]
      }
   }
},
"foglie-bird": {
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
      transform: [[0,0],['8'],[],['0.6','0.6']],
      id: 'Q6-foglia-alberoCopy8',
      type: 'image',
      rect: ['-30px','-4px','210px','178px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q6-foglia-albero.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Q6-foglia-alberoCopy8}": [
            ["style", "-webkit-transform-origin", [50.5,17.9], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50.5,17.9],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50.5,17.9],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50.5,17.9],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50.5,17.9],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.6'],
            ["transform", "rotateZ", '8deg'],
            ["transform", "scaleX", '0.6'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-30px'],
            ["style", "top", '-4px']
         ],
         "${symbolSelector}": [
            ["style", "height", '123px'],
            ["style", "width", '140px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 645,
         autoPlay: false,
         timeline: [
            { id: "eid172", tween: [ "transform", "${_Q6-foglia-alberoCopy8}", "rotateZ", '-7deg', { fromValue: '8deg'}], position: 0, duration: 200, easing: "easeInOutQuad" },
            { id: "eid173", tween: [ "transform", "${_Q6-foglia-alberoCopy8}", "rotateZ", '25deg', { fromValue: '-7deg'}], position: 200, duration: 260, easing: "easeInOutQuad" },
            { id: "eid174", tween: [ "transform", "${_Q6-foglia-alberoCopy8}", "rotateZ", '8deg', { fromValue: '25deg'}], position: 460, duration: 185, easing: "easeInOutQuad" }         ]
      }
   }
},
"Fiore-Rosa": {
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
      id: 'Q6-fiore-gambo1',
      type: 'image',
      rect: ['0px','61px','107px','75px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q6-fiore-gambo1.png','0px','0px']
   },
   {
      rect: ['17px','0px','103px','95px','auto','auto'],
      id: 'Q6-fiore-rosa',
      transform: [],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Q6-fiore-rosa.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Q6-fiore-rosa}": [
            ["style", "top", '0px'],
            ["style", "left", '17px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Q6-fiore-gambo1}": [
            ["style", "left", '0px'],
            ["style", "top", '61px']
         ],
         "${symbolSelector}": [
            ["style", "height", '136px'],
            ["style", "width", '120px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1632,
         autoPlay: false,
         timeline: [
            { id: "eid338", tween: [ "transform", "${_Q6-fiore-rosa}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 1632, easing: "easeOutElastic" }         ]
      }
   }
},
"Fiore-Bianco": {
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
      id: 'Q6-fiore-gambo2',
      type: 'image',
      rect: ['9px','74px','72px','70px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q6-fiore-gambo2.png','0px','0px']
   },
   {
      rect: ['15px','11px','86px','90px','auto','auto'],
      id: 'Q6-fiore-bianco',
      transform: [[],['471']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Q6-fiore-bianco.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Q6-fiore-gambo2}": [
            ["style", "top", '74px'],
            ["style", "left", '9px']
         ],
         "${symbolSelector}": [
            ["style", "height", '144px'],
            ["style", "width", '115px']
         ],
         "${_Q6-fiore-bianco}": [
            ["style", "top", '11px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '90px'],
            ["style", "left", '15px'],
            ["style", "width", '86px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1340.984375,
         autoPlay: false,
         timeline: [
            { id: "eid339", tween: [ "transform", "${_Q6-fiore-bianco}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 1341, easing: "easeOutElastic" }         ]
      }
   }
},
"Fiore-Giallo": {
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
      id: 'Q6-fiore-gambo1Copy',
      type: 'image',
      rect: ['0px','74px','107px','75px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q6-fiore-gambo1.png','0px','0px']
   },
   {
      rect: ['17px','7px','104px','113px','auto','auto'],
      id: 'Q6-fiore-giallo',
      transform: [[],['351']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Q6-fiore-giallo.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Q6-fiore-giallo}": [
            ["style", "top", '7px'],
            ["style", "left", '17px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Q6-fiore-gambo1Copy}": [
            ["style", "left", '0px'],
            ["style", "top", '74px']
         ],
         "${symbolSelector}": [
            ["style", "height", '149px'],
            ["style", "width", '129px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2697.4296875,
         autoPlay: false,
         timeline: [
            { id: "eid340", tween: [ "transform", "${_Q6-fiore-giallo}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 2697, easing: "easeOutElastic" }         ]
      }
   }
},
"Fiore-Arancione": {
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
      id: 'Q6-fiore-gambo2Copy',
      type: 'image',
      rect: ['20px','73px','72px','70px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q6-fiore-gambo2.png','0px','0px']
   },
   {
      rect: ['-1px','0px','109px','115px','auto','auto'],
      id: 'Q6-fiore-giallo2',
      transform: [[],['745'],[],['0.78898','0.78898']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Q6-fiore-giallo2.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '143px'],
            ["style", "width", '116px']
         ],
         "${_Q6-fiore-gambo2Copy}": [
            ["style", "left", '20px'],
            ["style", "top", '73px']
         ],
         "${_Q6-fiore-giallo2}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '0.78898'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.78898'],
            ["style", "left", '-1px'],
            ["style", "-webkit-transform-origin", [53.54,58.34], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [53.54,58.34],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [53.54,58.34],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [53.54,58.34],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [53.54,58.34],{valueTemplate:'@@0@@% @@1@@%'}]
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: false,
         timeline: [
            { id: "eid341", tween: [ "transform", "${_Q6-fiore-giallo2}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 1000, easing: "easeOutElastic" }         ]
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
})(jQuery, AdobeEdge, "Quadro-06");
