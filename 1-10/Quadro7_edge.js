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
            id:'FUMELLO',
            type:'rect',
            rect:['521px','-232px','auto','auto','auto','auto']
         },
         {
            id:'numerazio',
            type:'rect',
            rect:['54','30','auto','auto','auto','auto']
         },
         {
            id:'trigger-coda',
            type:'rect',
            rect:['605px','392px','140px','197px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'Menu',
            type:'rect',
            rect:['-67','520','auto','auto','auto','auto'],
            userClass:"menu"
         },
         {
            id:'Q7-erba-fiore',
            type:'image',
            rect:['174','575px','97px','106px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Q7-erba-fiore.png",'0px','0px']
         },
         {
            id:'Scoiattolo',
            type:'rect',
            rect:['347','77','auto','auto','auto','auto']
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
            id:'Menu',
            symbolName:'Menu'
         },
         {
            id:'NUVOLA',
            symbolName:'NUVOLA'
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
            ["style", "opacity", '0']
         ],
         "${_FUMELLO}": [
            ["style", "top", '-232px'],
            ["style", "left", '521px']
         ],
         "${_Q7-erba-fiore}": [
            ["style", "top", '575px'],
            ["style", "height", '106px'],
            ["style", "width", '97px']
         ],
         "${_G-Cielo}": [
            ["style", "left", '-111px'],
            ["style", "top", '-15px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '768px'],
            ["style", "width", '1024px']
         ],
         "${_NUVOLA}": [
            ["style", "top", '38px'],
            ["style", "opacity", '0.95'],
            ["style", "left", '247px']
         ],
         "${_Menu}": [
            ["style", "left", '-68px'],
            ["style", "top", '697px']
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
            { id: "eid2422", tween: [ "motion", "${_numerigruppo}", [[175,140.5,0,0],[414.45,85.73,421.02,22.34,335.45,17.8],[725.82,117.6,0,0]]], position: 0, duration: 786, easing: "swing" },
            { id: "eid2437", tween: [ "motion", "${_numerigruppo}", [[725.82,117.6,0,0],[778.22,418.62,-142.86,693.1]]], position: 1884, duration: 274 },
            { id: "eid3234", tween: [ "motion", "${_numerigruppo}", [[778.22,418.62,0,0],[725.82,117.6,0,0]]], position: 1884, duration: 0, easing: "swing" },
            { id: "eid2438", tween: [ "motion", "${_numerigruppo}", [[778.22,418.62,-67.92,329.52],[525,948.01,0,0]]], position: 2158, duration: 269 },
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
      fill: ['rgba(0,0,0,0)','images/Fumello-Q7.png','0px','0px','445.97px','286.67px']
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
         "${_Fumello}": [
            ["style", "top", '-8px'],
            ["style", "height", '287px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "width", '446px']
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
      type: 'image',
      id: 'Fondo-Menu',
      opacity: 0.7,
      rect: ['-50px','12px','1260px','235px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/G-Menu.png','0px','0px']
   },
   {
      id: 'HOME_butt',
      type: 'rect',
      rect: ['55px','71px','auto','auto','auto','auto'],
      userClass: 'home'
   },
   {
      type: 'rect',
      id: 'NEXT',
      rect: ['1033px','83px','auto','auto','auto','auto'],
      userClass: 'next',
      transform: [[0,0],[],[],['0.58314','0.58314']]
   },
   {
      userClass: 'fumnum1',
      rect: ['15.2%','31.9%','90px','70px','auto','auto'],
      id: 'Numero_1',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/svgBWNum1.svg','0px','0px']
   },
   {
      userClass: 'fumnum2',
      rect: ['22.1%','31.1%','90px','70px','auto','auto'],
      id: 'Numero_2',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/svgBWNum2.svg','0px','0px']
   },
   {
      userClass: 'fumnum3',
      rect: ['28.8%','31.1%','90px','70px','auto','auto'],
      id: 'Numero_3',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/svgBWNum3.svg','0px','0px']
   },
   {
      userClass: 'fumnum4',
      rect: ['35.7%','31.1%','90px','70px','auto','auto'],
      id: 'Numero_4',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/svgBWNum4.svg','0px','0px']
   },
   {
      userClass: 'fumnum5',
      rect: ['42.7%','31.1%','90px','70px','auto','auto'],
      id: 'Numero_5',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/svgBWNum5.svg','0px','0px']
   },
   {
      rect: ['578px','73px','90px','70px','auto','auto'],
      id: 'Num-6',
      userClass: 'fumnum6',
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/svgBWNum6.svg','0px','0px']
   },
   {
      rect: ['661px','73px','90px','70px','auto','auto'],
      id: 'Num-7',
      userClass: 'fumnum7',
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/svgBWNum7.svg','0px','0px']
   },
   {
      rect: ['745px','73px','90px','70px','auto','auto'],
      id: 'Num-8',
      userClass: 'fumnum8',
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/svgBWNum8.svg','0px','0px']
   },
   {
      rect: ['828px','73px','90px','70px','auto','auto'],
      id: 'Num-9',
      userClass: 'fumnum9',
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/svgBWNum9.svg','0px','0px']
   },
   {
      rect: ['910px','73px','90px','70px','auto','auto'],
      id: 'Num-10',
      userClass: 'fumnum10',
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/svgBWNum10.svg','0px','0px']
   },
   {
      type: 'rect',
      id: 'musica',
      rect: ['76px','129px','auto','auto','auto','auto'],
      userClass: 'musica',
      transform: [[0,0],[],[],['0.65','0.65']]
   },
   {
      id: 'Testina-Menu',
      type: 'rect',
      rect: ['1013','0','auto','auto','auto','auto'],
      userClass: 'testina'
   },
   {
      type: 'rect',
      id: 'reload',
      rect: ['65px','7px','auto','auto','auto','auto'],
      userClass: 'reload',
      transform: [[0,0],[],[],['0.65','0.65']]
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
         "${_musica}": [
            ["transform", "scaleX", '0.65'],
            ["style", "left", '60px'],
            ["transform", "scaleY", '0.65'],
            ["style", "top", '5px']
         ],
         "${_NEXT}": [
            ["transform", "scaleX", '0.58314'],
            ["style", "top", '83px'],
            ["transform", "scaleY", '0.58314'],
            ["style", "left", '1033px']
         ],
         "${_Numero_3}": [
            ["style", "top", '31.06%'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '70px'],
            ["style", "opacity", '1'],
            ["style", "left", '28.82%'],
            ["style", "width", '90px']
         ],
         "${_Numero_4}": [
            ["style", "top", '31.06%'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '70px'],
            ["style", "opacity", '1'],
            ["style", "left", '35.68%'],
            ["style", "width", '90px']
         ],
         "${_Numero_5}": [
            ["style", "top", '31.06%'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '70px'],
            ["style", "opacity", '1'],
            ["style", "left", '42.69%'],
            ["style", "width", '90px']
         ],
         "${_Num-9}": [
            ["style", "height", '70px'],
            ["style", "top", '73px'],
            ["style", "left", '828px'],
            ["style", "width", '90px']
         ],
         "${_HOME_butt}": [
            ["style", "top", '71px'],
            ["transform", "scaleY", '0.59344'],
            ["style", "overflow", 'hidden'],
            ["transform", "scaleX", '0.59344'],
            ["style", "left", '55px']
         ],
         "${_Num-8}": [
            ["style", "height", '70px'],
            ["style", "top", '73px'],
            ["style", "left", '745px'],
            ["style", "width", '90px']
         ],
         "${_Numero_2}": [
            ["style", "top", '31.06%'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '70px'],
            ["style", "opacity", '1'],
            ["style", "left", '22.12%'],
            ["style", "width", '90px']
         ],
         "${_Numero_1}": [
            ["style", "top", '31.9%'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '70px'],
            ["style", "opacity", '1'],
            ["style", "left", '15.18%'],
            ["style", "width", '90px']
         ],
         "${symbolSelector}": [
            ["style", "height", '238px'],
            ["style", "width", '1160px']
         ],
         "${_Num-6}": [
            ["style", "height", '70px'],
            ["style", "top", '73px'],
            ["style", "left", '578px'],
            ["style", "width", '90px']
         ],
         "${_Num-7}": [
            ["style", "height", '70px'],
            ["style", "top", '73px'],
            ["style", "left", '661px'],
            ["style", "width", '90px']
         ],
         "${_Num-10}": [
            ["style", "height", '70px'],
            ["style", "top", '73px'],
            ["style", "left", '910px'],
            ["style", "width", '90px']
         ],
         "${_Fondo-Menu}": [
            ["style", "top", '12px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '235px'],
            ["style", "opacity", '0.7'],
            ["style", "left", '-50px'],
            ["style", "width", '1260px']
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
      type: 'image',
      id: 'Q0-Music',
      rect: ['0px','0px','80px','80px','auto','auto'],
      userClass: 'musicasvg',
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
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/G-HOME.png','0px','0px'],
      id: 'HOME',
      rect: ['0px','0px','103px','97px','auto','auto'],
      transform: [],
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
      type: 'image',
      rect: ['-8px','-11px','72px','98px','auto','auto'],
      id: 'NextImg',
      transform: [[0,0],[],[],['0.77','0.77']],
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
      rect: ['0px','0px','80px','80px','auto','auto'],
      id: 'reload',
      userClass: 'reload',
      type: 'image',
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
      transform: [[],[],[],['-0.88538','0.84166'],['15.0171%','94.4475%']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Coda.png','0px','0px']
   },
   {
      id: 'Q7-scoiattolo-corpo',
      type: 'image',
      rect: ['119px','233px','187px','267px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q7-scoiattolo-corpo.png','0px','0px']
   },
   {
      rect: ['283px','262px','114px','81px','auto','auto'],
      id: 'Q7-scoiattolo-braccio-steso',
      transform: [[],['3'],[],[],['-3.3065%','15.5417%']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Q7-scoiattolo-braccio-steso.png','0px','0px']
   },
   {
      rect: ['185px','0px','176px','315px','auto','auto'],
      id: 'Q7-scoiattolo-testa',
      transform: [[],[],[],[],['43.941%','78.2424%']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Q7-scoiattolo-testa.png','0px','0px']
   },
   {
      id: 'Q7-scoiattolo-braccio-piegato',
      type: 'image',
      rect: ['170px','224px','103px','102px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Q7-scoiattolo-braccio-piegato.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Q7-scoiattolo-testa}": [
            ["style", "top", '0px'],
            ["style", "height", '315px'],
            ["style", "-webkit-transform-origin", [43.94,78.24], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [43.94,78.24],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [43.94,78.24],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [43.94,78.24],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [43.94,78.24],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '185px'],
            ["style", "width", '176px']
         ],
         "${_Q7-scoiattolo-corpo}": [
            ["style", "left", '119px'],
            ["style", "top", '233px']
         ],
         "${_Q7-scoiattolo-braccio-piegato}": [
            ["style", "left", '170px'],
            ["style", "top", '224px']
         ],
         "${_Q7-scoiattolo-braccio-steso}": [
            ["style", "-webkit-transform-origin", [-3.31,15.54], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [-3.31,15.54],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [-3.31,15.54],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [-3.31,15.54],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [-3.31,15.54],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '262px'],
            ["style", "left", '283px'],
            ["transform", "rotateZ", '3deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '500px'],
            ["style", "width", '398px']
         ],
         "${_Coda}": [
            ["style", "-webkit-transform-origin", [15.02,94.45], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [15.02,94.45],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [15.02,94.45],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [15.02,94.45],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [15.02,94.45],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.84166'],
            ["style", "top", '72px'],
            ["style", "height", '267px'],
            ["transform", "scaleX", '-0.88538'],
            ["style", "left", '139px'],
            ["style", "width", '231px']
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
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "Quadro-07");
