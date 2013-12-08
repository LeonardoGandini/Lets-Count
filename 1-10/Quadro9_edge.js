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
            id:'NUVOLA',
            type:'rect',
            rect:['247px','38px','auto','auto','auto','auto'],
            opacity:0.95,
            userClass:"Nuvola"
         },
         {
            id:'Q9-albero-small',
            type:'image',
            rect:['770px','51px','427px','500px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q9-albero-small.png",'0px','0px'],
            transform:[[],[],[],['0.41433','0.41433']]
         },
         {
            id:'Q9-albero-smallCopy',
            type:'image',
            rect:['-167px','70px','427px','500px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q9-albero-small.png",'0px','0px'],
            transform:[[],[],[],['-0.26','0.264']]
         },
         {
            id:'Q9-erba2',
            type:'image',
            rect:['-23px','366px','1069px','275px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q9-erba2.png",'0px','0px']
         },
         {
            id:'Q9-erba1',
            type:'image',
            rect:['-9px','532px','1041px','289px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q9-erba1.png",'0px','0px']
         },
         {
            id:'alberogufo',
            type:'rect',
            rect:['108','-101','auto','auto','auto','auto']
         },
         {
            id:'trigger-coda',
            type:'rect',
            rect:['605px','382px','140px','197px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'Scoiattolo',
            type:'rect',
            rect:['-49px','272px','auto','auto','auto','auto'],
            transform:[[],[],[],['0.76844','0.76844']]
         },
         {
            id:'cespuglissimo',
            type:'rect',
            rect:['207','244','auto','auto','auto','auto']
         },
         {
            id:'numerazio',
            type:'rect',
            rect:['54','30','auto','auto','auto','auto']
         },
         {
            id:'Trigger-Coda',
            type:'rect',
            rect:['71px','225px','62px','76px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            transform:[[],[],[],['2.45946','2.97591']]
         },
         {
            id:'FUMELLO',
            type:'rect',
            rect:['521px','-232px','auto','auto','auto','auto']
         },
         {
            id:'Menu',
            type:'rect',
            rect:['-67','697px','auto','auto','auto','auto'],
            userClass:"menu"
         }],
         symbolInstances: [
         {
            id:'Scoiattolo',
            symbolName:'Scoiattolo'
         },
         {
            id:'numerazio',
            symbolName:'numerazio'
         },
         {
            id:'cespuglissimo',
            symbolName:'cespuglissimo'
         },
         {
            id:'NUVOLA',
            symbolName:'NUVOLA'
         },
         {
            id:'Menu',
            symbolName:'Menu'
         },
         {
            id:'alberogufo',
            symbolName:'alberogufo'
         },
         {
            id:'FUMELLO',
            symbolName:'FUMELLO'
         }
         ]
      },
   states: {
      "Base State": {
         "${_trigger-coda}": [
            ["style", "top", '382px'],
            ["style", "opacity", '0']
         ],
         "${_Scoiattolo}": [
            ["style", "top", '272px'],
            ["transform", "scaleY", '0.76844'],
            ["style", "left", '-49px'],
            ["transform", "scaleX", '0.76844']
         ],
         "${_Q9-albero-smallCopy}": [
            ["style", "top", '70px'],
            ["transform", "scaleX", '-0.26'],
            ["transform", "scaleY", '0.264'],
            ["style", "left", '-167px']
         ],
         "${_Q9-albero-small}": [
            ["style", "top", '51px'],
            ["transform", "scaleY", '0.41433'],
            ["style", "left", '770px'],
            ["transform", "scaleX", '0.41433']
         ],
         "${_Q9-erba2}": [
            ["style", "top", '366px'],
            ["style", "height", '275px'],
            ["style", "left", '-23px'],
            ["style", "width", '1069px']
         ],
         "${_cespuglissimo}": [
            ["transform", "scaleX", '0.89234'],
            ["style", "top", '270px'],
            ["transform", "scaleY", '0.89234'],
            ["style", "left", '262px']
         ],
         "${_FUMELLO}": [
            ["style", "top", '-232px'],
            ["style", "left", '521px']
         ],
         "${_Q9-erba1}": [
            ["style", "top", '532px'],
            ["style", "height", '289px'],
            ["style", "left", '-9px'],
            ["style", "width", '1041px']
         ],
         "${_NUVOLA}": [
            ["style", "top", '76px'],
            ["style", "opacity", '0.95'],
            ["style", "left", '-23px']
         ],
         "${_Trigger-Coda}": [
            ["style", "top", '225px'],
            ["transform", "scaleY", '2.97591'],
            ["style", "height", '76px'],
            ["transform", "scaleX", '2.45946'],
            ["style", "opacity", '0'],
            ["style", "left", '71px'],
            ["style", "width", '62px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '768px'],
            ["style", "width", '1024px']
         ],
         "${_G-Cielo}": [
            ["style", "left", '-111px'],
            ["style", "top", '-15px']
         ],
         "${_Menu}": [
            ["style", "left", '-68px'],
            ["style", "top", '697px']
         ],
         "${_alberogufo}": [
            ["style", "left", '71px'],
            ["style", "top", '-102px']
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
            { id: "eid4325", tween: [ "style", "${_NUVOLA}", "left", '-23px', { fromValue: '-23px'}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid4324", tween: [ "style", "${_NUVOLA}", "top", '76px', { fromValue: '76px'}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid3874", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_NUVOLA}', [] ], ""], position: 0 }         ]
      }
   }
},
"numerazio": {
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
      id: 'numerigruppo',
      type: 'group',
      rect: ['0','0','350','281','auto','auto'],
      c: [
      {
         type: 'image',
         id: 'Num-1',
         rect: ['0px','0px','350px','281px','auto','auto'],
         userClass: 'numeris',
         fill: ['rgba(0,0,0,0)','images/svgNum1.svg','0px','0px']
      },
      {
         type: 'image',
         id: 'Num-2',
         rect: ['0px','0px','350px','281px','auto','auto'],
         userClass: 'numeris',
         fill: ['rgba(0,0,0,0)','images/svgNum2.svg','0px','0px']
      },
      {
         type: 'image',
         id: 'Num-3',
         rect: ['0px','0px','350px','281px','auto','auto'],
         userClass: 'numeris',
         fill: ['rgba(0,0,0,0)','images/svgNum3.svg','0px','0px']
      },
      {
         type: 'image',
         id: 'Num-4',
         rect: ['0px','0px','350px','281px','auto','auto'],
         userClass: 'numeris',
         fill: ['rgba(0,0,0,0)','images/svgNum4.svg','0px','0px']
      },
      {
         type: 'image',
         id: 'Num-5',
         rect: ['0px','0px','350px','281px','auto','auto'],
         userClass: 'numeris',
         fill: ['rgba(0,0,0,0)','images/svgNum5.svg','0px','0px']
      },
      {
         type: 'image',
         id: 'Num-6',
         rect: ['0px','0px','350px','281px','auto','auto'],
         userClass: 'numeris',
         fill: ['rgba(0,0,0,0)','images/svgNum6.svg','0px','0px']
      },
      {
         type: 'image',
         id: 'Num-7',
         rect: ['0px','0px','350px','281px','auto','auto'],
         userClass: 'numeris',
         fill: ['rgba(0,0,0,0)','images/svgNum7.svg','0px','0px']
      },
      {
         type: 'image',
         id: 'Num-8',
         rect: ['0px','0px','350px','281px','auto','auto'],
         userClass: 'numeris',
         fill: ['rgba(0,0,0,0)','images/svgNum8.svg','0px','0px']
      },
      {
         type: 'image',
         id: 'Num-9',
         rect: ['0px','0px','350px','281px','auto','auto'],
         userClass: 'numeris',
         fill: ['rgba(0,0,0,0)','images/svgNum9.svg','0px','0px']
      },
      {
         type: 'image',
         id: 'Num-10',
         rect: ['0px','0px','350px','281px','auto','auto'],
         userClass: 'numeris',
         fill: ['rgba(0,0,0,0)','images/svgNum10.svg','0px','0px']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_numerigruppo}": [
            ["transform", "scaleY", '0'],
            ["transform", "rotateZ", '-180deg'],
            ["motion", "location", '175px 140.5px'],
            ["style", "opacity", '0'],
            ["transform", "scaleX", '0']
         ],
         "${_Num-3}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${_Num-1}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${_Num-9}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${_Num-4}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${_Num-5}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${_Num-7}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${_Num-10}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${_Num-6}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${_Num-2}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '281px'],
            ["style", "width", '350px']
         ],
         "${_Num-8}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2427,
         autoPlay: false,
         timeline: [
            { id: "eid2424", tween: [ "transform", "${_numerigruppo}", "rotateZ", '0deg', { fromValue: '-180deg'}], position: 0, duration: 786, easing: "swing" },
            { id: "eid2435", tween: [ "transform", "${_numerigruppo}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1884, duration: 0, easing: "swing" },
            { id: "eid2431", tween: [ "style", "${_numerigruppo}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 440, easing: "swing" },
            { id: "eid2434", tween: [ "style", "${_numerigruppo}", "opacity", '1', { fromValue: '1'}], position: 1884, duration: 0, easing: "swing" },
            { id: "eid2428", tween: [ "transform", "${_numerigruppo}", "scaleX", '0.9', { fromValue: '0'}], position: 0, duration: 786, easing: "swing" },
            { id: "eid2439", tween: [ "transform", "${_numerigruppo}", "scaleX", '0', { fromValue: '0.9'}], position: 1884, duration: 543 },
            { id: "eid2422", tween: [ "motion", "${_numerigruppo}", [[175,140.5,0,0],[414.45,85.73,421.02,22.34,335.45,17.8],[639.46,213.63,0,0]]], position: 0, duration: 786, easing: "swing" },
            { id: "eid3234", tween: [ "motion", "${_numerigruppo}", [[778.22,418.62,0,0],[639.5,213.45,0,0]]], position: 1884, duration: 0, easing: "swing" },
            { id: "eid2437", tween: [ "motion", "${_numerigruppo}", [[639.46,213.63,0,0],[823.85,251,-142.86,693.1]]], position: 1884, duration: 274 },
            { id: "eid2438", tween: [ "motion", "${_numerigruppo}", [[823.85,251,-67.92,329.52],[525,948.01,0,0]]], position: 2158, duration: 269 },
            { id: "eid2429", tween: [ "transform", "${_numerigruppo}", "scaleY", '0.9', { fromValue: '0'}], position: 0, duration: 786, easing: "swing" },
            { id: "eid2440", tween: [ "transform", "${_numerigruppo}", "scaleY", '0', { fromValue: '0.9'}], position: 1884, duration: 543 }         ]
      }
   }
},
"play": {
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
      id: 'Q0-Play',
      type: 'image',
      rect: ['0px','0px','80px','80px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/svg-play.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Q0-Play}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "left", '0px'],
            ["subproperty", "filter.saturate", '1']
         ],
         "${symbolSelector}": [
            ["style", "height", '80px'],
            ["style", "width", '80px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 393,
         autoPlay: false,
         timeline: [
            { id: "eid11553", tween: [ "transform", "${_Q0-Play}", "scaleX", '0.8', { fromValue: '1'}], position: 0, duration: 223, easing: "swing" },
            { id: "eid11554", tween: [ "transform", "${_Q0-Play}", "scaleX", '1', { fromValue: '0.8'}], position: 223, duration: 170, easing: "swing" },
            { id: "eid11551", tween: [ "transform", "${_Q0-Play}", "scaleY", '0.8', { fromValue: '1'}], position: 0, duration: 223, easing: "swing" },
            { id: "eid11552", tween: [ "transform", "${_Q0-Play}", "scaleY", '1', { fromValue: '0.8'}], position: 223, duration: 170, easing: "swing" }         ]
      }
   }
},
"FUMELLO": {
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
      rect: ['0px','0px','446px','287px','auto','auto'],
      userClass: 'fumello',
      id: 'Fumello',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Fumello-Q9.png','0px','0px','445.97px','286.67px']
   },
   {
      rect: ['-8px','172px','466px','287px','auto','auto'],
      userClass: 'fume',
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   },
   {
      rect: ['333px','140px','auto','auto','auto','auto'],
      id: 'play',
      transform: [[],[],[],['0.84','0.84']],
      type: 'rect',
      userClass: 'playvoce'
   }],
   symbolInstances: [
   {
      id: 'play',
      symbolName: 'play'
   }   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '287px'],
            ["style", "width", '446px']
         ],
         "${_Rectangle}": [
            ["style", "top", '-69px'],
            ["style", "opacity", '0'],
            ["style", "-webkit-transform-origin", [50,91], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,91],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,91],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,91],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,91],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_play}": [
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.84'],
            ["transform", "scaleX", '0.84'],
            ["style", "left", '333px'],
            ["style", "top", '136px']
         ],
         "${_Fumello}": [
            ["style", "top", '-8px'],
            ["style", "height", '287px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "width", '446px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1500,
         autoPlay: false,
         labels: {
            "ENTRATA": 0,
            "USCITA": 1000
         },
         timeline: [
            { id: "eid6395", tween: [ "style", "${_play}", "top", '329px', { fromValue: '136px'}], position: 0, duration: 484, easing: "easeOutBack" },
            { id: "eid6396", tween: [ "style", "${_play}", "top", '140px', { fromValue: '329px'}], position: 1000, duration: 500, easing: "easeOutBack" },
            { id: "eid96", tween: [ "style", "${_Rectangle}", "top", '172px', { fromValue: '-69px'}], position: 0, duration: 484, easing: "easeOutBack" },
            { id: "eid511", tween: [ "style", "${_Rectangle}", "top", '-65px', { fromValue: '172px'}], position: 1000, duration: 500, easing: "easeOutBack" },
            { id: "eid93", tween: [ "style", "${_Fumello}", "top", '177px', { fromValue: '-8px'}], position: 0, duration: 484, easing: "easeOutBack" },
            { id: "eid95", tween: [ "style", "${_Fumello}", "top", '0px', { fromValue: '177px'}], position: 1000, duration: 500, easing: "easeOutBack" }         ]
      }
   }
},
"MENUz": {
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
      rect: ['-50px','12px','1260px','235px','auto','auto'],
      id: 'Fondo-Menu',
      opacity: 0.7,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/G-Menu.png','0px','0px']
   },
   {
      id: 'HOME_butt',
      type: 'rect',
      userClass: 'home',
      rect: ['55px','72px','auto','auto','auto','auto']
   },
   {
      rect: ['1033px','82px','auto','auto','auto','auto'],
      id: 'NEXT',
      transform: [[0,0],[],[],['0.58314','0.58314']],
      type: 'rect',
      userClass: 'next'
   },
   {
      rect: ['17.6%','30.3%','90px','70px','auto','auto'],
      userClass: 'fumnum1',
      id: 'Numero_1',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/svgBWNum1.svg','0px','0px']
   },
   {
      rect: ['24.5%','30.3%','90px','70px','auto','auto'],
      userClass: 'fumnum2',
      id: 'Numero_2',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/svgBWNum2.svg','0px','0px']
   },
   {
      rect: ['31.3%','30.3%','90px','70px','auto','auto'],
      userClass: 'fumnum3',
      id: 'Numero_3',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/svgBWNum3.svg','0px','0px']
   },
   {
      rect: ['38.1%','30.3%','90px','70px','auto','auto'],
      userClass: 'fumnum4',
      id: 'Numero_4',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/svgBWNum4.svg','0px','0px']
   },
   {
      rect: ['45.1%','30.3%','90px','70px','auto','auto'],
      userClass: 'fumnum5',
      id: 'Numero_5',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/svgBWNum5.svg','0px','0px']
   },
   {
      type: 'image',
      id: 'Num-6',
      rect: ['606px','72px','90px','70px','auto','auto'],
      userClass: 'fumnum6',
      fill: ['rgba(0,0,0,0)','images/svgBWNum6.svg','0px','0px']
   },
   {
      type: 'image',
      id: 'Num-7',
      rect: ['689px','72px','90px','70px','auto','auto'],
      userClass: 'fumnum7',
      fill: ['rgba(0,0,0,0)','images/svgBWNum7.svg','0px','0px']
   },
   {
      type: 'image',
      id: 'Num-8',
      rect: ['773px','72px','90px','70px','auto','auto'],
      userClass: 'fumnum8',
      fill: ['rgba(0,0,0,0)','images/svgBWNum8.svg','0px','0px']
   },
   {
      type: 'image',
      id: 'Num-9',
      rect: ['856px','72px','90px','70px','auto','auto'],
      userClass: 'fumnum9',
      fill: ['rgba(0,0,0,0)','images/svgBWNum9.svg','0px','0px']
   },
   {
      type: 'image',
      id: 'Num-10',
      rect: ['938px','72px','90px','70px','auto','auto'],
      userClass: 'fumnum10',
      fill: ['rgba(0,0,0,0)','images/svgBWNum10.svg','0px','0px']
   },
   {
      rect: ['76px','129px','auto','auto','auto','auto'],
      id: 'musica',
      transform: [[0,0],[],[],['0.65','0.65']],
      type: 'rect',
      userClass: 'musica'
   },
   {
      id: 'Testina-Menu',
      type: 'rect',
      userClass: 'testina',
      rect: ['1013','0','auto','auto','auto','auto']
   },
   {
      rect: ['65px','7px','auto','auto','auto','auto'],
      id: 'reload',
      transform: [[0,0],[],[],['0.65','0.65']],
      type: 'rect',
      userClass: 'reload'
   },
   {
      rect: ['147px','82px','auto','auto','auto','auto'],
      id: 'PREV2',
      transform: [[0,0],[],[],['0.58929','0.57999']],
      type: 'rect',
      userClass: 'prev'
   }],
   symbolInstances: [
   {
      id: 'Testina-Menu',
      symbolName: 'testina'
   },
   {
      id: 'musica',
      symbolName: 'musica'
   },
   {
      id: 'PREV2',
      symbolName: 'PREV'
   },
   {
      id: 'NEXT',
      symbolName: 'NEXT'
   },
   {
      id: 'reload',
      symbolName: 'reload'
   },
   {
      id: 'HOME_butt',
      symbolName: 'HOME_butt'
   }   ]
   },
   states: {
      "Base State": {
         "${_reload}": [
            ["transform", "scaleX", '0.65'],
            ["style", "left", '109px'],
            ["transform", "scaleY", '0.65'],
            ["style", "top", '5px']
         ],
         "${_Num-9}": [
            ["style", "height", '70px'],
            ["style", "top", '72px'],
            ["style", "left", '856px'],
            ["style", "width", '90px']
         ],
         "${_musica}": [
            ["transform", "scaleX", '0.65'],
            ["style", "left", '60px'],
            ["transform", "scaleY", '0.65'],
            ["style", "top", '5px']
         ],
         "${_Num-7}": [
            ["style", "height", '70px'],
            ["style", "top", '72px'],
            ["style", "left", '689px'],
            ["style", "width", '90px']
         ],
         "${symbolSelector}": [
            ["style", "height", '238px'],
            ["style", "width", '1160px']
         ],
         "${_Fondo-Menu}": [
            ["style", "top", '12px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '235px'],
            ["style", "opacity", '0.7'],
            ["style", "left", '-50px'],
            ["style", "width", '1260px']
         ],
         "${_Numero_4}": [
            ["style", "top", '30.25%'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '70px'],
            ["style", "opacity", '1'],
            ["style", "left", '38.1%'],
            ["style", "width", '90px']
         ],
         "${_Numero_5}": [
            ["style", "top", '30.25%'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '70px'],
            ["style", "opacity", '1'],
            ["style", "left", '45.11%'],
            ["style", "width", '90px']
         ],
         "${_Num-10}": [
            ["style", "height", '70px'],
            ["style", "top", '72px'],
            ["style", "left", '938px'],
            ["style", "width", '90px']
         ],
         "${_Numero_1}": [
            ["style", "top", '30.25%'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '70px'],
            ["style", "opacity", '1'],
            ["style", "left", '17.6%'],
            ["style", "width", '90px']
         ],
         "${_HOME_butt}": [
            ["style", "top", '72px'],
            ["transform", "scaleY", '0.59344'],
            ["style", "overflow", 'hidden'],
            ["transform", "scaleX", '0.59344'],
            ["style", "left", '55px']
         ],
         "${_Numero_3}": [
            ["style", "top", '30.25%'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '70px'],
            ["style", "opacity", '1'],
            ["style", "left", '31.26%'],
            ["style", "width", '90px']
         ],
         "${_NEXT}": [
            ["transform", "scaleX", '0.58314'],
            ["style", "top", '82px'],
            ["transform", "scaleY", '0.58314'],
            ["style", "left", '1033px']
         ],
         "${_Num-6}": [
            ["style", "height", '70px'],
            ["style", "top", '72px'],
            ["style", "left", '606px'],
            ["style", "width", '90px']
         ],
         "${_Num-8}": [
            ["style", "height", '70px'],
            ["style", "top", '72px'],
            ["style", "left", '773px'],
            ["style", "width", '90px']
         ],
         "${_Numero_2}": [
            ["style", "top", '30.25%'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '70px'],
            ["style", "opacity", '1'],
            ["style", "left", '24.54%'],
            ["style", "width", '90px']
         ],
         "${_PREV2}": [
            ["transform", "scaleX", '0.58929'],
            ["style", "top", '82px'],
            ["transform", "scaleY", '0.57999'],
            ["style", "left", '147px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 196,
         autoPlay: false,
         timeline: [
            { id: "eid3720", tween: [ "style", "${_musica}", "left", '60px', { fromValue: '60px'}], position: 196, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3731", tween: [ "style", "${_reload}", "top", '5px', { fromValue: '5px'}], position: 196, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3723", tween: [ "style", "${_reload}", "left", '109px', { fromValue: '109px'}], position: 196, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3728", tween: [ "style", "${_musica}", "top", '5px', { fromValue: '5px'}], position: 196, duration: 0, easing: "easeInOutQuad" }         ]
      }
   }
},
"Menu": {
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
      id: 'MENUz',
      type: 'rect',
      rect: ['427px','-62px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'MENUz',
      symbolName: 'MENUz'
   }   ]
   },
   states: {
      "Base State": {
         "${_MENUz}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '238px'],
            ["style", "width", '1160px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 384,
         autoPlay: false,
         labels: {
            "chiusura": 223
         },
         timeline: [
            { id: "eid549", tween: [ "style", "${_MENUz}", "top", '-86px', { fromValue: '0px'}], position: 0, duration: 196, easing: "easeInOutQuad" },
            { id: "eid625", tween: [ "style", "${_MENUz}", "top", '-2px', { fromValue: '-86px'}], position: 223, duration: 161, easing: "easeInOutQuad" }         ]
      }
   }
},
"musica": {
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
      userClass: 'musicasvg',
      id: 'Q0-Music',
      type: 'image',
      rect: ['0px','0px','80px','80px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/svg-music.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '80px'],
            ["style", "width", '80px']
         ],
         "${_Q0-Music}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "left", '0px'],
            ["subproperty", "filter.saturate", '1']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 393,
         autoPlay: false,
         timeline: [
            { id: "eid11553", tween: [ "transform", "${_Q0-Music}", "scaleX", '0.8', { fromValue: '1'}], position: 0, duration: 223, easing: "swing" },
            { id: "eid11554", tween: [ "transform", "${_Q0-Music}", "scaleX", '1', { fromValue: '0.8'}], position: 223, duration: 170, easing: "swing" },
            { id: "eid11551", tween: [ "transform", "${_Q0-Music}", "scaleY", '0.8', { fromValue: '1'}], position: 0, duration: 223, easing: "swing" },
            { id: "eid11552", tween: [ "transform", "${_Q0-Music}", "scaleY", '1', { fromValue: '0.8'}], position: 223, duration: 170, easing: "swing" }         ]
      }
   }
},
"HOME_butt": {
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
      transform: [],
      fill: ['rgba(0,0,0,0)','images/G-HOME.png','0px','0px'],
      id: 'HOME',
      type: 'image',
      rect: ['0px','0px','103px','97px','auto','auto'],
      boxShadow: ['inset',8,3,18,6,'rgba(0,0,0,0.648438)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_HOME}": [
            ["subproperty", "boxShadow.inset", 'inset'],
            ["subproperty", "boxShadow.color", 'rgba(225,0,0,0.65)'],
            ["transform", "scaleX", '1'],
            ["style", "left", '0px'],
            ["style", "width", '103px'],
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["subproperty", "boxShadow.blur", '0px'],
            ["style", "height", '97px'],
            ["subproperty", "boxShadow.offsetV", '0px'],
            ["subproperty", "boxShadow.offsetH", '0px'],
            ["subproperty", "boxShadow.spread", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '97px'],
            ["style", "width", '103px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 406,
         autoPlay: false,
         timeline: [
            { id: "eid355", tween: [ "transform", "${_HOME}", "scaleY", '0.81', { fromValue: '1'}], position: 0, duration: 218 },
            { id: "eid357", tween: [ "transform", "${_HOME}", "scaleY", '1', { fromValue: '0.81'}], position: 218, duration: 146 },
            { id: "eid354", tween: [ "transform", "${_HOME}", "scaleX", '0.81', { fromValue: '1'}], position: 0, duration: 218 },
            { id: "eid356", tween: [ "transform", "${_HOME}", "scaleX", '1', { fromValue: '0.81'}], position: 218, duration: 146 }         ]
      }
   }
},
"NEXT": {
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
      transform: [[0,0],[],[],['0.77','0.77']],
      type: 'image',
      id: 'NextImg',
      rect: ['-8px','-11px','72px','98px','auto','auto'],
      clip: ['rect(-8px 79px 107px -14px)'],
      fill: ['rgba(0,0,0,0)','images/G-Next.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_NextImg}": [
            ["style", "top", '-11px'],
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '98px'],
            ["style", "left", '-8px'],
            ["style", "clip", [-8,79,107,-14], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "width", '72px']
         ],
         "${symbolSelector}": [
            ["style", "height", '76px'],
            ["style", "width", '56px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 140,
         autoPlay: false,
         timeline: [
            { id: "eid1367", tween: [ "transform", "${_NextImg}", "scaleX", '0.81', { fromValue: '1'}], position: 0, duration: 75 },
            { id: "eid1368", tween: [ "transform", "${_NextImg}", "scaleX", '1', { fromValue: '0.81'}], position: 75, duration: 50 },
            { id: "eid1369", tween: [ "transform", "${_NextImg}", "scaleY", '0.81', { fromValue: '1'}], position: 0, duration: 75 },
            { id: "eid1370", tween: [ "transform", "${_NextImg}", "scaleY", '1', { fromValue: '0.81'}], position: 75, duration: 50 }         ]
      }
   }
},
"PREV": {
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
      type: 'image',
      rect: ['-8px','-11px','72px','98px','auto','auto'],
      id: 'NextImg',
      transform: [[0,0],[],[],['0.77','0.77']],
      clip: ['rect(-8px 79px 107px -14px)'],
      fill: ['rgba(0,0,0,0)','images/G-Prev.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_NextImg}": [
            ["style", "top", '-11px'],
            ["style", "height", '98px'],
            ["transform", "scaleY", '1'],
            ["style", "overflow", 'hidden'],
            ["transform", "scaleX", '1'],
            ["style", "clip", [-8,79,107,-14], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '-8px'],
            ["style", "width", '72px']
         ],
         "${symbolSelector}": [
            ["style", "height", '76px'],
            ["style", "width", '56px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 140,
         autoPlay: false,
         timeline: [
            { id: "eid1367", tween: [ "transform", "${_NextImg}", "scaleX", '0.81', { fromValue: '1'}], position: 0, duration: 75 },
            { id: "eid1368", tween: [ "transform", "${_NextImg}", "scaleX", '1', { fromValue: '0.81'}], position: 75, duration: 50 },
            { id: "eid1369", tween: [ "transform", "${_NextImg}", "scaleY", '0.81', { fromValue: '1'}], position: 0, duration: 75 },
            { id: "eid1370", tween: [ "transform", "${_NextImg}", "scaleY", '1', { fromValue: '0.81'}], position: 75, duration: 50 }         ]
      }
   }
},
"testina": {
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
      id: 'Testina',
      type: 'image',
      rect: ['0px','0px','84px','97px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/G-Testina.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Testina}": [
            ["style", "top", '0px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '97px'],
            ["style", "-webkit-transform-origin", [50,91], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,91],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,91],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,91],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,91],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["style", "width", '84px']
         ],
         "${symbolSelector}": [
            ["style", "height", '97px'],
            ["style", "width", '84px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 610,
         autoPlay: false,
         timeline: [
            { id: "eid5429", tween: [ "transform", "${_Testina}", "rotateZ", '21deg', { fromValue: '0deg'}], position: 0, duration: 201, easing: "easeInOutBounce" },
            { id: "eid5430", tween: [ "transform", "${_Testina}", "rotateZ", '-15deg', { fromValue: '21deg'}], position: 201, duration: 224, easing: "easeInOutBounce" },
            { id: "eid5431", tween: [ "transform", "${_Testina}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 425, duration: 185, easing: "easeInOutBounce" }         ]
      }
   }
},
"reload": {
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
      type: 'image',
      id: 'reload',
      rect: ['0px','0px','80px','80px','auto','auto'],
      userClass: 'reload',
      fill: ['rgba(0,0,0,0)','images/svg-reload.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_reload}": [
            ["transform", "scaleX", '1'],
            ["style", "left", '0px'],
            ["transform", "scaleY", '1'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '80px'],
            ["style", "width", '80px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 393,
         autoPlay: false,
         timeline: [
            { id: "eid3609", tween: [ "transform", "${_reload}", "scaleX", '0.8', { fromValue: '1'}], position: 0, duration: 223, easing: "swing" },
            { id: "eid3610", tween: [ "transform", "${_reload}", "scaleX", '1', { fromValue: '0.8'}], position: 223, duration: 170, easing: "swing" },
            { id: "eid3611", tween: [ "transform", "${_reload}", "scaleY", '0.8', { fromValue: '1'}], position: 0, duration: 223, easing: "swing" },
            { id: "eid3612", tween: [ "transform", "${_reload}", "scaleY", '1', { fromValue: '0.8'}], position: 223, duration: 170, easing: "swing" }         ]
      }
   }
},
"NUVOLA": {
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
      userClass: 'nuvo',
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Nuvola',
      rect: ['0px','-10px','185px','132px','auto','auto'],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/G-Nuvola.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Nuvola}": [
            ["style", "top", '22px'],
            ["style", "height", '132px'],
            ["subproperty", "filter.drop-shadow.offsetH", '0px'],
            ["style", "left", '-180px'],
            ["style", "width", '185px']
         ],
         "${symbolSelector}": [
            ["style", "height", '132px'],
            ["style", "width", '185px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 105000,
         autoPlay: false,
         timeline: [
            { id: "eid183", tween: [ "style", "${_Nuvola}", "left", '1003px', { fromValue: '-180px'}], position: 0, duration: 105000, easing: "swing" },
            { id: "eid185", tween: [ "style", "${_Nuvola}", "top", '-83px', { fromValue: '22px'}], position: 0, duration: 105000, easing: "swing" }         ]
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
      rect: ['139px','72px','231px','267px','auto','auto'],
      id: 'Coda',
      transform: [[],['7'],[],['-0.88538','0.84166']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Coda.png','0px','0px']
   },
   {
      rect: ['275px','132px','147px','179px','auto','auto'],
      id: 'Q9-scoia-braccio',
      transform: [[],[],[],['0.62642','0.62642']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Q9-scoia-braccio.png','0px','0px']
   },
   {
      id: 'Q9-scoia-corpo',
      type: 'image',
      rect: ['127px','179px','205px','321px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q9-scoia-corpo.png','0px','0px']
   },
   {
      rect: ['187px','-108px','211px','400px','auto','auto'],
      id: 'Q9-scoia-testa',
      transform: [[],[],[],['0.9693','0.9693'],['42.9298%','77.166%']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Q9-scoia-testa.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Q9-scoia-braccio}": [
            ["style", "top", '132px'],
            ["transform", "scaleY", '0.62642'],
            ["style", "height", '179px'],
            ["transform", "scaleX", '0.62642'],
            ["style", "left", '275px'],
            ["style", "width", '147px']
         ],
         "${_Coda}": [
            ["style", "top", '56px'],
            ["style", "-webkit-transform-origin", [15.02,94.45], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [15.02,94.45],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [15.02,94.45],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [15.02,94.45],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [15.02,94.45],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.84166'],
            ["transform", "rotateZ", '7deg'],
            ["style", "height", '267px'],
            ["transform", "scaleX", '-0.88538'],
            ["style", "left", '139px'],
            ["style", "width", '231px']
         ],
         "${symbolSelector}": [
            ["style", "height", '500px'],
            ["style", "width", '398px']
         ],
         "${_Q9-scoia-testa}": [
            ["style", "-webkit-transform-origin", [42.93,77.17], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [42.93,77.17],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [42.93,77.17],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [42.93,77.17],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [42.93,77.17],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.9693'],
            ["transform", "scaleX", '0.9693'],
            ["style", "left", '187px'],
            ["style", "top", '-108px']
         ],
         "${_Q9-scoia-corpo}": [
            ["style", "top", '179px'],
            ["style", "height", '321px'],
            ["style", "left", '127px'],
            ["style", "width", '205px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2339,
         autoPlay: false,
         labels: {
            "coda": 184,
            "ani": 669
         },
         timeline: [
            { id: "eid4326", tween: [ "style", "${_Coda}", "top", '56px', { fromValue: '56px'}], position: 0, duration: 0, easing: "easeOutBack" },
            { id: "eid4052", tween: [ "transform", "${_Coda}", "rotateZ", '11deg', { fromValue: '7deg'}], position: 184, duration: 125, easing: "easeInOutQuad" },
            { id: "eid4053", tween: [ "transform", "${_Coda}", "rotateZ", '-4deg', { fromValue: '11deg'}], position: 309, duration: 112, easing: "easeInOutQuad" },
            { id: "eid4054", tween: [ "transform", "${_Coda}", "rotateZ", '7deg', { fromValue: '-4deg'}], position: 421, duration: 79, easing: "easeInOutQuad" },
            { id: "eid4109", tween: [ "transform", "${_Coda}", "rotateZ", '-10deg', { fromValue: '7deg'}], position: 1045, duration: 272, easing: "easeInOutQuad" },
            { id: "eid4110", tween: [ "transform", "${_Coda}", "rotateZ", '28deg', { fromValue: '-10deg'}], position: 1317, duration: 350, easing: "easeInOutQuad" },
            { id: "eid4111", tween: [ "transform", "${_Coda}", "rotateZ", '7deg', { fromValue: '28deg'}], position: 1667, duration: 203, easing: "easeInOutQuad" }         ]
      }
   }
},
"cespuglissimo": {
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
      rect: ['-203px','-104px','1200px','617px','auto','auto'],
      id: 'Q9-Cespuglio8-11-14',
      transform: [[],[],[],['0.66264','0.66264']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Q9-Cespuglio8-11-14.png','0px','0px']
   },
   {
      rect: ['82px','80px','500px','306px','auto','auto'],
      id: 'Q9-Cespuglio12',
      transform: [[],[],[],['0.66264','0.66264']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Q9-Cespuglio12.png','0px','0px']
   },
   {
      rect: ['-193px','109px','1200px','386px','auto','auto'],
      id: 'Q9-Cespuglio5-7',
      transform: [[],[],[],['0.66264','0.66264']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Q9-Cespuglio5-7.png','0px','0px']
   },
   {
      rect: ['52px','289px','auto','auto','auto','auto'],
      id: 'bunny1',
      transform: [[],[],[],['0.78179','0.78179']],
      type: 'rect',
      userClass: 'bunny1'
   },
   {
      rect: ['-203px','224px','1200px','313px','auto','auto'],
      id: 'Q9-Cespuglio1-4',
      transform: [[],[],[],['0.66264','0.66264']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Q9-Cespuglio1-4.png','0px','0px']
   }],
   symbolInstances: [
   {
      id: 'bunny1',
      symbolName: 'bunny'
   }   ]
   },
   states: {
      "Base State": {
         "${_Q9-Cespuglio8-11-14}": [
            ["style", "top", '-104px'],
            ["transform", "scaleX", '0.66264'],
            ["transform", "scaleY", '0.66264'],
            ["style", "left", '-203px']
         ],
         "${_bunny1}": [
            ["style", "top", '289px'],
            ["transform", "scaleY", '0.78179'],
            ["style", "left", '52px'],
            ["transform", "scaleX", '0.78179']
         ],
         "${_Q9-Cespuglio1-4}": [
            ["style", "top", '224px'],
            ["transform", "scaleX", '0.66264'],
            ["transform", "scaleY", '0.66264'],
            ["style", "left", '-203px']
         ],
         "${_Q9-Cespuglio5-7}": [
            ["style", "top", '109px'],
            ["transform", "scaleX", '0.66264'],
            ["transform", "scaleY", '0.66264'],
            ["style", "left", '-193px']
         ],
         "${_Q9-Cespuglio12}": [
            ["style", "top", '80px'],
            ["transform", "scaleX", '0.66264'],
            ["transform", "scaleY", '0.66264'],
            ["style", "left", '82px']
         ],
         "${symbolSelector}": [
            ["style", "height", '484px'],
            ["style", "width", '805px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
      }
   }
},
"alberogufo": {
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
      id: 'Q9-albero',
      type: 'image',
      rect: ['0px','0px','608px','698px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q9-albero.png','0px','0px']
   },
   {
      rect: ['242px','402px','173','232','auto','auto'],
      id: 'gufo',
      type: 'group',
      transform: [[],['21'],[],['0.39974','0.39974']],
      c: [
      {
         rect: ['-39px','85px','248px','200px','auto','auto'],
         filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0.75)',5,5,31],
         id: 'Q9-gufo-corpo',
         transform: [[],[],[],['0.69733','0.69733']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Q9-gufo-corpo.png','0px','0px']
      },
      {
         rect: ['13px','0px','150px','116px','auto','auto'],
         id: 'Q9-gufo-testa',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Q9-gufo-testa.png','0px','0px']
      }]
   },
   {
      id: 'Q9-albero-toppa',
      type: 'image',
      rect: ['238px','384px','152px','205px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q9-albero-toppa.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Q9-gufo-testa}": [
            ["style", "top", '0px'],
            ["style", "-webkit-transform-origin", [50.89,91.23], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50.89,91.23],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50.89,91.23],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50.89,91.23],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50.89,91.23],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '0deg'],
            ["style", "left", '13px']
         ],
         "${_Q9-albero}": [
            ["style", "height", '698px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '608px']
         ],
         "${_Q9-albero-toppa}": [
            ["style", "height", '205px'],
            ["style", "top", '384px'],
            ["style", "left", '238px'],
            ["style", "width", '152px']
         ],
         "${symbolSelector}": [
            ["style", "height", '698px'],
            ["style", "width", '608px']
         ],
         "${_gufo}": [
            ["transform", "scaleY", '0.39974'],
            ["transform", "rotateZ", '21deg'],
            ["transform", "scaleX", '0.39974'],
            ["motion", "location", '328.5px 518px']
         ],
         "${_Q9-gufo-corpo}": [
            ["subproperty", "filter.drop-shadow.color", 'rgba(0,0,0,0.75)'],
            ["transform", "scaleX", '0.69733'],
            ["style", "left", '-39px'],
            ["subproperty", "filter.drop-shadow.offsetH", '5px'],
            ["style", "top", '85px'],
            ["transform", "scaleY", '0.69733'],
            ["subproperty", "filter.drop-shadow.blur", '31px'],
            ["subproperty", "filter.drop-shadow.offsetV", '5px'],
            ["style", "-webkit-transform-origin", [51.38,11.62], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [51.38,11.62],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [51.38,11.62],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [51.38,11.62],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [51.38,11.62],{valueTemplate:'@@0@@% @@1@@%'}]
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2429.9446251452,
         autoPlay: false,
         labels: {
            "gufoani": 455
         },
         timeline: [
            { id: "eid4336", tween: [ "transform", "${_Q9-gufo-testa}", "rotateZ", '29deg', { fromValue: '0deg'}], position: 1125, duration: 416, easing: "easeInOutQuad" },
            { id: "eid4337", tween: [ "transform", "${_Q9-gufo-testa}", "rotateZ", '0deg', { fromValue: '29deg'}], position: 1542, duration: 255, easing: "easeInOutQuad" },
            { id: "eid4334", tween: [ "motion", "${_gufo}", [[328.5,518,0,0],[345.75,455.1,0,0]]], position: 455, duration: 963, easing: "easeInOutQuad" },
            { id: "eid4342", tween: [ "motion", "${_gufo}", [[345.75,455.1,0,0],[328.9,517.68,0,0]]], position: 1822, duration: 608, easing: "easeInOutQuad" }         ]
      }
   }
},
"bunny": {
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
      id: 'animatorebunny',
      type: 'group',
      rect: ['24','-1','80','206','auto','auto'],
      c: [
      {
         rect: ['-60px','6px','200px','287px','auto','auto'],
         id: 'Q9-bunny-corpo',
         transform: [[],[],[],['0.38683','0.38683']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Q9-bunny-corpo.png','0px','0px']
      },
      {
         rect: ['-50px','109px','124px','200px','auto','auto'],
         id: 'Q9-bunny-braccio',
         transform: [[],['-28'],[],['0.21072','0.21072']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Q9-bunny-braccio.png','0px','0px']
      },
      {
         rect: ['5px','108px','124px','200px','auto','auto'],
         id: 'Q9-bunny-braccioCopy',
         transform: [[],['21'],[],['-0.21','0.21072']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Q9-bunny-braccio.png','0px','0px']
      },
      {
         rect: ['-103px','-273px','287px','400px','auto','auto'],
         id: 'Q9-bunny-testa',
         transform: [[],[],[],['0.27755','0.27755'],['49.5442%','94.3265%']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Q9-bunny-testa.png','0px','0px']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Q9-bunny-corpo}": [
            ["style", "top", '6px'],
            ["transform", "scaleX", '0.38683'],
            ["transform", "scaleY", '0.38683'],
            ["style", "left", '-60px']
         ],
         "${symbolSelector}": [
            ["style", "height", '205px'],
            ["style", "width", '103px']
         ],
         "${_Q9-bunny-testa}": [
            ["style", "top", '-273px'],
            ["transform", "scaleY", '0.27755'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.27755'],
            ["style", "left", '-103px'],
            ["style", "-webkit-transform-origin", [49.54,94.33], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [49.54,94.33],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [49.54,94.33],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [49.54,94.33],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [49.54,94.33],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Q9-bunny-braccioCopy}": [
            ["style", "top", '108px'],
            ["transform", "scaleY", '0.21072'],
            ["transform", "rotateZ", '21deg'],
            ["transform", "scaleX", '-0.21'],
            ["style", "left", '5px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_animatorebunny}": [
            ["motion", "location", '63.496609172601px 102.2483018897px']
         ],
         "${_Q9-bunny-braccio}": [
            ["style", "top", '109px'],
            ["transform", "scaleY", '0.21072'],
            ["transform", "rotateZ", '-28deg'],
            ["transform", "scaleX", '0.21072'],
            ["style", "left", '-50px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}]
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1554,
         autoPlay: false,
         labels: {
            "uscita": 222
         },
         timeline: [
            { id: "eid4364", tween: [ "transform", "${_Q9-bunny-braccioCopy}", "rotateZ", '-56deg', { fromValue: '21deg'}], position: 729, duration: 360, easing: "easeInOutQuad" },
            { id: "eid4366", tween: [ "transform", "${_Q9-bunny-braccioCopy}", "rotateZ", '21deg', { fromValue: '-56deg'}], position: 1089, duration: 224, easing: "easeInOutQuad" },
            { id: "eid4369", tween: [ "transform", "${_Q9-bunny-testa}", "rotateZ", '28deg', { fromValue: '0deg'}], position: 644, duration: 611, easing: "easeInOutQuad" },
            { id: "eid4370", tween: [ "transform", "${_Q9-bunny-testa}", "rotateZ", '0deg', { fromValue: '28deg'}], position: 1256, duration: 244, easing: "easeInOutQuad" },
            { id: "eid4365", tween: [ "transform", "${_Q9-bunny-braccio}", "rotateZ", '52deg', { fromValue: '-28deg'}], position: 729, duration: 360, easing: "easeInOutQuad" },
            { id: "eid4367", tween: [ "transform", "${_Q9-bunny-braccio}", "rotateZ", '-28deg', { fromValue: '52deg'}], position: 1089, duration: 224, easing: "easeInOutQuad" },
            { id: "eid4360", tween: [ "motion", "${_animatorebunny}", [[63.5,102.26,0,0],[63.17,1.66,0,0]]], position: 222, duration: 844, easing: "swing" },
            { id: "eid4361", tween: [ "motion", "${_animatorebunny}", [[63.18,1.67,0,0],[63.18,27.7,0,0]]], position: 1066, duration: 248, easing: "swing" }         ]
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
})(jQuery, AdobeEdge, "Quadro-09");
