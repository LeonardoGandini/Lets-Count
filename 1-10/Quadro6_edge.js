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
            transform:[[],[],[],['1.05418','1.05418'],['50%','99.9999%']]
         },
         {
            id:'Scoiattolo',
            type:'rect',
            rect:['353px','225px','auto','auto','auto','auto'],
            transform:[[],[],[],['0.91927','0.91927']]
         },
         {
            id:'Q6-fiore-bianco',
            type:'image',
            rect:['1211px','3px','126px','161px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q6-fiore-bianco.png",'0px','0px']
         },
         {
            id:'Q6-fiore-giallo',
            type:'image',
            rect:['1279px','157px','158px','183px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q6-fiore-giallo.png",'0px','0px']
         },
         {
            id:'Q6-fiore-giallo2',
            type:'image',
            rect:['1386px','33px','143px','186px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q6-fiore-giallo2.png",'0px','0px']
         },
         {
            id:'Q6-fiore-rosa',
            type:'image',
            rect:['1266px','172px','128px','179px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q6-fiore-rosa.png",'0px','0px']
         },
         {
            id:'Q6-foglia-albero3',
            type:'image',
            rect:['173px','597px','139px','138px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q6-foglia-albero3.png",'0px','0px'],
            transform:[[],[],[],['0.70376','0.70376'],['50%','100%']]
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
         }],
         symbolInstances: [
         {
            id:'Bird2',
            symbolName:'Bird'
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
            id:'foglie-birdCopy',
            symbolName:'foglie-bird'
         },
         {
            id:'Mucca',
            symbolName:'Mucca'
         },
         {
            id:'foglie-birdCopy2',
            symbolName:'foglie-bird'
         },
         {
            id:'Scoiattolo',
            symbolName:'Scoiattolo'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Scoiattolo}": [
            ["style", "top", '225px'],
            ["transform", "scaleY", '0.91927'],
            ["style", "left", '353px'],
            ["transform", "scaleX", '0.91927']
         ],
         "${_Q6-fattoria}": [
            ["style", "top", '333px'],
            ["transform", "scaleY", '0.93913'],
            ["style", "height", '234px'],
            ["transform", "scaleX", '0.93913'],
            ["style", "left", '-51px'],
            ["style", "width", '460px']
         ],
         "${_foglie-birdCopy}": [
            ["style", "left", '168px'],
            ["style", "top", '249px']
         ],
         "${_Q6-fiore-giallo2}": [
            ["style", "left", '1386px'],
            ["style", "top", '33px']
         ],
         "${_Q6-albero}": [
            ["style", "top", '6px'],
            ["transform", "scaleY", '1.05418'],
            ["transform", "scaleX", '1.05418'],
            ["style", "height", '729px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '-41px'],
            ["style", "width", '558px']
         ],
         "${_foglie-bird}": [
            ["style", "left", '81px'],
            ["style", "top", '269px']
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
         "${_Q6-prato}": [
            ["style", "top", '332px'],
            ["style", "height", '473px'],
            ["style", "left", '-16px'],
            ["style", "width", '1066px']
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
         "${_Q6-fiore-rosa}": [
            ["style", "left", '1266px'],
            ["style", "top", '172px']
         ],
         "${_G-Cielo}": [
            ["style", "left", '-111px'],
            ["style", "top", '-15px']
         ],
         "${_Q6-fiore-bianco}": [
            ["style", "left", '1211px'],
            ["style", "top", '3px']
         ],
         "${_Q6-fiore-giallo}": [
            ["style", "left", '1279px'],
            ["style", "top", '157px']
         ],
         "${_Q6-fogline}": [
            ["style", "top", '657px'],
            ["transform", "scaleY", '0.55777'],
            ["style", "left", '592px'],
            ["transform", "scaleX", '0.55777']
         ],
         "${_foglie-birdCopy2}": [
            ["style", "left", '255px'],
            ["style", "top", '269px']
         ],
         "${_Bird2}": [
            ["style", "top", '169px'],
            ["transform", "scaleY", '0.34259'],
            ["style", "left", '23px'],
            ["transform", "scaleX", '0.34259']
         ],
         "${_Bird2Copy6}": [
            ["style", "top", '169px'],
            ["transform", "scaleX", '0.34259'],
            ["transform", "scaleY", '0.34259'],
            ["style", "left", '197px']
         ],
         "${_Q6-foglineCopy}": [
            ["style", "top", '551px'],
            ["transform", "scaleX", '0.54'],
            ["transform", "scaleY", '0.54'],
            ["style", "left", '299px']
         ],
         "${_Q6-foglia-albero2}": [
            ["style", "top", '607px'],
            ["transform", "scaleY", '0.52201'],
            ["style", "left", '61px'],
            ["transform", "scaleX", '0.67187']
         ],
         "${_Q6-foglineCopy2}": [
            ["transform", "scaleX", '0.45'],
            ["style", "left", '795px'],
            ["transform", "scaleY", '0.45'],
            ["style", "top", '449px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '1024px'],
            ["style", "height", '768px'],
            ["style", "overflow", 'hidden']
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
            { id: "eid210", tween: [ "style", "${_foglie-birdCopy}", "top", '249px', { fromValue: '249px'}], position: 0, duration: 0, easing: "easeInQuad" },
            { id: "eid204", tween: [ "style", "${_Bird2}", "top", '169px', { fromValue: '169px'}], position: 0, duration: 0, easing: "easeInQuad" },
            { id: "eid261", tween: [ "style", "${_Mucca}", "top", '42px', { fromValue: '42px'}], position: 0, duration: 0 },
            { id: "eid258", tween: [ "transform", "${_Mucca}", "scaleX", '0.49176', { fromValue: '0.49176'}], position: 0, duration: 0 },
            { id: "eid273", tween: [ "style", "${_Bird2}", "left", '23px', { fromValue: '23px'}], position: 0, duration: 0 },
            { id: "eid206", tween: [ "style", "${_foglie-bird}", "top", '269px', { fromValue: '269px'}], position: 0, duration: 0, easing: "easeInQuad" },
            { id: "eid259", tween: [ "transform", "${_Mucca}", "scaleY", '0.49176', { fromValue: '0.49176'}], position: 0, duration: 0 },
            { id: "eid8", tween: [ "style", "${_Mucca}", "-webkit-transform-origin", [47.66,95.92], { valueTemplate: '@@0@@% @@1@@%', fromValue: [47.66,95.92]}], position: 0, duration: 0 },
            { id: "eid332", tween: [ "style", "${_Mucca}", "-moz-transform-origin", [47.66,95.92], { valueTemplate: '@@0@@% @@1@@%', fromValue: [47.66,95.92]}], position: 0, duration: 0 },
            { id: "eid333", tween: [ "style", "${_Mucca}", "-ms-transform-origin", [47.66,95.92], { valueTemplate: '@@0@@% @@1@@%', fromValue: [47.66,95.92]}], position: 0, duration: 0 },
            { id: "eid334", tween: [ "style", "${_Mucca}", "msTransformOrigin", [47.66,95.92], { valueTemplate: '@@0@@% @@1@@%', fromValue: [47.66,95.92]}], position: 0, duration: 0 },
            { id: "eid335", tween: [ "style", "${_Mucca}", "-o-transform-origin", [47.66,95.92], { valueTemplate: '@@0@@% @@1@@%', fromValue: [47.66,95.92]}], position: 0, duration: 0 },
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
      rect: ['183px','107px','144px','253px','auto','auto'],
      id: 'Coda',
      transform: [[],['31']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Coda.png','0px','0px']
   },
   {
      rect: ['0px','153px','124px','99px','auto','auto'],
      id: 'Q6-braccio-DX',
      transform: [],
      type: 'image',
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
      rect: ['83px','8px','262px','301px','auto','auto'],
      id: 'Q6-Testa',
      transform: [[],['-5']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Q6-Testa.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Coda}": [
            ["style", "-webkit-transform-origin", [14.13,94.08], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [14.13,94.08],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [14.13,94.08],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [14.13,94.08],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [14.13,94.08],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '107px'],
            ["style", "left", '183px'],
            ["transform", "rotateZ", '31deg']
         ],
         "${_Q6-braccio-SX}": [
            ["style", "top", '203px'],
            ["style", "-webkit-transform-origin", [-5.56,93.49], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [-5.56,93.49],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [-5.56,93.49],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [-5.56,93.49],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [-5.56,93.49],{valueTemplate:'@@0@@% @@1@@%'}],
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
            ["style", "-webkit-transform-origin", [26.89,77.49], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [26.89,77.49],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [26.89,77.49],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [26.89,77.49],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [26.89,77.49],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '-5deg'],
            ["style", "height", '301px'],
            ["style", "top", '8px'],
            ["style", "left", '83px'],
            ["style", "width", '262px']
         ],
         "${_Q6-braccio-DX}": [
            ["style", "top", '159px'],
            ["style", "-webkit-transform-origin", [95.76,81.02], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [95.76,81.02],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [95.76,81.02],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [95.76,81.02],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [95.76,81.02],{valueTemplate:'@@0@@% @@1@@%'}],
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
            { id: "eid291", tween: [ "transform", "${_Q6-braccio-SX}", "rotateZ", '0deg', { fromValue: '-14deg'}], position: 1500, duration: 150 },
            { id: "eid293", tween: [ "transform", "${_Q6-braccio-DX}", "rotateZ", '23deg', { fromValue: '0deg'}], position: 1295, duration: 255 },
            { id: "eid298", tween: [ "transform", "${_Q6-braccio-DX}", "rotateZ", '7deg', { fromValue: '23deg'}], position: 1550, duration: 100 },
            { id: "eid297", tween: [ "transform", "${_Q6-braccio-DX}", "rotateZ", '28deg', { fromValue: '7deg'}], position: 1650, duration: 148 },
            { id: "eid294", tween: [ "transform", "${_Q6-braccio-DX}", "rotateZ", '4deg', { fromValue: '28deg'}], position: 1798, duration: 107 },
            { id: "eid295", tween: [ "transform", "${_Q6-braccio-DX}", "rotateZ", '26deg', { fromValue: '4deg'}], position: 1904, duration: 96 },
            { id: "eid296", tween: [ "transform", "${_Q6-braccio-DX}", "rotateZ", '0deg', { fromValue: '26deg'}], position: 2000, duration: 200 }         ]
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
      rect: ['372px','92px','169px','140px','auto','auto'],
      id: 'Q6-mucca-coda',
      transform: [[],['2']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Q6-mucca-coda.png','0px','0px']
   },
   {
      id: 'Q6-mucca-corpo',
      type: 'image',
      rect: ['108px','63px','297px','301px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q6-mucca-corpo.png','0px','0px']
   },
   {
      rect: ['72px','200px','71px','84px','auto','auto'],
      id: 'Q6-mucca-campana',
      transform: [],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Q6-mucca-campana.png','0px','0px']
   },
   {
      rect: ['0px','0px','228px','229px','auto','auto'],
      id: 'Q6-mucca-testa',
      transform: [],
      type: 'image',
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
            ["style", "-webkit-transform-origin", [-1.49,34.95], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [-1.49,34.95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [-1.49,34.95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [-1.49,34.95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [-1.49,34.95],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '89px'],
            ["style", "left", '382px'],
            ["transform", "rotateZ", '2deg']
         ],
         "${_Q6-mucca-campana}": [
            ["style", "top", '200px'],
            ["style", "-webkit-transform-origin", [73.21,8.47], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [73.21,8.47],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [73.21,8.47],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [73.21,8.47],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [73.21,8.47],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '72px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Q6-mucca-testa}": [
            ["style", "-webkit-transform-origin", [64.56,57.01], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [64.56,57.01],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [64.56,57.01],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [64.56,57.01],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [64.56,57.01],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '0px'],
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
         rect: ['0px','201px','100px','61px','auto','auto'],
         id: 'Q6-bird-coda',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Q6-bird-coda.png','0px','0px']
      },
      {
         rect: ['23px','98px','86px','89px','auto','auto'],
         id: 'Q6-bird-ala-DX',
         transform: [[],['-19']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Q6-bird-ala-DX.png','0px','0px']
      },
      {
         rect: ['169px','104px','85px','83px','auto','auto'],
         id: 'Q6-bird-ala-SX',
         transform: [[],['19']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Q6-bird-ala-SX.png','0px','0px']
      },
      {
         rect: ['77px','132px','125px','167px','auto','auto'],
         id: 'Q6-bird-corpo',
         transform: [[],[],[],['0.896','0.896']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Q6-bird-corpo.png','0px','0px']
      },
      {
         rect: ['76px','0px','136px','151px','auto','auto'],
         id: 'Q6-bird-testa',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Q6-bird-testa.png','0px','0px']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Q6-bird-ala-SX}": [
            ["style", "top", '104px'],
            ["style", "-webkit-transform-origin", [10.12,74.59], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [10.12,74.59],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [10.12,74.59],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [10.12,74.59],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [10.12,74.59],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '169px'],
            ["transform", "rotateZ", '-3deg']
         ],
         "${_Q6-bird-ala-DX}": [
            ["style", "top", '98px'],
            ["style", "-webkit-transform-origin", [91.89,74.99], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [91.89,74.99],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [91.89,74.99],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [91.89,74.99],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [91.89,74.99],{valueTemplate:'@@0@@% @@1@@%'}],
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
            ["style", "top", '201px'],
            ["style", "-webkit-transform-origin", [95.05,20.63], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [95.05,20.63],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [95.05,20.63],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [95.05,20.63],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [95.05,20.63],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Group}": [
            ["motion", "location", '134.99166870117px 141.30833435059px']
         ],
         "${symbolSelector}": [
            ["style", "height", '283px'],
            ["style", "width", '254px']
         ],
         "${_Q6-bird-testa}": [
            ["style", "-webkit-transform-origin", [50.05,93.35], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50.05,93.35],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50.05,93.35],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50.05,93.35],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50.05,93.35],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '0px'],
            ["style", "left", '76px'],
            ["transform", "rotateZ", '0deg']
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
            { id: "eid55", tween: [ "transform", "${_Q6-bird-ala-DX}", "rotateZ", '-37deg', { fromValue: '-5deg'}], position: 5, duration: 250, easing: "easeInQuad" },
            { id: "eid58", tween: [ "transform", "${_Q6-bird-ala-DX}", "rotateZ", '-8deg', { fromValue: '-37deg'}], position: 255, duration: 250, easing: "easeInQuad" },
            { id: "eid59", tween: [ "transform", "${_Q6-bird-ala-DX}", "rotateZ", '-19deg', { fromValue: '-8deg'}], position: 505, duration: 250, easing: "easeInQuad" },
            { id: "eid196", tween: [ "transform", "${_Q6-bird-ala-DX}", "rotateZ", '-5deg', { fromValue: '-19deg'}], position: 755, duration: 85, easing: "easeInQuad" },
            { id: "eid193", tween: [ "motion", "${_Group}", [[135,141.32,0,0],[134.99,28.52,0,0]]], position: 0, duration: 395, easing: "easeInQuad" },
            { id: "eid194", tween: [ "motion", "${_Group}", [[135,28.53,0,0],[126.99,75.05,0,0]]], position: 395, duration: 305, easing: "easeInQuad" },
            { id: "eid56", tween: [ "transform", "${_Q6-bird-ala-SX}", "rotateZ", '38deg', { fromValue: '-3deg'}], position: 5, duration: 250, easing: "easeInQuad" },
            { id: "eid57", tween: [ "transform", "${_Q6-bird-ala-SX}", "rotateZ", '11deg', { fromValue: '38deg'}], position: 255, duration: 250, easing: "easeInQuad" },
            { id: "eid60", tween: [ "transform", "${_Q6-bird-ala-SX}", "rotateZ", '19deg', { fromValue: '11deg'}], position: 505, duration: 250, easing: "easeInQuad" },
            { id: "eid195", tween: [ "transform", "${_Q6-bird-ala-SX}", "rotateZ", '-3deg', { fromValue: '19deg'}], position: 755, duration: 85, easing: "easeInQuad" },
            { id: "eid65", tween: [ "transform", "${_Q6-bird-coda}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 5, duration: 0, easing: "easeInQuad" },
            { id: "eid67", tween: [ "transform", "${_Q6-bird-coda}", "rotateZ", '33deg', { fromValue: '0deg'}], position: 300, duration: 205, easing: "easeInQuad" },
            { id: "eid68", tween: [ "transform", "${_Q6-bird-coda}", "rotateZ", '-14deg', { fromValue: '33deg'}], position: 505, duration: 170, easing: "easeInQuad" },
            { id: "eid69", tween: [ "transform", "${_Q6-bird-coda}", "rotateZ", '0deg', { fromValue: '-14deg'}], position: 675, duration: 80, easing: "easeInQuad" },
            { id: "eid62", tween: [ "transform", "${_Q6-bird-testa}", "rotateZ", '10deg', { fromValue: '0deg'}], position: 175, duration: 167, easing: "easeInQuad" },
            { id: "eid63", tween: [ "transform", "${_Q6-bird-testa}", "rotateZ", '-10deg', { fromValue: '10deg'}], position: 342, duration: 167, easing: "easeInQuad" },
            { id: "eid64", tween: [ "transform", "${_Q6-bird-testa}", "rotateZ", '0deg', { fromValue: '-10deg'}], position: 508, duration: 167, easing: "easeInQuad" }         ]
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
      rect: ['-30px','-4px','210px','178px','auto','auto'],
      id: 'Q6-foglia-alberoCopy8',
      transform: [[],['8'],[],['0.6','0.6']],
      type: 'image',
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
            ["transform", "rotateZ", '8deg'],
            ["transform", "scaleX", '0.6'],
            ["style", "left", '-30px'],
            ["style", "top", '-4px'],
            ["transform", "scaleY", '0.6'],
            ["subproperty", "filter.blur", '0px']
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
